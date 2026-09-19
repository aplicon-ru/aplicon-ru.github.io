import type { NextConfig } from "next";

// aplicon.ru — кастомный домен, сайт живёт в корне, basePath не нужен
// (в отличие от goldmean.ru, который висит в подкаталоге /goldmean.ru
// на *.github.io).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
