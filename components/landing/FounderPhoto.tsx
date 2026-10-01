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
 * Gemessen am Original: Haare beginnen bei ca. 22 % der Bildhöhe, Kopf/Kinn bei ca. 50 %, Oberkörper bis 100 %;
 * horizontal liegt der Kopf bei ca. 53 % der Breite. Über den Haaren ist viel leerer Hintergrund.
 *
 * Regel: object-position-Y bestimmt bei object-cover, welcher Bildhöhen-Ausschnitt sichtbar ist
 * (Start = Y × Überstand). Hohes Y → Ausschnitt rutscht im Bild nach unten → der leere Bereich oben fällt weg.
 *
 * Hero (ab lg): Rahmen 4:5, volle Bildbreite, sichtbar ca. 83 % der Bildhöhe (Überstand ca. 17 %).
 *   object-position-Y 85 % → Start bei ca. 14 % → sichtbar ca. 14–97 %.
 *   Haare beginnen im Rahmen bei ca. (22−14)/83 ≈ 10 %, Kinn bei ca. 43 %; darunter Schultern/Oberkörper.
 *   Kein Zoom, X mittig.
 *
 * Runde Fotos (Proof-Block, Hero mobil): Quadrat, volle Bildbreite, sichtbar ca. 67 % der Bildhöhe (Überstand ca. 33 %).
 *   object-position-Y 50 % → Start bei ca. 17 % → sichtbar ca. 17–83 %.
 *   Vor dem Zoom: Haare bei ca. 8 %, Kinn bei ca. 50 % des Kreises.
 *   Zoom 1,1× mit Ursprung am oberen Gesichtsbereich (53 % / 30 %), damit die Haare nicht nach oben aus dem
 *   Kreis rutschen: Haare danach bei ca. 6 %, Kinn bei ca. 52 % → Kopf im oberen Drittel bis zur Mitte,
 *   Schultern/Oberkörper darunter, nichts abgeschnitten. -3 % in X zentriert den Kopf (bei 53 % der Breite).
 */
const heroSquareClasses = "object-cover object-[50%_85%]";
const circleClasses = "object-cover object-[50%_50%] origin-[53%_30%] scale-[1.1] -translate-x-[3%]";
const circleClassesMaxLg =
  "max-lg:object-[50%_50%] max-lg:origin-[53%_30%] max-lg:scale-[1.1] max-lg:-translate-x-[3%]";

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
