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
 *
 * URSACHE des „Kopf zu tief“-Problems: Bei `object-fit: cover` im 4:5-Rahmen wird das 2:3-Bild auf Rahmenbreite skaliert
 * (Bildhöhe = 1,5 × Breite, Rahmenhöhe = 1,25 × Breite). Es bleibt nur ein Überstand von 0,25 ÷ 1,5 ≈ 16,7 % der Bildhöhe,
 * `object-position` kann das Bild also höchstens um 16,7 % verschieben – egal ob 45 % oder 100 %.
 * Zusätzlich lag die frühere Messung falsch: Die Haare beginnen NICHT bei 19–22 %, sondern bei ca. 32,5 % der Bildhöhe
 * (Pixelmessung: erste dunkle Haarzeile y ≈ 520 von 1600; Kinn ≈ 49 %; Schultern ab ca. 56 %; Kopfmitte horizontal ca. 49–50 %,
 * nicht 53 %). Mit object-position 85 % lag der Haaransatz daher bei (32,5 − 14,2) / 83,3 ≈ 22 % des Rahmens – genau das
 * zeigt die Live-Seite.
 *
 * Lösung: feste Geometrie, unabhängig von der Containerhöhe. Wrapper = feste aspect-ratio + overflow-hidden + relative;
 * das Bild ist absolut positioniert, hat eine Breite in % der Rahmenbreite (höhe = auto, also 1,5 × Bildbreite)
 * und einen festen Versatz. Alle Prozentwerte beziehen sich auf die Rahmenbreite bzw. -höhe.
 *
 * Hero ab lg (Rahmen 4:5 → H = 1,25 W):
 *   Bildbreite 110 % → Bildhöhe 1,65 W; unten bündig (bottom: 0) → top = 1,25 W − 1,65 W = −0,40 W (−32 % der Rahmenhöhe).
 *   Haaransatz im Rahmen: (0,325 × 1,65 − 0,40) ÷ 1,25 ≈ 10,9 % → Kopf beginnt in den obersten ~11 %.
 *   Kinn: (0,495 × 1,65 − 0,40) ÷ 1,25 ≈ 33 %; darunter Schultern und Oberkörper bis zum Rahmenrand (Bild endet exakt unten).
 *   Horizontal: left −5 % (= −(110 − 100) ÷ 2) → Bildmitte = Rahmenmitte; Kopfmitte (49,6 % der Bildbreite) liegt bei
 *   0,496 × 110 − 5 ≈ 49,6 % des Rahmens, also mittig. Bottom-Verankerung ist robust: selbst bei anderer Rahmenhöhe ragt
 *   nie leerer Hintergrund unten ins Bild.
 *
 * Rund (Proof-Block, Hero mobil; Quadrat S × S):
 *   Bildbreite 120 % → Bildhöhe 1,80 S; top −45 % (= −0,45 S), left −10 %.
 *   Haaransatz: 0,325 × 1,80 − 0,45 = 0,135 S → 13,5 % (im oberen Drittel, Kreisrand lässt am Scheitel ~13 % Luft).
 *   Kinn: 0,495 × 1,80 − 0,45 = 0,44 S → 44 %; Schultern ab ca. 55 %; sichtbarer Bildausschnitt ca. 25–81 % der Bildhöhe.
 *   Kopfmitte horizontal: 0,496 × 120 − 10 ≈ 49,5 % → mittig. Kein scale/transform mehr (kein Zusammenspiel mit origin).
 *
 * Geprüft (Headless-Chrome, gleiche CSS-Geometrie auf dem Originalbild): Haaransatz Hero 11,0 % bei 474 px und 340 px
 * Rahmenbreite, rund 13,8–14,6 % bei 96 px und 80 px; Kopfmitte 48–50 %; keine leere Fläche unten oder an den Seiten.
 */
const IMG_W = 1066;
const IMG_H = 1600;

/** Gemeinsame Basis: absolut, nicht durch img{max-width:100%} begrenzt, Höhe folgt dem Seitenverhältnis. */
const imageBase = "absolute h-auto max-w-none";
/** Rund: Bild 120 % der Rahmenbreite, left −10 %, top −45 %. */
const circleGeometry = "w-[120%] -left-[10%] -top-[45%]";
/** Hero ab lg (4:5): Bild 110 % der Rahmenbreite, left −5 %, unten bündig. */
const heroLgGeometry = "lg:w-[110%] lg:-left-[5%] lg:top-auto lg:bottom-0";

export function FounderPhoto({ variant, className, priority = false }: FounderPhotoProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",
        isHero
          ? "h-20 w-20 rounded-full lg:aspect-[4/5] lg:h-auto lg:w-full lg:rounded-xl"
          : "aspect-square w-24 rounded-full",
        className,
      )}
    >
      <Image
        src="/images/JaschaKestler.JPG"
        alt="Jascha Kestler – Gründer der Online-Marketing-Agentur Kestler Connect in Duisburg"
        width={IMG_W}
        height={IMG_H}
        priority={priority}
        className={cn(imageBase, circleGeometry, isHero && heroLgGeometry)}
        sizes={isHero ? "(max-width: 1024px) 100px, 45vw" : "116px"}
      />
    </div>
  );
}
