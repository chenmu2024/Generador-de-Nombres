import type { CategoryData } from '../data/seoData';
import { allLinks } from '../data/allLinks';
import FeedbackWidget from './FeedbackWidget';
import { Link } from './Link';

const topicalClusters = [
  ['/nombres-free-fire', '/generador-free-fire', '/espacios-invisible-ff', '/nombres-ff-unicos', '/nombres-ff-mujeres', '/nombres-clanes-ff', '/nombres-anime'],
  ['/nombres-roblox', '/nombres-instagram', '/nombres-anime', '/generador-free-fire', '/espacios-invisible-ff'],
  ['/nombres-de-mujer', '/nombres-de-nina', '/nombres-de-nino', '/nombres-unisex', '/nombres-raros', '/nombres-por-letra'],
  ['/nombres-japoneses', '/nombres-coreanos', '/nombres-chinos', '/nombres-rusos', '/nombres-griegos', '/nombres-italianos', '/nombres-franceses', '/nombres-turcos', '/nombres-ingles', '/nombres-mayas', '/nombres-de-dioses'],
  ['/nombres-perritas', '/nombres-perros-machos', '/nombres-gatos', '/nombres-gatos-negros', '/nombres-gatos-machos', '/perritas-chihuahua', '/nombres-caballos'],
  ['/nombres-por-letra', '/nombres-con-a', '/nombres-con-b', '/nombres-con-c', '/nombres-con-e', '/nombres-con-f', '/nombres-con-m', '/nombres-con-en', '/nombres-con-y', '/nombres-con-z'],
  ['/nombres-equipos-futbol', '/nombres-para-tiendas', '/nombres-peluches'],
];

function getTopicalLinks(currentPath: string, data: CategoryData) {
  if (data.related?.length) {
    return data.related
      .filter(link => link.path !== currentPath)
      .slice(0, 6)
      .map(link => ({ path: link.path, label: link.title }));
  }

  const cluster = topicalClusters.find(paths => paths.includes(currentPath));
  if (cluster) {
    const clusterSet = new Set(cluster);
    return allLinks
      .filter(link => clusterSet.has(link.path) && link.path !== currentPath)
      .slice(0, 6);
  }

  return allLinks
    .filter(link => link.path !== currentPath && link.path !== '/')
    .slice(0, 6);
}

export default function SeoGuide({ data, currentPath }: { data: CategoryData; currentPath: string }) {
  const moreLinks = getTopicalLinks(currentPath, data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
      <article id="articulos-guia" className="gdn-reading lg:col-span-8 rounded-2xl border p-7 md:p-10 prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-strong:text-slate-900 scroll-mt-24">
        <div dangerouslySetInnerHTML={{ __html: data.seoText }} />
      </article>

      <div className="lg:col-span-4 space-y-8">
        {data.faqs && data.faqs.length > 0 && (
          <section id="preguntas-frecuentes" className="gdn-surface rounded-2xl p-7 text-slate-900 border relative overflow-hidden scroll-mt-24" itemScope itemType="https://schema.org/FAQPage">
            <div className="absolute top-0 right-0 w-28 h-28 bg-violet-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="bg-violet-500/20 p-2 rounded-xl text-violet-300" aria-hidden="true">?</div>
              <h3 className="text-2xl font-bold font-heading">Preguntas Frecuentes</h3>
            </div>
            <div className="space-y-6 relative z-10">
              {data.faqs.map((faq, index) => (
                <div key={index} className="space-y-2 border-b border-slate-200 pb-5 last:border-0 last:pb-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-lg text-slate-900" itemProp="name">{faq.question}</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-slate-500 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="gdn-surface rounded-2xl p-7 border">
          <h3 className="text-xl font-bold text-slate-900 mb-6 font-heading">Más Generadores</h3>
          <div className="space-y-2">
            {moreLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-violet-50 transition-colors group"
              >
                <span className="font-medium text-slate-500 group-hover:text-slate-900 transition-colors">{link.label}</span>
                <span className="text-zinc-600 group-hover:text-violet-600 transition-colors" aria-hidden="true">›</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <Link to="/" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors text-sm flex items-center justify-center gap-2">
              Explorar todos los generadores <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>

        <FeedbackWidget />

        <div className="gdn-surface-raised rounded-2xl p-6 border space-y-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-violet-600 font-bold text-sm">
            <span aria-hidden="true">✓</span>
            <span>Metodología y revisión editorial</span>
          </div>
          <p className="leading-relaxed">
            Revisamos periódicamente los caracteres, símbolos y ejemplos incluidos en nuestras herramientas. La compatibilidad puede variar según la plataforma, el dispositivo y futuras actualizaciones de cada servicio.
          </p>
          <div className="pt-2.5 border-t border-slate-200 space-y-1.5 text-[11px] text-slate-500">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Última revisión:</span>
              <span className="font-semibold text-slate-700">Septiembre 2026</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Compatibilidad:</span>
              <span className="font-semibold text-emerald-400">Compatibilidad variable por plataforma</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <Link to="/politica-de-privacidad" className="text-violet-600 hover:underline">Política de Privacidad</Link>
              <Link to="/contacto" className="text-violet-600 hover:underline">Soporte Editorial</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
