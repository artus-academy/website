import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/lib/env";
import SiteLoader from "@/components/SiteLoader";
import { StructuredData } from "@/components/StructuredData";
import { organizationSchema } from "@/data/schema/organisation";
import { localBusinessSchema } from "@/data/schema/localBusiness";
import { ajeenaPersonSchema, nikhilPersonSchema } from "@/data/schema/mentors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  authors: [{ name: "Artus Academy", url: "https://artusacademy.com" }],
  title: {
    default:
      "ArtUs Academy - Web Development & Digital Marketing Courses in Kochi",
    template: "%s • ArtUs Academy",
  },
  description:
    "Industry-ready Web Development and Digital Marketing courses in Kochi with real project training, expert mentorship, and job placement support.",
  keywords: [
    "ArtUs Academy",
    "Learn Web development",
    "Web Development Course Kochi",
    "Digital Marketing Course Kochi",
    "Full Stack Developer Training Kerala",
    "Digital Marketing Institute Kerala",
    "Coding Bootcamp Kochi",
    "Online Digital Marketing Classes",
    "Placement Training Kochi",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://artusacademy.com",
    siteName: "ArtUs Academy",
    title: "ArtUs Academy - Learn by Building",
    description:
      "Learn Web Development and Digital Marketing through real-world projects, expert mentors, and job-ready training in Kochi.",
    images: [{ url: "/images/banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtUs Academy",
    description:
      "Web Dev + Digital Marketing, taught by pros. Learn by building.",
    images: [{ url: "/images/banner.png" }],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6C47FF" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLoader />
          <Toaster richColors />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={nikhilPersonSchema} />
        <StructuredData data={ajeenaPersonSchema} />
      </body>
    </html>
  );
}
