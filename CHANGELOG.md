# Changelog

All notable changes to this project are documented in this file.

## [1.2.0] - 2026-10-22

### Changed
- Updated the 900 calibrated distractor options and detailed item analyses across all 100 questions from the Version 2.0 distractor test bank.
- Fixed option text color uniformity in `MathText`: removed telltale amber/yellow highlighting on inline math so correct answer options never reveal themselves prematurely.
- Updated Question 52 stem to present the unbalanced combustion equation in LaTeX ($\text{C}_2\text{H}_6 + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O}$) rather than giving away the balanced equation.
- Updated Question 85 to the calibrated first-order lag corner frequency question with exact phase lag derivation.
- Sanitized passcode verification and project documentation to completely remove plaintext passcode descriptions.

## [1.1.0] - 2026-10-15

### Added
- KaTeX LaTeX math typesetting (`$...$` inline and `$$...$$` display equations) across question stems, answer options, distractor explanations, and step-by-step derivations via `MathText` and `parseAndRenderMath`.
- Five-subject curriculum partitioning (`14 / 29 / 18 / 17 / 22`) and Largest Remainder (Hamilton) proportional stratified sampling (`sampleProportionallyBySection`) for `Random 25` and `Random 50` modes.

## [1.0.0] - 2026-10-15

### Added
- Passcode-gated landing screen with ROT13 runtime payload decoding.
- 100-item reference bank with 900 calibrated distractors and 6 embedded diagram figures.
- Five session modes: Ironman (100), Half Marathon 1st Half (1–50), Half Marathon 2nd Half (51–100), Random 25, and Random 50.
- Immediate feedback revealing the correct answer, distractor analysis, and step-by-step derivations whenever an item is answered wrong.
- End-of-session Retake Missed Items workflow that freshly re-randomizes distractors and option positions.
