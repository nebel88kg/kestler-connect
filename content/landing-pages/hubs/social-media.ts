import type { LandingPage } from "@/content/types";

export const socialMediaHub: LandingPage = {
  slug: "social-media",
  path: "/leistungen/social-media",
  category: "social-media",
  meta: {
    title: "Social Media Agentur für Handwerk, Vereine & KMU",
    // Dauerversion. Während der Oktober-Aktion gilt conversion.promo.metaDescription.
    description:
      "Social Media Agentur für Handwerk, Vereine, Gastronomie & KMU: Strategie, Content & Betreuung für Instagram, TikTok & Facebook. Kostenloses Strategiegespräch.",
    keywords: [
      "social media agentur",
      "social media betreuung",
      "social media strategie unternehmen",
      "social media content erstellen lassen",
      "social media für handwerker",
      "social media für vereine",
      "social media gastronomie",
      "social media agentur duisburg",
      "social media agentur krefeld",
      "social media agentur oberhausen",
      "social media agentur moers",
      "social media marketing duisburg",
      "instagram agentur duisburg",
      "tiktok agentur",
    ],
  },
  hero: {
    headline: "Social Media Agentur für Handwerk, Vereine & KMU",
    subheadline:
      "Strategie, Content und Betreuung für Instagram, TikTok & Facebook – damit Ihr Betrieb regelmäßig sichtbar ist und aus Reichweite Anfragen werden. Mit festem Ansprechpartner aus Duisburg, für Ruhrgebiet & Niederrhein.",
  },
  conversion: {
    // Formular im Hero (Ads-Landingpage). Foto + Raffelberg-Zitat stehen weiter unten im Proof-Block.
    heroLayout: "form",
    openSections: true,
    heroPoints: [
      "Kostenloses Strategiegespräch – unverbindlich",
      "Strategie, Redaktionsplan und Content aus einer Hand",
      "Fester Ansprechpartner statt anonymer Agenturprozesse",
    ],
    ctaLabel: "Kostenloses Strategiegespräch anfragen",
    formTitle: "Jetzt kostenlos anfragen",
    formTopicPlaceholder: "z. B. Handwerk, Verein, Gastronomie – oder Ihr Anliegen",
    offer: {
      title: "Kostenloses Strategiegespräch + Leitfaden: Das bekommen Sie",
      intro:
        "Ich schaue mir Ihre Kanäle und Ziele an und sage Ihnen ehrlich, was funktioniert und was nicht – ohne Verkaufsdruck.",
      items: [
        "Einschätzung: Was passt zu Ihrem Betrieb und Ihrer Zielgruppe?",
        "Konkrete nächste Schritte",
        "Ehrliche Budgetorientierung",
        "Auf Ihren Betrieb abgestimmter Social-Media-Leitfaden – nach dem Gespräch",
      ],
      closing: "Absolut unverbindlich – danach entscheiden Sie frei, ob und wie es weitergeht.",
    },
    proof: {
      title: "Echte Referenz, echte Stimmen",
      referenceFacts: [
        "Strategische Social-Media-Betreuung mit Reels und Content-Plan",
        "Moderner, professioneller Social-Media-Auftritt",
        "Meta Ads und Google Ads für Kurse und Schnupperangebote",
      ],
      referenceQuote:
        "Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter Auftritt deutlich professionalisiert. Durch regelmäßige Reels, kreative Inhalte und eine klare Strategie wirken unsere Kanäle heute deutlich moderner und erreichen wesentlich mehr Menschen.",
      reviewAuthors: ["K.M.P."],
    },
    scope: {
      title: "Das übernehmen wir für Sie",
      intro: "Sie kümmern sich um Ihren Betrieb – wir sorgen dafür, dass Ihre Kanäle regelmäßig und professionell laufen.",
      items: [
        "Social-Media-Strategie: Positionierung, Zielgruppe, Tonalität, Content-Säulen",
        "Redaktionsplan mit klaren Freigaben",
        "Content erstellen lassen: Beiträge, Reels, Stories und TikTok-Formate",
        "Laufende Social-Media-Betreuung: Veröffentlichen und Community",
        "Auswertung: Was gut läuft, wird ausgebaut",
        "Auf Wunsch abgestimmt mit Meta Ads, Google Ads und Ihrer Website",
        "Shootings vor Ort oder Abstimmung digital – wie es zu Ihnen passt",
      ],
    },
    showProblemsInline: true,

    /*
     * ── OKTOBER-AKTION (befristet bis 31.10.2026) ──────────────────────────────────────────
     * Alles in diesem Block gilt nur bis `endsAt`. Danach rendert die Seite automatisch die
     * Dauer-Inhalte oben (ctaLabel, formTitle, heroPoints, offer, process, faq, meta.description).
     * Endgültig entfernen: diesen kompletten `promo`-Block löschen – sonst ist nichts zu ändern.
     * Gleichzeitig Anzeigen/Assets mit „kostenlose Analyse … Sie zahlen nichts“ pausieren.
     */
    promo: {
      endsAt: "2026-10-31T23:59:59+01:00",
      text: "Nur im Oktober: kostenlose Analyse Ihres Social-Media-Auftritts – Sie zahlen nichts. Gültig bis 31.10.2026.",
      metaDescription:
        "Social Media Agentur für Handwerk, Vereine, Gastronomie & KMU: Strategie, Content & Betreuung. Im Oktober: kostenlose Analyse Ihres Auftritts – unverbindlich.",
      ctaLabel: "Kostenlose Analyse anfragen",
      formTitle: "Jetzt kostenlose Analyse sichern",
      heroPoints: [
        "Kostenlose Analyse + Strategiegespräch – unverbindlich",
        "Strategie, Redaktionsplan und Content aus einer Hand",
        "Fester Ansprechpartner statt anonymer Agenturprozesse",
      ],
      offer: {
        title: "Kostenlose Analyse Ihres Social-Media-Auftritts: Das bekommen Sie",
        intro:
          "Ich schaue mir Ihre Kanäle und Ziele an und sage Ihnen ehrlich, was funktioniert und was nicht – ohne Verkaufsdruck.",
        items: [
          "Analyse Ihrer aktuellen Social-Media-Kanäle",
          "Einschätzung: Was passt zu Ihrem Betrieb und Ihrer Zielgruppe?",
          "Kostenloses Strategiegespräch mit konkreten nächsten Schritten",
          "Ehrliche Budgetorientierung",
          "Auf Ihren Betrieb abgestimmter Social-Media-Leitfaden – nach dem Gespräch",
        ],
        closing: "Sie zahlen nichts und gehen keine Verpflichtung ein – danach entscheiden Sie frei.",
      },
      process: [
        {
          step: 1,
          title: "Kostenlose Analyse",
          description: "Ich schaue mir Ihre Kanäle, Ihre Zielgruppe und Ihre Ziele an.",
        },
        {
          step: 2,
          title: "Strategiegespräch",
          description: "Wir besprechen Ergebnisse, Kanäle, Formate und nächste Schritte. Unverbindlich.",
        },
        {
          step: 3,
          title: "Umsetzung & Betreuung",
          description: "Redaktionsplan, Content-Produktion und Veröffentlichung. Was funktioniert, wird ausgebaut.",
        },
      ],
      faq: [
    {
      question: "Was macht eine Social Media Agentur?",
      answer:
        "Sie übernimmt Strategie, Redaktionsplan, Content-Produktion und Betreuung Ihrer Kanäle. So sind Sie regelmäßig und professionell sichtbar, ohne selbst Zeit dafür aufzubringen.",
    },
    {
      question: "Wie läuft das kostenlose Strategiegespräch ab?",
      answer:
        "Wir sprechen über Ihre Ausgangslage und Ziele. Sie bekommen eine ehrliche Einschätzung, konkrete nächste Schritte und eine Budgetorientierung. Den auf Ihren Betrieb abgestimmten Social-Media-Leitfaden erhalten Sie nach dem Gespräch. Alles ist unverbindlich.",
    },
    {
      question: "Für welche Branchen arbeiten Sie?",
      answer:
        "Für Handwerksbetriebe, Vereine, Gastronomie und KMU aus Dienstleistung und Handel – vor allem in Duisburg, im Ruhrgebiet und am Niederrhein.",
    },
    {
      question: "Welche Kanäle betreuen Sie?",
      answer:
        "Schwerpunkt sind Instagram und TikTok, je nach Zielgruppe auch Facebook und LinkedIn. Wir empfehlen nur Kanäle, die zu Ihrem Angebot passen.",
    },
    {
      question: "Was kostet die Social-Media-Betreuung?",
      answer:
        "Budget und Betreuung richten sich nach Ziel, Branche und Umfang. Im kostenlosen Gespräch bekommen Sie eine ehrliche Budgetorientierung.",
    },
    {
      question: "Arbeiten Sie vor Ort oder digital?",
      answer:
        "Beides: Shootings und Termine vor Ort in Duisburg, im Ruhrgebiet und am Niederrhein, Planung und Veröffentlichung digital.",
    },
  ],
};
