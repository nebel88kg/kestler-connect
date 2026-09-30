import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata, createFaqSchema } from "@/lib/seo";
import { getLocation, locations, locationFaq, locationServices } from "@/content/locations";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MoreDetails } from "@/components/ui/MoreDetails";
import { ContactForm } from "@/components/ui/ContactForm";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { siteConfig } from "@/lib/navigation";

export function generateStaticParams() {
  return locations.map((location) => ({ ort: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ort: string }>;
}): Promise<Metadata> {
  const { ort } = await params;
  const location = getLocation(ort);
  if (!location) return {};

  return createMetadata({
    title: `Online-Marketing-Agentur ${location.name} – Social Media, Ads & SEO`,
    description: `Online-Marketing-Agentur für Unternehmen in ${location.name}: Social Media, Google Ads, Meta Ads, SEO und Webseiten von Kestler Connect aus Duisburg. Kostenloses Erstgespräch.`,
    path: `/einzugsgebiet/${location.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ ort: string }> }) {
  const { ort } = await params;
  const location = getLocation(ort);
  if (!location) notFound();

  const faq = locationFaq(location.name);
  const services = locationServices(location.name);
  const tel = siteConfig.phone.replace(/\s/g, "");
  const others = locations.filter((item) => item.slug !== location.slug);

  return (
    <>
      <JsonLd data={createFaqSchema(faq)} />

      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Einzugsgebiet", href: "/einzugsgebiet" },
              { label: location.name },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
              Online-Marketing-Agentur für {location.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
              Social Media, Google Ads, Meta Ads, SEO und Webseiten für Unternehmen in {location.name} und Umgebung –
              von Kestler Connect aus Duisburg.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" size="lg">
                Kostenloses Erstgespräch
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
          <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
            Was bietet Kestler Connect in {location.name}?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
            {location.context} Wir unterstützen Unternehmen in {location.name} dabei, online sichtbarer zu werden und
            mehr passende Anfragen zu erhalten.
          </p>
          <div className="mt-8 max-w-3xl">
            <Accordion items={services} defaultOpenIndex={null} headingLevel="h3" />
          </div>
          <div className="mt-10">
            <Button href="#kontakt" size="lg">
              Kostenloses Erstgespräch
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl font-bold text-anthracite lg:text-4xl">Häufige Fragen</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion items={faq} defaultOpenIndex={null} />
          </div>
          <MoreDetails summary="Weitere Orte im Einzugsgebiet" className="mx-auto mt-8 max-w-3xl">
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>
                <Link href="/marketing-agentur-duisburg" className="font-semibold text-accent-dark underline underline-offset-2">
                  Duisburg
                </Link>
              </li>
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/einzugsgebiet/${item.slug}`}
                    className="font-semibold text-accent-dark underline underline-offset-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/einzugsgebiet" className="font-semibold text-accent-dark underline underline-offset-2">
                  Alle Orte im Überblick
                </Link>
              </li>
            </ul>
          </MoreDetails>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white lg:text-4xl">Kostenloses Erstgespräch anfragen</h2>
              <p className="mt-4 text-gray-200">Wir melden uns zeitnah. Kostenlos und unverbindlich.</p>
              <div className="mt-6">
                <ReviewBadge tone="dark" />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 sm:p-8">
              <ContactForm source={`ort-${location.slug}`} compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
