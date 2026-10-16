import katex from 'katex';

export interface MathSegment {
  type: 'text' | 'inline-math' | 'display-math';
  content: string;
  html?: string;
}

/**
 * Splits a string containing `$$...$$` (display math) and `$...$` (inline math)
 * into structured segments and renders the LaTeX math expressions via KaTeX.
 */
export function parseAndRenderMath(
  input: string,
  strict = false
): MathSegment[] {
  if (!input || !input.includes('$')) {
    return [{ type: 'text', content: input }];
  }

  const segments: MathSegment[] = [];
  // Match $$...$$ first, or $...$ (non-empty, not starting/ending with space if currency, though in our bank all $...$ are LaTeX)
  const regex = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: input.slice(lastIndex, match.index),
      });
    }

    if (match[1] !== undefined) {
      const expr = match[1].trim();
      const html = katex.renderToString(expr, {
        displayMode: true,
        throwOnError: strict,
      });
      segments.push({
        type: 'display-math',
        content: expr,
        html,
      });
    } else if (match[2] !== undefined) {
      const expr = match[2].trim();
      const html = katex.renderToString(expr, {
        displayMode: false,
        throwOnError: strict,
      });
      segments.push({
        type: 'inline-math',
        content: expr,
        html,
      });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({
      type: 'text',
      content: input.slice(lastIndex),
    });
  }

  return segments;
}
