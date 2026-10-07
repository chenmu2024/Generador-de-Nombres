'use client';

import { instagramSuggestions } from '../../utils/text';
import { createInstagramPersonalizedIdeas } from '../../utils/instagramPersonalized';
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface InstagramToolProps {
  handleCopyTrending: (text: string) => void;
}

export default function InstagramTool({ handleCopyTrending }: InstagramToolProps) {
  const [igInput, setIgInput] = useState('');
  const [personalName, setPersonalName] = useState('');
  const personalSuggestions = createInstagramPersonalizedIdeas(personalName);

  const isIgLenValid = igInput.length >= 1 && igInput.length <= 30;
  const isIgCharsValid = /^[a-zA-Z0-9._]*$/.test(igInput);
  const isIgDotEdgeValid = !igInput.startsWith('.') && !igInput.endsWith('.');
  const isIgConsecutiveDotValid = !igInput.includes('..');
  const isIgValid = igInput.length > 0 && isIgLenValid && isIgCharsValid && isIgDotEdgeValid && isIgConsecutiveDotValid;

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      {/* Personalized entry from the observed "con tu nombre" search intent. */}
      <section id="instagram-con-tu-nombre" className="gdn-surface scroll-mt-24 border rounded-3xl p-4 sm:p-6 lg:p-8 space-y-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-heading">Crea un @usuario de Instagram con tu nombre</h2>
          <p className="text-sm text-zinc-300 leading-relaxed mt-2">
            Escribe tu nombre o una combinación de nombre y apellido. Compara variantes minimalistas, creativas y personales, y copia las que quieras probar.
          </p>
        </div>
        <label htmlFor="instagram-personal-name" className="block text-sm font-semibold text-zinc-200">
          Tu nombre o nombre y apellido
        </label>
        <input
          id="instagram-personal-name"
          aria-label="Tu nombre para crear usuarios de Instagram"
          type="text"
          autoComplete="off"
          maxLength={90}
          className="gdn-tool-input w-full min-h-11 px-4 py-3 rounded-xl border border-white/10 bg-zinc-900 text-zinc-100"
          placeholder="Ej. María López"
          value={personalName}
          onChange={event => setPersonalName(event.target.value)}
        />
        <p className="text-xs text-zinc-400">
          El generador adapta tildes y espacios al formato básico de @usuario. No consulta Instagram, no verifica disponibilidad y no reserva nombres.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-zinc-300" role="status" aria-live="polite">
            {personalSuggestions.length} propuestas para comparar
          </p>
          <button type="button" className="gdn-chip min-h-11 rounded-xl border px-4 py-2 text-sm disabled:opacity-50"
            disabled={!personalSuggestions.length} onClick={() => handleCopyTrending(personalSuggestions.map(item => '@' + item.username).join('\n'))}
            aria-label="Copiar todas las propuestas para Instagram">
            <Copy className="w-4 h-4 inline mr-2" aria-hidden="true" /> Copiar todas
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" aria-label="Usuarios personalizados">
          {personalSuggestions.map(item => (
            <div key={item.username} className="gdn-surface-raised border rounded-xl px-4 py-3 flex items-center justify-between gap-2 min-w-0">
              <div className="min-w-0">
                <p className="font-mono text-sm text-zinc-100 break-all">@{item.username}</p>
                <span className="text-xs text-zinc-400">{item.group}</span>
              </div>
              <button type="button" aria-label={`Copiar usuario @${item.username}`}
                className="gdn-chip min-h-11 min-w-11 p-2 rounded-lg border flex items-center justify-center shrink-0"
                onClick={() => handleCopyTrending(item.username)}>
                <Copy className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
        {personalName && personalSuggestions.length === 0 && <p role="status" className="text-sm text-amber-200">
          No se pudo formar un @usuario a partir de ese texto. Prueba letras o números.
        </p>}
      </section>

      {/* Username Validator */}
      <div id="instagram-validar-usuario" className="bg-[#121212] border border-pink-500/20 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-pink-950/20 via-[#121212] to-rose-950/10 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
              📸 Validador de Usuario Instagram (@username)
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
              Comprobador de Nombre de Usuario para Instagram
            </h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">
              Verifica que tu propuesta de @usuario tenga un formato básico válido. La disponibilidad y aceptación se comprueban en Instagram.
            </p>
          </div>
        </div>

        {/* Live Validator Box */}
        <div className="gdn-tool-result bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 space-y-6">
          <div>
            <label htmlFor="instagram-username" className="text-xs font-semibold text-zinc-400 block mb-2">Escribe tu candidato a Username de IG (@usuario):</label>
            <div className="gdn-validator-field relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 font-bold text-lg font-mono">@</span>
              <input
                id="instagram-username"
                maxLength={120}
                type="text"
                value={igInput}
                onChange={(e) => setIgInput(e.target.value)}
                placeholder="iam.sofia_"
                className="gdn-validator-input gdn-tool-input w-full pl-10 pr-36 py-4 bg-zinc-800/80 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 font-mono text-lg tracking-wide"
              />
              <div className="gdn-validator-status absolute right-4 top-1/2 -translate-y-1/2">
                {isIgValid ? (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
                    ✓ Formato básico compatible
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">
                    ⚠ Revisar formato
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Rule Verification checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className={`p-3 rounded-xl border ${isIgLenValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isIgLenValid ? '✓' : '✗'} 1 a 30 caracteres ({igInput.length}/30)
            </div>
            <div className={`p-3 rounded-xl border ${isIgCharsValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isIgCharsValid ? '✓' : '✗'} Solo a-z, 0-9, puntos (.) y guiones (_)
            </div>
            <div className={`p-3 rounded-xl border ${isIgDotEdgeValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isIgDotEdgeValid ? '✓' : '✗'} Sin puntos (.) al inicio o final
            </div>
            <div className={`p-3 rounded-xl border ${isIgConsecutiveDotValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isIgConsecutiveDotValid ? '✓' : '✗'} Sin puntos seguidos (..)
            </div>
          </div>

          {/* Quick Variations */}
          <div className="pt-4 border-t border-white/5">
            <span className="text-xs font-semibold text-zinc-400 block mb-3">Variaciones recomendadas para comprobar en Instagram:</span>
            {!isIgValid && <p role="status" className="text-xs text-zinc-400 mb-3">Escribe un usuario con formato válido para ver sugerencias.</p>}
            <div className="flex flex-wrap gap-2">
              {instagramSuggestions(igInput).map((varName, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopyTrending(varName)}
                  className="px-3.5 py-2 bg-zinc-800 hover:bg-pink-600/20 text-zinc-200 hover:text-pink-300 rounded-xl text-xs font-mono border border-white/5 transition-all flex items-center gap-1.5"
                >
                  <span>@{varName}</span>
                  <Copy className="w-3 h-3 text-pink-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Bio Templates */}
      <div id="instagram-biografia" className="bg-[#121212] border border-white/5 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
            <span>✨</span> Plantillas de Biografía Aesthetic para Instagram
          </h2>
          <p className="text-zinc-400 mt-1 text-sm">
            Copia estas biografías listas para pegar en tu perfil de Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Personal / Lifestyle', bio: '📍 Creator | 📸 Photo & Travel\n✨ Living my best life\n💌 DM for Collabs', tag: '✨ Lifestyle' },
            { title: 'Gamer & Streamer', bio: '⚡ Pro Gamer & Streamer\n🎮 Daily Live Stream @ 8PM\n📩 Business: contact@game.com', tag: '🎮 Gaming' },
            { title: 'Aesthetic / Soft', bio: '🌸 Soft vibes & art lover\n☁️ Dreamer | ☕ Coffee addicted\n🕊️ Spread kindness always', tag: '🌸 Soft' },
            { title: 'Minimalist / Dark', bio: '🖤 Less is more\n🎨 Design & Photography\n🎧 Music is my escape', tag: '🖤 Minimal' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-pink-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <span className="text-[10px] bg-pink-500/10 text-pink-300 px-2.5 py-0.5 rounded-full border border-pink-500/20">{item.tag}</span>
                </div>
                <pre className="text-xs text-zinc-300 font-sans whitespace-pre-wrap bg-zinc-950/60 p-3 rounded-xl border border-white/5 leading-relaxed">
                  {item.bio}
                </pre>
              </div>
              <button
                onClick={() => handleCopyTrending(item.bio)}
                className="w-full py-2.5 bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 font-semibold rounded-xl border border-pink-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-xs"
              >
                <Copy className="w-3.5 h-3.5" /> Copiar Biografía Completa
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
