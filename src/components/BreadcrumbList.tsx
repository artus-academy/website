import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList as List,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

type BreadcrumbLink = {
  label: string;
  href: string;
};

export default function BreadcrumbList({
  links,
  className,
}: {
  links: BreadcrumbLink[];
  className?: string;
}) {
  return (
    <Breadcrumb className={cn("not-prose", className)}>
      <List>
        {links.map(({ label, href }, i) => (
          <Fragment key={href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {i != links.length - 1 ? (
                  <Link href={href}>{label}</Link>
                ) : (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {i != links.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </List>
    </Breadcrumb>
  );
}
