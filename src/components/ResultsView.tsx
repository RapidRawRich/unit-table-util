import React from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Trophy,
  LayoutGrid,
  BookOpen,
} from 'lucide-react';
import type { QuizSession } from '../lib/types.ts';
import { getSessionStats } from '../lib/quizEngine.ts';
import { rot13 } from '../lib/codec.ts';
import { MathText } from './MathText.tsx';

interface ResultsViewProps {
  session: QuizSession;
  onRetakeWrong: () => void;
  onReturnToMenu: () => void;
}

export function ResultsView({
  session,
  onRetakeWrong,
  onReturnToMenu,
}: ResultsViewProps) {
  const stats = getSessionStats(session);
  const passed = stats.percentage >= 70;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase">
              Session Complete • Round {session.roundNumber}
            </span>
            <h1 className="text-lg font-semibold text-slate-100">{session.modeLabel}</h1>
          </div>

          <button
            type="button"
            onClick={onReturnToMenu}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3 py-2 rounded cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
            Return to Mode Menu
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Top Score Summary Card */}
        <section
          aria-labelledby="score-heading"
          className="bg-slate-900 border border-slate-800 rounded-md p-6 space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div
                className={`p-3.5 rounded-md border ${
                  passed
                    ? 'bg-emerald-950/60 border-emerald-700 text-emerald-400'
                    : 'bg-amber-950/60 border-amber-700 text-amber-400'
                }`}
              >
                <Trophy className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <h2 id="score-heading" className="text-2xl font-bold text-slate-100">
                  {stats.correct} / {stats.total} Correct ({stats.percentage}%)
                </h2>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {passed
                    ? rot13('CNFF — Rkprrqf 70% Nyoregn GD Orapuznex')
                    : 'BELOW 70% BENCHMARK — Retake Missed Questions Below'}
                </p>
              </div>
            </div>

            {/* Retake Wrong Questions Action (Re-Randomizes Distractors) */}
            {stats.wrong > 0 ? (
              <button
                type="button"
                onClick={onRetakeWrong}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono uppercase tracking-wider px-5 py-3 rounded transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>
                  Retake {stats.wrong} Wrong {stats.wrong === 1 ? 'Question' : 'Questions'} (Re-Randomize Distractors)
                </span>
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-700 text-emerald-300 text-xs font-mono px-4 py-2.5 rounded">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>Zero Wrong Answers — 100% Mastery Achieved!</span>
              </div>
            )}
          </div>

          {/* Section Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {rot13('Cresbeznapr ol VYZ Frpgvba')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(stats.bySection).map(([sectionName, sec]) => {
                const secPct =
                  sec.total > 0 ? Math.round((sec.correct / sec.total) * 100) : 0;
                return (
                  <div
                    key={sectionName}
                    className="bg-slate-950 border border-slate-800 rounded p-3.5 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 truncate pr-2">{sectionName}</span>
                      <span className="text-amber-300 shrink-0">
                        {sec.correct}/{sec.total} ({secPct}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded overflow-hidden">
                      <div
                        className={`h-full ${
                          secPct >= 70 ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${secPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Missed Questions Review List */}
        {stats.wrongItems.length > 0 && (
          <section aria-labelledby="missed-heading" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2
                id="missed-heading"
                className="text-sm font-mono uppercase tracking-wider text-rose-300"
              >
                Missed Questions Review ({stats.wrongItems.length})
              </h2>
              <button
                type="button"
                onClick={onRetakeWrong}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-amber-200 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                Retake Missed Questions Now →
              </button>
            </div>

            <div className="space-y-4">
              {stats.wrongItems.map((item) => {
                const userSelected = item.options.find(
                  (o) => o.id === item.selectedOptionId
                );
                return (
                  <article
                    key={item.question.id}
                    className="bg-slate-900 border border-slate-800 rounded-md p-5 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-amber-300">
                        Q{item.question.id}: {item.question.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.question.ilmReference}
                      </span>
                    </div>

                    <div className="text-sm sm:text-base font-medium text-slate-100">
                      <MathText text={item.question.stem} />
                    </div>

                    {item.question.image && (
                      <div className="bg-white rounded p-2.5 border border-slate-700 max-w-md">
                        <img
                          src={item.question.image}
                          alt={
                            item.question.imageCaption ??
                            `Diagram for Q${item.question.id}`
                          }
                          className="max-h-48 w-auto mx-auto object-contain"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="bg-rose-950/40 border border-rose-800/80 rounded p-3">
                        <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-rose-300 mb-1">
                          <XCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>Your Answer:</span>
                        </div>
                        <div className="text-rose-100 font-medium">
                          {userSelected ? (
                            <MathText text={userSelected.text} />
                          ) : (
                            'No answer selected'
                          )}
                        </div>
                        {userSelected?.whyIncorrect && (
                          <div className="text-xs text-rose-300 mt-1.5">
                            <MathText text={userSelected.whyIncorrect} />
                          </div>
                        )}
                      </div>

                      <div className="bg-emerald-950/40 border border-emerald-800/80 rounded p-3">
                        <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-emerald-300 mb-1">
                          <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>Correct Answer:</span>
                        </div>
                        <div className="text-emerald-100 font-semibold">
                          <MathText text={item.question.correctAnswer} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded p-3 text-xs sm:text-sm text-slate-300 space-y-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-amber-300 uppercase">
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Explanation & LaTeX Solution:</span>
                      </div>
                      <div>
                        <MathText text={item.question.explanation} />
                      </div>
                      {item.question.steps && item.question.steps.length > 0 && (
                        <ol className="list-decimal list-inside space-y-1.5 pt-2 border-t border-slate-800/80 font-mono text-xs text-slate-300">
                          {item.question.steps.map((step, idx) => (
                            <li key={idx} className="leading-relaxed">
                              <MathText text={step} />
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
