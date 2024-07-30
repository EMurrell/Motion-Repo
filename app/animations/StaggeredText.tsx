"use client"; // for Next.js app router

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StaggeredTextProps = {
  children: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function StaggeredText({
  children,
  el: Wrapper = "p",
  className,
  once = true,
}: StaggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const charArray = children.split("");

  return (
    <Wrapper className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={defaultAnimation}
        aria-hidden>
        {charArray.map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
