import type { Metadata } from "next";
import { Unbounded, Manrope, Silkscreen } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content/site";
import { METRIKA_COUNTER_ID, METRIKA_INLINE_SCRIPT } from "@/lib/metrika";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — разработка, исследование, обучение, инновации`,
    template: `%s · ${site.name}`,
  },
  description:
    "Апликон — разработка, исследование, обучение, инновации. Свои продукты и проекты для заказчиков на 1С, Go, TypeScript/React.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} ${silkscreen.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: METRIKA_INLINE_SCRIPT }} />
      </head>
      <body>
        <div className="min-h-screen overflow-x-clip bg-ap-bg text-ap-ink text-base">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_COUNTER_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
