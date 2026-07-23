import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { createMetadata, createBreadcrumbsFromPath } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

function renderContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 text-2xl font-bold text-anthracite">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <p key={i} className="mt-4 font-semibold text-anthracite">
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }
    return (
      <p key={i} className="mt-4 text-gray-600 leading-relaxed">
        {block.replace(/\*\*(.*?)\*\*/g, "$1")}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="page-top">
      <article className="container-custom section-padding">
        <Breadcrumbs items={createBreadcrumbsFromPath(`/blog/${slug}`)} />

        <ScrollReveal>
          <span className="mb-4 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
            {post.category}
          </span>
          <h1 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose-custom mx-auto mt-12 max-w-3xl">
            {renderContent(post.content)}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gray-50 p-8 text-center">
            <h2 className="text-xl font-bold text-anthracite">
              {post.slug === "social-media-fuer-vereine"
                ? "Workshop zu Marketing & Sponsoring?"
                : "Fragen zu diesem Thema?"}
            </h2>
            <p className="mt-2 text-gray-600">
              {post.slug === "social-media-fuer-vereine"
                ? "In einem kompakten Workshop erarbeiten wir Sichtbarkeit, Mitgliedergewinnung und Sponsoren-Ansprache für Ihren Verein."
                : "Wir beraten Sie gerne persönlich."}
            </p>
            <Button
              href={
                post.slug === "social-media-fuer-vereine"
                  ? "/leistungen/workshops/marketing-sponsoring-vereine"
                  : "/kontakt"
              }
              className="mt-4"
            >
              {post.slug === "social-media-fuer-vereine"
                ? "Zum Vereins-Workshop"
                : "Kostenloses Strategiegespräch"}
            </Button>
          </div>
        </ScrollReveal>
      </article>
    </div>
  );
}
