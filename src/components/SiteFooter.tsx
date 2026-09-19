import Link from "next/link";
import { site } from "@/lib/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[.09] bg-ap-bg">
      <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-8 px-6 py-[clamp(40px,5vw,60px)] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <div className="col-span-2 md:col-span-1">
          <img src="/logo-aplicon.svg" alt={site.name} className="mb-4 block h-8 w-auto" />
          <p className="m-0 max-w-[34ch] text-[13.5px] leading-[1.55] text-white/68">{site.tagline}</p>
        </div>
        <div className="grid content-start gap-2.5 text-[14.5px]">
          <div className="mb-1 text-[12.5px] tracking-[.12em] uppercase text-white/62">Команда</div>
          {site.footer.team.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/78 hover:!text-ap-accent">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="grid content-start gap-2.5 text-[14.5px]">
          <div className="mb-1 text-[12.5px] tracking-[.12em] uppercase text-white/62">Компания</div>
          {site.footer.company.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener" className="text-white/78 hover:!text-ap-accent">
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="text-white/78 hover:!text-ap-accent">
                {item.label}
              </Link>
            ),
          )}
        </div>
        <div className="col-span-2 grid content-start gap-2.5 text-[14.5px] md:col-span-1">
          <div className="mb-1 text-[12.5px] tracking-[.12em] uppercase text-white/62">Связь</div>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5">
            <a href={`mailto:${site.email}`} className="text-white/78 hover:!text-ap-accent">
              {site.email}
            </a>
            <span className="text-white/78">{site.phone}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1220px] px-6 pb-[34px] text-[12.5px] text-white/62">
        © 2026 ООО «{site.name}»
      </div>
    </footer>
  );
}
