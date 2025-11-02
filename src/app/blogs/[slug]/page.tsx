import Image from "next/image";
import { getAllBlogs } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";
import { Calendar, User } from "lucide-react";
import BreadcrumbList from "@/components/BreadcrumbList";
import { dateString } from "@/lib/date";
import ShareSection from "./ShareSection";
import { BlogCTA } from "./BlogCTA";
import { FadeIn } from "@/components/motion/FadeIn";

export async function generateStaticParams() {
  return (await getAllBlogs()).map((post) => ({ slug: post.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let Post, metadata;

  try {
    const mod = await import(`@/blogs/${slug}.mdx`);
    Post = mod.default;
    metadata = mod.metadata;
  } catch {
    return notFound();
  }

  if (!metadata) return notFound();

  const shareUrl = `${env.siteUrl}/blogs/${slug}`;

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/blogs",
      label: "Blogs",
    },
    {
      href: `/blogs/${slug}`,
      label: metadata.title || "Current page",
    },
  ];

  return (
    <>
      <div className="relative mx-auto px-6 z-10 pt-4 md:pt-8">
        <BreadcrumbList links={links} className="pb-5 justify-center flex " />

        <FadeIn>
          {metadata.banner && (
            <div className="flex justify-center aspect-video">
              <Image
                src={metadata.banner}
                alt={metadata.title}
                width={1600}
                height={900}
                className="rounded w-full object-cover mt-0!"
              />
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-foreground mt-0!">{metadata.title}</h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-sm text-foreground flex justify-between">
            <span className="flex items-center gap-1">
              <User className="size-4" /> {metadata.author?.name}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="size-4" /> {dateString(metadata.date)}
            </span>
          </div>
        </FadeIn>

        <Separator className="mt-6 mb-8" />

        <FadeIn delay={0.25}>
          <Post />
        </FadeIn>

        <FadeIn delay={0.3}>
          <ShareSection
            metadata={metadata}
            className="mt-10 mb-16"
            shareUrl={shareUrl}
          />
        </FadeIn>

        <FadeIn delay={0.35}>
          <BlogCTA />
        </FadeIn>
      </div>
    </>
  );
}
