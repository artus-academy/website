"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Briefcase,
  Code2,
  ExternalLink,
  Eye,
  Rocket,
  Target,
  Users2,
} from "lucide-react";
import StatsSection from "@/components/about/StatsSection";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import CoursesSection from "@/components/about/CoursesSection";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export default function AboutPage() {
  return (
    <div className="relative flex flex-col pb-24 pt-24 md:pt-28 px-6 md:px-16 gap-20">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none z-0 max-h-96" />
      {/* ---------------- HERO ---------------- */}
      <motion.div
        {...fadeUp}
        className="text-center max-w-3xl mx-auto space-y-4 z-10"
      >
        <Badge variant="secondary" className="px-4 py-1 rounded-full">
          About Us
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          We Empower You With{" "}
          <span className="text-primary">Future-Ready Skills</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Learning that goes beyond theory, through real-world projects,
          mentorship and industry collaboration.
        </p>
      </motion.div>

      {/* ---------------- STORY SECTION ---------------- */}
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto space-y-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          <span className="text-primary font-medium">Artus Academy</span> is a
          place for learners who want to build real skills and real careers. We
          bridge the gap between education and the industry by training students
          through{" "}
          <span className="text-foreground font-medium">
            hands-on projects, guided mentorship, and real business exposure
          </span>
          , not just classroom lessons.
        </p>
      </motion.div>

      <StatsSection />

      {/* ---------------- MISSION + VISION ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          {...fadeUp}
          className="rounded-xl p-8 border bg-card relative overflow-hidden group transition-all"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 bg-linear-to-br from-primary/20 via-primary/5 to-transparent"></div>

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-x-2">
              <div className="p-3 w-fit rounded-full bg-primary/10 text-primary">
                <Target />
              </div>

              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower students with job-ready technical and digital skills,
              real project exposure, and personalized career development
              support.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-xl p-8 border bg-card relative overflow-hidden group transition-all"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 bg-linear-to-br from-primary/20 via-primary/5 to-transparent"></div>

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-x-2">
              <div className="p-3 w-fit rounded-full bg-primary/10 text-primary">
                <Eye />
              </div>

              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become Kerala&apos;s most trusted academy for technology and
              digital careers, built on quality learning and real success.
            </p>
          </div>
        </motion.div>
      </div>

      <Separator className="max-w-4xl mx-auto" />

      {/* ---------------- COLLABORATION ---------------- */}
      <motion.div
        {...fadeUp}
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
      >
        <div className="space-y-5">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            In Collaboration With
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">Artus Brand</h2>
          <p className="text-muted-foreground">
            A Digital Marketing agency with{" "}
            <b className="font-medium text-foreground">3+ years</b> of industry
            presence, successfully growing the digital identity of{" "}
            <b className="font-medium text-foreground">70+ businesses</b> across
            various sectors - retail, healthcare, education, hospitality and
            tech.
          </p>

          <Link href="https://artusbrand.com" target="_blank">
            <Button>
              <ExternalLink /> Visit Artus Brand
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/artus-brand.png"
            alt="Artus Brand"
            height={240}
            width={240}
            className="rounded-xl object-contain dark:invert-100"
          />
        </motion.div>
      </motion.div>

      {/* ---------------- CLIENT MARQUEE ---------------- */}
      <motion.div
        {...fadeUp}
        className="max-w-6xl mx-auto w-full py-5 space-y-6"
      >
        <h3 className="text-center text-xl font-semibold">
          Trusted by 70+ Brands & Businesses
        </h3>

        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-linear-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-linear-to-l from-background to-transparent z-10" />

          {/* Marquee container */}
          <div className="relative flex gap-10 animate-marquee hover:paused z-0">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex gap-10">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={`${loop}-${i}`}
                    className="flex items-center justify-center w-32 h-20 rounded-md bg-foreground/20 dark:bg-foreground/20 p-3 hover:scale-105 transition transform"
                  >
                    <Image
                      src={`/images/clients/client-${i}.png`}
                      alt="client logo"
                      width={120}
                      height={60}
                      className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Courses Section */}
      <motion.div
        {...fadeUp}
        className="max-w-6xl mx-auto space-y-10 py-8 md:py-12 flex flex-col items-center"
      >
        <CoursesSection />
      </motion.div>

      {/* ---------------- TRAINING APPROACH ---------------- */}
      <motion.div
        {...fadeUp}
        className="max-w-6xl mx-auto space-y-12 py-8 md:py-12"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Training Approach
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We focus on real, practical way of learning. Where students build,
            create, and grow with clear mentorship and structured skill
            development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Project-Based Learning",
              icon: Code2,
              desc: "Learn by building real applications and campaigns, not just theory.",
            },
            {
              title: "Mentor Guided Growth",
              icon: Users2,
              desc: "Weekly mentor sessions to ensure progress, clarity, and improvement.",
            },
            {
              title: "Career Support",
              icon: Briefcase,
              desc: "Resume refinement, interview training, and placement assistance.",
            },
            {
              title: "Live Project Experience",
              icon: Rocket,
              desc: "Collaborate on live client or in-house projects to gain real-world working experience.",
            },
          ].map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border bg-card p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 bg-linear-to-br from-primary/20 via-primary/5 to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ---------------- CTA ---------------- */}
      <motion.div
        {...fadeUp}
        className="text-center max-w-xl mx-auto space-y-5"
      >
        <h3 className="text-3xl font-bold">Ready to Begin?</h3>
        <p className="text-muted-foreground">
          Take your first step into tech and digital careers with mentors
          guiding you every step of the way.
        </p>
        <ApplyNowDialog
          trigger={
            <Button size="lg" className="px-8 py-6 text-base">
              Apply Now
            </Button>
          }
        />
      </motion.div>
    </div>
  );
}
