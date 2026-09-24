import type { Metadata } from "next";
import { siteConfig } from "./navigation";
import { stripInlineMarkdown } from "./inlineMarkdown";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name || title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`;
  const ogImage = `${siteConfig.url}/images/logo.png`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: ogImage,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

/**
 * FAQPage-JSON-LD aus Frage/Antwort-Paaren. Inline-Markdown ([Text](/pfad), **fett**)
 * wird entfernt, damit der JSON-LD-Text dem sichtbaren Text entspricht.
 */
export function createFaqSchema(items: FaqSchemaItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: stripInlineMarkdown(item.question),
      acceptedAnswer: { "@type": "Answer", text: stripInlineMarkdown(item.answer) },
    })),
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function createBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Startseite", href: "/" }];

  let currentPath = "";
  const labelMap: Record<string, string> = {
    leistungen: "Leistungen",
    referenzen: "Referenzen",
    "ueber-uns": "Über uns",
    blog: "Blog",
    kontakt: "Kontakt",
    "performance-marketing": "Performance Marketing",
    "google-ads": "Google Ads",
    "meta-ads": "Meta Ads",
    "social-media": "Social Media Agentur",
    webseiten: "Webseiten",
    seo: "SEO",
    leadgewinnung: "Leadgewinnung",
    mitarbeitergewinnung: "Mitarbeitergewinnung",
    "marketing-agentur-duisburg": "Marketing-Agentur Duisburg",
  };

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label =
      labelMap[segment] ||
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  }

  return breadcrumbs;
}
