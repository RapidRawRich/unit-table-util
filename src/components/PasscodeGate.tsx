import React, { useState } from 'react';
import { Lock, Terminal, AlertCircle } from 'lucide-react';
import { verifyPasscode } from '../lib/codec.ts';

interface PasscodeGateProps {
  onUnlock: () => void;
}

export function PasscodeGate({ onUnlock }: PasscodeGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyPasscode(code)) {
      setError(false);
      onUnlock();
    } else {
      setError(true);
      setCode('');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 flex flex-col justify-between p-4 sm:p-8">
      <header className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-slate-400" aria-hidden="true" />
          <span>SYS-UTIL // TABLE-REF-v1.04</span>
        </div>
        <span>STATUS: LOCKED</span>
      </header>

      <section
        aria-labelledby="gate-heading"
        className="w-full max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-md p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-slate-800 border border-slate-700 rounded">
            <Lock className="w-5 h-5 text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <h1 id="gate-heading" className="text-base font-semibold text-slate-100">
              Restricted Reference Utility
            </h1>
            <p className="text-xs font-mono text-slate-400">
              ROT13 Payload Locked • Enter Access Passcode
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="access-passcode"
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
            >
              Session Passcode
            </label>
            <input
              id="access-passcode"
              type="password"
              inputMode="numeric"
              autoFocus
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="•••"
              aria-invalid={error}
              aria-describedby={error ? 'passcode-error' : undefined}
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none rounded px-3.5 py-2.5 text-sm font-mono text-slate-100 tracking-widest"
            />
          </div>

          {error && (
            <div
              id="passcode-error"
              role="alert"
              className="flex items-center gap-2 text-xs text-rose-300 bg-rose-950/60 border border-rose-800/80 rounded px-3 py-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" aria-hidden="true" />
              <span>Invalid passcode. Access denied.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm py-2.5 px-4 rounded transition-colors cursor-pointer"
          >
            Unlock Workspace
          </button>
        </form>
      </section>

      <footer className="border-t border-slate-900 pt-4 text-center text-xs font-mono text-slate-500">
        STATIC GRID CONFIGURATION MODULE • BUILD 104.2
      </footer>
    </main>
  );
}
