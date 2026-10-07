'use client';

import { useState } from 'react';
import { Copy, Flame, Sparkles } from 'lucide-react';

const SYMBOL_CATEGORIES = {
  populares: ['꧁', '꧂', ' ঔৣ', '☬', '✞', '乂', '亗', '么', '★', '❤', '⚡', '✿', '╰‿╯', '⚓'],
  coronas: ['👑', '♕', '♔', '𓆩', '𓆪', '♚', '♛', '𓄂', '𓆃', '𓅓'],
  armas: ['⚔️', '🗡️', '🔫', '💣', '🛡️', '🏹', '⚡', '💥', '☠️', '☣️'],
  japoneses: ['乄', '么', '亗', '卍', '气', '王', '神', '鬼', '龍', '魔'],
} as const;

export default function FreeFireSupportSections({
  currentPath,
  handleCopyTrending,
}: {
  currentPath: string;
  handleCopyTrending: (value: string) => void | Promise<void>;
}) {
  const [activeSymbolTab, setActiveSymbolTab] = useState('populares');

  return (
    <>
      {/* Trending Names Section */}
      {(currentPath === '/nombres-free-fire' || currentPath === '/generador-free-fire' || currentPath === '/espacios-invisible-ff' || currentPath === '/nombres-ff-unicos' || currentPath === '/nombres-ff-mujeres' || currentPath === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-8">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <Flame className="w-8 h-8 text-orange-500" />
                  Apodos de Ejemplo
                </h2>
                <p className="text-zinc-400 mt-2">Una selección de estilos para inspirarte, probar y copiar.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-400">Ejemplos listos para copiar</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                '꧁ঔৣ☬✞Killer✞☬ঔৣ꧂',
                '乂✰ɢᴏᴅ✰乂',
                '★Pʀᴏ❤Gᴀᴍᴇʀ★',
                'S ɴ ɪ ᴘ ᴇ ʀ 么',
                '꧁༒Legend༒꧂',
                '亗 V E N O M 亗',
                'ＯＰ ＧＡＭＥＲ ＹＴ',
                'I A M 么 B O S S'
              ].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyTrending(name)}
                  className="group gdn-surface-raised hover:border-violet-500/30 border rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span className="font-medium text-zinc-200 truncate w-full text-center group-hover:text-violet-300 transition-colors">{name}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 group-hover:text-violet-400 transition-colors">Copiar</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Symbol Bank Section */}
      {(currentPath === '/nombres-free-fire' || currentPath === '/generador-free-fire' || currentPath === '/espacios-invisible-ff' || currentPath === '/nombres-ff-unicos' || currentPath === '/nombres-ff-mujeres' || currentPath === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-4">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-violet-400" />
                  Banco de Símbolos Especiales
                </h2>
                <p className="text-zinc-400 mt-2">Haz clic en cualquier símbolo para copiarlo directamente.</p>
              </div>

              {/* Tabs */}
              <div className="gdn-nav flex flex-wrap gap-2 p-1.5 border">
                {[
                  { id: 'populares', label: '🔥 Populares' },
                  { id: 'coronas', label: '👑 Coronas' },
                  { id: 'armas', label: '⚔️ Armas' },
                  { id: 'japoneses', label: '⛩️ Japoneses' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSymbolTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeSymbolTab === tab.id
                        ? 'gdn-primary-button text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Symbol Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-3">
              {(SYMBOL_CATEGORIES[activeSymbolTab as keyof typeof SYMBOL_CATEGORIES] || SYMBOL_CATEGORIES.populares).map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopyTrending(sym)}
                  className="gdn-chip h-14 border rounded-xl text-xl flex items-center justify-center transition-all active:scale-95 group relative"
                  title="Copiar símbolo"
                >
                  <span>{sym}</span>
                  <Copy className="w-3 h-3 text-violet-400 absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Duos and Couples Section (For Free Fire page) */}
      {(currentPath === '/nombres-free-fire' || currentPath === '/generador-free-fire' || currentPath === '/espacios-invisible-ff' || currentPath === '/nombres-ff-unicos' || currentPath === '/nombres-ff-mujeres' || currentPath === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-2">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span className="text-2xl">❤️</span> Nombres para Dúos y Parejas en Free Fire
                </h2>
                <p className="text-zinc-400 mt-1">Combinaciones perfectas para jugar con tu pareja o tu mejor amigo en Dúo Squad.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { pair1: '꧁👑 D U E Ñ O 👑꧂', pair2: '꧁👑 D U E Ñ A 👑꧂', tag: 'Rey y Reina' },
                { pair1: '×͜× K I N G', pair2: '×͜× Q U E E N', tag: 'Estilo Insano' },
                { pair1: '⚡ B O N N I E ⚡', pair2: '⚡ C L Y D E ⚡', tag: 'Pareja Mítica' },
                { pair1: '亗 A D A N 亗', pair2: '亗 E V A 亗', tag: 'Clásico Pro' }
              ].map((duo, idx) => (
                <div key={idx} className="gdn-surface-raised border rounded-xl p-4 flex items-center justify-between gap-3 hover:border-violet-500/30 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-lg border border-violet-500/20 whitespace-nowrap">
                      {duo.tag}
                    </span>
                    <div className="truncate text-sm font-bold text-zinc-200">
                      <span className="text-violet-400">{duo.pair1}</span> <span className="text-zinc-600 mx-1">&</span> <span className="text-fuchsia-400">{duo.pair2}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyTrending(duo.pair1)}
                      className="gdn-chip px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                      title="Copiar Él"
                    >
                      Él
                    </button>
                    <button
                      onClick={() => handleCopyTrending(duo.pair2)}
                      className="gdn-chip px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                      title="Copiar Ella"
                    >
                      Ella
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* How to Change Name Guide */}
      {(currentPath === '/nombres-free-fire' || currentPath === '/generador-free-fire' || currentPath === '/espacios-invisible-ff' || currentPath === '/nombres-ff-unicos' || currentPath === '/nombres-ff-mujeres' || currentPath === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-4">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-6 flex items-center gap-3">
              <span className="text-2xl">🎮</span> ¿Cómo Cambiar tu Nombre en Free Fire Paso a Paso?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Copia tu Apodo', desc: 'Genera o elige tu nombre favorito en nuestro sitio y haz clic en Copiar.' },
                { step: '2', title: 'Abre tu perfil', desc: 'Entra al juego y abre tu perfil para localizar las opciones de edición.' },
                { step: '3', title: 'Busca Editar', desc: 'Busca la opción para editar tu nombre; la ubicación exacta puede cambiar entre versiones.' },
                { step: '4', title: 'Pega y Confirma', desc: 'Pega el apodo copiado y confirma usando el método y coste que muestre tu cuenta en ese momento.' }
              ].map((item, idx) => (
                <div key={idx} className="gdn-surface-raised border rounded-xl p-6 relative flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold font-heading flex items-center justify-center text-lg mb-4 ">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white font-heading mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


    </>
  );
}
