# Spec: Grid Config Utility (`unit-table-util`)

## Assumptions
```
ASSUMPTIONS I'M MAKING:
1. Proceeding through the full agent-skills workflow (Specify → Plan → Tasks → TDD/Incremental Implementation → Code Review → GitHub Pages Launch) autonomously.
2. The GitHub repository is created under your authenticated account (`RapidRawRich`) with an inconspicuous name (`unit-table-util`) and deployed to GitHub Pages (`https://rapidrawrich.github.io/unit-table-util/`).
3. All item stems, correct answers, 9 distractors per item, rationales, and section names are stored ROT13-encoded in source code (`src/data/encodedBank.ts`) and decoded only in memory after unlocking the landing page.
4. Each item presents 4 choices by default (1 correct answer + 3 randomly selected distractors from the 9-distractor pool, shuffled), with an optional selector on the dashboard to display 4, 6, or all 10 choices. Retaking missed items re-samples and re-shuffles distractors from the 9-distractor pool.
5. No `*.pdf` files or local notebook notes will ever be tracked by git or pushed to GitHub.
```

## Capability Map

| Module id | Responsibility | Depends on |
|---|---|---|
| `codec-auth` | ROT13 string obfuscation/deobfuscation and passcode gate | — |
| `question-bank` | ROT13-encoded 100-item dataset (100 correct + 900 distractors + explanations + 6 diagram mappings) | `codec-auth` |
| `quiz-engine` | Pure state machine for modes (Ironman 100, Half Marathon 1–50, Half Marathon 51–100, Random 25, Random 50), distractor randomization, immediate feedback, and wrong-item retake with re-randomized distractors | `question-bank` |
| `ui-shell` | Industrial dark/slate WCAG 2.1 AA responsive web interface (Passcode Gate, Mode Selector, Active View with diagrams & explanations, Results & Retake View) | `codec-auth`, `quiz-engine` |

Build order: `codec-auth` → `question-bank` → `quiz-engine` → `ui-shell`

## Objective
Build and deploy a fast, accessible, responsive web application hosted on GitHub Pages under an inconspicuous repository name (`unit-table-util`) that functions as a 100-item simulation engine with 900 calibrated distractors and 6 reference diagrams.

## Tech Stack
- **Build System**: Vite + TypeScript
- **UI Library**: React 19 + Tailwind CSS
- **Testing**: Node native TypeScript test runner (`node --test`)
- **Linter**: Oxlint
- **Deployment**: `gh-pages` branch via GitHub Pages

## Commands
```bash
Build: npm run build
Test: npm test
Lint: npm run lint
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
    encodedBank.ts    → ROT13-obfuscated 100-item bank + 900 distractors + rationales
  components/
    PasscodeGate.tsx  → Obscure landing screen requiring passcode
    ModeSelector.tsx  → Dashboard to launch Ironman, Half Marathon (1st/2nd), Random 25, or Random 50
    QuestionCard.tsx  → Active item display, diagram viewer, option buttons, and immediate rationale feedback
    ResultsView.tsx   → Score breakdown, missed item review, and "Retake Wrong Questions" action
public/
  assets/             → Cropped figure images (ref_05.png, ref_19.png, ref_20.png, ref_58.png, ref_88.png, ref_93.png)
tests/
  codec.test.ts       → Unit tests for ROT13 roundtrip, passcode check, and plain-text leak prevention
  quizEngine.test.ts  → Unit tests for all 5 modes, distractor randomization, and retake re-randomization
tasks/
  plan.md             → Implementation plan
  todo.md             → Ordered task checklist with verification steps
```

## Code Style
```typescript
export function rot13(input: string): string {
  return input.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}
```

## Testing Strategy
- **Unit Tests (`tests/codec.test.ts`, `tests/quizEngine.test.ts`)**:
  - Verify `rot13` symmetry and passcode validation.
  - Verify `encodedBank` contains all 100 items, 9 distractors per item, and 6 diagram assets while containing zero plain-text leaks in raw storage.
  - Verify all 5 modes produce exact counts and ranges.
  - Verify retake session generation filters only wrong items and re-randomizes distractors.

## Boundaries
- **Always**: Run `npm test`, `npm run lint`, and `npm run build` before every commit; verify `git status` has no `*.pdf` files staged; keep source text ROT13-obfuscated.
- **Ask first**: Modifying the passcode or adding external runtime dependencies.
- **Never**: Commit `*.pdf` or local reference notes to git; expose plain-text questions in `src/`.

## Success Criteria
- [x] Passcode gate blocks access until `"420"` is entered.
- [x] Source code contains ROT13-encoded text.
- [x] All 100 items and 900 distractors + explanations are present and accurate.
- [x] Items 5, 19, 20, 58, 88, and 93 render their corresponding diagrams.
- [x] All 5 modes (Ironman 100, 1st Half 1–50, 2nd Half 51–100, Random 25, Random 50) work accurately.
- [x] Answering wrong immediately displays the correct answer and explanation.
- [x] End-of-test screen allows retaking missed items with newly randomized distractors.
- [x] Zero `*.pdf` files exist in the GitHub repository (`git ls-files "*.pdf"` is empty).
