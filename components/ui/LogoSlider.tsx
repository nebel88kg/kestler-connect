"use client";

import {
  dnmLogo,
  secproLogo,
  raffelbergLogo,
  startupSchoolLogo,
} from "@/lib/clientLogos";

const logos = [dnmLogo, secproLogo, raffelbergLogo, startupSchoolLogo];

export function LogoSlider() {
  const duplicated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />
      <div className="flex animate-scroll gap-12 whitespace-nowrap">
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.file}-${i}`}
            className="flex h-16 min-w-[180px] items-center justify-center rounded-xl border border-accent/20 bg-white px-6 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              className="h-10 w-auto max-w-[140px] object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
