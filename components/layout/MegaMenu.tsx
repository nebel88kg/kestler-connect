"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/navigation";
import { splitLeistungen } from "@/lib/serviceMenu";

interface MegaMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  overviewHref?: string;
}

export function MegaMenu({ items, isOpen, onClose, overviewHref = "/leistungen" }: MegaMenuProps) {
  if (!isOpen) return null;

  // Kernleistungen prominent, alle übrigen Leistungen eingeklappt (URLs bleiben erhalten).
  const { core, more } = splitLeistungen(items);
  const primary = core.length > 0 ? core : items;
  const extra = core.length > 0 ? more : [];

  return (
    // pt-2 = unsichtbare Brücke ohne Hover-Lücke zum Trigger
    <div className="absolute left-0 top-full z-50 w-[22rem] pt-2">
      <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
        <ul>
          {primary.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-navy/[0.04]"
                onClick={onClose}
              >
                <span className="block text-sm font-semibold text-navy group-hover:text-accent-dark">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs leading-snug text-gray-600">
                    {item.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {extra.length > 0 && (
          <details className="group mt-1 border-t border-gray-100 px-1 pt-1">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-2 py-2 text-sm font-semibold text-navy hover:bg-navy/[0.04]">
              Weitere Leistungen
              <span aria-hidden="true" className="text-accent-dark transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="pb-1">
              {extra.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-navy/[0.04] hover:text-navy"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        )}
        <div className="mt-1 border-t border-gray-100 px-3 py-2.5">
          <Link
            href={overviewHref}
            className="text-sm font-semibold text-accent-dark transition-colors hover:text-navy"
            onClick={onClose}
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
}
