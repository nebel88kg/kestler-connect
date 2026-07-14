import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Über uns",
  description: "Lernen Sie Kestler Connect kennen – Performance-Marketing mit Leidenschaft und Branchenverständnis.",
  path: "/ueber-uns",
});

const storySections = [
  {
    title: "Wer bin ich?",
    content:
      "Ich bin Jascha Kestler – Gründer von Kestler Connect. Seit über 5 Jahren helfe ich Handwerksbetrieben, Vereinen und lokalen Unternehmen dabei, online sichtbar zu werden und planbar zu wachsen. Was als Leidenschaft für digitales Marketing begann, ist heute meine Mission: Unternehmen zu helfen, die wirklich etwas bewegen.",
  },
  {
    title: "Warum mache ich das?",
    content:
      "Weil ich gesehen habe, wie viele großartige Unternehmen unsichtbar bleiben – nicht weil sie schlechte Arbeit leisten, sondern weil niemand ihnen zeigt, wie Online-Marketing wirklich funktioniert. Ich wollte das ändern. Kein Agentur-Blabla, keine leeren Versprechen – sondern ehrliche Arbeit mit messbaren Ergebnissen.",
  },
  {
    title: "Warum verstehen Kunden mich?",
    content:
      "Weil ich zuhöre. Weil ich verstehe, dass ein Handwerksmeister andere Sorgen hat als ein Golfclub-Vorstand. Weil ich in einfacher Sprache erkläre, was ich tue – und warum. Und weil meine Kunden die Ergebnisse sehen: mehr Anfragen, mehr Mitglieder, mehr Wachstum.",
  },
];

export default function UeberUnsPage() {
  return (
    <div className="pt-32">
      <section className="bg-anthracite pb-16 pt-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]} variant="dark" />
          <h1 className="text-3xl font-extrabold text-white lg:text-5xl">Deine Story</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Nicht Agentur-Blabla. Sondern ehrlich, direkt und mit Leidenschaft.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-anthracite to-accent/30 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl">👤</div>
                <p className="mt-4 text-sm text-gray-300">Professionelles Bild / Video</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {storySections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-anthracite">{section.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center lg:p-12">
            <h2 className="text-2xl font-bold text-anthracite">Bereit für den nächsten Schritt?</h2>
            <p className="mt-4 text-gray-600">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie ich Ihnen helfen kann.
            </p>
            <Button href="/kontakt" size="lg" className="mt-6">
              Kostenloses Strategiegespräch
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
