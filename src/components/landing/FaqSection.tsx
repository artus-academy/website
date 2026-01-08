"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact";

export default function FAQSection({ className }: { className?: string }) {
  return (
    <section
      id="faq"
      className={cn(
        "relative flex justify-center px-4 py-12 md:py-16 bg-linear-to-b to-muted/20 from-background overflow-x-hidden",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-50 left-10 w-80 h-80 dark:bg-sky-500/30 bg-sky-600/30 blur-3xl rounded-full"
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
      <div className="max-w-4xl relative z-10">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge variant="secondary" className="rounded-full px-3 py-1 mb-3">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-2">
            Get quick answers about our courses
          </p>
        </motion.div>

        {/* Accordion Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="who">
              <AccordionTrigger>Who is this course for?</AccordionTrigger>
              <AccordionContent>
                For students, graduates, and working professionals who want to
                start or upskill in web development. No prior coding experience
                required. We start from the basics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="format">
              <AccordionTrigger>Is it online or offline?</AccordionTrigger>
              <AccordionContent>
                We offer both options, attend offline sessions at our Kakkanad
                campus or join interactive online classes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duration">
              <AccordionTrigger>How long is the course?</AccordionTrigger>
              <AccordionContent>
                It is a 6-month intensive program with weekly assignments,
                mentorship, and project reviews to build real-world skills.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="placements">
              <AccordionTrigger>
                Do you provide placement support?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You&apos;ll receive resume assistance, mock interviews, and
                direct interview opportunities with our hiring partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emi">
              <AccordionTrigger>Can I pay in installments?</AccordionTrigger>
              <AccordionContent>
                Definitely, we offer flexible EMI options for all students.
                Reach out to our counsellor for more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <Separator className="my-10" />

        {/* CTA Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-4 rounded-lg border bg-muted/30 p-4 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Still have questions? We&apos;re happy to help on WhatsApp or
              Email.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" asChild>
              <a
                href={`https://wa.me/${contactInfo.phone.number}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={`mailto:${contactInfo.email}`}>Email Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
