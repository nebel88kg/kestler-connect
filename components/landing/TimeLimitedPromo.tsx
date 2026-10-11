"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Längster Timer, den Browser zuverlässig ausführen (~24,8 Tage). */
const MAX_TIMEOUT_MS = 2_147_483_647;

/**
 * Rendert `children` nur bis `endsAt` (ISO-Zeitpunkt mit Zeitzone).
 * Ergänzt den Server-Check (Build/ISR): Falls eine ausgelieferte Seite noch die Aktion enthält,
 * blendet der Browser sie nach dem Enddatum aus – auch wenn die Seite über das Enddatum hinaus offen bleibt.
 * Erster Render = Server-HTML (keine Hydration-Abweichung), die Prüfung läuft im Effect.
 */
export function TimeLimitedPromo({ endsAt, children }: { endsAt: string; children: ReactNode }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const end = Date.parse(endsAt);
    const remaining = Number.isFinite(end) ? end - Date.now() : -1;
    if (remaining < 0) {
      setExpired(true);
      return;
    }
    if (remaining > MAX_TIMEOUT_MS) return;
    const timer = window.setTimeout(() => setExpired(true), remaining + 1000);
    return () => window.clearTimeout(timer);
  }, [endsAt]);

  if (expired) return null;
  return <>{children}</>;
}
