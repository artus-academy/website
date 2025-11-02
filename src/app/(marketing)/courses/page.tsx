"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Monitor, Building2, Wallet, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <>
      <section className="relative pt-20 md:pt-28 mb-20 px-6">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none" />

        <div className="container relative z-10 mx-auto space-y-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-muted-foreground">
              Online + Offline modes available. Easy EMI options included.
            </p>
          </motion.div>

          {/* Benefits Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-6 text-sm font-medium"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Monitor className="h-4 w-4" /> Online Classes
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Building2 className="h-4 w-4" /> Offline Classroom
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Wallet className="h-4 w-4" /> EMI Options Available
            </div>
          </motion.div>

          {/* Course Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {Object.values(courses).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/courses/${course.id}`}>
                  <Card
                    className={cn(
                      "group relative h-full rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300",
                      course.border
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500",
                        `bg-linear-to-br ${course.darkGradient} dark:${course.darkGradient} ${course.lightGradient}`
                      )}
                    />
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "p-2 rounded-lg bg-linear-to-r shadow-sm transition-colors",
                            course.badgeLight,
                            "dark:",
                            course.badgeDark
                          )}
                        >
                          <course.icon className="w-5 h-5" />
                        </div>

                        <CardTitle className="text-xl font-semibold">
                          {course.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2 justify-between">
                        <p className="text-sm text-muted-foreground italic">
                          {course.subtitle}
                        </p>
                        <Badge variant="secondary" className="w-fit">
                          {course.duration}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>

                      {/* Mentor Row */}
                      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center gap-4">
                          {course.mentors.map((mentor) => (
                            <div
                              key={mentor.name}
                              className="flex items-center gap-2"
                            >
                              <Image
                                src={mentor.image}
                                alt={mentor.name}
                                width={42}
                                height={42}
                                className="rounded-full object-cover border shadow-sm"
                              />
                              <div className="leading-tight">
                                <div className="text-sm font-medium">
                                  {mentor.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {mentor.title}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <Button>View details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-10 rounded-2xl overflow-hidden"
      >
        <div className="relative px-8 py-12 md:py-16 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts, work on real projects, and build a
            future-proof career. Online & Offline + EMI options available.
          </p>

          <ApplyNowDialog
            trigger={
              <button className="inline-flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/30 transition-all">
                Apply Now <ArrowRight className="h-4 w-4" />
              </button>
            }
          />
        </div>
      </motion.div>
    </>
  );
}
