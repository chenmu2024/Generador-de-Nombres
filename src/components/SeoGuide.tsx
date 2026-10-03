import type { CategoryData } from '../data/seoData';
import { allLinks } from '../data/allLinks';
import { getClusterRelatedPaths } from '../data/topicClusters';
import FeedbackWidget from './FeedbackWidget';

function getTopicalLinks(currentPath: string, data: CategoryData) {
  if (data.related?.length) {
    return data.related
      .filter((link) => link.path !== currentPath)
      .slice(0, 6)
      .map((link) => ({ path: link.path, label: link.title }));
  }

  const relatedPaths = new Set(getClusterRelatedPaths(currentPath));

  return allLinks
    .filter((link) => relatedPaths.has(link.path))
    .slice(0, 6);
}

export default function SeoGuide({ data, currentPath }: { data: CategoryData; currentPath: string }) {
  const moreLinks = getTopicalLinks(currentPath, data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
      <article id="articulos-guia" className="gdn-reading lg:col-span-8 rounded-2xl border p-7 md:p-10 prose prose-invert prose-zinc prose-lg max-w-none prose-headings:font-heading prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white scroll-mt-24">
        <div dangerouslySetInnerHTML={{ __html: data.seoText }} />
      </article>

      <div className="lg:col-span-4 space-y-8">
        {data.faqs && data.faqs.length > 0 && (
          <section id="preguntas-frecuentes" className="gdn-surface rounded-2xl p-7 text-white border relative overflow-hidden scroll-mt-24" itemScope itemType="https://schema.org/FAQPage">
            <div className="absolute top-0 right-0 w-28 h-28 bg-violet-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
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

        <div className="gdn-surface rounded-2xl p-7 border">
          <h3 className="text-xl font-bold text-zinc-100 mb-6 font-heading">Más Generadores</h3>
          <div className="space-y-2">
            {moreLinks.map((link) => (
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
            <a href="/" className="text-violet-400 font-semibold hover:text-violet-300 transition-colors text-sm flex items-center justify-center gap-2">
              Explorar todos los generadores <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>

        <FeedbackWidget path={currentPath} />

        <div className="gdn-surface-raised rounded-2xl p-6 border space-y-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
            <span aria-hidden="true">✓</span>
            <span>Metodología y revisión editorial</span>
          </div>
          <p className="leading-relaxed">
            Las selecciones son orientativas. Los significados y orígenes requieren consultar fuentes específicas; no todos los ejemplos han sido verificados etimológicamente. La compatibilidad puede variar según la plataforma, el dispositivo y futuras actualizaciones de cada servicio.
          </p>
          <div className="pt-2.5 border-t border-white/5 space-y-1.5 text-[11px] text-zinc-400">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Revisión funcional:</span>
              <span className="font-semibold text-zinc-300">3 de octubre de 2026</span>
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
