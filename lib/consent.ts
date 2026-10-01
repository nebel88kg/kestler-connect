import { trackEvent } from "@/lib/tracking";

/**
 * Consent-Verwaltung (Google Consent Mode v2) – eigene, schlanke Implementierung.
 *
 * - Standard: alles verweigert (wird per Inline-Skript VOR GTM gesetzt, siehe lib/consentScript.ts).
 * - Auswahl wird in localStorage UND in einem First-Party-Cookie gespeichert (180 Tage).
 * - Kategorien: "analytics" -> analytics_storage, "marketing" -> ad_storage, ad_user_data, ad_personalization.
 *
 * Hinweis: Die Lese-Logik hier muss mit dem Inline-Skript in lib/consentScript.ts übereinstimmen.
 */

export const CONSENT_KEY = "kc_consent";
export const CONSENT_COOKIE = "kc_consent";
export const CONSENT_MAX_AGE_DAYS = 180;
/** Window-Event, mit dem der Footer-Link den Banner (Einstellungen) wieder öffnet. */
export const OPEN_CONSENT_EVENT = "kc:open-cookie-settings";

const MAX_AGE_MS = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

export type ConsentChoice = { analytics: boolean; marketing: boolean };

type StoredConsent = ConsentChoice & { v: 1; ts: number };

function gtagUpdate(choice: ConsentChoice): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const analytics = choice.analytics ? "granted" : "denied";
  const marketing = choice.marketing ? "granted" : "denied";
  gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
}

/** Liest die gespeicherte Auswahl (localStorage, Fallback Cookie). null = noch keine Entscheidung. */
export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (raw) {
      const s = JSON.parse(raw) as Partial<StoredConsent>;
      if (
        typeof s.analytics === "boolean" &&
        typeof s.marketing === "boolean" &&
        typeof s.ts === "number" &&
        Date.now() - s.ts < MAX_AGE_MS
      ) {
        return { analytics: s.analytics, marketing: s.marketing };
      }
    }
  } catch {
    /* localStorage nicht verfügbar oder ungültig – Cookie-Fallback */
  }
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  const parsed = match ? /^a([01])m([01])$/.exec(decodeURIComponent(match[1])) : null;
  return parsed ? { analytics: parsed[1] === "1", marketing: parsed[2] === "1" } : null;
}

function persist(choice: ConsentChoice): void {
  try {
    const value: StoredConsent = { v: 1, ts: Date.now(), ...choice };
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {
    /* localStorage nicht verfügbar – Cookie genügt */
  }
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const value = `a${choice.analytics ? 1 : 0}m${choice.marketing ? 1 : 0}`;
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE_DAYS * 24 * 60 * 60}; Path=/; SameSite=Lax${secure}`;
}

function expireCookies(names: RegExp[]): void {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = ["", `; Domain=${host}`, `; Domain=.${host}`];
  if (parts.length > 2) domains.push(`; Domain=.${parts.slice(-2).join(".")}`);
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (!name || !names.some((re) => re.test(name))) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/${domain}`;
    }
  }
}

/** Best-Effort: entfernt Google-Cookies der Domain, wenn die Einwilligung widerrufen wird. */
function clearRevoked(choice: ConsentChoice): void {
  if (!choice.analytics) expireCookies([/^_ga($|_)/, /^_gid$/, /^_gat/]);
  if (!choice.marketing) expireCookies([/^_gcl_/, /^_gac_/]);
}

/** Speichert die Auswahl, aktualisiert Consent Mode und informiert GTM per dataLayer-Event. */
export function applyConsent(choice: ConsentChoice): void {
  persist(choice);
  gtagUpdate(choice);
  clearRevoked(choice);
  trackEvent("cookie_consent_update", {
    analytics_consent: choice.analytics,
    marketing_consent: choice.marketing,
  });
}
