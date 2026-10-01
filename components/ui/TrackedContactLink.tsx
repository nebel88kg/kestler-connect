"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

interface TrackedContactLinkProps {
  kind: "phone" | "whatsapp";
  href: string;
  placement: string;
  className?: string;
  children: ReactNode;
}

/** Telefon-/WhatsApp-Link mit denselben dataLayer-Events wie die StickyContactBar. */
export function TrackedContactLink({ kind, href, placement, className, children }: TrackedContactLinkProps) {
  const external = kind === "whatsapp";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => trackEvent(kind === "phone" ? "click_phone" : "click_whatsapp", { placement })}
      className={className}
    >
      {children}
    </a>
  );
}
