import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Performance Marketing",
    description: "Gezielte Werbekampagnen mit messbarem ROI für Ihr Unternehmen.",
    items: ["Google Ads", "Meta Ads", "Leadgenerierung", "Mitarbeitergewinnung"],
    href: "/leistungen/google-ads",
    color: "bg-accent-light border border-accent/20",
  },
  {
    title: "Social Media",
    description: "Professioneller Auftritt und Content, der Ihre Zielgruppe erreicht.",
    items: ["Content Produktion", "Reel Erstellung", "Community Management"],
    href: "/leistungen/social-media",
    color: "bg-navy/5 border border-navy/10",
  },
  {
    title: "Webseiten",
    description: "Moderne Webseiten und Landingpages, die Besucher zu Kunden machen.",
    items: ["Webdesign", "Landingpages", "Pakete ab 1.500 €"],
    href: "/leistungen/webseiten#preise",
    color: "bg-accent-light/60 border border-accent/15",
  },
  {
    title: "SEO & KI-Sichtbarkeit",
    description: "Gefunden werden – bei Google, Maps und KI-Suchmaschinen.",
    items: ["SEO", "Local SEO", "ChatGPT Optimierung", "KI-Suchmaschinenoptimierung"],
    href: "/leistungen/seo",
    color: "bg-navy/5 border border-navy/10",
  },
  {
    title: "Workshops",
    description: "Kompakte Formate für Startups und Vereine – ohne großes Marketing-Budget.",
    items: ["Startup Marketing (5–6 Std.)", "Marketing & Sponsoring für Vereine"],
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
              Alles aus einer Hand – von der Strategie bis zur Umsetzung.
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
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-navy">
                        <span className="text-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
