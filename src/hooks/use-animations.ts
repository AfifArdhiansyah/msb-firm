"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook untuk scroll-triggered animations
export function useScrollAnimation(threshold = 0.3, once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once,
    margin: "0px 0px -100px 0px" 
  });

  return { ref, isInView };
}

// Hook untuk staggered animations
export function useStaggeredAnimation(delay = 0.1) {
  return {
    container: {
      animate: {
        transition: {
          staggerChildren: delay,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  };
}

// Hook untuk page transitions
export function usePageTransition() {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  };
}
