import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, createBreadcrumbsFromPath } from "@/lib/seo";
import { leistungenHubContent, leistungenNav } from "@/lib/navigation";
import { getLandingPageByPath } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

const categories = [
  ...new Set([
    ...Object.keys(leistungenHubContent),
    ...(leistungenNav.children?.map((item) => item.href.split("/").pop()!).filter(Boolean) || []),
  ]),
];

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const path = `/leistungen/${category}`;
  const landingPage = getLandingPageByPath(path);

  if (landingPage) {
    return createMetadata({
      title: landingPage.meta.title,
      description: landingPage.meta.description,
      path,
      keywords: landingPage.meta.keywords,
    });
  }

  const hub = leistungenHubContent[category];
  if (!hub) return {};

  return createMetadata({
    title: hub.title,
    description: hub.description,
    path: hub.href,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const path = `/leistungen/${category}`;
  const landingPage = getLandingPageByPath(path);

  if (landingPage) {
    return <LandingPageTemplate page={landingPage} />;
  }

  const hub = leistungenHubContent[category];
  const navSection = leistungenNav.children?.find((child) => child.href === path);

  if (!hub || !navSection) notFound();

  const related = navSection.children || [];

  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={createBreadcrumbsFromPath(hub.href)} variant="dark" />
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl">
            {hub.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            {hub.description}
          </p>
          <div className="mt-8">
            <Button href="/kontakt" size="lg">
              Kostenloses Strategiegespräch
            </Button>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-anthracite sm:text-2xl">Was Sie erwartet</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {hub.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-navy/[0.03] px-4 py-4 text-navy"
              >
                <span className="mt-0.5 text-accent">✓</span>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {related.length > 0 && (
          <ScrollReveal className="mt-14">
            <h2 className="text-xl font-bold text-anthracite sm:text-2xl">Vertiefen</h2>
            <p className="mt-2 text-gray-600">Ausgewählte Schwerpunkte zu {hub.title}.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((child) => (
                <Link key={child.href} href={child.href}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <h3 className="text-lg font-bold text-anthracite">{child.title}</h3>
                    {child.description && (
                      <p className="mt-2 text-sm text-gray-600">{child.description}</p>
                    )}
                    <p className="mt-3 text-sm font-semibold text-accent">Mehr erfahren →</p>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-14">
          <div className="rounded-2xl bg-navy px-6 py-10 text-center sm:px-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Passt {hub.title} zu Ihrem Ziel?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              In einem kurzen Gespräch klären wir Potenzial, Budget und nächste Schritte – unverbindlich.
            </p>
            <Button href="/kontakt" size="lg" className="mt-6">
              Jetzt Termin sichern
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
