import type { BreadcrumbItem } from "@/lib/seo";
import Link from "next/link";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, variant = "light" }: BreadcrumbsProps) {
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-8">
      <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:gap-2 sm:text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className={isDark ? "text-gray-600" : "text-gray-400"}>/</span>}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className={`hover:text-accent transition-colors ${isDark ? "hover:text-white" : ""}`}>
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? `font-medium ${isDark ? "text-white" : "text-anthracite"}` : ""}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
