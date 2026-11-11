"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Kernleistungen in der Reihenfolge der Priorität. */
const coreServices = [
  {
    title: "Social Media Agentur",
    description: "Content, Reels und Betreuung, die Ihre Zielgruppe vor Ort erreicht.",
    items: ["Redaktionsplan & Content", "Reels & Kurzvideos", "Community Management"],
    href: "/leistungen/social-media",
  },
  {
    title: "Google Ads",
    description: "Suchanzeigen für Menschen, die genau jetzt nach Ihrer Leistung suchen.",
    items: ["Lokale Kampagnen", "Tracking von Anrufen & Formularen", "Laufende Optimierung"],
    href: "/leistungen/google-ads",
  },
  {
    title: "Meta Ads",
    description: "Anzeigen auf Instagram und Facebook für Reichweite und Anfragen.",
    items: ["Zielgruppen nach Region", "Lead-Formulare", "Creatives aus einer Hand"],
    href: "/leistungen/meta-ads",
  },
  {
    title: "SEO & Local SEO",
    description: "Gefunden werden bei Google, Google Maps und in KI-Antworten.",
    items: ["Local SEO", "Google Unternehmensprofil", "KI-Sichtbarkeit"],
    href: "/leistungen/seo",
  },
  {
    title: "Webseiten",
    description: "Webdesign und Landingpages, die aus Besuchern Anfragen machen.",
    items: ["Webdesign Duisburg", "Landingpages", "Pakete ab 1.500 €"],
    href: "/leistungen/webseiten#preise",
  },
];

const moreServices = [
  { title: "Performance Marketing", href: "/leistungen/performance-marketing" },
  { title: "Leadgewinnung", href: "/leistungen/leadgewinnung" },
  { title: "Mitarbeitergewinnung", href: "/leistungen/mitarbeitergewinnung" },
  { title: "Workshops", href: "/leistungen/workshops" },
];

export function ServicesGrid() {
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const pointRef = useRef({ x: 0, y: 0 });
  const movedRef = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media.matches) return;
      const list = listRef.current;
      if (!list) return;
      const rows = [...list.querySelectorAll<HTMLElement>(":scope > a")];
      if (!rows.length) return;
      const mid = window.innerHeight / 2;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - mid);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setOpen((current) => (current === closest ? current : closest));
    };
    const onScroll = () => {
      if (!media.matches || frame) return;
      frame = requestAnimationFrame(update);
    };
    const onChange = () => {
      if (media.matches) update();
      else setOpen(0);
    };

    if (media.matches) update();
    media.addEventListener("change", onChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", onChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const dx = event.clientX - pointRef.current.x;
      const dy = event.clientY - pointRef.current.y;
      if (Math.hypot(dx, dy) < 4) return;
      pointRef.current = { x: event.clientX, y: event.clientY };
      movedRef.current = true;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const openFromPointer = (index: number, x: number, y: number) => {
    // Aufklappen verschiebt die Liste und löst pointerenter aus, ohne dass die Maus sich bewegt.
    if (!movedRef.current) return;
    movedRef.current = false;
    pointRef.current = { x, y };
    setOpen(index);
  };

  const placeGlow = (event: ReactPointerEvent<HTMLElement>, active: boolean) => {
    if (event.pointerType !== "mouse") return;
    const glow = event.currentTarget.querySelector<HTMLElement>("[data-cursor-glow]");
    if (!glow) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const color = active ? "rgba(255, 244, 220, 0.18)" : "rgba(196, 160, 82, 0.14)";
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(280px circle at ${x}px ${y}px, ${color}, transparent 68%)`;
  };

  const hideGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const glow = event.currentTarget.querySelector<HTMLElement>("[data-cursor-glow]");
    if (glow) glow.style.opacity = "0";
  };

  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl text-navy sm:text-5xl lg:text-6xl">
              Unsere Leistungen
            </h2>
            <p className="max-w-sm text-base leading-snug text-gray-600">
              Fünf Kernleistungen, die zusammenspielen – für Unternehmen in Duisburg, im Ruhrgebiet und am
              Niederrhein.
            </p>
          </div>
        </ScrollReveal>

        <div
          ref={listRef}
          className="grid grid-cols-[minmax(0,1fr)_auto] [overflow-anchor:none] lg:grid-cols-[max-content_minmax(0,1fr)_auto]"
        >
          {coreServices.map((service, index) => {
            const isOpen = open === index;
            return (
              <Link
                key={service.title}
                href={service.href}
                aria-expanded={isOpen}
                onPointerEnter={(event) => {
                  // Nur echte Mauszeiger. Auf Touch öffnet der Klick die Seite.
                  if (event.pointerType !== "mouse") return;
                  const active = movedRef.current || open === index;
                  openFromPointer(index, event.clientX, event.clientY);
                  placeGlow(event, active);
                }}
                onPointerMove={(event) => placeGlow(event, isOpen)}
                onPointerLeave={hideGlow}
                className={cn(
                  "relative col-span-2 grid grid-cols-subgrid items-center gap-x-4 border-b border-navy/10 py-6 transition-colors duration-500 sm:gap-x-8 sm:py-8 lg:col-span-3",
                  isOpen && "border-transparent text-white"
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-3xl transition-colors duration-500",
                    isOpen ? "bg-navy" : "bg-transparent"
                  )}
                />
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <div
                    data-cursor-glow
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  />
                </div>
                <h3
                  className={cn(
                    "relative z-10 col-start-1 row-start-1 pl-3 text-left font-display text-2xl transition-colors duration-500 sm:pl-6 sm:text-4xl lg:whitespace-nowrap",
                    isOpen ? "text-white" : "text-navy"
                  )}
                >
                  {service.title}
                </h3>
                <div className="relative z-10 col-span-2 row-start-2 min-w-0 lg:col-span-1 lg:col-start-2 lg:row-start-1">
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-3 pt-3 text-sm leading-relaxed text-white/75 sm:px-6 sm:text-base lg:px-0 lg:pt-0">
                        {service.description}
                      </p>
                      <ul className="mt-4 hidden space-y-1.5 lg:block">
                        {service.items.map((item) => (
                          <li key={item} className="text-sm text-white/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative z-10 col-start-2 row-start-1 mr-3 flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border transition-colors duration-500 sm:mr-6 sm:h-12 sm:w-12 lg:col-start-3",
                    isOpen
                      ? "border-white bg-white text-navy"
                      : "border-navy/20 text-navy"
                  )}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {moreServices.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy underline-offset-4 hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button href="/kontakt" size="md">
            Kostenloses Strategiegespräch
          </Button>
          <Link href="/einzugsgebiet" className="text-sm font-medium text-navy underline-offset-4 hover:underline">
            Für welche Orte wir arbeiten
          </Link>
          <Link href="/leistungen" className="text-sm font-medium text-navy underline-offset-4 hover:underline">
            Alle Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
