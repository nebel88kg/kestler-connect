import Image from "next/image";
import Link from "next/link";
import type { LandingPage, LandingPageTextSection } from "@/content/types";
import { Accordion } from "@/components/ui/Accordion";
import { BenefitIcon } from "@/components/ui/BenefitIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LeadMiniForm } from "@/components/ui/LeadMiniForm";
import { MoreDetails } from "@/components/ui/MoreDetails";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFaqSchema } from "@/lib/seo";
import { renderInline } from "@/lib/inlineMarkdown";
import { siteConfig } from "@/lib/navigation";
import { googleBusiness } from "@/lib/googleBusiness";
import { raffelbergLogo } from "@/lib/clientLogos";
import { getTestimonialAttribution, raffelbergTestimonial } from "@/content/testimonials";

/** Einheitlicher Budget-Hinweis – bewusst ohne Zahlen, Preise oder Laufzeiten. */
const BUDGET_NOTE =
  "Budget und Betreuung richten sich nach Ziel, Branche und Umfang – im kostenlosen Erstgespräch bekommen Sie eine ehrliche Budgetorientierung.";

const conversionLinks = [
  { title: "Google Ads", href: "/leistungen/google-ads" },
  { title: "Meta Ads", href: "/leistungen/meta-ads" },
  { title: "Social Media", href: "/leistungen/social-media" },
  { title: "SEO / Local SEO", href: "/leistungen/seo" },
  { title: "Webseiten", href: "/leistungen/webseiten" },
];

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 text-accent-dark" aria-hidden="true">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContentBlock({ section }: { section: LandingPageTextSection }) {
  const points = section.points ?? [];
  return (
    <MoreDetails summary={section.title}>
      <div className="space-y-3">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="leading-relaxed">
            {renderInline(paragraph)}
          </p>
        ))}
      </div>
      {points.length > 0 && <CheckList items={points} className="mt-4 grid gap-2 sm:grid-cols-2" />}
    </MoreDetails>
  );
}

function ProblemList({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <span className="mt-0.5 text-red-600" aria-hidden="true">
            ✕
          </span>
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Schlanke Conversion-Landingpage für bezahlten Suchverkehr:
 * Hero mit CTA + Mini-Formular, Angebot, Proof (nur reale Inhalte), Budget-Hinweis ohne Preise,
 * lange Texte in Aufklappern, weiterführende Links nur ganz unten.
 */
export function ConversionLandingTemplate({ page }: { page: LandingPage }) {
  const c = page.conversion;
  if (!c) return null;

  const tel = siteConfig.phone.replace(/\s/g, "");
  const waHref = `https://wa.me/${siteConfig.whatsapp}`;
  const faqSchema = createFaqSchema(page.faq);
  const reviews = googleBusiness.reviewPreviews.filter((review) => c.proof.reviewAuthors.includes(review.author));
  const attribution = getTestimonialAttribution(raffelbergTestimonial);
  const contentBlocks = [page.intro, page.audience, page.serviceArea, page.results].filter(
    (section): section is LandingPageTextSection => Boolean(section),
  );
  const otherLinks = conversionLinks.filter((link) => link.href !== page.path);
  const linkClass = "font-semibold text-white underline underline-offset-2";

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* 1. Above the fold: H1, Subline, CTA + Mini-Formular */}
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
                {page.hero.headline}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-200 sm:mt-6 sm:text-lg lg:text-xl">
                {page.hero.subheadline}
              </p>
              <CheckList
                items={c.heroPoints}
                className="mt-6 hidden space-y-2 text-base text-gray-100 sm:block [&_span:first-child]:text-accent"
              />
              <div className="mt-6 sm:mt-8">
                <Button href="#anfrage" size="lg" className="text-center">
                  {c.ctaLabel}
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                Kostenlos &amp; unverbindlich ·{" "}
                <TrackedContactLink kind="phone" href={`tel:${tel}`} placement="landing_hero" className={linkClass}>
                  {siteConfig.phone}
                </TrackedContactLink>{" "}
                ·{" "}
                <TrackedContactLink kind="whatsapp" href={waHref} placement="landing_hero" className={linkClass}>
                  WhatsApp
                </TrackedContactLink>
              </p>
              <div className="mt-4 hidden sm:block">
                <ReviewBadge tone="dark" />
              </div>
            </div>

            <div id="anfrage" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-xl sm:p-6">
              <h2 className="text-xl font-bold text-anthracite">{c.formTitle}</h2>
              <p className="mb-4 mt-1 text-sm text-gray-600">Nur drei Angaben – wir melden uns zeitnah.</p>
              <LeadMiniForm
                source={`${page.slug}-hero`}
                submitLabel={c.ctaLabel}
                offer={c.offer.title}
                topicPlaceholder={c.formTopicPlaceholder}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5./6. Angebot */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-3xl border border-accent/30 bg-accent-light/40 p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">Ihr nächster Schritt</p>
              <h2 className="mt-2 text-2xl font-bold text-anthracite lg:text-4xl">{c.offer.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">{c.offer.intro}</p>
              <CheckList items={c.offer.items} className="mt-6 grid gap-3 text-gray-800 md:grid-cols-2" />
              <p className="mt-6 text-lg font-semibold text-anthracite">{c.offer.closing}</p>
              <div className="mt-6">
                <Button href="#kontakt" size="lg" className="text-center">
                  {c.ctaLabel}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {c.showProblemsInline && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="mb-8 text-2xl font-bold text-anthracite lg:text-4xl">{page.problem.title}</h2>
              <ProblemList points={page.problem.points} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {c.scope && (
        <section className={`section-padding ${c.showProblemsInline ? "" : "bg-gray-50"}`}>
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">{c.scope.title}</h2>
              {c.scope.intro && (
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">{c.scope.intro}</p>
              )}
              <CheckList items={c.scope.items} className="mt-8 grid gap-4 text-gray-800 md:grid-cols-2" />
              <div className="mt-8">
                <Button href="#kontakt" size="lg" className="text-center">
                  {c.ctaLabel}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Vorteile */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-bold text-anthracite lg:text-4xl">Ihre Vorteile</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.05}>
                <Card hover={false} className="h-full">
                  <BenefitIcon icon={benefit.icon} />
                  <h3 className="mt-4 text-lg font-bold text-anthracite">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proof: nur Raffelberg, echte Google-Bewertungen, Jascha-Foto */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold text-anthracite lg:text-4xl">{c.proof.title}</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card hover={false} className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={raffelbergLogo.src}
                    alt={raffelbergLogo.alt}
                    width={56}
                    height={56}
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">Referenz</p>
                  <h3 className="text-xl font-bold text-anthracite">Golfclub Raffelberg</h3>
                </div>
              </div>
              <CheckList items={c.proof.referenceFacts} className="mt-5 space-y-2 text-gray-700" />
              <figure className="mt-6 rounded-xl bg-gray-50 p-5">
                <blockquote className="leading-relaxed text-gray-800">„{c.proof.referenceQuote}“</blockquote>
                <figcaption className="mt-3 text-sm text-gray-600">
                  Auszug aus der Kundenstimme – {attribution.primary}
                  {attribution.secondary ? `, ${attribution.secondary}` : ""}
                </figcaption>
              </figure>
            </Card>

            <div className="space-y-6">
              <Card hover={false}>
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/images/JaschaKestler.JPG"
                      alt="Jascha Kestler – Gründer der Online-Marketing-Agentur Kestler Connect in Duisburg"
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-anthracite">Jascha Kestler</p>
                    <p className="text-sm text-gray-600">Gründer, Kestler Connect</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  Ihr fester Ansprechpartner: Im Erstgespräch sprechen Sie direkt mit mir – ohne Umweg über anonyme
                  Agenturprozesse.
                </p>
              </Card>

              <Card hover={false}>
                <ReviewBadge />
                {reviews.map((review) => (
                  <figure key={review.author} className="mt-4">
                    <blockquote className="text-sm leading-relaxed text-gray-800">„{review.text}“</blockquote>
                    <figcaption className="mt-2 text-xs text-gray-600">
                      {review.author} · {review.rating} von 5 Sternen · Google-Bewertung, laut Kundenaussage
                    </figcaption>
                  </figure>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Ablauf der Zusammenarbeit
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {page.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
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

      {/* 4. Budget-Hinweis – keine Preise, keine Laufzeiten */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-anthracite lg:text-2xl">Budget &amp; Betreuung</h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-700">{BUDGET_NOTE}</p>
              <div className="mt-5">
                <Button href="#kontakt" size="md" className="text-center">
                  {c.ctaLabel}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lange Texte in Aufklappern */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold text-anthracite lg:text-4xl">Mehr erfahren</h2>
            <div className="space-y-3">
              {contentBlocks.map((section) => (
                <ContentBlock key={section.title} section={section} />
              ))}
              {!c.showProblemsInline && (
                <MoreDetails summary={page.problem.title}>
                  <ProblemList points={page.problem.points} />
                </MoreDetails>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-anthracite lg:text-4xl">Häufige Fragen</h2>
            <Accordion items={page.faq} />
          </ScrollReveal>
        </div>
      </section>

      {/* Abschluss-Formular */}
      <section id="kontakt" className="section-padding scroll-mt-16 bg-navy">
        <div className="container-custom">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal>
              <h2 className="text-2xl font-extrabold text-white lg:text-4xl">{c.offer.title}</h2>
              <p className="mt-4 text-gray-200">{c.offer.closing}</p>
              <p className="mt-4 text-gray-200">
                Lieber direkt?{" "}
                <TrackedContactLink kind="phone" href={`tel:${tel}`} placement="landing_footer" className={linkClass}>
                  {siteConfig.phone}
                </TrackedContactLink>{" "}
                oder{" "}
                <TrackedContactLink kind="whatsapp" href={waHref} placement="landing_footer" className={linkClass}>
                  WhatsApp
                </TrackedContactLink>
                .
              </p>
              <div className="mt-6">
                <ReviewBadge tone="dark" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl bg-white p-5 sm:p-8">
                <LeadMiniForm
                  source={`${page.slug}-kontakt`}
                  submitLabel={c.ctaLabel}
                  offer={c.offer.title}
                  topicPlaceholder={c.formTopicPlaceholder}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Weiterführende Links – nur ganz unten, eingeklappt */}
      <section className="py-8 sm:py-10">
        <div className="container-custom max-w-4xl">
          <MoreDetails summary="Weiterführende Informationen">
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href="/referenzen/golfclub-raffelberg"
                  className="inline-flex rounded-full border border-accent/30 bg-accent-light/40 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
                >
                  Referenz Golfclub Raffelberg
                </Link>
              </li>
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full border border-accent/30 bg-accent-light/40 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/einzugsgebiet"
                  className="inline-flex rounded-full border border-accent/30 bg-accent-light/40 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
                >
                  Einzugsgebiet
                </Link>
              </li>
            </ul>
          </MoreDetails>
        </div>
      </section>
    </>
  );
}
