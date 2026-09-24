import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bniLogo } from "@/lib/clientLogos";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Über uns – Social Media & Performance Marketing Duisburg",
  description:
    "Kestler Connect ist eine Social-Media- und Performance-Marketing-Agentur aus Duisburg für regionale und lokale Unternehmen – Social Media Marketing, Google Ads, Meta Ads und Website-Erstellung.",
  path: "/ueber-uns",
});

const storySections = [
  {
    title: "Wer bin ich?",
    paragraphs: [
      "Ich bin Jascha Kestler – Gründer von Kestler Connect, einer Social-Media- und Performance-Marketing-Agentur aus Duisburg für regionale und lokale Unternehmen.",
      "Mein Weg führte vom Handwerk über Sport, Sponsoring und Events bis in die Welt des digitalen Marketings. Genau diese Mischung prägt heute meine Arbeit: bodenständig, direkt und immer mit Blick auf das, was am Ende wirklich zählt – nachhaltiges Wachstum.",
      "Ob lokaler Betrieb, regionales Unternehmen oder wachsender Mittelstand: Durch Erfahrungen in unterschiedlichen Branchen weiß ich, dass erfolgreiche Vermarktung mit echten Beziehungen beginnt. Denn hinter jeder Marke und jedem Unternehmen stehen Menschen.",
    ],
  },
  {
    title: "Was treibt mich an?",
    paragraphs: [
      "Mich begeistert es, Potenziale sichtbar zu machen und Verbindungen zu schaffen, die Wachstum ermöglichen.",
      "Zu oft sehe ich Unternehmen, die hervorragende Arbeit leisten, aber nicht die Aufmerksamkeit erhalten, die sie verdienen. Genau hier setze ich an. Mit klaren Strategien, kreativen Ideen und dem Ziel, die richtigen Menschen zur richtigen Zeit zu erreichen.",
      "Für mich geht es nicht nur um Reichweite, Klicks oder Werbeanzeigen. Es geht darum, Verbindungen zwischen Unternehmen und ihren Kunden aufzubauen – Verbindungen, die Vertrauen schaffen, langfristig bestehen und echtes Wachstum ermöglichen.",
    ],
  },
  {
    title: "Unsere Mission",
    paragraphs: [
      "Wir wollen mit kleinen und mittelständischen Unternehmen zusammenwachsen – vom ersten Impuls bis zur Skalierung.",
      "Manche Betriebe brauchen einen klaren Start: Sichtbarkeit, Struktur und die richtigen Kanäle. Andere sind bereit, das zu skalieren, was bereits funktioniert. Beides begleiten wir partnerschaftlich, praxisnah und mit dem Tempo, das zu Ihrem Unternehmen passt.",
      "Ob lokaler Dienstleister, regionaler Betrieb oder wachsender Mittelstand: Unser Ziel ist nachhaltiges Wachstum – nicht kurzfristige Reichweite um jeden Preis.",
    ],
  },
  {
    title: "Warum Kunden mit mir arbeiten",
    paragraphs: [
      "Weil sie einen festen Ansprechpartner haben. Weil sie ehrliches Feedback bekommen. Und weil sie wissen, dass hinter Kestler Connect keine anonyme Agentur steckt, sondern jemand, der sich für ihr Unternehmen genauso begeistert wie sie selbst.",
      "Ich glaube an transparente Kommunikation, partnerschaftliche Zusammenarbeit und Marketing, das messbare Ergebnisse liefert.",
    ],
  },
  {
    title: "Privat",
    paragraphs: [
      "Wenn ich nicht gerade an neuen Projekten arbeite, findet man mich meistens auf dem Golfplatz, beim Fußball, auf dem Padel-Court oder bei Veranstaltungen rund um Vereine und Netzwerke. Als Duisburger und langjähriger MSV-Fan bin ich meiner Region bis heute eng verbunden.",
      "Denn egal ob im Sport, im Business oder im Alltag: Die besten Dinge entstehen durch starke Verbindungen. Und genau solche Verbindungen schaffen Wachstum.",
    ],
  },
];

const leistungenLinks = [
  { title: "Google Ads in Duisburg und Moers", href: "/leistungen/google-ads" },
  { title: "Meta Ads Agentur Duisburg", href: "/leistungen/meta-ads" },
  { title: "Social Media Agentur Duisburg", href: "/leistungen/social-media" },
  { title: "Performance Marketing", href: "/leistungen/performance-marketing" },
  { title: "SEO / Local SEO", href: "/leistungen/seo" },
  { title: "Website erstellen lassen", href: "/leistungen/webseiten" },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]} variant="dark" />
          <h1 className="text-3xl font-extrabold text-white lg:text-5xl">Über mich</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Social Media und Performance Marketing aus Duisburg – für regionale und lokale
            Unternehmen in Duisburg, Moers und Umgebung. Persönlich, erreichbar, lokal vernetzt.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <ScrollReveal>
          <div className="mb-12 grid gap-4 rounded-2xl border border-accent/20 bg-gray-50 p-6 sm:grid-cols-[140px_1fr] sm:items-center sm:p-8">
            <div className="mx-auto flex h-24 w-36 items-center justify-center sm:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bniLogo.src}
                alt={bniLogo.alt}
                className="max-h-24 w-auto max-w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Lokal verwurzelt
              </p>
              <p className="mt-1 text-lg font-bold text-navy">
                BNI-Mitglied – lokal vernetzt für Empfehlungen und Wachstum.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Zusätzlich Sponsoring u. a. für{" "}
                <a
                  href="https://share.google/lHKom5w9sywY5CYzV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Reit- und Fahrverein Ziethen e.V.
                </a>
                , Paul Schröder (Boxer) und{" "}
                <a
                  href="https://tusbaerl.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  TuS Baerl
                </a>
                .
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/JaschaKestler.JPG"
                alt="Jascha Kestler – Gründer der Social-Media-Agentur Kestler Connect in Duisburg"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {storySections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-anthracite">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-16 rounded-2xl border border-accent/20 bg-white p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-anthracite">Leistungen aus einer Hand</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Persönlich betreut aus Duisburg – für Unternehmen in Duisburg, Moers und dem Umkreis.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {leistungenLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-accent/30 bg-accent-light/40 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 rounded-2xl bg-gray-50 p-8 text-center lg:p-12">
            <h2 className="text-2xl font-bold text-anthracite">Bereit für den nächsten Schritt?</h2>
            <p className="mt-4 text-gray-600">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie ich Ihnen helfen kann.
            </p>
            <Button href="/kontakt" size="lg" className="mt-6">
              Kostenloses Strategiegespräch
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
