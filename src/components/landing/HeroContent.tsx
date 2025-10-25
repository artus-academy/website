"use client";

import React from "react";
import { Zap, ShieldCheck, Play } from "lucide-react";
import {
  motion,
  useReducedMotion,
  MotionConfig,
  Variants,
} from "framer-motion";
import ContactForm from "./ContactForm";
import { Button } from "../ui/button";
import Link from "next/link";
import { ApplyNowDialog } from "../ApplyNowDialog";

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
      <section className="relative overflow-hidden pt-10 pb-12 md:pt-12 md:pb-16 px-5 flex justify-center bg-gradient-to-b to-muted/20 from-background overflow-x-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 bg-primary/30 blur-3xl rounded-full z-0"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
        {/* <AuroraGradient className="h-full absolute inset-0" /> */}
        <div className="max-w-[80rem] w-full grid md:grid-cols-2 gap-10 items-center z-10">
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
              <ApplyNowDialog
                trigger={
                  <Button
                    className="relative z-10 flex items-center gap-2"
                    variant="outline"
                  >
                    Apply Now <ShieldCheck size={16} />
                  </Button>
                }
              />

              <Link href="/courses">
                <Button
                  className="relative z-10 flex items-center gap-2"
                  variant="outline"
                >
                  <Play size={16} />
                  View Courses
                </Button>
              </Link>
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative z-10 md:pl-16 flex-1 flex items-center justify-center h-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
