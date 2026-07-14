import { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-navy hover:bg-accent-hover shadow-lg shadow-accent/30 hover:shadow-accent/50 font-bold",
  secondary:
    "bg-navy text-white hover:bg-navy-light",
  ghost: "text-anthracite hover:bg-gray-100",
  outline:
    "border-2 border-accent text-accent hover:bg-accent hover:text-navy",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
