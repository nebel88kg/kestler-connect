"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { applyConsent, OPEN_CONSENT_EVENT, readConsent, type ConsentChoice } from "@/lib/consent";

const btnBase =
  "inline-flex min-h-11 items-center justify-center rounded-full border-2 border-navy px-4 py-2 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark";
/** „Alle akzeptieren“ und „Nur notwendige“ nutzen exakt dieselbe Gestaltung (gleichwertige Auffälligkeit). */
const btnEqual = `${btnBase} bg-navy text-white hover:bg-navy-light`;
const btnSecondary = `${btnBase} bg-white text-navy hover:bg-gray-100`;

function Toggle({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <label htmlFor={id} className="text-sm font-semibold text-navy">
          {label}
        </label>
        <p id={`${id}-desc`} className="mt-0.5 text-xs leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
      <span className="relative mt-0.5 inline-flex h-6 w-11 shrink-0">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={`${id}-desc`}
          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-gray-600 transition-colors peer-checked:bg-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-dark"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"
        />
      </span>
    </div>
  );
}

/**
 * Cookie-Banner (Consent Mode v2). Fixierte Karte unten – kein Layout Shift, weil nichts im
 * Dokumentfluss Platz belegt. Wird erst nach dem Mount angezeigt (SSR rendert nichts).
 * Steht im DOM VOR dem Header, damit Tastaturnutzer ihn als Erstes erreichen, ohne dass der
 * Fokus beim Laden gestohlen wird. Beim Öffnen über den Footer-Link wird der Fokus in den
 * Dialog gesetzt und beim Schließen zurückgegeben (Esc schließt, sobald eine Auswahl existiert).
 */
export function CookieBanner() {
  const pathname = usePathname();
  const uid = useId();
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;

  const [open, setOpen] = useState(false);
  const [manual, setManual] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setHasChoice(true);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    } else {
      setOpen(true);
    }

    const onOpen = () => {
      const current = readConsent();
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setHasChoice(current !== null);
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setShowSettings(true);
      setManual(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  // Fokus nur auf Nutzeraktion (Footer-Link / „Einstellungen“) in den Dialog setzen.
  useEffect(() => {
    if (open && (manual || showSettings)) rootRef.current?.focus();
  }, [open, manual, showSettings]);

  const close = useCallback(() => {
    setOpen(false);
    setManual(false);
    setShowSettings(false);
    const opener = openerRef.current;
    openerRef.current = null;
    if (opener?.isConnected) opener.focus();
  }, []);

  const save = useCallback(
    (choice: ConsentChoice) => {
      applyConsent(choice);
      setHasChoice(true);
      setAnalytics(choice.analytics);
      setMarketing(choice.marketing);
      close();
    },
    [close],
  );

  // Impressum/Datenschutz bleiben ungestört lesbar (außer der Nutzer öffnet die Einstellungen selbst).
  const isLegalPage = pathname === "/datenschutz" || pathname === "/impressum";
  if (!open || (isLegalPage && !manual)) return null;

  // Auf Mobilgeräten über der fixierten Kontaktleiste (ca. 65 px + Safe-Area) positionieren.
  const hasStickyBar = pathname !== "/kontakt";
  const position = hasStickyBar
    ? "bottom-[calc(4.75rem_+_env(safe-area-inset-bottom,0px))] lg:bottom-4"
    : "bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] lg:bottom-4";

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={descId}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape" && hasChoice) {
          e.stopPropagation();
          close();
        }
      }}
      className={`fixed inset-x-3 z-50 max-h-[70dvh] overflow-y-auto rounded-2xl border border-navy/15 bg-white p-4 text-anthracite shadow-2xl outline-none sm:inset-x-auto sm:left-4 sm:w-full sm:max-w-lg sm:p-5 ${position}`}
    >
      <h2 id={titleId} className="text-base font-bold text-navy">
        Cookies und Datenschutz
      </h2>
      <p id={descId} className="mt-2 text-sm leading-relaxed text-gray-600">
        Wir nutzen den Google Tag Manager, um unsere Website zu analysieren (Google Analytics) und Werbung zu
        messen (Google Ads). Das passiert nur mit Ihrer Einwilligung, die Sie jederzeit ändern oder widerrufen
        können. Details finden Sie in unserer{" "}
        <Link href="/datenschutz" className="font-semibold text-accent-dark underline underline-offset-2 hover:text-navy">
          Datenschutzerklärung
        </Link>
        .
      </p>

      {showSettings && (
        <div className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
          <div className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="text-sm font-semibold text-navy">Notwendig</p>
              <p className="mt-0.5 text-xs leading-relaxed text-gray-600">
                Speichert Ihre Cookie-Auswahl. Ohne diese Angabe funktioniert die Einwilligungsverwaltung nicht.
              </p>
            </div>
            <span className="mt-0.5 shrink-0 text-xs font-semibold text-gray-600">Immer aktiv</span>
          </div>
          <Toggle
            id={`${uid}-analytics`}
            label="Analyse"
            description="Hilft uns zu verstehen, wie die Website genutzt wird (Google Analytics, Messung von Anfragen und Klicks)."
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            id={`${uid}-marketing`}
            label="Marketing"
            description="Erlaubt Conversion-Messung und Remarketing für Werbung (Google Ads) sowie personalisierte Werbung."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <button type="button" className={btnEqual} onClick={() => save({ analytics: true, marketing: true })}>
          Alle akzeptieren
        </button>
        <button type="button" className={btnEqual} onClick={() => save({ analytics: false, marketing: false })}>
          Nur notwendige
        </button>
        {showSettings ? (
          <button
            type="button"
            className={`${btnSecondary} col-span-2 sm:col-span-1`}
            onClick={() => save({ analytics, marketing })}
          >
            Auswahl speichern
          </button>
        ) : (
          <button
            type="button"
            className={`${btnSecondary} col-span-2 sm:col-span-1`}
            aria-expanded={false}
            onClick={() => setShowSettings(true)}
          >
            Einstellungen
          </button>
        )}
      </div>
    </div>
  );
}
