import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Über Jascha Kestler",
  description:
    "Jascha Kestler, Gründer von Kestler Connect. Vom Handwerk über Sport und Events bis ins digitale Marketing – bodenständig, direkt und mit Fokus auf echte Verbindungen und nachhaltiges Wachstum.",
  path: "/ueber-uns",
});

const storySections = [
  {
    title: "Wer bin ich?",
    paragraphs: [
      "Ich bin Jascha Kestler – Gründer von Kestler Connect.",
      "Mein Weg führte vom Handwerk über Sport, Sponsoring und Events bis in die Welt des digitalen Marketings. Genau diese Mischung prägt heute meine Arbeit: bodenständig, direkt und immer mit Blick auf das, was am Ende wirklich zählt – nachhaltiges Wachstum.",
      "Ob Handwerksbetrieb, Verein oder lokales Unternehmen: Durch meine Erfahrungen in unterschiedlichen Branchen weiß ich, dass erfolgreiche Vermarktung immer mit echten Beziehungen beginnt. Denn hinter jeder Marke, jedem Unternehmen und jedem Verein stehen Menschen.",
    ],
  },
  {
    title: "Was treibt mich an?",
    paragraphs: [
      "Mich begeistert es, Potenziale sichtbar zu machen und Verbindungen zu schaffen, die Wachstum ermöglichen.",
      "Zu oft sehe ich Unternehmen, die hervorragende Arbeit leisten, aber nicht die Aufmerksamkeit erhalten, die sie verdienen. Genau hier setze ich an. Mit klaren Strategien, kreativen Ideen und dem Ziel, die richtigen Menschen zur richtigen Zeit zu erreichen.",
      "Für mich geht es nicht nur um Reichweite, Klicks oder Werbeanzeigen. Es geht darum, Verbindungen zwischen Unternehmen und ihren Kunden aufzubauen – Verbindungen, die Vertrauen schaffen, langfristig bestehen und echtes Wachstum ermöglichen.",
    ],
  },
  {
    title: "Warum Kunden mit mir arbeiten",
    paragraphs: [
      "Weil sie einen festen Ansprechpartner haben. Weil sie ehrliches Feedback bekommen. Und weil sie wissen, dass hinter Kestler Connect keine anonyme Agentur steckt, sondern jemand, der sich für ihr Unternehmen genauso begeistert wie sie selbst.",
      "Ich glaube an transparente Kommunikation, partnerschaftliche Zusammenarbeit und Marketing, das messbare Ergebnisse liefert.",
    ],
  },
  {
    title: "Privat",
    paragraphs: [
      "Wenn ich nicht gerade an neuen Projekten arbeite, findet man mich meistens auf dem Golfplatz, beim Fußball, auf dem Padel-Court oder bei Veranstaltungen rund um Vereine und Netzwerke. Als Duisburger und langjähriger MSV-Fan bin ich meiner Region bis heute eng verbunden.",
      "Denn egal ob im Sport, im Business oder im Alltag: Die besten Dinge entstehen durch starke Verbindungen. Und genau solche Verbindungen schaffen Wachstum.",
    ],
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]} variant="dark" />
          <h1 className="text-3xl font-extrabold text-white lg:text-5xl">Über mich</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Verbindungen schaffen, die Wachstum ermöglichen – bodenständig, direkt und mit Blick auf das, was wirklich zählt.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/JaschaKestler.JPG"
                alt="Jascha Kestler – Gründer von Kestler Connect"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {storySections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-anthracite">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
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
    </>
  );
}
