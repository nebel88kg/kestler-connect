import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

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
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">
              Leistungen
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-5xl">Unsere Leistungen</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
              Fünf Kernleistungen, die zusammenspielen – für Unternehmen in Duisburg, im Ruhrgebiet und am
              Niederrhein.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <Link href={service.href} className="block h-full">
                <Card className="h-full border-navy/10">
                  <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-navy">
                        <span className="text-accent-dark" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-accent-dark">Mehr erfahren →</p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <details className="group mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-navy sm:text-base">
              Weitere Leistungen
              <span aria-hidden="true" className="text-xl text-accent-dark transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="grid gap-2 border-t border-gray-100 px-5 py-4 sm:grid-cols-2">
              {moreServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-navy underline-offset-2 hover:text-accent-dark hover:underline">
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <Button href="/kontakt" size="md">
              Kostenloses Erstgespräch
            </Button>
            <Link
              href="/einzugsgebiet"
              className="text-sm font-semibold text-accent-dark underline underline-offset-2 hover:text-navy"
            >
              Für welche Orte wir arbeiten →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
