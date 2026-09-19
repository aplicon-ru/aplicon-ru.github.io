"use client";

import { useEffect, useState } from "react";
import toc from "../../../content/mailstack-toc.json";
import { useTocActive } from "./useTocActive";

// Мобильная версия содержания: свёрнутая строка прилипает под шапкой при
// прокрутке, разворачивается в список по тапу. На десктопе скрыта — там
// ArticleToc (боковая колонка).
export default function ArticleTocMobile() {
  const active = useTocActive(toc.map((t) => t.id));
  const [open, setOpen] = useState(false);
  const activeItem = toc.find((t) => t.id === active) ?? toc[0];

  // Закрыть список при переходе по ссылке (клик по якорю не меняет
  // маршрут, слушаем hashchange отдельно на всякий случай).
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <div className="sticky top-[56px] z-40 border-t border-white/14 border-b border-white/[.09] bg-ap-bg/95 backdrop-blur-[14px] md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-6 py-3.5 text-left"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="font-ap-mono text-xs text-ap-accent">{activeItem.n}</span>
          <span className="truncate text-[14.5px] font-semibold">{activeItem.label}</span>
        </span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <nav className="grid max-h-[60vh] gap-0.5 overflow-y-auto border-t border-white/10 px-6 pt-2 pb-4">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={() => setOpen(false)}
              className="grid grid-cols-[30px_minmax(0,1fr)] gap-2.5 py-2 text-[14px]"
              style={{ color: active === t.id ? "var(--ap-accent)" : "rgba(245,246,247,.66)" }}
            >
              <span className="font-ap-pixel text-xs opacity-90">{t.n}</span>
              <span>{t.label}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
