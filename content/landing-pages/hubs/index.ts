import type { LandingPage } from "@/content/types";
import { googleAdsHub } from "./google-ads";
import { metaAdsHub } from "./meta-ads";
import { socialMediaHub } from "./social-media";
import { seoHub } from "./seo";
import { webseitenHub } from "./webseiten";
import { workshopsHub } from "./workshops";
import { leadgewinnungHub } from "./leadgewinnung";
import { mitarbeitergewinnungHub } from "./mitarbeitergewinnung";

export {
  googleAdsHub,
  metaAdsHub,
  socialMediaHub,
  seoHub,
  webseitenHub,
  workshopsHub,
  leadgewinnungHub,
  mitarbeitergewinnungHub,
};

export const hubLandingPages: LandingPage[] = [
  googleAdsHub,
  metaAdsHub,
  socialMediaHub,
  seoHub,
  webseitenHub,
  workshopsHub,
  leadgewinnungHub,
  mitarbeitergewinnungHub,
];
