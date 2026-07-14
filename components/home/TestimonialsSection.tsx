import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Thomas M.",
    company: "SHK-Betrieb, NRW",
    result: "120% mehr Anfragen in 3 Monaten",
    quote: "Endlich planbare Aufträge statt Zufall. Kestler Connect versteht das Handwerk.",
  },
  {
    name: "Sandra K.",
    company: "Golfclub Raffelberg",
    result: "Deutlich mehr Schnupperanfragen",
    quote: "Professionelle Betreuung und messbare Ergebnisse bei der Mitgliedergewinnung.",
  },
  {
    name: "Michael R.",
    company: "Immobilienmakler",
    result: "45% mehr Besichtigungstermine",
    quote: "Die Meta Lead-Kampagnen haben unsere Akquise revolutioniert.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">
              Kundenstimmen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Was unsere Kunden über die Zusammenarbeit sagen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <Card>
                <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400 sm:h-48">
                  <div className="text-center">
                    <div className="text-4xl">▶</div>
                    <p className="mt-2 text-sm">Video-Testimonial</p>
                  </div>
                </div>
                <p className="mb-4 italic text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-anthracite">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                  <p className="mt-2 text-sm font-semibold text-accent">{t.result}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
