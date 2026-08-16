"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Fade + slight rise reveal on scroll into view.
 * Pass blur for the hero blur-to-sharp treatment.
 */
export function AnimatedReveal({
  children,
  delay = 0,
  y = 24,
  blur = false,
  once = true,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}