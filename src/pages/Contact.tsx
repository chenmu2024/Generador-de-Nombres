import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Sugerencia', message: '' });

  useEffect(() => {
    document.title = 'Contacto y Soporte | GeneradorDeNombres.net';
    const descText = '¿Tienes sugerencias o preguntas? Ponte en contacto con el equipo de GeneradorDeNombres.net. Estamos aquí para ayudarte.';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descText);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', 'https://generadordenombres.net/contacto');

    let hrefLangEs = document.querySelector('link[hreflang="es"]');
    if (hrefLangEs) hrefLangEs.setAttribute('href', 'https://generadordenombres.net/contacto');

    let hrefLangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hrefLangDefault) hrefLangDefault.setAttribute('href', 'https://generadordenombres.net/contacto');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://generadordenombres.net/contacto');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl text-violet-400 mb-2">
          <Mail className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">Contacto y Soporte Oficial</h1>
        <p className="text-zinc-400 text-lg">¿Necesitas ayuda con algún símbolo o tienes ideas para nuevos generadores?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 bg-[#121212] border border-white/5 rounded-3xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-violet-400" /> Información de Contacto
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Respondemos a todos los mensajes en un plazo de 24 a 48 horas laborables. Si deseas proponer nuevas fuentes, reportar un símbolo roto o sugerir una categoría de nombres para mascotas o bebés, ¡escríbenos!
          </p>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold">Correo Electrónico</p>
                <a href="mailto:soporte@generadordenombres.net" className="text-sm font-medium text-zinc-200 hover:text-violet-400 transition-colors">
                  soporte@generadordenombres.net
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold">Horario de Atención</p>
                <p className="text-sm text-zinc-300">Lunes a Viernes (9:00 - 18:00 UTC)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-[#121212] border border-white/5 rounded-3xl p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                Gracias por escribirnos. Nuestro equipo revisará tu consulta y te responderá lo antes posible.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'Sugerencia', message: '' }); }}
                className="mt-4 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl text-sm transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-2">Envíanos un Mensaje Directo</h2>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Tu Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. Alexander Gamer"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Tu Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Asunto</label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  aria-label="Asunto del mensaje de contacto"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 rounded-xl px-4 py-3 text-white outline-none text-sm transition-colors"
                >
                  <option value="Sugerencia">Sugerencia de Símbolos / Fuentes</option>
                  <option value="Reporte">Reportar Error en el Generador</option>
                  <option value="Consulta">Consulta General / Colaboración</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí los detalles..."
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" /> Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
