// Task generators. Each generator() returns a fresh, slightly randomized
// instance of that task. same structure & narrative, different numbers,
// but x is always a positive whole number.
//
// Each task: { id, title, story, equation, hint, solution, answer }
//   hint    . explains what x represents and how the equation was built
//              from the story (player still solves it themselves)
//   solution. array of { desc, equation } steps shown if they're still
//              lost after the hint
//   answer  . server-only, stripped before sending to clients

function rint(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

const GENERATORS = [
  // Task 1. x + a = b
  () => {
    const x = rint(5, 12);
    const a = rint(3, 8);
    const b = a + x;
    return {
      id: 1,
      givens: [
        { label: 'Volts needed (WHOLE)', value: b },
        { label: 'Volts you already have', value: a },
      ],
      title: 'Restore power in the control room',
      story: `The control room needs ${b} volts to keep the lights up and running. The damage to the ship caused you to be left with only ${a} volts currently available. Luckily, you have a backup battery that can power the lights! How many volts should the backup battery carry to make sure the lights can stay on?`,
      equation: `x + ${a} = ${b}`,
      hint: `x is the volts the backup battery should add. The equation captures the story: the unknown plus what you already have equals the target.`,
      solution: [
        { desc: 'Start with the equation', equation: `x + ${a} = ${b}` },
        { desc: `Subtract ${a} from both sides`, equation: `x = ${b} − ${a}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 2. x + a = b
  () => {
    const x = rint(8, 15);
    const a = rint(4, 10);
    const b = a + x;
    return {
      id: 2,
      givens: [
        { label: 'Tanks needed (WHOLE)', value: b },
        { label: 'Tanks still connected', value: a },
      ],
      title: 'Maintain oxygen levels',
      story: `The ship's life support needs ${b} oxygen tanks to last the trip home. The collision knocked most of them offline, leaving only ${a} still connected. How many backup tanks must the crew bring online to survive the journey?`,
      equation: `x + ${a} = ${b}`,
      hint: `x is the number of backup tanks to bring online. The equation captures the story: backup tanks plus the tanks still connected equals the tanks needed.`,
      solution: [
        { desc: 'Start with the equation', equation: `x + ${a} = ${b}` },
        { desc: `Subtract ${a} from both sides`, equation: `x = ${b} − ${a}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 3. b − x = a
  () => {
    const x = rint(12, 25);
    const a = rint(20, 40);
    const b = a + x;
    return {
      id: 3,
      givens: [
        { label: 'Started with (WHOLE)', value: b },
        { label: 'Left in tank now', value: a },
      ],
      title: 'Patch the fuel leak',
      story: `Quick! Fuel is leaking out of the ship at record pace! The ship started with ${b} gallons of fuel, but right now, there's only ${a} gallons left. How many gallons of fuel did the astronauts lose (hopefully it'll be enough to still get home)?`,
      equation: `${b} − x = ${a}`,
      hint: `x is the gallons of fuel that leaked out. The equation captures the story: starting fuel minus what leaked equals what's left.`,
      solution: [
        { desc: 'Start with the equation', equation: `${b} − x = ${a}` },
        { desc: 'Add x to both sides', equation: `${b} = ${a} + x` },
        { desc: `Subtract ${a} from both sides`, equation: `${b} − ${a} = x` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 4. 2x = b
  () => {
    const x = rint(5, 12);
    const b = 2 * x;
    return {
      id: 4,
      givens: [
        { label: 'Total power needed (WHOLE)', value: b },
        { label: 'Number of wires', value: 2 },
      ],
      title: 'Rewire the mainframe',
      story: `The mainframe is on the fritz, and you found the culprit: damaged wiring. The crew rigs two backup wires to share the load equally. The mainframe needs ${b} units of power to stay stable. How much power must each wire carry?`,
      equation: `2x = ${b}`,
      hint: `x is the power each wire must carry. Two wires share the load equally — the equation says two times each wire's power equals the total the mainframe needs.`,
      solution: [
        { desc: 'Start with the equation', equation: `2x = ${b}` },
        { desc: 'Divide both sides by 2', equation: `x = ${b} ÷ 2` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 5. x ÷ k = r
  () => {
    const r = rint(4, 8);
    const k = 3;
    const x = k * r;
    return {
      id: 5,
      givens: [
        { label: 'Channels', value: k },
        { label: 'Strength each channel needs', value: r },
      ],
      title: "Let Houston know there's a problem!",
      story: `Alright, it's probably time to let Houston know all about the problems that have happened… The communication system is currently sending signals through ${k} different channels at the same strength. To reach Houston, each channel should have a signal strength of ${r} units. What should the total signal strength be?`,
      equation: `x / ${k} = ${r}`,
      hint: `x is the total signal strength. The equation captures the story: total signal split evenly across the channels gives the per-channel strength.`,
      solution: [
        { desc: 'Start with the equation', equation: `x ÷ ${k} = ${r}` },
        { desc: `Multiply both sides by ${k}`, equation: `x = ${r} × ${k}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 6. kx + c = t
  () => {
    const x = rint(4, 8);
    const c = rint(2, 5);
    const k = 3;
    const t = k * x + c;
    return {
      id: 6,
      givens: [
        { label: 'Final reading (WHOLE)', value: t },
        { label: 'Times the true angle', value: k },
        { label: 'Extra drift added', value: c },
      ],
      title: 'Calibrate the navigation scanner',
      story: `Oh no! A field of asteroids is in the midst! Fix the angle of the scanner to make sure the ship stays safe through the asteroid field. The scanner is reading at ${c} degrees higher than ${k} times the correct original angle. The final angle is ${t} degrees. What should the original scanner angle be?`,
      equation: `${k}x + ${c} = ${t}`,
      hint: `x is the correct original scanner angle. The equation captures the broken reading: a multiple of the correct angle, plus a fixed offset, equals the displayed value.`,
      solution: [
        { desc: 'Start with the equation', equation: `${k}x + ${c} = ${t}` },
        { desc: `Subtract ${c} from both sides`, equation: `${k}x = ${t - c}` },
        { desc: `Divide both sides by ${k}`, equation: `x = ${t - c} ÷ ${k}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 7. kx − c = t
  () => {
    const x = rint(8, 14);
    const c = rint(4, 7);
    const k = 2;
    const t = k * x - c;
    return {
      id: 7,
      givens: [
        { label: 'Target reading', value: t },
        { label: 'Times the true value', value: k },
        { label: 'Correction removed', value: c },
      ],
      title: 'Realign the coordinates to Earth',
      story: `Phew! You made it through the asteroid field. To set course for Earth, the navigation computer takes double the correct coordinate and trims off a ${c}-degree correction, which should give the target reading of ${t}. What is the correct coordinate?`,
      equation: `${k}x − ${c} = ${t}`,
      hint: `x is the correct coordinate. The equation captures the story: double the correct coordinate, minus a fixed correction, equals the target reading.`,
      solution: [
        { desc: 'Start with the equation', equation: `${k}x − ${c} = ${t}` },
        { desc: `Add ${c} to both sides`, equation: `${k}x = ${t + c}` },
        { desc: `Divide both sides by ${k}`, equation: `x = ${t + c} ÷ ${k}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 8. x ÷ k + c = t (x divisible by k)
  () => {
    const k = 4;
    const xMul = rint(5, 10);
    const x = k * xMul;
    const c = rint(4, 8);
    const t = (x / k) + c;
    return {
      id: 8,
      givens: [
        { label: 'Monitor reading', value: t },
        { label: 'Split across boosters', value: k },
        { label: 'Bumped up by', value: c },
      ],
      title: 'Set the ship speed',
      story: `Woah, slow down! The ship is going way too fast to safely enter Earth's atmosphere. After the ship's speed is spread evenly across ${k} engine boosters and adjusted upward by ${c}, the monitor shows a reading of ${t}. What is the ship's current (too fast) speed?`,
      equation: `x / ${k} + ${c} = ${t}`,
      hint: `x is the ship's current (too-fast) speed. The equation captures the story: speed split across the boosters, plus a fixed adjustment, equals what the monitor shows.`,
      solution: [
        { desc: 'Start with the equation', equation: `x ÷ ${k} + ${c} = ${t}` },
        { desc: `Subtract ${c} from both sides`, equation: `x ÷ ${k} = ${t - c}` },
        { desc: `Multiply both sides by ${k}`, equation: `x = ${t - c} × ${k}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 9. kx − c = t
  () => {
    const x = rint(10, 18);
    const c = rint(5, 9);
    const k = 2;
    const t = k * x - c;
    return {
      id: 9,
      givens: [
        { label: 'Correct entry reading', value: t },
        { label: 'Pointed down by', value: c },
      ],
      title: 'Break through the atmosphere',
      story: `Entering Earth's atmosphere requires precision, and safety is key. To enter Earth's atmosphere safely, the ship's current angle should be doubled and pointed ${c} degrees downward. This will give the crew the correct ${t}-degree angle. What was the original entry angle?`,
      equation: `${k}x − ${c} = ${t}`,
      hint: `x is the original entry angle. The equation captures the story: a multiple of the original angle, minus a fixed downward adjustment, equals the correct entry angle.`,
      solution: [
        { desc: 'Start with the equation', equation: `${k}x − ${c} = ${t}` },
        { desc: `Add ${c} to both sides`, equation: `${k}x = ${t + c}` },
        { desc: `Divide both sides by ${k}`, equation: `x = ${t + c} ÷ ${k}` },
        { desc: 'Compute', equation: `x = ${x}` },
      ],
      answer: x,
    };
  },

  // Task 10. x + a = 2x  (x = a)
  () => {
    const a = rint(10, 30);
    const x = a;
    return {
      id: 10,
      givens: [
        { label: 'Units faster than safe speed', value: a },
        { label: 'Current = ? × safe speed', value: 2 },
      ],
      title: 'Successfully land the ship',
      story: `We're almost there, Houston is in sight! But don't celebrate too soon, your crew must make sure to land the ship at the right speed. Right now, the ship's speed is currently ${a} units faster than the safe landing speed, which is equal to twice the safe landing speed! What is the safe landing speed?`,
      equation: `x + ${a} = 2x`,
      hint: `x is the safe landing speed. Both sides of the equation describe the same current speed — one as "safe speed plus a fixed amount", the other as "twice the safe speed". Set them equal and collect like terms.`,
      solution: [
        { desc: 'Start with the equation', equation: `x + ${a} = 2x` },
        { desc: 'Subtract x from both sides', equation: `${a} = x` },
        { desc: 'Compute', equation: `x = ${a}` },
      ],
      answer: x,
    };
  },
];

function generateTasks() {
  return GENERATORS.map(g => g());
}

module.exports = { generateTasks, totalTasks: GENERATORS.length };
