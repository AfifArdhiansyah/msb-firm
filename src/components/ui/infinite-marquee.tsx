"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className,
}: InfiniteMarqueeProps) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        className
      )}
    >
      <motion.div
        className="flex shrink-0 gap-4"
        animate={{
          x: direction === "left" ? "-50%" : "50%",
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
