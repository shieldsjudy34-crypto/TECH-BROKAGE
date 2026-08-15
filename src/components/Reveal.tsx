"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Horizontal offset instead of vertical */
  direction?: "up" | "left" | "right";
  as?: "div" | "section" | "article" | "li" | "span";
}

/**
 * Premium scroll-entry reveal: subtle rise + blur-to-sharp.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: 12, x: 0 }
      : direction === "left"
        ? { y: 0, x: -16 }
        : { y: 0, x: 16 };

  const Component = motion[as];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{
        opacity: 0,
        ...offset,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </Component>
  );
}
