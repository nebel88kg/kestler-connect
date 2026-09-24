import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimaler Inline-Parser für Content-Texte:
 * - [Text](/pfad) → Next.js <Link> (intern)
 * - [Text](https://…) → externer Link (neuer Tab)
 * - **fett** → <strong>
 * Andere Link-Ziele werden nur als Text ausgegeben.
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const label = match[2];
      const href = match[3];
      if (href.startsWith("/")) {
        nodes.push(
          <Link
            key={key++}
            href={href}
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            {label}
          </Link>
        );
      } else if (/^https?:\/\//i.test(href)) {
        nodes.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            {label}
          </a>
        );
      } else {
        nodes.push(label);
      }
    } else if (match[4]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-anthracite">
          {match[4]}
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

/** Entfernt Inline-Markdown ([Text](url) → Text, **fett** → fett) – z. B. für JSON-LD. */
export function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}
