# Spec: Grid Config Utility (`unit-table-util`)

## Assumptions
```
ASSUMPTIONS I'M MAKING:
1. Because you noted "get this done for me because it's bed time. thanks", we are proceeding through the full agent-skills workflow (Specify → Plan → Tasks → TDD/Incremental Implementation → Code Review → GitHub Pages Launch) autonomously without pausing for interactive turn gates.
2. The GitHub repository will be created under your authenticated account (`RapidRawRich`) with an inconspicuous, boring name (`unit-table-util`) and deployed to GitHub Pages (`https://rapidrawrich.github.io/unit-table-util/`).
3. All question stems, correct answers, 9 distractors per question, rationales, and section names are stored ROT13-encoded in source code (`src/data/encodedBank.ts`) and decoded only in memory after unlocking the landing page with password `"420"`.
4. Each question presents 4 choices by default (1 correct answer + 3 randomly selected distractors from the 9-distractor pool, shuffled), with an optional selector on the dashboard to display 4, 6, or all 10 choices. Retaking missed questions re-samples and re-shuffles distractors from the 9-distractor pool.
5. No `*.pdf` files or `NOTEBOOK_REFERENCE.md` will ever be tracked by git or pushed to GitHub.
```

## Capability Map

| Module id | Responsibility | Depends on |
|---|---|---|
| `codec-auth` | ROT13 string obfuscation/deobfuscation and passcode (`"420"`) gate | — |
| `question-bank` | ROT13-encoded 100-question dataset (100 correct + 900 distractors + ILM explanations + diagram image mappings from `3rd_Year_TQ_Question.pdf`) | `codec-auth` |
| `quiz-engine` | Pure state machine for test modes (Ironman 100, Half Marathon 1–50, Half Marathon 51–100, Random 25, Random 50), distractor randomization, immediate feedback, and wrong-question retake with re-randomized distractors | `question-bank` |
| `ui-shell` | Industrial dark/slate WCAG 2.1 AA responsive web interface (Passcode Gate, Mode Selector, Active Test View with diagrams & explanations, Results & Retake View) | `codec-auth`, `quiz-engine` |

Build order: `codec-auth` → `question-bank` → `quiz-engine` → `ui-shell`

## Objective
Build and deploy a fast, accessible, responsive web application hosted on GitHub Pages under an inconspicuous repository name (`unit-table-util`) that functions as a comprehensive testing engine for the 100-question 3rd Period Instrumentation dataset (`3rd_Year_TQ_Question.pdf`, `tq3simak.pdf`, `tq3simdqa.pdf`, and the attached Gemini Notebook reference).

Key user requirements:
- **Obscurity & Passcode Gate**: Boring repository and page title; landing screen requires passcode `"420"` before unlocking or decoding any content.
- **ROT13 Source Obfuscation**: All plain-text question bank strings in the source code and built bundle are ROT13-encoded so source inspection or text search does not reveal plain-text exam content.
- **Zero PDF Publishing**: `.gitignore` strictly blocks `*.pdf` and local reference notes from git history and GitHub.
- **Source Diagrams**: Questions with figures (Q5, Q19, Q20, Q58, Q88, Q93) display high-resolution cropped diagrams extracted directly from `3rd_Year_TQ_Question.pdf`.
- **Five Test Modes**:
  1. **Ironman Mode**: Full 100-question test (Q1–Q100).
  2. **Half Marathon — First Half**: Questions 1–50.
  3. **Half Marathon — Second Half**: Questions 51–100.
  4. **Random 25**: 25 randomly sampled questions from the 100-question bank.
  5. **Random 50**: 50 randomly sampled questions from the 100-question bank.
- **Immediate Feedback on Wrong Answers**: Whenever the user selects an incorrect option, the engine immediately reveals the correct answer, explains why the selected distractor is wrong, and shows the ILM reference and derivation.
- **End-of-Test Retake Wrong Questions with Re-Randomized Distractors**: At completion, the user can retake only the questions they answered incorrectly, with distractors freshly re-sampled from the 9-distractor pool and re-shuffled in order.

## Tech Stack
- **Build System**: Vite 5 + TypeScript
- **UI Library**: React 19 + Tailwind CSS
- **Testing**: Vitest (unit & integration tests)
- **Deployment**: `gh-pages` branch via GitHub Pages

## Commands
```bash
Build: npm run build
Test: npm test
Dev: npm run dev
Deploy: npm run deploy
```

## Project Structure
```text
src/
  lib/
    codec.ts          → ROT13 encoder/decoder and passcode verification
    quizEngine.ts     → Pure functions for mode selection, option shuffling, scoring, and retake generation
    types.ts          → Core TypeScript interfaces
  data/
    encodedBank.ts    → ROT13-obfuscated 100-question bank + 900 distractors + rationales
  components/
    PasscodeGate.tsx  → Obscure landing screen requiring passcode "420"
    ModeSelector.tsx  → Dashboard to launch Ironman, Half Marathon (1st/2nd), Random 25, or Random 50
    QuestionCard.tsx  → Active question display, diagram viewer, option buttons, and immediate rationale feedback
    ResultsView.tsx   → Score breakdown, missed question review, and "Retake Wrong Questions" action
public/
  assets/             → Cropped figure images from 3rd_Year_TQ_Question.pdf (fig_05.png, fig_19.png, etc.)
tests/
  codec.test.ts       → Unit tests for ROT13 roundtrip, passcode check, and plain-text leak prevention
  quizEngine.test.ts  → Unit tests for all 5 modes, distractor randomization, and retake re-randomization
tasks/
  plan.md             → Implementation plan
  todo.md             → Ordered task checklist with verification steps
```

## Code Style
```typescript
// Pure, deterministic domain functions with explicit types
export function rot13(input: string): string {
  return input.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}
```
- Prefer small, single-responsibility modules (<200 lines per component).
- Use semantic slate/zinc industrial styling (no AI purple/indigo gradients).
- Ensure full keyboard navigation (`1`–`9`/`0`, `Enter`, `ArrowRight`) and WCAG 2.1 AA contrast.

## Testing Strategy
- **Unit Tests (`tests/codec.test.ts`, `tests/quizEngine.test.ts`)**:
  - Verify `rot13` symmetry and passcode `"420"` validation.
  - Verify `encodedBank` contains all 100 questions, 9 distractors per question, image references for Q5, Q19, Q20, Q58, Q88, Q93, and corrected answers for Q33, Q71, Q88, Q93, while containing zero plain-text leaks in raw storage.
  - Verify all 5 test modes produce exact question counts and ranges.
  - Verify retake session generation filters only wrong questions and re-randomizes distractors.

## Boundaries
- **Always**: Run `npm test` and `npm run build` before every commit; verify `git status` has no `*.pdf` files staged; keep source text ROT13-obfuscated.
- **Ask first**: Modifying the passcode or adding external runtime dependencies.
- **Never**: Commit `*.pdf` or `NOTEBOOK_REFERENCE.md` to git; expose plain-text questions in `src/`.

## Success Criteria
- [ ] Passcode gate blocks access until `"420"` is entered.
- [ ] Source code contains ROT13-encoded question text (`grep -i "transmitter" src/data/encodedBank.ts` returns 0 matches).
- [ ] All 100 questions and 900 distractors from `tq3simdqa.pdf` + explanations from `tq3simak.pdf` are present and accurate (including Q33, Q71, Q88, Q93 corrections).
- [ ] Questions 5, 19, 20, 58, 88, and 93 render their corresponding diagrams from `3rd_Year_TQ_Question.pdf`.
- [ ] All 5 modes (Ironman 100, 1st Half 1–50, 2nd Half 51–100, Random 25, Random 50) work accurately.
- [ ] Answering a question wrong immediately displays the correct answer and explanation.
- [ ] End-of-test screen allows retaking missed questions with newly randomized distractors.
- [ ] Zero `*.pdf` files exist in the GitHub repository (`git ls-files "*.pdf"` is empty).
- [ ] Deployed and live on GitHub Pages under a boring repository name.
