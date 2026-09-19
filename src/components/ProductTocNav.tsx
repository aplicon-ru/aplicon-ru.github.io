"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "p-task", label: "Задача" },
  { id: "p-can", label: "Что умеет" },
  { id: "p-decisions", label: "Решения" },
  { id: "p-not", label: "Чего не делаем" },
  { id: "p-state", label: "Состояние" },
  { id: "p-tech", label: "Технологии" },
];

export default function ProductTocNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
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
    <nav className="sticky top-[56px] z-40 border-t border-white/14 border-b border-white/[.09] bg-ap-bg/92 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[760px] gap-5 overflow-x-auto px-6 text-[13.5px] font-semibold whitespace-nowrap">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="border-b-2 py-3.25"
            style={{
              color: active === s.id ? "var(--ap-accent)" : "rgba(245,246,247,.66)",
              borderBottomColor: active === s.id ? "var(--ap-accent)" : "transparent",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
