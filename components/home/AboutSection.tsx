import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const linkClass = "font-semibold text-accent-dark underline underline-offset-2 hover:text-navy";

export function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">
              Wer wir sind
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-5xl">
              Kestler Connect – Online-Marketing-Agentur aus Duisburg
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Wir helfen regionalen und lokalen Unternehmen in Duisburg, im Ruhrgebiet und am Niederrhein
              zu mehr Sichtbarkeit und Anfragen – mit{" "}
              <Link href="/leistungen/social-media" className={linkClass}>
                Social Media
              </Link>
              ,{" "}
              <Link href="/leistungen/google-ads" className={linkClass}>
                Google Ads
              </Link>
              ,{" "}
              <Link href="/leistungen/meta-ads" className={linkClass}>
                Meta Ads
              </Link>
              ,{" "}
              <Link href="/leistungen/seo" className={linkClass}>
                SEO
              </Link>{" "}
              und{" "}
              <Link href="/leistungen/webseiten" className={linkClass}>
                Webseiten
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/kontakt" size="md">
                Kostenloses Erstgespräch
              </Button>
              <Button href="/ueber-uns" variant="outline" size="md">
                Mehr über uns
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
