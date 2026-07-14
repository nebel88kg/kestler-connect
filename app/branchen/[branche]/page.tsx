import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, createBreadcrumbsFromPath } from "@/lib/seo";
import { mainNav } from "@/lib/navigation";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const branchen = ["handwerk", "vereine", "immobilien", "golfclubs"];

export function generateStaticParams() {
  return branchen.map((branche) => ({ branche }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branche: string }>;
}): Promise<Metadata> {
  const { branche } = await params;
  const section = mainNav
    .find((item) => item.title === "Branchen")
    ?.children?.find((child) => child.href === `/branchen/${branche}`);

  if (!section) return {};

  return createMetadata({
    title: section.title,
    description: `Marketing für ${section.title} – Kestler Connect.`,
    path: `/branchen/${branche}`,
  });
}

export default async function BranchePage({
  params,
}: {
  params: Promise<{ branche: string }>;
}) {
  const { branche } = await params;
  const path = `/branchen/${branche}`;
  const section = mainNav
    .find((item) => item.title === "Branchen")
    ?.children?.find((child) => child.href === path);

  if (!section) notFound();

  return (
    <div className="pt-32">
      <div className="container-custom section-padding">
        <Breadcrumbs items={createBreadcrumbsFromPath(path)} />
        <h1 className="text-4xl font-extrabold text-anthracite lg:text-5xl">
          Marketing für {section.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Branchenspezifische Lösungen für {section.title}.
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
