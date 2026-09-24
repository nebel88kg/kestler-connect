"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Was macht eine Social Media Agentur lokal?",
    answer:
      "Strategie, Redaktionsplan, Content, Reels und Community – abgestimmt auf Ihre Region. Bei Kestler Connect in Duisburg ist Social Media Marketing Kernangebot für lokale Unternehmen.",
  },
  {
    question: "Google Ads oder Meta Ads – was eignet sich?",
    answer:
      "Google Ads trifft aktive Suche – ideal für planbare Anfragen. Meta Ads erzeugen Sichtbarkeit und Leads auf Facebook/Instagram. Viele Betriebe kombinieren beides; den Mix klären wir im Strategiegespräch.",
  },
  {
    question: "Social Media oder Ads zuerst?",
    answer:
      "Ohne glaubwürdigen Auftritt wirken Ads oft schwach – dann Social Media zuerst oder parallel. Bei schnellem Anfragebedarf und solider Basis starten viele mit Performance Marketing.",
  },
  {
    question: "Was kostet Online-Marketing?",
    answer:
      "Die Investition hängt von Kanälen und Zielen ab. Im Strategiegespräch erhalten Sie eine transparente Einschätzung – für den Einstieg gibt es auch Workshops.",
  },
  {
    question: "Ab welchem Budget lohnen sich Google Ads?",
    answer:
      "Ob und mit welchem Media-Budget Google Ads für Sie sinnvoll sind, klären wir im Strategiegespräch – abhängig von Branche und Zielgebiet.",
  },
  {
    question: "Wie lange dauert SEO?",
    answer:
      "Erste Impulse oft nach 4–8 Wochen. Signifikante Rankings typischerweise nach 3–6 Monaten kontinuierlicher Arbeit.",
  },
  {
    question: "Was kosten eure Webseiten?",
    answer:
      "Basic ab 1.500 €, Standard ab 2.500 €, Premium ab 4.000 € (netto). Optional monatlich über 12 Monate inklusive Hosting. Details unter Leistungen → Webseiten.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach dem kostenlosen Strategiegespräch folgt eine klare Strategie. Sie haben einen festen Ansprechpartner und erhalten nachvollziehbare Reports.",
  },
];

const VISIBLE_COUNT = 5;

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = faqItems.slice(0, VISIBLE_COUNT);
  const hiddenItems = faqItems.slice(VISIBLE_COUNT);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">
              Häufige Fragen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Antworten auf die wichtigsten Fragen.
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
                      <Accordion items={hiddenItems} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((prev) => !prev)}
                    className="text-sm font-semibold text-accent transition-colors hover:text-navy"
                    aria-expanded={showAll}
                    aria-controls="faq-weitere-fragen"
                  >
                    {showAll ? "Weniger anzeigen" : "Alle anzeigen"}
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
