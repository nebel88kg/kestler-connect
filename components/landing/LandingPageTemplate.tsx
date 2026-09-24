import type { LandingPage, LandingPageTextSection } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { BenefitIcon } from "@/components/ui/BenefitIcon";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebsitePricing } from "@/components/pricing/WebsitePricing";
import { createBreadcrumbsFromPath, createFaqSchema } from "@/lib/seo";
import { renderInline } from "@/lib/inlineMarkdown";
import { leistungenNav } from "@/lib/navigation";
import Link from "next/link";

interface LandingPageTemplateProps {
  page: LandingPage;
}

function TextSection({
  section,
  tone = "default",
}: {
  section: LandingPageTextSection;
  tone?: "default" | "muted";
}) {
  return (
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{section.title}</h2>
      <div className="mt-6 max-w-3xl space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className={`text-lg leading-relaxed ${tone === "muted" ? "text-gray-600" : "text-gray-600"}`}
          >
            {renderInline(paragraph)}
          </p>
        ))}
      </div>
      {section.points && section.points.length > 0 && (
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {section.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-light/30 p-4 text-anthracite"
            >
              <span className="mt-0.5 text-accent">✓</span>
              <span>{renderInline(point)}</span>
            </li>
          ))}
        </ul>
      )}
    </ScrollReveal>
  );
}


function MidCTA({ label = "Kostenloses Strategiegespräch" }: { label?: string }) {
  return (
    <div className="mt-10 flex justify-center">
      <Button href="#kontakt" size="lg">
        {label}
      </Button>
    </div>
  );
}

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const breadcrumbs = createBreadcrumbsFromPath(page.path);
  const isMoneyPage = Boolean(page.intro || page.audience || page.results || page.pricing);

  const navSection = leistungenNav.children?.find((child) => child.href === page.path);
  const related = navSection?.children || [];
  const relatedHubs = page.relatedHubs || [];

  const faqSchema = createFaqSchema(page.faq);

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbs} variant="dark" />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
              {page.hero.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg lg:text-xl">
              {page.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" size="lg">
                Kostenloses Strategiegespräch
              </Button>
              {page.showWebsitePricing && (
                <Button href="#preise" variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-navy">
                  Preise ansehen
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {page.intro && (
        <section className="section-padding">
          <div className="container-custom">
            <TextSection section={page.intro} />
          </div>
        </section>
      )}

      {page.audience && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <TextSection section={page.audience} />
          </div>
        </section>
      )}

      {page.serviceArea && (
        <section className={`section-padding ${page.audience ? "" : "bg-gray-50"}`}>
          <div className="container-custom">
            <TextSection section={page.serviceArea} />
          </div>
        </section>
      )}

      <section className={`section-padding ${page.serviceArea ? "bg-gray-50" : page.audience ? "" : "bg-gray-50"}`}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
              {page.problem.title}
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.problem.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="mt-0.5 text-red-500">✕</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <MidCTA />
          </ScrollReveal>
        </div>
      </section>

      {!isMoneyPage && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
                {page.solution.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
                {renderInline(page.solution.content)}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Ihre Vorteile
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.05}>
                <Card>
                  <BenefitIcon icon={benefit.icon} />
                  <h3 className="mt-4 text-lg font-bold text-anthracite">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="#kontakt" size="lg">
              Kostenloses Strategiegespräch
            </Button>
          </div>
        </div>
      </section>

      {page.results && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
                {page.results.title}
              </h2>
              {page.results.paragraphs.slice(0, 1).map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
                >
                  {renderInline(paragraph)}
                </p>
              ))}
              {(page.results.paragraphs.length > 1 ||
                (page.results.points && page.results.points.length > 0)) && (
                <div className="mx-auto mt-8 max-w-3xl">
                  <Accordion
                    items={[
                      ...(page.results.paragraphs.length > 1
                        ? [
                            {
                              question: "Mehr zu typischen Ergebnissen",
                              answer: page.results.paragraphs.slice(1).join(" "),
                            },
                          ]
                        : []),
                      ...(page.results.points && page.results.points.length > 0
                        ? [
                            {
                              question: "Woran Sie Fortschritt erkennen",
                              answer: page.results.points.join(" · "),
                            },
                          ]
                        : []),
                    ]}
                  />
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className={`section-padding ${page.results ? "bg-gray-50" : ""}`}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              {isMoneyPage ? "Ablauf der Zusammenarbeit" : "Unser Ablauf"}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {page.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-navy">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-anthracite">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {page.pricing && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
                {page.pricing.title}
              </h2>
              <div className="mt-6 max-w-3xl space-y-4">
                {page.pricing.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-gray-600">
                    {renderInline(paragraph)}
                  </p>
                ))}
              </div>
              {page.pricing.ranges && page.pricing.ranges.length > 0 && (
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {page.pricing.ranges.map((range) => (
                    <Card key={range.label} hover={false}>
                      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                        {range.label}
                      </p>
                      <p className="mt-2 text-xl font-bold text-anthracite">{range.value}</p>
                      {range.note && (
                        <p className="mt-2 text-sm text-gray-600">{range.note}</p>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {page.showWebsitePricing && <WebsitePricing />}

      {relatedHubs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
                Weitere Leistungen
              </h2>
              <p className="mt-2 text-gray-600">
                Starkes Zusammenspiel – die passenden Kanäle aus einer Hand.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedHubs.map((hub, i) => (
                <ScrollReveal key={hub.href} delay={i * 0.05}>
                  <Link href={hub.href}>
                    <Card className="h-full">
                      <h3 className="text-lg font-bold text-anthracite">{hub.title}</h3>
                      {hub.description && (
                        <p className="mt-2 text-sm text-gray-600">{hub.description}</p>
                      )}
                      <p className="mt-3 text-sm font-semibold text-accent">Mehr erfahren →</p>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={`section-padding ${relatedHubs.length > 0 ? "" : "bg-gray-50"}`}>
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">Vertiefen</h2>
              <p className="mt-2 text-gray-600">
                Ausgewählte Schwerpunkte zu dieser Leistung.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((child, i) => (
                <ScrollReveal key={child.href} delay={i * 0.05}>
                  <Link href={child.href}>
                    <Card className="h-full">
                      <h3 className="text-lg font-bold text-anthracite">{child.title}</h3>
                      {child.description && (
                        <p className="mt-2 text-sm text-gray-600">{child.description}</p>
                      )}
                      <p className="mt-3 text-sm font-semibold text-accent">Mehr erfahren →</p>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Referenzen
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.references.map((ref, i) => (
              <ScrollReveal key={ref.slug} delay={i * 0.1}>
                <Link href={`/referenzen/${ref.slug}`}>
                  <Card>
                    <h3 className="text-lg font-bold text-anthracite">{ref.title}</h3>
                    <p className="mt-2 text-gray-600">{ref.excerpt}</p>
                    <p className="mt-4 text-sm font-semibold text-accent">Mehr erfahren →</p>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Häufige Fragen
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Accordion items={page.faq} />
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="text-2xl font-extrabold text-white lg:text-4xl">
                Sichern Sie sich jetzt Ihre kostenlose Potenzialanalyse.
              </h2>
              <p className="mt-4 text-gray-400">
                Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-white p-4 sm:p-8">
                <ContactForm source={page.slug} compact />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
