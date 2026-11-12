"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { testimonials, getTestimonialAttribution } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/utils";

const poses = [
  { rotate: -8, lift: 22 },
  { rotate: 6, lift: -26 },
  { rotate: -3, lift: 8 },
  { rotate: 4, lift: -14 },
];

const washes = [
  "radial-gradient(ellipse 90% 58% at 100% 0%, rgba(196,160,82,0.5), transparent 58%), radial-gradient(ellipse 72% 52% at 0% 100%, rgba(86,124,164,0.42), transparent 56%), linear-gradient(158deg, #31445c 0%, #1a2332 46%, #101720 100%)",
  "radial-gradient(ellipse 80% 62% at 0% 100%, rgba(196,160,82,0.46), transparent 58%), radial-gradient(ellipse 64% 48% at 100% 0%, rgba(120,92,48,0.38), transparent 52%), linear-gradient(205deg, #1b2838 0%, #1a2332 42%, #2a384c 100%)",
  "radial-gradient(ellipse 100% 46% at 50% 0%, rgba(212,188,130,0.4), transparent 54%), radial-gradient(ellipse 74% 64% at 100% 100%, rgba(48,86,124,0.5), transparent 54%), linear-gradient(148deg, #121a26 0%, #243246 58%, #1a2332 100%)",
  "radial-gradient(ellipse 78% 70% at 100% 88%, rgba(196,160,82,0.48), transparent 56%), radial-gradient(ellipse 55% 42% at 0% 0%, rgba(255,244,220,0.16), transparent 48%), linear-gradient(192deg, #2a3c52 0%, #161e2c 62%, #1a2332 100%)",
];

function TestimonialCard({
  testimonial,
  rotate,
  lift,
  stack,
  wash,
}: {
  testimonial: Testimonial;
  rotate: number;
  lift: number;
  stack: number;
  wash: string;
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
        "relative -ml-6 w-[25rem] shrink-0 overflow-hidden rounded-[1.75rem] px-8 pt-20 pb-20 text-white shadow-[0_22px_50px_-28px_rgba(18,26,38,0.7)] transition-[transform,box-shadow] duration-500 ease-out first:ml-0 max-md:[zoom:0.55] sm:-ml-12 md:w-[min(84vw,25rem)]",
        hovered && "z-20 shadow-[0_34px_70px_-24px_rgba(18,26,38,0.8)]"
      )}
      style={{
        zIndex: hovered ? 20 : stack,
        background: wash,
        transform: hovered
          ? "rotate(0deg) translateY(-18px) scale(1.045)"
          : `rotate(${rotate}deg) translateY(${lift}px)`,
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          hovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,244,220,0.16), transparent 62%)",
        }}
      />
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
            "flex items-center justify-center px-6 will-change-transform sm:px-10",
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
                  stack={index + 1}
                  wash={washes[index % washes.length]}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
