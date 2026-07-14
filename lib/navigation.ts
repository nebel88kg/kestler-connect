export const siteConfig = {
  name: "Kestler Connect",
  description:
    "Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und lokale Unternehmen.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kestler-connect.de",
  phone: process.env.NEXT_PUBLIC_PHONE || "+491234567890",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "491234567890",
  email: process.env.CONTACT_EMAIL || "info@kestler-connect.de",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/kestler-connect/strategiegespraech",
};

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  { title: "Startseite", href: "/" },
  {
    title: "Leistungen",
    href: "/leistungen",
    children: [
      {
        title: "Google Ads",
        href: "/leistungen/google-ads",
        children: [
          { title: "Google Ads Agentur", href: "/leistungen/google-ads/google-ads-agentur" },
          { title: "Google Ads für Handwerker", href: "/leistungen/google-ads/google-ads-fuer-handwerker" },
          { title: "Google Ads Mitarbeitergewinnung", href: "/leistungen/google-ads/google-ads-mitarbeitergewinnung" },
          { title: "Google Ads Vereine", href: "/leistungen/google-ads/google-ads-vereine" },
          { title: "Google Ads lokale Unternehmen", href: "/leistungen/google-ads/google-ads-lokale-unternehmen" },
        ],
      },
      {
        title: "Meta Ads",
        href: "/leistungen/meta-ads",
        children: [
          { title: "Meta Ads Agentur", href: "/leistungen/meta-ads/meta-ads-agentur" },
          { title: "Facebook Ads", href: "/leistungen/meta-ads/facebook-ads" },
          { title: "Instagram Ads", href: "/leistungen/meta-ads/instagram-ads" },
          { title: "Mitarbeitergewinnung über Meta", href: "/leistungen/meta-ads/mitarbeitergewinnung-ueber-meta" },
          { title: "Leadgenerierung über Meta", href: "/leistungen/meta-ads/leadgenerierung-ueber-meta" },
        ],
      },
      {
        title: "Social Media",
        href: "/leistungen/social-media",
        children: [
          { title: "Social Media Betreuung", href: "/leistungen/social-media/social-media-betreuung" },
          { title: "Content Produktion", href: "/leistungen/social-media/content-produktion" },
          { title: "Reel Erstellung", href: "/leistungen/social-media/reel-erstellung" },
          { title: "Social Recruiting", href: "/leistungen/social-media/social-recruiting" },
        ],
      },
      {
        title: "Webseiten",
        href: "/leistungen/webseiten",
        children: [
          { title: "Webdesign", href: "/leistungen/webseiten/webdesign" },
          { title: "Landingpages", href: "/leistungen/webseiten/landingpages" },
          { title: "Conversion Optimierung", href: "/leistungen/webseiten/conversion-optimierung" },
        ],
      },
      {
        title: "SEO",
        href: "/leistungen/seo",
        children: [
          { title: "SEO Agentur", href: "/leistungen/seo/seo-agentur" },
          { title: "Local SEO", href: "/leistungen/seo/local-seo" },
          { title: "SEO für Handwerker", href: "/leistungen/seo/seo-fuer-handwerker" },
          { title: "SEO für Vereine", href: "/leistungen/seo/seo-fuer-vereine" },
          { title: "KI SEO", href: "/leistungen/seo/ki-seo" },
        ],
      },
    ],
  },
  {
    title: "Branchen",
    href: "/branchen",
    children: [
      {
        title: "Handwerk",
        href: "/branchen/handwerk",
        children: [
          { title: "Mitarbeiter gewinnen", href: "/branchen/handwerk/mitarbeiter-gewinnen" },
          { title: "Neukunden gewinnen", href: "/branchen/handwerk/neukunden-gewinnen" },
          { title: "Webseiten für Handwerker", href: "/branchen/handwerk/webseiten-fuer-handwerker" },
        ],
      },
      {
        title: "Vereine",
        href: "/branchen/vereine",
        children: [
          { title: "Mitglieder gewinnen", href: "/branchen/vereine/mitglieder-gewinnen" },
          { title: "Sponsoren gewinnen", href: "/branchen/vereine/sponsoren-gewinnen" },
          { title: "Social Media für Vereine", href: "/branchen/vereine/social-media-fuer-vereine" },
        ],
      },
      {
        title: "Immobilien",
        href: "/branchen/immobilien",
        children: [
          { title: "Leads für Makler", href: "/branchen/immobilien/leads-fuer-makler" },
          { title: "Google Ads für Makler", href: "/branchen/immobilien/google-ads-fuer-makler" },
          { title: "Webseiten für Makler", href: "/branchen/immobilien/webseiten-fuer-makler" },
        ],
      },
      {
        title: "Golfclubs",
        href: "/branchen/golfclubs",
        children: [
          { title: "Mitgliedergewinnung", href: "/branchen/golfclubs/mitgliedergewinnung" },
          { title: "Platzreifekurse vermarkten", href: "/branchen/golfclubs/platzreifekurse-vermarkten" },
          { title: "Schnuppergolf Kampagnen", href: "/branchen/golfclubs/schnuppergolf-kampagnen" },
        ],
      },
    ],
  },
  { title: "Referenzen", href: "/referenzen" },
  { title: "Über uns", href: "/ueber-uns" },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt", href: "/kontakt" },
];

export const footerNav: NavSection[] = [
  {
    title: "Leistungen",
    items: [
      { title: "Google Ads", href: "/leistungen/google-ads" },
      { title: "Meta Ads", href: "/leistungen/meta-ads" },
      { title: "Social Media", href: "/leistungen/social-media" },
      { title: "Webseiten", href: "/leistungen/webseiten" },
      { title: "SEO", href: "/leistungen/seo" },
    ],
  },
  {
    title: "Branchen",
    items: [
      { title: "Handwerk", href: "/branchen/handwerk" },
      { title: "Vereine", href: "/branchen/vereine" },
      { title: "Immobilien", href: "/branchen/immobilien" },
      { title: "Golfclubs", href: "/branchen/golfclubs" },
    ],
  },
  {
    title: "Unternehmen",
    items: [
      { title: "Über uns", href: "/ueber-uns" },
      { title: "Referenzen", href: "/referenzen" },
      { title: "Blog", href: "/blog" },
      { title: "Kontakt", href: "/kontakt" },
    ],
  },
];

function flattenNavItems(items: NavItem[]): NavItem[] {
  const result: NavItem[] = [];
  for (const item of items) {
    if (item.href !== "/" && item.href !== "/leistungen" && item.href !== "/branchen") {
      result.push({ title: item.title, href: item.href, description: item.description });
    }
    if (item.children) {
      result.push(...flattenNavItems(item.children));
    }
  }
  return result;
}

export function getAllNavUrls(): string[] {
  const urls = flattenNavItems(mainNav).map((item) => item.href);
  return [...new Set(urls)];
}

export function getNavItemByHref(href: string): NavItem | undefined {
  function search(items: NavItem[]): NavItem | undefined {
    for (const item of items) {
      if (item.href === href) return item;
      if (item.children) {
        const found = search(item.children);
        if (found) return found;
      }
    }
    return undefined;
  }
  return search(mainNav);
}
