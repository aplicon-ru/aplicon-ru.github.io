"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content/site";
import { activeNavHref } from "@/lib/active-nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const active = activeNavHref(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[.09] bg-ap-bg/85 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1220px] items-center gap-5 px-6 py-3.5">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-ap-ink">
          <img src="/logo-aplicon.svg" alt={site.name} className="block h-[30px] w-auto" />
        </Link>
        <nav className="flex min-w-0 flex-1 flex-wrap justify-end gap-[clamp(11px,1.5vw,26px)] text-[clamp(12.5px,1.15vw,14.5px)] font-medium">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:!text-ap-ink"
              style={{ color: item.href === active ? "var(--ap-accent)" : "rgba(245,246,247,.68)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
