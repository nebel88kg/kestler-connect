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
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-navy px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
          <p className="text-gray-300">{text}</p>
          <Button href="/kontakt" size="lg">
            Kostenloses Erstgespräch
          </Button>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-accent underline-offset-2 hover:underline"
          >
            Oder direkt anrufen: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
