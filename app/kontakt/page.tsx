import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = createMetadata({
  title: "Kontakt",
  description: "Kontaktieren Sie Kestler Connect – per Formular, Telefon, WhatsApp oder Calendly.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="pt-32">
      <section className="bg-anthracite pb-16 pt-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} variant="dark" />
          <h1 className="text-3xl font-extrabold text-white lg:text-5xl">Kontakt</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-anthracite">Schreiben Sie uns</h2>
                <ContactForm source="kontakt" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-anthracite">Telefon</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-2 block text-accent hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-anthracite">WhatsApp</h3>
                <Button
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  variant="outline"
                  external
                  className="mt-2"
                >
                  Per WhatsApp schreiben
                </Button>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-anthracite">Termin buchen</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Buchen Sie direkt einen Termin für ein kostenloses Strategiegespräch.
                </p>
                <Button href={siteConfig.calendlyUrl} external className="mt-4">
                  Calendly öffnen
                </Button>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-anthracite">E-Mail</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-accent hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
