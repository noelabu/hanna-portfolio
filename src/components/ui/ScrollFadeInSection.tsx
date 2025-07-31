"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export const ScrollFadeInSection = ({
  children,
  className = "",
}: ScrollFadeInSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: false, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};