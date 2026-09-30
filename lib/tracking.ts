type DataLayerEvent = { event: string; [key: string]: unknown };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * Schiebt ein Event in den GTM-dataLayer (Container GTM-WXPZGZ86).
 * Es werden bewusst keine personenbezogenen Daten übergeben.
 */
export function trackEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
