'use client';

import React from 'react';
import { Link } from '../components/Link';
import { FileText, ArrowLeft, ShieldAlert, CheckCircle2, Scale } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>

        <div className="text-center space-y-3 border-b border-white/10 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <Scale className="w-3.5 h-3.5" />
            Aviso Legal
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm">
            Condiciones generales que rigen el acceso y uso de las herramientas de GeneradorDeNombres.net.
          </p>
        </div>

        <div className="space-y-8 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 sm:p-10 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-violet-400" />
              1. Aceptación del Servicio
            </h2>
            <p>
              Al acceder y utilizar <strong>GeneradorDeNombres.net</strong>, el usuario acepta de forma plena y sin reservas todos los términos contenidos en este documento. Si no estás de acuerdo con alguna de las condiciones, te rogamos abstenerte de utilizar nuestras herramientas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              2. Uso Autorizado de los Generadores
            </h2>
            <p>
              Todas las herramientas de generación de apodos, conversión de símbolos Unicode y copia de caracteres invisibles son totalmente gratuitas y de uso libre para fines personales, creativos e interactivos en plataformas de videojuegos y redes sociales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              3. Deslinde de Marcas Registradas de Terceros
            </h2>
            <p>
              <strong>GeneradorDeNombres.net</strong> es un sitio web informativo e independiente de generación de utilidades tipográficas.
            </p>
            <p className="text-zinc-400 text-xs">
              Menciones a nombres comerciales o videojuegos como <em>Free Fire (Garena)</em>, <em>Roblox (Roblox Corporation)</em>, <em>Instagram / WhatsApp (Meta Platforms)</em>, <em>PUBG (Krafton)</em> o <em>Minecraft (Mojang/Microsoft)</em> se realizan exclusivamente con fines descriptivos e identificativos. No existe afiliación, patrocinio ni vinculación comercial directa con dichas entidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-sky-400" />
              4. Limitación de Responsabilidad
            </h2>
            <p>
              No garantizamos que las reglas internas de elegibilidad de nombres en juegos de terceros no cambien con el tiempo. Es responsabilidad del usuario verificar si el nickname o símbolo generado cumple con las políticas de nombre vigentes en la plataforma de destino antes de realizar cambios que requieran diamantes, robux o tarjetas de cambio de nombre.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10 text-xs text-zinc-400">
            <p>
              Para cualquier aclaración sobre estos términos, consulta la página de <Link to="/contacto" className="text-violet-400 underline">Contacto</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
