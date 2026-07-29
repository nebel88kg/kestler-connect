import type { ReferenzCase } from "../types";

export const referenzen: ReferenzCase[] = [
  {
    slug: "golfclub-raffelberg",
    title: "Golfclub Raffelberg",
    client: "Golfclub Raffelberg",
    industry: "Golf",
    excerpt:
      "Professioneller Social-Media-Auftritt und erfolgreiche Mitgliedergewinnung durch Meta Ads und Google Ads.",
    situation:
      "Der Golfclub Raffelberg wollte seinen digitalen Auftritt professionalisieren und gezielt neue Interessenten für den Golfsport gewinnen – von Schnuppergolf über Platzreifekurse bis hin zu Firmenfeiern.",
    measures: [
      "Übernahme und strategische Betreuung des Social Media Auftritts",
      "Regelmäßige Reels und kreative Inhalte mit klarer Content-Strategie",
      "Meta Ads und Google Ads für Platzreife- und Schnuppergolf-Kurse",
      "Google Ads für Firmenfeiern und Event-Anfragen",
      "Laufende Optimierung mit nachvollziehbaren, zielorientierten Maßnahmen",
    ],
    results: [
      "Deutlich professionellerer und modernerer Social-Media-Auftritt",
      "Wesentlich mehr Reichweite auf den Kanälen",
      "Platzreife- und Schnuppergolf-Kurse innerhalb kurzer Zeit gut gebucht",
      "Viele neue Interessenten für den Golfsport gewonnen",
      "Hervorragende Resonanz und zahlreiche Anfragen für Firmenfeiern",
    ],
  },
  {
    slug: "start-up-school",
    title: "Start-Up School",
    client: "Start-Up School",
    industry: "Bildung & Startups",
    excerpt:
      "Social Media Content Planning und Performance Marketing mit klarer Strategie und messbarem Fortschritt.",
    situation:
      "Die Start-Up School suchte einen zuverlässigen Partner für Social Media Content Planning und Performance Marketing – jemanden, der nicht nur Aufgaben abarbeitet, sondern aktiv mitdenkt und die Kanäle strategisch weiterentwickelt.",
    measures: [
      "Social Media Content Planning und laufende Betreuung",
      "Performance Marketing mit klarer Strategie",
      "Eigene Ideen und kontinuierliche Optimierung von Inhalten und Kampagnen",
      "Direkte, unkomplizierte Zusammenarbeit mit festem Ansprechpartner",
    ],
    results: [
      "Professionelle und strategische Weiterentwicklung der Inhalte und Kampagnen",
      "Zuverlässige, erreichbare und ergebnisorientierte Zusammenarbeit",
      "Unkomplizierte und professionelle Projektabwicklung",
      "Langfristige Partnerschaft mit klarer Weiterempfehlung",
    ],
  },
  {
    slug: "buddys-duisburg",
    title: "Buddy's Duisburg",
    client: "Buddy's Duisburg",
    industry: "Gastronomie & Events",
    excerpt:
      "Moderner Social-Media-Auftritt und starke Event-Reichweite durch Meta Ads und Google Ads.",
    situation:
      "Buddy's Duisburg wollte den Social-Media-Auftritt professionalisieren und mehr Reichweite sowie Anfragen für Events und Networking-Veranstaltungen generieren.",
    measures: [
      "Professionelle Social-Media-Betreuung mit modernen Inhalten",
      "Meta Ads für Events und Networking-Veranstaltungen",
      "Google Ads zur Steigerung von Reichweite und Anfragen",
      "Unkomplizierte und zuverlässige Zusammenarbeit",
    ],
    results: [
      "Deutlich professionellerer und modernerer Social-Media-Auftritt",
      "Inhalte kommen bei den Gästen sehr gut an",
      "Sehr gute Reichweite für Events und Networking-Veranstaltungen",
      "Viele neue Anfragen durch Meta und Google Ads",
    ],
  },
];

export function getReferenzBySlug(slug: string): ReferenzCase | undefined {
  return referenzen.find((r) => r.slug === slug);
}
