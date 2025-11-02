"use client";

import { easeOut, motion } from "framer-motion";
import BreadcrumbList from "@/components/BreadcrumbList";
import BlogCard from "@/components/BlogCard";
import CTACommon from "@/components/CTACommon";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
];

export default function BlogListClient({
  posts,
}: {
  posts: Array<{
    slug: string;
    metadata: {
      title: string;
      description: string;
      date: string;
      author: { name: string };
      banner?: string;
      category?: string;
    };
  }>;
}) {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
          <BreadcrumbList
            links={links}
            className="justify-center flex md:pt-12 md:pb-10 pt-6 pb-5"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center max-w-3xl mx-auto space-y-4 z-10 pb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Articles & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-muted-foreground">
              Learn Web Development, Digital Marketing, Career Strategy, and
              more. Written by mentors at ArtUs Academy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ slug, metadata }, i) => (
              <BlogCard
                key={slug}
                slug={slug}
                metadata={metadata}
                position={i}
              />
            ))}
          </div>
        </div>
      </section>
      <CTACommon className="py-10 pb-20" />
    </>
  );
}
