import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${slug}`,
  });
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const isInternal = href.startsWith("/");
      nodes.push(
        <Link
          key={key++}
          href={href}
          className="font-semibold text-accent underline-offset-2 hover:underline"
          {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[2]}
        </Link>
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-anthracite">
          {match[4]}
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderContent(content: string) {
  const paragraphs = content.split("\n\n");

  return paragraphs.map((block, i) => {
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 text-xl font-bold text-anthracite">
          {block.replace("### ", "")}
        </h3>
      );
    }

    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 text-2xl font-bold text-anthracite">
          {block.replace("## ", "")}
        </h2>
      );
    }

    const lines = block.split("\n");
    const isBulletList = lines.every((line) => line.trim().startsWith("- "));
    if (isBulletList) {
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          {lines.map((line, j) => (
            <li key={j} className="leading-relaxed">
              {renderInline(line.replace(/^\s*-\s*/, ""))}
            </li>
          ))}
        </ul>
      );
    }

    const isNumberedList = lines.every((line) => /^\d+\.\s/.test(line.trim()));
    if (isNumberedList) {
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-5 text-gray-600">
          {lines.map((line, j) => (
            <li key={j} className="leading-relaxed">
              {renderInline(line.replace(/^\s*\d+\.\s*/, ""))}
            </li>
          ))}
        </ol>
      );
    }

    if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
      return (
        <p key={i} className="mt-6 font-semibold text-anthracite">
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }

    return (
      <p key={i} className="mt-4 leading-relaxed text-gray-600">
        {renderInline(block)}
      </p>
    );
  });
}

const ctaBySlug: Record<
  string,
  { title: string; text: string; href: string; button: string }
> = {
  "social-media-fuer-vereine": {
    title: "Workshop zu Marketing & Sponsoring?",
    text: "In einem kompakten Workshop erarbeiten wir Sichtbarkeit, Mitgliedergewinnung und Sponsoren-Ansprache für Ihren Verein.",
    href: "/leistungen/workshops/marketing-sponsoring-vereine",
    button: "Zum Vereins-Workshop",
  },
  "sponsoren-finden": {
    title: "Jetzt Sponsoren professionell gewinnen",
    text: "Von der Website über SEO bis Social Media und Google Ads – wir helfen Ihnen, für Sponsoren attraktiv zu werden.",
    href: "/kontakt",
    button: "Kostenloses Erstgespräch",
  },
  "google-ads-vorteile": {
    title: "Jetzt mehr Kunden über Google gewinnen",
    text: "Wir planen, richten ein und optimieren Ihre Google Ads Kampagnen – transparent, datenbasiert und auf Ihre Ziele abgestimmt.",
    href: "/kontakt",
    button: "Kostenloses Erstgespräch",
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const cta = ctaBySlug[slug] ?? {
    title: "Fragen zu diesem Thema?",
    text: "Wir beraten Sie gerne persönlich.",
    href: "/kontakt",
    button: "Kostenloses Strategiegespräch",
  };

  return (
    <div className="page-top">
      <article className="container-custom section-padding">
        <Breadcrumbs items={createBreadcrumbsFromPath(`/blog/${slug}`)} />

        <ScrollReveal>
          <span className="mb-4 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
            {post.category}
          </span>
          <h1 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">
            {post.title}
          </h1>
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
            <h2 className="text-xl font-bold text-anthracite">{cta.title}</h2>
            <p className="mt-2 text-gray-600">{cta.text}</p>
            <Button href={cta.href} className="mt-4">
              {cta.button}
            </Button>
          </div>
        </ScrollReveal>
      </article>
    </div>
  );
}
