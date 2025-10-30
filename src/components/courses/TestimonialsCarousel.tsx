"use client";

import { Testimonial } from "@/data/courses";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="space-y-6 w-full pt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        What Our Students Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory px-4 justify-start lg:justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[260px] max-w-[300px] snap-center rounded-xl border bg-card p-5 shadow-sm shrink-0"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover border"
                />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                “{t.quote}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
