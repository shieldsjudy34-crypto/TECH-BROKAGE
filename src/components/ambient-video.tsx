"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Unique looping plate. Falls back to the still when the user prefers reduced motion.
 */
export function AmbientVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Image
        src={poster}
        alt=""
        fill
        priority
        unoptimized
        className={cn("object-cover", className)}
        sizes="100vw"
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
