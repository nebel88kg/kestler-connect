export interface LandingPageMeta {
  title: string;
  description: string;
  keywords: string[];
  /**
   * true: `title` wird unverändert als <title>/OG-Title genutzt (kein Anhängen von " | Kestler Connect").
   * Für Seiten, deren Title sonst über ~60 Zeichen läge.
   */
  absoluteTitle?: boolean;
}

export interface LandingPageHero {
  headline: string;
  subheadline: string;
}

export interface LandingPageProblem {
  title: string;
  points: string[];
}

export interface LandingPageSolution {
  title: string;
  content: string;
}

export interface LandingPageBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface LandingPageReference {
  title: string;
  slug: string;
  excerpt: string;
}

export interface LandingPageProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface LandingPageFAQ {
  question: string;
  answer: string;
}

export interface LandingPageTextSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface LandingPagePricingRange {
  label: string;
  value: string;
  note?: string;
}

export interface LandingPagePricing {
  title: string;
  paragraphs: string[];
  ranges?: LandingPagePricingRange[];
}

export interface LandingPageRelatedHub {
  title: string;
  href: string;
  description?: string;
}

/**
 * Konfiguration der schlanken Conversion-Landingpage (Google-Ads-Traffic).
 * Ist `conversion` gesetzt, rendert `ConversionLandingTemplate` statt des Standard-Templates.
 */
export interface LandingPageConversion {
  /**
   * Aufbau des Heros:
   * - "form" (Standard): Mini-Formular rechts im Hero.
   * - "proof": Jascha-Foto + Kundenzitat rechts im Hero; das (einzige) Formular steht im Gesprächs-Block unten,
   *   die Seite ist kürzer (kein separater Vorteils-/Proof-/Budget-Block).
   */
  heroLayout?: "form" | "proof";
  /**
   * Kurze, sichtbare Textabschnitte (intro, audience, serviceArea) statt Aufklapper;
   * FAQ als offene Frage-Antwort-Liste statt Accordion; kein Ergebnisse-Block.
   */
  openSections?: boolean;
  /** 2–3 kurze Nutzenpunkte im Hero (nur ab sm sichtbar, damit das Formular mobil oben bleibt) */
  heroPoints: string[];
  /** Text der CTA-Buttons und des Absende-Buttons */
  ctaLabel: string;
  /** Überschrift der Formular-Karte */
  formTitle: string;
  /** Platzhalter im Feld Branche / Anliegen */
  formTopicPlaceholder: string;
  offer: {
    title: string;
    intro: string;
    items: string[];
    closing: string;
  };
  proof: {
    title: string;
    /** Fakten aus content/referenzen (Golfclub Raffelberg) – nur belegte Inhalte */
    referenceFacts: string[];
    /** Wörtlicher Auszug aus der freigegebenen Raffelberg-Kundenstimme (content/testimonials.ts) */
    referenceQuote: string;
    /** Autoren aus lib/googleBusiness.ts (reviewPreviews), die angezeigt werden dürfen */
    reviewAuthors: string[];
  };
  /** Optionaler, sichtbarer Leistungsumfang */
  scope?: { title: string; intro?: string; items: string[] };
  /** Typische Probleme sichtbar statt im Aufklapper */
  showProblemsInline?: boolean;
}

export interface LandingPage {
  slug: string;
  path: string;
  category: string;
  meta: LandingPageMeta;
  hero: LandingPageHero;
  problem: LandingPageProblem;
  solution: LandingPageSolution;
  benefits: LandingPageBenefit[];
  references: LandingPageReference[];
  process: LandingPageProcessStep[];
  faq: LandingPageFAQ[];
  /** Money-page sections – optional so niche child pages keep working */
  intro?: LandingPageTextSection;
  audience?: LandingPageTextSection;
  results?: LandingPageTextSection;
  pricing?: LandingPagePricing;
  showWebsitePricing?: boolean;
  /** Compact Einzugsgebiet / Vor Ort & digital block */
  serviceArea?: LandingPageTextSection;
  /** Sibling hub links with descriptive anchors */
  relatedHubs?: LandingPageRelatedHub[];
  /** Schlanke Conversion-Variante (Mini-Formular im Hero, Angebot, Proof) */
  conversion?: LandingPageConversion;
}

export interface StubPage {
  title: string;
  path: string;
  description: string;
}

export interface Testimonial {
  /** Zitat – wörtlich wie vom Kunden freigegeben */
  quote: string;
  /** Optionale Kurzfassung für Karten; sonst wird das volle Zitat gezeigt */
  excerpt?: string;
  /** Firma, z. B. "DnM – Dämmstoffe nach Maß" */
  company: string;
  /** Optional – nachtragen, sobald Name/Position freigegeben sind */
  name?: string;
  role?: string;
  /** Optionales Kundenlogo (statisches Asset unter /public) */
  logo?: { src: string; alt: string };
  /** Slug der zugehörigen Referenz unter /referenzen */
  referenzSlug?: string;
}

export interface ReferenzCase {
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  situation: string;
  measures: string[];
  results: string[];
  image?: string;
  /** Freigegebene Kundenstimme zur Referenz */
  testimonial?: Testimonial;
  /** Related leistungen for internal linking */
  relatedServices?: { title: string; href: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
}
