import type { CategoryData } from '../data/seoData';
import { allLinks } from '../data/allLinks';
import FeedbackWidget from './FeedbackWidget';

export default function SeoGuide({ data, currentPath }: { data: CategoryData; currentPath: string }) {
  const moreLinks = allLinks.filter(link => link.path !== currentPath && link.path !== '/').slice(0, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
      <article id="articulos-guia" className="lg:col-span-8 bg-[#121212] rounded-3xl border border-white/5 p-8 md:p-12 prose prose-invert prose-zinc prose-lg max-w-none shadow-2xl shadow-black/50 prose-headings:font-heading prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white scroll-mt-24">
        <div className="mb-8 p-6 bg-zinc-900/90 rounded-2xl border border-violet-500/20 not-prose">
          <div className="flex items-center gap-2 font-bold text-white mb-3 text-base font-heading">
            <span aria-hidden="true">☰</span>
            <span>Índice de Contenidos</span>
          </div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <a href="#articulos-guia" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                <span className="text-violet-500" aria-hidden="true">›</span>
                <span>Guía Completa e Ideas para {data.h1}</span>
              </a>
            </li>
            {data.faqs && data.faqs.length > 0 && (
              <li>
                <a href="#preguntas-frecuentes" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-violet-500" aria-hidden="true">›</span>
                  <span>Preguntas Frecuentes (FAQ)</span>
                </a>
              </li>
            )}
            <li>
              <a href="#relacionados" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                <span className="text-violet-500" aria-hidden="true">›</span>
                <span>Generadores y Herramientas Relacionadas</span>
              </a>
            </li>
          </ul>
        </div>

        <div dangerouslySetInnerHTML={{ __html: data.seoText }} />
      </article>

      <div className="lg:col-span-4 space-y-8">
        {data.faqs && data.faqs.length > 0 && (
          <section id="preguntas-frecuentes" className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 rounded-3xl p-8 text-white border border-violet-500/20 shadow-xl relative overflow-hidden scroll-mt-24" itemScope itemType="https://schema.org/FAQPage">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="bg-violet-500/20 p-2 rounded-xl text-violet-300" aria-hidden="true">?</div>
              <h3 className="text-2xl font-bold font-heading">Preguntas Frecuentes</h3>
            </div>
            <div className="space-y-6 relative z-10">
              {data.faqs.map((faq, index) => (
                <div key={index} className="space-y-2 border-b border-white/10 pb-5 last:border-0 last:pb-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-lg text-zinc-100" itemProp="name">{faq.question}</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-zinc-400 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="bg-[#121212] rounded-3xl p-8 border border-white/5 shadow-xl">
          <h3 className="text-xl font-bold text-zinc-100 mb-6 font-heading">Más Generadores</h3>
          <div className="space-y-2">
            {moreLinks.map(link => (
              <a
                key={link.path}
                href={link.path}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">{link.label}</span>
                <span className="text-zinc-600 group-hover:text-violet-400 transition-colors" aria-hidden="true">›</span>
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <a href="/nombres-free-fire" className="text-violet-400 font-semibold hover:text-violet-300 transition-colors text-sm flex items-center justify-center gap-2">
              Ver todos los generadores <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>

        <FeedbackWidget />

        <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-3xl p-6 border border-white/10 shadow-2xl space-y-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
            <span aria-hidden="true">✓</span>
            <span>Metodología y revisión editorial</span>
          </div>
          <p className="leading-relaxed">
            Revisamos periódicamente los caracteres, símbolos y ejemplos incluidos en nuestras herramientas. La compatibilidad puede variar según la plataforma, el dispositivo y futuras actualizaciones de cada servicio.
          </p>
          <div className="pt-2.5 border-t border-white/5 space-y-1.5 text-[11px] text-zinc-400">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Última revisión:</span>
              <span className="font-semibold text-zinc-300">Septiembre 2026</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Compatibilidad:</span>
              <span className="font-semibold text-emerald-400">Compatibilidad variable por plataforma</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <a href="/politica-de-privacidad" className="text-violet-400 hover:underline">Política de Privacidad</a>
              <a href="/contacto" className="text-violet-400 hover:underline">Soporte Editorial</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
