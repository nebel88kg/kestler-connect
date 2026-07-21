import Link from "next/link";
import Image from "next/image";
import { footerNav, leistungenMenuItems, siteConfig } from "@/lib/navigation";

export function Footer() {
  const leistungen = footerNav.find((section) => section.title === "Leistungen")?.items
    ?? leistungenMenuItems.map(({ title, href }) => ({ title, href }));
  const unternehmen = footerNav.find((section) => section.title === "Unternehmen")?.items ?? [];

  const leistungenPrimary = leistungen.slice(0, 4);
  const leistungenSecondary = leistungen.slice(4);

  return (
    <footer className="border-t border-navy-light bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block rounded-xl bg-white p-3">
              <Image
                src="/images/logo.png"
                alt="Kestler Connect"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm font-medium text-accent-muted">
              Verbindungen, die Wachstum schaffen.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale
              Unternehmen.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <a
                href={`tel:${siteConfig.phone}`}
                className="block transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-semibold text-accent">Leistungen</h3>
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              <ul className="space-y-2">
                {leistungenPrimary.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {leistungenSecondary.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-accent">Unternehmen</h3>
            <ul className="mt-4 space-y-2">
              {unternehmen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-light pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kestler Connect. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/impressum" className="transition-colors hover:text-accent">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-accent">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
