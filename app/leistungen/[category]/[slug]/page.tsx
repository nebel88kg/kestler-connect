import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLandingPageByPath, getStubPageByPath } from "@/lib/content";
import { getNavItemByHref } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";
import { StubPageTemplate } from "@/components/landing/StubPageTemplate";
import { mainNav } from "@/lib/navigation";

const categories = ["google-ads", "meta-ads", "social-media", "webseiten", "seo"];

function getAllSlugs(): { category: string; slug: string }[] {
  const result: { category: string; slug: string }[] = [];
  const leistungen = mainNav.find((item) => item.title === "Leistungen");
  for (const section of leistungen?.children || []) {
    const category = section.href.split("/").pop()!;
    if (!categories.includes(category)) continue;
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

  const stubPage = getStubPageByPath(path);
  if (stubPage) {
    return <StubPageTemplate page={stubPage} />;
  }

  notFound();
}
