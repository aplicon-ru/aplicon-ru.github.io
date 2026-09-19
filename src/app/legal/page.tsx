import type { Metadata } from "next";
import rows from "../../../content/legal.json";

export const metadata: Metadata = { title: "О компании и реквизиты" };

const MONO_ROWS = new Set(["р/с", "БИК", "к/с", "ИНН", "КПП", "ОКПО", "ОКВЭД", "ОГРН", "ЭДО"]);

export default function LegalPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1000px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(32px,4vw,48px)]">
        <h1 className="m-0 mb-5 max-w-[24ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          О компании и реквизиты
        </h1>
        <p className="m-0 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-white/66 text-wrap-pretty">
          При заключении договоров с ООО «Бизнестехнологии» в преамбуле договора необходимо указывать:
        </p>
        <p className="mt-4.5 mb-0 max-w-[64ch] text-base leading-[1.62] text-ap-ink text-wrap-pretty">
          Общество с ограниченной ответственностью «Бизнес технологии», в лице Генерального директора Мирошниченко Александра Васильевича, действующей на основании устава.
        </p>
        <p className="mt-4.5 mb-0 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-white/66 text-wrap-pretty">
          Также сообщаем свои почтовые и банковские реквизиты для включения в договор:
        </p>
      </section>
      <section className="mx-auto max-w-[1000px] px-6 pb-[clamp(64px,9vw,112px)]">
        <div className="grid">
          {rows.map(([label, value], i) => (
            <div
              key={label}
              className={`ap-2col grid grid-cols-[minmax(0,250px)_minmax(0,1fr)] gap-x-[clamp(10px,2vw,32px)] border-t border-white/14 px-1 py-4.5 ${i === rows.length - 1 ? "border-b" : ""}`}
            >
              <span className="text-sm text-white/66">{label}</span>
              <span className={MONO_ROWS.has(label) ? "font-ap-mono text-[14.5px] break-all text-ap-ink" : "text-[15.5px] text-ap-ink"}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
