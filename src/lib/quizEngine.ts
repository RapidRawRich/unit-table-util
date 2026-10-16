import { decodeQuestionRecord, rot13 } from './codec.ts';
import { ENCODED_QUESTION_BANK } from '../data/encodedBank.ts';
import type {
  QuestionRecord,
  QuizSession,
  RenderedOption,
  SessionQuestion,
  TestMode,
} from './types.ts';

let cachedDecodedBank: QuestionRecord[] | null = null;

/**
 * Decodes the ROT13 question bank in memory once unlocked.
 */
export function getDecodedBank(): QuestionRecord[] {
  if (!cachedDecodedBank) {
    cachedDecodedBank = ENCODED_QUESTION_BANK.map(decodeQuestionRecord);
  }
  return cachedDecodedBank;
}

/**
 * Unbiased Fisher-Yates shuffle returning a new array.
 */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

/**
 * Builds randomized multiple-choice options for a question by sampling from its 9 distractors
 * and shuffling the correct answer with the sampled distractors.
 * When `previousTexts` is provided (e.g. during a retake), prioritizes distractors not shown
 * in the immediately preceding attempt so the distractor set is guaranteed to re-randomize.
 */
export function buildRandomizedOptions(
  question: QuestionRecord,
  optionCount = 4,
  previousDistractorTexts?: Set<string>
): RenderedOption[] {
  const clampedCount = Math.max(2, Math.min(10, optionCount));
  const neededDistractors = clampedCount - 1;

  let pool = shuffleArray(question.distractors);
  if (previousDistractorTexts && previousDistractorTexts.size > 0 && neededDistractors < 9) {
    const fresh = pool.filter((d) => !previousDistractorTexts.has(d.text));
    const seen = pool.filter((d) => previousDistractorTexts.has(d.text));
    pool = [...fresh, ...seen];
  }

  const chosenDistractors = pool.slice(0, neededDistractors);
  const rawOptions: Omit<RenderedOption, 'id'>[] = [
    {
      text: question.correctAnswer,
      isCorrect: true,
    },
    ...chosenDistractors.map((d) => ({
      text: d.text,
      isCorrect: false,
      whyIncorrect: d.whyIncorrect,
    })),
  ];

  const shuffled = shuffleArray(rawOptions);
  return shuffled.map((opt, idx) => ({
    ...opt,
    id: `q${question.id}-opt-${idx}-${Math.random().toString(36).slice(2, 7)}`,
  }));
}

export interface CreateSessionConfig {
  optionCount?: number;
  shuffleQuestions?: boolean;
}

export function getModeLabel(mode: TestMode): string {
  switch (mode) {
    case 'ironman':
      return rot13('Vebazna Zbqr (Shyy 100 Dhrfgvbaf)');
    case 'half-1':
      return rot13('Unys Znenguba — Svefg Unys (D1–D50)');
    case 'half-2':
      return rot13('Unys Znenguba — Frpbaq Unys (D51–D100)');
    case 'random-25':
      return rot13('Dhvpx Fcevag — Enaqbz 25 Dhrfgvbaf');
    case 'random-50':
      return rot13('Raqhenapr — Enaqbz 50 Dhrfgvbaf');
    case 'retake':
      return rot13('Ergnxr Zvffrq Dhrfgvbaf (Er-Enaqbzvmrq Qvfgenpgbef)');
  }
}

/**
 * Samples `targetCount` questions proportionally from each curriculum subject (`section`)
 * using the Largest Remainder (Hamilton) method so every subject is represented in exact
 * proportion to its weight in the bank.
 */
export function sampleProportionallyBySection(
  bank: readonly QuestionRecord[],
  targetCount: number
): QuestionRecord[] {
  if (targetCount >= bank.length) {
    return shuffleArray(bank);
  }

  const groups = new Map<string, QuestionRecord[]>();
  for (const q of bank) {
    const bucket = groups.get(q.section) ?? [];
    bucket.push(q);
    groups.set(q.section, bucket);
  }

  interface QuotaEntry {
    section: string;
    questions: QuestionRecord[];
    floor: number;
    remainder: number;
    allocated: number;
  }

  const entries: QuotaEntry[] = [];
  let allocatedSum = 0;

  for (const [section, questions] of groups.entries()) {
    const exact = (questions.length * targetCount) / bank.length;
    const floor = Math.floor(exact);
    const remainder = exact - floor;
    allocatedSum += floor;
    entries.push({
      section,
      questions,
      floor,
      remainder,
      allocated: floor,
    });
  }

  const remainingToAllocate = targetCount - allocatedSum;
  if (remainingToAllocate > 0) {
    // Shuffle first so tied remainders are broken randomly without bias
    const byRemainder = shuffleArray(entries).sort((a, b) => b.remainder - a.remainder);
    for (let i = 0; i < remainingToAllocate && i < byRemainder.length; i++) {
      byRemainder[i].allocated += 1;
    }
  }

  const sampled: QuestionRecord[] = [];
  for (const entry of entries) {
    const picked = shuffleArray(entry.questions).slice(0, entry.allocated);
    sampled.push(...picked);
  }

  return shuffleArray(sampled);
}

/**
 * Creates a new QuizSession for any of the 5 primary test modes.
 */
export function createQuizSession(
  bank: readonly QuestionRecord[],
  mode: Exclude<TestMode, 'retake'>,
  config: CreateSessionConfig = {}
): QuizSession {
  const optionCount = config.optionCount ?? 4;
  const shouldShuffle =
    config.shuffleQuestions ?? (mode === 'random-25' || mode === 'random-50');

  let selectedQuestions: QuestionRecord[];

  switch (mode) {
    case 'ironman':
      selectedQuestions = [...bank];
      break;
    case 'half-1':
      selectedQuestions = bank.filter((q) => q.id >= 1 && q.id <= 50);
      break;
    case 'half-2':
      selectedQuestions = bank.filter((q) => q.id >= 51 && q.id <= 100);
      break;
    case 'random-25':
      selectedQuestions = sampleProportionallyBySection(bank, 25);
      break;
    case 'random-50':
      selectedQuestions = sampleProportionallyBySection(bank, 50);
      break;
  }

  if (shouldShuffle && mode !== 'random-25' && mode !== 'random-50') {
    selectedQuestions = shuffleArray(selectedQuestions);
  }

  const items: SessionQuestion[] = selectedQuestions.map((question) => ({
    question,
    options: buildRandomizedOptions(question, optionCount),
    selectedOptionId: null,
    isCorrect: null,
  }));

  return {
    mode,
    modeLabel: getModeLabel(mode),
    optionCount,
    items,
    currentIndex: 0,
    completed: false,
    roundNumber: 1,
  };
}

/**
 * Records the user's selected option for the current question and evaluates correctness immediately.
 */
export function submitAnswer(session: QuizSession, optionId: string): QuizSession {
  const current = session.items[session.currentIndex];
  if (!current || current.selectedOptionId !== null) {
    return session;
  }

  const chosen = current.options.find((o) => o.id === optionId);
  if (!chosen) {
    return session;
  }

  const updatedItems = session.items.map((item, idx) =>
    idx === session.currentIndex
      ? {
          ...item,
          selectedOptionId: optionId,
          isCorrect: chosen.isCorrect,
        }
      : item
  );

  return {
    ...session,
    items: updatedItems,
  };
}

/**
 * Advances to the next question or marks the session as completed if on the final question.
 */
export function nextQuestion(session: QuizSession): QuizSession {
  if (session.currentIndex + 1 < session.items.length) {
    return {
      ...session,
      currentIndex: session.currentIndex + 1,
    };
  }
  return {
    ...session,
    completed: true,
  };
}

/**
 * Jumps directly to a specific question index.
 */
export function goToQuestion(session: QuizSession, index: number): QuizSession {
  if (index < 0 || index >= session.items.length) {
    return session;
  }
  return {
    ...session,
    currentIndex: index,
  };
}

export interface SessionStats {
  total: number;
  answered: number;
  correct: number;
  wrong: number;
  percentage: number;
  wrongItems: SessionQuestion[];
  bySection: Record<string, { total: number; correct: number }>;
}

/**
 * Computes score, accuracy percentage, missed questions, and section breakdown.
 */
export function getSessionStats(session: QuizSession): SessionStats {
  let answered = 0;
  let correct = 0;
  let wrong = 0;
  const wrongItems: SessionQuestion[] = [];
  const bySection: Record<string, { total: number; correct: number }> = {};

  for (const item of session.items) {
    const sec = item.question.section;
    if (!bySection[sec]) {
      bySection[sec] = { total: 0, correct: 0 };
    }
    bySection[sec].total += 1;

    if (item.selectedOptionId !== null) {
      answered += 1;
      if (item.isCorrect) {
        correct += 1;
        bySection[sec].correct += 1;
      } else {
        wrong += 1;
        wrongItems.push(item);
      }
    }
  }

  const total = session.items.length;
  const percentage = total > 0 ? Math.round((correct / total) * 1000) / 10 : 0;

  return {
    total,
    answered,
    correct,
    wrong,
    percentage,
    wrongItems,
    bySection,
  };
}

/**
 * Creates a new Retake session containing ONLY the questions the user got wrong
 * in the previous session, while freshly re-randomizing the distractors and option order.
 */
export function createRetakeSession(previousSession: QuizSession): QuizSession {
  const missedItems = previousSession.items.filter((item) => item.isCorrect === false);
  const shuffledMissed = shuffleArray(missedItems);

  const items: SessionQuestion[] = shuffledMissed.map((prevItem) => {
    const previousDistractorTexts = new Set(
      prevItem.options.filter((o) => !o.isCorrect).map((o) => o.text)
    );
    return {
      question: prevItem.question,
      options: buildRandomizedOptions(
        prevItem.question,
        previousSession.optionCount,
        previousDistractorTexts
      ),
      selectedOptionId: null,
      isCorrect: null,
    };
  });

  return {
    mode: 'retake',
    modeLabel: `${getModeLabel('retake')} — Round ${previousSession.roundNumber + 1}`,
    optionCount: previousSession.optionCount,
    items,
    currentIndex: 0,
    completed: false,
    roundNumber: previousSession.roundNumber + 1,
  };
}
