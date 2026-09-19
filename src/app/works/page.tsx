import type { Metadata } from "next";
import Link from "next/link";
import { products, projects, portfolio } from "../../../content/works.json";
import StatusBadge from "@/components/StatusBadge";

export const metadata: Metadata = { title: "Работы" };

export default function WorksPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1060px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(28px,3vw,44px)]">
        <h1 className="m-0 mb-5 font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">Работы</h1>
        <p className="m-0 max-w-[58ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-white/66 text-wrap-pretty">
          Свои продукты, проекты для заказчиков и отдельные работы.
        </p>
      </section>

      <nav className="sticky top-[56px] z-40 border-t border-white/14 border-b border-white/[.09] bg-ap-bg/92 backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1060px] justify-between gap-4 px-6 py-4 text-[16px] font-semibold sm:text-[17px]">
          <a href="#works-products" className="text-ap-accent">Продукты</a>
          <a href="#works-projects" className="text-ap-accent">Проекты</a>
          <a href="#works-portfolio" className="text-ap-accent">Портфолио</a>
        </div>
      </nav>

      <section id="works-products" className="mx-auto max-w-[1060px] scroll-mt-[90px] px-6 pt-[clamp(30px,4vw,48px)] pb-[clamp(20px,3vw,32px)]">
        <h2 className="m-0 mb-3 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.2] font-medium">Продукты</h2>
        <p className="m-0 mb-[clamp(18px,2.5vw,28px)] max-w-[56ch] text-[15px] leading-[1.6] text-white/66 text-wrap-pretty">
          Своё, тиражируемое: ставим не одному заказчику, развиваем сами.
        </p>
        <div className="grid">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`ap-2col grid grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-[clamp(10px,3vw,40px)] border-t border-white/14 px-1 py-6 ${i === products.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                {p.href ? (
                  <Link href={p.href} className="font-ap-display text-[clamp(17px,1.5vw,19px)] leading-[1.3] font-medium text-ap-ink hover:!text-ap-accent">
                    {p.name}
                  </Link>
                ) : (
                  <span className="font-ap-display text-[clamp(17px,1.5vw,19px)] leading-[1.3] font-medium">{p.name}</span>
                )}
                <StatusBadge status={p.status} />
              </div>
              <p className="m-0 text-[15.5px] leading-[1.6] text-white/82 text-wrap-pretty">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="works-projects" className="mx-auto max-w-[1060px] scroll-mt-[90px] px-6 pt-[clamp(34px,4vw,56px)] pb-[clamp(20px,3vw,32px)]">
        <h2 className="m-0 mb-3 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.2] font-medium">Проекты</h2>
        <p className="m-0 mb-[clamp(18px,2.5vw,28px)] max-w-[56ch] text-[15px] leading-[1.6] text-white/66 text-wrap-pretty">
          Работа для конкретного заказчика: архитектура, внедрение, миграция.
        </p>
        <div className="grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`ap-2col grid grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-[clamp(10px,3vw,40px)] border-t border-white/14 px-1 py-6 ${i === projects.length - 1 ? "border-b" : ""}`}
            >
              <span className="font-ap-display text-[clamp(16px,1.4vw,18px)] leading-[1.34] text-wrap-pretty">{p.title}</span>
              <p className="m-0 text-[15.5px] leading-[1.6] text-white/82 text-wrap-pretty">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="works-portfolio" className="mx-auto max-w-[1060px] scroll-mt-[90px] px-6 pt-[clamp(34px,4vw,56px)] pb-[clamp(64px,9vw,112px)]">
        <h2 className="m-0 mb-3 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.2] font-medium">Портфолио</h2>
        <p className="m-0 mb-[clamp(18px,2.5vw,28px)] max-w-[56ch] text-[15px] leading-[1.6] text-white/66 text-wrap-pretty">
          Отдельные работы: сайты, компоненты, утилиты.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
          {portfolio.map((item, i) =>
            item.title ? (
              <div key={item.title} className="flex flex-col gap-3 rounded-[14px] border border-white/[.09] bg-ap-surface px-6 py-5.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-ap-display text-[17px] leading-[1.3] font-medium">{item.title}</span>
                  {item.status && <StatusBadge status={item.status} />}
                </div>
                <p className="m-0 text-[15px] leading-[1.55] text-white/80 text-wrap-pretty">{item.text}</p>
                <div className="mt-auto grid justify-items-start gap-2 text-[14.5px] font-semibold">
                  {item.links?.map((l) =>
                    l.external ? (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener" className="text-ap-accent">
                        {l.label}
                      </a>
                    ) : (
                      <Link key={l.label} href={l.href} className="text-ap-accent">
                        {l.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div key={i} className="rounded-[14px] border border-white/[.09] bg-ap-surface px-6 py-5.5 text-[15.5px] leading-[1.5] text-white/88 text-wrap-pretty">
                {item.text}
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
