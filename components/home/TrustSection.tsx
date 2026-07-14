import { Counter } from "@/components/ui/Counter";
import { LogoSlider } from "@/components/ui/LogoSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 100000, prefix: "", suffix: " €+", label: "Werbebudget verwaltet" },
  { value: 1000, prefix: "", suffix: "+", label: "Leads generiert" },
  { value: 20, prefix: "", suffix: "+", label: "Unternehmen betreut" },
  { value: 5, prefix: "", suffix: "★", label: "Google Bewertungen" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
            Bereits erfolgreich zusammengearbeitet mit
          </p>
          <LogoSlider />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-anthracite lg:text-4xl">
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
