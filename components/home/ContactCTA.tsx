import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactCTA() {
  return (
    <section className="section-padding bg-anthracite">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white lg:text-5xl">
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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              <ContactForm source="homepage-cta" compact />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
