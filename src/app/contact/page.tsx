import type { Metadata } from "next";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-[1220px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(32px,5vw,64px)] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(52px,7vw,92px)]">
        <div className="min-w-0">
          <div className="mb-4.5 text-[12.5px] font-semibold tracking-[.16em] text-ap-accent uppercase">Контакты</div>
          <h1 className="m-0 mb-5 max-w-[22ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
            Расскажите, над чем работаете
          </h1>
          <p className="m-0 mb-8.5 max-w-[52ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/72 text-wrap-pretty">
            Отвечаем в течение рабочего дня. Если задача исследовательская и вы сами пока не знаете формулировку — тоже пишите, разберёмся вместе.
          </p>
          <div className="grid max-w-[420px] gap-4.5">
            <div className="border-t border-white/12 pt-3.5">
              <div className="mb-1.25 text-[13px] text-white/55">Почта</div>
              <a href={`mailto:${site.email}`} className="text-[17px] font-semibold">
                {site.email}
              </a>
            </div>
            <div className="border-t border-white/12 pt-3.5">
              <div className="mb-1.25 text-[13px] text-white/55">Обучение</div>
              <a href={`mailto:${site.learningEmail}`} className="text-[17px] font-semibold">
                {site.learningEmail}
              </a>
            </div>
            <div className="border-t border-white/12 pt-3.5">
              <div className="mb-1.25 text-[13px] text-white/55">Телефон</div>
              <span className="text-[17px] font-semibold text-ap-ink">{site.phone}</span>
            </div>
          </div>
        </div>
        <div className="min-w-0 grid content-start gap-5 rounded-[18px] border border-white/[.09] bg-ap-surface p-[clamp(26px,3vw,36px)]">
          <div>
            <div className="font-ap-display text-[19px] font-medium">Написать в мессенджер</div>
            <p className="m-0 mt-2 text-[14px] leading-[1.5] text-white/62">
              Быстрее всего — в один из этих. Отвечаем сами, без ботов.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {site.messengers.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener"
                className="rounded-[9px] border border-white/16 px-4 py-3.25 text-center text-[15px] font-semibold text-ap-ink hover:!border-ap-accent/60 hover:!text-ap-accent"
              >
                {m.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
