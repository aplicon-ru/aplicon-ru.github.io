// Какой пункт шапки подсвечен на данном адресе.
// Страница продукта (/products/*) подсвечивает «Работы» — так же, как
// в прототипе (§ «Общий каркас», активный пункт для /products/univerkon).
const RULES: Array<[RegExp, string]> = [
  [/^\/products(\/|$)/, "/works"],
  [/^\/works(\/|$)/, "/works"],
  [/^\/team(\/|$)/, "/team"],
  [/^\/contact(\/|$)/, "/contact"],
];

export function activeNavHref(pathname: string): string | null {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const [re, href] of RULES) {
    if (re.test(path)) return href;
  }
  return null;
}
