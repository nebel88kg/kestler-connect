"use client";

import { useEffect, useRef } from "react";

/**
 * Hero-Hintergrund: Das Video steht sofort im HTML (auch serverseitig gerendert) und
 * startet muted/autoplay/loop auf Desktop UND Mobil. Es gibt bewusst kein verpixeltes
 * Mini-Poster mehr; bis das erste Frame geladen ist, zeigt der Hero den dunklen
 * Navy-Hintergrund mit Verlauf. Nur "prefers-reduced-motion" stoppt das Video.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (mq.matches) {
        video.pause();
        return;
      }
      // React setzt "muted" nicht zuverlässig als Property (iOS/Safari) – explizit setzen.
      video.muted = true;
      void video.play().catch(() => {
        /* Autoplay blockiert (z. B. Stromsparmodus) – der dunkle Hintergrund bleibt stehen. */
      });
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    >
      <source src="/videos/hero.mp4#t=0.001" type="video/mp4" />
    </video>
  );
}
