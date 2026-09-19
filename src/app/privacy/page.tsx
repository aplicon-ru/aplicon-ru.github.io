import type { Metadata } from "next";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Политика конфиденциальности" };

export default function PrivacyPage() {
  return (
    <main>
      <section className="mx-auto max-w-[760px] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(64px,9vw,112px)]">
        <h1 className="m-0 mb-5 max-w-[22ch] font-ap-display text-[clamp(30px,4.4vw,50px)] leading-[1.12] font-medium text-wrap-pretty">
          Политика конфиденциальности
        </h1>
        <p className="m-0 max-w-[56ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-white/72 text-wrap-pretty">
          Текст готовится. Напишите нам на{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ap-accent">
            {site.email}
          </a>
          , если нужны детали уже сейчас.
        </p>
      </section>
    </main>
  );
}
