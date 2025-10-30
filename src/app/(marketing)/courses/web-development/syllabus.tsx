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

export default function FullStackSyllabusTabs() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut },
    viewport: { once: true },
  };

  const months = [
    {
      label: "Month 1",
      title: "Web Foundations + Git",
      points: [
        "How the Internet Works, HTTP/HTTPS & DevTools",
        "Semantic HTML, Layouts with Flexbox & Grid",
        "Responsive Design for all screen sizes",
        "Version Control with Git & GitHub",
        "Linux Basics & Terminal Commands",
      ],
      projects: ["Portfolio Webpage", "Responsive Business Landing Page"],
    },
    {
      label: "Month 2",
      title: "JavaScript & UI Development",
      points: [
        "Variables, Functions, Scope & Events",
        "DOM Manipulation & Browser APIs",
        "ES6+ Features, Async/Await, Fetch API",
        "JSON, LocalStorage & Form Handling",
      ],
      projects: [
        "Weather App",
        "Interactive Blog UI",
        "Calculator & Game Projects",
      ],
    },
    {
      label: "Month 3",
      title: "React & UI Frameworks",
      points: [
        "React Components, Props & State",
        "Hooks, Context API & Routing",
        "Reusable UI Patterns & State Management",
        "Tailwind + shadcn + Material UI",
        "API Integration & Error Handling",
      ],
      projects: ["Dashboard App", "E-Commerce Frontend", "Social Feed App"],
    },
    {
      label: "Month 4",
      title: "Java + OOP + Databases",
      points: [
        "Java Syntax & Control Flow",
        "Objects, Classes & OOP Concepts",
        "Collections, Exceptions & Streams",
        "MySQL + Relational Database Design",
        "JDBC & DAO Design Patterns",
      ],
      projects: ["CLI Employee Manager", "Library Records Management System"],
    },
    {
      label: "Month 5",
      title: "Spring Boot + Backend APIs",
      points: [
        "REST API Design & Controllers",
        "Dependency Injection & Beans",
        "DTOs, Service Layer & Repositories",
        "Authentication with JWT",
        "API Testing with Postman",
      ],
      projects: ["User Auth API", "Task Manager Backend", "Blog REST Service"],
    },
    {
      label: "Month 6",
      title: "Full-Stack Project + Deployment + Placement Prep",
      points: [
        "Integrate React Frontend + Spring Boot Backend",
        "Team Workflow: Git Branching + Code Reviews",
        "Deploy Full-Stack App to Cloud",
        "Resume, LinkedIn, GitHub Profile Optimization",
        "Mock Interviews & Coding Practice",
      ],
      projects: ["Full-Stack Team Project (Demo Day Presentation)"],
    },
  ];

  return (
    <section className="pt-16 pb-8 space-y-12 flex flex-col items-center w-full">
      <motion.div {...fadeUp} className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Course Curriculum</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A structured roadmap designed to take you from beginner to
          industry-ready developer.
        </p>
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
          {months.map((m) => (
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
        {months.map((m) => (
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

                <Separator className="my-4" />

                <CardFooter className="pt-1 text-sm text-muted-foreground flex gap-1 flex-wrap">
                  <span className="font-medium text-foreground mr-1 flex items-center gap-1">
                    <Rocket /> Projects:
                  </span>
                  {m.projects.map((p) => (
                    <Badge variant="secondary" key={p}>
                      {p}
                    </Badge>
                  ))}
                </CardFooter>
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
