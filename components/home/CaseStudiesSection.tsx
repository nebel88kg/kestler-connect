"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { referenzen } from "@/content/referenzen";
import { cn } from "@/lib/utils";

type Project = {
  slug: string;
  title: string;
  industry: string;
  video?: string;
};

const slides: Project[] = [
  ...referenzen.map(({ slug, title, industry, video }) => ({ slug, title, industry, video })),
  {
    slug: "malermeister-kleinau",
    title: "Malermeister Kleinau",
    industry: "Maler",
    video: "/videos/references/kleinau.mp4",
  },
  {
    slug: "buddys-duisburg",
    title: "Buddy's Duisburg",
    industry: "",
    video: "/videos/references/buddys-sketch.mp4",
  },
  {
    slug: "alltagsmeister",
    title: "Alltagsmeister",
    industry: "",
    video: "/videos/references/alltagsmeister.mp4",
  },
];

const LOOP_MS = 24000;
const SLOW_SPEED = 0.5;

function ProjectSlide({
  project,
  tabbable,
  load,
  play,
  onActiveChange,
  onWatch,
}: {
  project: Project;
  tabbable: boolean;
  load: boolean;
  play: boolean;
  onActiveChange: (active: boolean) => void;
  onWatch: (project: Project, trigger: HTMLElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [frameReady, setFrameReady] = useState(false);
  const activeRef = useRef(false);
  const pointer = useRef(false);
  const focused = useRef(false);
  const shouldPlayRef = useRef(false);
  const pausingRef = useRef(false);

  useEffect(() => {
    if (load) setMounted(true);
  }, [load]);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video || !mounted || failed) return;

    const apply = (visible: boolean) => {
      const should = play && visible;
      shouldPlayRef.current = should;
      if (should) {
        video.muted = true;
        void video.play().catch(() => {});
        return;
      }
      if (!video.paused) {
        pausingRef.current = true;
        video.pause();
        pausingRef.current = false;
      }
    };

    let lastResume = 0;
    const onPause = () => {
      if (pausingRef.current || !shouldPlayRef.current) return;
      const now = performance.now();
      if (now - lastResume < 500) return;
      lastResume = now;
      video.muted = true;
      void video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(([entry]) => apply(entry.isIntersecting), {
      rootMargin: "120px",
      threshold: 0.25,
    });
    observer.observe(frame);
    video.addEventListener("pause", onPause);

    return () => {
      shouldPlayRef.current = false;
      observer.disconnect();
      video.removeEventListener("pause", onPause);
    };
  }, [play, mounted, failed]);

  const sync = () => {
    const next = pointer.current || focused.current;
    if (activeRef.current === next) return;
    activeRef.current = next;
    setActive(next);
    onActiveChange(next);
  };

  const frame = (
    <div
      ref={frameRef}
      className={cn(
        "relative aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-navy-light transition-[background-color,box-shadow] duration-500",
        active && "bg-[#314158] shadow-[0_28px_50px_-22px_rgba(0,0,0,0.7)]"
      )}
    >
      {project.video ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.video.replace(/\.mp4$/, ".jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      {project.video && mounted && !failed ? (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.video.replace(/\.mp4$/, ".jpg")}
          muted
          loop
          playsInline
          preload={tabbable && load ? "auto" : "none"}
          onLoadedData={() => setFrameReady(true)}
          onError={() => setFailed(true)}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover",
            frameReady ? "opacity-100" : "opacity-0"
          )}
        />
      ) : null}
    </div>
  );

  const className = cn(
    "relative block w-[min(64vw,300px)] shrink-0 origin-center text-left transition-transform duration-500 ease-out",
    active && "z-20 -translate-y-3 scale-[1.05]"
  );

  const pointerHandlers = {
    onMouseEnter: () => {
      pointer.current = true;
      sync();
    },
    onMouseLeave: () => {
      pointer.current = false;
      sync();
    },
    onFocus: () => {
      focused.current = true;
      sync();
    },
    onBlur: () => {
      focused.current = false;
      sync();
    },
  };

  if (project.video && !failed) {
    return (
      <button
        type="button"
        tabIndex={tabbable ? undefined : -1}
        aria-label={`${project.title} mit Ton ansehen`}
        onClick={(event) => onWatch(project, event.currentTarget)}
        className={className}
        {...pointerHandlers}
      >
        {frame}
      </button>
    );
  }

  const caseHref = referenzen.some((item) => item.slug === project.slug)
    ? `/referenzen/${project.slug}`
    : null;

  if (!caseHref) {
    return (
      <div className={className} {...pointerHandlers}>
        {frame}
      </div>
    );
  }

  return (
    <Link
      href={caseHref}
      tabIndex={tabbable ? undefined : -1}
      aria-label={project.title}
      className={className}
      {...pointerHandlers}
    >
      {frame}
    </Link>
  );
}

function WatchDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    closeRef.current?.focus();
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.currentTime = 0;
      void video.play().catch(() => {});
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="flex max-h-[92vh] w-full max-w-sm flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4 text-white">
          <p className="font-display text-xl sm:text-2xl">{project.title}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-navy"
          >
            Schließen
          </button>
        </div>
        <video
          ref={videoRef}
          src={project.video}
          controls
          playsInline
          autoPlay
          className="aspect-[9/16] w-full rounded-[1.6rem] bg-black object-contain"
        />
      </div>
    </div>,
    document.body
  );
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverCount = useRef(0);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [watching, setWatching] = useState<Project | null>(null);

  const onActiveChange = (active: boolean) => {
    hoverCount.current += active ? 1 : -1;
    if (hoverCount.current < 0) hoverCount.current = 0;
  };

  const onWatch = (project: Project, trigger: HTMLElement) => {
    returnFocus.current = trigger;
    setWatching(project);
  };

  const closeWatch = useCallback(() => {
    setWatching(null);
    returnFocus.current?.focus();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);

    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: `${window.innerHeight}px` }
    );
    if (section) observer.observe(section);

    return () => {
      media.removeEventListener("change", apply);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = performance.now();
    let offset = 0;
    let speed = 1;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const track = trackRef.current;
      const dt = Math.min(now - last, 50);
      last = now;
      if (!track || media.matches) return;

      const target = hoverCount.current > 0 ? SLOW_SPEED : 1;
      speed += (target - speed) * Math.min(1, dt / 220);

      const loop = track.scrollWidth / 2;
      if (loop <= 0) return;
      offset = (offset + dt * (loop / LOOP_MS) * speed) % loop;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const play = inView && !reduced && !watching;

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden rounded-[4rem] bg-navy">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">Unsere Arbeit</h2>
          <p className="max-w-sm text-base leading-snug text-white/70">
            Echte Ergebnisse für echte Unternehmen – Dämmstoffe, Maler, Bildung und Golf.
          </p>
        </div>
      </div>

      <div className="case-viewport overflow-hidden py-8">
        <div ref={trackRef} className="case-marquee flex w-max will-change-transform">
          <div className="flex gap-5 pr-5">
            {slides.map((project) => (
              <ProjectSlide
                key={project.slug}
                project={project}
                tabbable
                load={inView}
                play={play}
                onActiveChange={onActiveChange}
                onWatch={onWatch}
              />
            ))}
          </div>
          <div className="case-marquee-copy flex gap-5 pr-5" aria-hidden>
            {slides.map((project) => (
              <ProjectSlide
                key={`${project.slug}-loop`}
                project={project}
                tabbable={false}
                load={inView}
                play={play}
                onActiveChange={onActiveChange}
                onWatch={onWatch}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center px-4 sm:mt-14">
        <Button
          href="/referenzen"
          size="md"
          variant="outline"
          className="border-white text-white shadow-none hover:bg-white hover:text-navy"
        >
          Alle Referenzen
        </Button>
      </div>

      {watching ? <WatchDialog project={watching} onClose={closeWatch} /> : null}

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .case-viewport {
            overflow-x: auto;
          }
          .case-marquee-copy {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
