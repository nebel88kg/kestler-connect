import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { referenzen, getReferenzBySlug } from "@/content/referenzen";
import { createMetadata, createBreadcrumbsFromPath } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function generateStaticParams() {
  return referenzen.map((ref) => ({ slug: ref.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ref = getReferenzBySlug(slug);
  if (!ref) return {};

  return createMetadata({
    title: ref.title,
    description: ref.excerpt,
    path: `/referenzen/${slug}`,
  });
}

export default async function ReferenzDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ref = getReferenzBySlug(slug);
  if (!ref) notFound();

  return (
    <div className="pt-32">
      <section className="bg-anthracite pb-16 pt-8">
        <div className="container-custom">
          <Breadcrumbs items={createBreadcrumbsFromPath(`/referenzen/${slug}`)} variant="dark" />
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
            {ref.industry}
          </span>
          <h1 className="text-3xl font-extrabold text-white lg:text-5xl">{ref.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{ref.excerpt}</p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-bold text-anthracite">Ausgangssituation</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{ref.situation}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-bold text-anthracite">Maßnahmen</h2>
                <ul className="mt-4 space-y-3">
                  {ref.measures.map((measure) => (
                    <li key={measure} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-0.5 text-accent">✓</span>
                      {measure}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-bold text-anthracite">Ergebnis</h2>
                <ul className="mt-4 space-y-3">
                  {ref.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-light/30 p-4 text-anthracite font-medium">
                      <span className="text-accent">★</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal>
              <div className="sticky top-28 rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="text-lg font-bold text-anthracite">Ähnliche Ergebnisse für Ihr Unternehmen?</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Lassen Sie uns in einem kostenlosen Gespräch herausfinden, was für Sie möglich ist.
                </p>
                <Button href="/kontakt" className="mt-6 w-full">
                  Kostenloses Strategiegespräch
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
