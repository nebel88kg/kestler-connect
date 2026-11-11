import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/navigation";

export function ContactCTA() {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-navy sm:text-5xl lg:text-6xl">
              Kostenloses Strategiegespräch anfragen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schildern Sie uns kurz Ihr Vorhaben – wir melden uns zeitnah, unverbindlich und ohne Verpflichtung.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Einschätzung Ihrer aktuellen Situation",
                "Empfehlung für sinnvolle nächste Schritte",
                "Keine Verpflichtung",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-navy"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-700">
              Lieber direkt?{" "}
              <a href={`tel:${tel}`} className="font-semibold text-navy underline underline-offset-2">
                {siteConfig.phone}
              </a>{" "}
              oder{" "}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline underline-offset-2"
              >
                WhatsApp
              </a>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl bg-white p-4 sm:p-8">
              <ContactForm source="homepage-cta" compact />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
