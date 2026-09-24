import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { googleBusiness } from "@/lib/googleBusiness";

/** Kundenbewertungen / Google-Bewertungen CTA. */
export function ReviewsCTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Kundenbewertungen
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
              Vertrauen entsteht durch echte Erfahrungen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Eine echte Stimme von Golfclub Raffelberg – und unsere Google-Bewertungen
              für alle, die noch mehr Einblicke möchten.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={googleBusiness.mapsUrl} external size="md">
                Google-Bewertungen ansehen
              </Button>
              <Button href={googleBusiness.writeReviewUrl} external variant="outline" size="md">
                Bewertung schreiben
              </Button>
              <Button href="/kontakt" variant="ghost" size="md">
                Strategiegespräch
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="h-full border-accent/20 bg-white">
              <p className="text-sm italic leading-relaxed text-gray-600 sm:text-base">
                &ldquo;Seit Jascha unser Social Media übernommen hat, hat sich unser gesamter
                Auftritt deutlich professionalisiert. Besonders beeindruckt hat uns die
                Kombination aus Meta Ads und Google Ads – unsere Kurse waren innerhalb
                kurzer Zeit sehr gut gebucht.&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="font-semibold text-anthracite">Max</p>
                <p className="text-sm text-gray-500">Golfmanager, Golfclub Raffelberg</p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
