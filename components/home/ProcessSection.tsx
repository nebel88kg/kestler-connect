"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  { step: 1, title: "Analyse", description: "Ziele, Ist-Stand und Chancen – klar und ohne Fachchinesisch." },
  { step: 2, title: "Strategie", description: "Maßgeschneiderter Plan mit messbaren Zielen und Prioritäten." },
  { step: 3, title: "Umsetzung", description: "Fester Ansprechpartner – Ads, Social und Website aus einer Hand." },
  { step: 4, title: "Optimierung", description: "Laufende Verbesserung dort, wo Kosten und Qualität stimmen." },
  { step: 5, title: "Reporting", description: "Transparente Berichte – Sie wissen immer, was läuft." },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Prozess
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-5xl">
              So arbeiten wir
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
              Klarer Ablauf, Erreichbarkeit und Reporting – ohne erfundene Garantien.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-0 lg:hidden">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.05}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold text-navy shadow-md"
                  >
                    {step.step}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="my-2 w-0.5 flex-1 min-h-[2rem] bg-accent/30" />
                  )}
                </div>
                <div className={`min-w-0 flex-1 ${i < steps.length - 1 ? "pb-6" : "pb-1"}`}>
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-accent/30" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className={`flex items-center gap-6 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-navy shadow-lg shadow-accent/30 ${i % 2 === 0 ? "float-right ml-4" : "float-left mr-4"}`}
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="clear-both text-xl font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
