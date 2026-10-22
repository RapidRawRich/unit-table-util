export interface DistractorItem {
  text: string;
  whyIncorrect: string;
}

export interface QuestionRecord {
  id: number;
  subjectId?: string;
  topic?: string;
  section: string;
  title: string;
  stem: string;
  correctAnswer: string;
  ilmReference: string;
  explanation: string;
  steps?: string[] | null;
  discrepancyNote?: string | null;
  image?: string | null;
  imageCaption?: string | null;
  distractors: DistractorItem[];
}

export type SubjectId =
  | 'all'
  | 's1_loops'
  | 's2_measurement'
  | 's3_chemistry'
  | 's4_analyzers'
  | 's5_control';

export interface TopicInfo {
  letter: string;
  name: string;
  percent: number;
  questionCount: number;
}

export interface SubjectMetadata {
  id: SubjectId;
  code: string;
  title: string;
  shortTitle: string;
  weightPercent: number;
  totalQuestions: number;
  ilmNumber: string;
  topics: TopicInfo[];
}

export type TestMode =
  | 'ironman'
  | 'half-1'
  | 'half-2'
  | 'random-25'
  | 'random-50'
  | 'diagrams'
  | 'retake';

export interface RenderedOption {
  id: string;
  text: string;
  isCorrect: boolean;
  whyIncorrect?: string;
}

export interface SessionQuestion {
  question: QuestionRecord;
  options: RenderedOption[];
  selectedOptionId: string | null;
  isCorrect: boolean | null;
}

export interface QuizSession {
  subjectId: SubjectId;
  mode: TestMode;
  modeLabel: string;
  optionCount: number;
  items: SessionQuestion[];
  currentIndex: number;
  completed: boolean;
  roundNumber: number;
}
