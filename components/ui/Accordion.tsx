"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { renderInline } from "@/lib/inlineMarkdown";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Initial geöffneter Eintrag (Standard: erster Eintrag; `null` = alle geschlossen). */
  defaultOpenIndex?: number | null;
  /** Optional: Frage zusätzlich als Überschrift auszeichnen (z. B. "h3"). */
  headingLevel?: "h2" | "h3" | "h4";
  /** "plain" = Trennlinien statt Karten (Startseite). */
  variant?: "card" | "plain";
}

/**
 * Akkordeon, bei dem alle Antworten immer im (server-gerenderten) HTML stehen.
 * Geschlossene Einträge werden nur per CSS eingeklappt (Grid-Rows 0fr) und
 * per `inert` aus Fokus/Screenreader genommen – nicht aus dem DOM entfernt.
 */
export function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
  headingLevel,
  variant = "card",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        const button = (
          <button
            type="button"
            id={buttonId}
            className={cn(
              "flex min-h-12 w-full items-center justify-between gap-3 text-left text-sm font-medium text-navy transition-colors sm:text-base",
              variant === "plain" ? "px-0 py-5 hover:text-accent-dark" : "px-4 py-4 font-semibold hover:bg-gray-50 sm:px-6"
            )}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            aria-expanded={isOpen}
            aria-controls={panelId}
          >
            <span className="pr-4">{item.question}</span>
            <motion.span
              initial={false}
              animate={{ rotate: isOpen ? 45 : 0 }}
              className="flex h-6 w-6 shrink-0 items-center justify-center text-accent-dark text-xl"
              aria-hidden="true"
            >
              +
            </motion.span>
          </button>
        );

        const Heading = headingLevel;

        return (
          <div
            key={index}
            className={
              variant === "plain"
                ? "border-b border-navy/10"
                : "overflow-hidden rounded-2xl border border-gray-200 bg-white"
            }
          >
            {Heading ? <Heading className="m-0">{button}</Heading> : button}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={cn(
                    "text-sm leading-relaxed text-gray-600 sm:text-base",
                    variant === "plain" ? "pb-6" : "border-t border-gray-100 px-4 py-4 sm:px-6 sm:py-5"
                  )}
                >
                  {renderInline(item.answer)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
