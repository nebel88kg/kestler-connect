import type { LandingPage } from "@/content/types";

export const workshopsHub: LandingPage = {
  slug: "workshops",
  path: "/leistungen/workshops",
  category: "workshops",
  meta: {
    title: "Marketing Workshops Duisburg | Startup & KMU | Kestler Connect",
    description:
      "Kompakte Marketing-Workshops in Duisburg: für Startups sowie kleine und mittlere Unternehmen – klare Strategie ohne großes Monatsbudget.",
    keywords: [
      "marketing workshop",
      "startup marketing workshop",
      "marketing schulung duisburg",
      "social media workshop",
      "marketing workshop kmu",
    ],
  },
  hero: {
    headline: "Marketing Workshops Duisburg – Klarheit in wenigen Stunden",
    subheadline:
      "Kompakte Formate für Startups sowie kleine und mittlere Unternehmen – Strategie und nächste Schritte ohne großes Monatsbudget.",
  },
  intro: {
    title: "Warum ein Workshop statt sofortiger Betreuung?",
    paragraphs: [
      "Nicht jedes Unternehmen startet mit Retainer. Ein Workshop schafft Orientierung: Kanäle, Prioritäten und ein realistischer Fahrplan.",
      "Danach entscheiden Sie bewusst: selbst umsetzen, punktuell unterstützen lassen oder in laufende [Social Media](/leistungen/social-media)- bzw. [Performance](/leistungen/performance-marketing)-Betreuung wechseln.",
    ],
  },
  audience: {
    title: "Für wen eignen sich die Workshops?",
    paragraphs: [
      "Für Gründer sowie KMU, die Marketing verstehen und priorisieren wollen – bevor Budget in Zufallsmaßnahmen fließt.",
    ],
    points: [
      "Startups und junge Marken",
      "Kleine und mittlere Unternehmen ohne Marketing-Team",
      "Lokale KMU vor dem ersten Ads-Budget",
      "Teams, die intern mehr Klarheit brauchen",
      "Betriebe mit begrenztem Monatsbudget",
    ],
  },
  problem: {
    title: "Typische Ausgangslage",
    points: [
      "Zu viele Kanäle, keine Priorität",
      "Unklar, ob Social, Ads oder Website zuerst",
      "Budgetangst ohne Plan",
      "Maßnahmen ohne klare Gegenleistung oder Ziel",
      "Umsetzung bleibt im Alltag liegen",
    ],
  },
  solution: {
    title: "Kompakte Workshops mit klarem Output",
    content:
      "In wenigen Stunden erarbeiten wir Positionierung, Kanal-Fokus und nächste Schritte – praxisnah und auf Ihre Situation zugeschnitten.",
  },
  benefits: [
    {
      title: "Schnelle Klarheit",
      description: "Prioritäten statt endloser Theorie.",
      icon: "target",
    },
    {
      title: "Praxisnah",
      description: "Direkt auf Ihr Angebot und Ihre Region bezogen.",
      icon: "check",
    },
    {
      title: "Budget-fit",
      description: "Ideal, wenn noch kein großes Monatsbudget da ist.",
      icon: "star",
    },
    {
      title: "Fahrplan",
      description: "Konkrete nächste Schritte für die kommenden Wochen.",
      icon: "rocket",
    },
    {
      title: "Optional Vertiefung",
      description: "Danach Betreuung oder Ads gezielt anschließen.",
      icon: "users",
    },
    {
      title: "Sofort anwendbar",
      description: "Handwerkszeug statt Theorie – direkt umsetzbar.",
      icon: "social",
    },
  ],
  results: {
    title: "Was nehmen Sie mit?",
    paragraphs: [
      "Ein gemeinsames Verständnis von Positionierung, Kanälen und sinnvollen nächsten Maßnahmen – statt Bauchgefühl.",
      "Referenzen wie [Golfclub Raffelberg](/referenzen/golfclub-raffelberg), [SecPro Bildungszentrum](/referenzen/secpro-bildungszentrum) und [DnM](/referenzen/dnm) zeigen, wie wichtig eine klare Linie vor dem Skalieren ist.",
    ],
    points: [
      "Klare Kanal-Prioritäten",
      "Realistischer Umsetzungsplan",
      "Besseres Gefühl für Budget und Timing",
      "Weniger Streuverlust",
      "Fundierte Entscheidung für oder gegen Retainer",
    ],
  },
  process: [
    { step: 1, title: "Vorbereitung", description: "Kurzfragebogen und Ziele abstimmen." },
    { step: 2, title: "Workshop", description: "5–6 Stunden intensives Arbeiten." },
    { step: 3, title: "Prioritäten", description: "Kanäle und Maßnahmen festlegen." },
    { step: 4, title: "Plan", description: "Nächste Schritte dokumentieren." },
    { step: 5, title: "Optional", description: "Umsetzung oder Betreuung anschließen." },
  ],
  references: [
    {
      title: "Golfclub Raffelberg",
      slug: "golfclub-raffelberg",
      excerpt: "Klare Linie in Social Media und Ads – nachvollziehbar umgesetzt.",
    },
    {
      title: "SecPro Bildungszentrum",
      slug: "secpro-bildungszentrum",
      excerpt: "Social Media und Meta Ads mit klarer Betreuungslogik.",
    },
    {
      title: "DnM",
      slug: "dnm",
      excerpt: "SEO und Social mit Fokus auf Sichtbarkeit.",
    },
  ],
  faq: [
    {
      question: "Für wen ist der Startup-Workshop?",
      answer:
        "Für Gründer und junge Unternehmen, die Marketing priorisieren wollen, bevor sie laufend Budget investieren.",
    },
    {
      question: "Wie lange dauert ein Workshop?",
      answer:
        "Typischerweise 5–6 Stunden – kompakt und ergebnisorientiert.",
    },
    {
      question: "Ist danach eine Betreuung Pflicht?",
      answer:
        "Nein. Sie können selbst umsetzen oder optional Betreuung, Ads oder Website beauftragen.",
    },
    {
      question: "Eignet sich ein Workshop auch für etablierte KMU?",
      answer:
        "Ja. Viele kleine und mittlere Unternehmen nutzen den Workshop, um Kanäle und Budget zu priorisieren – bevor sie in laufende Betreuung starten.",
    },
    {
      question: "Online oder vor Ort?",
      answer:
        "Beides möglich – wir stimmen Format und Ort im Vorgespräch ab.",
    },
    {
      question: "Was sollte ich vorbereiten?",
      answer:
        "Kurze Infos zu Angebot, Zielgruppe und bisherigen Maßnahmen reichen. Den Rest erarbeiten wir gemeinsam.",
    },
  ],
};
