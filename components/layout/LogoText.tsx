import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoTextProps {
  href?: string;
  className?: string;
  /** "light" = white KESTLER on dark backgrounds; "dark" = navy KESTLER on light backgrounds */
  variant?: "light" | "dark";
  onClick?: () => void;
}

export function LogoText({
  href = "/",
  className,
  variant = "dark",
  onClick,
}: LogoTextProps) {
  const content = (
    <span
      className={cn(
        "inline-block text-base font-bold uppercase tracking-[0.18em] sm:text-lg lg:text-xl",
        className
      )}
    >
      <span className={variant === "light" ? "text-white" : "text-navy"}>KESTLER</span>{" "}
      <span className="text-accent">CONNECT</span>
    </span>
  );

  if (onClick) {
    return (
      <Link href={href} onClick={onClick} className="shrink-0">
        {content}
      </Link>
    );
  }

  return (
    <Link href={href} className="shrink-0">
      {content}
    </Link>
  );
}
