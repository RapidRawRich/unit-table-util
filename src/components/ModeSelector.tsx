import React, { useState } from 'react';
import {
  ShieldCheck,
  Flame,
  SplitSquareVertical,
  Shuffle,
  SlidersHorizontal,
  Lock,
  Eye,
  Layers,
  Image as ImageIcon,
  Award,
  BookOpen,
  Star,
} from 'lucide-react';
import type { SubjectId, TestMode } from '../lib/types.ts';
import type { CreateSessionConfig } from '../lib/quizEngine.ts';
import { SUBJECT_METADATA, SUBJECT_METADATA_MAP } from '../data/questionBanks.ts';
import { rot13 } from '../lib/codec.ts';

interface ModeSelectorProps {
  onStartMode: (
    mode: Exclude<TestMode, 'retake'>,
    config: CreateSessionConfig,
    subjectId: SubjectId
  ) => void;
  onLock: () => void;
}

interface ModeCardDef {
  mode: Exclude<TestMode, 'retake'>;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  accentClass?: string;
}

export function ModeSelector({ onStartMode, onLock }: ModeSelectorProps) {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('all');
  const [optionCount, setOptionCount] = useState<number>(4);
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(false);
  const [showCipherPreview, setShowCipherPreview] = useState<boolean>(false);

  const currentMeta = SUBJECT_METADATA_MAP[activeSubject];

  const getModesForSubject = (subj: SubjectId): ModeCardDef[] => {
    if (subj === 'all') {
      return [
        {
          mode: 'ironman',
          title: 'Official 100-Question Simulated Exam',
          subtitle: 'Exact INST 2022 Weights • 100 Questions',
          badge: '100 Qs • REAL WEIGHT',
          description:
            'Strictly calibrated across all 5 subjects per the Alberta 2022 Curriculum Guide: 22 Loops (22%), 26 Measurement (26%), 15 Chemistry (15%), 17 Analyzers (17%), and 20 Process Control (20%). The gold standard TQ practice exam.',
          icon: <Award className="w-5 h-5 text-amber-400" aria-hidden="true" />,
          accentClass: 'md:col-span-2 border-amber-500/50 bg-gradient-to-br from-slate-900/90 to-amber-950/20',
        },
        {
          mode: 'random-25',
          title: 'Quick Sprint — 25 Questions',
          subtitle: 'Proportional 5-Subject Sample',
          badge: '25 RANDOM',
          description:
            'Rapid drill sampling 25 questions proportionally across all 5 subjects with immediate rationale feedback and step-by-step LaTeX formulas.',
          icon: <Shuffle className="w-5 h-5 text-amber-300" aria-hidden="true" />,
        },
        {
          mode: 'random-50',
          title: 'Rapid Drill — 50 Questions',
          subtitle: 'Proportional 5-Subject Sample',
          badge: '50 RANDOM',
          description:
            'Medium endurance run sampling 50 questions proportionally across all curriculum topics with full distractor analysis.',
          icon: <Shuffle className="w-5 h-5 text-teal-300" aria-hidden="true" />,
        },
        {
          mode: 'diagrams',
          title: 'Schematics & Diagrams Mastery',
          subtitle: 'Authentic 3rd Period Exam Diagrams',
          badge: '50 DIAGRAMS',
          description:
            'Drill questions referencing authentic P&IDs, Bode plots, calibration curves, reactor jacket schemes, and wiring schematics extracted from curriculum notebooks.',
          icon: <ImageIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
        },
        {
          mode: 'half-1',
          title: 'Comprehensive Bank — First Half',
          subtitle: 'Questions 1 to 500 across Subjects 1–3',
          badge: 'Q1–Q500',
          description:
            'In-depth study run through the first 500 questions covering Instrument Loops, Measurement, and Physical Chemistry.',
          icon: <SplitSquareVertical className="w-5 h-5 text-sky-400" aria-hidden="true" />,
        },
        {
          mode: 'half-2',
          title: 'Comprehensive Bank — Second Half',
          subtitle: 'Questions 501 to 1,000 across Subjects 3–5',
          badge: 'Q501–Q1000',
          description:
            'In-depth study run through the final 500 questions covering Industrial Chemistry, Process Analyzers, and Process Control.',
          icon: <SplitSquareVertical className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
        },
      ];
    }

    if (subj === 'tq_superstar') {
      return [
        {
          mode: 'ironman',
          title: 'TQ Superstar Ironman 100',
          subtitle: 'The Curated 100-Question Master Simulation',
          badge: '100 Qs • CLASSIC',
          description:
            'The complete, acclaimed 100-question master TQ simulation covering all core instrumentation topics (Questions 1–100) with 900 calibrated distractors, formula derivations, and full immediate feedback.',
          icon: <Flame className="w-5 h-5 text-amber-400" aria-hidden="true" />,
          accentClass: 'md:col-span-2 border-amber-500/60 bg-gradient-to-br from-slate-900/95 via-amber-950/20 to-slate-900 shadow-amber-500/10 shadow-lg',
        },
        {
          mode: 'half-1',
          title: 'Superstar Front-50',
          subtitle: 'Questions 1 to 50 • Loops & Core Measurement',
          badge: 'Q1–Q50',
          description:
            'Targeted run through the first 50 questions of the master bank covering analog/discrete loops, fieldbus, transmitter calibrations, and RTD/thermocouple circuits.',
          icon: <SplitSquareVertical className="w-5 h-5 text-sky-400" aria-hidden="true" />,
        },
        {
          mode: 'half-2',
          title: 'Superstar Back-50',
          subtitle: 'Questions 51 to 100 • Chemistry, Analyzers & Control',
          badge: 'Q51–Q100',
          description:
            'Targeted run through the second half covering stoichiometric reactions (including ethane combustion), GC/pH analyzers, and advanced PID loop tuning.',
          icon: <SplitSquareVertical className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
        },
        {
          mode: 'random-25',
          title: 'Superstar Quick Sprint — 25 Questions',
          subtitle: 'Proportional 5-Subject Sample • 25 Questions',
          badge: '25 SPRINT',
          description:
            'Fast-paced 25-question drill sampled proportionally across the classic master bank with immediate diagnostic feedback.',
          icon: <Shuffle className="w-5 h-5 text-amber-300" aria-hidden="true" />,
        },
        {
          mode: 'random-50',
          title: 'Superstar Rapid Drill — 50 Questions',
          subtitle: 'Proportional 5-Subject Sample • 50 Questions',
          badge: '50 DRILL',
          description:
            'Comprehensive 50-question endurance drill sampled proportionally across all 5 sections of the master bank.',
          icon: <Shuffle className="w-5 h-5 text-teal-300" aria-hidden="true" />,
        },
        {
          mode: 'diagrams',
          title: 'Superstar Schematics & Diagrams Drill',
          subtitle: '6 Authentic Reference Figures & Schematics',
          badge: '6 DIAGRAMS',
          description:
            'Dedicated visual mastery drill focusing on the 6 authentic reference schematics, P&IDs, and instrument wiring drawings.',
          icon: <ImageIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
        },
      ];
    }

    // Individual Subject Modes (200 Questions per subject)
    return [
      {
        mode: 'ironman',
        title: `Full ${currentMeta.shortTitle} Bank`,
        subtitle: `All 200 Questions • ${currentMeta.code} Mastery`,
        badge: '200 Qs',
        description: `Complete 200-question drill through all topics of ${currentMeta.title}. Covers every curriculum objective with 9 calibrated distractors and formula derivations.`,
        icon: <Flame className="w-5 h-5 text-amber-400" aria-hidden="true" />,
        accentClass: 'md:col-span-2 border-amber-500/40 bg-slate-900/90',
      },
      {
        mode: 'half-1',
        title: `${currentMeta.shortTitle} — Part 1`,
        subtitle: 'Questions 1 to 100 of this Subject',
        badge: '100 Qs (Part 1)',
        description: `Targeted practice covering the first 100 questions of ${currentMeta.shortTitle}, testing foundational topics.`,
        icon: <SplitSquareVertical className="w-5 h-5 text-sky-400" aria-hidden="true" />,
      },
      {
        mode: 'half-2',
        title: `${currentMeta.shortTitle} — Part 2`,
        subtitle: 'Questions 101 to 200 of this Subject',
        badge: '100 Qs (Part 2)',
        description: `Advanced practice covering the final 100 questions of ${currentMeta.shortTitle}, testing complex application topics.`,
        icon: <SplitSquareVertical className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
      },
      {
        mode: 'random-25',
        title: `Quick Sprint — 25 ${currentMeta.shortTitle} Qs`,
        subtitle: 'Proportional Topic Sample • 25 Questions',
        badge: '25 SPRINT',
        description: `Sampled proportionally across all Topics in ${currentMeta.title} matching official percentage weightings.`,
        icon: <Shuffle className="w-5 h-5 text-amber-300" aria-hidden="true" />,
      },
      {
        mode: 'random-50',
        title: `Rapid Drill — 50 ${currentMeta.shortTitle} Qs`,
        subtitle: 'Proportional Topic Sample • 50 Questions',
        badge: '50 DRILL',
        description: `50 questions sampled proportionally across all topics in ${currentMeta.title}.`,
        icon: <Shuffle className="w-5 h-5 text-teal-300" aria-hidden="true" />,
      },
      {
        mode: 'diagrams',
        title: `${currentMeta.shortTitle} Schematics & Diagrams`,
        subtitle: 'Diagram-Based Questions Only',
        badge: 'DIAGRAMS',
        description: `Focuses on visual interpretation of technical diagrams, curves, P&IDs, and instrument schematics for ${currentMeta.shortTitle}.`,
        icon: <ImageIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
      },
    ];
  };

  const sampleEncoded = 'N 2-jver cerffher genafzvggre erdhverf n zvavzhz bcrengvat ibygntr bs $I_{\\grkg{zva}} = 11.5\\grkg{ Iqp}$.';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/70 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded shadow-sm">
              ALBERTA TQ 3RD PERIOD
            </span>
            <div>
              <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>Instrumentation TQ Examination Simulator</span>
                <span className="text-xs font-mono font-normal text-amber-400/90 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                  INST 2022 Guide
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                1,000 Questions (200 / Subject) • 9,000 Calibrated Distractors • Formula Sheet 2017 Grounded • 50 Authentic Diagrams
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onLock}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded transition-colors cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            Lock Session
          </button>
        </div>

        {/* Subject Tab Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Subject Selection Tabs"
            className="flex space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none py-2 border-t border-slate-800/60"
          >
            {SUBJECT_METADATA.map((meta) => {
              const isActive = activeSubject === meta.id;
              const isSuperstar = meta.id === 'tq_superstar';
              return (
                <button
                  key={meta.id}
                  type="button"
                  onClick={() => setActiveSubject(meta.id)}
                  className={`px-3 py-2 rounded-t-md text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
                    isActive
                      ? isSuperstar
                        ? 'bg-amber-500/20 text-amber-200 border-amber-400 shadow-sm font-bold'
                        : 'bg-slate-800/90 text-amber-300 border-amber-400 shadow-sm'
                      : isSuperstar
                      ? 'text-amber-300/90 hover:text-amber-200 hover:bg-amber-500/10 border-transparent font-medium'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border-transparent'
                  }`}
                >
                  <span
                    className={`px-1.5 py-0.5 text-[10px] rounded font-bold ${
                      isActive
                        ? isSuperstar
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : isSuperstar
                        ? 'bg-amber-500/25 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {isSuperstar ? '⭐ 100 Qs' : meta.id === 'all' ? 'ALL' : `${meta.weightPercent}%`}
                  </span>
                  <span>{meta.shortTitle}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Active Subject Banner & Curriculum Breakdown */}
        <section
          aria-labelledby="subject-overview-heading"
          className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-lg p-5 sm:p-6 shadow-lg space-y-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {activeSubject === 'tq_superstar' ? (
                  <>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                      Curated Master Examination
                    </span>
                    <span className="text-xs font-mono text-slate-400">• {currentMeta.ilmNumber}</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4 text-amber-400" aria-hidden="true" />
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      Official Curriculum Subject
                    </span>
                    <span className="text-xs font-mono text-slate-400">• {currentMeta.ilmNumber}</span>
                  </>
                )}
              </div>
              <h2
                id="subject-overview-heading"
                className="text-xl sm:text-2xl font-bold text-slate-100"
              >
                {currentMeta.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded-md">
                {activeSubject === 'tq_superstar'
                  ? 'Classic TQ Master Edition'
                  : `Official Exam Weight: ${currentMeta.weightPercent}%`}
              </span>
              <span className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800 border border-slate-700 rounded-md">
                {currentMeta.totalQuestions} Questions Available
              </span>
            </div>
          </div>

          {/* Topic Chips */}
          <div className="pt-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>Curriculum Topics & Official Weight Distribution:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {currentMeta.topics.map((t) => (
                <div
                  key={t.letter}
                  className="bg-slate-950/80 border border-slate-800 rounded px-3 py-2 text-xs flex items-center justify-between gap-2"
                >
                  <div className="truncate">
                    <span className="font-mono font-bold text-amber-400 mr-1.5">
                      {t.letter}.
                    </span>
                    <span className="text-slate-200">{t.name}</span>
                  </div>
                  <span className="font-mono text-slate-400 whitespace-nowrap bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-[11px]">
                    {t.percent}% ({t.questionCount} Qs)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Configuration Bar */}
        <section
          aria-labelledby="config-heading"
          className="bg-slate-900 border border-slate-800 rounded-md p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <h3 id="config-heading" className="text-sm font-semibold text-slate-200">
                Examination Parameters
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="option-count-select"
                  className="text-xs font-mono text-slate-300"
                >
                  Options per Question:
                </label>
                <select
                  id="option-count-select"
                  value={optionCount}
                  onChange={(e) => setOptionCount(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-xs font-mono text-slate-100 focus:border-amber-400 focus:outline-none cursor-pointer"
                >
                  <option value={4}>4 Choices (1 Correct + 3 Random Distractors)</option>
                  <option value={6}>6 Choices (1 Correct + 5 Random Distractors)</option>
                  <option value={10}>10 Choices (Full Exam Developer Bank: 1 Correct + 9 Distractors)</option>
                </select>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-400 cursor-pointer"
                />
                <span>Shuffle Question Presentation Order</span>
              </label>
            </div>
          </div>
        </section>

        {/* TQ Superstar Hero Callout when viewing All Subjects */}
        {activeSubject === 'all' && (
          <div
            onClick={() => setActiveSubject('tq_superstar')}
            className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 hover:border-amber-400 rounded-lg p-4 sm:p-5 cursor-pointer transition-all flex flex-wrap items-center justify-between gap-4 group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-amber-500/20 border border-amber-500/40 rounded-md text-amber-300 group-hover:scale-105 transition-transform shadow-sm">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-amber-200">
                    TQ Superstar Option (Curated 100-Question Master Exam)
                  </h4>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded font-bold">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Looking for the complete, curated 100-question master TQ simulation with Ironman 100, Front-50, Back-50, and 6 reference diagrams? Switch directly to the verified TQ Superstar bank.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveSubject('tq_superstar');
              }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider px-4 py-2 rounded transition-colors cursor-pointer shadow"
            >
              Switch to TQ Superstar →
            </button>
          </div>
        )}

        {/* Mode Selection Grid */}
        <section aria-labelledby="modes-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 id="modes-heading" className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Select Examination Mode for {currentMeta.shortTitle}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Immediate Explanation + Mistake Retake Loop Included
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getModesForSubject(activeSubject).map((m) => (
              <div
                key={m.mode + activeSubject}
                className={`bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-md p-5 flex flex-col justify-between transition-colors shadow-sm ${
                  m.accentClass ? m.accentClass : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                        {m.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-100">{m.title}</h4>
                        <p className="text-xs font-mono text-slate-400">{m.subtitle}</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-mono bg-slate-950 border border-slate-700 text-amber-300 font-semibold rounded">
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">{m.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {optionCount === 10 ? 'All 9 Distractors Active' : `${optionCount} Options / Question`}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onStartMode(
                        m.mode,
                        {
                          optionCount,
                          shuffleQuestions,
                        },
                        activeSubject
                      )
                    }
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider px-4 py-2 rounded transition-colors cursor-pointer shadow"
                  >
                    Launch {m.badge}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Obfuscation & Grounding Status Footer Card */}
        <section
          aria-labelledby="security-heading"
          className="bg-slate-900/50 border border-slate-800 rounded-md p-4 space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span id="security-heading">
                Source Code Obfuscation Active (ROT13) • Apprenticeship Formula Sheet 2017 Grounded • Zero PDFs Published
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowCipherPreview((v) => !v)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-amber-200 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              {showCipherPreview ? 'Hide Source Cipher Sample' : 'Inspect ROT13 Source Sample'}
            </button>
          </div>

          {showCipherPreview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="bg-slate-950 border border-slate-800 rounded p-3">
                <div className="text-slate-400 mb-1">Stored in GitHub Source (ROT13 Encoded):</div>
                <div className="text-amber-300 break-words">{sampleEncoded}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded p-3">
                <div className="text-slate-400 mb-1">Decoded in Browser Memory (Runtime):</div>
                <div className="text-emerald-300 break-words">{rot13(sampleEncoded)}</div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
