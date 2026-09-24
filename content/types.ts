export interface LandingPageMeta {
  title: string;
  description: string;
  keywords: string[];
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
