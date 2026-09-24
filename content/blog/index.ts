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

export const blogPosts: BlogPost[] = [
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
