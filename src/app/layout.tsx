import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import PageTransition from "@/components/PageTransition";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "ArtUs Academy — Web Development & Digital Marketing",
    template: "%s • ArtUs Academy",
  },
  description:
    "Learn Web Development and Digital Marketing with an industry-ready curriculum. Hands-on projects, mentorship, and job-ready skills.",
  openGraph: {
    title: "ArtUs Academy",
    description: "Web Dev + Digital Marketing in a modern, hands-on program.",
    url: "https://artusacademy.com",
    siteName: "ArtUs Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtUs Academy",
    description:
      "Web Dev + Digital Marketing, taught by pros. Learn by building.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
