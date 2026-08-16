"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ArtifactSlide = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

/**
 * 3D coverflow of unique stills. Reduced-motion users get a static grid.
 */
export function ArtifactSlider({ items }: { items: ArtifactSlide[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(next, 5600);
    return () => window.clearInterval(id);
  }, [next, reduce]);

  const current = items[active];

  if (reduce) {
    return (
      <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.src} className="bg-charcoal">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 50vw"
                unoptimized
              />
            </div>
            <div className="bg-soft/30 p-6">
              <h3 className="font-serif text-lg text-offwhite">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone/60">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="relative mx-auto h-[380px] w-full md:h-[460px]"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, i) => {
          let offset = i - active;
          const half = Math.floor(items.length / 2);
          if (offset > half) offset -= items.length;
          if (offset < -half) offset += items.length;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          return (
            <button
              key={item.src}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={offset === 0}
              onClick={() => setActive(i)}
              className={cn(
                "absolute left-1/2 top-1/2 h-[260px] w-[210px] origin-center overflow-hidden rounded-sm border border-hairline bg-charcoal md:h-[340px] md:w-[280px]",
                offset === 0 ? "cursor-default" : "cursor-pointer",
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 210}px) translateZ(${offset === 0 ? 120 : -180}px) rotateY(${offset * -38}deg) scale(${offset === 0 ? 1 : 0.82})`,
                opacity: offset === 0 ? 1 : abs === 1 ? 0.5 : 0.18,
                zIndex: 20 - abs,
                transition:
                  "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="280px"
                priority={i === 0}
                unoptimized
              />
              <span className="absolute inset-0 bg-charcoal/25" />
              <span className="absolute inset-x-0 bottom-0 bg-charcoal/80 px-4 py-3 text-left">
                <span className="block font-serif text-sm text-offwhite md:text-base">
                  {item.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous artifact"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-hairline text-stone/70 transition-colors duration-300 hover:border-brass/50 hover:text-brass"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <p className="min-w-[12ch] text-center text-[11px] uppercase tracking-[0.3em] text-brass/80">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={next}
          aria-label="Next artifact"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-hairline text-stone/70 transition-colors duration-300 hover:border-brass/50 hover:text-brass"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      {current && (
        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-stone/55">
          {current.body}
        </p>
      )}
    </div>
  );
}
