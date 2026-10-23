import { decodeQuestionRecord } from './codec.ts';
import { ENCODED_QUESTION_BANK } from '../data/encodedBank.ts';
import { getAllQuestions, SUBJECT_METADATA_MAP } from '../data/questionBanks.ts';
import type {
  QuestionRecord,
  QuizSession,
  RenderedOption,
  SessionQuestion,
  SubjectId,
  SubjectMetadata,
  TestMode,
} from './types.ts';

let cachedLegacyBank: QuestionRecord[] | null = null;
let cachedAllQuestions: QuestionRecord[] | null = null;

/**
 * Returns decoded 100-question bank (IDs 1-100).
 */
export function getDecodedBank(): QuestionRecord[] {
  if (!cachedLegacyBank) {
    cachedLegacyBank = ENCODED_QUESTION_BANK.map(decodeQuestionRecord);
  }
  return cachedLegacyBank;
}

/**
 * Returns all 1,000 decoded curriculum questions (IDs 101-1100).
 */
export function getDecodedAllQuestions(): QuestionRecord[] {
  if (!cachedAllQuestions) {
    cachedAllQuestions = getAllQuestions();
  }
  return cachedAllQuestions;
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

export function getModeLabel(mode: TestMode, subjectMeta?: SubjectMetadata): string {
  if (subjectMeta?.id === 'tq_superstar') {
    switch (mode) {
      case 'ironman':
        return 'TQ Superstar Ironman 100 — Master Exam Simulation';
      case 'half-1':
        return 'TQ Superstar Front-50 (Questions 1–50)';
      case 'half-2':
        return 'TQ Superstar Back-50 (Questions 51–100)';
      case 'random-25':
        return 'TQ Superstar Quick Sprint (25 Questions)';
      case 'random-50':
        return 'TQ Superstar Rapid Drill (50 Questions)';
      case 'diagrams':
        return 'TQ Superstar Schematics & Diagrams Drill (6 Authentic Diagrams)';
      case 'retake':
        return 'Retake Missed Questions (Re-Randomized Distractors)';
    }
  }

  const prefix = subjectMeta && subjectMeta.id !== 'all' ? `[${subjectMeta.shortTitle}] ` : '';
  switch (mode) {
    case 'ironman':
      return subjectMeta?.id === 'all'
        ? 'Official 100-Question Simulated Exam (Weighted 22/26/15/17/20%)'
        : `${prefix}Full Subject Bank (${subjectMeta?.totalQuestions ?? 200} Questions)`;
    case 'half-1':
      return `${prefix}Half Drill — Part 1 (First Half)`;
    case 'half-2':
      return `${prefix}Half Drill — Part 2 (Second Half)`;
    case 'random-25':
      return `${prefix}Quick Sprint — Proportional 25 Questions`;
    case 'random-50':
      return `${prefix}Rapid Drill — Proportional 50 Questions`;
    case 'diagrams':
      return `${prefix}Schematics & Diagrams Mastery Drill`;
    case 'retake':
      return 'Retake Missed Questions (Re-Randomized Distractors)';
  }
}

/**
 * Samples `targetCount` questions proportionally from curriculum categories (topics or sections)
 * using the Largest Remainder (Hamilton) method so every category is represented in exact
 * proportion to its weight in the bank.
 */
export function sampleProportionallyByGrouping(
  bank: readonly QuestionRecord[],
  targetCount: number,
  groupKey: (q: QuestionRecord) => string
): QuestionRecord[] {
  if (targetCount >= bank.length) {
    return shuffleArray(bank);
  }

  const groups = new Map<string, QuestionRecord[]>();
  for (const q of bank) {
    const key = groupKey(q);
    const bucket = groups.get(key) ?? [];
    bucket.push(q);
    groups.set(key, bucket);
  }

  interface QuotaEntry {
    key: string;
    questions: QuestionRecord[];
    floor: number;
    remainder: number;
    allocated: number;
  }

  const entries: QuotaEntry[] = [];
  let allocatedSum = 0;

  for (const [key, questions] of groups.entries()) {
    const exact = (questions.length * targetCount) / bank.length;
    const floor = Math.floor(exact);
    const remainder = exact - floor;
    allocatedSum += floor;
    entries.push({
      key,
      questions,
      floor,
      remainder,
      allocated: floor,
    });
  }

  const remainingToAllocate = targetCount - allocatedSum;
  if (remainingToAllocate > 0) {
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
 * Samples `targetCount` questions proportionally from each curriculum subject (`section`)
 * using the Largest Remainder (Hamilton) method.
 */
export function sampleProportionallyBySection(
  bank: readonly QuestionRecord[],
  targetCount: number
): QuestionRecord[] {
  return sampleProportionallyByGrouping(bank, targetCount, (q) => q.section);
}

/**
 * Creates a new QuizSession for any subject and test mode.
 */
export function createQuizSession(
  bank: readonly QuestionRecord[],
  mode: Exclude<TestMode, 'retake'>,
  config: CreateSessionConfig = {},
  subjectId: SubjectId = 'all'
): QuizSession {
  const optionCount = config.optionCount ?? 4;
  const shouldShuffle =
    config.shuffleQuestions ?? (mode === 'random-25' || mode === 'random-50' || mode === 'diagrams');

  let selectedQuestions: QuestionRecord[];
  const subjectMeta = SUBJECT_METADATA_MAP[subjectId];

  if (bank.length === 100 || subjectId === 'tq_superstar') {
    // 100-Question TQ Superstar / Master Bank
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
      case 'diagrams': {
        const withDiagrams = bank.filter((q) => Boolean(q.image));
        selectedQuestions = withDiagrams.length > 0 ? shuffleArray(withDiagrams) : [...bank.slice(0, 25)];
        break;
      }
    }
  } else if (subjectId === 'all') {
    // Full 1,000-Question 5-Subject Bank
    switch (mode) {
      case 'ironman': {
        // Official 100-Question Simulated Exam strictly weighted across 5 subjects:
        // S1 (22 Qs), S2 (26 Qs), S3 (15 Qs), S4 (17 Qs), S5 (20 Qs) = 100 Qs!
        const s1 = bank.filter((q) => q.subjectId === 's1_loops');
        const s2 = bank.filter((q) => q.subjectId === 's2_measurement');
        const s3 = bank.filter((q) => q.subjectId === 's3_chemistry');
        const s4 = bank.filter((q) => q.subjectId === 's4_analyzers');
        const s5 = bank.filter((q) => q.subjectId === 's5_control');

        selectedQuestions = [
          ...sampleProportionallyByGrouping(s1, 22, (q) => q.topic ?? q.section),
          ...sampleProportionallyByGrouping(s2, 26, (q) => q.topic ?? q.section),
          ...sampleProportionallyByGrouping(s3, 15, (q) => q.topic ?? q.section),
          ...sampleProportionallyByGrouping(s4, 17, (q) => q.topic ?? q.section),
          ...sampleProportionallyByGrouping(s5, 20, (q) => q.topic ?? q.section),
        ];
        break;
      }
      case 'half-1':
        selectedQuestions = bank.slice(0, 500);
        break;
      case 'half-2':
        selectedQuestions = bank.slice(500);
        break;
      case 'random-25':
        selectedQuestions = sampleProportionallyByGrouping(bank, 25, (q) => q.subjectId ?? q.section);
        break;
      case 'random-50':
        selectedQuestions = sampleProportionallyByGrouping(bank, 50, (q) => q.subjectId ?? q.section);
        break;
      case 'diagrams': {
        const withDiagrams = bank.filter((q) => Boolean(q.image));
        selectedQuestions = withDiagrams.length > 0 ? shuffleArray(withDiagrams) : [...bank.slice(0, 25)];
        break;
      }
    }
  } else {
    // Single Subject Bank (200 Questions)
    switch (mode) {
      case 'ironman':
        selectedQuestions = [...bank];
        break;
      case 'half-1':
        selectedQuestions = bank.slice(0, 100);
        break;
      case 'half-2':
        selectedQuestions = bank.slice(100);
        break;
      case 'random-25':
        selectedQuestions = sampleProportionallyByGrouping(bank, 25, (q) => q.topic ?? q.section);
        break;
      case 'random-50':
        selectedQuestions = sampleProportionallyByGrouping(bank, 50, (q) => q.topic ?? q.section);
        break;
      case 'diagrams': {
        const withDiagrams = bank.filter((q) => Boolean(q.image));
        selectedQuestions = withDiagrams.length > 0 ? shuffleArray(withDiagrams) : [...bank.slice(0, 25)];
        break;
      }
    }
  }

  if (shouldShuffle && mode !== 'random-25' && mode !== 'random-50' && mode !== 'diagrams') {
    selectedQuestions = shuffleArray(selectedQuestions);
  }

  const items: SessionQuestion[] = selectedQuestions.map((question) => ({
    question,
    options: buildRandomizedOptions(question, optionCount),
    selectedOptionId: null,
    isCorrect: null,
  }));

  return {
    subjectId,
    mode,
    modeLabel: getModeLabel(mode, subjectMeta),
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
    const sec = item.question.topic || item.question.section;
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
    subjectId: previousSession.subjectId,
    mode: 'retake',
    modeLabel: `${getModeLabel('retake')} — Round ${previousSession.roundNumber + 1}`,
    optionCount: previousSession.optionCount,
    items,
    currentIndex: 0,
    completed: false,
    roundNumber: previousSession.roundNumber + 1,
  };
}
