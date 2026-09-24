"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials, getTestimonialAttribution } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [open, setOpen] = useState(false);
  const { quote, excerpt, logo, referenzSlug } = testimonial;
  const hasMore = Boolean(excerpt && excerpt !== quote);
  const { primary, secondary } = getTestimonialAttribution(testimonial);

  return (
    <Card className="flex h-full flex-col">
      <p className="flex-1 text-sm italic leading-relaxed text-gray-600 sm:text-base">
        &ldquo;{hasMore && !open ? excerpt : quote}&rdquo;
      </p>
      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="mt-4 self-start text-sm font-semibold text-accent transition-colors hover:text-navy"
        >
          {open ? "Weniger anzeigen" : "Weiterlesen"}
        </button>
      )}
      <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
        {logo && (
          <span className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-white px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={36}
              loading="lazy"
              className="h-9 w-auto max-w-[80px] object-contain"
            />
          </span>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-anthracite">{primary}</p>
          {secondary && <p className="text-sm text-gray-500">{secondary}</p>}
          {referenzSlug && (
            <Link
              href={`/referenzen/${referenzSlug}`}
              className="mt-1 inline-block text-sm font-semibold text-accent transition-colors hover:text-navy"
            >
              Case Study ansehen →
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const count = testimonials.length;
  const gridClass =
    count === 1
      ? "mx-auto grid max-w-2xl gap-6"
      : count === 2
        ? "mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
        : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-5xl">
              Kundenstimmen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Was unsere Kunden über die Zusammenarbeit sagen.
            </p>
          </div>
        </ScrollReveal>

        <div className={gridClass}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.company} delay={i * 0.1}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
