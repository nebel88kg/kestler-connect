import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Eigene Marketing-Agentur-Seiten statt /einzugsgebiet/[ort] für die Prioritätsorte.
      // Query-Parameter (z. B. gclid) werden von Next.js bei Redirects automatisch übernommen.
      {
        source: "/einzugsgebiet/duisburg",
        destination: "/marketing-agentur-duisburg",
        permanent: true,
      },
      {
        source: "/einzugsgebiet/krefeld",
        destination: "/marketing-agentur-krefeld",
        permanent: true,
      },
      {
        source: "/einzugsgebiet/moers",
        destination: "/marketing-agentur-moers",
        permanent: true,
      },
      // Nischenseiten Handwerker / Vereine / Golfclubs → passende Hubs (Zielgruppe: KMU).
      {
        source: "/leistungen/google-ads/google-ads-fuer-handwerker",
        destination: "/leistungen/google-ads",
        permanent: true,
      },
      {
        source: "/leistungen/meta-ads/mitgliedergewinnung-golfclubs",
        destination: "/leistungen/meta-ads",
        permanent: true,
      },
      {
        source: "/leistungen/workshops/marketing-sponsoring-vereine",
        destination: "/leistungen/workshops",
        permanent: true,
      },
      // Ältere Branchen-Blogartikel (Handwerk / Vereine) offline – URLs bleiben per 301.
      {
        source: "/blog/social-media-fuer-handwerksbetriebe",
        destination: "/leistungen/social-media",
        permanent: true,
      },
      {
        source: "/blog/mitarbeitergewinnung-im-handwerk",
        destination: "/leistungen/mitarbeitergewinnung",
        permanent: true,
      },
      {
        source: "/blog/social-media-fuer-vereine",
        destination: "/leistungen/social-media",
        permanent: true,
      },
      {
        source: "/blog/sponsoren-finden",
        destination: "/leistungen/workshops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
