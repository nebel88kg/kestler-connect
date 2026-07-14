"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
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
          <Image
            src="/images/logo.png"
            alt="Kestler Connect"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
          />
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
                    <div className="pb-3 pl-2">
                      {item.children.map((section) => (
                        <div key={section.href} className="mb-4 last:mb-2">
                          <Link
                            href={section.href}
                            className="mb-2 block min-h-10 py-1 text-sm font-semibold text-navy"
                            onClick={onClose}
                          >
                            {section.title}
                          </Link>
                          <div className="space-y-1 border-l-2 border-accent/30 pl-3">
                            {section.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block min-h-10 py-2 text-sm leading-snug text-gray-600"
                                onClick={onClose}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
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
