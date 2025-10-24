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

type Mentor = {
  name: string;
  title: string[];
  summary: string;
  imageSrc: string;
  achievements: (string | React.ReactNode)[];
  highlights: { icon: React.ReactNode; label: string; value: string }[];
};

const mentorData: Mentor = {
  name: "Nikhil Nath R",
  title: ["Senior Software Engineer (ex-Oracle)", "Mentor Web Development"],
  summary:
    "I believe the best way to learn code is by building real things. My goal is to transform beginners into confident, industry-ready developers.",
  imageSrc: "/images/mentor-nikhil.png", // place in /public/images/
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
};

export default function MentorSection({
  className,
  mentor = mentorData,
}: {
  className?: string;
  mentor?: Mentor;
}) {
  return (
    <section
      id="mentor"
      className={cn(
        "relative container mx-auto px-4 py-14 md:py-20",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-3"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Mentor
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Meet Our Mentor
        </h2>
      </motion.div>

      <div className="grid items-stretch gap-6 md:grid-cols-5 z-0">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[1/1] rounded-xl md:col-span-2"
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
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true }}
          className="md:col-span-3 z-10"
        >
          <Card className="h-full">
            <CardHeader className="pb-2">
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
                    <CheckCircle2 className="mt-0.5 size-5 min-w-5 min-h-5 text-primary" />
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
    </section>
  );
}
