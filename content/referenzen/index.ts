import type { ReferenzCase } from "../types";

export const referenzen: ReferenzCase[] = [
  {
    slug: "dnm",
    title: "DnM – Dämmstoffe nach Maß",
    client: "DnM – Dämmstoffe nach Maß",
    industry: "Dämmstoffe",
    excerpt:
      "SEO auf Google Seite 1 und Social Media für DnM – Dämmstoffe nach Maß.",
    situation:
      "DnM (Dämmstoffe nach Maß) wollte online besser gefunden werden und einen professionelleren Social-Media-Auftritt. Ziel war organische Sichtbarkeit bei Google – ergänzt durch regelmäßige Social-Media-Impulse.",
    measures: [
      "SEO-Maßnahmen mit Fokus auf lokale und produktrelevante Suchanfragen",
      "Struktur und Inhalte der digitalen Präsenz für bessere Auffindbarkeit",
      "Begleitende Social-Media-Betreuung mit klarer Linie",
      "Abstimmung von organischer Suche und Social Content",
    ],
    results: [
      "Sichtbarkeit auf Google Seite 1 für relevante Suchanfragen",
      "Klarerer, professionellerer Auftritt in Social Media",
      "Bessere digitale Basis für Anfragen und Weiterempfehlungen",
    ],
  },
  {
    slug: "secpro-bildungszentrum",
    title: "SecPro Bildungszentrum",
    client: "SecPro Bildungszentrum",
    industry: "Bildung",
    excerpt:
      "Social-Media-Betreuung und Meta Ads für ein Bildungszentrum – sichtbarer, greifbarer, anfrageorientierter.",
    situation:
      "SecPro Bildungszentrum brauchte eine zuverlässige Social-Media-Betreuung und gezielte Meta Ads, um Angebote und Kurse in der Region sichtbar zu machen – ohne den Alltag intern zu überlasten.",
    measures: [
      "Laufende Social-Media-Betreuung mit Redaktionsplan",
      "Content und Creatives für Facebook und Instagram",
      "Meta Ads zur Ansprache passender Zielgruppen",
      "Abstimmung von organischem Auftritt und bezahlter Reichweite",
    ],
    results: [
      "Professioneller, regelmäßiger Social-Media-Auftritt",
      "Gezielte Reichweite über Meta Ads",
      "Klarere Wahrnehmung der Bildungsangebote online",
    ],
  },
  {
    slug: "golfclub-raffelberg",
    title: "Golfclub Raffelberg",
    client: "Golfclub Raffelberg",
    industry: "Golf",
    excerpt:
      "Professioneller Social-Media-Auftritt und erfolgreiche Mitgliedergewinnung durch Meta Ads und Google Ads.",
    situation:
      "Der Golfclub Raffelberg wollte den digitalen Auftritt professionalisieren und gezielt Interessenten für Schnuppergolf, Platzreife und Firmenfeiern gewinnen.",
    measures: [
      "Strategische Social-Media-Betreuung mit Reels und Content-Plan",
      "Meta Ads und Google Ads für Kurse und Schnupperangebote",
      "Google Ads für Firmenfeiern und Event-Anfragen",
      "Laufende Optimierung mit klaren Zielen",
    ],
    results: [
      "Moderner, professioneller Social-Media-Auftritt",
      "Kurse und Schnupperangebote gut gebucht",
      "Mehr Interessenten und Anfragen für Firmenfeiern",
      "Zuverlässige, nachvollziehbare Zusammenarbeit",
    ],
  },
];

export function getReferenzBySlug(slug: string): ReferenzCase | undefined {
  return referenzen.find((r) => r.slug === slug);
}
