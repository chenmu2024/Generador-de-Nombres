import React, { useEffect } from 'react';
import { Users, Flame, Award, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    document.title = 'Sobre Nosotros y Misión | GeneradorDeNombres.net';
    const descText = 'Conoce al equipo detrás de GeneradorDeNombres.net. Nuestra misión es ofrecer las mejores herramientas gratuitas de apodos, letras raras y símbolos Unicode para gaming y redes sociales.';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descText);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', 'https://generadordenombres.net/sobre-nosotros');

    let hrefLangEs = document.querySelector('link[hreflang="es"]');
    if (hrefLangEs) hrefLangEs.setAttribute('href', 'https://generadordenombres.net/sobre-nosotros');

    let hrefLangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hrefLangDefault) hrefLangDefault.setAttribute('href', 'https://generadordenombres.net/sobre-nosotros');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://generadordenombres.net/sobre-nosotros');
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl text-violet-400 mb-2">
          <Flame className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">Sobre GeneradorDeNombres.net</h1>
        <p className="text-zinc-400 text-lg">Innovación, creatividad y las mejores herramientas de nombrado Unicode en español.</p>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 space-y-8 text-zinc-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-violet-400" /> Nuestra Misión
          </h2>
          <p>
            <strong>GeneradorDeNombres.net</strong> nació con una misión muy clara: ofrecer a jugadores de habla hispana, creadores de contenido, padres de familia y dueños de mascotas el generador de nombres más rápido, intuitivo y estético del mercado.
          </p>
          <p>
            Sabemos que un gran apodo en juegos como <strong>Free Fire, Roblox, COD Mobile</strong> o una identidad impactante en <strong>Instagram y TikTok</strong> define tu presencia digital. Por ello, hemos desarrollado algoritmos avanzados capaces de combinar símbolos Unicode compatibles, fuentes estilizadas e invisibles de forma instantánea.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-violet-500/10 text-violet-400 rounded-xl flex items-center justify-center font-bold">100%</div>
            <h3 className="font-bold text-white text-base">Gratuito y Accesible</h3>
            <p className="text-xs text-zinc-400">Todas nuestras herramientas son libres y sin necesidad de registros obligatorios ni descargas de programas.</p>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold">⚡</div>
            <h3 className="font-bold text-white text-base">Compatibilidad Unicode</h3>
            <p className="text-xs text-zinc-400">Probamos rigurosamente nuestros símbolos para garantizar que funcionen en Free Fire, Roblox, WhatsApp e Instagram.</p>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-fuchsia-500/10 text-fuchsia-400 rounded-xl flex items-center justify-center font-bold">🛡️</div>
            <h3 className="font-bold text-white text-base">Privacidad Garantizada</h3>
            <p className="text-xs text-zinc-400">Tus combinaciones se procesan localmente en tu navegador. Tu privacidad y seguridad siempre van primero.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-violet-400" /> Criterios Editoriales y Calidad del Contenido
          </h2>
          <p>
            No nos limitamos a generar combinaciones aleatorias. Nuestro equipo de redactores y entusiastas del gaming actualiza constantemente nuestras más de 50 categorías temáticas con:
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <span><strong>Guías paso a paso:</strong> Instrucciones claras para cambiar tu nombre dentro de cada plataforma.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <span><strong>Listados estructurados:</strong> Nombres organizados por significado, género, cultura y popularidad.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <span><strong>Solución a problemas comunes:</strong> Herramientas como el espacio invisible de Free Fire creadas para solucionar bloqueos de espacio en juegos.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-violet-400" /> Compromiso con la Comunidad
          </h2>
          <p>
            Agradecemos a los millones de usuarios de España, México, Argentina, Colombia, Chile y toda Latinoamérica que confían a diario en <strong>GeneradorDeNombres.net</strong>. Continuaremos mejorando y añadiendo nuevos símbolos, fuentes y herramientas exclusivas.
          </p>
        </section>
      </div>
    </div>
  );
}
