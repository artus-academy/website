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
      <article
        className="relative w-full mx-auto text-muted-foreground dark:prose-invert prose 
      prose-a:text-foreground prose-a:hover:text-primary prose-a:underline prose-a:transition-all
      prose-strong:font-medium 
      prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground 
      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-1xl 
     prose-h4:text-lg prose-h5:font-semibold prose-h6:font-semibold"
      >
        {children}
      </article>
    </>
  );
}
