import fs from "fs";
import path from "path";

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
