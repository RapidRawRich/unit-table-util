import { decodeQuestionRecord } from '../lib/codec.ts';
import type { QuestionRecord, SubjectId, SubjectMetadata } from '../lib/types.ts';

import { ENCODED_QUESTION_BANK } from './encodedBank.ts';
import { ENCODED_SUBJECT1_LOOPS } from './subject1_loops.ts';
import { ENCODED_SUBJECT2_MEASUREMENT } from './subject2_measurement.ts';
import { ENCODED_SUBJECT3_CHEMISTRY } from './subject3_chemistry.ts';
import { subject4Questions } from './subject4_analyzers.ts';
import { subject5Questions } from './subject5_control.ts';

export const SUBJECT_METADATA: SubjectMetadata[] = [
  {
    id: 'all',
    code: 'ALL',
    title: 'All 5 Subjects (Official 2022 Curriculum)',
    shortTitle: 'All Subjects',
    weightPercent: 100,
    totalQuestions: 1000,
    ilmNumber: 'INST 3rd Period Complete Bank',
    topics: [
      { letter: 'S1', name: 'Electronic Instrument Loops', percent: 22, questionCount: 200 },
      { letter: 'S2', name: 'Measurement', percent: 26, questionCount: 200 },
      { letter: 'S3', name: 'Physical Properties & Chemistry', percent: 15, questionCount: 200 },
      { letter: 'S4', name: 'Process Analyzers', percent: 17, questionCount: 200 },
      { letter: 'S5', name: 'Process Control', percent: 20, questionCount: 200 },
    ],
  },
  {
    id: 'tq_superstar',
    code: 'STAR',
    title: 'TQ Superstar: Curated 100-Question Master Exam',
    shortTitle: '⭐ TQ Superstar',
    weightPercent: 100,
    totalQuestions: 100,
    ilmNumber: 'Classic TQ Master Bank',
    topics: [
      { letter: 'Sec 1', name: 'Electronic Loops (Analog, SIS, Fieldbus)', percent: 14, questionCount: 14 },
      { letter: 'Sec 2', name: 'Measurement (Flow, Level, DP, Temp, Density)', percent: 29, questionCount: 29 },
      { letter: 'Sec 3', name: 'Physical Properties & Industrial Chemistry', percent: 18, questionCount: 18 },
      { letter: 'Sec 4', name: 'Process Analyzers (Sample, GC, pH, Gas)', percent: 17, questionCount: 17 },
      { letter: 'Sec 5', name: 'Process Control & Controller Tuning', percent: 22, questionCount: 22 },
    ],
  },
  {
    id: 's1_loops',
    code: 'S1',
    title: 'Subject 1: Electronic Instrument Loops',
    shortTitle: 'Instrument Loops',
    weightPercent: 22,
    totalQuestions: 200,
    ilmNumber: 'ILM 310301',
    topics: [
      { letter: 'A', name: 'Analog Loops', percent: 23, questionCount: 46 },
      { letter: 'B', name: 'Discrete Loops', percent: 18, questionCount: 36 },
      { letter: 'C', name: 'Serial Data Communications', percent: 9, questionCount: 18 },
      { letter: 'D', name: 'Fieldbus Systems', percent: 14, questionCount: 28 },
      { letter: 'E', name: 'Safety Instrumented Systems', percent: 23, questionCount: 46 },
      { letter: 'F', name: 'Loop Troubleshooting', percent: 13, questionCount: 26 },
    ],
  },
  {
    id: 's2_measurement',
    code: 'S2',
    title: 'Subject 2: Measurement',
    shortTitle: 'Measurement',
    weightPercent: 26,
    totalQuestions: 200,
    ilmNumber: 'ILM 310302',
    topics: [
      { letter: 'A-D', name: 'Differential Pressure & Primary Elements', percent: 24, questionCount: 48 },
      { letter: 'E-H', name: 'Level Technologies & Elevation/Suppression', percent: 24, questionCount: 48 },
      { letter: 'I-L', name: 'Temperature: RTDs, Thermocouples & Wells', percent: 24, questionCount: 48 },
      { letter: 'M-Q', name: 'Specialty: Mass Flow, Density, Viscosity & Nuclear', percent: 28, questionCount: 56 },
    ],
  },
  {
    id: 's3_chemistry',
    code: 'S3',
    title: 'Subject 3: Physical Properties & Chemistry',
    shortTitle: 'Chemistry',
    weightPercent: 15,
    totalQuestions: 200,
    ilmNumber: 'ILM 310303',
    topics: [
      { letter: 'A', name: 'Matter & Atomic Structure', percent: 16, questionCount: 32 },
      { letter: 'B', name: 'Inorganic Compounds & Nomenclature', percent: 14, questionCount: 28 },
      { letter: 'C', name: 'Organic Compounds & Hydrocarbons', percent: 14, questionCount: 28 },
      { letter: 'D', name: 'Chemical Reactions & Stoichiometry', percent: 20, questionCount: 40 },
      { letter: 'E', name: 'Solutions, Solubility & Concentrations', percent: 26, questionCount: 52 },
      { letter: 'F', name: 'Industrial Chemistry Applications', percent: 10, questionCount: 20 },
    ],
  },
  {
    id: 's4_analyzers',
    code: 'S4',
    title: 'Subject 4: Process Analyzers',
    shortTitle: 'Analyzers',
    weightPercent: 17,
    totalQuestions: 200,
    ilmNumber: 'ILM 310304',
    topics: [
      { letter: 'A', name: 'Sample Conditioning Systems', percent: 12, questionCount: 24 },
      { letter: 'B', name: 'Density, Viscosity & Psychrometric Analyzers', percent: 20, questionCount: 40 },
      { letter: 'C', name: 'Spectroscopic, Turbidity & Refractive Analyzers', percent: 24, questionCount: 48 },
      { letter: 'D', name: 'Electrochemical: pH, ORP & Conductivity', percent: 24, questionCount: 48 },
      { letter: 'E', name: 'Chromatographic: Gas & Liquid GC', percent: 12, questionCount: 24 },
      { letter: 'F', name: 'Toxic/Combustible Gas & Moisture', percent: 8, questionCount: 16 },
    ],
  },
  {
    id: 's5_control',
    code: 'S5',
    title: 'Subject 5: Process Control',
    shortTitle: 'Process Control',
    weightPercent: 20,
    totalQuestions: 200,
    ilmNumber: 'ILM 310305',
    topics: [
      { letter: 'A', name: 'Closed Loop Analysis', percent: 20, questionCount: 40 },
      { letter: 'B', name: 'Loop Dynamics & Frequency Response', percent: 20, questionCount: 40 },
      { letter: 'C', name: 'Closed Loop Control & Tuning', percent: 20, questionCount: 40 },
      { letter: 'D', name: 'Digital Controller Tuning & Lambda', percent: 15, questionCount: 30 },
      { letter: 'E', name: 'Cascade Control Systems', percent: 15, questionCount: 30 },
      { letter: 'F', name: 'Selective, Override & Ratio Control', percent: 10, questionCount: 20 },
    ],
  },
];

export const SUBJECT_METADATA_MAP: Record<SubjectId, SubjectMetadata> = SUBJECT_METADATA.reduce(
  (acc, meta) => {
    acc[meta.id] = meta;
    return acc;
  },
  {} as Record<SubjectId, SubjectMetadata>
);

const decodedCache = new Map<SubjectId, QuestionRecord[]>();

export function getSubjectQuestions(subjectId: SubjectId): QuestionRecord[] {
  if (decodedCache.has(subjectId)) {
    return decodedCache.get(subjectId)!;
  }

  let decoded: QuestionRecord[];

  switch (subjectId) {
    case 'tq_superstar':
      decoded = ENCODED_QUESTION_BANK.map(decodeQuestionRecord);
      break;
    case 's1_loops':
      decoded = ENCODED_SUBJECT1_LOOPS.map(decodeQuestionRecord);
      break;
    case 's2_measurement':
      decoded = ENCODED_SUBJECT2_MEASUREMENT.map(decodeQuestionRecord);
      break;
    case 's3_chemistry':
      decoded = ENCODED_SUBJECT3_CHEMISTRY.map(decodeQuestionRecord);
      break;
    case 's4_analyzers':
      decoded = subject4Questions.map(decodeQuestionRecord);
      break;
    case 's5_control':
      decoded = subject5Questions.map(decodeQuestionRecord);
      break;
    case 'all': {
      const s1 = getSubjectQuestions('s1_loops');
      const s2 = getSubjectQuestions('s2_measurement');
      const s3 = getSubjectQuestions('s3_chemistry');
      const s4 = getSubjectQuestions('s4_analyzers');
      const s5 = getSubjectQuestions('s5_control');
      decoded = [...s1, ...s2, ...s3, ...s4, ...s5];
      break;
    }
  }

  decodedCache.set(subjectId, decoded);
  return decoded;
}

export function getAllQuestions(): QuestionRecord[] {
  return getSubjectQuestions('all');
}
