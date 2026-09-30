import { googleBusiness } from "@/lib/googleBusiness";
import { cn } from "@/lib/utils";

interface ReviewBadgeProps {
  tone?: "light" | "dark";
  className?: string;
}

/** Kompakter Verweis auf die öffentlichen Google-Bewertungen (ohne Review-Schema). */
export function ReviewBadge({ tone = "light", className }: ReviewBadgeProps) {
  const { mapsUrl, rating, reviewCount } = googleBusiness;
  const ratingText = rating.toFixed(1).replace(".", ",");
  const dark = tone === "dark";

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Google-Bewertungen ansehen: ${ratingText} von 5 Sternen, ${reviewCount} Bewertungen`}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        dark
          ? "border-white/20 text-gray-100 hover:border-accent hover:text-white"
          : "border-gray-200 text-anthracite hover:border-accent-dark",
        className
      )}
    >
      <span aria-hidden="true" className="text-[#FBBC04]">
        ★★★★★
      </span>
      <span>
        {ratingText} · {reviewCount} Google-Bewertungen
      </span>
    </a>
  );
}
