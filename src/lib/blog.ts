import fs from "fs";
import path from "path";

export async function getAllBlogs() {
  const blogDir = path.join(process.cwd(), "src/blogs");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  return await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const { metadata } = await import(`@/blogs/${slug}.mdx`);

      return { slug, metadata };
    })
  );
}
