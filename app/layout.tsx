import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/navigation";
import { createMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Social Media Agentur Duisburg | Performance Marketing | Kestler Connect",
  description:
    "Social-Media-Agentur und Performance Marketing aus Duisburg für regionale und lokale Unternehmen: Social Media Marketing, Google Ads, Meta Ads und Website-Erstellung.",
  path: "/",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a2332",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
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
  areaServed: [
    { "@type": "City", name: "Duisburg" },
    { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
  ],
  knowsAbout: [
    "Social Media Marketing",
    "Social-Media-Agentur",
    "Performance Marketing",
    "Google Ads",
    "Meta Ads",
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
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
