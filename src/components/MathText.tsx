import { useMemo } from 'react';
import { parseAndRenderMath } from '../lib/mathFormat.ts';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text mixed with LaTeX inline (`$...$`) and display (`$$...$$`) equations via KaTeX.
 * Uses `<span>` wrappers so it can be safely nested inside `<p>`, `<li>`, `<h1>`, or `<div>`.
 */
export function MathText({ text, className }: MathTextProps) {
  const segments = useMemo(() => parseAndRenderMath(text, false), [text]);

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        if (seg.type === 'display-math') {
          return (
            <span
              key={idx}
              className="block my-2.5 py-2 px-3 bg-slate-950/90 border border-slate-800/90 rounded overflow-x-auto text-slate-200"
              dangerouslySetInnerHTML={{ __html: seg.html ?? seg.content }}
            />
          );
        }
        if (seg.type === 'inline-math') {
          return (
            <span
              key={idx}
              className="inline-block align-baseline mx-0.5"
              dangerouslySetInnerHTML={{ __html: seg.html ?? seg.content }}
            />
          );
        }
        return <span key={idx}>{seg.content}</span>;
      })}
    </span>
  );
}
