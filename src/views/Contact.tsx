'use client';

import React, { useState } from 'react';
import { Link } from '../components/Link';
import { copyText } from '../utils/clipboard';
import { Mail, MessageSquare, Send, CheckCircle, ArrowLeft, HelpCircle, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Sugerencia', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      const subject = encodeURIComponent(`[GeneradorDeNombres.net] ${formData.subject} - ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\nAsunto: ${formData.subject}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:soporte@generadordenombres.net?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

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
            <Mail className="w-3.5 h-3.5" />
            Soporte y Contacto
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contacto y Atención Editorial
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-base">
            ¿Tienes dudas, sugerencias o encontraste un símbolo no compatible? Envíanos tu mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-violet-500/10 text-violet-400 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Correo Electrónico</h3>
                  <p className="text-xs text-zinc-400">soporte@generadordenombres.net</p>
                  <button type="button" className="text-xs text-violet-300 underline mt-2" onClick={async () => setEmailCopied(await copyText('soporte@generadordenombres.net'))}>Copiar correo</button>
                  {emailCopied && <p role="status" className="text-xs text-emerald-300">Correo copiado</p>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Tiempo de Respuesta</h3>
                  <p className="text-xs text-zinc-400">Según la disponibilidad del equipo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Envío desde tu correo</h3>
                  <p className="text-xs text-zinc-400">Revisa el mensaje antes de enviarlo</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-violet-400" /> Preguntas Frecuentes
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Si buscas nombres específicos o símbolos como el espacio invisible de Free Fire, explora nuestras secciones temáticas desde el menú principal.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Correo preparado</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Intentamos abrir tu aplicación de correo con el mensaje preparado. Si no se abre, puedes copiar el mensaje y escribir a soporte@generadordenombres.net. El envío se completa cuando confirmas el correo desde tu aplicación.
                </p>
                <button
                  onClick={() => { setSubmitted(false); }}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Volver al mensaje
                </button>
              </div>
            ) : (
              <>
              <p className="text-sm text-zinc-400">Este formulario abre tu aplicación de correo; debes enviar el mensaje allí. Si no se abre, escribe a soporte@generadordenombres.net. El texto se conserva en esta página.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-field-1" className="block text-xs font-semibold text-zinc-300 mb-1">Nombre o Apodo</label>
                  <input id="contact-field-1"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-field-2" className="block text-xs font-semibold text-zinc-300 mb-1">Correo Electrónico</label>
                  <input id="contact-field-2"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-field-3" className="block text-xs font-semibold text-zinc-300 mb-1">Asunto</label>
                  <select id="contact-field-3"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-violet-500"
                  >
                    <option value="Sugerencia">Sugerencia de nombre o función</option>
                    <option value="Soporte">Reportar un error técnico</option>
                    <option value="Publicidad">Consultas sobre anuncios o colaboración</option>
                    <option value="Otro">Otro asunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-field-4" className="block text-xs font-semibold text-zinc-300 mb-1">Mensaje</label>
                  <textarea id="contact-field-4"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-violet-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-violet-600/20"
                >
                  <Send className="w-4 h-4" />
                  Preparar correo
                </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
