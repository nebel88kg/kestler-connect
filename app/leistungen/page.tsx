import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { leistungenMenuItems } from "@/lib/navigation";
import { splitLeistungen } from "@/lib/serviceMenu";
import { Card } from "@/components/ui/Card";
import { MoreDetails } from "@/components/ui/MoreDetails";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Leistungen: Social Media, Google Ads, Meta Ads, SEO & Webseiten",
  description:
    "Leistungen der Online-Marketing-Agentur Kestler Connect aus Duisburg: Social Media, Google Ads, Meta Ads, SEO und Webseiten für Unternehmen im Ruhrgebiet und am Niederrhein.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  const { core, more } = splitLeistungen(leistungenMenuItems);

  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]} variant="dark" />
          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
            Leistungen der Online-Marketing-Agentur
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
            Fünf Kernleistungen für mehr Sichtbarkeit und Anfragen – für regionale und lokale Unternehmen in Duisburg,
            im Ruhrgebiet und am Niederrhein.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {core.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.06}>
              <Link href={item.href} className="block h-full">
                <Card className="flex h-full flex-col">
                  <h2 className="text-xl font-bold text-anthracite">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-accent-dark">Mehr erfahren →</span>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {more.length > 0 && (
          <ScrollReveal className="mx-auto mt-10 max-w-3xl">
            <MoreDetails summary="Weitere Leistungen">
              <ul className="grid gap-3 sm:grid-cols-2">
                {more.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-semibold text-anthracite underline-offset-2 hover:text-accent-dark hover:underline"
                    >
                      {item.title} →
                    </Link>
                    {item.description && <p className="mt-0.5 text-sm text-gray-600">{item.description}</p>}
                  </li>
                ))}
              </ul>
            </MoreDetails>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-16">
          <div className="rounded-2xl border border-navy/10 bg-navy/[0.03] px-6 py-10 text-center sm:px-10">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">Nicht sicher, womit Sie starten sollen?</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-700">
              Wir schauen uns Ihre Situation an und empfehlen den sinnvollsten nächsten Schritt – kostenlos und
              unverbindlich.
            </p>
            <Button href="/kontakt" size="lg" className="mt-6">
              Kostenloses Erstgespräch
            </Button>
            <p className="mt-4 text-sm">
              <Link href="/einzugsgebiet" className="font-semibold text-accent-dark underline underline-offset-2">
                Für welche Orte wir arbeiten →
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
