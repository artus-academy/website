import type { MDXComponents } from "mdx/types";
import { slugify } from "./lib/slugify";

const components: MDXComponents = {
  h1: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h1 id={id} className="scroll-mt-24">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h2 id={id} className="scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h3 id={id} className="scroll-mt-24">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h4 id={id} className="scroll-mt-24">
        {children}
      </h4>
    );
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
