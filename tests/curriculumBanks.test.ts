import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  SUBJECT_METADATA_MAP,
  getSubjectQuestions,
  getAllQuestions,
} from '../src/data/questionBanks.ts';
import { createQuizSession } from '../src/lib/quizEngine.ts';
import type { SubjectId } from '../src/lib/types.ts';

describe('Curriculum Banks: 1,000 Multiple-Choice Questions, 9 Distractors, Official Weighting', () => {
  it('verifies all 5 subjects exist with 200 questions each (1,000 questions total)', () => {
    const subjectIds: SubjectId[] = [
      's1_loops',
      's2_measurement',
      's3_chemistry',
      's4_analyzers',
      's5_control',
    ];

    let grandTotal = 0;
    for (const sid of subjectIds) {
      const questions = getSubjectQuestions(sid);
      const meta = SUBJECT_METADATA_MAP[sid];
      assert.equal(
        questions.length,
        200,
        `Expected ${sid} (${meta.title}) to have exactly 200 questions, got ${questions.length}`
      );
      grandTotal += questions.length;

      // Verify every single question has valid fields and exactly 9 distractors with whyIncorrect
      for (const q of questions) {
        assert.ok(q.id > 100 && q.id <= 1100, `Question id ${q.id} out of range`);
        assert.ok(q.title && q.title.length > 0, `Question ${q.id} missing title`);
        assert.ok(q.stem && q.stem.length > 0, `Question ${q.id} missing stem`);
        assert.ok(
          q.correctAnswer && q.correctAnswer.length > 0,
          `Question ${q.id} missing correctAnswer`
        );
        assert.ok(
          q.explanation && q.explanation.length > 0,
          `Question ${q.id} missing explanation`
        );
        assert.equal(
          q.distractors.length,
          9,
          `Question ${q.id} in ${sid} has ${q.distractors.length} distractors instead of 9`
        );

        for (let i = 0; i < q.distractors.length; i++) {
          const d = q.distractors[i];
          assert.ok(
            d.text && d.text.trim().length > 0,
            `Question ${q.id} distractor ${i} missing text`
          );
          assert.ok(
            d.whyIncorrect && d.whyIncorrect.trim().length > 0,
            `Question ${q.id} distractor ${i} missing whyIncorrect explanation`
          );
        }
      }
    }

    assert.equal(grandTotal, 1000, 'Expected exactly 1,000 total questions across all 5 subjects');
  });

  it('verifies subject ID ranges do not overlap and span IDs 101 to 1100 continuously', () => {
    const all = getAllQuestions();
    assert.equal(all.length, 1000);
    assert.equal(all[0].id, 101);
    assert.equal(all[all.length - 1].id, 1100);

    const idSet = new Set(all.map((q) => q.id));
    assert.equal(idSet.size, 1000, 'Expected 1,000 unique question IDs');
  });

  it('verifies authentic curriculum diagrams are referenced across the question bank', () => {
    const all = getAllQuestions();
    const withDiagrams = all.filter((q) => Boolean(q.image));
    assert.ok(
      withDiagrams.length >= 50,
      `Expected at least 50 questions referencing diagrams, got ${withDiagrams.length}`
    );

    for (const q of withDiagrams) {
      assert.ok(
        q.image?.startsWith('./assets/curriculum/') || q.image?.startsWith('/assets/curriculum/'),
        `Image path ${q.image} should point to assets/curriculum/`
      );
    }
  });

  it('creates an Official 100-Question Simulated Exam with exact INST 2022 curriculum weights (22, 26, 15, 17, 20)', () => {
    const all = getAllQuestions();
    const examSession = createQuizSession(all, 'ironman', { optionCount: 4 }, 'all');

    assert.equal(examSession.items.length, 100, 'Simulated exam must contain exactly 100 questions');

    const counts: Record<string, number> = {
      s1_loops: 0,
      s2_measurement: 0,
      s3_chemistry: 0,
      s4_analyzers: 0,
      s5_control: 0,
    };

    for (const item of examSession.items) {
      const sid = item.question.subjectId as keyof typeof counts;
      if (counts[sid] !== undefined) {
        counts[sid] += 1;
      }
    }

    assert.equal(counts.s1_loops, 22, 'Subject 1 (Loops) must have exactly 22 questions (22%)');
    assert.equal(counts.s2_measurement, 26, 'Subject 2 (Measurement) must have exactly 26 questions (26%)');
    assert.equal(counts.s3_chemistry, 15, 'Subject 3 (Physical/Chemistry) must have exactly 15 questions (15%)');
    assert.equal(counts.s4_analyzers, 17, 'Subject 4 (Analyzers) must have exactly 17 questions (17%)');
    assert.equal(counts.s5_control, 20, 'Subject 5 (Process Control) must have exactly 20 questions (20%)');
  });

  it('verifies diagrams mode creates a session filtered to questions with diagrams', () => {
    const all = getAllQuestions();
    const diagramSession = createQuizSession(all, 'diagrams', { optionCount: 4 }, 'all');
    assert.ok(diagramSession.items.length >= 25, 'Expected diagrams session to have items');
    for (const item of diagramSession.items) {
      assert.ok(Boolean(item.question.image), `Question ${item.question.id} in diagram mode missing image`);
    }
  });
});
