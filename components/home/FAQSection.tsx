"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqItems = [
  {
    question: "Was kostet Online-Marketing?",
    answer: "Die Kosten hängen von Ihren Zielen und der Branche ab. Für lokale Unternehmen rechnen wir mit 800–2.000 € monatlich (Agentur + Werbebudget). Für den Einstieg ohne großes Budget bieten wir auch kompakte Workshops an. Wir erstellen gerne ein individuelles Angebot nach einem kostenlosen Strategiegespräch.",
  },
  {
    question: "Wie lange dauert SEO?",
    answer: "Erste Verbesserungen sind nach 4–8 Wochen sichtbar. Signifikante Rankings und nachhaltiger Traffic entstehen typischerweise nach 3–6 Monaten kontinuierlicher Arbeit.",
  },
  {
    question: "Ab welchem Budget lohnen sich Google Ads?",
    answer: "Für lokale Unternehmen empfehlen wir ein Mindest-Werbebudget von 500–800 € monatlich. Damit erreichen Sie genug Reichweite für aussagekräftige Ergebnisse und Optimierung.",
  },
  {
    question: "Erstellt ihr auch Inhalte?",
    answer: "Ja! Content-Produktion gehört zu unserem Kernangebot: Fotos, Videos, Reels, Anzeigen-Creatives und Texte – alles aus einer Hand.",
  },
  {
    question: "Gibt es Vertragslaufzeiten?",
    answer: "Beim laufenden Marketing arbeiten wir mit fairen Konditionen und ohne unnötige Bindung. Bei Website-Paketen auf monatlicher Basis gilt eine Mindestlaufzeit von 12 Monaten – dafür ist Hosting inklusive und die Einmalzahlung entfällt.",
  },
  {
    question: "Für welche Branchen arbeitet ihr?",
    answer: "Unser Fokus liegt auf Handwerk, Vereinen, Startups, Immobilien, Golfclubs sowie kleinen und mittelständischen Unternehmen vor Ort. Wir verstehen die Besonderheiten dieser Zielgruppen.",
  },
  {
    question: "Bietet ihr auch Workshops an?",
    answer: "Ja. Für Startups und junge Unternehmen gibt es kompakte Marketing-Workshops (5–6 Stunden) – ideal, wenn noch kein großes Budget für eine laufende Betreuung da ist. Für Vereine bieten wir eigene Workshops zu Marketing und Sponsoring an.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Google Ads und Meta Ads können innerhalb von 24–48 Stunden erste Anfragen bringen. SEO und Social Media brauchen 2–3 Monate für optimale Ergebnisse.",
  },
  {
    question: "Brauche ich eine eigene Webseite?",
    answer: "Ideal ja – eine professionelle Webseite ist die Basis für erfolgreiches Online-Marketing. Falls Sie noch keine haben, erstellen wir diese für Sie – mit klaren Paketen (Basic, Standard, Premium), einmalig oder monatlich über 12 Monate inklusive Hosting.",
  },
  {
    question: "Was kosten eure Webseiten?",
    answer: "Basic ab 1.500 €, Standard ab 2.500 €, Premium ab 4.000 € (netto, einmalig). Optional Hosting & Wartung für 75 €/Monat. Alternativ monatliche Zahlung über 12 Monate Mindestlaufzeit – dann ist Hosting bereits eingerechnet. Details unter Leistungen → Webseiten.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer: "Nach einem kostenlosen Strategiegespräch erstellen wir eine maßgeschneiderte Strategie. Sie erhalten monatliche Reports und haben einen festen Ansprechpartner.",
  },
  {
    question: "Kann ich mein bestehendes Google Ads Konto nutzen?",
    answer: "Ja, wir können Ihr bestehendes Konto übernehmen und optimieren oder ein neues professionell aufsetzen.",
  },
  {
    question: "Was ist KI-SEO / ChatGPT Optimierung?",
    answer: "Wir optimieren Ihre Inhalte so, dass Sie auch in KI-Suchmaschinen wie ChatGPT, Perplexity und Google AI Overviews gefunden werden.",
  },
  {
    question: "Bietet ihr auch Social Recruiting an?",
    answer: "Ja, Mitarbeitergewinnung über Social Media und Google Ads ist einer unserer Schwerpunkte – besonders für Handwerksbetriebe.",
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

            <AnimatePresence initial={false}>
              {showAll && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3">
                    <Accordion items={hiddenItems} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {hiddenItems.length > 0 && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="text-sm font-semibold text-accent transition-colors hover:text-navy"
                  aria-expanded={showAll}
                >
                  {showAll ? "Weniger anzeigen" : "Alle anzeigen"}
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
