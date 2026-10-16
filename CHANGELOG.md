# Changelog

All notable changes to this project are documented in this file.

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
