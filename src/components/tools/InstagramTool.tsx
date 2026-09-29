'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface InstagramToolProps {
  handleCopyTrending: (text: string) => void;
}

export default function InstagramTool({ handleCopyTrending }: InstagramToolProps) {
  const [igInput, setIgInput] = useState('');

  const isIgLenValid = igInput.length >= 1 && igInput.length <= 30;
  const isIgCharsValid = /^[a-zA-Z0-9._]*$/.test(igInput);
  const isIgDotEdgeValid = !igInput.startsWith('.') && !igInput.endsWith('.');
  const isIgConsecutiveDotValid = !igInput.includes('..');
  const isIgValid = igInput.length > 0 && isIgLenValid && isIgCharsValid && isIgDotEdgeValid && isIgConsecutiveDotValid;

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      {/* Username Validator */}
      <div className="bg-[#121212] border border-pink-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-pink-950/20 via-[#121212] to-rose-950/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
              📸 Validador de Usuario Instagram (@username)
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
              Comprobador de Nombre de Usuario para Instagram
            </h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">
              Verifica que tu propuesta de @usuario cumpla con las políticas oficiales de Instagram para evitar rechazos.
            </p>
          </div>
        </div>

        {/* Live Validator Box */}
        <div className="gdn-tool-result bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 space-y-6">
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-2">Escribe tu candidato a Username de IG (@usuario):</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 font-bold text-lg font-mono">@</span>
              <input
                type="text"
                value={igInput}
                onChange={(e) => setIgInput(e.target.value)}
                placeholder="iam.sofia_"
                className="gdn-validator-input gdn-tool-input w-full pl-10 pr-36 py-4 bg-zinc-800/80 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 font-mono text-lg tracking-wide"
              />
              <div className="gdn-validator-status absolute right-4 top-1/2 -translate-y-1/2">
                {isIgValid ? (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
                    ✓ Formato Válido en IG
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">
                    ⚠ Formato Inválido
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
            <span className="text-xs font-semibold text-zinc-400 block mb-3">Variaciones recomendadas para encontrar tu @ disponible:</span>
            <div className="flex flex-wrap gap-2">
              {[
                `iam.${igInput || 'sofia'}`,
                `${igInput || 'sofia'}.official`,
                `real.${igInput || 'sofia'}`,
                `the.${igInput || 'sofia'}_`,
                `${igInput || 'sofia'}.ph`
              ].map((varName, idx) => (
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
      <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 shadow-2xl">
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
