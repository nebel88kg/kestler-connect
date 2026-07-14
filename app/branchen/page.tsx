import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { mainNav } from "@/lib/navigation";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Branchen",
  description: "Marketing-Lösungen für Handwerk, Vereine, Immobilien und Golfclubs.",
  path: "/branchen",
});

const branchenSection = mainNav.find((item) => item.title === "Branchen");

export default function BranchenPage() {
  return (
    <div className="pt-32">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Branchen" }]} />
        <h1 className="text-4xl font-extrabold text-anthracite lg:text-5xl">Branchen</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Branchenspezifisches Marketing – weil jede Branche anders tickt.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {branchenSection?.children?.map((section, i) => (
            <ScrollReveal key={section.href} delay={i * 0.1}>
              <Card>
                <Link href={section.href}>
                  <h2 className="text-xl font-bold text-anthracite hover:text-accent transition-colors">
                    {section.title}
                  </h2>
                </Link>
                <ul className="mt-4 space-y-2">
                  {section.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-gray-600 hover:text-accent transition-colors"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
