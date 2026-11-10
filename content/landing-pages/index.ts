import type { LandingPage } from "../types";
import { hubLandingPages } from "./hubs";
import { localSeo } from "./niches/local-seo";
import { marketingWorkshopStartups } from "./niches/marketing-workshop-startups";
import { socialMediaMoers } from "./cities/social-media-moers";
import { socialMediaKrefeld } from "./cities/social-media-krefeld";
import { googleAdsMoers } from "./cities/google-ads-moers";
import { googleAdsKrefeld } from "./cities/google-ads-krefeld";
import { metaAdsMoers } from "./cities/meta-ads-moers";
import { metaAdsKrefeld } from "./cities/meta-ads-krefeld";
import { socialMediaOberhausen } from "./cities/social-media-oberhausen";
import { socialMediaMuelheim } from "./cities/social-media-muelheim-an-der-ruhr";
import { socialMediaDinslaken } from "./cities/social-media-dinslaken";
import { googleAdsOberhausen } from "./cities/google-ads-oberhausen";
import { googleAdsMuelheim } from "./cities/google-ads-muelheim-an-der-ruhr";
import { googleAdsDinslaken } from "./cities/google-ads-dinslaken";
import { metaAdsOberhausen } from "./cities/meta-ads-oberhausen";
import { metaAdsMuelheim } from "./cities/meta-ads-muelheim-an-der-ruhr";
import { metaAdsDinslaken } from "./cities/meta-ads-dinslaken";

export { leadgewinnungHub as leadgewinnung } from "./hubs";
export { mitarbeitergewinnungHub as mitarbeitergewinnung } from "./hubs";

export {
  localSeo,
  marketingWorkshopStartups,
};

/**
 * Nischenseiten Handwerker / Vereine / Golfclubs sind bewusst nicht mehr
 * in fullLandingPages – 301-Redirects in next.config.ts leiten auf die Hubs um.
 * Die Content-Dateien bleiben im Repo, damit Imports und Historie nicht brechen.
 */
export const fullLandingPages: LandingPage[] = [
  ...hubLandingPages,
  localSeo,
  marketingWorkshopStartups,
  socialMediaMoers,
  socialMediaKrefeld,
  googleAdsMoers,
  googleAdsKrefeld,
  metaAdsMoers,
  metaAdsKrefeld,
  socialMediaOberhausen,
  socialMediaMuelheim,
  socialMediaDinslaken,
  googleAdsOberhausen,
  googleAdsMuelheim,
  googleAdsDinslaken,
  metaAdsOberhausen,
  metaAdsMuelheim,
  metaAdsDinslaken,
];
