import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { mainNav } from "@/lib/navigation";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Leistungen",
  description: "Performance Marketing, Social Media, Webseiten und SEO – alle Leistungen von Kestler Connect.",
  path: "/leistungen",
});

const leistungenSection = mainNav.find((item) => item.title === "Leistungen");

export default function LeistungenPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]} />
        <h1 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">Unsere Leistungen</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Von Google Ads bis KI-SEO – alles für Ihr digitales Wachstum.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leistungenSection?.children?.map((section, i) => (
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
