"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
        >
          <button
            type="button"
            className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-anthracite transition-colors hover:bg-gray-50 sm:px-6 sm:text-base"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              className="flex h-6 w-6 shrink-0 items-center justify-center text-accent text-xl"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border-t border-gray-100 px-4 py-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:py-5 sm:text-base">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
