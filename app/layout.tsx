import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { siteConfig } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";
import { googleBusiness } from "@/lib/googleBusiness";
import { linkedinUrl } from "@/lib/profiles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const agencyDescription =
  "Online-Marketing-Agentur aus Duisburg: Social Media, Google Ads, Meta Ads, SEO und Webseiten für regionale und lokale Unternehmen in Duisburg, im Ruhrgebiet und am Niederrhein.";

export const metadata: Metadata = createMetadata({
  title: "Online-Marketing-Agentur Duisburg | Kestler Connect",
  description: `${agencyDescription} Kostenloses Erstgespräch.`,
  path: "/",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a2332",
};

/** Google-Maps-Eintrag (Google Unternehmensprofil) als kanonische CID-URL. */
const googleMapsCidUrl = `https://maps.google.com/?cid=${googleBusiness.cid}`;

/**
 * Hinweis: Bewusst ohne aggregateRating/review – Google wertet selbst
 * eingebundene Bewertungen für LocalBusiness/Organization nicht als
 * Rich-Result-berechtigt (Self-serving reviews).
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: agencyDescription,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  hasMap: googleMapsCidUrl,
  sameAs: [googleMapsCidUrl, googleBusiness.mapsUrl, siteConfig.social.instagram, linkedinUrl],
  areaServed: [
    { "@type": "City", name: "Duisburg" },
    { "@type": "City", name: "Moers" },
    { "@type": "City", name: "Krefeld" },
    { "@type": "City", name: "Oberhausen" },
    { "@type": "City", name: "Essen" },
    { "@type": "City", name: "Mülheim an der Ruhr" },
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    { "@type": "AdministrativeArea", name: "Niederrhein" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
  ],
  knowsAbout: [
    "Online-Marketing",
    "Social Media Marketing",
    "Social-Media-Agentur",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Local SEO",
    "Website-Erstellung",
  ],
  founder: {
    "@type": "Person",
    name: "Jascha Kestler",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans`}>
        <GoogleTagManager />
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
