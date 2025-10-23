"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { ChevronDown, Globe, Megaphone, Menu } from "lucide-react";
import { Accordion } from "./ui/accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/courses",
    label: "Courses",
    components: [
      {
        label: "Full Stack Web Development",
        icon: <Globe className="size-10 text-primary" />,
        href: "/courses/web-development",
        description:
          "Be a professional web developer, learn technologies from the basic of web to React, Java Spring boot and MySql. A fully covered course on how to become a professional web application development.",
      },
      {
        label: "Digital Marketing",
        icon: <Megaphone className="size-10 text-primary" />,
        href: "/courses/digital-marketing",
        description:
          "Learn how to market a product to success! Learn different tools of SEO, PPC and other strategies and become a professional digital marketer.",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur px-2 sm:px-6 md:px-10">
      <div className="flex h-16 items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-x-2 font-bold text-xl">
          <Image
            src="/logo.png"
            alt="ArtUs Academy logo"
            className="dark:invert-100 dark:saturate-0 dark:brightness-200"
            width={50}
            height={50}
            priority
          />
          <span className={`${raleway.className} font-bold`}>
            ArtUs Academy
          </span>
        </Link>
        {/* Desktop nav */}

        <NavigationMenu className="hidden md:flex items-center gap-3">
          <NavigationMenuList>
            {links.map((l) => (
              <NavigationMenuItem key={l.href}>
                {l.components ? (
                  <NavigationMenuTrigger>
                    <Link href={l.href} passHref>
                      {l.label}
                    </Link>
                  </NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink
                    className="px-3 py-2 text-sm font-medium hover:text-primary"
                    asChild
                  >
                    <Link href={l.href} passHref>
                      {l.label}
                    </Link>
                  </NavigationMenuLink>
                )}

                <NavigationMenuContent>
                  <ul className="grid w-[400px] lg:w-[500px] gap-2 md:grid-cols-2 ">
                    {l.components?.map((c) => (
                      <ListItem
                        key={c.label}
                        title={c.label}
                        href={c.href}
                        icon={c.icon}
                      >
                        {c.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <Button asChild>
            <Link href="/admissions">Apply</Link>
          </Button>
          <ThemeToggle />
        </NavigationMenu>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex items-center gap-x-2 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-64 px-3">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Primary site navigation</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              {links.map((l) =>
                l.components ? (
                  <Accordion
                    key={l.href}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium hover:text-primary flex items-center gap-x-1">
                        {l.label}
                        <ChevronDown className="size-5" />
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3 text-balance pl-3 mt-3">
                        {l.components.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="font-medium hover:text-primary"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Button asChild className="mt-4">
                <Link href="/admissions">Apply</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: ReactNode }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex gap-x-2">
            <div className="flex items-center justify-center">{icon}</div>
            <div>
              <div className="text-sm leading-none font-medium">{title}</div>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
