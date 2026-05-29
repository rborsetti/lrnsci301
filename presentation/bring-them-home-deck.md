# Bring Them Home · Final Showcase Deck

> Single-file spec for the entire 16-slide presentation. Hand this to the AI together with the `images/` folder. The AI should produce a complete 16:9 deck, one slide per numbered section below, applying the global theme tokens to every slide.

---

## How to use this file (instructions to the AI)

You are designing a **16-slide, 7-minute academic presentation** for a graduate course final showcase. Read this entire file before producing any slides, then build slides 1 through 16 in order using the per-slide sections below.

**Hard constraints, non-negotiable:**

1. Apply the **theme tokens** below globally. Every slide uses the same colors, fonts, and motifs. Do not vary the theme slide-to-slide.
2. **No em-dashes** anywhere in visible slide text. Use periods, commas, colons, or a middle dot (`·`) instead.
3. The standard, chopped standard, the four Learning Outcomes, the design-argument table (slide 11), and the four pre/post questions (slide 12) are **lifted verbatim** from a course design plan. Do not paraphrase, shorten, or rephrase. Do not add "Students will be able to…" wording (that phrasing is struck through on the official rubric; we name the *knowledge*, not LO-sentences).
4. Build **all 16 slides**. Do not add, merge, split, or reorder. Transition slides (3, 6, 10, 14) are deliberate pacing beats.
5. Use the **image paths exactly** as written in each slide's "Image" field. The images live in `images/` next to this file.
6. The "Speaker notes" sections are for the presenter only and should appear as **speaker notes in the deck**, never on the visible slide.
7. The output is a single deck I can export to PowerPoint or Google Slides.

---

## The product, in one paragraph (context for the designer)

**Bring Them Home** is a 7-minute classroom rescue game for early high-school algebra students. Teams crew a crippled Apollo-13-style spaceship. Every ship system is broken; the only way to repair each one is to figure out one missing value (the unknown *x*). Each team works on a single phone (the "console") alongside a printed *Flight Engineer's Logbook*. Students copy the numbers from the console onto the matching numbered logbook page, **fold and cut a paper strip by hand** to physically discover one unit, then return to the console and enter the answer. When all systems are repaired the ship splashes down on Earth. Live at `https://lrnsci301.rborsetti.com`.

---

## Theme tokens (apply to every slide)

- **Aspect**: 16:9
- **Background**: deep navy `#070A26` with a subtle dotted starfield on the side edges
- **Cyan / HUD accent**: `#22D3EE` (used for question prompts, system numbers, headings)
- **Amber / equations accent**: `#FBBF24` (used for equation chips, key callouts, "fold" / "cut" labels)
- **Gold / win**: `#FDE047` (used for splashdown finishes, victory states)
- **Header font**: Orbitron 700, uppercase, letter-spacing 0.06em (fallback: Calibri bold, uppercase, wide tracking)
- **Body font**: Inter 400/600 (fallback: Calibri)
- **Code / equation font**: monospace (Space Mono ideal, or any clear monospace)
- **Image treatment**: dark thin frame, no shadow. If pointing at detail, use an amber annotation callout.
- **Section motif**: small amber rocket glyph in the corner of section-break slides.

**Transition slides (slides 3, 6, 10, 14)** are styled as a **"MISSION CONTROL TERMINAL"** prompt:

- Dark slide, centered cyan-bordered box with a thin glowing border
- Tiny monospace label above the box: `▸ MISSION CONTROL TERMINAL`
- Inside the box, the rubric question in white/cyan body text with a typed-cursor glyph (`▍`) at the end
- Small amber rocket glyph in the corner

---

## Slide outline + rubric coverage matrix

| # | Slide | Time | Rubric item targeted | Image |
|---|---|---:|---|---|
| 1 | Title | 0:15 | (intro) | `images/01-home.png` |
| 2 | Intro / Context | 0:30 | Value to students' lives | `images/03-briefing.png` |
| 3 | Transition: Is it clear what the game is teaching? | 0:05 | (pacing) | none |
| 4 | Standard + Target Audience | 0:25 | Standard + portion | none |
| 5 | The Knowledge (4 LOs) | 0:30 | Knowledge clearly explained | none |
| 6 | Transition: Will the game be easy to adopt? | 0:05 | (pacing) | none |
| 7 | The Game | 0:35 | Cohesive explanation | `images/02-mission-control.png` |
| 8 | Sample Turn | 0:55 | (reinforces slide 7) | `images/04-phone-task.png` + `images/07-logbook-fold-cut.png` |
| 9 | Materials Provided | 0:35 | All materials included | `images/06-logbook-cover.png` + `images/10-debrief.png` |
| 10 | Transition: Will students learn? | 0:05 | (pacing) | none |
| 11 | Design Argument Table | 0:50 | Mechanics → Gameplay → Experience | none |
| 12 | Evidence | 0:40 | Evidence (+1 bonus for in-game measures) | `images/05-phone-hint-steps.png` |
| 13 | Inclusion | 0:35 | Different student types participate | `images/11-story-mode-hidden.png` |
| 14 | Transition: Does the game look fun? | 0:05 | (pacing) | none |
| 15 | Fun + Ethics | 0:40 | Fun mechanics + ethical justification | `images/08-race.png` + `images/09-splashdown.png` |
| 16 | Close | 0:10 | (closing CTA) | none |

**Total spoken time:** ~6:30 (well under the 7-minute ceiling, leaves buffer for slide transitions).

---

# SLIDES

---

## Slide 1 · Title

**Time:** 15 seconds
**Layout intent:** Centered hero. Huge title, smaller italic subtitle, caption line, team line. Optional darkened screenshot behind the title as a background.
**Image:** `images/01-home.png` (used as a dimmed background or small corner visual; do not let it dominate the title text)

### On-slide copy

# BRING THEM HOME
*An Apollo 13 Algebra Rescue Game*

Final Showcase · DoLE Spring 2026
Team: [your team names here]

### Speaker notes

Good afternoon. This is *Bring Them Home*, an Apollo 13 algebra rescue game where students use a paper logbook and a phone, working as a crew to bring the astronauts back alive.

---

## Slide 2 · Intro / Context

**Time:** 30 seconds
**Rubric item:** Value to students' lives (context is age-appropriate and valuable)
**Layout intent:** Two-column. Narrative bullets on the left, the briefing screenshot on the right.
**Image:** `images/03-briefing.png` (right column)

### On-slide copy

## Why Apollo 13, why algebra, why now?

- "Houston, we've had a problem." A real story 9th-graders recognize.
- Apollo 13 was solved by hand calculation under pressure: the same math algebra students are learning.
- Frames *x* as the missing value that keeps a real crew alive, not an abstract symbol.
- Cooperative stakes (a crew to save) replace test-anxiety stakes.

### Speaker notes

Apollo 13 is age-appropriate, emotionally compelling, and historically a story of regular math saving lives. For a 9th-grader on the bridge between general math and algebra, this is the moment "what is *x*" stops being abstract. Every equation in the game ties to a system on the ship that needs repairing. The stakes are cooperative, a crew to save, instead of a test grade to chase. The math is identical. The meaning is not.

---

## Slide 3 · Transition: Is it clear what the game is teaching?

**Time:** 5 seconds
**Layout intent:** MISSION CONTROL TERMINAL prompt (see theme tokens). Dark slide, centered cyan-bordered box, no other content.
**Image:** none

### On-slide copy

`▸ MISSION CONTROL TERMINAL`

> Is it clear what the game is teaching?▍

### Speaker notes

So: is it clear what the game is teaching?

---

## Slide 4 · Standard + Target Audience

**Time:** 25 seconds
**Rubric item:** Shows standard + portion of standard
**Layout intent:** Two-column. Left: full standard (smaller, muted), chopped standard (larger, **amber** highlight). Right: a "Target Audience" card with the learner profile.
**Image:** none

### On-slide copy

## Standard + Target Audience

**Common Core Math Standard.** Solve linear equations and inequalities in one variable, including equations with coefficients represented by letters.

**Chopped (focused) standard.** Solve one-variable linear equations by isolating the variable, represented by letters, through multiplication and division.

**Target Audience.** Early High School algebra students (transitioning from general math to algebra).

### Speaker notes

Our full Common Core standard covers linear equations and inequalities in one variable. We chop it down to the portion the game actually trains: isolating a variable through multiplication and division. Our learners are early high school algebra students, still bridging from general math. Each ship system in the game is one equation form drawn from this chopped standard.

---

## Slide 5 · The Knowledge (4 Learning Outcomes)

**Time:** 30 seconds
**Rubric item:** Clearly explains the knowledge students will learn
**Layout intent:** Four numbered cards in a 2×2 grid. Each card: number badge (cyan), LO title in bold white, procedural tag below in smaller cyan italic.
**Image:** none
**IMPORTANT:** Do NOT use "Students will be able to…" wording. The rubric explicitly strikes that phrasing out. Name the *knowledge* itself. Use the four LOs verbatim, including the parenthetical tag.

### On-slide copy

## The Knowledge

*What students walk away knowing.*

1. **Find the value of a base unit**
   *Isolating a variable through inverse operations*

2. **Create groups to understand that multiples of a base unit can be deduced down to the original value**
   *Inverse operation: division*

3. **Repetitively add units to understand that parts of a base unit can be replicated to find the original value**
   *Inverse operation: multiplication*

4. **Interpret base units in different contexts and understand how they relate**
   *Equations with a variable on both sides*

### Speaker notes

Four pieces of knowledge, each generalizable beyond algebra class. One: find the value of a base unit. Two: use grouping to deduce a base unit through division. Three: use replication to find a base unit through multiplication. Four: interpret a base unit across both sides of an equation. Every system in the game maps onto one of these four, so by the end of the mission the student has practiced all four in context.

---

## Slide 6 · Transition: Will the game be easy to adopt?

**Time:** 5 seconds
**Layout intent:** MISSION CONTROL TERMINAL prompt.
**Image:** none

### On-slide copy

`▸ MISSION CONTROL TERMINAL`

> Will the game be easy to adopt?▍

### Speaker notes

Will the game be easy to adopt? [hand to next presenter if splitting the talk]

---

## Slide 7 · The Game

**Time:** 35 seconds
**Rubric item:** Cohesive explanation; game starts quickly; students feel in control fast
**Layout intent:** Two-column. Left: "Goal", "How to Play", "How to Win" as three short stacked blocks. Right: mission-control screenshot.
**Image:** `images/02-mission-control.png` (right)

### On-slide copy

## The Game

**Goal.** Repair every ship system and bring the astronauts home.

**How to Play.**
- Open Mission Control on a laptop or projector
- One phone per crew joins with the on-screen code
- Each student has a printed Flight Engineer's Logbook
- Each "system" is a short word problem with one missing value
- Crews copy the numbers onto the logbook, fold and cut paper to find *x*, then enter the answer on the phone

**How to Win.** Restore all the systems. The ship splashes down.

*Setup: under 30 seconds. First problem on screen in under a minute.*

### Speaker notes

Mission Control runs on any laptop or projector. Each team joins from one phone with the code on the screen. Each student gets a printed Flight Engineer's Logbook. The host picks Competition mode or Story mode and how many systems to play, between one and ten. Setup is under 30 seconds. Students are looking at their first problem in under a minute. Every system is the same loop: read the word problem, model it on paper, find *x* by hand, enter it on the phone.

---

## Slide 8 · Sample Turn

**Time:** 55 seconds
**Rubric item:** Reinforces cohesive explanation (exemplar notes "sample turns are highly effective")
**Layout intent:** Four numbered steps across the slide. Two screenshots side by side at top OR one screenshot per step. Use the phone-task screenshot for steps 1-2 and the logbook fold/cut page for step 3.
**Image:** `images/04-phone-task.png` (steps 1-2) and `images/07-logbook-fold-cut.png` (step 3)

### On-slide copy

## One Turn, End to End

**Sample system: Rewire the mainframe (`2x = 18`)**

1. **Console.** The phone shows SYSTEM 04 with the numbers it needs.
2. **Copy to logbook.** Crew copies those numbers onto the matching logbook page.
3. **Find one unit.** A student folds the paper strip in half, cuts along the crease. Each piece is one wire's power. That is *x*.
4. **Restore.** Crew enters *x* on the phone. The system restores. Next one.

*The math never happens on the phone. It is discovered on paper.*

### Speaker notes

Here is one turn end to end. A system breaks on the console: SYSTEM 04, rewire the mainframe, the mainframe needs 18 units of power and there are two wires. A student opens the SYSTEM 04 page in their logbook and copies those numbers across. They take the paper strip on the page, fold it in half, and cut along the crease. Each cut piece is one wire's power. That is *x*. They enter *x* on the phone. The system restores. Next problem. The discovery happens on paper. The console only checks the answer.

---

## Slide 9 · Materials Provided

**Time:** 35 seconds
**Rubric item:** All materials to teach the learning outcome are included
**Layout intent:** Two-column. Left: a clean checklist of materials (icons + labels). Right: side-by-side small thumbnails of the logbook cover and the debrief screen.
**Image:** `images/06-logbook-cover.png` and `images/10-debrief.png`

### On-slide copy

## Everything a Teacher Needs

- Printable Flight Engineer's Logbook (one per student, B/W, classroom-printer friendly)
- Live web Mission Control (no install, runs on any browser)
- Teacher controls: mode toggle (Competition / Story), mission length 1–10, Reveal/Hide progress, Reset, End
- Built-in briefing that doubles as the tutorial
- End-of-mission debrief that names the algebra strategies the students just used
- Pre/post assessment (4 questions, one per Learning Outcome)

### Speaker notes

Everything a teacher needs is included. The printable logbook is one per student, black and white, sized for any classroom printer. Mission Control runs on any laptop, no install. The teacher chooses Competition or Story mode and how many systems, from one to ten. The briefing screen doubles as the tutorial, so the first run does not need a separate explanation. The debrief at the end of the mission names the algebra strategies the students used. The pre/post assessment ships with the game.

---

## Slide 10 · Transition: Will students learn?

**Time:** 5 seconds
**Layout intent:** MISSION CONTROL TERMINAL prompt.
**Image:** none

### On-slide copy

`▸ MISSION CONTROL TERMINAL`

> Will students learn?▍

### Speaker notes

Will students learn? [hand to next presenter if splitting the talk]

---

## Slide 11 · Design Argument Table

**Time:** 50 seconds
**Rubric item:** Mechanics → Gameplay → Experience (the heart of the deck)
**Layout intent:** A 4-row design-argument table with four columns. Headers in cyan, body in white/light grey. Keep cells dense but readable. This is the densest text slide of the deck; do not over-decorate.
**Image:** none

### On-slide copy

## How the Game Teaches: Mechanics → Gameplay → Experience

| Learning Outcome | Experience | Gameplay | Mechanics |
|---|---|---|---|
| Find the value of a base unit | Finding a ship's speed | Solve equations through inverse operations | Solving mathematical problems to find the answer to different situations |
| Create groups (division) | Figuring out how many groups of wires are needed to rewire a system | Interpret real-life situations to recognize when dividing a larger number is necessary to find another value | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |
| Repetitively add units (multiplication) | Simulate adding energy pulses to rebuild the ship's power core, seeing how repeated additions form the total output | Interpret real-life situations to recognize when multiplying a smaller number is necessary to find another value | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |
| Interpret base units (variable on both sides) | Apply algebraic reasoning to real-world contexts (oxygen, velocity, temp) to understand how variables interact | Learn when one value can be used and manipulated in multiple ways even in the same scenario | Wording of specific scenarios that prompt the student to solve problems that require simple math relationships to become apparent |

### Speaker notes

This is the design argument. Each row is one Learning Outcome. From left to right: the experience we want the student to have, the gameplay we built to produce it, and the mechanic underneath. Reading row two: we want the student to *experience* figuring out how many groups of wires fix a system; we get them there by *gameplay* where they interpret a real-life scenario to recognize when division is the move; the *mechanic* is the careful wording of the scenarios so the math relationship has to surface. Every row works the same way. The mechanics feed the gameplay, the gameplay creates the experience, and the experience produces the learning outcome.

---

## Slide 12 · Evidence

**Time:** 40 seconds
**Rubric item:** Evidence the game can teach (pre/post + in-game measures; in-game = +1 bonus)
**Layout intent:** Two columns. Left column: PRE/POST ASSESSMENT with four numbered questions. Right column: IN-GAME MEASURES with a small amber "+1 BONUS" pill at the top of the column. Phone hint screenshot at the bottom-right.
**Image:** `images/05-phone-hint-steps.png` (small, bottom-right)

### On-slide copy

## Will Students Learn? Here Is How We Measure.

**PRE/POST ASSESSMENT**

1. How do coefficients and numbers around a variable affect the value of the variable?
2. Why is division considered the "opposite" of multiplication?
3. Why is multiplication considered the "opposite" of division?
4. How does the value of a variable change depending on what side of an equation it is on?

**IN-GAME MEASURES** *(+1 bonus per rubric)*

- Attempts per system, per team
- Hint usage (gated, so usage itself is a signal)
- Time per system and total mission time
- The folded/cut/shaded logbook a teacher can collect

### Speaker notes

Four pre/post questions diagnose the four Learning Outcomes one for one. Coefficients and variables maps to LO 1, division as the inverse of multiplication maps to LO 2, multiplication as the inverse of division maps to LO 3, and variable on both sides maps to LO 4. During play, the server records attempts per system, hint usage (and because hints are gated to appear only after a wrong answer, usage itself is data), time per system, and we keep the physical logbook. The rubric notes that in-game measures are a one-point bonus. We are claiming it.

---

## Slide 13 · Inclusion

**Time:** 35 seconds
**Rubric item:** Different student types participate (shy, doesn't like schoolwork, backseat in groups)
**Layout intent:** Two columns. Left: four numbered design moves. Right: the story-mode hidden-progress screenshot. Italic subhead under the headline.
**Image:** `images/11-story-mode-hidden.png` (right)

### On-slide copy

## Every Student Has a Job. No One Gets Watched.

*How we designed for shy, disengaged, and backseat students.*

1. **One phone per crew. One logbook per student.** Every student folds, cuts, and writes. The "one kid does it all" group-work failure mode is structurally blocked.
2. **Crew roles.** In a 3-person team: reader/transcriber, paper folder, console operator. Every student has a real job.
3. **Story mode hides cross-team progress.** Struggling crews are not watched or rushed. The teacher reveals the room view on their terms.
4. **Hints and steps are gated.** They only appear after a real attempt. A safety net, not a shortcut. No shame for asking.

### Speaker notes

Four design moves for inclusion. First, one logbook per student, not per team, so every kid is hands-on. The classic group-work failure where one student does everything is structurally blocked. Second, named crew roles give every student a job. Third, Story mode hides cross-team progress so a struggling team is never watched. Fourth, hints and full step-by-step solutions exist but they only appear after a genuine wrong attempt. That makes them a safety net, not a shortcut, and removes the shame of asking.

---

## Slide 14 · Transition: Does the game look fun?

**Time:** 5 seconds
**Layout intent:** MISSION CONTROL TERMINAL prompt.
**Image:** none

### On-slide copy

`▸ MISSION CONTROL TERMINAL`

> Does the game look fun?▍

### Speaker notes

Does the game look fun? [hand to next presenter if splitting the talk]

---

## Slide 15 · Fun + Ethics

**Time:** 40 seconds
**Rubric item:** Two items: (a) clear game mechanics aimed at engagement, and (b) mechanics ethically justified
**Layout intent:** Top row: two screenshots side by side (race + splashdown). Bottom row split into two columns: "FUN" bullets on the left, "ETHICS" bullets on the right.
**Image:** `images/08-race.png` and `images/09-splashdown.png` (top row, side by side)

### On-slide copy

## Fun With Care.

**FUN**
- Synchronized 3-2-1 LIFTOFF on every device at the same instant
- Live race bars across the room in Competition mode
- Splashdown cinematic when the ship comes home
- Themed throughout: Mission Control, Flight Engineer's Logbook, "SYSTEM 04"

**ETHICS**
- Race is opt-in by the teacher; Story mode is the gentler default
- Hints and full step-by-step are never paywalled or rationed
- No public shaming: Story mode never shows a leaderboard
- Even in Competition, every crew gets a "Welcome home" closing screen

### Speaker notes

Fun first. Every device counts down together to LIFTOFF. In Competition mode, live race bars cross the room. When the last system is fixed, the ship splashes down on the wall projector. Now the ethics. The race is opt-in, not the default. Story mode is offered as the gentler first run. Hints are unlimited, never paywalled. Story mode never shows a leaderboard so struggling students are not watched. And even in Competition, every crew gets the same "Welcome home" closing. The fun is real. The pressure is calibrated.

---

## Slide 16 · Close

**Time:** 10 seconds
**Layout intent:** Centered hero. Big call to action. The URL is the focal element. A QR-code placeholder block to the side. Footer line at the bottom. Small amber rocket glyph in the corner.
**Image:** none (the URL is the hero element). A `[QR CODE]` placeholder block is fine; a real QR can be generated separately from the URL.

### On-slide copy

# Try it now.

**`lrnsci301.rborsetti.com`**

*Open on a laptop. Join from any phone. No install.*

`[QR CODE]`

Thank you · Bring Them Home · DoLE Spring 2026

### Speaker notes

Try it. The URL works on any device. No install. Thank you. We will take questions.

---

# APPENDIX

## A1 · Source content (verbatim, from the group's `Design Plan - 4.xlsx`)

**Learners.** Early High School algebra students (transitioning from general math to algebra)

**Full standard.** Solve linear equations and inequalities in one variable, including equations with coefficients represented by letters.

**Chopped (focused) standard.** Solve one-variable linear equations by isolating the variable, represented by letters, through multiplication and division.

**Four Learning Outcomes (knowledge):**

1. Find the value of a base unit *(isolating a variable through inverse operations)*
2. Create groups to understand that multiples of a base unit can be deduced down to the original value *(inverse operation: division)*
3. Repetitively add units to understand that parts of a base unit can be replicated to find the original value *(inverse operation: multiplication)*
4. Interpret base units in different contexts and understand how they relate *(equations with a variable on both sides)*

## A2 · Game-to-LO map

| LO | In-game system(s) | Equation form |
|---|---|---|
| 1 · Base unit | Restore power, Maintain oxygen, Patch fuel leak | `x + a = b`, `b − x = a` |
| 2 · Groups → division | Rewire mainframe, Calibrate scanner, Realign coordinates, Break through atmosphere | `kx = b`, `kx ± c = t` |
| 3 · Replicate → multiplication | Signal Houston, Set ship speed | `x ÷ k = r`, `x ÷ k + c = t` |
| 4 · Variable on both sides | Land the ship | `x + a = 2x` |

## A3 · Rubric coverage matrix

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

Every one of the 10 rubric items maps to at least one slide. Slide 5 names the *knowledge* (not LO-sentences) to match the rubric's struck-through line.

## A4 · Image manifest

All 11 images live in `images/` alongside this file:

| File | Used on slide |
|---|---|
| `01-home.png` | 1 |
| `02-mission-control.png` | 7 |
| `03-briefing.png` | 2 |
| `04-phone-task.png` | 8 |
| `05-phone-hint-steps.png` | 12 |
| `06-logbook-cover.png` | 9 |
| `07-logbook-fold-cut.png` | 8 |
| `08-race.png` | 15 |
| `09-splashdown.png` | 15 |
| `10-debrief.png` | 9 |
| `11-story-mode-hidden.png` | 13 |
