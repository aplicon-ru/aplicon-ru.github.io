export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-[1000px] px-6 pt-[clamp(60px,9vw,128px)] pb-[clamp(80px,12vw,160px)]">
        <h1 className="m-0 mb-7 max-w-[19ch] font-ap-display text-[clamp(30px,4.6vw,54px)] leading-[1.34] font-medium tracking-[-.01em] text-wrap-pretty">
          <span className="bg-ap-accent px-[.2em] py-[.1em] text-ap-bg [box-decoration-break:clone]">
            Без погружения не работаем.
          </span>
        </h1>
        <p className="m-0 max-w-[56ch] text-[clamp(16px,1.4vw,19px)] leading-[1.62] text-white/72 text-wrap-pretty">
          Если на задачу есть час, 55 минут мы тратим на то, чтобы в ней разобраться.
        </p>
        <p className="mt-[clamp(28px,3vw,40px)] max-w-[58ch] text-[clamp(14px,1.05vw,15.5px)] leading-[1.6] text-white/62 text-wrap-pretty">
          Так мы работали, когда половины нынешних технологий ещё не было. Теперь работаем с ними — тем же способом.
        </p>
        <a href="/tech" className="mt-3.5 inline-flex items-center gap-2 text-[15.5px] font-semibold text-ap-accent">
          Наш стек <span>→</span>
        </a>
      </section>
    </main>
  );
}
