import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and guides on Web Development and Digital Marketing.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
