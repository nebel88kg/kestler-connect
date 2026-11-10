import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLandingPagePaths, getLandingPageByPath } from "@/lib/content";
import { getNavItemByHref, leistungenNav } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";
import { ConversionLandingTemplate } from "@/components/landing/ConversionLandingTemplate";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

function addSlug(
  result: { category: string; slug: string }[],
  seen: Set<string>,
  path: string,
) {
  const parts = path.split("/").filter(Boolean);
  if (parts.length !== 3 || parts[0] !== "leistungen") return;
  const key = `${parts[1]}/${parts[2]}`;
  if (seen.has(key)) return;
  seen.add(key);
  result.push({ category: parts[1], slug: parts[2] });
}

function getAllSlugs(): { category: string; slug: string }[] {
  const result: { category: string; slug: string }[] = [];
  const seen = new Set<string>();
  for (const section of leistungenNav.children || []) {
    for (const child of section.children || []) {
      addSlug(result, seen, child.href);
    }
  }
  // Orts- und Nischenseiten, die nicht in der Hauptnavigation stehen.
  for (const path of getAllLandingPagePaths()) {
    addSlug(result, seen, path);
  }
  return result;
}

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const path = `/leistungen/${category}/${slug}`;
  const landingPage = getLandingPageByPath(path);

  if (landingPage) {
    return createMetadata({
      title: landingPage.meta.title,
      description: landingPage.meta.description,
      path,
      keywords: landingPage.meta.keywords,
    });
  }

  const navItem = getNavItemByHref(path);
  return createMetadata({
    title: navItem?.title || slug,
    description: `Professionelle ${navItem?.title || slug}-Lösungen von Kestler Connect.`,
    path,
  });
}

export default async function LeistungSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const path = `/leistungen/${category}/${slug}`;

  const landingPage = getLandingPageByPath(path);
  if (landingPage) {
    // Wie auf den Leistungs-Hubs: Conversion-Variante, wenn im Content gesetzt
    // (offene FAQ, keine Akkordeons).
    if (landingPage.conversion) {
      return <ConversionLandingTemplate page={landingPage} />;
    }
    return <LandingPageTemplate page={landingPage} />;
  }

  notFound();
}
