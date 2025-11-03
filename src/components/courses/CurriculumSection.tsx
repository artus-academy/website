"use client";

import { easeOut, motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { Button } from "@/components/ui/button";
import { Syllabus } from "@/data/courses";

export default function CurriculumSection({
  syllabus,
  section,
}: {
  syllabus: Syllabus[];
  section: string;
}) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut },
    viewport: { once: true },
  };

  return (
    <section className="space-y-12 flex flex-col items-center w-full py-4 md:py-8">
      <motion.div {...fadeUp} className="text-center space-y-2">
        <motion.div
          {...fadeUp}
          className="mb-4 flex flex-col items-center gap-3 relative z-10"
        >
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            Curriculum
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">
            Course Curriculum
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A structured roadmap designed to take you from beginner to
            industry-ready {section}.
          </p>
        </motion.div>
      </motion.div>

      <Tabs
        defaultValue="Month 1"
        className="max-w-5xl mx-auto w-full lg:flex-row"
      >
        {/* Tabs List */}
        <TabsList
          className="relative grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-0 
      border shadow-sm bg-muted/30 w-full h-20 md:h-10 lg:grid-cols-1 lg:w-32 lg:h-full"
        >
          {syllabus.map((m) => (
            <TabsTrigger
              key={m.label}
              value={m.label}
              className="cursor-pointer relative text-xs md:text-sm
          data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
           transition-all hover:bg-muted w-full lg:h-14"
            >
              {m.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        {syllabus.map((m) => (
          <TabsContent key={m.label} value={m.label} className="">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold tracking-tight">
                  {m.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 leading-relaxed">
                  {m.points.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="text-primary mt-1 w-5 h-5 shrink-0" />
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>

                {m.projects && (
                  <>
                    <Separator className="my-4" />

                    <CardFooter className="pt-1 text-sm flex gap-1 flex-wrap">
                      <span className="font-medium text-muted-foreground mr-1 flex items-center gap-1.5">
                        <Rocket className="text-foreground size-4" /> Projects:
                      </span>
                      {m.projects.map((p) => (
                        <Badge variant="secondary" key={p}>
                          {p}
                        </Badge>
                      ))}
                    </CardFooter>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <ApplyNowDialog
        trigger={
          <Button size="lg" className="text-base">
            Apply now!
          </Button>
        }
      />
    </section>
  );
}
