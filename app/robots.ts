import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/navigation";

/**
 * Such- und KI-Crawler ausdrücklich zulassen (Antwortmaschinen wie ChatGPT,
 * Perplexity, Claude, Gemini/Google-Extended, Bing/Copilot).
 * Standard bleibt: alles erlaubt.
 */
const aiAndSearchCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiAndSearchCrawlers,
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
