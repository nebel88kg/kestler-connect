import { getAllNavUrls } from "./navigation";
import { fullLandingPages } from "@/content/landing-pages";
import type { LandingPage } from "@/content/types";

export function getLandingPageByPath(path: string): LandingPage | undefined {
  return fullLandingPages.find((page) => page.path === path);
}

export function getAllLandingPagePaths(): string[] {
  return fullLandingPages.map((page) => page.path);
}

export function getLandingPagesByCategory(category: string): LandingPage[] {
  return fullLandingPages.filter((page) => page.category === category);
}

export function getAllContentPaths(): string[] {
  const navUrls = getAllNavUrls();
  const landingPaths = getAllLandingPagePaths();
  return [...new Set([...navUrls, ...landingPaths])];
}
