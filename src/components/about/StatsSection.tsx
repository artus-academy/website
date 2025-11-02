"use client";

import { motion } from "framer-motion";
import Counter from "../Counter";

const STATS = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 70, suffix: "+", label: "Successful Clients" },
  { value: 650, suffix: "+", label: "Ad Campaigns Managed" },
  { value: 10000, suffix: "+", label: "Leads Generated" },
  { value: 50, suffix: "+", label: "Website Creations" },
  { value: 7000, suffix: "+", label: "Posts Created" },
];

export default function StatsSection() {
  return (
    <section className="py-6 md:py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center hover:scale-[1.05] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-semibold text-primary">
                <Counter to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
