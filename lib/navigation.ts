export const siteConfig = {
  name: "Kestler Connect",
  description:
    "Performance-Marketing, Webseiten und Social Media für Handwerk, Vereine und wachsende kleine und mittelständische Unternehmen.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kestler-connect.de",
  phone: process.env.NEXT_PUBLIC_PHONE || "+491234567890",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "491234567890",
  email: process.env.CONTACT_EMAIL || "info@kestler-connect.de",
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

export interface HubPageContent {
  title: string;
  href: string;
  description: string;
  highlights: string[];
}

/** Hub-Seiten inkl. kurzer Inhalte und nur echte Landingpages als children. */
export const leistungenNav: NavItem = {
  title: "Leistungen",
  href: "/leistungen",
  children: [
    {
      title: "Mitarbeitergewinnung",
      href: "/leistungen/mitarbeitergewinnung",
      description: "Fachkräfte und Bewerber aktiv ansprechen und gewinnen.",
    },
    {
      title: "Leadgewinnung",
      href: "/leistungen/leadgewinnung",
      description: "Qualifizierte Anfragen über Ads und Landingpages.",
    },
    {
      title: "Google Ads",
      href: "/leistungen/google-ads",
      description: "Suchanzeigen mit messbaren Anfragen und klarem ROI.",
      children: [
        {
          title: "Google Ads für Handwerker",
          href: "/leistungen/google-ads/google-ads-fuer-handwerker",
          description: "Mehr Aufträge für Handwerksbetriebe über Google.",
        },
      ],
    },
    {
      title: "Meta Ads",
      href: "/leistungen/meta-ads",
      description: "Facebook- und Instagram-Kampagnen für Leads und Reichweite.",
      children: [
        {
          title: "Mitgliedergewinnung Golfclubs",
          href: "/leistungen/meta-ads/mitgliedergewinnung-golfclubs",
          description: "Neue Mitglieder für Golfclubs gewinnen.",
        },
      ],
    },
    {
      title: "Social Media",
      href: "/leistungen/social-media",
      description: "Content, Reels und Betreuung, die Ihre Marke sichtbar macht.",
    },
    {
      title: "Workshops",
      href: "/leistungen/workshops",
      description: "Kompakte Marketing-Workshops für Startups und Vereine.",
      children: [
        {
          title: "Marketing-Workshop für Startups",
          href: "/leistungen/workshops/marketing-workshop-startups",
          description: "In 5–6 Stunden Klarheit und Handwerkszeug für den Start.",
        },
        {
          title: "Marketing & Sponsoring für Vereine",
          href: "/leistungen/workshops/marketing-sponsoring-vereine",
          description: "Praxis-Workshop zu Sichtbarkeit, Mitgliedern und Sponsoren.",
        },
      ],
    },
    {
      title: "Webseiten",
      href: "/leistungen/webseiten",
      description: "Webdesign und Landingpages, die Besucher zu Kunden machen.",
    },
    {
      title: "SEO",
      href: "/leistungen/seo",
      description: "Gefunden werden bei Google, Maps und KI-Suche.",
      children: [
        {
          title: "Local SEO",
          href: "/leistungen/seo/local-seo",
          description: "Lokale Sichtbarkeit in Google und Google Maps.",
        },
      ],
    },
  ],
};

export const leistungenHubContent: Record<string, HubPageContent> = {
  "google-ads": {
    title: "Google Ads",
    href: "/leistungen/google-ads",
    description:
      "Wir schalten Suchanzeigen, die genau dann erscheinen, wenn potenzielle Kunden nach Ihrer Leistung suchen – mit transparentem Reporting und klarem ROI.",
    highlights: [
      "Lokale und nationale Kampagnen",
      "Tracking von Anrufen und Formularen",
      "Laufende Optimierung nach Kosten pro Anfrage",
      "Landingpages, die aus Klicks Kunden machen",
    ],
  },
  "meta-ads": {
    title: "Meta Ads",
    href: "/leistungen/meta-ads",
    description:
      "Mit Facebook- und Instagram-Anzeigen erreichen wir Ihre Zielgruppe dort, wo sie unterwegs ist – für Leads, Mitarbeiter und Markenbekanntheit.",
    highlights: [
      "Lead-Formulare direkt in Meta",
      "Präzises Targeting nach Region und Interesse",
      "Creatives und Videos aus einer Hand",
      "Messbare Kosten pro Lead oder Bewerbung",
    ],
  },
  "social-media": {
    title: "Social Media",
    href: "/leistungen/social-media",
    description:
      "Wir übernehmen Content, Reels und Betreuung – damit Ihr Auftritt professionell wirkt und regelmäßig Sichtbarkeit erzeugt.",
    highlights: [
      "Redaktionsplan und Content-Produktion",
      "Reels und Kurzvideos für Reichweite",
      "Community-Management",
      "Abstimmung mit Ads und Website",
    ],
  },
  workshops: {
    title: "Workshops",
    href: "/leistungen/workshops",
    description:
      "Kompakte Formate für alle, die noch kein großes Marketing-Budget haben – aber Klarheit, Struktur und umsetzbare nächste Schritte brauchen.",
    highlights: [
      "5–6 Stunden praxisnah und ergebnisorientiert",
      "Ideal für Startups und junge Unternehmen",
      "Eigene Formate für Vereine zu Marketing und Sponsoring",
      "Sofort anwendbares Handwerkszeug statt Theorie",
    ],
  },
  webseiten: {
    title: "Webseiten",
    href: "/leistungen/webseiten",
    description:
      "Moderne Webseiten und Landingpages, die Vertrauen aufbauen und Anfragen generieren – klar, schnell und conversion-stark.",
    highlights: [
      "Webdesign mit Fokus auf Anfragen",
      "Landingpages für Kampagnen",
      "Mobile-first und schnell ladend",
      "Klare Pakete: Basic, Standard, Premium",
      "Einmalzahlung oder monatlich über 12 Monate",
      "Optional Hosting, Wartung & CMS-Zugang",
    ],
  },
  seo: {
    title: "SEO",
    href: "/leistungen/seo",
    description:
      "Wir sorgen dafür, dass Sie bei Google, Maps und zunehmend auch in KI-Suchen gefunden werden – nachhaltig und lokal stark.",
    highlights: [
      "Local SEO und Google Unternehmensprofil",
      "Technische und inhaltliche Optimierung",
      "Branchenspezifische Keywords",
      "Vorbereitung auf KI-Sichtbarkeit",
    ],
  },
};

/** Kurze Liste für Header, Mobile und Footer. */
export const leistungenMenuItems: NavItem[] = [
  {
    title: "Mitarbeitergewinnung",
    href: "/leistungen/mitarbeitergewinnung",
    description: "Fachkräfte und Bewerber aktiv ansprechen und gewinnen.",
  },
  {
    title: "Leadgewinnung",
    href: "/leistungen/leadgewinnung",
    description: "Qualifizierte Anfragen über Ads und Landingpages.",
  },
  {
    title: "Google Ads",
    href: "/leistungen/google-ads",
    description: "Suchanzeigen mit messbarem ROI.",
  },
  {
    title: "Meta Ads",
    href: "/leistungen/meta-ads",
    description: "Facebook- und Instagram-Kampagnen.",
  },
  {
    title: "Social Media",
    href: "/leistungen/social-media",
    description: "Content, Reels und Betreuung.",
  },
  {
    title: "Workshops",
    href: "/leistungen/workshops",
    description: "Kompakte Workshops für Startups und Vereine.",
  },
  {
    title: "Webseiten",
    href: "/leistungen/webseiten",
    description: "Websites und Landingpages, die konvertieren.",
  },
  {
    title: "SEO",
    href: "/leistungen/seo",
    description: "Sichtbarkeit bei Google, Maps und KI.",
  },
];

export const mainNav: NavItem[] = [
  { title: "Startseite", href: "/" },
  {
    title: "Leistungen",
    href: "/leistungen",
    children: leistungenMenuItems,
  },
  { title: "Referenzen", href: "/referenzen" },
  { title: "Über uns", href: "/ueber-uns" },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt", href: "/kontakt" },
];

export const footerNav: NavSection[] = [
  {
    title: "Leistungen",
    items: leistungenMenuItems.map(({ title, href }) => ({ title, href })),
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
    if (item.href !== "/" && item.href !== "/leistungen") {
      result.push({ title: item.title, href: item.href, description: item.description });
    }
    if (item.children) {
      result.push(...flattenNavItems(item.children));
    }
  }
  return result;
}

export function getAllNavUrls(): string[] {
  const urls = [
    ...flattenNavItems(leistungenNav.children || []),
    ...flattenNavItems(mainNav),
  ].map((item) => item.href);
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

  return search([leistungenNav]) || search(mainNav);
}
