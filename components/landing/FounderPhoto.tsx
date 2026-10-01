import Image from "next/image";
import { cn } from "@/lib/utils";

interface FounderPhotoProps {
  /**
   * "circle": immer runder Ausschnitt (Proof-Block).
   * "hero": rund auf Mobil, hochformatiger 4:5-Rahmen ab lg (Hero-Karte).
   */
  variant: "circle" | "hero";
  className?: string;
  priority?: boolean;
}

/**
 * Jascha-Foto (/images/JaschaKestler.JPG, 1066×1600, Hochformat 2:3).
 * Gemessen: Kopf liegt bei ca. 19–50 % der Bildhöhe (Mitte ~35 %), horizontal bei ca. 53 %.
 * Ziel: Er erscheint kleiner im Rahmen, mehr Umgebung/Oberkörper sichtbar, Gesicht mittig und nie abgeschnitten.
 *
 * Hero (ab lg): Rahmen 4:5 hochformatig, object-cover → die volle Bildbreite ist sichtbar, von der Bildhöhe ca. 83 %.
 *   object-position-Y 45 % → sichtbarer Bereich ca. 8–91 % der Bildhöhe; der Kopf liegt im Rahmen bei ca. 13–51 %
 *   (oberes Drittel bis Mitte), Schultern und Oberkörper darunter. Kein Zoom, X mittig.
 *
 * Runde Fotos (Proof-Block, Hero mobil): object-cover im Quadrat → volle Bildbreite, ca. 67 % der Bildhöhe sichtbar.
 *   object-position-Y 25 % → sichtbar ca. 8–75 %, Kopf bei ca. 17–63 % des Kreises (Mitte ~40 %).
 *   Leichter Zoom 1,1× mit Ursprung am Gesicht (53 % / 40 %), plus -3 % in X, damit der Kopf (bei 53 % der Breite)
 *   exakt mittig sitzt. Vorher 1,4×.
 */
const heroSquareClasses = "object-cover object-[50%_45%]";
const circleClasses = "object-cover object-[50%_25%] origin-[53%_40%] scale-[1.1] -translate-x-[3%]";
const circleClassesMaxLg =
  "max-lg:object-[50%_25%] max-lg:origin-[53%_40%] max-lg:scale-[1.1] max-lg:-translate-x-[3%]";

export function FounderPhoto({ variant, className, priority = false }: FounderPhotoProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",
        isHero
          ? "h-20 w-20 rounded-full lg:aspect-[4/5] lg:h-auto lg:w-full lg:rounded-xl"
          : "h-24 w-24 rounded-full",
        className,
      )}
    >
      <Image
        src="/images/JaschaKestler.JPG"
        alt="Jascha Kestler – Gründer der Online-Marketing-Agentur Kestler Connect in Duisburg"
        fill
        priority={priority}
        className={isHero ? cn(heroSquareClasses, circleClassesMaxLg) : circleClasses}
        sizes={isHero ? "(max-width: 1024px) 80px, 40vw" : "96px"}
      />
    </div>
  );
}
