"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { TableOfContents } from "lucide-react";
import Link from "next/link";
import { ApplyNowDialog } from "../ApplyNowDialog";

export default function TOC({
  className,
  linkClickFn,
}: {
  className?: string;
  linkClickFn?: () => void;
}) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h1, h2, h3")
    )
      .filter((el) => !el.dataset?.tocExclude)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: Number(el.tagName.replace("H", "")),
        offsetTop: el.getBoundingClientRect().top + window.scrollY,
      }));

    setHeadings(elements);

    const handleScroll = () => {
      const scrollY = window.scrollY + 200; // adjust for navbar padding
      let current = elements[0]?.id;

      for (let i = 0; i < elements.length; i++) {
        if (scrollY >= elements[i].offsetTop) current = elements[i].id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className={cn("not-prose max-h-120 overflow-auto", className)}>
      <div className="text-sm font-semibold mb-3">On this page</div>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={`${h.id} ${h.text}`}>
            <Link
              href={`#${h.id}`}
              onClick={linkClickFn}
              className={cn(
                "block hover:text-primary transition-colors",
                active === h.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground",
                // indent based on heading level
                {
                  "ml-0": h.level === 1,
                  "ml-3": h.level === 2,
                  "ml-6": h.level === 3,
                  "ml-9": h.level >= 4, // safety for future
                }
              )}
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <Link href="/courses">
          <Button variant="secondary" className="w-full">
            View courses
          </Button>
        </Link>
        {!linkClickFn && <ApplyNowDialog />}
      </div>
    </aside>
  );
}

export function TOCDrawer() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="lg:hidden sticky z-52 top-20 left-2 mb-2"
        asChild
      >
        <Button variant="secondary" className="w-fit">
          <TableOfContents className="size-4" /> TOC
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 z-53">
        <SheetHeader className="sr-only">
          <SheetTitle data-toc-exclude={true}>Table of contents</SheetTitle>
          <SheetDescription>List of heading in the blog page</SheetDescription>
        </SheetHeader>
        <TOC linkClickFn={close} />
      </SheetContent>
    </Sheet>
  );
}
