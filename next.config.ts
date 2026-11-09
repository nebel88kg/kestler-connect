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
      // Duisburg hat keine /einzugsgebiet-Seite, sondern die eigene Seite /marketing-agentur-duisburg.
      // Query-Parameter (z. B. gclid) werden von Next.js bei Redirects automatisch übernommen.
      {
        source: "/einzugsgebiet/duisburg",
        destination: "/marketing-agentur-duisburg",
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
    ];
  },
};

export default nextConfig;
