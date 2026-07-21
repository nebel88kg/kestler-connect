"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/navigation";

interface MegaMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  overviewHref?: string;
}

export function MegaMenu({ items, isOpen, onClose, overviewHref = "/leistungen" }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    // pt-2 = unsichtbare Brücke ohne Hover-Lücke zum Trigger
    <div className="absolute left-0 top-full z-50 w-[22rem] pt-2">
      <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-navy/[0.04]"
                onClick={onClose}
              >
                <span className="block text-sm font-semibold text-navy group-hover:text-accent">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                    {item.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-1 border-t border-gray-100 px-3 py-2.5">
          <Link
            href={overviewHref}
            className="text-sm font-semibold text-accent transition-colors hover:text-navy"
            onClick={onClose}
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
}
