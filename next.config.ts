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
      {
        source: "/social-media-agentur-oberhausen",
        destination: "/leistungen/social-media/oberhausen",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-oberhausen",
        destination: "/leistungen/meta-ads/oberhausen",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-oberhausen",
        destination: "/leistungen/google-ads/oberhausen",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-muelheim-an-der-ruhr",
        destination: "/leistungen/social-media/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-muelheim-an-der-ruhr",
        destination: "/leistungen/meta-ads/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-muelheim-an-der-ruhr",
        destination: "/leistungen/google-ads/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-muelheim",
        destination: "/leistungen/social-media/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-muelheim",
        destination: "/leistungen/meta-ads/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-muelheim",
        destination: "/leistungen/google-ads/muelheim-an-der-ruhr",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-dinslaken",
        destination: "/leistungen/social-media/dinslaken",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-dinslaken",
        destination: "/leistungen/meta-ads/dinslaken",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-dinslaken",
        destination: "/leistungen/google-ads/dinslaken",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-essen",
        destination: "/leistungen/social-media/essen",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-essen",
        destination: "/leistungen/meta-ads/essen",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-essen",
        destination: "/leistungen/google-ads/essen",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-duesseldorf",
        destination: "/leistungen/social-media/duesseldorf",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-duesseldorf",
        destination: "/leistungen/meta-ads/duesseldorf",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-duesseldorf",
        destination: "/leistungen/google-ads/duesseldorf",
        statusCode: 301,
      },
      {
        source: "/social-media-agentur-dusseldorf",
        destination: "/leistungen/social-media/duesseldorf",
        statusCode: 301,
      },
      {
        source: "/meta-ads-agentur-dusseldorf",
        destination: "/leistungen/meta-ads/duesseldorf",
        statusCode: 301,
      },
      {
        source: "/google-ads-agentur-dusseldorf",
        destination: "/leistungen/google-ads/duesseldorf",
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
