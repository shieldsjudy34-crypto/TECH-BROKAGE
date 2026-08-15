"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg" | "sm";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm sm:text-base",
};

const variantClasses: Record<Variant, string> = {
  primary: `
    bg-brass text-charcoal font-medium
    hover:bg-brassHover hover:-translate-y-px hover:shadow-brassBloom
    active:translate-y-0
  `,
  secondary: `
    bg-transparent text-stone border border-[rgba(231,225,215,0.18)]
    hover:border-brass hover:bg-[rgba(231,225,215,0.03)]
  `,
};

/**
 * PDSCOMM button system — primary brass fill & secondary outline.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-md font-sans tracking-wide
    transition-all duration-300 ease-premium
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50
    disabled:opacity-50 disabled:pointer-events-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
