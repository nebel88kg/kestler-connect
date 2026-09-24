import { Counter } from "@/components/ui/Counter";
import { LogoSlider } from "@/components/ui/LogoSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 400000, prefix: "", suffix: " €+", label: "Werbebudget verwaltet" },
  { value: 1000, prefix: "", suffix: "+", label: "Leads generiert" },
  { value: 12, prefix: "", suffix: "+", label: "Unternehmen betreut" },
  { value: 5, prefix: "", suffix: "★", label: "Google Bewertungen" },
];

const trustPoints = [
  {
    title: "Fester Ansprechpartner",
    description: "Direkte Abstimmung mit Jascha – ohne anonyme Agentur-Schleife.",
  },
  {
    title: "Transparente Reports",
    description: "Sie sehen, was läuft: Kanäle, Kosten und nächste Schritte.",
  },
  {
    title: "Erreichbarkeit",
    description: "Standort Duisburg, hybrid vor Ort und digital – auch Moers und Umkreis.",
  },
  {
    title: "Kostenloses Strategiegespräch",
    description: "Unverbindlich prüfen, ob Ads, Social oder SEO für Sie Sinn ergeben.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Bereits erfolgreich zusammengearbeitet mit
          </p>
          <LogoSlider />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                  <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
