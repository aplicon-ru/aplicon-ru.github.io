import Link from "next/link";

type Crumb = { label: string; href?: string };

// Единообразные крошки на всех страницах, кроме главной (осознанное
// решение — отход от хендоффа дизайнера, где крошки были только на
// "глубоких" страницах вроде /products/:slug и /blog/:slug; при трёх
// пунктах в шапке остальные разделы больше нигде не подсвечены, поэтому
// решили — крошка нужна везде, единообразие важнее).
export default function Breadcrumbs({ items, maxWidth = "max-w-[1220px]" }: { items: Crumb[]; maxWidth?: string }) {
  return (
    <div className={`mx-auto ${maxWidth} px-6 pt-[clamp(20px,3vw,30px)] pb-[clamp(18px,2.5vw,26px)]`}>
      <div className="flex flex-wrap items-baseline gap-2 text-[13px] text-white/60">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-baseline gap-2">
            {item.href ? (
              <Link href={item.href} className="text-white/60 hover:!text-ap-accent">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {i < items.length - 1 && <span className="text-white/35">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
