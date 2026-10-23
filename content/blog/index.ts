import type { BlogPost } from "../types";
import { mehrAnfragenBekommen } from "./mehr-anfragen-bekommen";
import { werbungSchaltenGoogleAds } from "./werbung-schalten-google-ads";
import { instagramTiktokFuerUnternehmen } from "./instagram-tiktok-fuer-unternehmen";
import { wasMachtEineSocialMediaAgentur } from "./was-macht-eine-social-media-agentur";
import { googleAdsVorteile } from "./google-ads-vorteile";
import { sponsorenFinden } from "./sponsoren-finden";
import { wasKostetGoogleAds } from "./was-kostet-google-ads";
import { mitarbeitergewinnungImHandwerk } from "./mitarbeitergewinnung-im-handwerk";
import { socialMediaFuerVereine } from "./social-media-fuer-vereine";
import { metaAdsFuerLokaleUnternehmen } from "./meta-ads-fuer-lokale-unternehmen";
import { performanceMarketingDuisburg } from "./performance-marketing-duisburg";
import { beiGoogleUndKiGefundenWerden } from "./bei-google-und-ki-gefunden-werden";
import { googleAdsAgenturDuisburg } from "./google-ads-agentur-duisburg";
import { socialMediaFuerPflegedienste } from "./social-media-fuer-pflegedienste";
import { socialMediaFuerGastronomie } from "./social-media-fuer-gastronomie";
import { socialMediaFuerHandwerksbetriebe } from "./social-media-fuer-handwerksbetriebe";
import { socialMediaMarketingDuisburg } from "./social-media-marketing-duisburg";
import { localSeoDuisburg } from "./local-seo-duisburg";
import { websiteErstellenLassenDuisburg } from "./website-erstellen-lassen-duisburg";
import { socialMediaRedaktionsplan } from "./social-media-redaktionsplan";
import { socialMediaFuerEinzelhandel } from "./social-media-fuer-einzelhandel";

export const blogPosts: BlogPost[] = [
  socialMediaFuerEinzelhandel,
  socialMediaRedaktionsplan,
  websiteErstellenLassenDuisburg,
  localSeoDuisburg,
  socialMediaMarketingDuisburg,
  socialMediaFuerHandwerksbetriebe,
  socialMediaFuerGastronomie,
  socialMediaFuerPflegedienste,
  googleAdsAgenturDuisburg,
  beiGoogleUndKiGefundenWerden,
  performanceMarketingDuisburg,
  metaAdsFuerLokaleUnternehmen,
  mehrAnfragenBekommen,
  werbungSchaltenGoogleAds,
  instagramTiktokFuerUnternehmen,
  wasMachtEineSocialMediaAgentur,
  googleAdsVorteile,
  sponsorenFinden,
  wasKostetGoogleAds,
  mitarbeitergewinnungImHandwerk,
  socialMediaFuerVereine,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
