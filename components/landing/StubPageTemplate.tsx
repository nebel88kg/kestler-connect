import type { StubPage } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createBreadcrumbsFromPath } from "@/lib/seo";

interface StubPageTemplateProps {
  page: StubPage;
}

export function StubPageTemplate({ page }: StubPageTemplateProps) {
  const breadcrumbs = createBreadcrumbsFromPath(page.path);

  return (
    <>
      <section className="page-hero bg-navy">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbs} variant="dark" />
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
              In Vorbereitung
            </span>
            <h1 className="text-2xl font-extrabold capitalize leading-tight text-white sm:text-3xl lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              {page.description}
            </p>
            <div className="mt-8">
              <Button href="/kontakt" size="lg">
                Kostenloses Strategiegespräch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-anthracite">
              Diese Seite wird gerade erstellt
            </h2>
            <p className="mt-4 text-gray-600">
              Wir arbeiten an detaillierten Inhalten für diese Seite. In der Zwischenzeit beraten wir Sie gerne persönlich zu diesem Thema.
            </p>
            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-8">
              <ContactForm source={`stub-${page.path}`} compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
