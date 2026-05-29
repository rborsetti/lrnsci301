# Bring Them Home

An Apollo 13 algebra rescue game for the classroom. Teams crew a crippled
spaceship; every broken system is a one-variable equation, and the only way
to repair it is to solve for the unknown. One device per crew acts as the
"console"; a printed **Flight Engineer's Logbook** is where students fold and
cut paper by hand to physically find the value of one unit before entering
their answer.

Live: https://lrnsci301.rborsetti.com

## Stack

- **`server.js`** — zero-dependency Node.js HTTP server with Server-Sent Events
  for real-time multiplayer state. Runs on `PORT` (default 9805).
- **`tasks.js`** — the 10 ship systems (algebra problems), randomized per game.
- **`public/`** — `index.html` (landing), `master.html` (Mission Control room
  display, incl. synthesized ambient music), `play.html` (team phone console),
  `style.css`.
- **`logbook/logbook.html`** — the printable Flight Engineer's Logbook.
- **`presentation/`** — final-showcase deck spec + asset bundle.

## Run locally

```bash
node server.js          # serves on http://localhost:9805
```

Open `/` to host or join. Host on a laptop/projector (Mission Control), join
from phones with the 4-character mission code.

## Game modes

- **Competition** — live race, leaderboard, finish medals.
- **Story** — own pace, progress hidden until the teacher reveals it.

Hints and full step-by-step solutions are gated behind a genuine attempt.
