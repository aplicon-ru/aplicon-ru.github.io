import type { Metadata } from "next";
import Link from "next/link";
import posts from "../../../content/blog-posts.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Блог" };

export default function BlogPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог" }]} maxWidth="max-w-[820px]" />
      <section className="mx-auto max-w-[820px] px-6 pt-[clamp(28px,3.5vw,44px)] pb-[clamp(26px,3vw,40px)]">
        <h1 className="m-0 mb-4.5 font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium">Блог</h1>
        <p className="m-0 max-w-[56ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-white/66 text-wrap-pretty">
          Разборы задач, которые мы решали у себя или у заказчика.
        </p>
      </section>
      <section className="mx-auto max-w-[820px] px-6 pb-[clamp(64px,9vw,112px)]">
        <div className="grid">
          {posts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="ap-2col grid grid-cols-[minmax(0,130px)_minmax(0,1fr)] gap-x-[clamp(14px,3vw,32px)] gap-y-2 border-t border-b border-white/14 px-1 py-6.5 text-ap-ink hover:!text-ap-accent"
            >
              <span className="text-sm text-white/62">{p.date}</span>
              <span className="grid min-w-0 gap-2">
                <span className="font-ap-display text-[clamp(17px,1.6vw,20px)] leading-[1.34] font-medium text-wrap-pretty">{p.title}</span>
                <span className="text-[15px] leading-[1.6] text-white/72 text-wrap-pretty">{p.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
