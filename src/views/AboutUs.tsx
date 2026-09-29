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
              Revisamos periódicamente símbolos y espacios invisibles en distintas plataformas. La compatibilidad puede cambiar según la aplicación, el dispositivo y sus actualizaciones.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Privacidad y Seguridad</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Todas las operaciones de generación ocurren localmente en tu navegador sin almacenar tus apodos ni datos personales.
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
              GeneradorDeNombres.net es un proyecto independiente desarrollado por entusiastas del diseño tipográfico y los videojuegos en español. Identificamos la necesidad de contar con apodos únicos, estéticos y sin errores de renderizado (&quot;bloques vacíos&quot; o caracteres desconfigurados) en los perfiles de usuario.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Garantía de Calidad Técnica
            </h2>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              <li>Mapeo exhaustivo de la tabla Unicode para garantizar estabilidad.</li>
              <li>Generación instantánea con atajos de copiado en un clic.</li>
              <li>Sincronización con las actualizaciones de apodos y restricciones de nombres en juegos populares.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              Compromiso con la Comunidad
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Actualizamos nuestras listas de nombres y combinaciones de símbolos semanalmente basándonos en las tendencias actuales de juegos e influencers. Si tienes sugerencias, contáctanos a través de nuestra página de soporte.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
