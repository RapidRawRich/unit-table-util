import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { rot13, decodeQuestionRecord, verifyPasscode } from '../src/lib/codec.ts';
import { ENCODED_QUESTION_BANK } from '../src/data/encodedBank.ts';
import type { QuestionRecord } from '../src/lib/types.ts';

describe('codec: rot13, passcode verification, and encodedBank integrity', () => {
  it('encodes and decodes ASCII letters symmetrically with rot13', () => {
    const plain = 'A transmitter has a 4–20 mA output signal and 600 Ω resistance.';
    const encoded = rot13(plain);
    assert.notEqual(encoded, plain);
    assert.equal(encoded.includes('transmitter'), false);
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
      section: rot13('Section 1: Electronic Instrument Loops'),
      title: rot13('P&ID Controller Action'),
      stem: rot13('What is the required controller action for FC1?'),
      correctAnswer: rot13('Direct Acting.'),
      ilmReference: rot13('ILM 310301a'),
      explanation: rot13('Increases output as PV rises.'),
      steps: [rot13('Step 1: Check valve fail state.')],
      discrepancyNote: rot13('Verified against ILM.'),
      image: './assets/ref_05.png',
      imageCaption: rot13('Figure: FC1 Distillation Loop'),
      distractors: [
        {
          text: rot13('Reverse Acting.'),
          whyIncorrect: rot13('Would open FO valve wider.'),
        },
      ],
    };

    const decoded = decodeQuestionRecord(encodedRecord);
    assert.equal(decoded.id, 5);
    assert.equal(decoded.section, 'Section 1: Electronic Instrument Loops');
    assert.equal(decoded.stem, 'What is the required controller action for FC1?');
    assert.equal(decoded.correctAnswer, 'Direct Acting.');
    assert.equal(decoded.image, './assets/ref_05.png');
    assert.equal(decoded.distractors[0].text, 'Reverse Acting.');
    assert.equal(decoded.distractors[0].whyIncorrect, 'Would open FO valve wider.');
  });

  it('accepts passcode "420" (with optional whitespace) and rejects invalid codes', () => {
    assert.equal(verifyPasscode('420'), true);
    assert.equal(verifyPasscode('  420 \n'), true);
    assert.equal(verifyPasscode('421'), false);
    assert.equal(verifyPasscode(''), false);
  });

  it('verifies ENCODED_QUESTION_BANK has 100 questions, 900 distractors, 6 diagram files, and zero plaintext leaks', () => {
    assert.equal(ENCODED_QUESTION_BANK.length, 100);

    const rawFile = fs.readFileSync(
      path.resolve(process.cwd(), 'src/data/encodedBank.ts'),
      'utf8'
    );
    const forbiddenPlainWords = [
      'transmitter',
      'flowmeter',
      'Alberta',
      'Faraday',
      'Coriolis',
      'Ziegler',
      'Rockwell',
      'Benzene',
      'Turndown',
    ];
    for (const word of forbiddenPlainWords) {
      assert.equal(
        rawFile.toLowerCase().includes(word.toLowerCase()),
        false,
        `Plaintext word "${word}" leaked into encodedBank.ts`
      );
    }

    const decodedAll = ENCODED_QUESTION_BANK.map(decodeQuestionRecord);
    for (let i = 0; i < 100; i++) {
      assert.equal(decodedAll[i].id, i + 1);
      assert.equal(decodedAll[i].distractors.length, 9);
      assert.ok(decodedAll[i].stem.length > 10);
      assert.ok(decodedAll[i].correctAnswer.length > 0);
    }

    // Verify the 6 image questions (Q5, Q19, Q20, Q58, Q88, Q93)
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
