"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState, MouseEvent } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Disable hover lift / brass border */
  static?: boolean;
  onClick?: () => void;
}

/**
 * Premium card with softCharcoal fill, hairline border,
 * 2px lift on hover, and subtle cursor-follow highlight.
 */
export default function Card({
  children,
  className = "",
  static: isStatic = false,
  onClick,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 30 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isStatic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onClick={onClick}
      whileHover={
        isStatic
          ? undefined
          : {
              y: -2,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className={`
        relative overflow-hidden rounded-xl
        bg-softCharcoal border border-hairline
        ${!isStatic ? "group transition-colors duration-500 ease-premium hover:border-brass/30 hover:shadow-cardLift" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      style={
        !isStatic
          ? {
              backgroundImage: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(176,141,87,0.06), transparent 40%)`,
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
