import React, { useState } from 'react';
import {
  ShieldCheck,
  Flame,
  SplitSquareVertical,
  Shuffle,
  SlidersHorizontal,
  Lock,
  Eye,
} from 'lucide-react';
import type { TestMode } from '../lib/types.ts';
import type { CreateSessionConfig } from '../lib/quizEngine.ts';
import { ENCODED_QUESTION_BANK } from '../data/encodedBank.ts';
import { rot13 } from '../lib/codec.ts';

interface ModeSelectorProps {
  onStartMode: (mode: Exclude<TestMode, 'retake'>, config: CreateSessionConfig) => void;
  onLock: () => void;
}

interface ModeCardDef {
  mode: Exclude<TestMode, 'retake'>;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
}

export function ModeSelector({ onStartMode, onLock }: ModeSelectorProps) {
  const [optionCount, setOptionCount] = useState<number>(4);
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(false);
  const [showCipherPreview, setShowCipherPreview] = useState<boolean>(false);

  const modes: ModeCardDef[] = [
    {
      mode: 'ironman',
      title: rot13('Vebazna Zbqr (Shyy Grfg)'),
      subtitle: 'All 100 Questions • Q1 to Q100',
      badge: '100 Qs',
      description: rot13(
        'Pbzcyrgr 100-dhrfgvba raqhenapr eha pbirevat nyy 5 Fhowrpgf: Ryrpgebavp Vafgehzrag Ybbcf, Zrnfherzrag, Culfvpny Cebcregvrf & Purzvfgel, Cebprff Nanylmref, naq Cebprff Pbageby.'
      ),
      icon: <Flame className="w-5 h-5 text-amber-400" aria-hidden="true" />,
    },
    {
      mode: 'half-1',
      title: rot13('Unys Znenguba — 1fg Unys'),
      subtitle: 'First 50 Questions • Q1 to Q50',
      badge: 'Q1–Q50',
      description: rot13(
        'Pbiref Fhowrpg 1 (Ryrpgebavp Vafgehzrag Ybbcf, D1–14), Fhowrpg 2 (Zrnfherzrag, D15–43), naq rneyl Fhowrpg 3 (Culfvpny Cebcregvrf & Purzvfgel, D44–50).'
      ),
      icon: <SplitSquareVertical className="w-5 h-5 text-sky-400" aria-hidden="true" />,
    },
    {
      mode: 'half-2',
      title: rot13('Unys Znenguba — 2aq Unys'),
      subtitle: 'Second 50 Questions • Q51 to Q100',
      badge: 'Q51–Q100',
      description: rot13(
        'Pbiref Fhowrpg 3 (Culfvpny Cebcregvrf & Purzvfgel, D51–61), Fhowrpg 4 (Cebprff Nanylmref, D62–78), naq Fhowrpg 5 (Cebprff Pbageby, D79–100).'
      ),
      icon: <SplitSquareVertical className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    },
    {
      mode: 'random-25',
      title: 'Random 25 Questions',
      subtitle: 'Proportional 5-Subject Sample • 25 Questions',
      badge: '25 RANDOM',
      description: rot13(
        'Cebcbegvbanyyl fnzcyrf 25 havdhr dhrfgvbaf npebff nyy 5 fhowrpgf (14% Ybbcf, 29% Zrnfherzrag, 18% Culfvpny Cebcregvrf & Purzvfgel, 17% Nanylmref, 22% Cebprff Pbageby).'
      ),
      icon: <Shuffle className="w-5 h-5 text-amber-300" aria-hidden="true" />,
    },
    {
      mode: 'random-50',
      title: 'Random 50 Questions',
      subtitle: 'Proportional 5-Subject Sample • 50 Questions',
      badge: '50 RANDOM',
      description: rot13(
        'Cebcbegvbanyyl fnzcyrf 50 havdhr dhrfgvbaf npebff nyy 5 fhowrpgf (7 Ybbcf, 14–15 Zrnfherzrag, 9 Culfvpny Cebcregvrf & Purzvfgel, 8–9 Nanylmref, 11 Cebprff Pbageby).'
      ),
      icon: <Shuffle className="w-5 h-5 text-teal-300" aria-hidden="true" />,
    },
  ];

  const sampleEncoded = ENCODED_QUESTION_BANK[0].stem;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded">
              {rot13('3EQ CREVBQ VYZ RATVAR')}
            </span>
            <div>
              <h1 className="text-lg font-semibold text-slate-100">
                {rot13('Vafgehzragngvba GD Fvzhyngvba Ratvar')}
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                {rot13(
                  '100 Dhrfgvbaf • 900 Pnyvoengrq Qvfgenpgbef • 6 Fbhepr Qvntenzf • Pebff-Ersreraprq VYZ Xrl'
                )}
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
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Configuration Bar */}
        <section
          aria-labelledby="config-heading"
          className="bg-slate-900 border border-slate-800 rounded-md p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <h2 id="config-heading" className="text-sm font-semibold text-slate-200">
                Engine Parameters
              </h2>
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
                  className="bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-xs font-mono text-slate-100 focus:border-amber-400 focus:outline-none"
                >
                  <option value={4}>4 Choices (1 Correct + 3 Random Distractors)</option>
                  <option value={6}>6 Choices (1 Correct + 5 Random Distractors)</option>
                  <option value={10}>10 Choices (All 9 Distractors Shown)</option>
                </select>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-400"
                />
                <span>Shuffle Question Order (Ironman / Half)</span>
              </label>
            </div>
          </div>
        </section>

        {/* Mode Selection Grid */}
        <section aria-labelledby="modes-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="modes-heading" className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Select Examination Mode
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Immediate Wrong-Answer Correction + End-of-Test Retake Enabled
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modes.map((m) => (
              <div
                key={m.mode}
                className={`bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-md p-5 flex flex-col justify-between transition-colors ${
                  m.mode === 'ironman' ? 'md:col-span-2 border-amber-500/40 bg-slate-900/90' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                        {m.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-100">{m.title}</h3>
                        <p className="text-xs font-mono text-slate-400">{m.subtitle}</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-mono bg-slate-950 border border-slate-700 text-slate-300 rounded">
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">{m.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {optionCount} choices / question • Retake missed enabled
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onStartMode(m.mode, {
                        optionCount,
                        shuffleQuestions,
                      })
                    }
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono uppercase tracking-wider px-4 py-2 rounded transition-colors cursor-pointer"
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
                Source Code Obfuscation Active (ROT13 Cipher) • Zero PDFs Published
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
                <div className="text-slate-400 mb-1">Stored in GitHub Source (ROT13):</div>
                <div className="text-amber-300 break-words">{sampleEncoded}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded p-3">
                <div className="text-slate-400 mb-1">Decoded in Browser Memory (Unlocked):</div>
                <div className="text-emerald-300 break-words">{rot13(sampleEncoded)}</div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
