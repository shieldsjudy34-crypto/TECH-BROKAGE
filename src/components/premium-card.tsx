import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Elevated card — lifts 1–2px on hover, brass hairline appears.
 */
export function PremiumCard({
  icon: Icon,
  title,
  body,
  children,
  className,
  iconClassName,
  image,
  imageAlt,
}: {
  icon?: LucideIcon;
  title?: React.ReactNode;
  body?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm border border-hairline bg-soft/50 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40 hover:bg-soft/80 md:p-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {image && (
        <div className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden md:-mx-8 md:-mt-8 md:h-52">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-charcoal/35" />
        </div>
      )}
      {Icon && (
        <div
          className={cn(
            "mb-6 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-hairline bg-charcoal/70 text-brass transition-colors duration-300 group-hover:border-brass/40",
            iconClassName,
          )}
        >
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
        </div>
      )}
      {title && (
        <h3 className="font-serif text-xl leading-snug text-offwhite md:text-2xl">
          {title}
        </h3>
      )}
      {body && (
        <p className="mt-3 text-sm leading-relaxed text-stone/60">{body}</p>
      )}
      {children}
    </div>
  );
}