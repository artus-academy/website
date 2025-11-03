import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/blogs/${slug}.mdx`);

  if (!metadata) {
    return {
      title: "Blog Post Not Found • ArtUs Academy",
    };
  }

  return {
    title: metadata.title + " • ArtUs Academy",
    description: metadata.description ?? "",
    authors: [metadata.author],
    openGraph: {
      title: metadata.title,
      description: metadata.description ?? "",
      images: metadata.banner ? [{ url: metadata.banner }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description ?? "",
    },
  };
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none z-0 max-h-96 top-16`}
      />
      {children}
    </>
  );
}
