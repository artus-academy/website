"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 h-px bg-primary origin-left z-51"
    />
  );
}
