"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Copyright,
  MapPin,
  Phone,
  Github,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Raleway } from "next/font/google";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://www.github.com/artus-academy/",
    label: "Github",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/artus_academy/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/artusacademy/",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@artusacademy",
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/artus-academy",
    label: "LinkedIn",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Footer() {
  return (
    <motion.footer
      className="border-t bg-background"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Top & Middle */}
      <motion.div
        className="px-5 py-10 grid gap-8 md:grid-cols-3 justify-center"
        variants={containerVariants}
      >
        {/* Logo + Tagline + Address */}
        <motion.div variants={itemVariants}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="ArtUs Academy logo"
              width={100}
              height={100}
              className="rounded dark:invert-100 dark:saturate-0 dark:brightness-200"
            />
            <div className="flex flex-col">
              <span className={`${raleway.className} font-bold text-xl`}>
                ArtUs Academy
              </span>
              <p
                className={`${raleway.className} text-xs text-muted-foreground max-w-64`}
              >
                Learn Web Development & Digital Marketing the modern way.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="font-semibold mb-3">Pages</h4>
          <ul className="space-y-2">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="mt-7 text-sm text-muted-foreground flex flex-col gap-y-1.5">
            <Link
              href="https://maps.app.goo.gl/tVwAhKW1oaVBih3j7"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="flex gap-x-2 items-center hover:text-primary">
                <MapPin className="size-4" /> Kakkanad, Kochi, Kerala
              </span>
            </Link>
            <Link
              href="tel:919876543210"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="flex gap-x-2 items-center hover:text-primary">
                <Phone className="size-4" /> +91 98765 43210
              </span>
            </Link>
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div className="border-t" variants={itemVariants}>
        <div className="px-5 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
          <p className="flex items-center gap-x-1">
            <Copyright size={15} /> {new Date().getFullYear()} ArtUs Academy.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-primary">
              Refund Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
