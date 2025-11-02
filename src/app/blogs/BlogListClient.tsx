"use client";

import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: easeOut },
  }),
};

export default function BlogListClient({
  posts,
}: {
  posts: Array<{
    slug: string;
    metadata: {
      title: string;
      description: string;
      date: string;
      banner?: string;
      author: { name: string };
    };
  }>;
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center tracking-tight"
        >
          Articles & Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Learn Web Development, Digital Marketing, Career Strategy, and more.
          Written by mentors at ArtUs Academy.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ slug, metadata }, i) => (
            <motion.div
              key={slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                href={`/blogs/${slug}`}
                className="group block rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {metadata.banner && (
                  <Image
                    src={metadata.banner}
                    alt={metadata.title}
                    width={1200}
                    height={600}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                )}

                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-semibold group-hover:text-primary transition">
                    {metadata.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {metadata.description}
                  </p>

                  <div className="justify-between text-xs text-muted-foreground pt-2 flex gap-2">
                    <span className="flex gap-1 items-center">
                      <Calendar className="size-3" />{" "}
                      {new Date(metadata.date).toLocaleDateString()}
                    </span>
                    <span className="flex gap-1 items-center">
                      <User className="size-3" />
                      {metadata.author.name}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <span className="flex justify-center text-sm text-muted-foreground">
          You&apos;ve reached the end
        </span>
      </div>
    </section>
  );
}
