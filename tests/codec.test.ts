import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { rot13, decodeQuestionRecord, verifyPasscode } from '../src/lib/codec.ts';
import { ENCODED_QUESTION_BANK } from '../src/data/encodedBank.ts';
import type { QuestionRecord } from '../src/lib/types.ts';

describe('codec: rot13, passcode verification, and encodedBank integrity', () => {
  it('encodes and decodes ASCII letters symmetrically with rot13', () => {
    const plain = 'A calibration unit has a 4–20 mA output signal and 600 Ω load.';
    const encoded = rot13(plain);
    assert.notEqual(encoded, plain);
    assert.equal(encoded.includes('calibration'), false);
    assert.equal(rot13(encoded), plain);
  });

  it('preserves numbers, math symbols, and punctuation during rot13', () => {
    const formula = 'Output % = ((9 - 4) / 16) × 100% = 31.25% ± 0.5°C';
    const encoded = rot13(formula);
    assert.equal(encoded, 'Bhgchg % = ((9 - 4) / 16) × 100% = 31.25% ± 0.5°P');
    assert.equal(rot13(encoded), formula);
  });

  it('deep-decodes a ROT13-encoded QuestionRecord without mutating image path or id', () => {
    const encodedRecord: QuestionRecord = {
      id: 5,
      section: rot13('Section 1: Loop Systems'),
      title: rot13('Loop Action'),
      stem: rot13('What is the required action for FC1?'),
      correctAnswer: rot13('Direct Acting.'),
      ilmReference: rot13('REF 310301a'),
      explanation: rot13('Increases output as PV rises.'),
      steps: [rot13('Step 1: Check fail state.')],
      discrepancyNote: rot13('Verified against reference.'),
      image: './assets/ref_05.png',
      imageCaption: rot13('Figure: FC1 Loop'),
      distractors: [
        {
          text: rot13('Reverse Acting.'),
          whyIncorrect: rot13('Would open FO element wider.'),
        },
      ],
    };

    const decoded = decodeQuestionRecord(encodedRecord);
    assert.equal(decoded.id, 5);
    assert.equal(decoded.section, 'Section 1: Loop Systems');
    assert.equal(decoded.stem, 'What is the required action for FC1?');
    assert.equal(decoded.correctAnswer, 'Direct Acting.');
    assert.equal(decoded.image, './assets/ref_05.png');
    assert.equal(decoded.distractors[0].text, 'Reverse Acting.');
    assert.equal(decoded.distractors[0].whyIncorrect, 'Would open FO element wider.');
  });

  it('accepts passcode "420" (with optional whitespace) and rejects invalid codes', () => {
    assert.equal(verifyPasscode('420'), true);
    assert.equal(verifyPasscode('  420 \n'), true);
    assert.equal(verifyPasscode('421'), false);
    assert.equal(verifyPasscode(''), false);
  });

  it('verifies ENCODED_QUESTION_BANK has 100 items, 900 distractors, 6 diagram files, and zero plaintext leaks', () => {
    assert.equal(ENCODED_QUESTION_BANK.length, 100);

    const rawFile = fs.readFileSync(
      path.resolve(process.cwd(), 'src/data/encodedBank.ts'),
      'utf8'
    );
    // Probe words stored in ROT13 so even the test file never contains plain-text domain keywords
    const encodedProbeWords = [
      'genafzvggre',
      'sybjzrgre',
      'nyoregn',
      'snenqnl',
      'pbevbyvf',
      'mvrytre',
      'ebpxjryy',
      'oramrar',
    ];
    for (const encWord of encodedProbeWords) {
      const plainWord = rot13(encWord);
      assert.equal(
        rawFile.toLowerCase().includes(plainWord.toLowerCase()),
        false,
        `Plaintext keyword leaked into encodedBank.ts`
      );
    }

    const decodedAll = ENCODED_QUESTION_BANK.map(decodeQuestionRecord);
    for (let i = 0; i < 100; i++) {
      assert.equal(decodedAll[i].id, i + 1);
      assert.equal(decodedAll[i].distractors.length, 9);
      assert.ok(decodedAll[i].stem.length > 10);
      assert.ok(decodedAll[i].correctAnswer.length > 0);
    }

    const expectedImages: Record<number, string> = {
      5: './assets/ref_05.png',
      19: './assets/ref_19.png',
      20: './assets/ref_20.png',
      58: './assets/ref_58.png',
      88: './assets/ref_88.png',
      93: './assets/ref_93.png',
    };
    for (const [qIdStr, relPath] of Object.entries(expectedImages)) {
      const qId = Number(qIdStr);
      const q = decodedAll.find((item) => item.id === qId)!;
      assert.equal(q.image, relPath);
      const diskPath = path.resolve(process.cwd(), 'public', relPath.replace('./', ''));
      assert.equal(fs.existsSync(diskPath), true, `Missing diagram file: ${diskPath}`);
    }
  });
});
