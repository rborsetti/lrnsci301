// Bring Them Home. Apollo 13 algebra mission
// One device per team, server-validated answers, SSE live state.

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const { generateTasks, totalTasks: TOTAL_TASKS } = require('./tasks.js');

const PORT = parseInt(process.env.PORT || '9805', 10);
const PUBLIC_DIR = path.join(__dirname, 'public');

// ---- State ----
// Party = {
//   code, status: 'lobby'|'started'|'ended', tasks: [...] | null,
//   briefingDismissed: boolean, teams: Map<teamId, Team>,
//   listeners: Set<res>, createdAt, startedAt, endedAt, finishCount
// }
// Team = {
//   id, name, players, joinedAt,
//   taskIndex, attempts: int, done, finishedAt, finishRank
// }
const parties = new Map();

const PARTY_TTL_MS = 1000 * 60 * 60 * 6;
setInterval(() => {
  const now = Date.now();
  for (const [code, party] of parties) {
    if (now - party.createdAt > PARTY_TTL_MS && party.listeners.size === 0) {
      parties.delete(code);
    }
  }
}, 60_000).unref();

function newPartyCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let attempt = 0; attempt < 20; attempt++) {
    let code = '';
    for (let i = 0; i < 4; i++) code += alphabet[crypto.randomInt(alphabet.length)];
    if (!parties.has(code)) return code;
  }
  throw new Error('failed to allocate unique party code');
}

function newTeamId() {
  return crypto.randomBytes(6).toString('base64url');
}

function publicTasks(tasks) {
  if (!tasks) return [];
  return tasks.map(({ id, title, story, equation, hint, solution, givens }) =>
    ({ id, title, story, equation, hint, solution, givens: givens || [] }));
}

function snapshot(party) {
  const total = (party.tasks && party.tasks.length) || party.taskCount || TOTAL_TASKS;
  return {
    code: party.code,
    status: party.status,
    createdAt: party.createdAt,
    startedAt: party.startedAt || null,
    endedAt: party.endedAt || null,
    totalTasks: total,
    maxTasks: TOTAL_TASKS,
    mode: party.mode || 'competition',
    briefingDismissed: !!party.briefingDismissed,
    countdownStartedAt: party.countdownStartedAt || null,
    progressRevealed: !!party.progressRevealed,
    serverNow: Date.now(),
    tasks: publicTasks(party.tasks),
    teams: [...party.teams.values()]
      .sort((a, b) => a.joinedAt - b.joinedAt)
      .map(t => ({
        id: t.id,
        name: t.name,
        players: t.players,
        taskIndex: t.taskIndex,
        tasksCompleted: t.taskIndex,
        progress: Math.round((t.taskIndex / total) * 100),
        attempts: t.attempts,
        done: t.done,
        finishedAt: t.finishedAt,
        finishRank: t.finishRank,
      })),
  };
}

function broadcast(party, event) {
  const payload = `event: ${event.type}\ndata: ${JSON.stringify(event.data)}\n\n`;
  for (const res of party.listeners) {
    try { res.write(payload); } catch (_) {}
  }
}
function broadcastState(party) {
  broadcast(party, { type: 'state', data: snapshot(party) });
}

function maybeAutoEnd(party) {
  if (party.status !== 'started') return;
  const allDone = party.teams.size > 0 && [...party.teams.values()].every(t => t.done);
  if (allDone) {
    party.status = 'ended';
    party.endedAt = Date.now();
  }
}

// ---- HTTP helpers ----

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...headers,
  });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 404, { error: 'not found' });
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-store' });
    res.end(data);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 1_000_000) { reject(new Error('body too large')); req.destroy(); return; }
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); } catch (_) { reject(new Error('invalid json')); }
    });
    req.on('error', reject);
  });
}

function normalizeCode(s) { return String(s || '').trim().toUpperCase(); }
function cleanString(s, maxLen) { return String(s ?? '').trim().slice(0, maxLen); }
function cleanPlayers(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(p => cleanString(p, 40)).filter(p => p.length > 0).slice(0, 12);
}

// ---- Handlers ----

async function handleCreateParty(req, res) {
  const code = newPartyCode();
  parties.set(code, {
    code,
    status: 'lobby',
    teams: new Map(),
    listeners: new Set(),
    createdAt: Date.now(),
    startedAt: null,
    endedAt: null,
    finishCount: 0,
    briefingDismissed: false,
    tasks: null,
    taskCount: TOTAL_TASKS,
    mode: 'competition',
    countdownStartedAt: null,
    progressRevealed: false,
  });
  send(res, 200, { code });
}

async function handleJoin(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'lobby') return send(res, 400, { error: 'party already started' });

  let body;
  try { body = await readBody(req); } catch (e) { return send(res, 400, { error: e.message }); }

  const name = cleanString(body.teamName, 40);
  if (!name) return send(res, 400, { error: 'crew name required' });
  const players = cleanPlayers(body.players);
  if (!players.length) return send(res, 400, { error: 'add at least one player' });

  for (const t of party.teams.values()) {
    if (t.name.toLowerCase() === name.toLowerCase()) {
      return send(res, 400, { error: 'a crew with that name already joined' });
    }
  }

  const team = {
    id: newTeamId(),
    name,
    players,
    joinedAt: Date.now(),
    taskIndex: 0,
    attempts: 0,
    done: false,
    finishedAt: null,
    finishRank: null,
  };
  party.teams.set(team.id, team);
  broadcastState(party);

  send(res, 200, {
    partyCode: party.code,
    teamId: team.id,
    teamName: team.name,
    players: team.players,
    partyStatus: party.status,
    totalTasks: TOTAL_TASKS,
  });
}

async function handleLeave(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'lobby') return send(res, 400, { error: 'cannot leave after start' });
  let body;
  try { body = await readBody(req); } catch (_) { body = {}; }
  const teamId = String(body.teamId || '');
  if (!party.teams.has(teamId)) return send(res, 404, { error: 'team not found' });
  party.teams.delete(teamId);
  broadcastState(party);
  send(res, 200, { ok: true });
}

async function handleTeam(req, res, partyCode, teamId) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  const team = party.teams.get(teamId);
  if (!team) return send(res, 404, { error: 'team not found' });
  send(res, 200, {
    partyCode: party.code,
    partyStatus: party.status,
    totalTasks: TOTAL_TASKS,
    team: { id: team.id, name: team.name, players: team.players, taskIndex: team.taskIndex, done: team.done, finishRank: team.finishRank },
  });
}

async function handleStart(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'lobby') return send(res, 400, { error: 'already started' });
  if (!party.teams.size) return send(res, 400, { error: 'no crews have joined' });

  let body;
  try { body = await readBody(req); } catch (_) { body = {}; }
  let count = Number(body.taskCount);
  if (!Number.isFinite(count)) count = party.taskCount || TOTAL_TASKS;
  count = Math.max(1, Math.min(TOTAL_TASKS, Math.floor(count)));
  party.taskCount = count;
  party.mode = (body.mode === 'story') ? 'story' : 'competition';

  party.status = 'started';
  party.startedAt = Date.now();
  party.endedAt = null;
  party.briefingDismissed = false;
  party.countdownStartedAt = null;
  // Story mode: progress hidden until host reveals. Competition: always shown.
  party.progressRevealed = (party.mode !== 'story');
  party.tasks = generateTasks().slice(0, count);
  party.finishCount = 0;
  for (const t of party.teams.values()) {
    t.taskIndex = 0;
    t.attempts = 0;
    t.done = false;
    t.finishedAt = null;
    t.finishRank = null;
  }

  broadcast(party, { type: 'started', data: snapshot(party) });
  send(res, 200, snapshot(party));
}

const COUNTDOWN_MS = 4000; // 3, 2, 1, LIFTOFF

async function handleStartCountdown(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'started') return send(res, 400, { error: 'party not started' });
  if (party.briefingDismissed) return send(res, 200, { ok: true });
  if (party.countdownStartedAt) return send(res, 200, { ok: true }); // already running

  party.countdownStartedAt = Date.now();
  broadcastState(party);

  setTimeout(() => {
    const p = parties.get(partyCode);
    if (!p || p.status !== 'started') return;
    p.briefingDismissed = true;
    p.countdownStartedAt = null;
    broadcastState(p);
  }, COUNTDOWN_MS);

  send(res, 200, { ok: true });
}

// Kept for safety / direct skip (no countdown).
async function handleDismissBriefing(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'started') return send(res, 400, { error: 'party not started' });
  if (!party.briefingDismissed) {
    party.briefingDismissed = true;
    party.countdownStartedAt = null;
    broadcastState(party);
  }
  send(res, 200, { ok: true });
}

async function handleRevealProgress(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  let body;
  try { body = await readBody(req); } catch (_) { body = {}; }
  // Toggle, or set explicitly if { reveal: bool } passed
  if (typeof body.reveal === 'boolean') party.progressRevealed = body.reveal;
  else party.progressRevealed = !party.progressRevealed;
  broadcastState(party);
  send(res, 200, { ok: true, progressRevealed: party.progressRevealed });
}

async function handleAnswer(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status !== 'started') return send(res, 400, { error: 'party not started' });

  let body;
  try { body = await readBody(req); } catch (e) { return send(res, 400, { error: e.message }); }

  const teamId = String(body.teamId || '');
  const team = party.teams.get(teamId);
  if (!team) return send(res, 404, { error: 'team not found' });
  if (team.done) return send(res, 200, { correct: false, message: 'already finished', done: true });

  const raw = String(body.answer ?? '').trim();
  if (!raw) return send(res, 200, { correct: false, message: 'enter a number' });
  const value = Number(raw);
  if (!Number.isFinite(value)) return send(res, 200, { correct: false, message: 'not a valid number' });

  const task = party.tasks[team.taskIndex];
  if (!task) return send(res, 500, { error: 'task missing' });

  team.attempts += 1;
  const correct = value === task.answer;

  if (correct) {
    team.taskIndex += 1;
    const total = party.tasks.length;
    if (team.taskIndex >= total) {
      team.done = true;
      team.finishedAt = Date.now();
      party.finishCount = (party.finishCount || 0) + 1;
      team.finishRank = party.finishCount;
      maybeAutoEnd(party);
    }
    broadcastState(party);
    return send(res, 200, {
      correct: true,
      taskIndex: team.taskIndex,
      tasksCompleted: team.taskIndex,
      totalTasks: total,
      done: team.done,
      finishRank: team.finishRank,
    });
  }

  // Wrong: broadcast attempts update too
  broadcastState(party);
  send(res, 200, { correct: false, attempts: team.attempts });
}

async function handleFinish(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  if (party.status === 'lobby') return send(res, 400, { error: 'party not started yet' });
  if (party.status === 'ended') return send(res, 200, snapshot(party));
  party.status = 'ended';
  party.endedAt = Date.now();
  broadcastState(party);
  send(res, 200, snapshot(party));
}

async function handleState(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  send(res, 200, snapshot(party));
}

async function handleEvents(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });

  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-store, no-transform',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no',
  });
  res.write(`event: state\ndata: ${JSON.stringify(snapshot(party))}\n\n`);
  party.listeners.add(res);

  const keepalive = setInterval(() => {
    try { res.write(`: keepalive\n\n`); } catch (_) {}
  }, 25_000);

  const cleanup = () => { clearInterval(keepalive); party.listeners.delete(res); };
  req.on('close', cleanup);
  req.on('error', cleanup);
}

async function handleReset(req, res, partyCode) {
  const party = parties.get(partyCode);
  if (!party) return send(res, 404, { error: 'party not found' });
  for (const team of party.teams.values()) {
    team.taskIndex = 0;
    team.attempts = 0;
    team.done = false;
    team.finishedAt = null;
    team.finishRank = null;
  }
  party.finishCount = 0;
  party.status = 'lobby';
  party.startedAt = null;
  party.endedAt = null;
  party.briefingDismissed = false;
  party.countdownStartedAt = null;
  party.progressRevealed = false;
  party.tasks = null;
  broadcastState(party);
  send(res, 200, snapshot(party));
}

// ---- Router ----

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;
  const method = req.method;

  try {
    if (method === 'GET' && pathname === '/') {
      return sendFile(res, path.join(PUBLIC_DIR, 'index.html'), 'text/html; charset=utf-8');
    }
    if (method === 'GET' && pathname.startsWith('/master/')) {
      return sendFile(res, path.join(PUBLIC_DIR, 'master.html'), 'text/html; charset=utf-8');
    }
    if (method === 'GET' && pathname.startsWith('/play/')) {
      return sendFile(res, path.join(PUBLIC_DIR, 'play.html'), 'text/html; charset=utf-8');
    }
    if (method === 'GET' && pathname === '/style.css') {
      return sendFile(res, path.join(PUBLIC_DIR, 'style.css'), 'text/css; charset=utf-8');
    }
    if (method === 'GET' && (pathname === '/logbook' || pathname === '/logbook/')) {
      return sendFile(res, path.join(__dirname, 'logbook', 'logbook.html'), 'text/html; charset=utf-8');
    }
    if (method === 'GET' && pathname === '/healthz') {
      return send(res, 200, { ok: true, parties: parties.size, totalTasks: TOTAL_TASKS });
    }

    if (method === 'POST' && pathname === '/api/party') return handleCreateParty(req, res);

    const teamMatch = pathname.match(/^\/api\/party\/([A-Z0-9]+)\/team\/([A-Za-z0-9_-]+)\/?$/i);
    if (teamMatch && method === 'GET') {
      return handleTeam(req, res, normalizeCode(teamMatch[1]), teamMatch[2]);
    }
    // /api/party/CODE/<sub>
    const partyMatch = pathname.match(/^\/api\/party\/([A-Z0-9]+)(\/[a-z-]+)?\/?$/i);
    if (partyMatch) {
      const partyCode = normalizeCode(partyMatch[1]);
      const sub = (partyMatch[2] || '').toLowerCase();
      if (method === 'POST' && sub === '/join')              return handleJoin(req, res, partyCode);
      if (method === 'POST' && sub === '/leave')             return handleLeave(req, res, partyCode);
      if (method === 'POST' && sub === '/start')             return handleStart(req, res, partyCode);
      if (method === 'POST' && sub === '/start-countdown')   return handleStartCountdown(req, res, partyCode);
      if (method === 'POST' && sub === '/dismiss-briefing')  return handleDismissBriefing(req, res, partyCode);
      if (method === 'POST' && sub === '/reveal-progress')   return handleRevealProgress(req, res, partyCode);
      if (method === 'POST' && sub === '/answer')            return handleAnswer(req, res, partyCode);
      if (method === 'POST' && sub === '/finish')            return handleFinish(req, res, partyCode);
      if (method === 'POST' && sub === '/reset')             return handleReset(req, res, partyCode);
      if (method === 'GET'  && sub === '/state')             return handleState(req, res, partyCode);
      if (method === 'GET'  && sub === '/events')            return handleEvents(req, res, partyCode);
    }

    send(res, 404, { error: 'not found', pathname });
  } catch (err) {
    console.error('handler error', err);
    if (!res.headersSent) send(res, 500, { error: 'internal error' });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Bring Them Home listening on http://0.0.0.0:${PORT}. ${TOTAL_TASKS} tasks`);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT',  () => server.close(() => process.exit(0)));
