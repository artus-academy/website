"use client";

import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Film } from "lucide-react";
import { cn } from "@/lib/utils";

export function WebDevelopmentBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 hover:from-blue-500/20 hover:to-cyan-500/20 transition-colors duration-300",
        className
      )}
    >
      <Code2 className="h-3.5 w-3.5" />
      Web Development
    </Badge>
  );
}

export function DigitalMarketingBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 text-pink-600 dark:text-pink-400 hover:from-pink-500/20 hover:to-orange-500/20 transition-colors duration-300",
        className
      )}
    >
      <Rocket className="h-3.5 w-3.5" />
      Digital Marketing
    </Badge>
  );
}

export function VideoEditingBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 hover:from-purple-500/20 hover:to-indigo-500/20 transition-colors duration-300",
        className
      )}
    >
      <Film className="h-3.5 w-3.5" />
      Video Editing
    </Badge>
  );
}

