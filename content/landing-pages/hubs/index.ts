import type { LandingPage } from "@/content/types";
import { googleAdsHub } from "./google-ads";
import { metaAdsHub } from "./meta-ads";
import { socialMediaHub } from "./social-media";
import { seoHub } from "./seo";
import { webseitenHub } from "./webseiten";
import { workshopsHub } from "./workshops";
import { leadgewinnungHub } from "./leadgewinnung";
import { mitarbeitergewinnungHub } from "./mitarbeitergewinnung";
import { performanceMarketingHub } from "./performance-marketing";

export {
  googleAdsHub,
  metaAdsHub,
  socialMediaHub,
  seoHub,
  webseitenHub,
  workshopsHub,
  leadgewinnungHub,
  mitarbeitergewinnungHub,
  performanceMarketingHub,
};

export const hubLandingPages: LandingPage[] = [
  performanceMarketingHub,
  googleAdsHub,
  metaAdsHub,
  socialMediaHub,
  seoHub,
  webseitenHub,
  workshopsHub,
  leadgewinnungHub,
  mitarbeitergewinnungHub,
];
