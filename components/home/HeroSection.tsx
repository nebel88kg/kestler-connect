"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-muted/20 blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Verbindungen, die Wachstum schaffen
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Mehr Anfragen.{" "}
            <span className="text-accent">Mehr Mitarbeiter.</span>{" "}
            Mehr Wachstum.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl lg:text-2xl">
            Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt" size="lg">
              Kostenloses Strategiegespräch
            </Button>
            <Button
              href="/referenzen"
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-navy"
            >
              Referenzen ansehen
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {["Werbeanzeigen", "Webseiten", "Content", "Beratung", "Drohnen", "Reels"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-accent/20 bg-white/5 px-4 py-3 text-center text-sm text-gray-300 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
