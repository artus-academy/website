"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "How to Become a Full-Stack Developer in 2025",
    description:
      "A step-by-step guide on mastering front-end and back-end technologies to become industry-ready this year.",
    category: "Web Development",
    image: "/images/bg-1.png",
    date: "October 15, 2025",
  },
  {
    id: 2,
    title: "10 Proven Strategies for Successful Digital Marketing Campaigns",
    description:
      "Learn how top marketers create campaigns that convert — from targeting to ad analytics and performance tracking.",
    category: "Digital Marketing",
    image: "/images/bg-2.png",
    date: "October 10, 2025",
  },
  {
    id: 3,
    title: "Building a Career in Tech: From Beginner to Pro",
    description:
      "Discover how to structure your learning, gain projects, and land your first job in web development or marketing.",
    category: "Career Growth",
    image: "/images/bg-3.png",
    date: "October 5, 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden">
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
          professional growth — crafted by our mentors and experts.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
            )}
          >
            {/* Blog Image */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <Badge variant="outline">{blog.category}</Badge>
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {blog.description}
              </p>

              <div className="pt-2">
                <Button
                  variant="link"
                  className="p-0 text-primary hover:underline"
                >
                  Read More →
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
