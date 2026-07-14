import type { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    slug: "was-kostet-google-ads",
    title: "Was kostet Google Ads? Ein ehrlicher Überblick für 2026",
    excerpt:
      "Google Ads Kosten transparent erklärt: Was Sie wirklich investieren müssen und wann sich Werbung auf Google lohnt.",
    date: "2026-03-01",
    category: "Google Ads",
    readTime: "8 Min.",
    content: `
Google Ads ist eines der effektivsten Werkzeuge für lokale Unternehmen und Handwerksbetriebe. Doch die Frage "Was kostet Google Ads?" lässt sich nicht mit einer einfachen Zahl beantworten.

## Die zwei Kostenblöcke

Bei Google Ads unterscheiden Sie zwischen **Werbebudget** (das geht direkt an Google) und **Agenturkosten** (für Setup, Verwaltung und Optimierung).

### Werbebudget

Für lokale Handwerksbetriebe empfehlen wir ein monatliches Werbebudget von **500–1.500 €**. In größeren Städten mit mehr Wettbewerb kann es auch mehr sein.

### Agenturkosten

Professionelle Betreuung kostet typischerweise **300–800 €/Monat**, abhängig vom Umfang und der Anzahl der Kampagnen.

## Was beeinflusst die Kosten?

- **Branche und Wettbewerb**: SHK und Elektro sind günstiger als Anwalt oder Immobilien
- **Region**: München ist teurer als ländliche Gebiete
- **Keywords**: "Heizung Notdienst" kostet mehr als "Gartenpflege"
- **Qualität der Landingpage**: Bessere Seiten = niedrigere Klickkosten

## Wann lohnt sich Google Ads?

Google Ads lohnt sich, wenn:
- Kunden aktiv nach Ihrer Leistung suchen
- Der Auftragswert die Akquisitionskosten übersteigt
- Sie planbare Anfragen statt Zufall wollen

## Fazit

Rechnen Sie mit **800–2.000 € Gesamtkosten monatlich** für einen professionell betreuten Google Ads Account im Handwerk. Die Investition amortisiert sich oft schon mit 2–3 zusätzlichen Aufträgen.

**Möchten Sie wissen, was Google Ads für Ihr Unternehmen kostet?** Buchen Sie ein kostenloses Strategiegespräch mit Kestler Connect.
    `.trim(),
  },
  {
    slug: "mitarbeitergewinnung-im-handwerk",
    title: "Mitarbeitergewinnung im Handwerk: 5 Strategien die 2026 funktionieren",
    excerpt:
      "Der Fachkräftemangel trifft jeden Handwerksbetrieb. Diese 5 Strategien helfen Ihnen, qualifizierte Mitarbeiter zu finden.",
    date: "2026-02-15",
    category: "Handwerk",
    readTime: "10 Min.",
    content: `
Der Fachkräftemangel ist die größte Herausforderung für Handwerksbetriebe in Deutschland. Klassische Stellenanzeigen reichen nicht mehr. Hier sind 5 Strategien, die 2026 wirklich funktionieren.

## 1. Social Recruiting auf Meta

Fachkräfte unter 45 sind täglich auf Facebook und Instagram. Authentische Videos Ihres Teams und Ihrer Baustellen erreichen sie dort, wo klassische Jobbörsen versagen.

## 2. Google Ads für Stellenanzeigen

Aktive Jobsuchende googeln. Mit Google Ads erscheinen Ihre Stellenanzeigen genau dann, wenn jemand nach "SHK Monteur Jobs [Stadt]" sucht.

## 3. Employer Branding

Zeigen Sie, warum Ihr Betrieb ein guter Arbeitgeber ist: faire Bezahlung, moderne Ausstattung, Weiterbildung, Teamkultur.

## 4. Azubi-Marketing

Der Nachwuchs ist Gold wert. Spezielle Kampagnen für Azubis mit Einblicken in die Ausbildung und Karrieremöglichkeiten.

## 5. Mitarbeiterempfehlungsprogramme

Ihre besten Mitarbeiter kennen die besten neuen Mitarbeiter. Digitale Empfehlungsprogramme mit Prämien verstärken diesen Effekt.

## Fazit

Die Mitarbeitergewinnung im Handwerk erfordert heute aktives Marketing – nicht passives Warten auf Bewerbungen. Kestler Connect hilft Handwerksbetrieben dabei, die richtigen Fachkräfte zu finden.
    `.trim(),
  },
  {
    slug: "social-media-fuer-vereine",
    title: "Social Media für Vereine: So gewinnen Sie Mitglieder und Sponsoren",
    excerpt:
      "Vereine können Social Media nutzen, um Mitglieder zu gewinnen und Sponsoren zu akquirieren. So geht's richtig.",
    date: "2026-02-01",
    category: "Vereine",
    readTime: "7 Min.",
    content: `
Viele Vereine unterschätzen die Kraft von Social Media. Dabei ist es eines der kostengünstigsten Marketing-Instrumente für gemeinnützige Organisationen.

## Warum Social Media für Vereine wichtig ist

- Junge Zielgruppen sind auf Instagram und TikTok
- Sponsoren erwarten einen professionellen Online-Auftritt
- Events und Erfolge können kostenlos geteilt werden
- Community-Aufbau stärkt die Mitgliederbindung

## Die wichtigsten Plattformen

**Instagram**: Ideal für Sportvereine, visueller Content, Stories für Events
**Facebook**: Breitere Altersgruppe, Events, Gruppen für Mitglieder
**TikTok**: Junge Zielgruppe, authentische Behind-the-Scenes Videos

## Content-Ideen für Vereine

1. Trainingseinheiten und Wettkampf-Highlights
2. Vorstellungen von Mitgliedern und Trainern
3. Event-Ankündigungen und Rückblicke
4. Erfolgsgeschichten und Meisterschaften
5. Einblicke hinter die Kulissen

## Sponsoren über Social Media gewinnen

Ein professioneller Social Media Auftritt ist Ihr digitales Sponsoren-Portfolio. Zeigen Sie Reichweite, Engagement und Zielgruppe – das überzeugt lokale Unternehmen.

## Fazit

Mit 2–3 Posts pro Woche und gelegentlichen bezahlten Kampagnen können Vereine ihre Mitgliederzahlen und Sponsoring-Einnahmen deutlich steigern.
    `.trim(),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
