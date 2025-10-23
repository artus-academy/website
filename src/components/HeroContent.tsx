"use client";

import React from "react";
import { Zap, ShieldCheck, Play } from "lucide-react";
import {
  motion,
  useReducedMotion,
  MotionConfig,
  Variants,
} from "framer-motion";
import AuroraGradient from "./AuroraGradient";

export function HeroContent() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <MotionConfig reducedMotion={prefersReduced ? "always" : "never"}>
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-24 px-5 flex justify-center">
        <AuroraGradient className="h-full absolute inset-0" />
        <div className="max-w-[80rem] w-full grid md:grid-cols-2 gap-10 items-center">
          {/* === LEFT === */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-brand-700 bg-brand-50 py-1 px-3 rounded-full ring-1 ring-brand-100"
            >
              <Zap size={14} /> Learn by Building
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Become a{" "}
              <span className="text-brand-600">Full-Stack Developer</span> or
              <br className="hidden md:block" /> a{" "}
              <span className="text-brand-600">Digital Marketer</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-muted-foreground"
            >
              Industry-ready curriculum, real projects, and job-focused
              mentorship, delivered in Kochi & online.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex gap-3">
              {/* Magnetic primary button */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ghost flex items-center gap-2"
                href="/contact"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now <ShieldCheck size={16} />
                </span>
              </motion.a>

              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ghost flex items-center gap-2"
                href="/courses"
              >
                <Play size={16} />
                View Courses
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 text-sm flex items-center gap-2 flex-wrap text-muted-foreground"
            >
              <span className="pt-5 font-light text-lg">
                Next batch starts in{" "}
                <span className="text-primary font-medium">NOVEMBER</span>
              </span>
            </motion.div>
          </motion.div>

          {/* === RIGHT === */}
          <div className="relative z-10"></div>
        </div>
      </section>
    </MotionConfig>
  );
}
