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
}

export interface StubPage {
  title: string;
  path: string;
  description: string;
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
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}
