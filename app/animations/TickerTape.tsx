"use client";
import { useReducedMotion, motion } from "framer-motion";

type TickerTapeProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TickerTape({
  text,
  speed = 10,
  className = "",
}: TickerTapeProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const repeatedText = `${text} `.repeat(4);
  const textLength = repeatedText.length;

  const tickerVariants = {
    animate: {
      x: [0, -50 + "%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 6000 / (speed * textLength), // adjust duration based on speed and text length
        },
      },
    },
  };

  return (
    <div className="w-full relative overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-block ${className}`}
        variants={tickerVariants}
        animate={shouldReduceMotion ? "initial" : "animate"}>
        {repeatedText}
      </motion.div>
    </div>
  );
}
