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
 * Jascha-Foto (/images/JaschaKestler.JPG, 1066×1600, Hochformat 2:3).
 * Gemessen: Kopf liegt bei ca. 19–50 % der Bildhöhe (Mitte ~35 %), horizontal bei ca. 53 %; darüber viel Hintergrund.
 *
 * Eine höhere object-position-Y schiebt das Bild im Rahmen nach oben, der Kopf sitzt dadurch höher im Ausschnitt.
 * - Quadratischer Rahmen (Hero ab lg): object-position 50 % 28 % → sichtbar ca. 9–76 % der Bildhöhe,
 *   Kopf liegt im oberen/mittleren Drittel, Kopf + Schultern.
 * - Kleiner runder Ausschnitt: object-position 50 % 18 % plus 1,4× Zoom (Ursprung am Gesicht), damit das Gesicht
 *   den Kreis füllt und nicht zu tief sitzt.
 */
const squareClasses = "object-cover object-[50%_28%]";
const circleZoomClasses = "object-[50%_18%] origin-[52%_48%] scale-[1.4] -translate-x-[2%]";

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
            ? "max-lg:object-[50%_18%] max-lg:origin-[52%_48%] max-lg:scale-[1.4] max-lg:-translate-x-[2%]"
            : circleZoomClasses,
        )}
        sizes={isHero ? "(max-width: 1024px) 80px, 40vw" : "96px"}
      />
    </div>
  );
}
