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

describe('quizEngine: modes, wrong-answer feedback, and retake distractor re-randomization', () => {
  const bank = getDecodedBank();

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

  it('creates Random 25 and Random 50 modes with unique questions', () => {
    const rand25 = createQuizSession(bank, 'random-25', { optionCount: 4 });
    assert.equal(rand25.items.length, 25);
    assert.equal(new Set(rand25.items.map((i) => i.question.id)).size, 25);

    const rand50 = createQuizSession(bank, 'random-50', { optionCount: 4 });
    assert.equal(rand50.items.length, 50);
    assert.equal(new Set(rand50.items.map((i) => i.question.id)).size, 50);
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
  });

  it('creates a retake session with ONLY missed questions and re-randomizes distractors', () => {
    let session = createQuizSession(bank, 'random-25', { optionCount: 4 });

    // Answer Q0 and Q2 wrong, all others right
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

    // Run retake generation multiple times to prove distractors are re-randomized from the 9-distractor pool
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
