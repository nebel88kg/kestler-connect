"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { testimonials, getTestimonialAttribution } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/utils";

const poses = [
  { rotate: -8, lift: 22 },
  { rotate: 6, lift: -26 },
];

function TestimonialCard({
  testimonial,
  rotate,
  lift,
}: {
  testimonial: Testimonial;
  rotate: number;
  lift: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const { quote, excerpt, referenzSlug } = testimonial;
  const hasMore = Boolean(excerpt && excerpt !== quote);
  const text = hasMore && !open ? excerpt : quote;
  const { primary, secondary } = getTestimonialAttribution(testimonial);

  return (
    <figure
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative w-[25rem] shrink-0 rounded-[1.75rem] bg-navy px-8 pt-20 pb-20 text-white shadow-[0_22px_50px_-28px_rgba(18,26,38,0.7)] transition-[transform,box-shadow,background-color] duration-500 ease-out max-md:[zoom:0.55] md:w-[min(84vw,25rem)]",
        hovered && "z-20 bg-navy-light shadow-[0_34px_70px_-24px_rgba(18,26,38,0.8)]"
      )}
      style={{
        transform: hovered
          ? "rotate(0deg) translateY(-18px) scale(1.045)"
          : `rotate(${rotate}deg) translateY(${lift}px)`,
      }}
    >
      <span
        className="pointer-events-none absolute top-5 right-6 flex h-14 w-16 items-start justify-end overflow-hidden text-white/25"
        aria-hidden="true"
      >
        <span className="font-serif text-7xl leading-none">“</span>
      </span>
      <blockquote className="relative z-10 pr-6">
        <p className="text-lg leading-snug">{text}</p>
      </blockquote>
      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="mt-4 text-sm font-medium text-white/80 underline underline-offset-4"
        >
          {open ? "Weniger anzeigen" : "Weiterlesen"}
        </button>
      )}
      <figcaption className="relative z-10 mt-8">
        <div className="font-semibold">{primary}</div>
        {secondary ? <div className="mt-1 text-sm text-white/60">{secondary}</div> : null}
        {referenzSlug ? (
          <Link
            href={`/referenzen/${referenzSlug}`}
            className="mt-3 inline-block text-sm text-accent-muted underline-offset-4 hover:underline"
          >
            Case Study
          </Link>
        ) : null}
      </figcaption>
      <span
        className="pointer-events-none absolute bottom-5 left-6 flex h-14 w-16 items-end overflow-hidden text-white/25"
        aria-hidden="true"
      >
        <span className="font-serif text-7xl leading-none">”</span>
      </span>
    </figure>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);

    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      if (media.matches) {
        track.style.transform = "";
        return;
      }
      const rect = section.getBoundingClientRect();
      const total = window.innerHeight + section.offsetHeight;
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / total, 0), 1);
      const distance = window.innerWidth * 0.42;
      const x = distance - progress * distance * 2;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-white py-16 sm:py-24">
      <h2 className="px-4 text-center font-display text-4xl text-navy sm:text-5xl lg:text-6xl">
        Kundenstimmen
      </h2>
      <div className="mt-12 sm:mt-16">
        <div
          ref={trackRef}
          className={cn(
            "flex items-center justify-center gap-6 px-6 will-change-transform sm:gap-10 sm:px-10",
            reduced && "mx-auto w-full max-w-6xl flex-wrap"
          )}
        >
            {testimonials.map((testimonial, index) => {
              const pose = poses[index % poses.length];
              return (
                <TestimonialCard
                  key={testimonial.company}
                  testimonial={testimonial}
                  rotate={pose.rotate}
                  lift={pose.lift}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
