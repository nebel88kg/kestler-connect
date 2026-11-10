import type { BlogPost } from "../types";
import { mehrAnfragenBekommen } from "./mehr-anfragen-bekommen";
import { werbungSchaltenGoogleAds } from "./werbung-schalten-google-ads";
import { instagramTiktokFuerUnternehmen } from "./instagram-tiktok-fuer-unternehmen";
import { wasMachtEineSocialMediaAgentur } from "./was-macht-eine-social-media-agentur";
import { googleAdsVorteile } from "./google-ads-vorteile";
import { wasKostetGoogleAds } from "./was-kostet-google-ads";
import { metaAdsFuerLokaleUnternehmen } from "./meta-ads-fuer-lokale-unternehmen";
import { performanceMarketingDuisburg } from "./performance-marketing-duisburg";
import { beiGoogleUndKiGefundenWerden } from "./bei-google-und-ki-gefunden-werden";
import { googleAdsAgenturDuisburg } from "./google-ads-agentur-duisburg";
import { socialMediaFuerPflegedienste } from "./social-media-fuer-pflegedienste";
import { socialMediaFuerGastronomie } from "./social-media-fuer-gastronomie";
import { socialMediaMarketingDuisburg } from "./social-media-marketing-duisburg";
import { localSeoDuisburg } from "./local-seo-duisburg";
import { websiteErstellenLassenDuisburg } from "./website-erstellen-lassen-duisburg";
import { socialMediaRedaktionsplan } from "./social-media-redaktionsplan";
import { linkedinFuerUnternehmen } from "./linkedin-fuer-unternehmen";
import { socialMediaFuerEinzelhandel } from "./social-media-fuer-einzelhandel";
import { landingpageFuerWerbeanzeigen } from "./landingpage-fuer-werbeanzeigen";
import { facebookFuerUnternehmen } from "./facebook-fuer-unternehmen";
import { googleBewertungenBekommen } from "./google-bewertungen-bekommen";
import { instagramProfilOptimieren } from "./instagram-profil-optimieren";
import { kiImSocialMediaMarketing } from "./ki-im-social-media-marketing";
import { googleAdsOderMetaAds } from "./google-ads-oder-meta-ads";
import { pflegekraefteGewinnenSocialMedia } from "./pflegekraefte-gewinnen-social-media";

export const blogPosts: BlogPost[] = [
  pflegekraefteGewinnenSocialMedia,
  googleAdsOderMetaAds,
  kiImSocialMediaMarketing,
  instagramProfilOptimieren,
  googleBewertungenBekommen,
  facebookFuerUnternehmen,
  landingpageFuerWerbeanzeigen,
  socialMediaFuerEinzelhandel,
  linkedinFuerUnternehmen,
  socialMediaRedaktionsplan,
  websiteErstellenLassenDuisburg,
  localSeoDuisburg,
  socialMediaMarketingDuisburg,
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
  wasKostetGoogleAds,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
