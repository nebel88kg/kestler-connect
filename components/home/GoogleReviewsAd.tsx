import { googleBusiness } from "@/lib/googleBusiness";

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < rating ? "text-[#FBBC04]" : "text-gray-200"}`}
          fill="currentColor"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-2" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC04"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      <span className="text-sm font-semibold tracking-tight text-gray-700">Google</span>
    </span>
  );
}

/** Clickable Google-style review preview card (links to Maps listing). */
export function GoogleReviewsAd() {
  const { mapsUrl, rating, reviewCount, reviewPreviews } = googleBusiness;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-6"
      aria-label={`Google-Bewertungen ansehen: ${rating.toFixed(1)} von 5 Sternen aus ${reviewCount} Bewertungen`}
    >
      <div className="flex items-start justify-between gap-3">
        <GoogleMark />
        <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-100 transition group-hover:bg-accent/10 group-hover:text-navy group-hover:ring-accent/20">
          Alle ansehen
        </span>
      </div>

      <div className="mt-4 flex items-end gap-3">
        <p className="text-4xl font-extrabold leading-none tracking-tight text-navy sm:text-5xl">
          {rating.toFixed(1).replace(".", ",")}
        </p>
        <div className="pb-1">
          <StarRow rating={5} />
          <p className="mt-1 text-sm text-gray-500">
            {reviewCount} Google-Bewertungen
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {reviewPreviews.map((review) => (
          <li
            key={review.author}
            className="rounded-xl border border-gray-100 bg-gray-50/80 p-3.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <StarRow rating={review.rating} />
              <span className="text-sm font-semibold text-anthracite">{review.author}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
              &ldquo;{review.text}&rdquo;
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-sm font-semibold text-accent transition group-hover:underline">
        Auf Google Maps öffnen →
      </p>
    </a>
  );
}
