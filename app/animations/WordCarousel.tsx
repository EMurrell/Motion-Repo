"use client";

// Required props: words (string[])
// Good to know: accepts a 'loop' prop (boolean), defaults to false
// Example Usage:  <WordCarousel words={["Alpha", "Beta", "Delta", "Gamma"]} />

import { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";

type WordCarouselProps = {
  words: string[];
  transitionDuration?: number;
  intervalDuration?: number;
  className?: string;
  loop?: boolean;
};

export default function WordCarousel({
  words,
  transitionDuration = 0.5,
  intervalDuration = 1500,
  className = "",
  loop = false,
}: WordCarouselProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (loop) {
          return (prev + 1) % words.length;
        } else {
          return prev + 1 < words.length ? prev + 1 : prev;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [words.length, intervalDuration, loop, isInView]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: transitionDuration };

  return (
    <div ref={ref}>
      <span className="sr-only" aria-live="polite">
        {words.join(", ")}
      </span>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          className={className}
          aria-hidden="true">
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
