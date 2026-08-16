import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-all duration-300 ease-luxe focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brass text-charcoal hover:bg-brasshover hover:-translate-y-px shadow-[0_0_0_0_rgba(176,141,87,0)] hover:shadow-[0_8px_32px_-12px_rgba(176,141,87,0.45)]",
  secondary:
    "border border-stone/25 text-stone hover:border-brass/60 hover:text-offwhite hover:-translate-y-px",
  ghost: "text-stone/70 hover:text-brass",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps &
  { href: string } &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

export const Button = forwardRef<
  HTMLButtonElement,
  BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ variant = "primary", size = "md", className, children, ...rest }, ref) {
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
});