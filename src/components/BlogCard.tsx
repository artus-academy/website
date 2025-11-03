import { easeOut, motion } from "framer-motion";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { BlogPost } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: easeOut },
  }),
};

export default function BlogCard({
  slug,
  metadata,
  position,
}: {
  slug: string;
  position: number;
  metadata: BlogPost;
}) {
  return (
    <motion.div
      key={slug}
      custom={position}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Link
        href={`/blogs/${slug}`}
        className="group block rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="h-48 w-full relative">
          {metadata.category && (
            <Badge
              variant="secondary"
              className="absolute top-2 left-2 transition duration-500 group-hover:scale-110"
            >
              {metadata.category}
            </Badge>
          )}
          {metadata.banner ? (
            <Image
              src={metadata.banner}
              alt={metadata.title}
              width={1200}
              height={600}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full object-cover transition duration-500 group-hover:scale-110 bg-muted text-muted-foreground flex items-center justify-center">
              <Newspaper className="size-24" />
            </div>
          )}
        </div>

        <div className="p-5">
          <Tooltip>
            <TooltipTrigger className="text-left">
              <h3 className="text-lg font-semibold group-hover:text-primary transition pb-2 line-clamp-1 max-h-[2.1ch]">
                {metadata.title}
              </h3>
            </TooltipTrigger>
            <TooltipContent>{metadata.title}</TooltipContent>
          </Tooltip>
          <div className="justify-between text-xs text-muted-foreground flex gap-2 pb-3">
            <span className="flex gap-1 items-center">
              <User className="size-3" />
              {metadata.author.name}
            </span>
            <span className="flex gap-1 items-center">
              <Calendar className="size-3" /> {formatDate(metadata.date)}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {metadata.description}
          </p>
          <div className="text-right">
            <Button
              variant="link"
              className="p-0 text-primary group-hover:underline gap-1"
            >
              Read More <ArrowRight />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
