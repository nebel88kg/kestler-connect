import type { Metadata } from "next";
import { siteConfig } from "./navigation";

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
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

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
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
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
    "google-ads": "Google Ads",
    "meta-ads": "Meta Ads",
    "social-media": "Social Media",
    webseiten: "Webseiten",
    seo: "SEO",
    leadgewinnung: "Leadgewinnung",
    mitarbeitergewinnung: "Mitarbeitergewinnung",
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
