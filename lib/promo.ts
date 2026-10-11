import type { LandingPagePromo } from "@/content/types";

/**
 * Prüft, ob eine befristete Aktion noch läuft.
 * Ohne gültiges `endsAt` gilt die Aktion als beendet (sicherer Default: lieber nichts anzeigen).
 */
export function isPromoActive(promo: LandingPagePromo | undefined, now: number = Date.now()): boolean {
  if (!promo) return false;
  const end = Date.parse(promo.endsAt);
  return Number.isFinite(end) && now <= end;
}

/** Liefert die Aktion nur zurück, solange sie läuft – sonst `undefined`. */
export function getActivePromo(promo: LandingPagePromo | undefined, now?: number): LandingPagePromo | undefined {
  return isPromoActive(promo, now) ? promo : undefined;
}
