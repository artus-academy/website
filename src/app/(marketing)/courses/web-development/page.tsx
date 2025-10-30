"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { mentors } from "@/data/mentors";
import MobileCTABar from "@/components/courses/MobileCTABar";
import TestimonialsCarousel from "@/components/courses/TestimonialsCarousel";
import FullStackSyllabusTabs from "./syllabus";
import {
  Code2,
  Cpu,
  GitBranch,
  Globe,
  Gem,
  Calendar,
  Wallet,
  Blend,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true },
};

export default function FullStackCoursePage() {
  return (
    <section className="relative px-6 py-16 md:py-24 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none z-0 max-h-96" />

      <div className="max-w-[80rem] mx-auto relative z-10 space-y-14">
        {/* Header */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Full Stack Web Development
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn to build complete web applications from scratch from Frontend
            (React) to Backend (Java + Spring Boot) along with databases,
            deployment, Git and teamwork.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge className="bg-primary/20 text-primary border-primary/40">
              <Calendar /> 6 Months
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-600 border-blue-400/30">
              <Blend /> Online + Offline
            </Badge>
            <Badge className="bg-green-500/20 text-green-600 border-green-400/30">
              <Wallet /> EMI Available
            </Badge>
            <Badge className="bg-rose-500/20 text-rose-600 border-rose-400/30">
              <Globe /> Placement Support
            </Badge>
          </div>
        </motion.div>

        {/* Mentor */}
        <motion.div
          {...fadeUp}
          className="flex flex-wrap justify-center items-center gap-6 mx-auto text-center"
        >
          <Image
            src={mentors.nikhil.image}
            alt={mentors.nikhil.name}
            width={80}
            height={80}
            className="rounded-full border shadow"
          />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg">{mentors.nikhil.name}</h3>
            <p className="text-muted-foreground text-sm">
              {mentors.nikhil.title}
            </p>
          </div>
        </motion.div>

        <Separator />

        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Course Overview</h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            This Full Stack Web Development program is designed to guide
            learners from the fundamentals to an industry-ready skill level.
            Through structured modules, hands-on assignments, and real project
            experience, you will gain the ability to build complete web
            applications using modern technologies.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            The training is conducted by experienced developers who have worked
            on real-world software projects. You will be learning coding best
            practices, application architecture, debugging strategies, and
            collaborative workflows followed in professional tech teams.
          </p>
        </motion.div>

        {/* Curriculum Tabs */}
        <FullStackSyllabusTabs />

        {/* What You’ll Achieve */}
        <section className=" py-16 space-y-8">
          <motion.h2 {...fadeUp} className="text-center text-3xl font-bold">
            What Will You Achieve?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Be able to build and deploy real web applications",
              "Master React and Java + Spring Boot with confidence",
              "Understand how backend, APIs, and databases work together",
              "Develop strong problem-solving & debugging skills",
              "Build a GitHub portfolio that impresses recruiters",
              "Become interview ready with career mentorship",
            ].map((point, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm bg-card p-4 rounded-lg border"
              >
                <Gem className="text-primary mt-0.5" />
                {point}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="container py-16">
          <motion.div {...fadeUp} className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-bold">Technologies & Tools</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center items-stretch justify-items-stretch"
          >
            {[
              "html",
              "css",
              "javascript",
              "react",
              "tailwind",
              "git",
              "java",
              "mysql",
              "springboot",
              "postman",
              "vercel",
              "linux",
            ].map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.12, rotate: -3 }}
                className="group p-4 rounded-xl border bg-card hover:shadow-lg transition-all flex flex-col items-center justify-center gap-y-3"
              >
                <Image
                  src={`/images/tech/${tech}.png`}
                  alt={tech}
                  width={56}
                  height={56}
                  className="object-contain grayscale group-hover:grayscale-0 transition flex-1"
                />
                <span className="uppercase text-muted-foreground text-sm group-hover:text-foreground">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <motion.div {...fadeUp} className="text-center space-y-2 mb-10">
            <h2 className="text-3xl font-bold">Why Choose Artus Academy?</h2>
            <p className="text-muted-foreground">
              Learn the skills that get you hired — not just theory.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Code2, label: "Real Projects" },
              { icon: Cpu, label: "Industry Curriculum" },
              { icon: GitBranch, label: "Team Workflows" },
              { icon: Globe, label: "Placement Assistance" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="rounded-xl border p-6 text-center bg-card"
              >
                <Icon className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center space-y-4 pt-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Become a Full-Stack Developer?
          </h2>
          <p className="text-muted-foreground">
            Join the program and start building real production-grade projects.
          </p>
          <ApplyNowDialog />
        </motion.div>

        <div className="pt-12">
          <TestimonialsCarousel />
        </div>

        <MobileCTABar />
      </div>
    </section>
  );
}
