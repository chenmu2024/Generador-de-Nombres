'use client';

import React from 'react';
import { Link } from '../components/Link';
import { Shield, ArrowLeft, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Shield className="w-3.5 h-3.5" />
            Protección de Datos
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Política de Privacidad y Cookies
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm">
            Última actualización: Agosto de 2026. Transparencia total sobre el uso de cookies y protección de privacidad.
          </p>
        </div>

        <div className="space-y-8 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 sm:p-10 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-violet-400" />
              1. Responsable del Tratamiento de Datos
            </h2>
            <p>
              En <strong>GeneradorDeNombres.net</strong> nos tomamos muy en serio la privacidad de nuestros visitantes. Esta política describe los tipos de información personal que recibimos y recopilamos, así como la forma en que la utilizamos y protegemos en cumplimiento de las normativas de protección de datos (RGPD y CCPA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-400" />
              2. Cookies de Publicidad y Google AdSense
            </h2>
            <p>
              Nuestra plataforma utiliza proveedores de terceros y redes publicitarias, incluido <strong>Google AdSense</strong>, para mostrar anuncios publicitarios personalizados y basados en intereses cuando visitas nuestro sitio web:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-400">
              <li>
                Google y otros proveedores de terceros utilizan cookies (como la cookie de DoubleClick / DART) para publicar anuncios basados en las visitas anteriores del usuario a este u otros sitios web de Internet.
              </li>
              <li>
                El uso de cookies de publicidad permite a Google y a sus socios mostrar anuncios a los usuarios en función de sus visitas a nuestros sitios y/o a otros sitios de Internet.
              </li>
              <li>
                Los usuarios pueden inhabilitar la publicidad personalizada dirigiéndose a la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">Configuración de anuncios de Google</a> o accediendo a <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">google.com/technologies/ads</a>.
              </li>
              <li>
                Alternativamente, los usuarios pueden inhabilitar el uso de cookies para la publicidad basada en intereses por parte de otros proveedores de terceros accediendo a <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">www.aboutads.info</a>.
              </li>
              <li>
                Puedes gestionar o revocar tu consentimiento sobre el uso de cookies en cualquier momento haciendo clic en nuestro{' '}
                <button
                  onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
                  className="text-violet-400 underline hover:text-violet-300 font-medium cursor-pointer"
                >
                  Panel de Configuración de Cookies
                </button>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              3. Archivos de Registro y Telemetría
            </h2>
            <p>
              Al igual que la mayoría de los sitios web, recopilamos información no identificable almacenada en archivos de registro del servidor. Esta información incluye direcciones IP, tipo de navegador, proveedor de servicios de Internet (ISP), páginas de entrada y salida, y fecha/hora con el único objetivo de analizar tendencias y administrar el sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-400" />
              4. Tus Derechos de Privacidad (RGPD / CCPA)
            </h2>
            <p>
              Como usuario, tienes derecho a solicitar acceso, rectificación, portabilidad o supresión de cualquier dato relativo a tu interacción con el sitio web. Dado que no requerimos registro ni creamos cuentas de usuario, no almacenamos datos personales identificables en nuestras bases de datos.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10 text-xs text-zinc-400">
            <p>
              Si tienes alguna duda sobre esta política de privacidad, puedes contactar con nuestro equipo a través de la página de <Link to="/contacto" className="text-violet-400 underline">Contacto y Soporte</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
