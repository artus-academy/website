"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ApplyNowDialog } from "../ApplyNowDialog";
import { DigitalMarketingBadge, WebDevelopmentBadge } from "../CourseBadges";

type Mentor = {
  name: string;
  title: string[];
  badge: React.ReactNode;
  summary: string;
  imageSrc: string;
  achievements: (string | React.ReactNode)[];
  highlights: { icon: React.ReactNode; label: string; value: string }[];
};

// -------------------- Mentor Data --------------------
const mentors: Mentor[] = [
  {
    name: "Nikhil Nath R",
    title: ["Senior Software Engineer (ex-Oracle)"],
    badge: <WebDevelopmentBadge />,
    summary:
      "I believe the best way to learn code is by building real things. My goal is to transform beginners into confident, industry-ready developers.",
    imageSrc: "/images/mentor-nikhil.png",
    achievements: [
      <>
        <b>3+ years</b> experience in Java Microservices at Oracle
      </>,
      <>
        B.Tech in CSE from <b>NIT Calicut</b>
      </>,
      <div className="flex flex-col" key="paper">
        <span>
          Co-authored award-winning paper at <b>CINS 2023</b>
        </span>
        <Link
          href="https://www.researchgate.net/publication/367967693_A_Verifiable_Multi-Secret_Multi-Use_Secret_Sharing_Scheme_using_Sponge_functions_and_Cellular_Automata"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          (A Verifiable, Multi-Secret, Multi-Use Secret Sharing Scheme using
          Sponge functions and Cellular Automata)
        </Link>
      </div>,
      <>
        Contributor to open-source & core member of <b>FOSSCell</b> (NITC)
      </>,
    ],
    highlights: [
      {
        icon: <Briefcase className="h-4 w-4" />,
        label: "Experience",
        value: "3+ yrs (Oracle)",
      },
      {
        icon: <GraduationCap className="h-4 w-4" />,
        label: "Education",
        value: "NIT Calicut (B.Tech CSE)",
      },
      {
        icon: <Trophy className="h-4 w-4" />,
        label: "Award",
        value: "Best Paper - CINS 2023",
      },
    ],
  },
  {
    name: "Ajeena Ali",
    title: ["CEO Artus Brand"],
    badge: <DigitalMarketingBadge />,
    summary:
      "With years of experience building brand presence across digital platforms, I help learners master marketing strategy, paid ads, and analytics to create real impact online.",
    imageSrc: "/images/mentor-ajeena.webp",
    achievements: [
      <>
        <b>5+ years</b> in digital marketing and brand strategy
      </>,
      <>
        Managed ad campaigns with <b>1M+ reach</b> across Meta, Google & Other
        platforms
      </>,
      <>
        Created and managed digital marketing strategies for{" "}
        <b>50+ companies</b> across diverse industries
      </>,
      <>
        Specialist in <b>SEO, SEM,</b> and <b>Social Media Branding</b>
      </>,
    ],
    highlights: [
      {
        icon: <Briefcase className="h-4 w-4" />,
        label: "Experience",
        value: "5+ yrs (Digital Marketing)",
      },
      {
        icon: <GraduationCap className="h-4 w-4" />,
        label: "Specialization",
        value: "SEO, Ads & Analytics",
      },
      {
        icon: <Trophy className="h-4 w-4" />,
        label: "Impact",
        value: "50+ Successfull companies",
      },
    ],
  },
];

// -------------------- Mentor Section --------------------
export default function MentorSection({ className }: { className?: string }) {
  return (
    <section
      id="mentor"
      className={cn(
        "relative container mx-auto px-4 py-14 md:py-20 overflow-x-hidden",
        className
      )}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 dark:bg-green-500/30 bg-green-600/30 blur-3xl rounded-full"
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
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 dark:bg-pink-500/30 bg-pink-600/30 blur-3xl rounded-full"
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-3"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Mentors
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Meet Our Mentors
        </h2>
      </motion.div>

      {/* Mentors Grid */}
      <div className="grid gap-16 md:gap-20">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className={cn(
              "grid items-stretch gap-6 md:grid-cols-5",
              index % 2 === 1 && "md:grid-flow-dense"
            )}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={cn(
                "relative aspect-square rounded-xl md:col-span-2",
                index % 2 === 1 ? "md:col-start-4" : ""
              )}
            >
              <Image
                src={mentor.imageSrc}
                alt={mentor.name}
                fill
                className="object-contain max-w-full"
                priority
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:col-span-3 z-10"
            >
              <Card className="h-full">
                <CardHeader className="pb-2 flex flex-col-reverse items-start justify-between md:flex-row md:items-center">
                  <div className="">
                    <CardTitle className="text-2xl md:text-3xl">
                      {mentor.name}
                    </CardTitle>
                    <div className="flex flex-col">
                      {mentor.title.map((title, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {title}
                        </p>
                      ))}
                    </div>
                  </div>
                  {mentor.badge}
                </CardHeader>

                <Separator />

                <CardContent className="space-y-6 pt-2">
                  <p className="text-muted-foreground">{mentor.summary}</p>

                  {/* Quick highlights */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    {mentor.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-2"
                      >
                        {h.icon}
                        <div className="text-sm leading-tight">
                          <div className="font-medium">{h.label}</div>
                          <div className="text-muted-foreground">{h.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements list */}
                  <ul className="space-y-3">
                    {mentor.achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                          delay: 0.05 * i,
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 size-5 min-w-5 text-primary" />
                        <span className="text-sm md:text-base">{a}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <ApplyNowDialog />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
