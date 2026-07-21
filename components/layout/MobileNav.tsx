"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { LogoText } from "./LogoText";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setExpanded(null);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl safe-top safe-bottom">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-4 py-3">
          <LogoText variant="dark" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="touch-target flex items-center justify-center rounded-full text-navy hover:bg-gray-100"
            aria-label="Menü schließen"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-2">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-gray-100 last:border-0">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between py-3 text-left font-medium text-navy"
                    onClick={() =>
                      setExpanded(expanded === item.title ? null : item.title)
                    }
                    aria-expanded={expanded === item.title}
                  >
                    {item.title}
                    <svg
                      className={cn(
                        "h-5 w-5 shrink-0 text-accent transition-transform",
                        expanded === item.title && "rotate-180"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expanded === item.title && (
                    <div className="space-y-1 pb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-gray-50"
                          onClick={onClose}
                        >
                          <span className="block text-sm font-semibold text-navy">{child.title}</span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="mt-1 block px-3 py-2 text-sm font-semibold text-accent"
                        onClick={onClose}
                      >
                        Alle Leistungen ansehen →
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center py-3 font-medium text-navy"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t border-gray-100 p-4">
          <Button href="/kontakt" className="w-full" size="md" onClick={onClose}>
            Kostenloses Strategiegespräch
          </Button>
        </div>
      </div>
    </div>
  );
}
