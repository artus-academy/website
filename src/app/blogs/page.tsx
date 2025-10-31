import { getAllBlogs } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogList() {
  const posts = await getAllBlogs();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(({ slug, metadata }) => (
          <Link key={slug} href={`/blogs/${slug}`}>
            <div className="group rounded-xl overflow-hidden border bg-card hover:shadow-lg transition">
              {metadata.banner && (
                <Image
                  src={metadata.banner}
                  alt={metadata.title}
                  width={1200}
                  height={600}
                  className="h-48 w-full object-cover group-hover:scale-105 transition"
                />
              )}

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{metadata.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {metadata.description}
                </p>

                <div className="text-xs text-muted-foreground">
                  {new Date(metadata.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
