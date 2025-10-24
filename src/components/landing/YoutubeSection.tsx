"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const videos = ["7CoUFMO5qiM", "MPVDZ8WWT_4", "TDdo4cfWXQ8", "98BQOedbP_c"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between each video
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
    },
  },
};

export default function YouTubeSection() {
  return (
    <motion.section
      className="relative w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-5 py-16 mx-auto flex flex-col items-center relative -translate-y-12 pt-32">
        <SectionHeading
          title="From Our YouTube Channel"
          subtitle="Learn more about Web Development & Digital Marketing with our tutorials and tips"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem] w-full"
          variants={containerVariants}
        >
          {videos.map((id) => (
            <motion.div
              key={id}
              className="aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200"
              variants={itemVariants}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
