"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ items, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-x-0 top-full border-t border-gray-100 bg-white shadow-xl"
      onMouseLeave={onClose}
    >
      <div className="container-custom py-10">
        <div
          className={cn(
            "grid gap-x-10 gap-y-8",
            items.length <= 4
              ? "grid-cols-2 md:grid-cols-4"
              : "grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
          )}
        >
          {items.map((section) => (
            <div key={section.title} className="min-w-0">
              <Link
                href={section.href}
                className="mb-3 block border-b border-gray-100 pb-2 text-sm font-bold uppercase tracking-wide text-anthracite transition-colors hover:text-accent"
                onClick={onClose}
              >
                {section.title}
              </Link>
              {section.children && (
                <ul className="space-y-2.5">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block text-sm leading-snug text-gray-600 transition-colors hover:text-accent"
                        onClick={onClose}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
