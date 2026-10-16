# Task List: Grid Config Utility (`unit-table-util`)

## Task 1: Project Scaffold & Git Hygiene
- [x] `.gitignore` explicitly blocks `*.pdf`, `NOTEBOOK_REFERENCE.md`, `node_modules/`, `dist/`, and `scratch/`
- [x] `git status` shows zero `.pdf` files as untracked or staged
- [x] Vite + React + TypeScript + test toolchain is configured

## Task 2: ROT13 Codec & Passcode Verification (TDD)
- [x] `rot13(rot13(text)) === text` for all ASCII characters, numbers, symbols, and Unicode units (`Ω`, `µ`, `°`, `±`)
- [x] `verifyPasscode("420")` returns `true` (trimmed) and rejects other inputs
- [x] Unit tests written first (RED) and passing (GREEN)

## Checkpoint: After Tasks 1–2
- [x] All tests pass
- [x] `.gitignore` verified blocking all PDFs

## Task 3: Diagram Extraction & ROT13 Question Bank Generation
- [x] `public/assets/` contains crisp diagrams for Q5, Q19, Q20, Q58, Q88, and Q93
- [x] `src/data/encodedBank.ts` has all 100 questions, each with 1 correct answer, 9 distractors, section, reference, detailed derivation, and image path where applicable
- [x] Discrepancy corrections for Q33, Q71, Q88, and Q93 verified
- [x] Raw file `src/data/encodedBank.ts` contains zero plain-text leaks

## Task 4: Quiz Engine Modes & Retake Distractor Re-Randomization (TDD)
- [x] Ironman mode selects all 100 questions
- [x] Half Marathon 1st Half selects Q1–Q50; 2nd Half selects Q51–Q100
- [x] Random 25 and Random 50 select 25 and 50 unique random questions respectively
- [x] Answering wrong records the missed question and reveals the correct answer + rationale
- [x] Retake session includes only missed questions from the completed round and re-randomizes both the chosen distractors from the 9-distractor pool and their option order

## Checkpoint: After Tasks 3–4
- [x] All unit tests pass (`npm test`)
- [x] 100 questions and 6 diagrams verified by automated test assertions

## Task 5: Accessible Industrial Web UI
- [x] Landing page displays obscure utility gate requiring `"420"`
- [x] Mode selector offers Ironman (100), Half Marathon 1st Half (1–50), Half Marathon 2nd Half (51–100), Random 25, and Random 50, plus option count selector (4 / 6 / 10 choices) and question order toggle
- [x] Question view renders diagrams for Q5, Q19, Q20, Q58, Q88, Q93, supports keyboard shortcuts, and immediately reveals the correct answer + explanation + distractor analysis when answered wrong
- [x] Results view displays accuracy, section breakdown, missed questions review, and "Retake Wrong Questions (Re-Randomize Distractors)" button

## Task 6: Five-Axis Code Review, Git History & GitHub Pages Deployment
- [x] `git ls-files "*.pdf"` is empty
- [x] `dist/` bundle contains zero plain-text exam strings
- [x] GitHub repository created and deployed to GitHub Pages
