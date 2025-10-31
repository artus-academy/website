"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ApplyNowDialog } from "../ApplyNowDialog";
import { Mentor, mentors as mm } from "@/data/mentors";

const mentors: Mentor[] = Object.values(mm);

export default function MentorSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-60 left-10 w-80 h-80 dark:bg-green-500/30 bg-green-600/30 blur-3xl rounded-full"
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
          className="absolute bottom-50 right-10 w-80 h-80 dark:bg-pink-500/30 bg-pink-600/30 blur-3xl rounded-full"
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
        className="mb-12 flex flex-col items-center gap-3"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Mentors
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Meet Our Mentors
        </h2>
      </motion.div>

      {/* Mentors Grid */}
      <div className="grid gap-16 md:gap-20 max-w-7xl">
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
                "relative md:col-span-2 flex items-center justify-center min-h-96",
                index % 2 === 1 ? "md:col-start-4" : ""
              )}
            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-contain"
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
                      <p className="text-sm text-muted-foreground">
                        {mentor.title}
                      </p>
                    </div>
                  </div>
                  {mentor.badge}
                </CardHeader>

                <Separator />

                <CardContent className="space-y-6 pt-2">
                  <p className="text-muted-foreground">{mentor.quote}</p>

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
