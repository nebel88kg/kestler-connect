"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  { step: 1, title: "Analyse", description: "Wir verstehen Ihr Unternehmen, Ihre Zielgruppe und den Markt." },
  { step: 2, title: "Strategie", description: "Maßgeschneiderte Marketing-Strategie mit klaren Zielen." },
  { step: 3, title: "Umsetzung", description: "Professionelle Umsetzung aller Maßnahmen." },
  { step: 4, title: "Optimierung", description: "Laufende Verbesserung für maximale Ergebnisse." },
  { step: 5, title: "Reporting", description: "Transparente Berichte – Sie wissen immer, was läuft." },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Prozess
            </p>
            <h2 className="text-3xl font-extrabold text-navy lg:text-5xl">
              So arbeiten wir
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Ein klarer Prozess für messbare Ergebnisse.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-accent/30 lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className={`flex flex-col gap-6 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex-1 lg:text-right" style={i % 2 === 1 ? { textAlign: "left" } : undefined}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-navy shadow-lg shadow-accent/30"
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
