"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
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

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-custom pb-10 sm:pb-14 lg:pb-16">
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
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 lg:mt-12">
              <Button href="/kontakt" size="md" className="w-full sm:w-auto">
                Kostenloses Strategiegespräch
              </Button>
              <Button
                href="/referenzen"
                variant="outline"
                size="md"
                className="w-full border-accent text-accent hover:bg-accent hover:text-navy sm:w-auto"
              >
                Referenzen ansehen
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
