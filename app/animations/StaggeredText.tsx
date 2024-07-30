"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type StaggeredTextProps = {
  children: ReactNode;
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

  const childArray = typeof children === "string" ? children.split("") : [];

  return (
    <Wrapper className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={defaultAnimation}
        aria-hidden>
        {childArray.map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
