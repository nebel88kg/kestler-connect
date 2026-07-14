"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const useLightStyle = scrolled || megaOpen !== null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(null);
  }, [pathname]);

  const openMegaItems = mainNav.find((item) => item.title === megaOpen)?.children;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          useLightStyle
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-navy/80 backdrop-blur-md"
        )}
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Kestler Connect"
                width={140}
                height={48}
                className="h-8 w-auto object-contain sm:h-10 lg:h-12"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {mainNav.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    onMouseEnter={() => setMegaOpen(item.title)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                        megaOpen === item.title
                          ? "text-accent"
                          : useLightStyle
                            ? "text-navy hover:text-accent"
                            : "text-white/90 hover:text-accent"
                      )}
                      aria-expanded={megaOpen === item.title}
                    >
                      {item.title}
                      <svg
                        className={cn(
                          "h-4 w-4 transition-transform",
                          megaOpen === item.title && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                      useLightStyle
                        ? "text-navy hover:text-accent"
                        : "text-white/90 hover:text-accent"
                    )}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Button href="/kontakt" size="sm" className="hidden sm:inline-flex">
                Strategiegespräch
              </Button>
              <button
                type="button"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
                  useLightStyle ? "text-navy" : "text-white"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Menü öffnen"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {openMegaItems && (
          <MegaMenu
            items={openMegaItems}
            isOpen={true}
            onClose={() => setMegaOpen(null)}
          />
        )}
      </header>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
