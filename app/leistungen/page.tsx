import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { leistungenNav, leistungenHubContent } from "@/lib/navigation";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Leistungen",
  description:
    "Mitarbeitergewinnung, Leadgewinnung, Google Ads, Meta Ads, Social Media, Workshops, Webseiten und SEO von Kestler Connect.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]}
            variant="dark"
          />
          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
            Unsere Leistungen
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Klare Angebote für Wachstum: von Anfragen und Mitarbeitern über Workshops bis zu Website und Sichtbarkeit.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leistungenNav.children?.map((section, i) => {
            const hub = leistungenHubContent[section.href.split("/").pop() || ""];
            return (
              <ScrollReveal key={section.href} delay={i * 0.08}>
                <Link href={section.href} className="block h-full">
                  <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
                    <h2 className="text-xl font-bold text-anthracite">{section.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {hub?.description || section.description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-accent">Mehr erfahren →</span>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-16">
          <div className="rounded-2xl border border-navy/10 bg-navy/[0.03] px-6 py-10 text-center sm:px-10">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              Nicht sicher, womit Sie starten sollen?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Wir schauen uns Ihre Situation an und empfehlen den sinnvollsten nächsten Schritt.
            </p>
            <Button href="/kontakt" size="lg" className="mt-6">
              Kostenlose Potenzialanalyse
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
