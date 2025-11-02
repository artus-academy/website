import { getAllBlogs } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
  const posts = await getAllBlogs();

  return <BlogListClient posts={posts} />;
}
