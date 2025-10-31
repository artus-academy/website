import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Artus Academy",
    short_name: "Artus Academy",
    description: "Artus Academy",
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
