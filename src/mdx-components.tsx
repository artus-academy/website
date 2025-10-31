import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => <h1>{children}</h1>,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
