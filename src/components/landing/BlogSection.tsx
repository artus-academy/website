import { getBlogMetadata } from "@/lib/blog";
import BlogListSection from "./BlogsListSection";

export default async function BlogSection() {
  const blogs = await getBlogMetadata(3);
  return <BlogListSection data={blogs} />;
}
