import Script from "next/script";

export const GTM_ID = "GTM-WXPZGZ86";

/**
 * Google Tag Manager – head script.
 * afterInteractive: lädt direkt nach der Hydration. So erfasst GTM die Einstiegs-URL inkl. gclid
 * auch dann, wenn Besucher schnell auf eine andere Seite wechseln. Consent Mode v2 (Default
 * "denied" + url_passthrough) wird vorher synchron im <head> gesetzt (lib/consentScript.ts).
 * Events, die vorher per trackEvent() in den dataLayer geschrieben werden (z. B. generate_lead),
 * bleiben in der Warteschlange und werden von GTM nach dem Laden verarbeitet.
 * Bewusst ohne <noscript>-iframe: Ohne JavaScript lässt sich keine Einwilligung einholen.
 */
export function GoogleTagManager() {
  return (
    <Script id="gtm" strategy="afterInteractive">{
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
    }</Script>
  );
}
