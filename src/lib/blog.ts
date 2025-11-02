import fs from "fs";
import path from "path";

export async function getAllBlogs() {
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
