import fs from "fs";
import path from "path";
import { env } from "./env";

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  author: { name: string };
  category?: string;
  banner?: string;
};

export type BlogData = {
  slug: string;
  metadata: BlogPost;
};

export async function getAllBlogs(): Promise<
  { slug: string; metadata: BlogPost }[]
> {
  const blogDir = path.join(process.cwd(), "src/blogs");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const { metadata } = await import(`@/blogs/${slug}.mdx`);

      return { slug, metadata };
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export async function getBlogMetadata(limit?: number) {
  const blogs = await getAllBlogs();
  return limit ? blogs.slice(0, limit) : blogs;
}

export async function getAdjacentPosts(
  posts: BlogData[],
  slug: string
): Promise<{ prev: BlogData | null; next: BlogData | null }> {
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: posts[index - 1] || null,
    next: posts[index + 1] || null,
  };
}

export function getArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  banner,
  authorName = "ArtUs Academy",
  authorUrl = "https://artusacademy.com",
  siteUrl = env.siteUrl || "https://artusacademy.com",
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  banner?: string;
  authorName?: string;
  authorUrl?: string;
  siteUrl?: string;
}) {
  const url = `${siteUrl}/blogs/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: banner ? `${siteUrl}${banner}` : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "ArtUs Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
