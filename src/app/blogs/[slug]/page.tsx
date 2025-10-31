import Image from "next/image";
import { getAllBlogs } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";

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

  return (
    <>
      {metadata.banner && (
        <div className="flex justify-center">
          <Image
            src={metadata.banner}
            alt={metadata.title}
            width={1200}
            height={800}
            className="rounded-xl w-full object-cover"
          />
        </div>
      )}
      <h1>{metadata.title}</h1>

      <div className="text-sm text-muted-foreground flex gap-3">
        <span>{new Date(metadata.date).toLocaleDateString()}</span>
        <span>• {metadata.author}</span>
      </div>

      <Separator className="mt-10 mb-8" />
      <div className="">
        <Post />
      </div>

      <div className="flex justify-start gap-4 mt-24 mb-16">
        <span className="mr-1">Share on:</span>
        <Link
          href={`https://wa.me/?text=${shareUrl}/blogs/${slug}`}
          target="_blank"
        >
          WhatsApp
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?url=${shareUrl}/blogs/${slug}`}
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?url=${shareUrl}/blogs/${slug}`}
          target="_blank"
        >
          Twitter / X
        </Link>
      </div>
    </>
  );
}

export const dynamicParams = false;
