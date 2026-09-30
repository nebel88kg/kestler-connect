import type { LandingPage } from "../../types";

export const localSeo: LandingPage = {
  slug: "local-seo",
  path: "/leistungen/seo/local-seo",
  category: "seo",
  meta: {
    title: "Local SEO – Lokal gefunden werden",
    description:
      "Local SEO für lokale Unternehmen und Handwerk: Google Unternehmensprofil, Google Maps und lokale Suchanfragen gezielt verbessern.",
    keywords: ["local seo", "lokale seo", "google maps optimierung"],
  },
  hero: {
    headline: "Local SEO – Werden Sie in Ihrer Region gefunden",
    subheadline:
      "Wenn jemand in Ihrer Stadt sucht, sollen Sie sichtbar sein – Local SEO für Google und Maps.",
  },
  problem: {
    title: "Ohne Local SEO verlieren Sie Kunden",
    points: [
      "Konkurrenten erscheinen bei lokalen Suchen vor Ihnen",
      "Google Business Profil unvollständig oder veraltet",
      "Zu wenige oder schwache Google-Bewertungen",
      "Website nicht für lokale Suchanfragen optimiert",
      "Keine oder schwache Sichtbarkeit auf Google Maps",
    ],
  },
  solution: {
    title: "Local SEO mit System",
    content:
      "Local SEO macht Ihr Unternehmen bei Suchen mit Ortsbezug sichtbarer. Wir optimieren Google Business Profil, Website und lokale Signale – für mehr Sichtbarkeit und Anrufe aus Ihrer Region.",
  },
  benefits: [
    { title: "Google Maps", description: "Bessere Chancen in der lokalen Kartenansicht.", icon: "map" },
    { title: "Business Profil", description: "Vollständig gepflegtes Google Business Profil.", icon: "building" },
    { title: "Bewertungsmanagement", description: "Strategien für mehr und bessere Google-Bewertungen.", icon: "star" },
    { title: "Lokale Keywords", description: "Webseite optimiert für „Leistung + Stadt“-Suchanfragen.", icon: "search" },
    { title: "NAP-Konsistenz", description: "Einheitliche Unternehmensdaten im gesamten Web.", icon: "check" },
    { title: "Langfristig", description: "Organische Sichtbarkeit als Ergänzung zu bezahlter Werbung.", icon: "trending" },
  ],
  references: [
    { title: "DnM", slug: "dnm", excerpt: "SEO und SEA – laut Kunde heute bei Google auf Seite 1." },
    { title: "Golfclub Raffelberg", slug: "golfclub-raffelberg", excerpt: "Professioneller digitaler Auftritt als Basis für Anfragen." },
  ],
  process: [
    { step: 1, title: "Local Audit", description: "Analyse Ihrer aktuellen lokalen Sichtbarkeit." },
    { step: 2, title: "Optimierung", description: "Google Business Profil, Webseite und Verzeichnisse optimieren." },
    { step: 3, title: "Content", description: "Lokale Inhalte und Landingpages erstellen." },
    { step: 4, title: "Bewertungen", description: "System für mehr Google-Bewertungen aufbauen." },
    { step: 5, title: "Monitoring", description: "Rankings und Sichtbarkeit kontinuierlich überwachen." },
  ],
  faq: [
    {
      question: "Wie lange dauert Local SEO?",
      answer:
        "Erste Signale zeigen sich oft nach einigen Wochen. Wie schnell und wie weit sich Ihre Sichtbarkeit verbessert, hängt von Wettbewerb und Ausgangslage ab. Garantien für Platzierungen geben wir nicht.",
    },
    { question: "Brauche ich eine Webseite für Local SEO?", answer: "Ja, eine gepflegte Webseite ist eine wichtige Grundlage für nachhaltiges Local SEO." },
    {
      question: "Was ist der Unterschied zu Google Ads?",
      answer:
        "Local SEO zielt auf organische Sichtbarkeit und braucht Zeit. Google Ads schaltet bezahlte Anzeigen und kann schneller Sichtbarkeit bringen – gegen laufende Werbekosten.",
    },
    { question: "Optimiert ihr auch Google Business Profile?", answer: "Ja, das Google Business Profil ist ein zentraler Bestandteil unserer Local-SEO-Strategie." },
    { question: "Für welche Branchen eignet sich Local SEO?", answer: "Für Unternehmen mit lokalem Kundenkreis, zum Beispiel Handwerk, Gastronomie, Praxen, Kanzleien und Golfclubs." },
  ],
};
