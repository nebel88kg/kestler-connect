import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, createFaqSchema, type FaqSchemaItem } from "@/lib/seo";
import { siteConfig } from "@/lib/navigation";
import { googleBusiness } from "@/lib/googleBusiness";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

const PATH = "/marketing-agentur-krefeld";

export const metadata: Metadata = createMetadata({
  title: "Marketing-Agentur Krefeld | Kestler Connect",
  absoluteTitle: true,
  description:
    "Online-Marketing-Agentur für Krefeld: Social Media, Google Ads, Meta Ads und SEO für kleine und mittlere Unternehmen. Kostenloses Strategiegespräch.",
  path: PATH,
  keywords: [
    "marketing agentur krefeld",
    "social media agentur krefeld",
    "google ads agentur krefeld",
    "meta ads krefeld",
    "online marketing krefeld",
    "performance marketing krefeld",
  ],
});

const services = [
  {
    title: "Social Media Marketing",
    href: "/leistungen/social-media/krefeld",
    description:
      "Instagram, TikTok und Facebook: Content, Reels und Betreuung für Betriebe in Krefeld und am Niederrhein.",
  },
  {
    title: "Performance Marketing",
    href: "/leistungen/performance-marketing",
    description: "Google Ads und Meta Ads mit messbaren Anfragen – lokal ausgesteuert.",
  },
  {
    title: "Google Ads",
    href: "/leistungen/google-ads/krefeld",
    description: "Suchanzeigen, wenn Kundinnen und Kunden in Krefeld nach Ihrer Leistung suchen.",
  },
  {
    title: "Meta Ads (Instagram & Facebook)",
    href: "/leistungen/meta-ads/krefeld",
    description: "Werbung auf Instagram und Facebook – gezielt nach Region und Interessen.",
  },
  {
    title: "SEO & Local SEO",
    href: "/leistungen/seo",
    description: "Besser gefunden werden bei Google, in Google Maps und in KI-Antworten.",
  },
  {
    title: "Webseiten & Landingpages",
    href: "/leistungen/webseiten",
    description: "Websites und Landingpages, die aus Besuchern Anfragen machen. Pakete ab 1.500 € (netto).",
  },
];

const relatedArticles = [
  {
    title: "Social Media Marketing Duisburg",
    href: "/blog/social-media-marketing-duisburg",
  },
  {
    title: "Google Ads Agentur Duisburg",
    href: "/blog/google-ads-agentur-duisburg",
  },
  {
    title: "Local SEO Duisburg",
    href: "/blog/local-seo-duisburg",
  },
  {
    title: "Meta Ads für lokale Unternehmen",
    href: "/blog/meta-ads-fuer-lokale-unternehmen",
  },
];

const faqItems: FaqSchemaItem[] = [
  {
    question: "Gibt es eine Online-Marketing-Agentur für Unternehmen in Krefeld?",
    answer:
      "Ja. Kestler Connect sitzt in Duisburg (Marienstr. 17) und betreut kleine und mittlere Unternehmen in Krefeld und am Niederrhein – vor Ort und digital.",
  },
  {
    question: "Welche Leistungen kann ich für Krefeld anfragen?",
    answer:
      "Social Media Marketing, Performance Marketing, Google Ads, Meta Ads, SEO und Webseiten. Welche Kombination sinnvoll ist, klären wir im kostenlosen Strategiegespräch.",
  },
  {
    question: "Lohnt sich Instagram-Werbung für meinen Betrieb in Krefeld?",
    answer:
      "Häufig ja – vor allem, wenn sich Ihr Angebot gut zeigen lässt oder Sie Menschen in einer bestimmten Region erreichen möchten. Ob es sich für Sie rechnet, hängt von Angebot, Zielgruppe und Budget ab. Das schätzen wir im Strategiegespräch ehrlich ein.",
  },
  {
    question: "Wie werde ich bei Google in Krefeld besser gefunden?",
    answer:
      "Mit Local SEO: gepflegtes Google-Unternehmensprofil, Website-Inhalte für Suchen wie „Leistung + Krefeld“ und echte Bewertungen. Google Ads sorgen zusätzlich sofort für Sichtbarkeit. Garantien für Platzierungen geben wir nicht.",
  },
  {
    question: "Wie starte ich die Zusammenarbeit?",
    answer:
      "Über das Kontaktformular, per Telefon oder WhatsApp. Wir melden uns zeitnah und besprechen Ziele und nächste Schritte – kostenlos und unverbindlich.",
  },
];

const ratingLabel = googleBusiness.rating.toFixed(1).replace(".", ",");

export default function MarketingAgenturKrefeldPage() {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <>
      <JsonLd data={createFaqSchema(faqItems)} />

      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Startseite", href: "/" }, { label: "Marketing-Agentur Krefeld" }]}
            variant="dark"
          />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
              Online-Marketing-Agentur für Krefeld
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg lg:text-xl">
              Kestler Connect unterstützt kleine und mittlere Unternehmen in Krefeld und am Niederrhein – mit Social
              Media, Google Ads, Meta Ads und SEO.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
              Sitz in Duisburg, Betreuung vor Ort und digital. Fester Ansprechpartner statt anonymer Agenturprozesse.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" size="lg">
                Kostenloses Strategiegespräch
              </Button>
              <Button
                href="/leistungen"
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-navy"
              >
                Leistungen ansehen
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Kostenlos &amp; unverbindlich ·{" "}
              <a href={`tel:${tel}`} className="font-semibold text-white underline underline-offset-2">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">Warum Kestler Connect für Krefeld?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            Krefeld liegt am Niederrhein, nah an Duisburg und Düsseldorf. Viele Betriebe brauchen Sichtbarkeit vor Ort –
            ohne eigene Marketingabteilung. Genau dafür sind wir da.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Fokus</dt>
              <dd className="mt-1 text-anthracite">Kleine und mittlere Unternehmen (KMU)</dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Sitz</dt>
              <dd className="mt-1 text-anthracite">
                {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
              </dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Google-Bewertungen</dt>
              <dd className="mt-1 text-anthracite">
                <a
                  href={googleBusiness.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-dark underline-offset-2 hover:underline"
                >
                  {ratingLabel} Sterne aus {googleBusiness.reviewCount} Bewertungen
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Weitere Orte</dt>
              <dd className="mt-1 text-anthracite">
                <Link href="/einzugsgebiet" className="font-semibold text-accent-dark underline-offset-2 hover:underline">
                  Einzugsgebiet ansehen
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">Leistungen für Unternehmen in Krefeld</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            Von organischem Social Media bis zu messbaren Anzeigen – abgestimmt auf Ihre Ziele.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-anthracite">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <p className="mt-3 text-sm font-semibold text-accent-dark">Mehr erfahren →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-anthracite lg:text-3xl">Für wen ist das gedacht?</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Für KMU in Krefeld, die mehr Anfragen, Kunden oder Bewerbungen möchten – und dafür Social Media, Ads oder
              SEO brauchen.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Kleine und mittlere Unternehmen vor Ort",
                "Dienstleister und Betriebe mit regionalem Kundenkreis",
                "Unternehmen ohne eigene Marketingabteilung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-anthracite">
                  <span className="mt-0.5 text-accent-dark" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-anthracite lg:text-3xl">Weitere Orte in der Region</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Wir betreuen auch Betriebe in Duisburg, Moers und dem weiteren Einzugsgebiet.
            </p>
            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  href="/marketing-agentur-duisburg"
                  className="font-semibold text-accent-dark underline underline-offset-2"
                >
                  Marketing-Agentur Duisburg
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing-agentur-moers"
                  className="font-semibold text-accent-dark underline underline-offset-2"
                >
                  Marketing-Agentur Moers
                </Link>
              </li>
              <li>
                <Link href="/einzugsgebiet" className="font-semibold text-accent-dark underline underline-offset-2">
                  Alle Orte im Überblick
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl font-bold text-anthracite lg:text-4xl">Häufige Fragen</h2>
          <dl className="mx-auto max-w-3xl space-y-6">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="font-bold text-anthracite">{item.question}</dt>
                <dd className="mt-1 leading-relaxed text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>

          <nav aria-label="Ratgeber" className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-lg font-bold text-anthracite">Ratgeber aus unserem Blog</h2>
            <ul className="mt-3 space-y-2">
              {relatedArticles.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="font-semibold text-accent-dark underline underline-offset-2">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white lg:text-4xl">Kostenloses Strategiegespräch</h2>
              <p className="mt-4 text-gray-200">
                Wir klären, welche Kanäle zu Ihrem Betrieb in Krefeld passen – unverbindlich.
              </p>
              <div className="mt-6">
                <ReviewBadge tone="dark" />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 sm:p-8">
              <ContactForm source="ort-krefeld" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
