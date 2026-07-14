import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Kestler Connect.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Datenschutz" }]} />
        <h1 className="text-3xl font-extrabold text-anthracite">Datenschutzerklärung</h1>

        <div className="prose-custom mt-8 max-w-3xl space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-anthracite">1. Datenschutz auf einen Blick</h2>
            <p className="mt-4 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">2. Verantwortliche Stelle</h2>
            <p className="mt-4 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist Kestler Connect, Jascha Kestler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">3. Datenerfassung auf dieser Website</h2>
            <p className="mt-4 leading-relaxed">
              Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name, Firma, Telefonnummer, E-Mail) zur Bearbeitung Ihrer Anfrage verwendet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">4. Ihre Rechte</h2>
            <p className="mt-4 leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
