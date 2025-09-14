"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animation-variants";
import ScrollProgress from "./scroll-progress";

interface PageWrapperProps {
  children: React.ReactNode;
  showScrollProgress?: boolean;
  className?: string;
}

export default function PageWrapper({ 
  children, 
  showScrollProgress = true,
  className = "" 
}: PageWrapperProps) {
  return (
    <>
      {showScrollProgress && <ScrollProgress />}
      <motion.div
        {...pageTransition}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
