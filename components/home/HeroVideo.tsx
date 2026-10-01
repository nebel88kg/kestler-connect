"use client";

import { useEffect, useState } from "react";
import { heroPoster } from "@/lib/heroPoster";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/** Video nur laden, wenn Viewport >= 768 px, keine reduzierte Bewegung, kein Datensparmodus. */
function shouldPlayVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia("(min-width: 768px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType && /^(slow-2g|2g|3g)$/.test(conn.effectiveType)) return false;
  return true;
}

/**
 * Hero-Hintergrund: Poster wird sofort (auch serverseitig) gerendert; das Video
 * (~3 MB) wird erst nach der Hydration und nur auf größeren Bildschirmen geladen.
 * Auf Mobilgeräten wird kein Video-Request ausgelöst.
 */
export function HeroVideo() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(shouldPlayVideo());
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      />
      {play && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
