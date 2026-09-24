import type { ReferenzCase } from "../types";
import { dnmTestimonial } from "../testimonials";

export const referenzen: ReferenzCase[] = [
  {
    slug: "dnm",
    title: "DnM – Dämmstoffe nach Maß",
    client: "DnM – Dämmstoffe nach Maß",
    industry: "Dämmstoffe",
    excerpt:
      "Social-Media-Videos, Leitfaden für LinkedIn und Instagram, SEO und SEA: DnM ist heute bei Google auf Seite 1 zu finden und hat so bereits neue Kunden gewonnen.",
    situation:
      "DnM (Dämmstoffe nach Maß) wollte online besser gefunden werden und einen professionelleren Social-Media-Auftritt. Ziel war mehr Sichtbarkeit bei Google – über SEO und SEA – ergänzt durch Social-Media-Videos und eine klare Linie für LinkedIn und Instagram.",
    measures: [
      "Produktion von Social-Media-Videos",
      "Klarer Leitfaden für LinkedIn und Instagram",
      "SEO-Unterstützung: Struktur und Inhalte der digitalen Präsenz für bessere Auffindbarkeit bei Google",
      "Unterstützung bei SEA mit Google Ads",
    ],
    results: [
      "Bei Google auf Seite 1 sichtbar",
      "Dadurch bereits neue Kunden gewonnen",
      "Klare Linie für LinkedIn und Instagram – mit eigenen Social-Media-Videos",
    ],
    testimonial: dnmTestimonial,
    relatedServices: [
      { title: "SEO / Local SEO", href: "/leistungen/seo" },
      { title: "Google Ads in Duisburg und Moers", href: "/leistungen/google-ads" },
      { title: "Social Media Agentur Duisburg", href: "/leistungen/social-media" },
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
    relatedServices: [
      { title: "Social Media Agentur Duisburg", href: "/leistungen/social-media" },
      { title: "Meta Ads Agentur Duisburg", href: "/leistungen/meta-ads" },
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
    relatedServices: [
      { title: "Social Media Agentur Duisburg", href: "/leistungen/social-media" },
      { title: "Google Ads in Duisburg und Moers", href: "/leistungen/google-ads" },
      { title: "Meta Ads Agentur Duisburg", href: "/leistungen/meta-ads" },
    ],
  },
];

export function getReferenzBySlug(slug: string): ReferenzCase | undefined {
  return referenzen.find((r) => r.slug === slug);
}
