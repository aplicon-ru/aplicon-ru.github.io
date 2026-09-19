import type { Metadata } from "next";
import { people, directions } from "../../../content/team.json";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Команда" };

export default function TeamPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1060px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(30px,4vw,48px)]">
        <h1 className="m-0 mb-5.5 max-w-[22ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.14] font-medium text-wrap-pretty">
          Команда собирается под проект
        </h1>
        <p className="m-0 max-w-[60ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/82 text-wrap-pretty">
          Постоянно — архитектор, дизайнер и системный администратор. Под задачу подключаем разработчиков: часть из них мы выучили сами, в своей Академии.
        </p>
        <p className="mt-5.5 mb-0 max-w-[60ch] text-[clamp(14px,1.05vw,15.5px)] leading-[1.6] text-white/60 text-wrap-pretty">
          Мы не держим людей в простое и не берём проектов больше, чем способны понять. Если на задачу нужно пятьдесят человек — это не к нам.
        </p>
      </section>

      <section className="mx-auto max-w-[1060px] px-6 pb-[clamp(20px,3vw,32px)]">
        <div className="grid">
          {people.map((p, i) => (
            <div
              key={p.name}
              className={`ap-2col grid grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-[clamp(10px,3vw,40px)] border-t border-white/14 px-1 py-6.5 ${i === people.length - 1 ? "border-b" : ""}`}
            >
              {p.role ? (
                <div>
                  <div className="font-ap-display text-[clamp(17px,1.5vw,19px)] leading-[1.3] font-medium">{p.name}</div>
                  <div className="mt-1.75 text-sm text-ap-accent">{p.role}</div>
                </div>
              ) : (
                <div className="font-ap-display text-[clamp(17px,1.5vw,19px)] leading-[1.3] font-medium">{p.name}</div>
              )}
              <p className="m-0 text-[15.5px] leading-[1.6] text-white/82 text-wrap-pretty">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1060px] px-6 pt-[clamp(40px,5vw,64px)] pb-[clamp(20px,3vw,32px)]">
        <h2 className="m-0 mb-[clamp(18px,2.5vw,28px)] font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.2] font-medium">Направления</h2>
        <div className="grid">
          {directions.map((d, i) => (
            <div
              key={d.title}
              className={`ap-2col grid grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-[clamp(10px,3vw,40px)] border-t border-white/14 px-1 py-6 ${i === directions.length - 1 ? "border-b" : ""}`}
            >
              <div className="font-ap-display text-[clamp(16px,1.4vw,18px)] leading-[1.3] font-medium">{d.title}</div>
              <div className="grid min-w-0 gap-2.5">
                <p className="m-0 text-[15.5px] leading-[1.6] text-white/82 text-wrap-pretty">{d.text}</p>
                <a
                  href={d.link}
                  target={d.external ? "_blank" : undefined}
                  rel={d.external ? "noopener" : undefined}
                  className="justify-self-start text-[15px] font-semibold text-ap-accent"
                >
                  {d.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1060px] px-6 pt-[clamp(40px,5vw,64px)] pb-[clamp(64px,9vw,112px)]">
        <p className="m-0 max-w-[46ch] text-[clamp(17px,1.7vw,22px)] leading-[1.5] text-ap-ink text-wrap-pretty">
          Ищем тех, кто любит разбираться. Напишите →{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ap-accent">
            {site.email}
          </a>
        </p>
      </section>
    </main>
  );
}
