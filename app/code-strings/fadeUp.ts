export const fadeUpCode = `
"use client"; //for Next.js app router

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  up?: boolean;
  amount?: "all" | "some" | number;
  once?: boolean;
};

export default function FadeIn({
  children,
  duration = 0.4,
  delay = 0,
  className = "",
  up = true,
  amount = "all",
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 0, y: 0 }
    : { y: up ? 30 : 0, opacity: 0 };

  const animate = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      transition={{ duration, delay, type: "tween" }}
      viewport={{ once, amount }}>
      {children}
    </motion.div>
  );
}

`;
