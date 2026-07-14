import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { mainNav } from "@/lib/navigation";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createBreadcrumbsFromPath } from "@/lib/seo";

const categories = ["google-ads", "meta-ads", "social-media", "webseiten", "seo"];

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const section = mainNav
    .find((item) => item.title === "Leistungen")
    ?.children?.find((child) => child.href === `/leistungen/${category}`);

  if (!section) return {};

  return createMetadata({
    title: section.title,
    description: `Professionelle ${section.title}-Leistungen von Kestler Connect.`,
    path: `/leistungen/${category}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const path = `/leistungen/${category}`;
  const section = mainNav
    .find((item) => item.title === "Leistungen")
    ?.children?.find((child) => child.href === path);

  if (!section) notFound();

  return (
    <div className="pt-32">
      <div className="container-custom section-padding">
        <Breadcrumbs items={createBreadcrumbsFromPath(path)} />
        <h1 className="text-4xl font-extrabold text-anthracite lg:text-5xl">{section.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Professionelle {section.title}-Lösungen für Handwerk, Vereine und lokale Unternehmen.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {section.children?.map((child) => (
            <Link key={child.href} href={child.href}>
              <Card>
                <h2 className="text-lg font-bold text-anthracite">{child.title}</h2>
                <p className="mt-2 text-sm text-accent">Mehr erfahren →</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
