import type { Metadata } from "next";
import rows from "../../../content/tech.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Технологии" };

export default function TechPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Технологии" }]} />
      <section className="mx-auto max-w-[1220px] px-6 pt-[clamp(28px,3.5vw,44px)] pb-[clamp(36px,4vw,56px)]">
        <h1 className="m-0 mb-5 max-w-[24ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          Технологии
        </h1>
        <p className="m-0 max-w-[58ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-white/66 text-wrap-pretty">
          Инструменты выбираем под задачу, а не под моду. Вот чем работаем сейчас.
        </p>
      </section>
      <section className="mx-auto max-w-[1060px] px-6 pt-[clamp(30px,4vw,48px)] pb-[clamp(56px,7vw,88px)]">
        <div className="grid">
          {rows.map((r, i) => (
            <div
              key={r.title}
              className={`ap-2col grid grid-cols-[minmax(0,260px)_minmax(0,1fr)] gap-[clamp(14px,3vw,40px)] border-t border-white/14 px-1 py-7.5 ${i === rows.length - 1 ? "border-b" : ""}`}
            >
              <h2 className="m-0 font-ap-display text-[clamp(17px,1.5vw,20px)] leading-[1.3] font-medium">{r.title}</h2>
              <div className="grid min-w-0 gap-3">
                <p className="m-0 text-base leading-[1.55] text-ap-ink text-wrap-pretty">{r.lede}</p>
                <p className="m-0 font-ap-mono text-[12.5px] leading-[1.5] text-ap-accent">{r.stack}</p>
                <p className="m-0 text-sm leading-[1.6] text-white/66 text-wrap-pretty">{r.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/[.09] bg-ap-surface">
        <div className="mx-auto max-w-[1060px] px-6 py-[clamp(48px,6vw,84px)]">
          <h2 className="m-0 mb-7 font-ap-display text-[clamp(23px,2.8vw,32px)] leading-[1.18] font-medium text-wrap-pretty">
            Что здесь интересного инженеру
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.5">
            <p className="m-0 text-[15.5px] leading-[1.62] text-white/78 text-wrap-pretty">
              1С рядом с Go, React и Cloudflare — сочетание, которое редко встретишь.
            </p>
            <p className="m-0 text-[15.5px] leading-[1.62] text-white/78 text-wrap-pretty">
              Задачи без готовых ответов: от перевода студента между программами до маркировки в рознице. Сначала моделируем, потом пишем.
            </p>
            <p className="m-0 text-[15.5px] leading-[1.62] text-white/78 text-wrap-pretty">
              Решения фиксируем вместе с причинами, а не только результат.
            </p>
          </div>
          <div className="mt-[clamp(32px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.5 text-[15.5px] font-semibold">
            <a href="https://github.com/aplicon-ru" target="_blank" rel="noopener" className="text-ap-accent">
              Посмотреть на GitHub →
            </a>
            <a href="/contact" className="text-ap-accent">
              Хотите с нами — напишите →
            </a>
            <a href="https://academ.aplicon.ru" target="_blank" rel="noopener" className="text-ap-accent">
              Сначала научиться — Академия →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
