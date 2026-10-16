import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getDecodedBank,
  createQuizSession,
  submitAnswer,
  nextQuestion,
  getSessionStats,
  createRetakeSession,
} from '../src/lib/quizEngine.ts';
import { parseAndRenderMath } from '../src/lib/mathFormat.ts';

describe('quizEngine: modes, 5-subject proportional sampling, LaTeX markup, and retake re-randomization', () => {
  const bank = getDecodedBank();

  it('partitions the 100-question bank into the 5 curriculum subjects (14, 29, 18, 17, 22)', () => {
    const countsBySubject = new Map<string, number>();
    for (const q of bank) {
      countsBySubject.set(q.section, (countsBySubject.get(q.section) ?? 0) + 1);
    }
    assert.equal(countsBySubject.size, 5, 'Expected exactly 5 distinct subjects');
    const counts = Array.from(countsBySubject.values());
    assert.deepEqual(counts, [14, 29, 18, 17, 22]);
  });

  it('includes LaTeX math markup ($...$ and $$...$$) in calculation derivations and explanations and renders all 100 questions cleanly with KaTeX', () => {
    const q1 = bank.find((q) => q.id === 1)!;
    assert.ok(q1.explanation.includes('$'), 'Expected Q1 explanation to contain LaTeX math');
    assert.ok(
      q1.steps && q1.steps.some((s) => s.includes('$')),
      'Expected Q1 steps to contain LaTeX math'
    );

    const q88 = bank.find((q) => q.id === 88)!;
    assert.ok(q88.explanation.includes('\\frac'), 'Expected Q88 explanation to contain LaTeX \\frac');

    let totalRenderedMathBlocks = 0;
    for (const q of bank) {
      const fields = [
        q.stem,
        q.correctAnswer,
        q.explanation,
        ...(q.steps ?? []),
        ...(q.discrepancyNote ? [q.discrepancyNote] : []),
        ...q.distractors.flatMap((d) => [d.text, d.whyIncorrect]),
      ];
      for (const text of fields) {
        const segments = parseAndRenderMath(text, true);
        for (const seg of segments) {
          if (seg.type === 'inline-math' || seg.type === 'display-math') {
            totalRenderedMathBlocks += 1;
            assert.ok(seg.html && seg.html.includes('katex'), `Expected KaTeX HTML for Q${q.id}: ${seg.content}`);
          }
        }
      }
    }
    assert.ok(totalRenderedMathBlocks >= 150, `Expected >= 150 KaTeX blocks across the bank, got ${totalRenderedMathBlocks}`);
  });

  it('creates Ironman mode with all 100 questions', () => {
    const session = createQuizSession(bank, 'ironman', { optionCount: 4, shuffleQuestions: false });
    assert.equal(session.items.length, 100);
    assert.equal(session.items[0].question.id, 1);
    assert.equal(session.items[99].question.id, 100);
    for (const item of session.items) {
      assert.equal(item.options.length, 4);
      assert.equal(item.options.filter((o) => o.isCorrect).length, 1);
    }
  });

  it('creates Half Marathon First Half (Q1–Q50) and Second Half (Q51–Q100)', () => {
    const firstHalf = createQuizSession(bank, 'half-1', { optionCount: 4, shuffleQuestions: false });
    assert.equal(firstHalf.items.length, 50);
    assert.deepEqual(
      firstHalf.items.map((i) => i.question.id),
      Array.from({ length: 50 }, (_, idx) => idx + 1)
    );

    const secondHalf = createQuizSession(bank, 'half-2', { optionCount: 4, shuffleQuestions: false });
    assert.equal(secondHalf.items.length, 50);
    assert.deepEqual(
      secondHalf.items.map((i) => i.question.id),
      Array.from({ length: 50 }, (_, idx) => idx + 51)
    );
  });

  it('creates Random 25 and Random 50 modes proportionally across all 5 subjects', () => {
    const subjects = Array.from(new Set(bank.map((q) => q.section)));
    assert.equal(subjects.length, 5);

    // Random 25 proportional quotas for [14, 29, 18, 17, 22] -> [3..4, 7, 4..5, 4, 5..6]
    const rand25 = createQuizSession(bank, 'random-25', { optionCount: 4 });
    assert.equal(rand25.items.length, 25);
    assert.equal(new Set(rand25.items.map((i) => i.question.id)).size, 25);

    const r25Counts = subjects.map(
      (sec) => rand25.items.filter((i) => i.question.section === sec).length
    );
    assert.ok(r25Counts[0] === 3 || r25Counts[0] === 4, `S1 count in Random 25 was ${r25Counts[0]}`);
    assert.equal(r25Counts[1], 7, `S2 count in Random 25 was ${r25Counts[1]}`);
    assert.ok(r25Counts[2] === 4 || r25Counts[2] === 5, `S3 count in Random 25 was ${r25Counts[2]}`);
    assert.equal(r25Counts[3], 4, `S4 count in Random 25 was ${r25Counts[3]}`);
    assert.ok(r25Counts[4] === 5 || r25Counts[4] === 6, `S5 count in Random 25 was ${r25Counts[4]}`);

    // Random 50 proportional quotas for [14, 29, 18, 17, 22] -> [7, 14..15, 9, 8..9, 11]
    const rand50 = createQuizSession(bank, 'random-50', { optionCount: 4 });
    assert.equal(rand50.items.length, 50);
    assert.equal(new Set(rand50.items.map((i) => i.question.id)).size, 50);

    const r50Counts = subjects.map(
      (sec) => rand50.items.filter((i) => i.question.section === sec).length
    );
    assert.equal(r50Counts[0], 7, `S1 count in Random 50 was ${r50Counts[0]}`);
    assert.ok(r50Counts[1] === 14 || r50Counts[1] === 15, `S2 count in Random 50 was ${r50Counts[1]}`);
    assert.equal(r50Counts[2], 9, `S3 count in Random 50 was ${r50Counts[2]}`);
    assert.ok(r50Counts[3] === 8 || r50Counts[3] === 9, `S4 count in Random 50 was ${r50Counts[3]}`);
    assert.equal(r50Counts[4], 11, `S5 count in Random 50 was ${r50Counts[4]}`);
  });

  it('evaluates answers immediately and exposes the correct answer when answered wrong', () => {
    let session = createQuizSession(bank, 'random-25', { optionCount: 4, shuffleQuestions: false });
    const firstItem = session.items[0];
    const wrongOption = firstItem.options.find((o) => !o.isCorrect)!;
    const rightOption = firstItem.options.find((o) => o.isCorrect)!;

    session = submitAnswer(session, wrongOption.id);
    assert.equal(session.items[0].selectedOptionId, wrongOption.id);
    assert.equal(session.items[0].isCorrect, false);
    assert.equal(rightOption.text, firstItem.question.correctAnswer);
    assert.ok(wrongOption.whyIncorrect && wrongOption.whyIncorrect.length > 0);

    session = nextQuestion(session);
    assert.equal(session.currentIndex, 1);
  });

  it('creates a retake session with ONLY missed questions and re-randomizes distractors', () => {
    let session = createQuizSession(bank, 'random-25', { optionCount: 4 });

    for (let i = 0; i < session.items.length; i++) {
      session = { ...session, currentIndex: i };
      const item = session.items[i];
      const targetOption =
        i === 0 || i === 2
          ? item.options.find((o) => !o.isCorrect)!
          : item.options.find((o) => o.isCorrect)!;
      session = submitAnswer(session, targetOption.id);
    }

    const stats = getSessionStats(session);
    assert.equal(stats.total, 25);
    assert.equal(stats.correct, 23);
    assert.equal(stats.wrong, 2);

    const missedIds = [session.items[0].question.id, session.items[2].question.id];
    const originalOptionSignatures = session.items[0].options.map((o) => o.text).join('|');

    let sawDifferentDistractorSet = false;
    for (let attempt = 0; attempt < 15; attempt++) {
      const retake = createRetakeSession(session);
      assert.equal(retake.mode, 'retake');
      assert.equal(retake.roundNumber, 2);
      assert.equal(retake.items.length, 2);
      assert.deepEqual(
        new Set(retake.items.map((i) => i.question.id)),
        new Set(missedIds)
      );

      const retakeFirst = retake.items.find((i) => i.question.id === missedIds[0])!;
      assert.equal(retakeFirst.selectedOptionId, null);
      assert.equal(retakeFirst.isCorrect, null);
      assert.equal(retakeFirst.options.length, 4);
      assert.equal(retakeFirst.options.filter((o) => o.isCorrect).length, 1);

      const newSig = retakeFirst.options.map((o) => o.text).join('|');
      if (newSig !== originalOptionSignatures) {
        sawDifferentDistractorSet = true;
      }
    }
    assert.equal(
      sawDifferentDistractorSet,
      true,
      'Expected retake session to re-randomize distractors and option order'
    );
  });
});
