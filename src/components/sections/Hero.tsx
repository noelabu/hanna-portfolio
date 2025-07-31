"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // Ref for scroll-based transformations
  const heroRef = useRef<HTMLDivElement>(null);
  // Framer Motion scrollYProgress for section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Split directions:
  // Main name (h1) slides RIGHT as you scroll (0 ---> +160)
  const headingX = useTransform(scrollYProgress, [0, 1], [0, 160]);
  // Subheaders (above/below main name) slide LEFT as you scroll (0 ---> -160)
  const subHeaderX = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section ref={heroRef} className="relative min-h-[calc(100vh-6rem)] bg-light-gray font-sans overflow-x-hidden">
      {/* Animated Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main Content Area */}
        <div className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-4 py-20">
          <div className="text-center">
            <motion.p
              className="text-primary-orange text-lg md:text-xl font-medium mb-4 md:mb-6"
              style={{ x: subHeaderX }}
              transition={{ type: 'spring', stiffness: 90, damping: 22 }}
            >
              Accountant
            </motion.p>
            <motion.h1
              className="text-dark-gray text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold leading-none tracking-tight"
              style={{ x: headingX }}
              transition={{ type: 'spring', stiffness: 90, damping: 22 }}
            >
              Hanna Louisa<span className="ml-[0.2em]">Sauquillo</span>
            </motion.h1>
            <motion.p
              className="text-primary-pink text-lg md:text-xl font-medium mt-4 md:mt-6"
              style={{ x: subHeaderX }}
              transition={{ type: 'spring', stiffness: 90, damping: 22 }}
            >
              Licensed Financial Advisor
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-screen-xl px-10 pb-8 sm:px-20">
        <div className="flex flex-col text-center gap-2 md:flex-row md:text-left justify-between items-center text-sm font-medium text-medium-gray">
        </div>
      </div>
    </section>
  );
};

export default Hero;