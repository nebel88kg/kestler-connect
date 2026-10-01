import Image from "next/image";
import { cn } from "@/lib/utils";

interface FounderPhotoProps {
  /**
   * "circle": immer runder Ausschnitt (Proof-Block).
   * "hero": rund auf Mobil, quadratischer Rahmen ab lg (Hero-Karte).
   */
  variant: "circle" | "hero";
  className?: string;
  priority?: boolean;
}

/**
 * Jascha-Foto (/images/JaschaKestler.JPG, 1066×1600, Hochformat).
 * Das Gesicht liegt bei ca. 19–49 % der Bildhöhe (Augen ~33 %) und leicht rechts der Mitte (~52 %); oben ist viel
 * Hintergrund. Mit `object-cover` und der Standardposition oben/mittig rutscht das Gesicht aus dem Ausschnitt.
 *
 * - Quadratischer Rahmen: object-position 50 % 22 % → Kopf + Schultern, Gesicht leicht über der Mitte.
 * - Kleiner runder Ausschnitt: zusätzlich 1,4× vergrößert (Ursprung am Gesicht), damit das Gesicht den Kreis füllt
 *   und mittig sitzt.
 */
const squareClasses = "object-cover object-[50%_22%]";
const circleZoomClasses = "object-[50%_5%] origin-[52%_48%] scale-[1.4] -translate-x-[2%]";

export function FounderPhoto({ variant, className, priority = false }: FounderPhotoProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",
        isHero
          ? "h-20 w-20 rounded-full lg:aspect-square lg:h-auto lg:w-full lg:rounded-xl"
          : "h-24 w-24 rounded-full",
        className,
      )}
    >
      <Image
        src="/images/JaschaKestler.JPG"
        alt="Jascha Kestler – Gründer der Online-Marketing-Agentur Kestler Connect in Duisburg"
        fill
        priority={priority}
        className={cn(
          squareClasses,
          isHero
            ? "max-lg:object-[50%_5%] max-lg:origin-[52%_48%] max-lg:scale-[1.4] max-lg:-translate-x-[2%]"
            : circleZoomClasses,
        )}
        sizes={isHero ? "(max-width: 1024px) 80px, 40vw" : "96px"}
      />
    </div>
  );
}
