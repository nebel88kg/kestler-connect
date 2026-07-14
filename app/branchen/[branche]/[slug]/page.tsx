import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLandingPageByPath, getStubPageByPath } from "@/lib/content";
import { getNavItemByHref, mainNav } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";
import { StubPageTemplate } from "@/components/landing/StubPageTemplate";

function getAllSlugs(): { branche: string; slug: string }[] {
  const result: { branche: string; slug: string }[] = [];
  const branchen = mainNav.find((item) => item.title === "Branchen");
  for (const section of branchen?.children || []) {
    const branche = section.href.split("/").pop()!;
    for (const child of section.children || []) {
      const slug = child.href.split("/").pop()!;
      result.push({ branche, slug });
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
  params: Promise<{ branche: string; slug: string }>;
}): Promise<Metadata> {
  const { branche, slug } = await params;
  const path = `/branchen/${branche}/${slug}`;
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

export default async function BrancheSlugPage({
  params,
}: {
  params: Promise<{ branche: string; slug: string }>;
}) {
  const { branche, slug } = await params;
  const path = `/branchen/${branche}/${slug}`;

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
