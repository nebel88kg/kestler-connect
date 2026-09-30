import type { NavItem } from "./navigation";

/** Kernleistungen in der gewünschten Reihenfolge – alles andere wandert in „Weitere Leistungen“. */
const CORE_ORDER = [
  "/leistungen/social-media",
  "/leistungen/google-ads",
  "/leistungen/meta-ads",
  "/leistungen/seo",
  "/leistungen/webseiten",
];

export function splitLeistungen(items: NavItem[]): { core: NavItem[]; more: NavItem[] } {
  const core = CORE_ORDER.map((href) => items.find((item) => item.href === href)).filter(
    (item): item is NavItem => Boolean(item)
  );
  const more = items.filter((item) => !CORE_ORDER.includes(item.href));
  return { core, more };
}
