import React, { useEffect } from 'react';
import { FileCheck, ShieldAlert, CheckCircle, Scale } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Términos y Condiciones | GeneradorDeNombres.net';
    const descText = 'Términos y Condiciones de uso de GeneradorDeNombres.net. Revisa las normas de uso gratuito de nuestro generador de nombres y símbolos Unicode.';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descText);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', 'https://generadordenombres.net/terminos-y-condiciones');

    let hrefLangEs = document.querySelector('link[hreflang="es"]');
    if (hrefLangEs) hrefLangEs.setAttribute('href', 'https://generadordenombres.net/terminos-y-condiciones');

    let hrefLangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hrefLangDefault) hrefLangDefault.setAttribute('href', 'https://generadordenombres.net/terminos-y-condiciones');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://generadordenombres.net/terminos-y-condiciones');
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl text-violet-400 mb-2">
          <Scale className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">Términos y Condiciones de Uso</h1>
        <p className="text-zinc-400 text-lg">Última actualización: 2026</p>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 space-y-6 text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-violet-400" /> 1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar el sitio web <strong>GeneradorDeNombres.net</strong>, aceptas cumplir con todos los términos y condiciones establecidos en este acuerdo. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que abstengas de utilizar nuestros servicios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-violet-400" /> 2. Uso Permitido del Generador y Caracteres Unicode
          </h2>
          <p>
            Nuestra herramienta ofrece una forma gratuita de generar nombres decorados, caracteres Unicode, espacios invisibles y apodos estéticos para juegos (como Free Fire, Roblox, COD Mobile) y redes sociales (Instagram, TikTok). Todos los nombres y combinaciones generadas son para uso personal y recreativo del usuario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-violet-400" /> 3. Propiedad Intelectual y Marcas Registradas
          </h2>
          <p>
            <strong>GeneradorDeNombres.net</strong> es un proyecto independiente y no está afiliado, respaldado ni patrocinado de ninguna manera por Garena, Free Fire, Roblox Corporation, Meta (Instagram), Mojang, ni ninguna otra desarrolladora de juegos o plataforma mencionada. Todas las marcas comerciales, logos e identificadores pertenecen a sus respectivos propietarios legítimos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-violet-400" /> 4. Exención de Responsabilidad
          </h2>
          <p>
            Aunque nos esforzamos por garantizar que todos los caracteres y símbolos generados sean compatibles con la mayoría de las plataformas actuales, la disponibilidad de fuentes o la aceptación de caracteres especiales depende de las políticas internas y reglas de nombrado de cada videojuego o red social.
          </p>
        </section>
      </div>
    </div>
  );
}
