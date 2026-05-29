# Master Spec · Bring Them Home Final Showcase

> **Read this first.** Every per-slide file references this spec for theme tokens and global rules. Keep the theme identical across all 16 slides.

## The product, in one paragraph

**Bring Them Home** is a 7-minute classroom rescue game for early high-school algebra students. Teams crew a crippled Apollo-13-style spaceship. Every ship system is broken; the only way to repair each one is to figure out one missing value (the unknown *x*). Each team works on a single phone (the "console") alongside a printed *Flight Engineer's Logbook*. Students copy the numbers from the console onto the matching numbered logbook page, **fold and cut a paper strip by hand** to physically discover one unit, then return to the console and enter the answer. When all systems are repaired the ship splashes down on Earth.

Live: `https://lrnsci301.rborsetti.com` · Logbook: `https://lrnsci301.rborsetti.com/logbook`

## Theme tokens (apply to every slide)

- **Aspect**: 16:9
- **Background**: deep navy `#070A26` (or `#050828`) with subtle dotted starfield on the side edges
- **Accent: HUD / cyan**: `#22D3EE` (used for question prompts, system numbers, headings)
- **Accent: amber / equations**: `#FBBF24` (used for equation chips, key callouts, "fold" / "cut" labels)
- **Gold / win**: `#FDE047` (used for splashdown finishes, victory states)
- **Header font**: **Orbitron** 700, uppercase, letter-spacing 0.06em (fallback: Calibri bold, uppercase, wide tracking)
- **Body font**: **Inter** 400/600 (fallback: Calibri)
- **Code / equation font**: monospace (Space Mono ideal, or any clear monospace)
- **Image treatment**: dark thin frame, no shadow. If pointing at detail, use an amber annotation callout.
- **Section motif**: small amber rocket glyph (🚀 styled or simple SVG) in the corner of section-break slides.

## Transition slides (slides 3, 6, 10, 14)

Replace the exemplar's literal "search bar" with a **MISSION CONTROL TERMINAL** prompt. Visual:

- Dark slide, centered cyan box, thin glowing border.
- Tiny label above the box, monospace: `▸ MISSION CONTROL TERMINAL`.
- Inside the box, the rubric question in white/cyan body text with a typed-cursor glyph (`▍`) at the end.
- Small amber rocket glyph in corner.

The four transition questions (verbatim, do not change):

- Slide 3: `Is it clear what the game is teaching?`
- Slide 6: `Will the game be easy to adopt?`
- Slide 10: `Will students learn?`
- Slide 14: `Does the game look fun?`

## Slide outline (the contract)

| # | Slide | Time | Rubric item | Image |
|---|---|---:|---|---|
| 1 | Title | 0:15 |  | `images/01-home.png` |
| 2 | Intro / Context | 0:30 | Value to students' lives | `images/03-briefing.png` |
| 3 | TRANSITION: Is it clear what the game is teaching? | 0:05 |  | none |
| 4 | Standard + Target Audience | 0:25 | Standard + portion | none |
| 5 | The Knowledge (4 LOs) | 0:30 | Knowledge clearly explained | none |
| 6 | TRANSITION: Will the game be easy to adopt? | 0:05 |  | none |
| 7 | The Game | 0:35 | Cohesive explanation | `images/02-mission-control.png` |
| 8 | Sample Turn | 0:55 | (reinforces above) | `images/04-phone-task.png` + `images/07-logbook-fold-cut.png` |
| 9 | Materials Provided | 0:35 | All materials included | `images/06-logbook-cover.png` + `images/10-debrief.png` |
| 10 | TRANSITION: Will students learn? | 0:05 |  | none |
| 11 | Design Argument Table | 0:50 | Mechanics → Gameplay → Experience | none |
| 12 | Evidence | 0:40 | Evidence (+1 bonus) | `images/05-phone-hint-steps.png` |
| 13 | Inclusion | 0:35 | Different student types | `images/11-story-mode-hidden.png` |
| 14 | TRANSITION: Does the game look fun? | 0:05 |  | none |
| 15 | Fun + Ethics | 0:40 | Fun + ethics (2 items) | `images/08-race.png` + `images/09-splashdown.png` |
| 16 | Close | 0:10 |  | none |

**Total speaker time: 6:40** with a 20-second buffer to 7:00.

## Rubric coverage matrix (which slide hits which rubric line)

> Source: `Final Showcase Rubric.pdf`: 10 items × 3 pts = 30. The struck-through "Students will be able to…" line is intentionally not addressed; we hit "knowledge clearly explained" instead.

| Lens | Item | Slide(s) |
|---|---|---|
| Value to students' lives | Context is age-appropriate and valuable | 2 |
| Clear what game teaches | Shows standard + portion of standard | 4 |
| | Clearly explains the knowledge | 5 |
| Easy to adopt | Cohesive game explanation, fast onboarding | 7, 8 |
| | All teaching materials included | 9 |
| Will students learn | Mechanics → Gameplay → Experience | 11 |
| | Evidence the game teaches (in-game = +1 bonus) | 12 |
| | Different student types participate | 13 |
| Game looks fun | Clear mechanics aimed at engagement | 15 |
| | Mechanics ethically justified | 15 |

## Verbatim content (from `Design Plan - 4.xlsx`, do not paraphrase)

### Learners
> Early High School algebra students (transitioning from general math to algebra)

### Full standard
> Solve linear equations and inequalities in one variable, including equations with coefficients represented by letters.

### Chopped (focused) standard
> Solve one-variable linear equations by isolating the variable, represented by letters, through multiplication and division.

### Four Learning Outcomes (knowledge), each with its procedural-knowledge tag

1. **Find the value of a base unit** *(isolating a variable through inverse operations)*
2. **Create groups to understand that multiples of a base unit can be deduced down to the original value** *(inverse operation: division)*
3. **Repetitively add units to understand that parts of a base unit can be replicated to find the original value** *(inverse operation: multiplication)*
4. **Interpret base units in different contexts and understand how they relate** *(equations with a variable on both sides)*

### Design Argument table (sheet 3 verbatim)

| Learning Outcome | Experience | Gameplay | Mechanics |
|---|---|---|---|
| Find the value of a base unit | Finding a ship's speed | Solve equations through inverse operations | Solving mathematical problems to find the answer to different situations |
| Create groups… (division) | Figuring out how many groups of wires are needed to rewire a system | Interpret real-life situations to recognize when dividing a larger number is necessary to find another value | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |
| Repetitively add units… (multiplication) | Simulate adding energy pulses to rebuild the ship's power core, seeing how repeated additions form the total output | Interpret real-life situations to recognize when multiplying a smaller number is necessary to find another value | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |
| Interpret base units… (variable on both sides) | Apply algebraic reasoning to real-world contexts (oxygen, velocity, temp) to understand how variables interact | Learn when one value can be used and manipulated in multiple ways even in the same scenario | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |

### Pre/post questions (sheet 4 verbatim)

1. How do coefficients and numbers around a variable affect the value of the variable?
2. Why is division considered the "opposite" of multiplication?
3. Why is multiplication considered the "opposite" of division?
4. How does the value of a variable change depending on what side of an equation it is on?

### In-game measures (what the server already records)

- **Attempts per system** (per team, per task index)
- **Hint usage** (only revealed after a wrong attempt, so usage itself is signal)
- **Time per system / total mission time** (mission clock)
- **Physical logbook artifact**: the folded/cut/shaded paper the teacher can collect after class

> The rubric notes "in-game measures are a +1 bonus." Call this out on slide 12.

### Game → LO map (which ship system teaches which LO)

| LO | In-game system(s) | Equation form |
|---|---|---|
| 1 · Base unit | Sys 01 Restore power · Sys 02 Maintain oxygen · Sys 03 Patch fuel leak | `x + a = b`, `b − x = a` |
| 2 · Groups → ÷ | Sys 04 Rewire mainframe · Sys 06 Calibrate scanner · Sys 07 Realign coordinates · Sys 09 Break through atmosphere | `kx = b`, `kx ± c = t` |
| 3 · Replicate → × | Sys 05 Signal Houston · Sys 08 Set ship speed | `x ÷ k = r`, `x ÷ k + c = t` |
| 4 · Variable on both sides | Sys 10 Land the ship | `x + a = 2x` |

## Per-slide file template (every slide file follows this exact structure)

```
# Slide N · <Title>

**Rubric item:** <item name, or em-dash for transitions>
**Time:** N seconds
**Layout intent:** <one short line, e.g. "two-column: text left, screenshot right">
**Image:** images/0X-name.png  (or "none")
**Theme tokens:** inherit from 00-master-spec.md

## On-slide copy

(headline)
(body text, bullets, table: copy/paste ready)

## Speaker notes (~N words / ~N sec at 150 wpm)

(2–3 sentences for the presenter; ends with a hand-off cue on slides 6, 11, 14)
```

## Inclusion notes (for slide 13, condensed)

How every type of student participates:

- **One phone per crew, one logbook per *student***: every student does the folding/cutting/measuring.
- **Crew roles** in a 3-person team: reader/transcriber, folder, console operator. Every student has a job.
- **Story mode hides cross-team progress** so struggling crews aren't watched or rushed.
- **Hints + step-by-step are gated**: they only appear after a genuine attempt. Safety net, not shortcut.

## Ethics notes (for slide 15)

- **Race is opt-in** by the teacher; Story mode is the gentler default.
- **Hints and full step-by-step are unlimited**: never paywalled or rationed.
- **Even in Competition mode the closing is cooperative**: every crew gets a "Welcome home" mission debrief.
- **No public shaming**: in Story mode the room never sees a leaderboard.

## Fun-mechanics notes (for slide 15)

- Synchronized 3-2-1 LIFTOFF on every device at the same instant
- Live progress bars race across the room (Competition) or stay hidden (Story)
- Splashdown cinematic when the mission ends
- Themed terminology throughout: "Mission Control", "Flight Engineer's Logbook", "SYSTEM 04"
- End-of-mission **debrief** that names the math strategies students used ("isolating x," "dividing both sides," "variable on both sides")
