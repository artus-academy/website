import { getAllBlogs } from "@/lib/blog";
import { env } from "@/lib/env";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = env.siteUrl;

  const staticRoutes = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/courses/web-development`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteUrl}/courses/digital-marketing`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 0.4,
    },
  ];

  const blogPosts = (await getAllBlogs()).map(({ slug, metadata }) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: metadata.date ? new Date(metadata.date) : new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogPosts];
}
