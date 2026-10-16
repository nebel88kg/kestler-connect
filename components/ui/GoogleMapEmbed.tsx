"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/navigation";
import { googleBusiness } from "@/lib/googleBusiness";

const ADDRESS = `${siteConfig.name}, ${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.addressLocality}`;

/** Externe Links (keine Datenübertragung beim Seitenaufruf, erst beim Klick). */
export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}&destination_place_id=${googleBusiness.placeId}`;
export const mapsProfileUrl = `https://maps.google.com/?cid=${googleBusiness.cid}`;

const EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&hl=de&z=15&output=embed`;

/**
 * Datenschutzfreundliche Google-Maps-Karte (2-Klick-Lösung):
 * Beim Seitenaufruf wird NICHTS von Google geladen – nur eine lokale Vorschau.
 * Erst nach Klick auf „Karte laden“ wird das Google-Maps-iframe eingebunden
 * (Einwilligung für diesen Aufruf, siehe /datenschutz#google-maps).
 */
export function GoogleMapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const linkClass = "font-semibold text-accent-dark underline underline-offset-2 hover:text-navy";

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 sm:aspect-[16/9]">
        {loaded ? (
          <iframe
            src={EMBED_URL}
            title={`Google-Maps-Karte: ${ADDRESS}`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#e5edf3_0%,_#f3f4f6_70%)] p-4 text-center">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10 text-navy" fill="currentColor">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
            <p className="text-sm font-semibold text-anthracite">
              {siteConfig.address.streetAddress}, {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
            </p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
            >
              Karte laden
            </button>
            <p className="max-w-sm text-xs leading-relaxed text-gray-600">
              Mit dem Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google übertragen. Mehr dazu in unserer{" "}
              <a href="/datenschutz#google-maps" className={linkClass}>
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        )}
      </div>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href={mapsRouteUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Route planen
        </a>
        <a href={mapsProfileUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Bei Google ansehen
        </a>
      </p>
    </div>
  );
}
