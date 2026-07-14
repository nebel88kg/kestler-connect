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

      <div className="container-custom relative z-10 pb-14 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block">Mehr Anfragen.</span>
            <span className="block text-accent">Mehr Mitarbeiter.</span>
            <span className="block">Mehr Wachstum.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 sm:mt-4 sm:text-base">
            Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:mt-12">
            <Button href="/kontakt" size="sm" className="sm:px-5 sm:py-2.5 sm:text-sm">
              Kostenloses Strategiegespräch
            </Button>
            <Button
              href="/referenzen"
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-navy sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Referenzen ansehen
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:mt-24 lg:grid-cols-6"
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
