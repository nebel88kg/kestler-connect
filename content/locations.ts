export interface Location {
  slug: string;
  name: string;
  /** Kurze, sachliche Einordnung der Lage (keine Zahlen, keine Behauptungen zu Kunden). */
  context: string;
}

/** Orte mit eigener, schlanker Seite unter /einzugsgebiet/[slug]. Duisburg hat /marketing-agentur-duisburg. */
export const locations: Location[] = [
  {
    slug: "moers",
    name: "Moers",
    context: "Moers liegt im Kreis Wesel am linken Niederrhein und grenzt an Duisburg.",
  },
  {
    slug: "krefeld",
    name: "Krefeld",
    context: "Krefeld liegt am Niederrhein in direkter Nachbarschaft zu Duisburg und Düsseldorf.",
  },
  {
    slug: "oberhausen",
    name: "Oberhausen",
    context: "Oberhausen liegt im westlichen Ruhrgebiet und grenzt an Duisburg.",
  },
  {
    slug: "essen",
    name: "Essen",
    context: "Essen liegt im Herzen des Ruhrgebiets, östlich von Duisburg.",
  },
  {
    slug: "muelheim-an-der-ruhr",
    name: "Mülheim an der Ruhr",
    context: "Mülheim an der Ruhr liegt zwischen Duisburg und Essen.",
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    context: "Düsseldorf ist die Landeshauptstadt von Nordrhein-Westfalen und liegt südlich von Duisburg.",
  },
];

/** Weitere Orte im Einzugsgebiet – nur als Aufzählung, ohne eigene Seite (kein Doorway-Risiko). */
export const otherPlaces = ["Neukirchen-Vluyn", "Kamp-Lintfort", "Dinslaken", "Wesel"];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function locationServices(name: string): { question: string; answer: string }[] {
  return [
    {
      question: `Social Media Agentur für ${name}`,
      answer: `Redaktionsplan, Content, Reels und Community-Management für Unternehmen in ${name}, damit Ihr Auftritt regelmäßig und professionell wirkt. [Mehr zu Social Media](/leistungen/social-media)`,
    },
    {
      question: `Google Ads für ${name}`,
      answer: `Suchanzeigen, die erscheinen, wenn Menschen in ${name} und Umgebung nach Ihrer Leistung suchen – mit Tracking von Anrufen und Formularen. [Mehr zu Google Ads](/leistungen/google-ads)`,
    },
    {
      question: `Meta Ads (Instagram & Facebook) für ${name}`,
      answer: `Anzeigen auf Instagram und Facebook, regional ausgespielt, für Reichweite und Anfragen. [Mehr zu Meta Ads](/leistungen/meta-ads)`,
    },
    {
      question: `SEO & Local SEO für ${name}`,
      answer: `Besser gefunden werden bei Suchen wie „Leistung + ${name}“, in Google Maps und in KI-Antworten. Garantien für Platzierungen geben wir nicht. [Mehr zu SEO](/leistungen/seo)`,
    },
    {
      question: `Webseiten für Unternehmen in ${name}`,
      answer: `Webdesign und Landingpages, die aus Besuchern Anfragen machen – Pakete ab 1.500 € (netto). [Mehr zu Webseiten](/leistungen/webseiten)`,
    },
  ];
}

export function locationFaq(name: string): { question: string; answer: string }[] {
  return [
    {
      question: `Gibt es eine Online-Marketing-Agentur für Unternehmen in ${name}?`,
      answer: `Ja. Kestler Connect sitzt in Duisburg (Marienstr. 17) und betreut Unternehmen in ${name} und Umgebung – vor Ort und digital, je nach Bedarf.`,
    },
    {
      question: `Welche Leistungen kann ich für ${name} anfragen?`,
      answer: `Social Media, Google Ads, Meta Ads, SEO und Webseiten. Welche Kombination sinnvoll ist, klären wir im kostenlosen Erstgespräch.`,
    },
    {
      question: `Wie starte ich die Zusammenarbeit?`,
      answer: `Über das Kontaktformular, per Telefon oder WhatsApp. Wir melden uns zeitnah und besprechen Ziele und sinnvolle nächste Schritte – kostenlos und unverbindlich.`,
    },
  ];
}
