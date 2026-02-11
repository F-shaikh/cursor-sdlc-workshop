# Product Requirements Document (PRD)

> **Instructions:** This is your team's project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** Call Calm

**One-line Description:** A simple web app that guides account executives through breathing exercises before or during stressful sales calls.

**Type:** Web App (single page)

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes** by one person
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!** You need a project that has at least 5 features so everyone on your team can pick one and add it
- Feel free to take one of the ideas below — this exercise is about learning the git flow, collaborating as a team, and understanding where Cursor's features fit into the SDLC

### Good Project Ideas

**Pong** — classic paddle-and-ball game
- _Example features:_ scoreboard, sound effects, difficulty/speed settings

**Memory Card Match** — flip cards to find matching pairs
- _Example features:_ move counter, timer, win animation/confetti

**Drawing Pad** — simple canvas you can sketch on
- _Example features:_ color picker, brush size slider, eraser tool

**Typing Speed Game** — type a passage and measure your words per minute
- _Example features:_ WPM display, accuracy tracker, difficulty levels

**Trivia Quiz** — multiple choice questions with score tracking
- _Example features:_ timer per question, category selector, results summary screen

### Bad Project Ideas (Too Big!)
- Anything with a database -- tell cursor to avoid this
- Anything requiring authentication
- Anything with multiple pages/screens
- Anything that "needs" an API

---

## Team Members & Tasks

> **Important:** Each team member MUST have their own task. Tasks should be independent features that can be built in parallel without stepping on each other's toes.

| Name | Task | Description |
|------|------|-------------|
| Parker | Phase label | Text showing "Breathe in" / "Hold" / "Breathe out" for current step |
| Jesse | Breathing circle animation | Visual circle that grows on inhale and shrinks on exhale |
| Brookey | Duration presets | Buttons to choose 1 min, 3 min, or 5 min session length |
| Krista | Calm color theme | Soothing color palette (e.g. soft blue/green) for the app |
| Pete | Encouraging messages | Short calm phrase shown between cycles ("You've got this", etc.) |

### Task Guidelines
- Each task should add something **visible** to the project
- Tasks should be **independent** — no dependencies on other tasks
- Think: new button, new section, new color scheme, new text, etc.
- Everyone should be able to work at the same time without conflicts

---

## Base MVP (Phase 2)

> **One person** creates the foundation that everyone else builds on.

**What the MVP includes:**
- Single page with one breathing cycle: Inhale (4s) → Hold (4s) → Exhale (4s)
- A Start button that runs the cycle once
- Simple countdown or step indicator (e.g. "4, 3, 2, 1" per phase)
- Minimal styling so the page runs and the cycle is visible

**What it does NOT include:**
- Phase label text (Parker)
- Animated breathing circle (Jesse)
- Duration presets 1/3/5 min (Brookey)
- Calm color theme (Krista)
- Encouraging messages between cycles (Pete)

---

## Feature Slots (Phase 3)

> These are the features team members will add. Design them to be **independent** so people can work in parallel.

### Feature 1: Phase label
- **Assigned to:** Parker
- **Description:** Display clear text for the current phase: "Breathe in", "Hold", or "Breathe out" (and optionally the countdown number).
- **Files to modify/create:** Main app/component that renders the cycle; add or update the element that shows phase text.

### Feature 2: Breathing circle animation
- **Assigned to:** Jesse
- **Description:** A circle (or shape) that smoothly grows during inhale and shrinks during exhale, synced to the timer.
- **Files to modify/create:** Add a visual component (e.g. div/canvas/SVG) and CSS or JS animation tied to the current phase and countdown.

### Feature 3: Duration presets
- **Assigned to:** Brookey
- **Description:** Buttons or controls to choose session length: 1 min, 3 min, or 5 min (number of cycles computed from cycle length).
- **Files to modify/create:** UI for preset selection; wire selection into the timer/session logic so the app stops after the chosen duration.

### Feature 4: Calm color theme
- **Assigned to:** Krista
- **Description:** Apply a soothing color palette (e.g. soft blue, green, or neutral) to background, text, and key elements so the app feels calm during a call.
- **Files to modify/create:** CSS/theme file or style section; update class names or variables used by the main layout and components.

### Feature 5: Encouraging messages
- **Assigned to:** Pete
- **Description:** Between cycles (or at the start of each new cycle), show a short encouraging phrase from a fixed list (e.g. "You've got this", "Stay calm", "One breath at a time").
- **Files to modify/create:** A small list of messages and the component or logic that picks one and displays it at the right moment.

---

## Success Criteria

- [ ] MVP runs locally
- [ ] Each team member has merged at least one PR
- [ ] All features work together without breaking the app
