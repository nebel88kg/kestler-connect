import { ScrollReveal } from "@/components/ui/ScrollReveal";

const items = [
  "Standort Duisburg",
  "Fester Ansprechpartner",
  "Messbares Reporting",
  "Referenzen: DnM · SecPro · Raffelberg",
];

export function TrustBar() {
  return (
    <section className="border-b border-accent/20 bg-navy">
      <div className="container-custom py-4 sm:py-5">
        <ScrollReveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-gray-200 sm:gap-x-10 sm:text-base">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  ●
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
