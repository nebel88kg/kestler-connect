"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Max",
    role: "Golfmanager",
    company: "Golfclub Raffelberg",
    excerpt:
      "Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter Auftritt deutlich professionalisiert. Besonders beeindruckt hat uns die Kombination aus Meta Ads und Google Ads – unsere Kurse waren innerhalb kurzer Zeit sehr gut gebucht.",
    quote:
      "Ich kann Kestler Connect uneingeschränkt weiterempfehlen. Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter Auftritt deutlich professionalisiert. Durch regelmäßige Reels, kreative Inhalte und eine klare Strategie wirken unsere Kanäle heute deutlich moderner und erreichen wesentlich mehr Menschen. Besonders beeindruckt hat uns die Kombination aus Meta Ads und Google Ads. Unsere Platzreife- und Schnuppergolf-Kurse waren innerhalb kurzer Zeit sehr gut gebucht und wir konnten viele neue Interessenten für den Golfsport gewinnen. Zusätzlich wurden Google Ads für unsere Firmenfeiern geschaltet, die ebenfalls für eine hervorragende Resonanz und zahlreiche Anfragen gesorgt haben. Was uns besonders gefällt, ist die zuverlässige Zusammenarbeit, die schnelle Umsetzung und dass jede Maßnahme nachvollziehbar und zielorientiert ist. Man merkt einfach, dass hier nicht nur Werbung gemacht wird, sondern dass ein echtes Konzept dahinter steckt. Vielen Dank für die großartige Zusammenarbeit. Wir freuen uns auf viele weitere gemeinsame Projekte!",
  },
  {
    name: "Wagma",
    role: "Geschäftsführerin",
    company: "Start-Up School",
    excerpt:
      "Jascha bringt nicht nur viel Fachwissen mit, sondern auch eigene Ideen und eine klare Strategie. Die Zusammenarbeit läuft unkompliziert, professionell und macht einfach Spaß.",
    quote:
      "Ich bin mit der Zusammenarbeit mit Jascha wirklich sehr zufrieden. Er kümmert sich um unser Social Media Content Planning und das Performance Marketing und bringt dabei nicht nur viel Fachwissen mit, sondern auch eigene Ideen und eine klare Strategie. Besonders gefällt mir, dass er zuverlässig arbeitet, immer erreichbar ist und sich aktiv Gedanken macht, wie wir unsere Inhalte und Kampagnen weiter verbessern können. Man merkt, dass ihm gute Ergebnisse wichtig sind und er nicht einfach nur Aufgaben abarbeitet. Die Zusammenarbeit läuft unkompliziert, professionell und macht einfach Spaß. Ich kann Jascha auf jeden Fall weiterempfehlen und freue mich auf alles, was wir noch gemeinsam umsetzen.",
  },
  {
    name: "Michael",
    role: "",
    company: "Buddy's Duisburg",
    excerpt:
      "Unser Social-Media-Auftritt ist deutlich professioneller geworden. Meta und Google Ads für Events haben uns sehr gute Reichweite und viele neue Anfragen gebracht.",
    quote:
      "Seit der Zusammenarbeit mit Kestler Connect hat sich unser Social Media Auftritt deutlich verbessert. Die Inhalte sind professioneller, moderner und kommen bei unseren Gästen super an. Zusätzlich wurden Meta und Google Ads für unsere Events und Networking-Veranstaltungen geschaltet, wodurch wir eine sehr gute Reichweite und viele neue Anfragen erzielen konnten. Die Zusammenarbeit ist unkompliziert, zuverlässig und macht einfach Spaß. Klare Empfehlung!",
  },
];

function TestimonialCard({
  name,
  role,
  company,
  excerpt,
  quote,
}: (typeof testimonials)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex h-full flex-col">
      <p className="flex-1 text-sm italic leading-relaxed text-gray-600 sm:text-base">
        &ldquo;{open ? quote : excerpt}&rdquo;
      </p>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-4 self-start text-sm font-semibold text-accent transition-colors hover:text-navy"
      >
        {open ? "Weniger anzeigen" : "Weiterlesen"}
      </button>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="font-semibold text-anthracite">{name}</p>
        <p className="text-sm text-gray-500">
          {role ? `${role}, ` : ""}
          {company}
        </p>
      </div>
    </Card>
  );
}

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
            <ScrollReveal key={t.company} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
