import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MoreDetailsProps {
  summary: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

/**
 * Aufklapper auf Basis von <details>: Der Inhalt steht immer im HTML
 * (gut für Suchmaschinen und KI-Crawler), ist aber standardmäßig eingeklappt.
 */
export function MoreDetails({ summary, children, className, defaultOpen = false }: MoreDetailsProps) {
  return (
    <details open={defaultOpen} className={cn("group rounded-2xl border border-gray-200 bg-white", className)}>
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-anthracite sm:px-5 sm:text-base [&::-webkit-details-marker]:hidden">
        {summary}
        <span aria-hidden="true" className="text-xl text-accent-dark transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="border-t border-gray-100 px-4 py-4 text-gray-700 sm:px-5">{children}</div>
    </details>
  );
}
