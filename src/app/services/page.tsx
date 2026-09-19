import type { Metadata } from "next";
import cards from "../../../content/services.json";

export const metadata: Metadata = { title: "Услуги" };

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1220px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(28px,3vw,44px)]">
        <div className="mb-4.5 text-[12.5px] font-semibold tracking-[.16em] text-ap-accent uppercase">Услуги</div>
        <h1 className="m-0 mb-5 max-w-[24ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          Инженерные задачи, у которых нет готового решения
        </h1>
        <p className="m-0 max-w-[62ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/72 text-wrap-pretty">
          Мы редко делаем типовое. Приходят с задачами, где заранее неизвестно, сработает ли подход — и наша работа начинается с того, чтобы это выяснить.
        </p>
      </section>
      <section className="mx-auto max-w-[1220px] px-6 pb-[clamp(52px,7vw,92px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4.5">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-white/[.09] bg-ap-surface p-7.5">
              <h3 className="m-0 mb-3.5 font-ap-display text-xl font-medium">{c.title}</h3>
              <p className="m-0 mb-4.5 text-[15px] leading-[1.6] text-white/72">{c.text}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-ap-accent/45 px-2.75 py-1.25 text-[12.5px] text-ap-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
