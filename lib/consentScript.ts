import { CONSENT_COOKIE, CONSENT_KEY, CONSENT_MAX_AGE_DAYS } from "@/lib/consent";

/**
 * Inline-Skript (läuft synchron im <head>, also VOR dem GTM-Loader):
 * 1. dataLayer + gtag() bereitstellen
 * 2. Consent Mode v2 Default: alles "denied" (wait_for_update 500 ms)
 * 3. Bereits gespeicherte Auswahl (Wiederkehrer) sofort per "update" anwenden
 *
 * Bewusst ES5 und ohne Abhängigkeiten, damit es klein bleibt und überall läuft.
 * Die Lese-Logik entspricht readConsent() in lib/consent.ts.
 */
export const consentInitScript = `(function(){
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
var c=null;
try{
var raw=localStorage.getItem(${JSON.stringify(CONSENT_KEY)});
if(raw){var s=JSON.parse(raw);
if(s&&typeof s.analytics==='boolean'&&typeof s.marketing==='boolean'&&typeof s.ts==='number'&&Date.now()-s.ts<${CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000}){c={a:s.analytics,m:s.marketing};}}
}catch(e){}
if(!c){
var m=document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]*)/);
var v=m&&/^a([01])m([01])$/.exec(decodeURIComponent(m[1]));
if(v){c={a:v[1]==='1',m:v[2]==='1'};}
}
if(c){
var g=c.m?'granted':'denied';
gtag('consent','update',{analytics_storage:c.a?'granted':'denied',ad_storage:g,ad_user_data:g,ad_personalization:g});
}
})();`;
