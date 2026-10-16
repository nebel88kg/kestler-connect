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
    ];
  },
};

export default nextConfig;
