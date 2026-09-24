import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, createFaqSchema, type FaqSchemaItem } from "@/lib/seo";
import { siteConfig } from "@/lib/navigation";
import { googleBusiness } from "@/lib/googleBusiness";
import { referenzen } from "@/content/referenzen";
import { dnmTestimonial } from "@/content/testimonials";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const PATH = "/marketing-agentur-duisburg";

export const metadata: Metadata = createMetadata({
  title: "Marketing-Agentur Duisburg für lokale Unternehmen | Kestler Connect",
  description:
    "Social-Media- und Performance-Marketing-Agentur aus Duisburg: Instagram, Google Ads, Meta Ads, Websites und Local SEO für lokale Unternehmen in Duisburg, Moers und Umgebung.",
  path: PATH,
  keywords: [
    "marketing agentur duisburg",
    "werbeagentur duisburg",
    "social media agentur duisburg",
    "google ads agentur duisburg",
    "instagram werbung duisburg",
    "marketing agentur moers",
  ],
});

const services = [
  {
    title: "Social Media Marketing",
    href: "/leistungen/social-media",
    description:
      "Instagram, TikTok, Facebook und LinkedIn: Content, Reels, Videos und Community Management.",
  },
  {
    title: "Performance Marketing",
    href: "/leistungen/performance-marketing",
    description: "Werbeanzeigen mit messbaren Anfragen – Google Ads und Meta Ads aus einer Hand.",
  },
  {
    title: "Google Ads",
    href: "/leistungen/google-ads",
    description: "Suchanzeigen, die erscheinen, wenn Kunden in Ihrer Region nach Ihrer Leistung suchen.",
  },
  {
    title: "Meta Ads (Instagram & Facebook)",
    href: "/leistungen/meta-ads",
    description: "Werbung auf Instagram und Facebook – gezielt nach Region und Interessen.",
  },
  {
    title: "Webseiten & Landingpages",
    href: "/leistungen/webseiten",
    description: "Websites und Landingpages, die aus Besuchern Anfragen machen.",
  },
  {
    title: "SEO & Local SEO",
    href: "/leistungen/seo",
    description: "Besser gefunden werden bei Google, in Google Maps und in KI-Suchen.",
  },
  {
    title: "Marketing-Workshops",
    href: "/leistungen/workshops",
    description: "Kompakte Workshops für Startups, lokale Unternehmen und Vereine.",
  },
];

const audiences = [
  "Lokale Unternehmen und Geschäfte vor Ort",
  "Handwerksbetriebe",
  "Dienstleister",
  "Vereine",
  "Kleine und mittelständische Unternehmen (KMU)",
];

const cities = [
  "Duisburg",
  "Moers",
  "Oberhausen",
  "Mülheim an der Ruhr",
  "Krefeld",
  "Düsseldorf",
];

const steps = [
  {
    title: "Kostenloses Strategiegespräch",
    description: "Ziele, Ausgangslage und passende Kanäle klären – unverbindlich.",
  },
  { title: "Analyse", description: "Ziele, Ist-Stand und Chancen – klar und ohne Fachchinesisch." },
  { title: "Strategie", description: "Maßgeschneiderter Plan mit messbaren Zielen und Prioritäten." },
  {
    title: "Umsetzung",
    description: "Fester Ansprechpartner – Ads, Social Media und Website aus einer Hand.",
  },
  {
    title: "Optimierung & Reporting",
    description: "Laufende Verbesserung und transparente Berichte – Sie wissen immer, was läuft.",
  },
];

const faqItems: FaqSchemaItem[] = [
  {
    question: "Wie bekomme ich mehr Kunden über Werbeanzeigen?",
    answer:
      "Indem Ihre Anzeigen genau dort erscheinen, wo Ihre Kunden gerade suchen oder scrollen – bei Google über Suchanzeigen, auf Instagram und Facebook über Meta Ads – und auf eine Seite führen, die aus Klicks Anfragen macht. Entscheidend sind eine klare Zielgruppe, ein passendes Angebot und laufende Optimierung nach Kosten pro Anfrage. Kestler Connect aus Duisburg plant, schaltet und optimiert solche Kampagnen für lokale Unternehmen in Duisburg, Moers und Umgebung.",
  },
  {
    question: "Wie kann ich Suchanzeigen bei Google schalten?",
    answer:
      "Über ein Google-Ads-Konto: Sie legen fest, bei welchen Suchbegriffen und in welcher Region Ihre Anzeige erscheint, schreiben Anzeigentexte und bestimmen ein Budget. Damit daraus Anfragen werden, sollten Anrufe und Formulare gemessen und die Kampagne regelmäßig optimiert werden. Wenn Sie das nicht selbst übernehmen möchten, kümmert sich Kestler Connect in Duisburg um Einrichtung, Tracking und Betreuung Ihrer Google Ads.",
  },
  {
    question: "Lohnt sich Instagram-Werbung für meinen Betrieb in Duisburg?",
    answer:
      "Häufig ja – vor allem, wenn sich Ihr Angebot gut zeigen lässt, Sie Mitarbeitende suchen oder Menschen in einer bestimmten Region erreichen möchten. Ob es sich für Ihren Betrieb rechnet, hängt von Angebot, Zielgruppe und Budget ab. Kestler Connect aus Duisburg schätzt das im kostenlosen Strategiegespräch ehrlich ein und setzt Instagram- und Facebook-Werbung (Meta Ads) für lokale Unternehmen um.",
  },
  {
    question: "Wer hilft mir in der Nähe von Duisburg mit Werbung bei Google und Instagram?",
    answer:
      "Zum Beispiel Kestler Connect – eine Social-Media- und Performance-Marketing-Agentur mit Sitz in Duisburg (Marienstr. 17). Betreut werden Google Ads, Instagram- und Facebook-Werbung sowie Social-Media-Content für Unternehmen in Duisburg, Moers, Oberhausen, Mülheim an der Ruhr, Krefeld, Düsseldorf und Umgebung – vor Ort und digital.",
  },
  {
    question: "Welche Agentur in Duisburg kümmert sich um Instagram und TikTok für lokale Unternehmen?",
    answer:
      "Kestler Connect aus Duisburg übernimmt Strategie, Redaktionsplan, Reels und Kurzvideos sowie Community Management für Instagram und TikTok – je nach Zielgruppe auch Facebook und LinkedIn. Auf Wunsch wird der organische Auftritt mit Werbeanzeigen über Meta Ads kombiniert.",
  },
  {
    question: "Was kostet eine Social-Media-Agentur in Duisburg?",
    answer:
      "Das hängt vom Umfang ab – etwa von der Zahl der Kanäle, der Menge an Content und davon, ob zusätzlich Werbeanzeigen geschaltet werden. Kestler Connect nennt deshalb keine Pauschalpreise, sondern erstellt nach einem kostenlosen Erstgespräch ein individuelles Angebot. Für den Einstieg mit kleinem Budget gibt es kompakte Marketing-Workshops.",
  },
  {
    question: "Wie werde ich bei Google in meiner Stadt besser gefunden?",
    answer:
      "Mit Local SEO: einem gepflegten Google-Unternehmensprofil, einer Website, die auf Suchen wie „Leistung + Stadt“ ausgerichtet ist, und echten Google-Bewertungen. Google-Suchanzeigen sorgen zusätzlich sofort für Sichtbarkeit. Kestler Connect in Duisburg unterstützt bei Local SEO, Website und Google Ads – DnM – Dämmstoffe nach Maß ist nach SEO- und SEA-Unterstützung heute bei Google auf Seite 1 zu finden.",
  },
  {
    question: "Kann ich Social Media, Werbung und Website von einer Agentur bekommen?",
    answer:
      "Ja – das spart Abstimmungsaufwand, weil Inhalte, Anzeigen und Website aufeinander aufbauen. Kestler Connect in Duisburg bietet Social Media Marketing, Google Ads, Meta Ads, Webseiten und Landingpages sowie Local SEO aus einer Hand, mit festem Ansprechpartner.",
  },
];

const dnmQuoteSnippet =
  "…Mittlerweile sind wir bei Google auf Seite 1 zu finden und konnten dadurch bereits neue Kunden gewinnen…";

const ratingLabel = googleBusiness.rating.toFixed(1).replace(".", ",");

export default function MarketingAgenturDuisburgPage() {
  return (
    <>
      <JsonLd data={createFaqSchema(faqItems)} />

      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Startseite", href: "/" }, { label: "Marketing-Agentur Duisburg" }]}
            variant="dark"
          />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
              Marketing-Agentur in Duisburg für lokale Unternehmen
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg lg:text-xl">
              Kestler Connect ist eine Social-Media- und Performance-Marketing-Agentur aus
              Duisburg für regionale und lokale Unternehmen in Duisburg, Moers und Umgebung.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
              Schwerpunkte: Social Media Marketing, Google Ads, Meta Ads, Webseiten und Local SEO
              – aus einer Hand, mit festem Ansprechpartner.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/kontakt" size="lg">
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
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
            Kestler Connect auf einen Blick
          </h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">Was</dt>
              <dd className="mt-1 text-anthracite">
                Social-Media- und Performance-Marketing-Agentur
              </dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">Sitz</dt>
              <dd className="mt-1 text-anthracite">
                {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
              </dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">Gründer</dt>
              <dd className="mt-1 text-anthracite">Jascha Kestler</dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                Einzugsgebiet
              </dt>
              <dd className="mt-1 text-anthracite">Duisburg, Moers und Umgebung</dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                Google-Bewertungen
              </dt>
              <dd className="mt-1 text-anthracite">
                <a
                  href={googleBusiness.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  {ratingLabel} Sterne aus {googleBusiness.reviewCount} Bewertungen
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent-light/30 p-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">Netzwerk</dt>
              <dd className="mt-1 text-anthracite">
                BNI-Mitglied, Sponsor lokaler Vereine
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
            Wobei hilft mir Kestler Connect?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            Bei allem, was Sie online sichtbar macht und zu Anfragen führt – von Social Media über
            Werbeanzeigen bis zur Website.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-anthracite">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <p className="mt-3 text-sm font-semibold text-accent">Mehr erfahren →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-anthracite lg:text-3xl">
              Für wen ist Kestler Connect die passende Agentur?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Für Betriebe aus der Region, die mehr Kunden, Anfragen oder Bewerbungen möchten –
              aber keine eigene Marketingabteilung haben.
            </p>
            <ul className="mt-6 space-y-3">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-3 text-anthracite">
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-anthracite lg:text-3xl">
              Gibt es eine Marketing-Agentur in meiner Nähe?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Kestler Connect sitzt in Duisburg und betreut Unternehmen in Duisburg, Moers und
              Umgebung – vor Ort und digital.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-xl border border-accent/20 bg-accent-light/30 px-4 py-3 text-anthracite"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
            Wie läuft die Zusammenarbeit ab?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            Klarer Ablauf, fester Ansprechpartner und transparente Berichte.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-anthracite">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
            Welche Ergebnisse gab es bei anderen Kunden?
          </h2>
          <figure className="mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-gray-50 p-6">
            <blockquote className="text-lg italic leading-relaxed text-gray-700">
              &bdquo;{dnmQuoteSnippet}&ldquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-600">
              — {dnmTestimonial.company},{" "}
              <Link
                href="/referenzen/dnm"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                zur Case Study
              </Link>
            </figcaption>
          </figure>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {referenzen.map((ref) => (
              <Link key={ref.slug} href={`/referenzen/${ref.slug}`}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-anthracite">{ref.title}</h3>
                  <p className="mt-2 text-gray-600">{ref.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">Mehr erfahren →</p>
                </Card>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            Alle Projekte unter{" "}
            <Link
              href="/referenzen"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Referenzen
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
            Häufige Fragen – kurz beantwortet
          </h2>
          {/* Native <details>: alle Antworten stehen im HTML (auch für Such- und KI-Crawler). */}
          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-anthracite transition-colors hover:bg-gray-50 sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                  <h3 className="pr-4">{item.question}</h3>
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-4 py-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:py-5 sm:text-base">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-extrabold text-white lg:text-4xl">
            Wie erreiche ich Kestler Connect?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Im kostenlosen Strategiegespräch klären wir, welche Kanäle zu Ihrem Betrieb passen –
            unverbindlich.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-gray-300 sm:flex-row sm:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-accent"
            >
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
              {siteConfig.email}
            </a>
          </div>
          <Button href="/kontakt" size="lg" className="mt-8">
            Kostenloses Strategiegespräch
          </Button>
        </div>
      </section>
    </>
  );
}
