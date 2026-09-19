// Яндекс.Метрика — счётчик id 112743705, добавлен 2026-09-17 (коммит cff4d859
// в старую версию сайта на Astro), перенесён сюда при переходе на Next.js.
export const METRIKA_COUNTER_ID = 112743705;

export const METRIKA_INLINE_SCRIPT = `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_COUNTER_ID}','ym');
ym(${METRIKA_COUNTER_ID},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true});
`;
