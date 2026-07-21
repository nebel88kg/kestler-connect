import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLandingPageByPath } from "@/lib/content";
import { getNavItemByHref, leistungenNav } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

function getAllSlugs(): { category: string; slug: string }[] {
  const result: { category: string; slug: string }[] = [];
  for (const section of leistungenNav.children || []) {
    const category = section.href.split("/").pop()!;
    for (const child of section.children || []) {
      const slug = child.href.split("/").pop()!;
      result.push({ category, slug });
    }
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
    return <LandingPageTemplate page={landingPage} />;
  }

  notFound();
}
