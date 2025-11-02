import Image from "next/image";
import { getAllBlogs } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";
import { Calendar, User } from "lucide-react";
import BreadcrumbList from "@/components/BreadcrumbList";
import { dateString } from "@/lib/date";

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

        <h1 className="text-foreground mt-0!">{metadata.title}</h1>

        <div className="text-sm text-foreground flex justify-between">
          <span className="flex items-center gap-1">
            <User className="size-4" /> {metadata.author?.name}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-4" /> {dateString(metadata.date)}
          </span>
        </div>

        <Separator className="mt-6 mb-8" />

        <Post />

        <div className="flex justify-start gap-4 mt-24 mb-16">
          <span className="mr-1">Share on:</span>
          <Link
            href={`https://wa.me/?text=Just found an awesome blog on *${metadata.title}*. Give it a read ${shareUrl}`}
            target="_blank"
          >
            WhatsApp
          </Link>
          <Link
            href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=Just found an awesome blog on ${
              metadata.title
            }. Give it a read&hashtags=${socialTags(metadata.tags).join(
              ","
            )}&url=${shareUrl}`}
            target="_blank"
          >
            X
          </Link>
        </div>
      </div>
    </>
  );
}

const socialTags = (tags: string[]) => ["Artus", "ArtusAcademy", ...tags];

export const dynamicParams = false;
