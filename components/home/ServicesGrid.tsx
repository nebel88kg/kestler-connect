import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Social Media Agentur",
    description:
      "Social Media Agentur Duisburg & Moers – Content und Betreuung, die Ihre Zielgruppe erreicht.",
    items: ["Content Produktion", "Reel Erstellung", "Community Management"],
    href: "/leistungen/social-media",
    color: "bg-navy/5 border border-navy/10",
  },
  {
    title: "Performance Marketing",
    description:
      "Performance Marketing Duisburg & Moers – Google Ads und Meta Ads mit messbarem ROI.",
    items: ["Google Ads", "Meta Ads", "Leadgenerierung", "Mitarbeitergewinnung"],
    href: "/leistungen/performance-marketing",
    color: "bg-accent-light border border-accent/20",
  },
  {
    title: "Website-Erstellung",
    description:
      "Website erstellen lassen in Duisburg – Homepages und Landingpages für regionale und lokale Unternehmen.",
    items: ["Webdesign Duisburg", "Landingpages", "Pakete ab 1.500 €"],
    href: "/leistungen/webseiten#preise",
    color: "bg-accent-light/60 border border-accent/15",
  },
  {
    title: "SEO & KI-Sichtbarkeit",
    description: "Local SEO für Duisburg, Moers und Umgebung – gefunden bei Google, Maps und KI.",
    items: ["SEO", "Local SEO", "ChatGPT Optimierung", "KI-Suchmaschinenoptimierung"],
    href: "/leistungen/seo",
    color: "bg-navy/5 border border-navy/10",
  },
  {
    title: "Workshops",
    description: "Kompakte Formate für lokale Unternehmen und Startups – ohne großes Marketing-Budget.",
    items: ["Startup Marketing (5–6 Std.)", "Marketing & Sponsoring Workshop"],
    href: "/leistungen/workshops",
    color: "bg-accent-light/60 border border-accent/15",
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Leistungen
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-5xl">
              Unsere Leistungen
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
              Alles aus einer Hand – von der Strategie bis zur Umsetzung.{" "}
              <Link href="/leistungen/google-ads" className="font-semibold text-accent hover:underline">
                Google Ads in Duisburg und Moers
              </Link>
              {", "}
              <Link href="/leistungen/meta-ads" className="font-semibold text-accent hover:underline">
                Meta Ads Agentur Duisburg
              </Link>
              {" und "}
              <Link href="/leistungen/social-media" className="font-semibold text-accent hover:underline">
                Social Media Agentur Duisburg
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href}>
                <Card className="h-full border-navy/10">
                  <div className={`mb-4 inline-block rounded-xl ${service.color} px-4 py-2 text-sm font-semibold text-navy`}>
                    {service.title}
                  </div>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="mb-4 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-navy">
                        <span className="text-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-accent">Mehr erfahren →</p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-accent/90"
            >
              Kostenloses Strategiegespräch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
