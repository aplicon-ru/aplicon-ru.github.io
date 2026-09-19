import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgress from "@/components/article/ReadingProgress";
import ArticleToc from "@/components/article/ArticleToc";
import ArticleTocMobile from "@/components/article/ArticleTocMobile";
import CodeBlock from "@/components/article/CodeBlock";

export const metadata: Metadata = { title: "Своя почта для нескольких доменов на одном VPS" };

const th = "px-4.5 py-3.5 text-[13px] font-semibold tracking-[.06em] text-white/70 uppercase whitespace-nowrap";
const td = "border-t border-white/10 px-4.5 py-3.5";
const tdMono = `${td} font-ap-mono text-[13.5px] whitespace-nowrap text-white/80`;
const tdBody = `${td} text-white/80`;
const tdStrong = `${td} font-semibold`;

export default function MailstackPage() {
  return (
    <main>
      <ReadingProgress />
      <ArticleTocMobile />

      <div className="mx-auto flex max-w-[1140px] items-stretch flex-wrap gap-x-[clamp(24px,4vw,64px)] gap-y-0 px-6">
        <ArticleToc />

        <div className="order-2 min-w-0 flex-[6_1_600px]">
          <section className="pt-[clamp(30px,4vw,64px)] pb-[clamp(28px,3.5vw,40px)]">
            <div className="mb-[clamp(20px,3vw,30px)] flex flex-wrap items-baseline gap-2 text-[13px] text-white/60">
              <Link href="/blog" className="text-white/60 hover:!text-ap-accent">Блог</Link>
              <span className="text-white/35">→</span>
              <span>mailstack</span>
            </div>
            <h1 className="m-0 font-ap-display text-[clamp(28px,4.2vw,46px)] leading-[1.16] font-medium tracking-[-.005em] text-wrap-pretty">
              Своя почта для нескольких доменов на одном VPS
            </h1>
            <p className="mt-5.5 mb-0 max-w-[50ch] text-[clamp(17px,1.5vw,21px)] leading-[1.56] text-white/86 text-wrap-pretty">
              Как выбирали площадку, обо что споткнулись и что получилось
            </p>
            <p className="mt-6.5 mb-0 font-ap-mono text-[12.5px] tracking-[.05em] text-white/62">
              Сентябрь 2026 · разбор на ~20 минут
            </p>
          </section>

          <section id="a-result" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">10</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Коротко о результате</h2>
            </div>
            <div className="rounded-[14px] border border-white/[.09] bg-ap-surface p-[clamp(22px,3vw,30px)]">
              <div className="grid gap-4 text-[17px] leading-[1.64] text-white/86">
                <p className="m-0 text-[clamp(17.5px,1.7vw,20px)] leading-[1.5] text-ap-ink text-wrap-pretty">
                  Один VPS обслуживает почту нескольких доменов: приём, отправка, IMAP, фильтрация спама, подпись писем. Развёртывание — одна команда, проверка состояния — вторая.
                </p>
                <p className="m-0 text-wrap-pretty">Письма уходят в Gmail и Яндекс во «Входящие», а не в спам. DMARC-отчёты приходят и читаются.</p>
                <p className="m-0 text-wrap-pretty">
                  Считать это бесплатной заменой корпоративной почте не стоит: стоимость переезжает из подписки в час администратора. Смысл появляется, когда домены свои, ящиков десятки, а данные должны остаться на своём сервере.
                </p>
              </div>
            </div>
          </section>

          <section id="a-parts" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">20</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Из чего состоит</h2>
            </div>
            <p className="m-0 mb-6 max-w-[64ch] text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
              Почтовый сервер — это не одна программа, а несколько служб, каждая со своей ролью. Разделение удобно тем, что любую часть можно заменить, не переписывая остальные.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/14">
              <table className="w-full min-w-[560px] border-collapse text-[15px]">
                <thead>
                  <tr className="bg-ap-surface text-left">
                    <th className={th}>Компонент</th>
                    <th className={th}>Роль</th>
                    <th className={th}>Порты</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdStrong}>Postfix</td>
                    <td className={tdBody}>Приём и отправка писем, маршрутизация между доменами</td>
                    <td className={tdMono}>25, 465, 587</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Dovecot</td>
                    <td className={tdBody}>Хранение ящиков, доступ по IMAP, сортировка правилами Sieve</td>
                    <td className={tdMono}>993</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Rspamd</td>
                    <td className={tdBody}>Фильтрация спама, подпись DKIM, проверка SPF и DMARC на входе</td>
                    <td className={tdMono}>локально</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>PostgreSQL</td>
                    <td className={tdBody}>Список доменов, ящиков, псевдонимов и паролей</td>
                    <td className={tdMono}>локально</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Certbot</td>
                    <td className={tdBody}>Сертификаты на все почтовые имена и их продление</td>
                    <td className={tdMono}>80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="a-place" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">30</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Где это живёт: выбор площадки</h2>
            </div>
            <div className="mb-6.5 grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Главное решается до установки: разрешит ли площадка исходящий порт 25 и даст ли собственную PTR-запись. Без первого письма не уйдут вовсе, без второго их не примут крупные почтовые службы.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Второй по важности вопрос — репутация адреса. IP из пула, с которого до вас рассылали спам, лечится только переездом, поэтому проверять адрес по чёрным спискам нужно сразу после выдачи, а не после первой жалобы.
              </p>
            </div>
            <p className="m-0 mb-3.5 max-w-[60ch] text-[13.5px] leading-[1.55] text-white/62">
              Данные из официальных FAQ, проверено в сентябре 2026. Уточняйте перед оплатой.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/14">
              <table className="w-full min-w-[620px] border-collapse text-[15px]">
                <thead>
                  <tr className="bg-ap-surface text-left">
                    <th className={th}>Тип площадки</th>
                    <th className={th}>Порт 25</th>
                    <th className={th}>PTR</th>
                    <th className={th}>Чего ждать</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdStrong}>VPS-хостинг общего профиля</td>
                    <td className={tdBody}>Закрыт, открывают по заявке</td>
                    <td className={tdBody}>Есть в панели</td>
                    <td className={tdBody}>Просят описать назначение рассылки, дальше без ограничений</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Крупное облако</td>
                    <td className={tdBody}>Закрыт, часто наглухо</td>
                    <td className={tdBody}>Есть</td>
                    <td className={tdBody}>Отправку предлагают через собственный сервис рассылок</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Выделенный сервер</td>
                    <td className={tdBody}>Открыт</td>
                    <td className={tdBody}>Своя подсеть</td>
                    <td className={tdBody}>Больше свободы и больше администрирования</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Дешёвый VPS по акции</td>
                    <td className={tdBody}>Как повезёт</td>
                    <td className={tdBody}>Иногда нет</td>
                    <td className={tdBody}>Адрес из «грязного» пула, письма в спаме с первого дня</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="a-relay" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">40</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Свой MX или релей</h2>
            </div>
            <div className="mb-6.5 grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Если порт 25 закрыт или адрес с плохой историей, отправку отдают релею: свой сервер принимает письмо от клиента и передаёт его наружу через сторонний узел с готовой репутацией. Приём при этом остаётся своим.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Мы выбрали свой MX и оставили релей как запасной путь: переключение — одна строка в конфигурации Postfix.
              </p>
            </div>
            <div className="mb-6.5">
              <CodeBlock
                label="main.cf — отправка через релей"
                code={`relayhost = [smtp.relay.example]:587\nsmtp_sasl_auth_enable = yes\nsmtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd\nsmtp_sasl_security_options = noanonymous\nsmtp_tls_security_level = encrypt`}
              />
            </div>
            <p className="m-0 mb-3.5 max-w-[60ch] text-[13.5px] leading-[1.55] text-white/62">
              Данные из официальных FAQ, проверено в сентябре 2026. Уточняйте перед оплатой.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/14">
              <table className="w-full min-w-[600px] border-collapse text-[15px]">
                <thead>
                  <tr className="bg-ap-surface text-left">
                    <th className={th}>Способ отправки</th>
                    <th className={th}>Репутация</th>
                    <th className={th}>Лимиты</th>
                    <th className={th}>Кому подходит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdStrong}>Свой MX напрямую</td>
                    <td className={tdBody}>Своя, набирается месяцами</td>
                    <td className={tdBody}>Только чужие</td>
                    <td className={tdBody}>Чистый адрес, открытый порт 25, есть кому следить</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Релей провайдера</td>
                    <td className={tdBody}>Общая с соседями</td>
                    <td className={tdBody}>Есть, обычно суточные</td>
                    <td className={tdBody}>Порт 25 закрыт, писем немного</td>
                  </tr>
                  <tr>
                    <td className={tdStrong}>Сервис рассылок</td>
                    <td className={tdBody}>Хорошая, с доставкой и отчётами</td>
                    <td className={tdBody}>Тариф за письма</td>
                    <td className={tdBody}>Уведомления из приложений, а не переписка людей</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="a-ask" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">50</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Что спросить у провайдера</h2>
            </div>
            <p className="m-0 mb-6 max-w-[64ch] text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
              Шесть вопросов в поддержку до оплаты закрывают почти все сюрпризы. Ответы приходят за час, а переезд с неподходящей площадки занимает неделю.
            </p>
            <div className="grid max-w-[62ch] gap-3.5 text-base leading-[1.62] text-white/86">
              <p className="m-0 text-wrap-pretty">1. Открыт ли исходящий порт 25 и на каких условиях.</p>
              <p className="m-0 text-wrap-pretty">2. Можно ли задать PTR-запись самостоятельно.</p>
              <p className="m-0 text-wrap-pretty">3. Не числится ли выданный адрес в чёрных списках.</p>
              <p className="m-0 text-wrap-pretty">4. Есть ли IPv6 и обязательно ли его использовать.</p>
              <p className="m-0 text-wrap-pretty">5. Как делаются снимки диска и куда они складываются.</p>
              <p className="m-0 text-wrap-pretty">6. Что происходит при жалобе на спам: предупреждение или отключение.</p>
            </div>
            <Link href="/blog/hosting-checklist" className="mt-6 inline-block text-[15px] font-semibold text-ap-accent">
              Чек-лист выбора площадки →
            </Link>
          </section>

          <section id="a-dns" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">60</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">DNS: SPF, DKIM, DMARC, MTA-STS</h2>
            </div>
            <div className="mb-6.5 grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Три записи отвечают на три вопроса принимающей стороны: кому разрешено отправлять от имени домена, не менялось ли письмо в пути и что делать, если проверки не прошли. Четвёртая, MTA-STS, требует шифрования соединения.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Начинать стоит с <code className="rounded-[5px] bg-ap-surface px-1.5 py-0.5 font-ap-mono text-sm">p=none</code>: отчёты уже приходят, но письма ещё не отбрасываются. Через пару недель, когда в отчётах не осталось неожиданных отправителей, политика ужесточается.
              </p>
            </div>
            <CodeBlock
              label="зона example.ru"
              code={`example.ru.            MX    10 mail.example.ru.\nexample.ru.            TXT   "v=spf1 mx -all"\ndkim._domainkey        TXT   "v=DKIM1; k=rsa; p=MIIBIjANBg..."\n_dmarc                 TXT   "v=DMARC1; p=none; rua=mailto:dmarc@example.ru"\n_mta-sts               TXT   "v=STSv1; id=20260901"\nmail.example.ru.       A     203.0.113.10`}
            />
          </section>

          <section id="a-tls" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">70</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Сертификаты</h2>
            </div>
            <div className="grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Сертификат нужен на то имя, которое клиенты видят в настройках — обычно одно <code className="rounded-[5px] bg-ap-surface px-1.5 py-0.5 font-ap-mono text-sm">mail.домен</code> на все ящики домена. Продление автоматическое, но Postfix и Dovecot нужно перезапускать после него, иначе они продолжат отдавать старый сертификат до следующей перезагрузки.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Обо что споткнулись: забытый хук перезапуска обнаружился через три месяца, когда сертификат истёк и клиенты перестали подключаться. Теперь это проверяется одной из сорока проверок состояния.
              </p>
            </div>
          </section>

          <section id="a-clients" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">80</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Клиенты и автонастройка</h2>
            </div>
            <div className="grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Просить пользователя вписать имена серверов и номера портов — надёжный способ получить десять обращений в поддержку. Решается файлом автонастройки на веб-сервере домена: почтовые клиенты забирают параметры сами, человек вводит только адрес и пароль.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Приложения на телефонах подключаются по IMAP и SMTP без отдельной настройки. Веб-интерфейс мы не ставили: почта открывается в обычном клиенте, и это устроило всех.
              </p>
            </div>
          </section>

          <section id="a-move" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">90</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Переезд без потери писем</h2>
            </div>
            <div className="mb-6.5 grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Порядок такой: поднять новый сервер, перенести содержимое ящиков, проверить отправку и приём на тестовом домене и только потом переключить MX. Старый сервер остаётся принимать письма ещё несколько дней, пока DNS обновляется у всех.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">Перенос повторяется без вреда: второй запуск догоняет письма, пришедшие за время первого.</p>
            </div>
            <CodeBlock
              label="перенос ящика"
              code={`imapsync \\\n  --host1 old.example.ru --user1 user@example.ru --password1 "***" \\\n  --host2 mail.example.ru --user2 user@example.ru --password2 "***" \\\n  --ssl1 --ssl2 --automap --delete2duplicates`}
            />
          </section>

          <section id="a-sec" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">100</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Безопасность</h2>
            </div>
            <div className="grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Почтовый сервер перебирают пароли с первого дня — это видно в журналах через несколько часов после запуска. Помогают три вещи: блокировка адресов после серии неудачных попыток, отказ от аутентификации без шифрования и длинные пароли ящиков, выдаваемые генератором, а не пользователем.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Отдельно проверяется, что сервер не стал открытым релеем: отправка разрешена только после аутентификации, и это есть в списке проверок. Взломанный ящик, рассылающий спам, лишает репутации весь домен за сутки.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Резервные копии снимаются с ящиков и базы, лежат вне сервера и раз в квартал восстанавливаются на чистую машину.
              </p>
              <p className="mt-2.5 mb-0 max-w-[32ch] font-ap-display text-[clamp(18px,2vw,23px)] leading-[1.42] font-medium text-ap-ink text-wrap-pretty">
                Копия, которую никогда не разворачивали, копией не считается.
              </p>
            </div>
          </section>

          <section id="a-end" className="scroll-mt-22 border-t border-white/12 py-[clamp(38px,5vw,60px)]">
            <div className="mb-5.5 flex items-baseline gap-3.5">
              <span className="font-ap-pixel text-sm text-ap-accent">110</span>
              <h2 className="m-0 font-ap-display text-[clamp(21px,2.4vw,28px)] leading-[1.22] font-medium text-wrap-pretty">Итоги</h2>
            </div>
            <div className="grid max-w-[64ch] gap-4.5">
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Своя почта — это не сложно настроить, а нужно поддерживать: следить за сертификатами, репутацией, копиями и обновлениями. Установка занимает вечер, эксплуатация — постоянные полчаса в месяц и один разбор в квартал.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Брать это стоит, когда домены свои, требования к данным жёсткие, а администратор всё равно есть. Если ящиков пять и админа нет, аренда честно дешевле.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.68] text-white/82 text-wrap-pretty">
                Развёртывание и проверки мы собрали в открытый репозиторий: одна команда поднимает стек, вторая прогоняет сорок проверок и показывает, что именно не в порядке.
              </p>
            </div>
          </section>

          <section className="border-t border-white/12 py-[clamp(34px,4vw,52px)] pb-[clamp(64px,9vw,112px)]">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[15.5px] font-semibold">
              <a href="https://github.com/aplicon-ru" target="_blank" rel="noopener" className="text-ap-accent">Репозиторий на GitHub ↗</a>
              <span className="text-white/30">·</span>
              <Link href="/blog/hosting-checklist" className="text-ap-accent">Чек-лист выбора площадки →</Link>
              <span className="text-white/30">·</span>
              <Link href="/blog" className="text-ap-accent">Другие статьи →</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
