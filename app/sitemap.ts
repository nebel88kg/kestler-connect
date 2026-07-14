import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/navigation";
import { getAllNavUrls } from "@/lib/navigation";
import { referenzen } from "@/content/referenzen";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = ["/", "/leistungen", "/branchen", "/referenzen", "/ueber-uns", "/blog", "/kontakt", "/impressum", "/datenschutz"];

  const navUrls = getAllNavUrls();
  const referenzUrls = referenzen.map((r) => `/referenzen/${r.slug}`);
  const blogUrls = blogPosts.map((p) => `/blog/${p.slug}`);

  const allUrls = [...new Set([...staticPages, ...navUrls, ...referenzUrls, ...blogUrls])];

  return allUrls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
