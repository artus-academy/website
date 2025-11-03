import Image from "next/image";
import { getAdjacentPosts, getAllBlogs } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import BreadcrumbList from "@/components/BreadcrumbList";
import { dateString } from "@/lib/date";
import ShareSection from "./ShareSection";
import { BlogCTA } from "./BlogCTA";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/blog/ScrollProgress";
import TOC, { TOCDrawer } from "@/components/blog/TableOfContents";
import Link from "next/link";

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
  let adjacentPosts;
  try {
    const mod = await import(`@/blogs/${slug}.mdx`);
    Post = mod.default;
    metadata = mod.metadata;
    const posts = await getAllBlogs();
    adjacentPosts = await getAdjacentPosts(posts, slug);
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
      <ScrollProgress />
      <div className="relative mx-auto px-6 z-10 pt-5 md:pt-8 w-fit">
        <BreadcrumbList links={links} className="pb-5 justify-start flex " />

        <div className="flex relative flex-col-reverse lg:flex-row">
          <div className="prose dark:prose-invert">
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

            <article>
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
            </article>

            <FadeIn delay={0.35}>
              <div className="flex justify-between text-sm ">
                {adjacentPosts.prev ? (
                  <Link
                    href={`/blogs/${adjacentPosts.prev.slug}`}
                    className="hover:text-primary flex gap-1 items-center"
                  >
                    <ArrowLeft className="size-4" />{" "}
                    {adjacentPosts.prev.metadata.title}
                  </Link>
                ) : (
                  <span />
                )}

                {adjacentPosts.next ? (
                  <Link
                    href={`/blogs/${adjacentPosts.next.slug}`}
                    className="hover:text-primary flex gap-1 items-center"
                  >
                    {adjacentPosts.next.metadata.title}
                    <ArrowRight className="size-4" />
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </FadeIn>
          </div>
          <FadeIn className="hidden lg:block min-w-60 max-w-[260px] sticky ml-4">
            <TOC className="sticky top-24 h-fit pl-3 border-l dark:border-neutral-800 border-neutral-200" />
          </FadeIn>
          <TOCDrawer />
        </div>
        <FadeIn delay={0.4}>
          <BlogCTA />
        </FadeIn>
      </div>
    </>
  );
}
