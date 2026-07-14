import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/content/blog";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Blog & Wissen",
  description: "Tipps und Wissen rund um Online-Marketing, SEO, Google Ads und Social Media.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Blog" }]} />
        <h1 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">Blog & Wissen</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Praxiswissen für Ihr Online-Marketing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full">
                  <span className="mb-3 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-anthracite">{post.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString("de-DE")}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
