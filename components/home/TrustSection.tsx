import { LogoSlider } from "@/components/ui/LogoSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

/**
 * Bewusst ohne Kennzahlen-Zähler (Werbebudget, Leads, Unternehmen):
 * Diese Zahlen waren nicht belegt. Stattdessen nicht-numerische Vertrauenspunkte.
 */
const trustPoints = [
  {
    title: "Fester Ansprechpartner",
    description: "Kurze Wege und klare Abstimmung – ohne anonyme Agentur-Schleife.",
  },
  {
    title: "Transparentes Reporting",
    description: "Sie sehen, was läuft: Kanäle, Kosten und nächste Schritte.",
  },
  {
    title: "Regional verankert",
    description: "Standort Duisburg, BNI-Mitglied und aktiv im lokalen Umfeld.",
  },
  {
    title: "Kostenloses Erstgespräch",
    description: "Unverbindlich prüfen, ob Social Media, Ads oder SEO für Sie Sinn ergeben.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">
            Bereits erfolgreich zusammengearbeitet mit
          </p>
          <LogoSlider />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="mt-14 text-center text-xl font-extrabold text-navy sm:text-2xl">
            Warum Kestler Connect
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-accent/20 bg-white p-5 text-center sm:text-left"
              >
                <h3 className="text-sm font-bold text-navy sm:text-base">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <ReviewBadge />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
