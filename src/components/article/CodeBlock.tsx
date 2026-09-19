"use client";

import { useRef, useState } from "react";

export default function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const onCopy = () => {
    if (!preRef.current || !navigator.clipboard) return;
    navigator.clipboard.writeText(preRef.current.textContent || "").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ap-surface">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5 pr-3 pl-4.5">
        <span className="font-ap-mono text-[11.5px] tracking-[.07em] text-white/62">{label}</span>
        <button
          type="button"
          onClick={onCopy}
          className="shrink-0 rounded-[7px] border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/78 hover:!border-ap-accent/50 hover:!text-ap-accent"
        >
          {copied ? "Скопировано" : "Копировать"}
        </button>
      </div>
      <pre ref={preRef} className="m-0 overflow-x-auto p-5 font-ap-mono text-[13.5px] leading-[1.7] text-white/88">
        {code}
      </pre>
    </div>
  );
}
