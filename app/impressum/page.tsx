import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Impressum",
  description: "Impressum von Kestler Connect.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Impressum" }]} />
        <h1 className="text-3xl font-extrabold text-anthracite">Impressum</h1>

        <div className="prose-custom mt-8 max-w-3xl space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-anthracite">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">
              Kestler Connect<br />
              Jascha Kestler<br />
              Marienstr. 17<br />
              47198 Duisburg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">Kontakt</h2>
            <p className="mt-2">
              Telefon: {siteConfig.phone}<br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">Umsatzsteuer-ID</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE XXX XXX XXX
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">Verantwortlich für den Inhalt</h2>
            <p className="mt-2">Jascha Kestler</p>
          </section>
        </div>
      </div>
    </div>
  );
}
