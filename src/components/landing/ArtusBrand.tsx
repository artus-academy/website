"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ArtusBrand({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden overflow-x-hidden flex flex-col items-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-x-14 items-center max-w-5xl"
      >
        {/* Logo 1: Order 2 on mobile, Order 1 on desktop */}
        <Image
          src="/images/artus-brand.png"
          alt="ArtUs Brand"
          height={120}
          width={120}
          className="rounded-xl object-contain dark:invert-100 size-32 order-2 lg:order-1 justify-self-center lg:justify-self-start"
        />

        {/* Text: Full width (col-span-2) and Order 1 on mobile */}
        <div className="text-left col-span-2 lg:col-span-1 order-1 lg:order-2">
          <h2 className="text-3xl font-bold flex items-center gap-x-2 lg:text-nowrap mb-2">
            A part of
            <span className="text-primary">ArtUs Brand</span>
          </h2>
          <p className="text-muted-foreground">
            We aren't just educators; we are practitioners. ArtUs Academy is a
            joint venture with ArtUs Brand, a premier digital marketing firm
            that has been delivering ROI for clients for{" "}
            <span className="text-primary-foreground font-medium text-nowrap">
              5+ years
            </span>
          </p>
        </div>

        {/* Logo 2: Order 3 on mobile, Order 3 on desktop */}
        <Image
          src="/logo.png"
          alt="ArtUs Academy logo"
          className="dark:invert-100 dark:saturate-0 size-32 order-3 lg:order-3 justify-self-center lg:justify-self-end"
          width={120}
          height={120}
        />
      </motion.div>
    </section>
  );
}
