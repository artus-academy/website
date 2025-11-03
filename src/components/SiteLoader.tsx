"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700); // smooth fade
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-999 flex items-center justify-center bg-background transition-opacity duration-500",
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="animate-pulse text-xl font-semibold text-primary tracking-wide">
        <Image
          src="/logo.png"
          alt="ArtUs Academy logo"
          height={240}
          width={240}
          className="rounded-xl object-contain dark:invert-100 dark:saturate-0 size-48"
        />
      </div>
    </div>
  );
}
