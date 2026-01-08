import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArtUs Academy",
    short_name: "ArtUs Academy",
    description: "ArtUs Academy",
    start_url: "/",
    display: "standalone",
    background_color: "#2d144d",
    theme_color: "#2d144d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
