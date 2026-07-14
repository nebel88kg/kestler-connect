"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <span className="font-bold text-anthracite">Menü</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Menü schließen"
          >
            ✕
          </button>
        </div>
        <nav className="p-4">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-gray-100">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 font-medium text-anthracite"
                    onClick={() =>
                      setExpanded(expanded === item.title ? null : item.title)
                    }
                  >
                    {item.title}
                    <span className={cn("transition-transform", expanded === item.title && "rotate-180")}>
                      ▼
                    </span>
                  </button>
                  {expanded === item.title && (
                    <div className="pb-4 pl-4">
                      {item.children.map((section) => (
                        <div key={section.href} className="mb-4">
                          <Link
                            href={section.href}
                            className="mb-2 block text-sm font-semibold text-anthracite"
                            onClick={onClose}
                          >
                            {section.title}
                          </Link>
                          {section.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-1 text-sm text-gray-600"
                              onClick={onClose}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-4 font-medium text-anthracite"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="p-4">
          <Button href="/kontakt" className="w-full" onClick={onClose}>
            Kostenloses Strategiegespräch
          </Button>
        </div>
      </div>
    </div>
  );
}
