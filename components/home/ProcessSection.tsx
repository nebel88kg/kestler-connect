"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { step: "01", title: "Analyse", description: "Ziele, Ist-Stand und Chancen – klar und ohne Fachchinesisch." },
  { step: "02", title: "Strategie", description: "Maßgeschneiderter Plan mit messbaren Zielen und Prioritäten." },
  { step: "03", title: "Umsetzung", description: "Feste Ansprechperson – Ads, Social Media und Website abgestimmt." },
  { step: "04", title: "Optimierung", description: "Laufende Verbesserung dort, wo Kosten und Qualität stimmen." },
  { step: "05", title: "Reporting", description: "Transparente Berichte – Sie wissen immer, was läuft." },
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl text-navy sm:text-5xl lg:text-6xl">So arbeiten wir</h2>
            <p className="max-w-sm text-base leading-snug text-gray-600">
              Klarer Ablauf, feste Ansprechperson und nachvollziehbares Reporting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.05}>
              <div className="border-t border-navy/15 pt-5">
                <p className="font-display text-3xl text-accent-dark">{step.step}</p>
                <h3 className="mt-4 font-display text-2xl text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
