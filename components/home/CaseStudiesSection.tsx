import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { referenzen } from "@/content/referenzen";

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-anthracite lg:text-5xl">
              Referenzprojekte
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Echte Ergebnisse für echte Unternehmen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {referenzen.map((ref, i) => (
            <ScrollReveal key={ref.slug} delay={i * 0.1}>
              <Link href={`/referenzen/${ref.slug}`}>
                <Card>
                  <span className="mb-3 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                    {ref.industry}
                  </span>
                  <h3 className="text-xl font-bold text-anthracite">{ref.title}</h3>
                  <p className="mt-2 text-gray-600">{ref.excerpt}</p>
                  <ul className="mt-4 space-y-1">
                    {ref.results.slice(0, 2).map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 text-accent">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-accent">
                    Case Study lesen →
                  </p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
