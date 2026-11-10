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
      // Leistung × Duisburg: exakte Such-URLs auf die bestehenden Leistungsseiten
      // (H1/Title dort bereits mit Duisburg), damit keine zweite Kopie entsteht.
      // Bewusst keine Redirects für Moers/Krefeld – dort entstehen eigene Seiten.
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
