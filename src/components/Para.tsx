import { cn } from "@/lib/utils";

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-8">{children}</section>;
}

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-base leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Ul({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("list-disc pl-6 mb-4 space-y-2", className)}>
      {children}
    </ul>
  );
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base leading-relaxed text-muted-foreground">
      {children}
    </li>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
      {children}
    </h3>
  );
}

export function B({ children }: { children: React.ReactNode }) {
  return <b className="font-medium dark:text-white text-black">{children}</b>;
}
