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
            Última actualización: 3 de octubre de 2026. Información sobre almacenamiento local y servicios opcionales.
          </p>
        </div>

        <div className="space-y-8 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 sm:p-10 text-zinc-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-violet-400" />
              1. Responsable del Tratamiento de Datos
            </h2>
            <p>
              En <strong>GeneradorDeNombres.net</strong> nos tomamos muy en serio la privacidad de nuestros visitantes. Esta política describe los tipos de información personal que recibimos y recopilamos, así como el uso de almacenamiento local y servicios opcionales de medición.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-400" />
              2. Almacenamiento local y preferencias
            </h2>
            <p>La elección de privacidad, los favoritos y las valoraciones se guardan en este navegador. Si el almacenamiento no está disponible, se conservan solo durante la sesión. Los nombres escritos se procesan localmente y no se envían como eventos de analítica.</p>
            <p>Puedes eliminar los favoritos desde su panel o borrar los datos del sitio en tu navegador. Cambia la elección de analítica desde “Preferencias de privacidad” en el pie de página. La versión actual no carga un servicio publicitario.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              3. Archivos de Registro y Telemetría
            </h2>
            <p>
              Vercel Web Analytics y Speed Insights solo se cargan tras aceptar la medición opcional. Permiten medir visitas y rendimiento. No enviamos el contenido de nombres, favoritos ni mensajes. El proveedor de alojamiento puede mantener registros operativos separados. Consulta las políticas de <a href="https://vercel.com/docs/analytics/privacy-policy" className="underline">Web Analytics</a> y <a href="https://vercel.com/docs/speed-insights/privacy-policy" className="underline">Speed Insights</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-400" />
              4. Tus Derechos de Privacidad (RGPD / CCPA)
            </h2>
            <p>
              Como usuario, tienes derecho a solicitar acceso, rectificación, portabilidad o supresión de cualquier dato relativo a tu interacción con el sitio web. No hay cuentas de usuario en esta herramienta. El formulario de contacto abre tu aplicación de correo: el nombre, dirección y mensaje solo llegan al equipo si envías ese correo. Para consultas o solicitudes relativas a datos que hayas enviado, utiliza la página de contacto.
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
