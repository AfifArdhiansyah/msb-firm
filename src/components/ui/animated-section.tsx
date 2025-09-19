"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animation-variants";

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  stagger?: boolean;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
};

export default function AnimatedSection({
  children,
  variant = "fadeInUp",
  stagger = false,
  delay = 0,
  duration = 0.6,
  threshold = 0.3,
  className = ""
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(threshold);

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ 
        duration, 
        delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Komponen untuk stagger items
export function AnimatedItem({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <motion.div
      variants={staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}
