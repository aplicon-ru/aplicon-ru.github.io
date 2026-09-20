import type { Metadata } from "next";
import { areas, pubs } from "../../../content/research.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Исследования и публикации" };

export default function ResearchPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Исследования" }]} />
      <section className="mx-auto max-w-[1220px] px-6 pt-[clamp(28px,3.5vw,44px)] pb-[clamp(36px,4vw,56px)]">
        <div className="mb-4.5 text-[12.5px] font-semibold tracking-[.16em] text-ap-accent uppercase">Исследования и публикации</div>
        <h1 className="m-0 mb-5 max-w-[24ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          Исследуем то, что потом идёт в продукт
        </h1>
        <p className="m-0 max-w-[62ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/72 text-wrap-pretty">
          Исследовательская часть работы не изолирована от инженерной. Результаты попадают в наши проекты, в курсы и в открытые публикации.
        </p>
      </section>
      <section className="mx-auto max-w-[1220px] px-6 pb-[clamp(44px,5vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4.5">
          {areas.map((a) => (
            <div key={a.title} className="rounded-2xl border border-white/11 p-6.5">
              <h3 className="m-0 mb-3 font-ap-display text-lg font-medium">{a.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.58] text-white/68">{a.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/[.09] bg-ap-surface">
        <div className="mx-auto max-w-[1220px] px-6 py-[clamp(48px,6vw,84px)]">
          <h2 className="m-0 mb-7.5 font-ap-display text-[clamp(23px,2.8vw,32px)] leading-[1.18] font-medium">Публикации</h2>
          <div className="grid">
            {pubs.map((p, i) => (
              <div
                key={p.title}
                className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-5.5 border-t border-white/12 py-5.5 ${i === pubs.length - 1 ? "border-b" : ""}`}
              >
                <span className="font-ap-display text-[13px] text-ap-accent">{p.year}</span>
                <div>
                  <div className="mb-1.5 text-[16.5px] leading-[1.4] font-semibold text-wrap-pretty">{p.title}</div>
                  <div className="text-[13.5px] text-white/60">{p.meta}</div>
                </div>
                <span className="text-[13.5px] whitespace-nowrap text-white/50">PDF</span>
              </div>
            ))}
          </div>
          <p className="mt-6 mb-0 text-[13.5px] text-white/62">Список черновой — заменим на реальные работы и ссылки.</p>
        </div>
      </section>
    </main>
  );
}
