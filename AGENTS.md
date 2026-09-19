<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Сначала открой хендофф

**Перед вёрсткой любого экрана — `design-ref/README.md`.** Самодостаточная
спецификация: карта страниц, состав каждого экрана, все тексты (финальные,
переписывать нельзя). Разметку конкретного экрана смотри в
`design-ref/prototype/aplicon-site.dc.html` — один файл, все страницы, нужный
кусок ищется грепом по `data-screen-label` или `isХХХ`.

Прототип — референс, не код: копировать его `support.js` не нужно, из него
берутся только значения (отступы, цвета, тексты).

# Двухколоночные "лейбл + текст" строки — обязательно с классом `ap-2col`

**Любой `grid-template-columns:minmax(0,Npx) minmax(0,1fr)` для строки вида
"заголовок слева / текст справа" ломается на узких экранах**: колонка-лейбл
пытается занять до N px, второй колонке остаётся нечитаемая ширина, и текст
обрезается по краю экрана (не переносится).

Найдено на реальном iPhone на прежней версии сайта (Astro) — на странице
`/tech`. Чинится одной строкой в `globals.css`:

```css
@media (max-width: 640px) {
  .ap-2col { grid-template-columns: 1fr !important; }
}
```

Но класс `.ap-2col` нужно **руками добавить на каждый такой `<div>`** — правило
глобальное, а разметка нет. При переносе на Next.js этот класс потерялся на
двух страницах (`/legal`, `/products/univerkon` → «Что умеет») при копировании
разметки — нашли повторной проверкой на 390 px. Заводя новую строку с этим
паттерном (карточки/списки в `works`, `team`, `tech`, `legal`, шаблон продукта,
список блога) — сразу добавляй класс и проверяй на 390 px, не полагайся на
глаз на десктопе.

# Контент — только через `content/*.json`

Тексты не пишутся в `.astro`/`.tsx` литералами — импортируются из
`content/*.json` (`import x from "../../content/foo.json"`). Так контент
можно поправить без пересборки логики и без риска случайно перефразировать
финальный текст при рефакторинге вёрстки.
