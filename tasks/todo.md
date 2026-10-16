# Task List: Grid Config Utility (`unit-table-util`)

## Task 1: Project Scaffold & Git Hygiene
**Description:** Initialize the project structure (`package.json`, `tsconfig.json`, `vite.config.ts`, `.gitignore`) and initialize git repository with strict exclusions for `*.pdf` and `NOTEBOOK_REFERENCE.md`.

**Acceptance criteria:**
- [ ] `.gitignore` explicitly blocks `*.pdf`, `NOTEBOOK_REFERENCE.md`, `node_modules/`, `dist/`, and `scratch/`
- [ ] `git status` shows zero `.pdf` files as untracked or staged
- [ ] Vite + React + TypeScript + Vitest toolchain is configured

**Verification:**
- [ ] `git status --ignored` lists `3rd_Year_TQ_Question.pdf`, `tq3simak.pdf`, `tq3simdqa.pdf`, and `NOTEBOOK_REFERENCE.md` under ignored files

**Dependencies:** None

**Files likely touched:**
- `.gitignore`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`

**Estimated scope:** Small (4 files)

---

## Task 2: ROT13 Codec & Passcode Verification (TDD)
**Description:** Implement `rot13` string encoding/decoding, object deep-decoding, and `"420"` passcode validation in `src/lib/codec.ts`, driven by unit tests in `tests/codec.test.ts`.

**Acceptance criteria:**
- [ ] `rot13(rot13(text)) === text` for all ASCII characters, numbers, symbols, and Unicode units (`Ω`, `µ`, `°`, `±`)
- [ ] `verifyPasscode("420")` returns `true` (trimmed) and rejects other inputs
- [ ] Unit tests written first (RED) and passing (GREEN)

**Verification:**
- [ ] Tests pass: `npm test -- tests/codec.test.ts`

**Dependencies:** Task 1

**Files likely touched:**
- `src/lib/types.ts`
- `src/lib/codec.ts`
- `tests/codec.test.ts`

**Estimated scope:** Small (3 files)

---

## Checkpoint: After Tasks 1–2
- [ ] All tests pass
- [ ] `.gitignore` verified blocking all PDFs

---

## Task 3: Diagram Extraction & ROT13 Question Bank Generation
**Description:** Extract the 6 question diagrams (Q5, Q19, Q20, Q58, Q88, Q93) from `3rd_Year_TQ_Question.pdf` into `public/assets/ref_*.png`, parse and clean all 100 questions + 900 distractors + ILM explanations from `tq3simdqa.pdf` and `tq3simak.pdf`, and encode them with ROT13 into `src/data/encodedBank.ts`.

**Acceptance criteria:**
- [ ] `public/assets/` contains crisp cropped diagrams for Q5, Q19, Q20, Q58, Q88, and Q93 from `3rd_Year_TQ_Question.pdf`
- [ ] `src/data/encodedBank.ts` has all 100 questions, each with 1 correct answer, 9 distractors, section, ILM reference, detailed derivation, and image path where applicable
- [ ] Discrepancy corrections for Q33, Q71, Q88, and Q93 match ILM key
- [ ] Raw file `src/data/encodedBank.ts` contains zero plain-text occurrences of words like `transmitter`, `flowmeter`, `Alberta`, or `Faraday`

**Verification:**
- [ ] Tests pass: `npm test`

**Dependencies:** Task 2

**Files likely touched:**
- `public/assets/ref_05.png`
- `public/assets/ref_19.png`
- `public/assets/ref_20.png`
- `public/assets/ref_58.png`
- `public/assets/ref_88.png`
- `public/assets/ref_93.png`
- `src/data/encodedBank.ts`

**Estimated scope:** Medium (7 files)

---

## Task 4: Quiz Engine Modes & Retake Distractor Re-Randomization (TDD)
**Description:** Implement pure state functions in `src/lib/quizEngine.ts` supporting all 5 modes (`ironman`, `half-1`, `half-2`, `random-25`, `random-50`), configurable choice counts (default 4: 1 correct + 3 random distractors from the 9-distractor pool), immediate answer evaluation, and `createRetakeSession` which filters missed questions and freshly re-randomizes distractors.

**Acceptance criteria:**
- [ ] Ironman mode selects all 100 questions
- [ ] Half Marathon 1st Half selects Q1–Q50; 2nd Half selects Q51–Q100
- [ ] Random 25 and Random 50 select 25 and 50 unique random questions respectively
- [ ] Answering wrong records the missed question and reveals the correct answer + rationale
- [ ] Retake session includes only missed questions from the completed round and re-randomizes both the chosen distractors from the 9-distractor pool and their option order

**Verification:**
- [ ] Tests pass: `npm test -- tests/quizEngine.test.ts`

**Dependencies:** Task 3

**Files likely touched:**
- `src/lib/quizEngine.ts`
- `tests/quizEngine.test.ts`

**Estimated scope:** Small (2 files)

---

## Checkpoint: After Tasks 3–4
- [ ] All unit tests pass (`npm test`)
- [ ] 100 questions and 6 diagrams verified by automated test assertions

---

## Task 5: Accessible Industrial Web UI
**Description:** Build the React UI (`PasscodeGate`, `ModeSelector`, `QuestionCard`, `ResultsView`, `App`) following `frontend-ui-engineering` guidelines (slate/zinc technical aesthetic, WCAG 2.1 AA contrast, keyboard navigation, responsive layout).

**Acceptance criteria:**
- [ ] Landing page displays obscure utility gate requiring `"420"`
- [ ] Mode selector offers Ironman (100), Half Marathon 1st Half (1–50), Half Marathon 2nd Half (51–100), Random 25, and Random 50, plus option count selector (4 choices standard / 6 / 10 choices) and question order toggle
- [ ] Question view renders diagrams for Q5, Q19, Q20, Q58, Q88, Q93, supports keyboard shortcuts, and immediately reveals the correct answer + ILM explanation + distractor analysis when answered wrong
- [ ] Results view displays accuracy, section breakdown, missed questions review, and "Retake Wrong Questions (Re-Randomize Distractors)" button

**Verification:**
- [ ] Build succeeds: `npm run build`
- [ ] Full test suite passes: `npm test`

**Dependencies:** Task 4

**Files likely touched:**
- `index.html`
- `src/App.tsx`
- `src/main.tsx`
- `src/components/PasscodeGate.tsx`
- `src/components/ModeSelector.tsx`
- `src/components/QuestionCard.tsx`
- `src/components/ResultsView.tsx`

**Estimated scope:** Medium (7 files)

---

## Task 6: Five-Axis Code Review, Git History & GitHub Pages Deployment
**Description:** Run the 5-axis code review (`code-review-and-quality`) and pre-launch checks (`shipping-and-launch`), update `CHANGELOG.md` and `README.md`, create the obscure GitHub repository (`unit-table-util`), push `main` (verifying zero PDFs), and deploy `dist/` to `gh-pages`.

**Acceptance criteria:**
- [ ] `git ls-files "*.pdf"` is empty
- [ ] `dist/` bundle contains zero plain-text exam strings
- [ ] GitHub repository created and GitHub Pages live at `https://rapidrawrich.github.io/unit-table-util/`

**Verification:**
- [ ] `npm test && npm run build`
- [ ] Verify deployed GitHub Pages URL responds

**Dependencies:** Task 5

**Files likely touched:**
- `CHANGELOG.md`
- `README.md`
- `tasks/todo.md`

**Estimated scope:** Small (3 files)
