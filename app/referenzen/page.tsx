import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { referenzen } from "@/content/referenzen";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Referenzen",
  description: "Erfolgreiche Projekte und Case Studies von Kestler Connect.",
  path: "/referenzen",
});

export default function ReferenzenPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Referenzen" }]} />
        <h1 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">Referenzen</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Echte Ergebnisse für echte Unternehmen – unsere Case Studies.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {referenzen.map((ref, i) => (
            <ScrollReveal key={ref.slug} delay={i * 0.1}>
              <Link href={`/referenzen/${ref.slug}`}>
                <Card>
                  <span className="mb-3 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                    {ref.industry}
                  </span>
                  <h2 className="text-xl font-bold text-anthracite">{ref.title}</h2>
                  <p className="mt-2 text-gray-600">{ref.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">Case Study lesen →</p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
