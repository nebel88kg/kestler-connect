"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeFaq } from "@/content/home-faq";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 5;

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = homeFaq.slice(0, VISIBLE_COUNT);
  const hiddenItems = homeFaq.slice(VISIBLE_COUNT);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">
              Häufige Fragen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Kurze Antworten auf die wichtigsten Fragen.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <Accordion items={visibleItems} />

            {hiddenItems.length > 0 && (
              <>
                {/* Weitere Fragen bleiben im HTML – eingeklappt per CSS statt bedingtem Rendern. */}
                <div
                  id="faq-weitere-fragen"
                  inert={!showAll}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    showAll ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="mt-3">
                      <Accordion items={hiddenItems} defaultOpenIndex={null} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((prev) => !prev)}
                    className="text-sm font-semibold text-accent-dark transition-colors hover:text-navy"
                    aria-expanded={showAll}
                    aria-controls="faq-weitere-fragen"
                  >
                    {showAll ? "Weniger anzeigen" : "Alle Fragen anzeigen"}
                  </button>
                </div>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
