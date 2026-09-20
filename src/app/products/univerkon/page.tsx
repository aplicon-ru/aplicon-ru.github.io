import type { Metadata } from "next";
import Link from "next/link";
import { canDo, decisions, otherProducts } from "../../../../content/product-univerkon.json";
import StatusBadge from "@/components/StatusBadge";
import ProductTocNav from "@/components/ProductTocNav";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Универкон" };

export default function UniverkonPage() {
  return (
    <main>
      <Breadcrumbs
        items={[{ label: "Работы", href: "/works" }, { label: "Продукты", href: "/works#works-products" }, { label: "Универкон" }]}
        maxWidth="max-w-[760px]"
      />

      <ProductTocNav />

      <section className="mx-auto max-w-[760px] px-6 pt-[clamp(28px,3.5vw,44px)] pb-[clamp(30px,4vw,48px)]">
        <div className="flex flex-wrap items-center justify-between gap-3.5">
          <h1 className="m-0 font-ap-display text-[clamp(32px,5vw,54px)] leading-[1.1] font-medium">Универкон</h1>
          <StatusBadge status="в разработке" />
        </div>
        <p className="mt-4.5 mb-0 text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-white/82 text-wrap-pretty">
          Управление вузом, колледжем и центром ДПО.
        </p>
        <div className="mt-6.5 flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] font-semibold">
          <a href="#" target="_blank" rel="noopener" className="text-ap-accent">GitHub ↗</a>
          <span className="text-white/30">·</span>
          <Link href="/contact" className="text-ap-accent">Написать нам →</Link>
        </div>
      </section>

      <section id="p-task" className="mx-auto max-w-[760px] scroll-mt-[104px] px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-5.5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Какую задачу решает</h2>
        <div className="grid max-w-[64ch] gap-4.5">
          <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
            Учебное заведение обязано вести контингент, планы, приказы и оценки, а потом отдавать эти данные в государственные системы и показывать на сайте. Обычно каждый кусок живёт в своей программе или в своём файле.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
            Данные начинают расходиться незаметно: в приказе одно, в ведомости другое, на сайте третье. Обнаруживается это на проверке.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
            Универкон собирает всё в один учёт, из которого берутся и отчёты, и выгрузки, и личные кабинеты.
          </p>
        </div>
      </section>

      <section id="p-can" className="mx-auto max-w-[760px] scroll-mt-[104px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Что умеет</h2>
        <div className="grid">
          {canDo.map((c) => (
            <div key={c.title} className="ap-2col grid grid-cols-[minmax(0,190px)_minmax(0,1fr)] gap-x-[clamp(12px,3vw,32px)] gap-y-1.5 border-t border-white/10 py-4.5">
              <div className="text-base leading-[1.4] font-bold">{c.title}</div>
              <p className="m-0 text-[15.5px] leading-[1.6] text-white/76 text-wrap-pretty">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="p-decisions" className="mx-auto max-w-[760px] scroll-mt-[104px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Ключевые решения</h2>
        <div className="grid max-w-[64ch] gap-6.5">
          {decisions.map((d) => (
            <div key={d.title}>
              <div className="mb-2 text-[16.5px] leading-[1.45] font-bold text-wrap-pretty">{d.title}</div>
              <p className="m-0 text-[15px] leading-[1.62] text-white/62 text-wrap-pretty">{d.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="p-not" className="mx-auto max-w-[760px] scroll-mt-[104px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Чего не делаем</h2>
        <div className="grid max-w-[62ch] gap-3 text-[15.5px] leading-[1.62] text-white/66">
          <p className="m-0 text-wrap-pretty">Не заменяем бухгалтерию и кадры — работаем рядом с ними.</p>
          <p className="m-0 text-wrap-pretty">Не делаем облачную версию с хранением данных у нас.</p>
          <p className="m-0 text-wrap-pretty">Не подменяем систему дистанционного обучения — интегрируемся.</p>
        </div>
      </section>

      <section id="p-state" className="mx-auto max-w-[760px] scroll-mt-[104px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-4.5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Состояние</h2>
        <p className="m-0 mb-[clamp(26px,3vw,36px)] max-w-[60ch] text-[16.5px] leading-[1.62] text-white/82 text-wrap-pretty">
          Ядро учёта и кабинеты — в работе. Выгрузки в государственные системы — проектируются.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-3.5 gap-y-0.5">
          <div className="border-t-2 border-white/30 pt-3">
            <div className="text-[15px] font-semibold text-white/66">Модель</div>
            <div className="mt-1 text-[12.5px] text-white/62">готово</div>
          </div>
          <div className="border-t-2 border-ap-accent pt-3">
            <div className="text-[15px] font-semibold text-ap-accent">Ядро учёта</div>
            <div className="mt-1 text-[12.5px] text-ap-accent">сейчас</div>
          </div>
          <div className="border-t-2 border-ap-accent pt-3">
            <div className="text-[15px] font-semibold text-ap-accent">Кабинеты</div>
            <div className="mt-1 text-[12.5px] text-ap-accent">сейчас</div>
          </div>
          <div className="border-t-2 border-white/18 pt-3">
            <div className="text-[15px] font-semibold text-white/62">Выгрузки</div>
            <div className="mt-1 text-[12.5px] text-white/62">проектируются</div>
          </div>
        </div>
      </section>

      <section id="p-tech" className="mx-auto max-w-[760px] scroll-mt-[104px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-4.5 font-ap-display text-[clamp(20px,2.2vw,26px)] leading-[1.22] font-medium">Технологии</h2>
        <p className="m-0 mb-4.5 font-ap-mono text-[13px] leading-[1.6] text-ap-accent">
          1С:Предприятие · БСП · Go · TypeScript · React · PWA · Docker
        </p>
        <Link href="/tech" className="text-[15px] font-semibold text-ap-accent">Как мы выбираем инструменты →</Link>
      </section>

      <section className="mx-auto max-w-[760px] border-t border-white/14 px-6 py-[clamp(34px,4vw,52px)]">
        <h2 className="m-0 mb-3.5 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.2] font-medium text-wrap-pretty">Хотите такое же у себя?</h2>
        <p className="m-0 mb-4.5 max-w-[56ch] text-[16.5px] leading-[1.62] text-white/82 text-wrap-pretty">
          Мы берём немного проектов и сначала разбираемся в вашем устройстве.
        </p>
        <Link href="/contact" className="text-base font-semibold text-ap-accent">Написать →</Link>
      </section>

      <section className="mx-auto max-w-[760px] border-t border-white/14 px-6 pt-[clamp(34px,4vw,52px)] pb-[clamp(64px,9vw,112px)]">
        <div className="mb-5 text-[12.5px] font-semibold tracking-[.14em] text-white/62 uppercase">Другие продукты</div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-6 gap-y-4.5">
          {otherProducts.map((p) => (
            <Link key={p.name} href="/works#works-products" className="grid justify-items-start gap-2 text-ap-ink hover:!text-ap-accent">
              <span className="font-ap-display text-base font-medium">{p.name}</span>
              <StatusBadge status={p.status} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
