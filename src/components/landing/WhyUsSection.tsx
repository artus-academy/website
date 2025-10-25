"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Globe2, Users2, Rocket, Briefcase, Cpu } from "lucide-react";
import { Badge } from "../ui/badge";

const FEATURES = [
  {
    title: "Hands-on Learning",
    description:
      "Work on real-time web applications and projects guided by industry mentors. Gain experience that goes beyond theory.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Career-Focused Mentorship",
    description:
      "Weekly mentorship sessions to help you improve your coding skills, interview readiness, and career growth.",
    icon: Users2,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Live & Flexible Learning",
    description:
      "Choose between offline and online learning modes - with flexible schedules tailored to your availability.",
    icon: Globe2,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Full Stack Mastery",
    description:
      "Master front-end and back-end development - HTML, CSS, React, Java, Spring Boot, MySQL, Git, and deployment.",
    icon: Cpu,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Digital Marketing Expertise",
    description:
      "Learn SEO, social media strategy, paid ads, and analytics from marketing professionals with proven experience.",
    icon: Rocket,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Placement Assistance",
    description:
      "Get dedicated placement support with resume reviews, interview training, and direct company connections.",
    icon: Briefcase,
    color: "from-indigo-500 to-sky-500",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-gradient-to-b from-background to-muted/20 flex justify-center overflow-x-hidden">
      <div className="max-w-[80rem]">
        <div className="text-center mb-14 space-y-3">
          <Badge variant="secondary">Why Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            What Makes <span className="text-primary">Artus Academy</span>{" "}
            Special?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering learners with skills that matter - through real projects,
            mentorship, and future-ready training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: -5,
                }}
                className={cn(
                  "relative group rounded-xl p-6 md:p-8 border bg-card hover:shadow-xl transition-all duration-300",
                  "overflow-hidden text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Animated background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl",
                    `bg-gradient-to-r ${feature.color}`
                  )}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full gap-4">
                  <div
                    className={cn(
                      "inline-flex w-12 h-12 items-center justify-center rounded-lg bg-gradient-to-r text-white shadow-lg",
                      feature.color
                    )}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
