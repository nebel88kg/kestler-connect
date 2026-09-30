import type { LandingPage, LandingPageTextSection } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { BenefitIcon } from "@/components/ui/BenefitIcon";
import { ContactForm } from "@/components/ui/ContactForm";
import { MoreDetails } from "@/components/ui/MoreDetails";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebsitePricing } from "@/components/pricing/WebsitePricing";
import { createBreadcrumbsFromPath, createFaqSchema } from "@/lib/seo";
import { renderInline } from "@/lib/inlineMarkdown";
import { leistungenNav, siteConfig } from "@/lib/navigation";
import Link from "next/link";

interface LandingPageTemplateProps {
  page: LandingPage;
}

/** Erster Absatz sichtbar (direkte Antwort), der Rest klappt auf. */
function TextSection({
  section,
  showAreaLink = false,
}: {
  section: LandingPageTextSection;
  showAreaLink?: boolean;
}) {
  const [first, ...rest] = section.paragraphs;
  const points = section.points ?? [];
  const hasMore = rest.length > 0 || points.length > 0;

  return (
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{section.title}</h2>
      {first && (
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">{renderInline(first)}</p>
      )}
      {hasMore && (
        <MoreDetails summary="Mehr erfahren" className="mt-6 max-w-3xl">
          {rest.length > 0 && (
            <div className="space-y-3">
              {rest.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                  {renderInline(paragraph)}
                </p>
              ))}
            </div>
          )}
          {points.length > 0 && (
            <ul className={`space-y-2 ${rest.length > 0 ? "mt-4" : ""}`}>
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent-dark" aria-hidden="true">
                    ✓
                  </span>
                  <span>{renderInline(point)}</span>
                </li>
              ))}
            </ul>
          )}
        </MoreDetails>
      )}
      {showAreaLink && (
        <p className="mt-4">
          <Link
            href="/einzugsgebiet"
            className="text-sm font-semibold text-accent-dark underline underline-offset-2 hover:text-navy"
          >
            Alle Orte im Einzugsgebiet →
          </Link>
        </p>
      )}
    </ScrollReveal>
  );
}

function MidCTA({ label = "Kostenloses Erstgespräch" }: { label?: string }) {
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
  const tel = siteConfig.phone.replace(/\s/g, "");

  const navSection = leistungenNav.children?.find((child) => child.href === page.path);
  const related = navSection?.children || [];
  const relatedHubs = page.relatedHubs || [];

  const faqSchema = createFaqSchema(page.faq);
  const hasAudienceBlock = Boolean(page.audience || page.serviceArea);

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
            <p className="mt-4 text-base leading-relaxed text-gray-200 sm:mt-6 sm:text-lg lg:text-xl">
              {page.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" size="lg">
                Kostenloses Erstgespräch
              </Button>
              {page.showWebsitePricing && (
                <Button
                  href="#preise"
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-navy"
                >
                  Preise ansehen
                </Button>
              )}
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Kostenlos &amp; unverbindlich ·{" "}
              <a href={`tel:${tel}`} className="font-semibold text-white underline underline-offset-2">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {page.intro && (
        <section className="section-padding">
          <div className="container-custom">
            <TextSection section={page.intro} />
            <MidCTA />
          </div>
        </section>
      )}

      {hasAudienceBlock && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom space-y-12">
            {page.audience && <TextSection section={page.audience} />}
            {page.serviceArea && <TextSection section={page.serviceArea} showAreaLink />}
          </div>
        </section>
      )}

      <section className={`section-padding ${hasAudienceBlock ? "" : "bg-gray-50"}`}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{page.problem.title}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.problem.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="mt-0.5 text-red-600" aria-hidden="true">
                    ✕
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <MidCTA />
          </ScrollReveal>
        </div>
      </section>

      {!isMoneyPage && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{page.solution.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                {renderInline(page.solution.content)}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className={`section-padding ${isMoneyPage ? "bg-gray-50" : ""}`}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">Ihre Vorteile</h2>
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
          <MidCTA />
        </div>
      </section>

      {page.results && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{page.results.title}</h2>
              {page.results.paragraphs.slice(0, 1).map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                  {renderInline(paragraph)}
                </p>
              ))}
              {(page.results.paragraphs.length > 1 ||
                (page.results.points && page.results.points.length > 0)) && (
                <div className="mt-8 max-w-3xl">
                  <Accordion
                    defaultOpenIndex={null}
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
          <MidCTA />
        </div>
      </section>

      {page.pricing && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{page.pricing.title}</h2>
              <div className="mt-6 max-w-3xl space-y-4">
                {page.pricing.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-gray-700">
                    {renderInline(paragraph)}
                  </p>
                ))}
              </div>
              {page.pricing.ranges && page.pricing.ranges.length > 0 && (
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {page.pricing.ranges.map((range) => (
                    <Card key={range.label} hover={false}>
                      <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">{range.label}</p>
                      <p className="mt-2 text-xl font-bold text-anthracite">{range.value}</p>
                      {range.note && <p className="mt-2 text-sm text-gray-600">{range.note}</p>}
                    </Card>
                  ))}
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {page.showWebsitePricing && <WebsitePricing />}

      {(relatedHubs.length > 0 || related.length > 0) && (
        <section className="section-padding">
          <div className="container-custom max-w-4xl space-y-4">
            {related.length > 0 && (
              <MoreDetails summary="Vertiefen: Schwerpunkte zu dieser Leistung">
                <div className="grid gap-3 md:grid-cols-2">
                  {related.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-xl border border-gray-200 p-4 transition-colors hover:border-accent-dark"
                    >
                      <span className="block font-bold text-anthracite">{child.title}</span>
                      {child.description && (
                        <span className="mt-1 block text-sm text-gray-600">{child.description}</span>
                      )}
                      <span className="mt-2 block text-sm font-semibold text-accent-dark">Mehr erfahren →</span>
                    </Link>
                  ))}
                </div>
              </MoreDetails>
            )}
            {relatedHubs.length > 0 && (
              <MoreDetails summary="Passende Ergänzungen">
                <div className="grid gap-3 md:grid-cols-2">
                  {relatedHubs.map((hub) => (
                    <Link
                      key={hub.href}
                      href={hub.href}
                      className="rounded-xl border border-gray-200 p-4 transition-colors hover:border-accent-dark"
                    >
                      <span className="block font-bold text-anthracite">{hub.title}</span>
                      {hub.description && (
                        <span className="mt-1 block text-sm text-gray-600">{hub.description}</span>
                      )}
                      <span className="mt-2 block text-sm font-semibold text-accent-dark">Mehr erfahren →</span>
                    </Link>
                  ))}
                </div>
              </MoreDetails>
            )}
          </div>
        </section>
      )}

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">Referenzen</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.references.map((ref, i) => (
              <ScrollReveal key={ref.slug} delay={i * 0.1}>
                <Link href={`/referenzen/${ref.slug}`}>
                  <Card className="h-full">
                    <h3 className="text-lg font-bold text-anthracite">{ref.title}</h3>
                    <p className="mt-2 text-gray-600">{ref.excerpt}</p>
                    <p className="mt-4 text-sm font-semibold text-accent-dark">Mehr erfahren →</p>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">Häufige Fragen</h2>
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
                Kostenloses Erstgespräch anfragen
              </h2>
              <p className="mt-4 text-gray-200">
                Schreiben Sie uns kurz, worum es geht – wir melden uns zeitnah. Kostenlos und unverbindlich.
              </p>
              <p className="mt-4 text-gray-200">
                Lieber direkt?{" "}
                <a href={`tel:${tel}`} className="font-semibold text-white underline underline-offset-2">
                  {siteConfig.phone}
                </a>{" "}
                oder{" "}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline underline-offset-2"
                >
                  WhatsApp
                </a>
                .
              </p>
              <div className="mt-6">
                <ReviewBadge tone="dark" />
              </div>
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
