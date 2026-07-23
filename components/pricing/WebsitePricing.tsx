"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  HOSTING_MONTHLY,
  MIN_CONTRACT_MONTHS,
  formatEuro,
  hostingFeatures,
  monthlyPrice,
  websitePackages,
} from "@/content/website-packages";

type BillingMode = "upfront" | "monthly";

export function WebsitePricing() {
  const [mode, setMode] = useState<BillingMode>("upfront");
  const [includeHosting, setIncludeHosting] = useState(true);

  return (
    <section id="preise" className="scroll-mt-28 section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Preise
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
              Website-Pakete
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
              Transparente Preise – einmalig oder monatlich über 12 Monate, inkl. Hosting.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-8 flex flex-col items-center gap-4">
            <div
              role="group"
              aria-label="Abrechnungsart"
              className="inline-flex rounded-full border border-navy/15 bg-white p-1 shadow-sm"
            >
              <ModeButton
                active={mode === "upfront"}
                onClick={() => setMode("upfront")}
              >
                Einmalzahlung
              </ModeButton>
              <ModeButton
                active={mode === "monthly"}
                onClick={() => setMode("monthly")}
              >
                Monatlich
              </ModeButton>
            </div>

            {mode === "upfront" ? (
              <label className="flex cursor-pointer items-center gap-3 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-sm text-navy shadow-sm">
                <span className="relative inline-flex h-6 w-11 shrink-0 items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={includeHosting}
                    onChange={(e) => setIncludeHosting(e.target.checked)}
                  />
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full transition-colors",
                      includeHosting ? "bg-accent" : "bg-gray-200"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
                      includeHosting && "translate-x-5"
                    )}
                  />
                </span>
                <span>
                  Hosting &amp; Wartung{" "}
                  <span className="text-gray-600">
                    (+{formatEuro(HOSTING_MONTHLY)}/Monat)
                  </span>
                </span>
              </label>
            ) : (
              <p className="max-w-xl text-center text-sm text-gray-600">
                Mindestlaufzeit {MIN_CONTRACT_MONTHS} Monate · Website-Preis aufgeteilt · Hosting
                &amp; Wartung inklusive
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {websitePackages.map((pkg, i) => {
            const monthly = monthlyPrice(pkg.upfront);
            const isMonthly = mode === "monthly";

            return (
              <ScrollReveal key={pkg.id} delay={0.08 + i * 0.06}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-7",
                    pkg.highlighted
                      ? "border-accent shadow-lg shadow-accent/15 ring-1 ring-accent/30"
                      : "border-navy/10 shadow-sm"
                  )}
                >
                  {pkg.highlighted && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-hover">
                      Beliebt
                    </span>
                  )}
                  <h3 className="text-xl font-extrabold text-navy">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{pkg.tagline}</p>

                  <div className="mt-6">
                    {isMonthly ? (
                      <>
                        <p className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold tracking-tight text-navy">
                            {formatEuro(monthly)}
                          </span>
                          <span className="text-sm text-gray-600">/ Monat</span>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          für {MIN_CONTRACT_MONTHS} Monate · inkl. Hosting
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold tracking-tight text-navy">
                            {formatEuro(pkg.upfront)}
                          </span>
                          <span className="text-sm text-gray-600">einmalig</span>
                        </p>
                        {includeHosting ? (
                          <p className="mt-1 text-sm text-gray-500">
                            + {formatEuro(HOSTING_MONTHLY)}/Monat Hosting &amp; Wartung
                          </p>
                        ) : (
                          <p className="mt-1 text-sm text-gray-500">
                            ohne laufendes Hosting
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <p className="mt-4 text-sm font-medium text-navy/80">
                    {pkg.pages} · {pkg.revisions} Korrekturrunde
                    {pkg.revisions > 1 ? "n" : ""}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-accent" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {isMonthly || includeHosting
                      ? hostingFeatures.slice(0, 3).map((feature) => (
                          <li
                            key={`host-${feature}`}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="mt-0.5 text-accent" aria-hidden>
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))
                      : null}
                  </ul>

                  <Button
                    href="/kontakt"
                    variant={pkg.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    Paket anfragen
                  </Button>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-navy/10 bg-white px-5 py-6 sm:px-8 sm:py-8">
            <h3 className="text-lg font-bold text-navy">Hosting &amp; Wartung im Überblick</h3>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 sm:text-base">
              Optional zur Einmalzahlung – bei monatlicher Zahlung immer inklusive. CMS-Zugang
              (Sanity) nur mit laufender Betreuung.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {hostingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-navy">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-gray-500">
              Alle Preise netto zzgl. MwSt. Individuelle Erweiterungen auf Anfrage.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors min-h-11",
        active
          ? "bg-navy text-white"
          : "text-navy/70 hover:text-navy"
      )}
    >
      {children}
    </button>
  );
}
