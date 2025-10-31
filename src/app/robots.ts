import { env } from "@/lib/env";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${env.siteUrl}/sitemap.xml`,
  };
}
