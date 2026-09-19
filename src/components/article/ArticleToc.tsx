"use client";

import { useEffect, useState } from "react";
import toc from "../../../content/mailstack-toc.json";

export default function ArticleToc() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="order-1 min-w-0 flex-[1_1_180px]">
      <div className="sticky top-24 py-7 pt-[clamp(30px,4vw,64px)]">
        <div className="mb-4 font-ap-mono text-[11px] tracking-[.14em] text-white/50 uppercase">Содержание</div>
        <nav className="grid gap-2.75 text-[13.5px] leading-[1.4]">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="grid grid-cols-[34px_minmax(0,1fr)] gap-2.5"
              style={{ color: active === t.id ? "var(--ap-accent)" : "rgba(245,246,247,.62)" }}
            >
              <span className="font-ap-pixel text-xs opacity-90">{t.n}</span>
              <span>{t.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
