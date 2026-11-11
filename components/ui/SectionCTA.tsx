import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/navigation";

interface SectionCTAProps {
  title?: string;
  text?: string;
}

/** Wiederverwendbarer Handlungsaufruf zwischen Abschnitten. */
export function SectionCTA({
  title = "Bereit für mehr Anfragen?",
  text = "Kostenlos und unverbindlich – wir melden uns zeitnah.",
}: SectionCTAProps) {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-custom">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-center">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">{title}</h2>
          <p className="text-gray-600">{text}</p>
          <Button href="/kontakt" size="lg">
            Kostenloses Strategiegespräch
          </Button>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-navy underline underline-offset-2 hover:underline"
          >
            Oder direkt anrufen: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
