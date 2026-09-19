import type { Metadata } from "next";
import Link from "next/link";
import items from "../../../../content/hosting-checklist.json";
import CodeBlock from "@/components/article/CodeBlock";

export const metadata: Metadata = { title: "Выбор хостинга под свою почту" };

export default function HostingChecklistPage() {
  return (
    <main>
      <section className="mx-auto max-w-[760px] px-6 pt-[clamp(40px,5vw,72px)] pb-[clamp(30px,4vw,44px)]">
        <div className="mb-[clamp(22px,3vw,34px)] flex flex-wrap items-baseline gap-2 text-[13px] text-white/60">
          <Link href="/blog" className="text-white/60 hover:!text-ap-accent">Блог</Link>
          <span className="text-white/35">→</span>
          <span>Чек-лист</span>
        </div>
        <h1 className="m-0 max-w-[26ch] font-ap-display text-[clamp(27px,4vw,44px)] leading-[1.16] font-medium text-wrap-pretty">
          Выбор хостинга под свою почту: что спросить до оплаты
        </h1>
      </section>

      <section className="mx-auto max-w-[760px] border-t border-white/14 px-6 py-[clamp(30px,4vw,44px)]">
        <div className="grid">
          {items.map((it, i) => (
            <div key={it.q} className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-1 border-t border-white/10 py-5.5">
              <span className="font-ap-display text-[17px] leading-[1.45] font-medium text-ap-accent">{i + 1}</span>
              <div>
                <div className="mb-1.75 text-[17px] leading-[1.45] font-bold text-wrap-pretty">{it.q}</div>
                <p className="m-0 text-[15px] leading-[1.6] text-white/66 text-wrap-pretty">{it.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[760px] border-t border-white/14 px-6 py-[clamp(30px,4vw,44px)]">
        <h2 className="m-0 mb-4.5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Как проверить за час</h2>
        <p className="m-0 mb-6 max-w-[64ch] text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
          Ответы поддержки полезно сверить с реальностью сразу после выдачи сервера. Две команды показывают, уходит ли соединение на порт 25 и что отвечает обратная запись адреса.
        </p>
        <CodeBlock
          label="проверка площадки"
          code={`# уходит ли порт 25 наружу\nnc -vz gmail-smtp-in.l.google.com 25\n\n# что отвечает обратная запись адреса\ndig -x 203.0.113.10 +short`}
        />
      </section>

      <section className="mx-auto max-w-[760px] border-t border-white/14 px-6 pt-[clamp(30px,4vw,44px)] pb-[clamp(64px,9vw,112px)]">
        <Link href="/blog/mailstack" className="text-base font-semibold text-ap-accent">Подробный разбор с таблицами провайдеров →</Link>
      </section>
    </main>
  );
}
