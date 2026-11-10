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
      // Leistung × Ort: Keyword-URLs auf die jeweiligen Leistungsseiten.
      // Duisburg zeigt auf die Hubs (Title/H1 bereits mit Duisburg).
      // Moers und Krefeld zeigen auf die eigenen Ortsseiten.
      {
        source: "/social-media-agentur-duisburg",
        destination: "/leistungen/social-media",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-duisburg",
        destination: "/leistungen/meta-ads",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-duisburg",
        destination: "/leistungen/google-ads",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-moers",
        destination: "/leistungen/social-media/moers",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-moers",
        destination: "/leistungen/meta-ads/moers",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-moers",
        destination: "/leistungen/google-ads/moers",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-krefeld",
        destination: "/leistungen/social-media/krefeld",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-krefeld",
        destination: "/leistungen/meta-ads/krefeld",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-krefeld",
        destination: "/leistungen/google-ads/krefeld",
        statusCode: 301,
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
