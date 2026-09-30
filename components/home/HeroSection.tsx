import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/navigation";

/**
 * Server-Komponente: Der Hero-Text wird ohne Hydration-Wartezeit gerendert (LCP).
 * Optik (Video-Hintergrund, Verläufe, Layout) unverändert.
 */
export function HeroSection() {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 bg-navy">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/30 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-custom pb-10 sm:pb-14 lg:pb-16">
          <div className="animate-hero-rise max-w-4xl">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block">Online-Marketing-Agentur</span>
              <span className="block text-accent">Social Media, Ads &amp; SEO</span>
              <span className="block">aus Duisburg</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-200 sm:mt-4 sm:text-base">
              Mehr Sichtbarkeit und mehr Anfragen für regionale und lokale Unternehmen in Duisburg, im
              Ruhrgebiet und am Niederrhein.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 lg:mt-12">
              <Button href="/kontakt" size="md" className="w-full sm:w-auto">
                Kostenloses Erstgespräch
              </Button>
              <Button
                href="/referenzen"
                variant="outline"
                size="md"
                className="w-full border-accent text-accent hover:bg-accent hover:text-navy sm:w-auto"
              >
                Referenzen ansehen
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Kostenlos &amp; unverbindlich ·{" "}
              <a href={`tel:${tel}`} className="font-semibold text-white underline underline-offset-2">
                Jetzt anrufen
              </a>{" "}
              ·{" "}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-2"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
