import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Performance Marketing",
    description: "Gezielte Werbekampagnen mit messbarem ROI für Ihr Unternehmen.",
    items: ["Google Ads", "Meta Ads", "Leadgenerierung", "Mitarbeitergewinnung"],
    href: "/leistungen/google-ads",
    color: "bg-blue-50",
  },
  {
    title: "Social Media",
    description: "Professioneller Auftritt und Content, der Ihre Zielgruppe erreicht.",
    items: ["Content Produktion", "Reel Erstellung", "Community Management"],
    href: "/leistungen/social-media",
    color: "bg-purple-50",
  },
  {
    title: "Webseiten",
    description: "Moderne Webseiten und Landingpages, die Besucher zu Kunden machen.",
    items: ["Webdesign", "Landingpages", "Conversion Optimierung"],
    href: "/leistungen/webseiten",
    color: "bg-green-50",
  },
  {
    title: "SEO & KI-Sichtbarkeit",
    description: "Gefunden werden – bei Google, Maps und KI-Suchmaschinen.",
    items: ["SEO", "Local SEO", "ChatGPT Optimierung", "KI-Suchmaschinenoptimierung"],
    href: "/leistungen/seo",
    color: "bg-amber-50",
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-anthracite lg:text-5xl">
              Unsere Leistungen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Alles aus einer Hand – von der Strategie bis zur Umsetzung.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href}>
                <Card className="h-full">
                  <div className={`mb-4 inline-block rounded-xl ${service.color} px-4 py-2 text-sm font-semibold text-anthracite`}>
                    {service.title}
                  </div>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-anthracite">
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
