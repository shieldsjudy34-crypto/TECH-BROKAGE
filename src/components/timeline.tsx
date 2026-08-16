"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { AnimatedReveal } from "@/components/animated-reveal";

export interface TimelineStep {
  title: string;
  body: string;
}

/**
 * Vertical timeline with line-draw on scroll.
 */
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 70%"],
  });

  return (
    <div ref={ref} className="relative">
      {/* Rail */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[7px] top-2 w-px bg-hairline"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: scrollYProgress }}
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-brass/80 to-brass/30"
      />

      <ol className="space-y-14 md:space-y-16">
        {steps.map((step, i) => (
          <li key={step.title} className="relative pl-12 md:pl-16">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-brass/60 bg-charcoal"
            >
              <span className="h-1 w-1 rounded-full bg-brass/80" />
            </span>
            <AnimatedReveal delay={i * 0.04}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/80">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-offwhite md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone/60 md:text-[15px]">
                {step.body}
              </p>
            </AnimatedReveal>
          </li>
        ))}
      </ol>
    </div>
  );
}