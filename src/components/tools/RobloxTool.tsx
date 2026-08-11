'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface RobloxToolProps {
  handleCopyTrending: (text: string) => void;
}

export default function RobloxTool({ handleCopyTrending }: RobloxToolProps) {
  const [robloxInput, setRobloxInput] = useState('');

  const isLengthValid = robloxInput.length >= 3 && robloxInput.length <= 20;
  const isCharsValid = /^[a-zA-Z0-9_]*$/.test(robloxInput);
  const isUnderscoreValid = (robloxInput.match(/_/g) || []).length <= 1;
  const isEdgeUnderscoreValid = !robloxInput.startsWith('_') && !robloxInput.endsWith('_');
  const isRobloxValid = robloxInput.length > 0 && isLengthValid && isCharsValid && isUnderscoreValid && isEdgeUnderscoreValid;

  return (
    <div className="max-w-6xl mx-auto py-4 space-y-8">
      {/* Username Validator */}
      <div className="bg-[#121212] border border-fuchsia-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-fuchsia-950/20 via-[#121212] to-violet-950/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider mb-3">
              🎮 Roblox Username Policy Checker
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
              Comprobador de Validez de Username en Roblox
            </h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">
              Verifica si tu propuesta de usuario cumple con las reglas oficiales de Roblox antes de crear tu cuenta.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 space-y-6">
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-2">Escribe tu candidato a Username de Roblox:</label>
            <div className="relative">
              <input
                type="text"
                value={robloxInput}
                onChange={(e) => setRobloxInput(e.target.value)}
                placeholder="Ej. x_AestheticGirl_x"
                className="w-full px-5 py-4 bg-zinc-800/80 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-500 font-mono text-lg tracking-wide"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isRobloxValid ? (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
                    ✓ Válido en Roblox
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">
                    ⚠ Formato no permitido
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className={`p-3 rounded-xl border ${isLengthValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isLengthValid ? '✓' : '✗'} 3 a 20 caracteres ({robloxInput.length}/20)
            </div>
            <div className={`p-3 rounded-xl border ${isCharsValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isCharsValid ? '✓' : '✗'} Solo a-z, A-Z, 0-9 y _
            </div>
            <div className={`p-3 rounded-xl border ${isUnderscoreValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isUnderscoreValid ? '✓' : '✗'} Máximo 1 guión bajo (_)
            </div>
            <div className={`p-3 rounded-xl border ${isEdgeUnderscoreValid ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-zinc-800/50 border-white/5 text-zinc-400'}`}>
              {isEdgeUnderscoreValid ? '✓' : '✗'} Sin _ al inicio o final
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
            <p className="text-xs text-zinc-400">
              💡 Tip: Para usar símbolos como ★ o 👑, agrégalos a tu <strong>Display Name</strong> en la configuración.
            </p>
            <button
              onClick={() => handleCopyTrending(robloxInput)}
              disabled={!isRobloxValid}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 disabled:opacity-50 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-fuchsia-500/20 active:scale-95 transition-all text-sm whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <Copy className="w-4 h-4" />
              Copiar Username
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <h3 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
            🎮 Ideas de Nombres por Juego de Roblox
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { game: 'Blox Fruits', name: 'Shadow_Viper', tag: '⚔️ PvP Master' },
              { game: 'Brookhaven RP', name: 'v_AestheticGirl_x', tag: '🌸 Aesthetic' },
              { game: 'Adopt Me!', name: 'Cookie_Softie', tag: '🧸 Cute' },
              { game: 'BedWars / Tower', name: 'Vortex_Pro1', tag: '⚡ Tryhard' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-fuchsia-500/30 transition-all">
                <div>
                  <span className="text-[10px] uppercase font-bold text-fuchsia-400 tracking-wider block mb-1">{item.game}</span>
                  <span className="font-mono font-bold text-zinc-100 text-sm block truncate">{item.name}</span>
                </div>
                <button
                  onClick={() => handleCopyTrending(item.name)}
                  className="w-full py-2 bg-zinc-800 hover:bg-fuchsia-600/30 text-zinc-300 hover:text-fuchsia-200 text-xs font-semibold rounded-lg border border-white/5 transition-all flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3 h-3" /> Copiar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Name Generator */}
      <div className="bg-[#121212] border border-fuchsia-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider mb-2">
            ✨ 100% Permitido en Roblox
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
            Generador de Display Name Aesthetic para Roblox
          </h2>
          <p className="text-zinc-400 mt-1 text-sm">
            A diferencia del Username, tu <strong>Display Name</strong> sí admite espacios, emojis y fuentes especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Aesthetic Soft', text: `✨ ${robloxInput || 'Softie'} ✨`, tag: '🌸 Soft' },
            { label: 'Eboy / Egirl', text: `🖤 ${robloxInput || 'DarkVoid'} 🖤`, tag: '⚡ Dark' },
            { label: 'VIP Crown', text: `👑 ${robloxInput || 'Princess'} 👑`, tag: '👑 Pro' },
            { label: 'Y2K Stars', text: `⭐ ${robloxInput || 'Angel'} ⭐`, tag: '💫 Stars' }
          ].map((style, idx) => (
            <div key={idx} className="bg-zinc-900/80 border border-white/5 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-fuchsia-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-400">{style.label}</span>
                  <span className="text-[10px] bg-fuchsia-500/10 text-fuchsia-300 px-2 py-0.5 rounded-full border border-fuchsia-500/20">{style.tag}</span>
                </div>
                <p className="font-medium text-white text-base truncate">{style.text}</p>
              </div>
              <button
                onClick={() => handleCopyTrending(style.text)}
                className="w-full py-2.5 bg-fuchsia-600/20 hover:bg-fuchsia-600/30 text-fuchsia-300 font-semibold rounded-xl border border-fuchsia-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-xs"
              >
                <Copy className="w-3.5 h-3.5" /> Copiar Display Name
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
