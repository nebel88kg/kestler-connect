import type { BlogPost } from "../types";
import { socialMediaBetreuungKosten } from "./social-media-betreuung-kosten";
import { googleAdsVorteile } from "./google-ads-vorteile";
import { sponsorenFinden } from "./sponsoren-finden";
import { wasKostetGoogleAds } from "./was-kostet-google-ads";
import { mitarbeitergewinnungImHandwerk } from "./mitarbeitergewinnung-im-handwerk";
import { socialMediaFuerVereine } from "./social-media-fuer-vereine";

export const blogPosts: BlogPost[] = [
  socialMediaBetreuungKosten,
  googleAdsVorteile,
  sponsorenFinden,
  wasKostetGoogleAds,
  mitarbeitergewinnungImHandwerk,
  socialMediaFuerVereine,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
