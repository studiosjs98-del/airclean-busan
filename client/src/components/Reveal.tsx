import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  as?: ElementType;
}

/**
 * Scroll-into-view fade-up (framer-motion whileInView, once).
 * Subtle 20px travel. Honors prefers-reduced-motion (renders final state).
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = (typeof as === "string" ? (motion as never)[as] : motion(as)) as typeof motion.div;

  if (reduce) {
    const Plain = (typeof as === "string" ? as : "div") as ElementType;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
