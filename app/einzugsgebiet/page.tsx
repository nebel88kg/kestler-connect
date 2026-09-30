import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, createFaqSchema } from "@/lib/seo";
import { locations, otherPlaces } from "@/content/locations";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { MoreDetails } from "@/components/ui/MoreDetails";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = createMetadata({
  title: "Online-Marketing-Agentur im Ruhrgebiet & am Niederrhein – Einzugsgebiet",
  description:
    "Kestler Connect aus Duisburg betreut Unternehmen im Ruhrgebiet und am Niederrhein: Duisburg, Moers, Krefeld, Oberhausen, Essen, Mülheim, Düsseldorf und Umgebung.",
  path: "/einzugsgebiet",
});

const faq = [
  {
    question: "Für welche Orte arbeitet Kestler Connect?",
    answer:
      "Sitz ist Duisburg. Wir betreuen Unternehmen im Ruhrgebiet und am Niederrhein, unter anderem in Duisburg, Moers, Krefeld, Oberhausen, Essen, Mülheim an der Ruhr und Düsseldorf sowie in Neukirchen-Vluyn, Kamp-Lintfort, Dinslaken und Wesel.",
  },
  {
    question: "Müssen wir uns vor Ort treffen?",
    answer:
      "Nicht zwingend. Vieles läuft digital; Termine vor Ort sind je nach Bedarf möglich. Das klären wir im Erstgespräch.",
  },
  {
    question: "Was ist, wenn mein Ort nicht aufgeführt ist?",
    answer: "Fragen Sie einfach an. Das Einzugsgebiet ist keine feste Grenze – wir prüfen gern, ob es passt.",
  },
];

export default function EinzugsgebietPage() {
  return (
    <>
      <JsonLd data={createFaqSchema(faq)} />

      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Einzugsgebiet" }]} variant="dark" />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
              Online-Marketing-Agentur für das Ruhrgebiet und den Niederrhein
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
              Kestler Connect sitzt in Duisburg und betreut Unternehmen in der Region – Social Media, Google Ads,
              Meta Ads, SEO und Webseiten, vor Ort und digital.
            </p>
            <div className="mt-8">
              <Button href="#kontakt" size="lg">
                Kostenloses Erstgespräch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">Wo wir für Sie da sind</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
            Wählen Sie Ihren Ort für eine kurze Übersicht – oder fragen Sie direkt an.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/marketing-agentur-duisburg">
              <Card className="h-full">
                <h3 className="text-lg font-bold text-anthracite">Duisburg</h3>
                <p className="mt-2 text-sm text-gray-600">Unser Standort – Marketing-Agentur Duisburg.</p>
                <p className="mt-3 text-sm font-semibold text-accent-dark">Zur Seite →</p>
              </Card>
            </Link>
            {locations.map((location) => (
              <Link key={location.slug} href={`/einzugsgebiet/${location.slug}`}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-anthracite">{location.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{location.context}</p>
                  <p className="mt-3 text-sm font-semibold text-accent-dark">Zur Seite →</p>
                </Card>
              </Link>
            ))}
          </div>

          <MoreDetails summary="Weitere Orte im Einzugsgebiet" className="mt-8 max-w-3xl">
            <p>
              Auch für Unternehmen in {otherPlaces.join(", ")} und Umgebung sind wir ansprechbar. Schreiben Sie uns
              einfach – wir prüfen gern, wie wir helfen können.
            </p>
          </MoreDetails>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl font-bold text-anthracite lg:text-4xl">Häufige Fragen</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion items={faq} />
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white lg:text-4xl">Kostenloses Erstgespräch anfragen</h2>
              <p className="mt-4 text-gray-200">
                Wir melden uns zeitnah. Oder direkt:{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-semibold text-white underline underline-offset-2"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 sm:p-8">
              <ContactForm source="einzugsgebiet" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
