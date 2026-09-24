import type { LandingPage } from "../types";
import { hubLandingPages } from "./hubs";
import { googleAdsFuerHandwerker } from "./niches/google-ads-fuer-handwerker";
import { mitgliedergewinnungGolf } from "./niches/mitgliedergewinnung-golfclubs";
import { localSeo } from "./niches/local-seo";
import { marketingWorkshopStartups } from "./niches/marketing-workshop-startups";
import { marketingSponsoringVereine } from "./niches/marketing-sponsoring-vereine";

export { leadgewinnungHub as leadgewinnung } from "./hubs";
export { mitarbeitergewinnungHub as mitarbeitergewinnung } from "./hubs";

export {
  googleAdsFuerHandwerker,
  mitgliedergewinnungGolf,
  localSeo,
  marketingWorkshopStartups,
  marketingSponsoringVereine,
};

export const fullLandingPages: LandingPage[] = [
  ...hubLandingPages,
  googleAdsFuerHandwerker,
  mitgliedergewinnungGolf,
  localSeo,
  marketingWorkshopStartups,
  marketingSponsoringVereine,
];
