import { cn } from "@/lib/utils";
import Link from "next/link";

type ShareSectionProps = {
  metadata: {
    title: string;
    tags: string[];
  };
  shareUrl: string;
  className?: string;
};

export default function ShareSection({
  metadata,
  shareUrl,
  className,
}: ShareSectionProps) {
  return (
    <div className={cn("flex justify-start gap-4", className)}>
      <span className="mr-1">Share on:</span>
      <Link
        href={`https://wa.me/?text=Just found an awesome blog on *${metadata.title}*. Give it a read ${shareUrl}`}
        target="_blank"
      >
        WhatsApp
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=Just found an awesome blog on ${
          metadata.title
        }. Give it a read&hashtags=${socialTags(metadata.tags).join(
          ","
        )}&url=${shareUrl}`}
        target="_blank"
      >
        X
      </Link>
    </div>
  );
}

const socialTags = (tags: string[]) => ["Artus", "ArtusAcademy", ...tags];

export const dynamicParams = false;
