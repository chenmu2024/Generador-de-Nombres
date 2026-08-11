'use client';

import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Mail, Cookie, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidad y Cookies | GeneradorDeNombres.net';
    const descText = 'Política de Privacidad y uso de Cookies de GeneradorDeNombres.net. Información sobre el uso de anuncios de Google AdSense, protección de datos y derechos RGPD/CCPA.';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descText);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', 'https://generadordenombres.net/politica-de-privacidad');

    let hrefLangEs = document.querySelector('link[hreflang="es"]');
    if (hrefLangEs) hrefLangEs.setAttribute('href', 'https://generadordenombres.net/politica-de-privacidad');

    let hrefLangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hrefLangDefault) hrefLangDefault.setAttribute('href', 'https://generadordenombres.net/politica-de-privacidad');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://generadordenombres.net/politica-de-privacidad');
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl text-violet-400 mb-2">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">Política de Privacidad y Cookies</h1>
        <p className="text-zinc-400 text-lg">Última actualización: Agosto de 2026</p>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 space-y-8 text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-violet-400" /> 1. Compromiso de Privacidad y Procesamiento Local
          </h2>
          <p>
            En <strong>GeneradorDeNombres.net</strong> consideramos que la privacidad de nuestros visitantes es de suma importancia. Nuestra plataforma opera como una utilidad en el navegador del cliente (Client-Side Utility). Esto significa que las combinaciones de nombres, conversión de letras raras, fuentes tipográficas y generación de símbolos Unicode se procesan directamente en tu dispositivo y no almacenamos tus búsquedas ni creaciones en bases de datos externas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-violet-400" /> 2. Publicidad de Google AdSense y Cookie DART
          </h2>
          <p>
            Para ofrecer todas nuestras herramientas de forma 100% gratuita a la comunidad global de videojuegos y redes sociales, mostramos anuncios publicitarios gestionados por <strong>Google AdSense</strong> y otros proveedores de publicidad de terceros autorizados.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
            <li>
              Google, como proveedor de terceros, utiliza cookies para publicar anuncios en nuestro sitio web.
            </li>
            <li>
              El uso de la cookie DART permite a Google y a sus socios mostrar anuncios a nuestros usuarios en función de sus visitas previas a este o a otros sitios en Internet.
            </li>
            <li>
              Los usuarios pueden inhabilitar el uso de la cookie de publicidad personalizada visitando la página de <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline hover:text-violet-300">Configuración de Anuncios de Google</a>.
            </li>
            <li>
              Alternativamente, los usuarios pueden inhabilitar el uso de cookies de proveedores de terceros para la publicidad personalizada visitando <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline hover:text-violet-300">www.aboutads.info</a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-violet-400" /> 3. Cookies Técnicas y Analíticas
          </h2>
          <p>
            Utilizamos LocalStorage de HTML5 y cookies técnicas mínimas estrictamente necesarias para recordar tus preferencias de la interfaz (como tu lista de apodos favoritos guardados localmente). Asimismo, utilizamos herramientas analíticas anónimas (como Google Analytics) para medir métricas agregadas de tráfico, velocidad de carga y páginas más visitadas con el fin exclusivo de optimizar la experiencia de usuario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-violet-400" /> 4. Cumplimiento RGPD (GDPR) y CCPA
          </h2>
          <p>
            Si resides en la Unión Europea (RGPD) o en California (CCPA), posees los siguientes derechos fundamentales respecto a tus datos de navegación:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
            <li><strong>Derecho de Acceso y Transparencia:</strong> Puedes solicitar información sobre qué datos agregados se registran.</li>
            <li><strong>Derecho de Oposición y Borrado:</strong> Puedes borrar tu historial de navegación y almacenamiento local limpiando la caché de tu navegador.</li>
            <li><strong>Control de Consentimiento de Cookies:</strong> Puedes ajustar o retirar tu consentimiento publicitario en cualquier momento mediante nuestro banner de gestión de privacidad.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-400" /> 5. Enlaces a Sitios de Terceros
          </h2>
          <p>
            Nuestro sitio web puede contener enlaces a otros sitios de interés. Una vez que haces clic en estos enlaces y abandonas nuestra página, no tenemos control sobre el sitio al que eres redirigido y, por lo tanto, no somos responsables de los términos o políticas de privacidad de dichos sitios de terceros.
          </p>
        </section>

        <section className="space-y-3 border-t border-white/10 pt-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-violet-400" /> 6. Contacto de Privacidad y Soporte
          </h2>
          <p>
            Si tienes cualquier duda, sugerencia o deseas ejercer algún derecho relacionado con esta política, te invitamos a escribir a nuestro equipo de atención al usuario:
          </p>
          <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl inline-block">
            <p className="text-sm font-semibold text-white">Oficina de Privacidad y Soporte:</p>
            <a href="mailto:soporte@generadordenombres.net" className="text-violet-400 underline font-bold text-base hover:text-violet-300">
              soporte@generadordenombres.net
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
