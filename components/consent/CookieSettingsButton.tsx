"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

/** Footer-Link „Cookie-Einstellungen“ – öffnet den Banner im Einstellungs-Modus. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))}
    >
      Cookie-Einstellungen
    </button>
  );
}
