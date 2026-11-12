"use client";

import {
  dnmLogo,
  secproLogo,
  raffelbergLogo,
  startupSpaceLogo,
  buddysDuisburgLogo,
  malermeisterKleinauLogo,
  signalFairsichertLogo,
} from "@/lib/clientLogos";
import { cn } from "@/lib/utils";

type SliderLogo = {
  src: string;
  alt: string;
  file: string;
  darkBackground?: boolean;
};

const logos: SliderLogo[] = [
  dnmLogo,
  secproLogo,
  raffelbergLogo,
  startupSpaceLogo,
  buddysDuisburgLogo,
  malermeisterKleinauLogo,
  signalFairsichertLogo,
];

export function LogoSlider() {
  const duplicated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-screen max-w-[100vw] overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-32 lg:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-32 lg:w-48" />
      <div className="logo-marquee flex w-max items-center gap-16 py-2 sm:gap-24">
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.file}-${i}`}
            className="logo-item flex h-14 shrink-0 items-center justify-center sm:h-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={56}
              className={cn(
                "h-10 w-auto max-w-[150px] object-contain grayscale transition-[filter] duration-300 hover:grayscale-0 sm:h-12 sm:max-w-[170px]",
                logo.darkBackground && "invert mix-blend-multiply hover:invert-0 hover:mix-blend-normal"
              )}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-marquee {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </div>
  );
}
