import type { LandingPage } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { BenefitIcon } from "@/components/ui/BenefitIcon";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbsFromPath } from "@/lib/seo";
import Link from "next/link";

interface LandingPageTemplateProps {
  page: LandingPage;
}

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const breadcrumbs = createBreadcrumbsFromPath(page.path);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

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
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
              {page.problem.title}
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.problem.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                  <span className="mt-0.5 text-red-500">✕</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-anthracite lg:text-4xl">
              {page.solution.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
              {page.solution.content}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
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
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Referenzen
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
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

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-bold text-anthracite lg:text-4xl">
              Unser Ablauf
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
