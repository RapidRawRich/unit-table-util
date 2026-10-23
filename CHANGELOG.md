# Changelog

All notable changes to this project are documented in this file.

## [1.3.1] - 2026-10-22

### Fixed
- **Schematics & Diagrams Display on GitHub Pages**: Normalized all curriculum diagram paths from absolute `/assets/curriculum/` to relative `./assets/curriculum/` across all 5 subject banks (96 images).
- Added `normalizeAssetUrl` utility in `src/lib/assetHelper.ts` with runtime fallback retry in `QuestionCard.tsx` and `ResultsView.tsx`, resolving 404 image errors on GitHub Pages (`/unit-table-util/`).
- Updated `decodeQuestionRecord` in `src/lib/codec.ts` to sanitize any leading root slash on image URLs at runtime.

## [1.3.0] - 2026-10-22

### Added
- **TQ Superstar Option**: Added dedicated subject tab and quick-launch callout card for the acclaimed curated 100-question master TQ simulation (Questions 1–100, 900 distractors, 6 authentic reference diagrams). Features Ironman 100, Front-50 (Q1–Q50), Back-50 (Q51–Q100), Quick Sprint 25, Rapid Drill 50, and Schematics & Diagrams Drill.
- **1,000-Question INST 2022 Curriculum Bank**: Added full 200-question banks across all 5 Alberta Apprenticeship curriculum subjects (Electronic Loops, Measurement, Physical Chemistry, Process Analyzers, Process Control) with 9 calibrated distractors per question and Formula Sheet 2017 LaTeX derivations.
- **Subject Tabs & Proportional Topic Sampling**: Multi-subject navigation with official curriculum weighting badges (22%, 26%, 15%, 17%, 20%) and topic chips.

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
