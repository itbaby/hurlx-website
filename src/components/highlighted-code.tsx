"use client";

import { useState, useEffect } from "react";
import { highlightHurlx, highlightBash, highlightJson } from "@/lib/highlighter";

export function HighlightedCode({
  code,
  lang = "hurlx",
}: {
  code: string;
  lang?: "hurlx" | "bash" | "json";
}) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const highlighters: Record<string, (code: string) => Promise<string>> = {
      hurlx: highlightHurlx,
      bash: highlightBash,
      json: highlightJson,
    };
    const highlight = highlighters[lang] || highlightHurlx;
    
    highlight(code).then(setHtml);
  }, [code, lang]);

  return (
    <div className="[&_pre]:!bg-white [&_pre]:dark:!bg-gray-800 [&_pre]:!p-4 [&_pre]:rounded-xl [&_pre]:text-sm [&_pre]:md:text-base [&_pre]:leading-relaxed [&_pre]:overflow-x-auto [&_pre]:font-mono [&_pre]:!text-gray-900 [&_pre]:dark:!text-white">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
