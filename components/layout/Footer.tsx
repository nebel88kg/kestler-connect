import Link from "next/link";
import Image from "next/image";
import { footerNav, leistungenMenuItems, siteConfig } from "@/lib/navigation";
import { splitLeistungen } from "@/lib/serviceMenu";
import { linkedinUrl } from "@/lib/profiles";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.82 2.66 4.82 6.12v5.43h-4v-4.81c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54v4.89h-4v-11Z" />
    </svg>
  );
}

const linkClass = "text-sm text-gray-300 transition-colors hover:text-accent";

export function Footer() {
  const leistungen =
    footerNav.find((section) => section.title === "Leistungen")?.items ??
    leistungenMenuItems.map(({ title, href }) => ({ title, href }));
  const unternehmen = footerNav.find((section) => section.title === "Unternehmen")?.items ?? [];
  const { core, more } = splitLeistungen(leistungen);
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <footer className="border-t border-navy-light bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block rounded-xl bg-white p-3">
              <Image
                src="/images/logo.png"
                alt="Kestler Connect – Online-Marketing-Agentur Duisburg"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm font-medium text-accent-muted">
              Verbindungen, die Wachstum schaffen.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-300">
              Online-Marketing-Agentur aus Duisburg für regionale und lokale Unternehmen im Ruhrgebiet und am
              Niederrhein – Social Media, Google Ads, Meta Ads, SEO und Webseiten.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
              </p>
              <a href={`tel:${tel}`} className="block transition-colors hover:text-accent">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-accent">
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kestler Connect auf Instagram (öffnet in neuem Tab)"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-accent"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kestler Connect auf LinkedIn (öffnet in neuem Tab)"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-accent"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-semibold text-accent">Leistungen</h3>
            <ul className="mt-4 space-y-2">
              {(core.length > 0 ? core : leistungen).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {more.length > 0 && (
              <details className="group mt-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-gray-200 hover:text-accent">
                  Weitere Leistungen <span aria-hidden="true">+</span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {more.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-accent">Unternehmen</h3>
            <ul className="mt-4 space-y-2">
              {unternehmen.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/einzugsgebiet" className={linkClass}>
                  Einzugsgebiet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-light pt-8 sm:flex-row">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Kestler Connect. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <Link href="/impressum" className="transition-colors hover:text-accent">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-accent">
              Datenschutz
            </Link>
            <CookieSettingsButton className="transition-colors hover:text-accent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
