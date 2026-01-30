import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";

export default async function CodeBlock({ children, ...props }: any) {
  // Extract code string and language from children
  // MDX usually structure is: <pre><code className="language-js">code</code></pre>
  const codeElement = children;
  if (!codeElement || codeElement.type !== "code") {
    return (
      <div className="code-block-wrapper group">
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton code={String(children)} />
        </div>
        <pre {...props}>{children}</pre>
      </div>
    );
  }

  const code = String(codeElement.props.children || "");
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
    <div className="code-block-wrapper group">
      <div className="absolute right-3 top-3 flex items-center gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <span className="text-[10px] font-mono text-muted-foreground uppercase bg-muted/50 px-2 py-1 rounded">
          {lang}
        </span>
        <CopyButton code={code} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
