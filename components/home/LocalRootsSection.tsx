import { bniLogo } from "@/lib/clientLogos";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sponsors = [
  {
    name: "Reit- und Fahrverein Ziethen e.V.",
    href: "https://share.google/lHKom5w9sywY5CYzV",
  },
  { name: "Paul Schröder (Boxer)" },
  { name: "TuS Baerl", href: "https://tusbaerl.de" },
];

export function LocalRootsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Lokal verwurzelt
            </p>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
              Mitgliedschaften &amp; Engagement
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
              Soziales und lokales Engagement in der Region – Netzwerke, die Verbindungen und
              Wachstum ermöglichen.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-5">
          <div className="md:col-span-2">
            <ScrollReveal>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-accent bg-navy p-6 text-center shadow-lg shadow-accent/20 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Mitgliedschaft
                </p>
                <div className="mt-4 flex h-20 w-full max-w-[200px] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bniLogo.src}
                    alt={bniLogo.alt}
                    className="max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-lg font-bold text-white sm:text-xl">
                  BNI-Mitglied – lokal vernetzt
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Lokal vernetzt für Empfehlungen und Wachstum.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-3">
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-accent/20 bg-gray-50 p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  Sponsoring &amp; Partnerschaften
                </p>
                <ul className="mt-4 space-y-3">
                  {sponsors.map((item) => (
                    <li key={item.name} className="flex items-start gap-3 text-navy">
                      <span className="mt-1 text-accent" aria-hidden>
                        ✓
                      </span>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-navy underline-offset-2 hover:text-accent hover:underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-medium">{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
