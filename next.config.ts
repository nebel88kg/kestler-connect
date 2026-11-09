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
    ];
  },
};

export default nextConfig;
