import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Typographic wordmark — uppercase, letter-spaced, with a brass diamond accent.
 * Replace with a logo asset later without touching call sites.
 */
export function Wordmark({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="PDSCOMM — home"
      className={cn(
        "inline-flex items-center gap-2 font-serif text-lg font-semibold uppercase tracking-[0.22em] text-offwhite",
        className,
      )}
    >
      PDSCOMM
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 rotate-45 bg-brass"
      />
    </Link>
  );
}