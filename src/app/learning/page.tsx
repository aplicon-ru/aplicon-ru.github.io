import type { Metadata } from "next";
import { programs, format } from "../../../content/learning.json";

export const metadata: Metadata = { title: "Обучение" };

export default function LearningPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1220px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(36px,4vw,56px)]">
        <div className="mb-4.5 text-[12.5px] font-semibold tracking-[.16em] text-ap-accent uppercase">Курсы и программы</div>
        <h1 className="m-0 mb-5 max-w-[24ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          Учим на реальных проектах, а не на учебных примерах
        </h1>
        <p className="m-0 max-w-[62ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/72 text-wrap-pretty">
          Программы ведут инженеры, которые сейчас работают над задачами Апликона. Материал курса — код и данные из практики, а не синтетические задачи.
        </p>
      </section>
      <section className="mx-auto max-w-[1220px] px-6 pb-[clamp(44px,5vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4.5">
          {programs.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 rounded-2xl border border-white/[.09] bg-ap-surface p-7.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[12.5px] font-semibold tracking-[.1em] text-ap-accent uppercase">{p.kind}</span>
                <span className="text-[13.5px] text-white/60">{p.dur}</span>
              </div>
              <h3 className="m-0 font-ap-display text-[21px] leading-[1.24] font-medium">{p.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-white/72">{p.text}</p>
              <div className="mt-auto border-t border-white/12 pt-2.5 text-[13.5px] text-white/60">{p.note}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/[.09]">
        <div className="mx-auto grid max-w-[1220px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.5 px-6 py-[clamp(44px,6vw,80px)]">
          {format.map((f) => (
            <div key={f.title}>
              <div className="mb-3 font-ap-display text-[15px] text-ap-accent">{f.title}</div>
              <p className="m-0 text-[15px] leading-[1.6] text-white/72">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
