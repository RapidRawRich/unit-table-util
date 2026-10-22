import React, { useState } from 'react';
import { PasscodeGate } from './components/PasscodeGate.tsx';
import { ModeSelector } from './components/ModeSelector.tsx';
import { QuestionCard } from './components/QuestionCard.tsx';
import { ResultsView } from './components/ResultsView.tsx';
import {
  createQuizSession,
  submitAnswer,
  nextQuestion,
  goToQuestion,
  createRetakeSession,
  type CreateSessionConfig,
} from './lib/quizEngine.ts';
import { getSubjectQuestions } from './data/questionBanks.ts';
import type { QuizSession, SubjectId, TestMode } from './lib/types.ts';

export function App() {
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [session, setSession] = useState<QuizSession | null>(null);

  if (!unlocked) {
    return <PasscodeGate onUnlock={() => setUnlocked(true)} />;
  }

  const handleStartMode = (
    mode: Exclude<TestMode, 'retake'>,
    config: CreateSessionConfig,
    subjectId: SubjectId = 'all'
  ) => {
    const bank = getSubjectQuestions(subjectId);
    const newSession = createQuizSession(bank, mode, config, subjectId);
    setSession(newSession);
  };

  if (!session) {
    return (
      <ModeSelector
        onStartMode={handleStartMode}
        onLock={() => {
          setSession(null);
          setUnlocked(false);
        }}
      />
    );
  }

  if (session.completed) {
    return (
      <ResultsView
        session={session}
        onRetakeWrong={() => {
          const retakeSession = createRetakeSession(session);
          setSession(retakeSession);
        }}
        onReturnToMenu={() => setSession(null)}
      />
    );
  }

  return (
    <QuestionCard
      session={session}
      onSelectOption={(optionId) =>
        setSession((prev) => (prev ? submitAnswer(prev, optionId) : null))
      }
      onNext={() => setSession((prev) => (prev ? nextQuestion(prev) : null))}
      onPrev={() =>
        setSession((prev) =>
          prev ? goToQuestion(prev, Math.max(0, prev.currentIndex - 1)) : null
        )
      }
      onGoToIndex={(index) =>
        setSession((prev) => (prev ? goToQuestion(prev, index) : null))
      }
      onFinishEarly={() =>
        setSession((prev) => (prev ? { ...prev, completed: true } : null))
      }
      onExitToMenu={() => setSession(null)}
    />
  );
}

export default App;
