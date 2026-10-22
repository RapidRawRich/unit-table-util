import type { QuestionRecord } from './types.ts';

/**
 * Applies symmetric ROT13 transformation to ASCII alphabetic characters [A-Za-z].
 * Numbers, mathematical symbols, and punctuation remain intact.
 */
export function rot13(input: string): string {
  return input.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

/**
 * Decodes a ROT13-obfuscated QuestionRecord into plain text at runtime.
 */
export function decodeQuestionRecord(encoded: QuestionRecord): QuestionRecord {
  return {
    id: encoded.id,
    section: rot13(encoded.section),
    title: rot13(encoded.title),
    stem: rot13(encoded.stem),
    correctAnswer: rot13(encoded.correctAnswer),
    ilmReference: rot13(encoded.ilmReference),
    explanation: rot13(encoded.explanation),
    steps: encoded.steps ? encoded.steps.map(rot13) : undefined,
    discrepancyNote: encoded.discrepancyNote ? rot13(encoded.discrepancyNote) : undefined,
    image: encoded.image,
    imageCaption: encoded.imageCaption ? rot13(encoded.imageCaption) : undefined,
    distractors: encoded.distractors.map((d) => ({
      text: rot13(d.text),
      whyIncorrect: rot13(d.whyIncorrect),
    })),
  };
}

/**
 * Verifies the landing gate access passcode.
 */
export function verifyPasscode(input: string): boolean {
  const normalized = input.trim();
  if (typeof globalThis.btoa === 'function') {
    return globalThis.btoa(normalized) === 'NDIw';
  }
  return false;
}
