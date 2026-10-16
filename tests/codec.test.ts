import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { rot13, decodeQuestionRecord, verifyPasscode } from '../src/lib/codec.ts';
import type { QuestionRecord } from '../src/lib/types.ts';

describe('codec: rot13 and passcode verification', () => {
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
});
