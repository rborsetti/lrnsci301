# Bring Them Home · Final Showcase Bundle

This folder is a **drop-in presentation kit** for `claude.ai/design`. It contains everything needed to generate the 7-minute, 16-slide final showcase deck for *Bring Them Home* (Apollo 13 algebra rescue game).

## What's here

| File | Purpose |
|---|---|
| `00-master-spec.md` | **READ THIS FIRST.** Theme tokens, slide outline, rubric coverage matrix. The shared visual contract for every slide. |
| `01-title.md` … `16-close.md` | One markdown file per slide. Each has: rubric item, time, layout intent, image reference, on-slide copy, and speaker notes. |
| `script.md` | The full speaker script, time-stamped, with `[hand to next presenter]` cues for splitting among teammates. |
| `handout-onepager.md` | Content for a printed one-page supplement (the rubric rewards supplemental materials). |
| `images/` | 11 ready-to-use PNG screenshots, descriptively named. |

## How to use this on claude.ai/design

1. Upload this whole folder.
2. Point the designer at `00-master-spec.md` first so it learns the theme tokens.
3. For each numbered slide file, ask the designer to produce that one slide. The slide file tells it the title, body copy, layout intent, and which image (if any) to embed. Theme stays consistent across slides because every file references the same master spec.
4. Use `script.md` to rehearse.
5. Optionally print `handout-onepager.md` to PDF for hand-out at the room.

## Key constraints (must hold)

- **Total speaker time: 6:40**, with a 20-second buffer to 7:00.
- **Rubric coverage**: every one of the 10 lens items on `Final Showcase Rubric.pdf` has at least one slide assigned. Matrix in `00-master-spec.md`.
- **Knowledge, not LO-sentences**: slide 5 names the *knowledge* (e.g. "Find the value of a base unit"). The rubric strikes through "Students will be able to…": don't add it back.
- **Verbatim content**: the standard, chopped standard, 4 LOs, design argument table, and pre/post questions are lifted verbatim from the group's `Design Plan - 4.xlsx`. Don't paraphrase.

## The game (context for the designer)

- Live URL: `https://lrnsci301.rborsetti.com`
- Printable companion: `https://lrnsci301.rborsetti.com/logbook` (the *Flight Engineer's Logbook*)
- 10 ship "systems" (algebra problems) per mission; teams race or work at their own pace
- One device per crew + one printed logbook per student (where the fold-and-cut paper math actually happens)
- Two modes: **Competition** (live race) and **Story** (own pace, progress hidden by default)
