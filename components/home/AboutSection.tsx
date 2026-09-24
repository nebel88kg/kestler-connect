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
              Kestler Connect ist eine Social-Media- und Performance-Marketing-Agentur in Duisburg
              für regionale und lokale Unternehmen – mit Social Media Marketing, Google Ads und Meta
              Ads. Website-Erstellung ergänzt das Angebot, wenn die digitale Basis fehlen oder
              Ads ausbremsen.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
              Ob Content und Reels, bezahlte Kampagnen oder eine conversion-starke Homepage: Wir
              verbinden die Kanäle so, dass Sichtbarkeit zu Anfragen wird – in Duisburg, im
              Ruhrgebiet und in NRW.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/ueber-uns" variant="outline" size="md">
                Mehr über uns
              </Button>
              <Link
                href="/leistungen/social-media"
                className="text-sm font-semibold text-accent transition-colors hover:text-navy"
              >
                Social Media Agentur →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
