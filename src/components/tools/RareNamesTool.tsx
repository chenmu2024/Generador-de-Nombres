'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { getCompoundSuggestions, lookupNameMeaning } from '../../data/compoundNames';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';

export default function RareNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [rareFirstName, setRareFirstName] = useState('Orion');
  const [rareSecondName, setRareSecondName] = useState('Cassian');
  const [rareVibe, setRareVibe] = useState<'mitologia' | 'espacial' | 'antiguo' | 'fantasia'>('mitologia');

  const speakName = (text: string) => readNameAloud(text, 'es-ES');

  return (
    <div className="gdn-tool-shell bg-gradient-to-br from-purple-950/40 via-[#121212] to-indigo-950/30 border border-purple-500/30 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🔮 Buscador de Nombres Raros & Combinador Exótico (2026)
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    Nombres Raros (Únicos, Poco Comunes y Fascinantes)
    </h2>
    <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
    Explora nombres extravagantes, mitológicos y cósmicos. Combina dos nombres exóticos, descubre su etimología antigua y escucha la lectura sintetizada del dispositivo.
    </p>
    </div>
    </div>
    
    {/* Interactive Rare Name Builder & Meaning Explorer */}
    <div className="bg-zinc-950/90 border border-purple-500/20 rounded-2xl p-4 sm:p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-purple-400" /> Explorador por Categoría de Rareza & Creador
    </span>
    
    {/* Rare Vibe Tabs */}
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'mitologia', label: '🔮 Mitología / Leyendas' },
    { id: 'espacial', label: '🌌 Astrología / Cosmos' },
    { id: 'antiguo', label: '⚜️ Antiguo / Histórico' },
    { id: 'fantasia', label: '✨ Fantasía / Épico' }
    ].map(tab => (
    <button
    key={tab.id}
    aria-pressed={rareVibe === tab.id}
    onClick={() => setRareVibe(tab.id as any)}
    className={`gdn-tool-tab min-h-11 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
    rareVibe === tab.id
    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
    : 'text-zinc-400 hover:text-white'
    }`}
    >
    {tab.label}
    </button>
    ))}
    </div>
    </div>
    
    {/* Inputs Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
    <label htmlFor="rarenamestool-field-1" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Raro / Base</label>
    <input id="rarenamestool-field-1"
    maxLength={80}
    type="text"
    value={rareFirstName}
    onChange={(e) => setRareFirstName(e.target.value)}
    placeholder="Ej: Orion, Freya, Cassian, Zephyr"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium"
    />
    </div>
    <div>
    <label htmlFor="rarenamestool-field-2" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre / Apellido Raro</label>
    <input id="rarenamestool-field-2"
    maxLength={80}
    type="text"
    value={rareSecondName}
    onChange={(e) => setRareSecondName(e.target.value)}
    placeholder="Ej: Cassian, Astrid, Soren, Lyra"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium"
    />
    </div>
    </div>
    
    {/* Combined Result Card with Meaning & Audio */}
    {(() => {
    const r1 = rareFirstName.trim() || 'Orion';
    const r2 = rareSecondName.trim() || 'Cassian';
    const combinedRare = `${r1} ${r2}`;
    
    const rm1 = lookupNameMeaning(r1);
    const rm2 = lookupNameMeaning(r2);
    
    return (
    <div className="gdn-tool-result bg-zinc-900/90 p-5 rounded-2xl border border-purple-500/30 space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
    <div>
    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">Combinación Exótica Resultante</span>
    <h3 className="text-xl font-bold text-white font-heading">{combinedRare}</h3>
    </div>
    <div className="flex items-center gap-2">
    <button
    onClick={() => handleCopyTrending(combinedRare)}
    className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre
    </button>
    <button
    onClick={() => speakName(combinedRare)}
    className="p-2 bg-zinc-800 hover:bg-zinc-700 text-purple-300 rounded-xl transition-colors border border-white/10"
    title="Escuchar Pronunciación"
    >
    <Volume2 className="w-4 h-4" />
    </button>
    </div>
    </div>
    
    {/* Etymology Breakdown */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-purple-300 font-bold">1. {r1} ({rm1.origin})</span>
    <p className="text-zinc-400">{rm1.meaning}</p>
    {rm1.source && <a href={rm1.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-purple-300 font-bold">2. {r2} ({rm2.origin})</span>
    <p className="text-zinc-400">{rm2.meaning}</p>
    {rm2.source && <a href={rm2.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    </div>
    
    {/* Aesthetic Profile Decor Variations */}
    <div className="pt-2 space-y-2">
    <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Exóticos y Místicos (Haz clic para copiar):</span>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {[
    `🔮 ${combinedRare} 🔮`,
    `🌌 ${combinedRare} 🌌`,
    `⚜️ ${combinedRare} ⚜️`,
    `✨ ${combinedRare} ✨`,
    `🪐 ${combinedRare} 🪐`,
    `✦ ${combinedRare} ✦`
    ].map((dec, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(dec)}
    className="p-2.5 bg-zinc-950/90 hover:bg-purple-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
    >
    <span className="truncate">{dec}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-300 shrink-0 ml-1.5" />
    </button>
    ))}
    </div>
    </div>
    </div>
    );
    })()}
    </div>
    
    {/* Ready-to-copy Curated Rare Names Grid */}
    <div className="space-y-3 relative z-10">
    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
    <Flame className="w-4 h-4 text-amber-400" /> Nombres Raros y Exóticos Seleccionados (Clic para Copiar)
    </span>
    <p className="text-xs text-zinc-400" role="status">El estilo filtra las sugerencias; no cambia los nombres que escribes. La longitud corresponde al primer nombre. Selección editorial, no ranking de popularidad.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {getCompoundSuggestions('rare', rareVibe).map((item, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(item.val)}
    className="p-3.5 bg-zinc-900/90 hover:bg-purple-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
    >
    <div className="flex items-center justify-between w-full">
    <span className="text-purple-300 font-bold truncate">{item.label}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-300 shrink-0" />
    </div>
    <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
    </button>
    ))}
    </div>
    </div>
    </div>
  );
}
