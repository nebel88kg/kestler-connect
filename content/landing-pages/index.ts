import type { LandingPage } from "../types";
import { hubLandingPages } from "./hubs";
import { localSeo } from "./niches/local-seo";
import { marketingWorkshopStartups } from "./niches/marketing-workshop-startups";

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
];
