"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/navigation";
import { trackEvent } from "@/lib/tracking";

/** Conversion-Landingpages: "Anfrage" springt zum Mini-Formular statt auf /kontakt (weniger Absprünge). */
const conversionLandingPaths = [
  "/leistungen/google-ads",
  "/leistungen/meta-ads",
  "/leistungen/social-media",
  "/leistungen/seo",
];

/** Feste Schnellkontakt-Leiste – nur auf Mobilgeräten (unter lg), nicht auf /kontakt. */
export function StickyContactBar() {
  const pathname = usePathname();
  if (pathname === "/kontakt") return null;

  const tel = siteConfig.phone.replace(/\s/g, "");
  const linkClass =
    "flex min-h-12 items-center justify-center rounded-full border border-white/25 px-3 text-sm font-semibold text-white transition-colors hover:border-accent";
  const requestClass =
    "flex min-h-12 items-center justify-center rounded-full bg-accent px-3 text-sm font-bold text-navy transition-colors hover:bg-accent-hover";
  const isConversionLanding = conversionLandingPaths.includes(pathname);

  return (
    <>
      {/* Platzhalter, damit die Leiste den Footer nicht verdeckt */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <nav
        aria-label="Schnellkontakt"
        className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-navy-light bg-navy/95 backdrop-blur lg:hidden"
      >
        <div className="grid grid-cols-3 gap-2 px-3 py-2">
          <a href={`tel:${tel}`} onClick={() => trackEvent("click_phone", { placement: "sticky_bar" })} className={linkClass}>
            Anrufen
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { placement: "sticky_bar" })}
            className={linkClass}
          >
            WhatsApp
          </a>
          {isConversionLanding ? (
            <a href="#anfrage" className={requestClass}>
              Anfrage
            </a>
          ) : (
            <Link href="/kontakt" className={requestClass}>
              Anfrage
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
