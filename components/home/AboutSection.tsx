import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Wer wir sind
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-5xl">
              Kestler Connect – Social Media &amp; Performance Marketing aus Duisburg
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Social Media Marketing,{" "}
              <Link href="/leistungen/google-ads" className="font-semibold text-accent hover:underline">
                Google Ads
              </Link>{" "}
              und{" "}
              <Link href="/leistungen/meta-ads" className="font-semibold text-accent hover:underline">
                Meta Ads
              </Link>{" "}
              für regionale und lokale Unternehmen in Duisburg, Moers und Umgebung – Website und SEO
              als starke Basis, wenn Sichtbarkeit zu Anfragen werden soll.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/ueber-uns" variant="outline" size="md">
                Mehr über uns
              </Button>
              <Button href="/kontakt" size="md">
                Kostenloses Strategiegespräch
              </Button>
              <Link
                href="/leistungen/social-media"
                className="text-sm font-semibold text-accent transition-colors hover:text-navy"
              >
                Social Media Agentur Duisburg →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
