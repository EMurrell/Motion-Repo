"use client"; // for Next.js app router

import {
  KeyframeOptions,
  animate,
  useIsomorphicLayoutEffect,
  useInView,
} from "framer-motion";
import { useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
  delay?: number;
  decimalPlaces?: number;
  className?: string;
};

export default function Counter({
  from,
  to,
  animationOptions,
  delay = 0,
  decimalPlaces = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(value);
  };

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) {
      element.textContent = formatNumber(from);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = formatNumber(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 0.6,
      ease: "easeOut",
      delay,
      ...animationOptions,
      onUpdate(value) {
        element.textContent = formatNumber(value);
      },
      onComplete() {
        element.textContent = formatNumber(to);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, decimalPlaces]);

  return <span ref={ref} className={className} aria-live="polite" />;
}
