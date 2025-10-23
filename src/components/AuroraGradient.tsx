"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";

const COLORS_TOP = ["#13FFAA66", "#1E67C666", "#CE84CF66", "#DD335C66"];

export default function AuroraGradient({ className }: { className?: string }) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate the color changes in a loop
    animate(color, COLORS_TOP, {
      ease: "easeInOut", // Easing function for smooth transitions
      duration: 10, // Duration for the entire color transition cycle
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "mirror", // Reverses the animation direction on each cycle
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #00000000 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className={cn("relative", className)}
    />
  );
}
