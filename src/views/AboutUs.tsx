'use client';

import React from 'react';
import { Link } from '../components/Link';
import { ShieldCheck, Sparkles, Users, Target, Heart, Award, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation back */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Sobre GeneradorDeNombres.net
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Nuestra Misión y Equipo Editorial
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Creamos las mejores herramientas gratuitas de apodos, tipografías Unicode, caracteres invisibles y símbolos estilizados para la comunidad hispanohablante de videojuegos y redes sociales.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-3">
            <div className="p-3 bg-violet-500/10 rounded-xl w-fit text-violet-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Pruebas de compatibilidad</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Las propuestas usan caracteres Unicode. Comprueba el resultado en el campo de destino: la compatibilidad cambia según la aplicación, el dispositivo y sus actualizaciones.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Privacidad y Seguridad</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              La generación ocurre en tu navegador. Los favoritos y la elección de privacidad se guardan en el almacenamiento local; la analítica opcional solo se carga con tu consentimiento.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 rounded-xl w-fit text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Herramientas Gratuitas</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Brindamos acceso libre e ilimitado a generadores de nombres para clanes, mascotas, tiendas, estética japonesa y más.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 sm:p-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-400" />
              ¿Quiénes Somos?
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              GeneradorDeNombres.net publica herramientas y selecciones editoriales en español para explorar nombres, apodos y caracteres Unicode. La marca es responsable del contenido del sitio. No presentamos las listas como rankings de popularidad ni como registros de disponibilidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Criterios de Calidad Técnica
            </h2>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              <li>Uso de caracteres Unicode con compatibilidad sujeta al campo de destino.</li>
              <li>Generación instantánea con atajos de copiado en un clic.</li>
              <li>Validadores de formato orientativos; cada plataforma decide la aceptación, disponibilidad y coste.</li>
            </ul>
          </section>

          <section id="metodologia" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white">Metodología y revisión editorial</h2>
            <ul className="space-y-3 text-zinc-300 list-disc list-inside">
              <li>Seleccionamos ejemplos por uso, idioma, inicial y longitud. Las categorías como raro, bonito o poderoso expresan criterios de estilo.</li>
              <li>Cuando un significado está revisado, enlazamos la referencia del nombre y su escritura. Si falta evidencia, mostramos «Pendiente de verificación»; una asociación creativa no es una etimología.</li>
              <li>En lenguas con varias escrituras, el significado depende de los caracteres concretos. La voz sintetizada del dispositivo es orientativa y no sustituye a un hablante o una fuente lingüística.</li>
              <li>La fecha visible se actualiza al revisar el contenido, no automáticamente con cada compilación. Una cifra de popularidad requiere una fuente, un país y un período.</li>
            </ul>
            <p className="text-sm text-zinc-400">Referencias de nombres: <a href="https://www.behindthename.com/" className="text-violet-300 underline" target="_blank" rel="noopener noreferrer">Behind the Name</a>. Las referencias específicas aparecen junto a los significados revisados. Para las reglas de uso, consulta también el soporte oficial de la plataforma correspondiente.</p>
            <p className="text-sm text-zinc-400">Revisión de esta página: <time dateTime="2026-10-04">4 de octubre de 2026</time>.</p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              Compromiso con la Comunidad
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Puedes solicitar una corrección indicando la página, el nombre y una referencia verificable. Nuestra <Link to="/contacto" className="text-violet-300 underline">página de contacto</Link> prepara un mensaje para copiarlo o abrirlo en tu aplicación de correo; no confirma por sí sola que se haya enviado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
