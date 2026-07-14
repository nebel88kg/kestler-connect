"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-navy">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/30 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 pb-10 pt-20 sm:pb-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
            Verbindungen, die Wachstum schaffen
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Mehr Anfragen.{" "}
            <span className="text-accent">Mehr Mitarbeiter.</span>{" "}
            Mehr Wachstum.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-xl lg:text-2xl">
            Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
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
          className="mt-10 grid grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
        >
          {["Werbeanzeigen", "Webseiten", "Content", "Beratung", "Drohnen", "Reels"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-accent/20 bg-white/5 px-2 py-2.5 text-center text-xs text-gray-300 backdrop-blur-sm sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
