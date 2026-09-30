import Script from "next/script";

export const GTM_ID = "GTM-WXPZGZ86";

/**
 * Google Tag Manager – head script + body noscript.
 * lazyOnload: lädt erst nach dem window-load-Event (in Leerlaufzeit), damit GTM
 * Hydration und LCP nicht konkurriert. Events, die vorher per trackEvent() in den
 * dataLayer geschrieben werden (z. B. generate_lead), bleiben in der Warteschlange
 * und werden von GTM nach dem Laden verarbeitet.
 */
export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm" strategy="lazyOnload">{
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
      }</Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
