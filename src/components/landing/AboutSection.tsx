"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhoIsThisFor from "./WhoIsThisFor";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function TrustedAcademySection({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.section
      className={cn(
        "relative flex flex-col items-center justify-center text-center py-24 md:py-32 px-6  bg-linear-to-b from-muted/20 to-background overflow-x-hidden",
        className
      )}
    >
      <WhoIsThisFor />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-30 right-10 w-80 h-80 dark:bg-pink-500/30 bg-pink-600/30 blur-3xl rounded-full"
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 80, -80, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto space-y-6 mt-10"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1 mb-3">
          About Us
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Your Trusted Academy for{" "}
          <span className="text-primary">Future-Ready Skills</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          At <span className="text-primary font-medium">Artus Academy</span>, we
          empower learners with practical, industry-driven programs designed for
          tomorrow&apos;s careers. Whether it&apos;s{" "}
          <span className="text-foreground font-medium">
            Full-Stack Web Development
          </span>
          ,
          <span className="text-foreground font-medium">
            {" "}
            Digital Marketing
          </span>
          , or <span className="text-foreground font-medium">UI/UX Design</span>
          , our courses are taught by professionals who bridge theory with
          real-world practice.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Our flagship{" "}
          <span className="text-foreground font-medium">
            Full-Stack Web Development
          </span>{" "}
          course trains you to build real applications from scratch using modern
          technologies -{" "}
          <span className="text-foreground font-medium">HTML</span>,{" "}
          <span className="text-foreground font-medium">CSS</span>,{" "}
          <span className="text-foreground font-medium">JavaScript</span>,{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">Java</span>,{" "}
          <span className="text-foreground font-medium">Spring Boot</span>, and{" "}
          <span className="text-foreground font-medium">MySQL</span>. Gain
          hands-on experience through live projects, Git workflows, and
          deployment sessions guided by experts.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Join our growing community of passionate learners, work on
          real-industry projects, and get personalized placement support. At
          <span className="text-primary font-medium"> Artus Academy</span>,
          creativity meets code - and your career begins.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/courses">Explore Courses</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
