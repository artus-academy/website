"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket } from "lucide-react";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import Link from "next/link";

const courses = [
  {
    id: "web-development",
    title: "Full Stack Web Development",
    subtitle: "Master both front-end and back-end development",
    description:
      "Learn to build complete web applications from scratch using HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL. Get hands-on with real projects, version control, and modern deployment workflows.",
    icon: Code2,
    lightGradient: "from-blue-400/10 via-cyan-300/10 to-transparent",
    darkGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    border: "border-blue-400/30 dark:border-blue-500/30",
    badgeLight: "bg-blue-100 text-blue-700",
    badgeDark: "bg-blue-500/10 text-blue-400",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Learn how to grow brands in the digital world",
    description:
      "Gain practical skills in SEO, paid advertising, social media marketing, analytics, and campaign strategy. Create and manage marketing plans for real businesses guided by industry professionals.",
    icon: Rocket,
    lightGradient: "from-pink-300/10 via-orange-300/10 to-transparent",
    darkGradient: "from-pink-500/20 via-orange-500/10 to-transparent",
    border: "border-pink-400/30 dark:border-pink-500/30",
    badgeLight: "bg-pink-100 text-pink-700",
    badgeDark: "bg-pink-500/10 text-pink-400",
  },
];

export default function CoursesSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-x-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-10 w-80 h-80 dark:bg-blue-500/30 bg-blue-600/30 blur-3xl rounded-full"
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
      {/* Soft background gradient for both modes */}
      <div className="absolute inset-0 bg-gradient-to-b dark:from-background dark:via-muted/20 dark:to-background pointer-events-none transition-colors duration-700" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-center mb-14 space-y-3"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Our Courses
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Learn Future-Ready Skills with{" "}
          <span className="text-primary">Artus Academy</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Designed by industry experts to help you master the skills that matter
          most in today&apos;s world - from coding to digital marketing.
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, i) => {
          const Icon = course.icon;
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-2xl p-8 border backdrop-blur-md bg-white/70 dark:bg-card/80 hover:shadow-lg transition-all duration-300 overflow-hidden",
                course.border
              )}
            >
              {/* Animated background glow — light & dark mode variants */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500",
                  `bg-gradient-to-br ${course.darkGradient} dark:${course.darkGradient} ${course.lightGradient}`
                )}
              />

              {/* Content */}
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "p-2 rounded-lg bg-gradient-to-r shadow-sm transition-colors",
                      course.badgeLight,
                      "dark:",
                      course.badgeDark
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">{course.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  {course.subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                <div className="pt-2 flex gap-3">
                  <ApplyNowDialog
                    trigger={<Button className="px-6">Apply Now</Button>}
                  />
                  <Button
                    variant="outline"
                    className="px-6 dark:border-white/20"
                    asChild
                  >
                    <Link href={`/courses/${course.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
