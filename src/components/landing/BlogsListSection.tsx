"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ApplyNowDialog } from "../ApplyNowDialog";
import Link from "next/link";
import BlogCard from "../BlogCard";

export default function BlogListSection({
  data,
}: {
  data: {
    slug: string;

    metadata: {
      title: string;
      description: string;
      date: string;
      author: { name: string };
      category?: string;
      banner?: string;
    };
  }[];
}) {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden overflow-x-hidden flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 space-y-3"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Our Blog
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Insights & Tips from{" "}
          <span className="text-primary">Artus Academy</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore articles on web development, digital marketing, and
          professional growth, crafted by our mentors and experts.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {data.map((blog, i) => (
          <BlogCard
            key={blog.slug}
            metadata={blog.metadata}
            slug={blog.slug}
            position={i}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16 gap-4"
      >
        <ApplyNowDialog
          trigger={<Button variant="outline">Apply now!</Button>}
        />
        <Link href="/blogs">
          <Button>Read all blogs</Button>
        </Link>
      </motion.div>
    </section>
  );
}
