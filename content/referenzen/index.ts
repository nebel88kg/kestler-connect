import type { ReferenzCase } from "../types";

export const referenzen: ReferenzCase[] = [
  {
    slug: "golfclub-raffelberg",
    title: "Golfclub Raffelberg",
    client: "Golfclub Raffelberg",
    industry: "Golf",
    excerpt: "Digitale Mitgliedergewinnung und professionelle Online-Präsenz für einen der führenden Golfclubs der Region.",
    situation:
      "Der Golfclub Raffelberg wollte seine digitale Sichtbarkeit stärken und gezielt neue Mitglieder gewinnen. Die bisherige Online-Präsenz war veraltet und es fehlten messbare Marketing-Kanäle für die Mitgliedergewinnung.",
    measures: [
      "Entwicklung einer modernen, mobiloptimierten Webseite",
      "Google Ads Kampagnen für Schnuppergolf und Platzreifekurse",
      "Meta Ads mit gezieltem Targeting für Golfer in der Region",
      "Professionelle Content-Produktion für Social Media",
      "SEO-Optimierung für lokale Golf-Suchanfragen",
      "Google Business Profil Optimierung",
    ],
    results: [
      "Deutlich mehr Schnupperanfragen über digitale Kanäle",
      "Professioneller Auftritt auf allen digitalen Touchpoints",
      "Messbare Kampagnenergebnisse mit transparentem Reporting",
      "Stärkere Social Media Präsenz mit regelmäßigem Content",
      "Verbesserte lokale Sichtbarkeit bei Google",
    ],
  },
  {
    slug: "handwerksbetrieb-shk",
    title: "SHK-Betrieb in NRW",
    client: "SHK-Betrieb (Name auf Anfrage)",
    industry: "Handwerk",
    excerpt: "120% mehr qualifizierte Anfragen durch Google Ads und Local SEO.",
    situation:
      "Ein etablierter SHK-Betrieb in NRW hatte zu wenig planbare Aufträge und war bei lokalen Google-Suchanfragen kaum sichtbar. Die Abhängigkeit von Mundpropaganda reichte nicht mehr aus.",
    measures: [
      "Google Ads Kampagnen für Heizung, Sanitär und Klima",
      "Local SEO Optimierung für 15+ lokale Keywords",
      "Conversion-optimierte Landingpages",
      "Google Business Profil mit Bewertungsstrategie",
      "Monatliches Performance-Reporting",
    ],
    results: [
      "120% mehr Anfragen in den ersten 3 Monaten",
      "Position 1–3 bei wichtigsten lokalen Keywords",
      "Kosten pro Anfrage unter dem Branchendurchschnitt",
      "Planbare Auftragslage für die nächsten Monate",
    ],
  },
  {
    slug: "immobilienmakler-regional",
    title: "Immobilienmakler Regional",
    client: "Immobilienmakler (Name auf Anfrage)",
    industry: "Immobilien",
    excerpt: "45% mehr Besichtigungstermine durch Meta Lead-Kampagnen.",
    situation:
      "Ein regionaler Immobilienmakler wollte mehr qualifizierte Verkäufer-Leads generieren und seine Social Media Präsenz professionalisieren.",
    measures: [
      "Meta Ads Lead-Kampagnen für Verkäufer-Akquise",
      "Professionelle Immobilien-Fotografie und Videos",
      "Landingpage für kostenlose Immobilienbewertung",
      "Retargeting für Website-Besucher",
      "Social Media Content-Strategie",
    ],
    results: [
      "45% mehr Besichtigungstermine",
      "Kosten pro Lead unter 30 €",
      "Professioneller Instagram-Auftritt mit regelmäßigem Content",
      "Steigende Markenbekanntheit in der Region",
    ],
  },
  {
    slug: "verein-regional",
    title: "Regionaler Sportverein",
    client: "Sportverein (Name auf Anfrage)",
    industry: "Vereine",
    excerpt: "Mitgliedergewinnung und Sponsorenakquise über Social Media.",
    situation:
      "Ein regionaler Sportverein kämpfte mit sinkenden Mitgliederzahlen und hatte Schwierigkeiten, neue Sponsoren zu gewinnen.",
    measures: [
      "Social Media Strategie für Instagram und Facebook",
      "Content-Produktion mit Vereins-Events und Training",
      "Meta Ads für Mitgliederwerbung",
      "Sponsoren-Präsentation als digitales Portfolio",
      "Newsletter-Integration für Mitgliederkommunikation",
    ],
    results: [
      "25% mehr Mitgliederanfragen über Social Media",
      "2 neue Sponsoren durch digitale Präsentation",
      "Aktive Community mit regelmäßigem Engagement",
      "Professioneller Vereinsauftritt online",
    ],
  },
];

export function getReferenzBySlug(slug: string): ReferenzCase | undefined {
  return referenzen.find((r) => r.slug === slug);
}
