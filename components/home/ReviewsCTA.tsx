import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GoogleReviewsAd } from "@/components/home/GoogleReviewsAd";
import { googleBusiness } from "@/lib/googleBusiness";

/** Kundenbewertungen / Google-Bewertungen CTA mit Preview-Ad. */
export function ReviewsCTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Google-Bewertungen
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
              5,0 Sterne – echte Stimmen von Kunden
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Kurzer Einblick in unsere öffentlichen Google-Bewertungen. Die ganze Liste
              findest du mit einem Klick auf dem Maps-Eintrag.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={googleBusiness.mapsUrl} external size="md">
                Alle Google-Bewertungen
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
            <GoogleReviewsAd />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
