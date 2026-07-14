import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactCTA() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Jetzt starten
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
              Kostenlose Potenzialanalyse sichern
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Erfahren Sie in einem unverbindlichen Gespräch, wie wir Ihr Unternehmen online voranbringen können.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Individuelle Analyse Ihrer aktuellen Situation",
                "Konkrete Handlungsempfehlungen",
                "Transparente Kostenaufstellung",
                "Keine Verpflichtung",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-accent/20 sm:p-8">
              <ContactForm source="homepage-cta" compact />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
