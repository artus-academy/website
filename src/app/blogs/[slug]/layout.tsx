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
    authors: metadata.author ?? "ArtUs Academy",
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
    <article
      className="mx-auto px-6 max-w-7xl text-muted-foreground prose 
      prose-a:text-foreground prose-a:hover:text-primary prose-a:underline prose-a:transition-all
      prose-strong:text-foreground prose-strong:font-semibold 
      prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground 
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl 
     prose-h4:text-xl prose-h5:text-lg prose-h6:font-semibold"
    >
      {children}
    </article>
  );
}
