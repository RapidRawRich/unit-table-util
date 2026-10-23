import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  ZoomIn,
  X,
  Flag,
  Image as ImageIcon,
} from 'lucide-react';
import type { QuizSession } from '../lib/types.ts';
import { getSessionStats } from '../lib/quizEngine.ts';
import { rot13 } from '../lib/codec.ts';
import { normalizeAssetUrl } from '../lib/assetHelper.ts';
import { MathText } from './MathText.tsx';

interface QuestionCardProps {
  session: QuizSession;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToIndex: (index: number) => void;
  onFinishEarly: () => void;
  onExitToMenu: () => void;
}

export function QuestionCard({
  session,
  onSelectOption,
  onNext,
  onPrev,
  onGoToIndex,
  onFinishEarly,
  onExitToMenu,
}: QuestionCardProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);

  const currentItem = session.items[session.currentIndex];
  const { question, options, selectedOptionId, isCorrect } = currentItem;
  const isAnswered = selectedOptionId !== null;
  const stats = getSessionStats(session);

  const selectedOption = options.find((o) => o.id === selectedOptionId);
  const correctOption = options.find((o) => o.isCorrect)!;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (zoomedImage && e.key === 'Escape') {
        setZoomedImage(null);
        return;
      }
      if (!isAnswered) {
        const num = Number(e.key);
        if (num >= 1 && num <= options.length) {
          e.preventDefault();
          onSelectOption(options[num - 1].id);
        } else if (e.key === '0' && options.length === 10) {
          e.preventDefault();
          onSelectOption(options[9].id);
        }
      } else if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' && session.currentIndex > 0) {
        e.preventDefault();
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, options, onSelectOption, onNext, onPrev, session.currentIndex, zoomedImage]);

  const progressPercent = Math.round(((session.currentIndex + 1) / session.items.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Status Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onExitToMenu}
              className="text-xs font-mono text-slate-300 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1 rounded cursor-pointer"
            >
              ← Modes
            </button>
            <div>
              <div className="text-xs font-mono text-amber-400 font-semibold">
                {session.modeLabel}
              </div>
              <div className="text-xs font-mono text-slate-400">
                Question {session.currentIndex + 1} of {session.items.length} • Bank ID #Q
                {question.id}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-300">
              ✓ {stats.correct}
            </span>
            <span className="px-2.5 py-1 rounded bg-rose-950/70 border border-rose-800 text-rose-300">
              ✗ {stats.wrong}
            </span>
            <button
              type="button"
              onClick={() => setShowNavigator((v) => !v)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 cursor-pointer"
            >
              Grid ({stats.answered}/{stats.total})
            </button>
            <button
              type="button"
              onClick={onFinishEarly}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 cursor-pointer"
              title="Finish and view results / retake missed questions"
            >
              <Flag className="w-3.5 h-3.5" aria-hidden="true" />
              Finish
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-900">
          <div
            className="h-full bg-amber-500 transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Collapsible Question Grid Navigator */}
        {showNavigator && (
          <div className="border-t border-slate-800 bg-slate-900 px-4 py-3">
            <div className="max-w-4xl mx-auto">
              <div className="text-xs font-mono text-slate-400 mb-2">
                Jump to Question (Green = Correct, Red = Wrong, Amber = Current):
              </div>
              <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5 max-h-40 overflow-y-auto p-1">
                {session.items.map((item, idx) => {
                  const isCurrent = idx === session.currentIndex;
                  let colorCls = 'bg-slate-950 border-slate-800 text-slate-400';
                  if (item.isCorrect === true) {
                    colorCls = 'bg-emerald-950 border-emerald-700 text-emerald-300';
                  } else if (item.isCorrect === false) {
                    colorCls = 'bg-rose-950 border-rose-700 text-rose-300';
                  }
                  if (isCurrent) {
                    colorCls += ' ring-2 ring-amber-400 text-slate-100';
                  }
                  return (
                    <button
                      key={item.question.id}
                      type="button"
                      onClick={() => {
                        onGoToIndex(idx);
                        setShowNavigator(false);
                      }}
                      className={`text-xs font-mono py-1 rounded border ${colorCls} cursor-pointer`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Question Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Question Header & Stem */}
        <article className="bg-slate-900 border border-slate-800 rounded-md p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {question.section}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-300">
              {rot13('GD Onax #')}
              {question.id}: {question.title}
            </span>
          </div>

          <h1 className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
            <MathText text={question.stem} />
          </h1>

          {/* Source Diagram from 3rd_Year_TQ_Question.pdf */}
          {question.image && (
            <figure className="mt-4 bg-white rounded-md p-3 border border-slate-700 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <figcaption className="text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                  <span>{question.imageCaption ?? `Source Diagram (Question ${question.id})`}</span>
                </figcaption>
                <button
                  type="button"
                  onClick={() => setZoomedImage(normalizeAssetUrl(question.image))}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-700 hover:text-slate-950 bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                  Enlarge Diagram
                </button>
              </div>
              <img
                src={normalizeAssetUrl(question.image)}
                alt={question.imageCaption ?? `Diagram for question ${question.id}`}
                onClick={() => setZoomedImage(normalizeAssetUrl(question.image))}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.retried) {
                    target.dataset.retried = 'true';
                    const fallback = question.image?.startsWith('./')
                      ? question.image.slice(2)
                      : `./${question.image?.replace(/^\//, '')}`;
                    target.src = fallback;
                  }
                }}
                className="max-h-80 w-auto mx-auto object-contain cursor-zoom-in rounded"
              />
            </figure>
          )}
        </article>

        {/* Multiple-Choice Options */}
        <section aria-label="Answer Options" className="space-y-2.5">
          {options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOptionId === opt.id;

            let cardStyle =
              'bg-slate-900 border-slate-800 hover:border-slate-600 text-slate-100';
            let badgeStyle = 'bg-slate-950 border-slate-700 text-slate-300';

            if (isAnswered) {
              if (opt.isCorrect) {
                cardStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-100';
                badgeStyle = 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold';
              } else if (isSelected && !opt.isCorrect) {
                cardStyle = 'bg-rose-950/60 border-rose-500 text-rose-100';
                badgeStyle = 'bg-rose-500 border-rose-400 text-slate-950 font-bold';
              } else {
                cardStyle = 'bg-slate-900/40 border-slate-800/60 text-slate-400 opacity-75';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                disabled={isAnswered}
                onClick={() => onSelectOption(opt.id)}
                className={`w-full text-left border rounded-md p-4 transition-colors flex items-start gap-3.5 ${cardStyle} ${
                  isAnswered ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span
                  className={`w-7 h-7 shrink-0 rounded border text-xs font-mono flex items-center justify-center mt-0.5 ${badgeStyle}`}
                >
                  {letter}
                </span>

                <div className="flex-1 space-y-1.5">
                  <div className="text-sm sm:text-base leading-snug">
                    <MathText text={opt.text} />
                  </div>

                  {/* If user picked this wrong option, explain why it's wrong right on the option */}
                  {isAnswered && isSelected && !opt.isCorrect && opt.whyIncorrect && (
                    <div className="text-xs text-rose-200 bg-rose-950/80 border border-rose-800 rounded px-3 py-2 mt-2">
                      <span className="font-mono font-semibold uppercase text-rose-300">
                        Why Your Selection Is Incorrect:{' '}
                      </span>
                      <MathText text={opt.whyIncorrect} />
                    </div>
                  )}
                </div>

                {isAnswered && opt.isCorrect && (
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                    aria-label="Correct Answer"
                  />
                )}
                {isAnswered && isSelected && !opt.isCorrect && (
                  <XCircle
                    className="w-5 h-5 text-rose-400 shrink-0 mt-0.5"
                    aria-label="Incorrect Selection"
                  />
                )}
              </button>
            );
          })}
        </section>

        {/* Immediate Feedback & Correct Answer Reveal Box */}
        {isAnswered && (
          <section
            role="status"
            aria-live="polite"
            className={`border rounded-md p-5 space-y-4 ${
              isCorrect
                ? 'bg-emerald-950/30 border-emerald-700/80'
                : 'bg-rose-950/30 border-rose-700/80'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    <h2 className="text-sm font-mono font-bold uppercase text-emerald-300">
                      Correct Response
                    </h2>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400" aria-hidden="true" />
                    <h2 className="text-sm font-mono font-bold uppercase text-rose-300">
                      Incorrect — Correct Answer Provided Below
                    </h2>
                  </>
                )}
              </div>
              <span className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded">
                {question.ilmReference}
              </span>
            </div>

            {/* Explicitly highlight the Correct Answer whenever answered wrong (or right) */}
            <div className="bg-slate-950 border border-emerald-700/60 rounded p-3.5">
              <div className="text-xs font-mono uppercase text-emerald-400 mb-1">
                Correct Answer:
              </div>
              <div className="text-sm sm:text-base font-semibold text-emerald-200">
                <MathText text={correctOption.text} />
              </div>
            </div>

            {/* If answered wrong, also reiterate why the chosen distractor was wrong */}
            {!isCorrect && selectedOption?.whyIncorrect && (
              <div className="bg-slate-950 border border-rose-800/60 rounded p-3.5">
                <div className="text-xs font-mono uppercase text-rose-400 mb-1">
                  Distractor Analysis (Your Choice):
                </div>
                <div className="text-xs sm:text-sm text-rose-200">
                  <MathText text={selectedOption.whyIncorrect} />
                </div>
              </div>
            )}

            {/* Detailed ILM Explanation & Step-by-Step Math */}
            <div className="space-y-2 text-sm text-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-300">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>{rot13('VYZ Tebhaqvat & Qrevingvba:')}</span>
              </div>
              <div className="leading-relaxed text-slate-200">
                <MathText text={question.explanation} />
              </div>

              {question.steps && question.steps.length > 0 && (
                <ol className="list-decimal list-inside space-y-2 bg-slate-950 border border-slate-800 rounded p-3.5 text-xs sm:text-sm font-mono text-slate-300">
                  {question.steps.map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      <MathText text={step} />
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* Discrepancy / Formula Clarification Note if applicable */}
            {question.discrepancyNote && (
              <div className="flex items-start gap-2.5 bg-amber-950/50 border border-amber-700/80 rounded p-3.5 text-xs sm:text-sm text-amber-200">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <MathText text={question.discrepancyNote} />
                </div>
              </div>
            )}
          </section>
        )}

        {/* Navigation Action Bar */}
        <div className="flex items-center justify-between pt-2 pb-10">
          <button
            type="button"
            disabled={session.currentIndex === 0}
            onClick={onPrev}
            className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2.5 rounded border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Previous
          </button>

          <div className="text-xs font-mono text-slate-500 hidden sm:block">
            {!isAnswered
              ? `Press keys 1–${options.length} to select an answer`
              : 'Press Enter or → for next question'}
          </div>

          <button
            type="button"
            onClick={onNext}
            className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-colors cursor-pointer ${
              isAnswered
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <span>
              {session.currentIndex + 1 === session.items.length
                ? 'Complete & View Results'
                : isAnswered
                ? 'Next Question'
                : 'Skip / Next'}
            </span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </main>

      {/* Lightbox Modal for Diagram Zoom */}
      {zoomedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Diagram View"
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="bg-white rounded-md p-4 max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="text-xs font-mono font-semibold text-slate-800">
                {question.imageCaption ?? `Question ${question.id} Source Diagram`}
              </span>
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                aria-label="Close enlarged diagram"
                className="p-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={normalizeAssetUrl(zoomedImage)}
              alt={question.imageCaption ?? 'Enlarged diagram'}
              className="w-full h-auto object-contain mx-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
