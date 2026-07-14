import { getAllNavUrls, getNavItemByHref } from "./navigation";
import { fullLandingPages } from "@/content/landing-pages";
import type { LandingPage, StubPage } from "@/content/types";

export function getLandingPageByPath(path: string): LandingPage | undefined {
  return fullLandingPages.find((page) => page.path === path);
}

export function getAllLandingPagePaths(): string[] {
  return fullLandingPages.map((page) => page.path);
}

export function getStubPages(): StubPage[] {
  const allUrls = getAllNavUrls();
  const fullPaths = new Set(fullLandingPages.map((p) => p.path));

  return allUrls
    .filter(
      (url) =>
        !fullPaths.has(url) &&
        (url.startsWith("/leistungen/") || url.startsWith("/branchen/")) &&
        url.split("/").length >= 4
    )
    .map((path) => {
      const navItem = getNavItemByHref(path);
      return {
        path,
        title: navItem?.title || path.split("/").pop()?.replace(/-/g, " ") || "Seite",
        description: `Professionelle ${navItem?.title || "Marketing"}-Lösungen von Kestler Connect. Jetzt kostenlose Potenzialanalyse sichern.`,
      };
    });
}

export function getStubPageByPath(path: string): StubPage | undefined {
  return getStubPages().find((page) => page.path === path);
}

export function getAllContentPaths(): string[] {
  const navUrls = getAllNavUrls();
  const landingPaths = getAllLandingPagePaths();
  return [...new Set([...navUrls, ...landingPaths])];
}
