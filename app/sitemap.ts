import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/navigation";
import { getAllContentPaths } from "@/lib/content";
import { referenzen } from "@/content/referenzen";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "/",
    "/leistungen",
    "/referenzen",
    "/ueber-uns",
    "/blog",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const contentUrls = getAllContentPaths();
  const referenzUrls = referenzen.map((r) => `/referenzen/${r.slug}`);
  const blogUrls = blogPosts.map((p) => `/blog/${p.slug}`);

  const allUrls = [...new Set([...staticPages, ...contentUrls, ...referenzUrls, ...blogUrls])];

  return allUrls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
