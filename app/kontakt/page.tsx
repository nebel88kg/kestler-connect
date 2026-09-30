import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Kontakt & kostenloses Erstgespräch",
  description:
    "Kontakt zu Kestler Connect, Ihrer Online-Marketing-Agentur aus Duisburg: kostenloses Erstgespräch per Formular, Telefon oder WhatsApp anfragen.",
  path: "/kontakt",
});

export default function KontaktPage() {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} variant="dark" />
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
            Kontakt &amp; kostenloses Erstgespräch
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-300 sm:mt-4 sm:text-lg">
            Online-Marketing-Agentur aus Duisburg. Schreiben Sie uns kurz, worum es geht – wir melden uns
            zeitnah bei Ihnen. Kostenlos und unverbindlich.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-xl font-bold text-anthracite">Anfrage senden</h2>
            <ContactForm source="kontakt" className="mt-4" />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="font-bold text-anthracite">Lieber direkt sprechen?</h2>
              <p className="mt-2 text-gray-600">Rufen Sie an oder schreiben Sie uns per WhatsApp.</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${tel}`} variant="secondary" size="md" className="w-full sm:w-auto">
                  {siteConfig.phone}
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  external
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Per WhatsApp schreiben
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-accent-dark underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="font-bold text-anthracite">Adresse</h2>
              <p className="mt-2 text-gray-600">
                Kestler Connect
                <br />
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Für Unternehmen in Duisburg, im Ruhrgebiet und am Niederrhein – vor Ort und digital.
              </p>
            </div>

            <ReviewBadge />
          </div>
        </div>
      </div>
    </>
  );
}
