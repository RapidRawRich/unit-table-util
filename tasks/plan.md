# Implementation Plan: Grid Config Utility (`unit-table-util`)

## Overview
We are building an obscurely named, passcode-gated (`"420"`) interactive testing engine for the 100-question 3rd Period Instrumentation exam bank, complete with 900 calibrated distractors, ILM derivations, high-resolution diagrams extracted from `3rd_Year_TQ_Question.pdf`, ROT13 source text obfuscation, five test modes (Ironman 100, Half Marathon 1st Half, Half Marathon 2nd Half, Random 25, Random 50), immediate wrong-answer explanations, and a retake-missed-questions workflow that re-randomizes distractors.

## Dependency Graph
```text
Project Scaffold & .gitignore (PDF exclusion)
    │
    ├── Slice 1: Codec & Passcode Gate (codec.ts + tests)
    │       │
    │       └── Slice 2: Diagram Extraction & ROT13 Question Bank (encodedBank.ts + assets + tests)
    │               │
    │               └── Slice 3: Quiz Engine State Machine (quizEngine.ts + tests)
    │                       │
    │                       └── Slice 4: Accessible Industrial UI Shell (React components + build check)
    │                               │
    │                               └── Slice 5: Quality Review & GitHub Pages Deployment
```

## Architecture Decisions
- **ROT13 Compile-Time Encoding + Runtime Decoding**: Storing all strings in `src/data/encodedBank.ts` in ROT13 form guarantees that both the GitHub source tree and the compiled Vite JavaScript bundle contain no plain-text instrumentation terminology until unlocked in browser memory.
- **9-Distractor Pool with Dynamic Sampling**: Each question stores 1 correct answer and 9 calibrated distractors (with individual "Why Incorrect" explanations). When a session starts—or when the user retakes missed questions—the engine samples fresh distractors from the 9-option pool and shuffles option positions so retakes never repeat the same distractor layout.
- **Native PDFKit Diagram Extraction**: Using macOS `PDFKit` via Swift to render and crop the exact diagram regions from `3rd_Year_TQ_Question.pdf` for Q5, Q19, Q20, Q58, Q88, and Q93 into `public/assets/ref_*.png` (obscure filenames).
- **Industrial Slate UI Palette**: Adhering to `frontend-ui-engineering`, we avoid generic AI purple gradients and instead use a high-contrast slate/zinc technical instrument aesthetic with full keyboard shortcuts (`1`–`9`, `Enter`, `Space`) and ARIA live announcements.

## Task List

### Phase 1: Foundation & Security Hygiene
- [ ] Task 1: Initialize Vite + React + TypeScript + Vitest scaffold and strict `.gitignore` excluding `*.pdf` and `NOTEBOOK_REFERENCE.md`
- [ ] Task 2: Implement ROT13 codec and `"420"` passcode verification with TDD (`src/lib/codec.ts`, `tests/codec.test.ts`)

### Checkpoint: Foundation
- [ ] `npm test` passes
- [ ] `git status --ignored` confirms all `*.pdf` files are ignored

### Phase 2: Data & Quiz Engine Core
- [ ] Task 3: Extract diagram images for Q5, Q19, Q20, Q58, Q88, Q93 from `3rd_Year_TQ_Question.pdf` and build ROT13-encoded 100-question / 900-distractor bank (`src/data/encodedBank.ts`)
- [ ] Task 4: Implement Quiz Engine for all 5 modes, immediate feedback, and retake distractor re-randomization with TDD (`src/lib/quizEngine.ts`, `tests/quizEngine.test.ts`)

### Checkpoint: Core Engine
- [ ] All unit tests in `tests/codec.test.ts` and `tests/quizEngine.test.ts` pass
- [ ] Zero plain-text leaks verified in `src/data/encodedBank.ts`

### Phase 3: UI Shell & GitHub Pages Launch
- [ ] Task 5: Build accessible UI components (`PasscodeGate`, `ModeSelector`, `QuestionCard`, `ResultsView`) and wire keyboard navigation
- [ ] Task 6: Perform 5-axis code review, create obscure GitHub repo (`unit-table-util`), push non-PDF source, and deploy to GitHub Pages

### Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Live GitHub Pages deployment verified (`HTTP 200`)

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Accidental commit of `*.pdf` or `NOTEBOOK_REFERENCE.md` | High | Add `*.pdf` and `NOTEBOOK_REFERENCE.md` to `.gitignore` in Task 1 and verify with `git ls-files` before every commit and push |
| OCR artifacts in `tq3simdqa.pdf` math formulas | Medium | Cross-check all 100 questions against `tq3simak.pdf` and `3rd_Year_TQ_Question.pdf` during parser generation and clean up LaTeX/symbol artifacts |
| GitHub Pages routing / asset paths | Medium | Configure `base: './'` in `vite.config.ts` so all relative assets (`./assets/ref_05.png`) resolve cleanly on any subpath |
