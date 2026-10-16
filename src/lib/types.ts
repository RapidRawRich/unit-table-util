export interface DistractorItem {
  text: string;
  whyIncorrect: string;
}

export interface QuestionRecord {
  id: number;
  section: string;
  title: string;
  stem: string;
  correctAnswer: string;
  ilmReference: string;
  explanation: string;
  steps?: string[];
  discrepancyNote?: string;
  image?: string;
  imageCaption?: string;
  distractors: DistractorItem[];
}

export type TestMode =
  | 'ironman'
  | 'half-1'
  | 'half-2'
  | 'random-25'
  | 'random-50'
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
  mode: TestMode;
  modeLabel: string;
  optionCount: number;
  items: SessionQuestion[];
  currentIndex: number;
  completed: boolean;
  roundNumber: number;
}
