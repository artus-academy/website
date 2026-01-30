import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";

export default async function CodeBlock({ children, ...props }: any) {
  // Extract code string and language from children
  // MDX usually structure is: <pre><code className="language-js">code</code></pre>
  const codeElement = children;
  if (!codeElement || codeElement.type !== "code") {
    return (
      <div className="code-block-wrapper">
        <pre {...props}>{children}</pre>
      </div>
    );
  }

  const code = codeElement.props.children;
  const className = codeElement.props.className || "";
  const lang = className.replace("language-", "") || "text";

  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "one-dark-pro",
    },
    defaultColor: false,
  });

  return (
    <div
      className="code-block-wrapper"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
