"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFoundClient() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-9xl mb-4 select-none"
      >
        404
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold mb-2"
      >
        Oops! Page not found
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-8 max-w-md"
      >
        The page you&apos;re looking for does not exist or has been moved.
        Don&apos;t worry, let&apos;s get you back home.
      </motion.p>

      {/* Back to home button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button asChild variant="default" className="gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Go Back Home
          </Link>
        </Button>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[24%] text-6xl select-none pointer-events-none flex "
      >
        <Ghost
          className="w-16 h-16 text-muted-foreground/50"
          strokeWidth={1.2}
        />
        <Ghost
          className="w-16 h-16 text-muted-foreground/50 top-2 relative"
          strokeWidth={1.2}
        />
      </motion.div>
    </div>
  );
}
