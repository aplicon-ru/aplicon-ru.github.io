"use client";

import toc from "../../../content/mailstack-toc.json";
import { useTocActive } from "./useTocActive";

// Десктопная боковая колонка. На мобиле скрыта — там ArticleTocMobile
// (выпадающий список, прилипает под шапкой при прокрутке).
export default function ArticleToc() {
  const active = useTocActive(toc.map((t) => t.id));

  return (
    <aside className="order-1 hidden min-w-0 flex-[1_1_180px] md:block">
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
