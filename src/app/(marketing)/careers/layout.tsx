import { DefaultLayout } from "@/components/DefaultLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore exciting career opportunities at ArtUs Academy, Kochi's leading institute for Web Development and Digital Marketing. Join our team of passionate educators, developers, and marketers shaping the next generation of tech talent.",
  openGraph: {
    title: "Careers at ArtUs Academy",
    description:
      "We're hiring! Discover open positions at ArtUs Academy - Web Developers, Trainers, Marketers, and Operations roles available in Kochi.",
    url: "https://artusacademy.com/careers",
    siteName: "ArtUs Academy",
    type: "website",
  },
  alternates: {
    canonical: "https://artusacademy.com/careers",
  },
};
export default DefaultLayout;
