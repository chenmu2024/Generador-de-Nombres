'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { getCompoundSuggestions, lookupNameMeaning } from '../../data/compoundNames';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';
import CompoundNamePicker from './CompoundNamePicker';

export default function FemaleNamesTool({
  handleCopyTrending,
  currentPath,
}: {
  handleCopyTrending: (value: string) => void;
  currentPath: string;
}) {
  const [femaleFirstName, setFemaleFirstName] = useState('Sofía');
  const [femaleSecondName, setFemaleSecondName] = useState('Valentina');
  const [femaleVibe, setFemaleVibe] = useState<'elegante' | 'corto' | 'biblico' | 'moderno' | 'internacional'>(currentPath === '/nombres-de-nina' ? 'corto' : 'elegante');

  const speakName = (text: string) => readNameAloud(text, 'es-ES');

  return (
    <div className="gdn-tool-shell bg-gradient-to-br from-pink-950/40 via-[#121212] to-amber-950/30 border border-pink-500/30 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🌸 {currentPath === '/nombres-de-nina' ? 'Buscador de Nombres de Niña No Comunes & Cortos (3-4 Letras)' : 'Buscador de Significados & Creador de Nombres Compuestos (2026)'}
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    {currentPath === '/nombres-de-nina' 
    ? 'Nombres de Niña No Comunes, Cortos y Preciosos con Significado' 
    : 'Nombres de Mujer y Niña Bonitos, Elegantes y con Significado'}
    </h2>
    <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
    {currentPath === '/nombres-de-nina'
    ? 'Descubre nombres de niñas raros pero hermosos, de 3 y 4 letras, combina dos nombres dulces, revisa su etimología y escucha la pronunciación en voz sintetizada del dispositivo.'
    : 'Combina dos nombres bonitos, explora su origen histórico y significado profundo, escucha la pronunciación en audio y genera versiones decoradas para perfiles.'}
    </p>
    </div>
    </div>
    
    {/* Interactive Compound Name Builder & Meaning Explorer */}
    <div className="bg-zinc-950/90 border border-pink-500/20 rounded-2xl p-4 sm:p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-pink-400" /> Explorador por Estilo & Combinación Compuesta
    </span>
    
    {/* Vibe Tabs */}
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'elegante', label: '👑 Elegante' },
    { id: 'corto', label: '🌿 Corto (3-4 Letras)' },
    { id: 'biblico', label: '🕊️ Bíblico / Raro' },
    { id: 'internacional', label: '✨ Chic / Global' }
    ].map(tab => (
    <button
    key={tab.id}
    aria-pressed={femaleVibe === tab.id}
    onClick={() => setFemaleVibe(tab.id as any)}
    className={`gdn-tool-tab min-h-11 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
    femaleVibe === tab.id
    ? 'bg-gradient-to-r from-pink-600 to-amber-600 text-white shadow-md'
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
    <label htmlFor="femalenamestool-field-1" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre</label>
    <input id="femalenamestool-field-1"
    maxLength={80}
    type="text"
    value={femaleFirstName}
    onChange={(e) => setFemaleFirstName(e.target.value)}
    placeholder="Ej: Zoe, Mia, Aitana, Iris"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
    />
    </div>
    <div>
    <label htmlFor="femalenamestool-field-2" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre (Compuesto)</label>
    <input id="femalenamestool-field-2"
    maxLength={80}
    type="text"
    value={femaleSecondName}
    onChange={(e) => setFemaleSecondName(e.target.value)}
    placeholder="Ej: Valentina, Lucía, Elena, Isabel"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
    />
    </div>
    </div>
    
    {/* Combined Result Card with Meaning & Audio */}
    {(() => {
    const p1 = femaleFirstName.trim() || (currentPath === '/nombres-de-nina' ? 'Aitana' : 'Sofía');
    const p2 = femaleSecondName.trim() || (currentPath === '/nombres-de-nina' ? 'Lucía' : 'Valentina');
    const combined = `${p1} ${p2}`;
    
    const m1 = lookupNameMeaning(p1);
    const m2 = lookupNameMeaning(p2);
    
    return (
    <div className="gdn-tool-result bg-zinc-900/90 p-5 rounded-2xl border border-pink-500/30 space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
    <div>
    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block">Combinación Compuesta Resultante</span>
    <h3 className="text-xl font-bold text-white font-heading">{combined}</h3>
    </div>
    <div className="flex items-center gap-2">
    <button
    onClick={() => handleCopyTrending(combined)}
    className="min-h-11 px-3.5 py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre
    </button>
    <button
    onClick={() => speakName(combined)}
    className="p-2 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-xl transition-colors border border-white/10"
    title="Escuchar Pronunciación"
    >
    <Volume2 className="w-4 h-4" />
    </button>
    </div>
    </div>
    
    {/* Etymology Breakdown */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-pink-300 font-bold">1. {p1} ({m1.origin})</span>
    <p className="text-zinc-400">{m1.meaning}</p>
    {m1.source && <a href={m1.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-pink-300 font-bold">2. {p2} ({m2.origin})</span>
    <p className="text-zinc-400">{m2.meaning}</p>
    {m2.source && <a href={m2.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    </div>
    
    {/* Aesthetic Profile Decor Variations */}
    <div className="pt-2 space-y-2">
    <span className="text-xs font-bold text-zinc-300 block">Variaciones tipográficas opcionales (haz clic para copiar):</span>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {[
    `✨ ${combined} ✨`,
    `🌸 ${combined} 🌸`,
    `👑 ${combined} 👑`,
    `🌷 ${combined} 🌷`,
    `🎀 ${combined} 🎀`,
    `💖 ${combined} 💖`
    ].map((dec, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(dec)}
    className="p-2.5 bg-zinc-950/90 hover:bg-pink-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-pink-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
    >
    <span className="truncate">{dec}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-300 shrink-0 ml-1.5" />
    </button>
    ))}
    </div>
    </div>
    </div>
    );
    })()}
    </div>
    
    {/* Ready-to-copy Curated Female / Girl Names Grid */}
    <div className="space-y-3 relative z-10">
    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
    <Flame className="w-4 h-4 text-amber-400" /> {currentPath === '/nombres-de-nina' ? 'Nombres de Niña No Comunes y Cortos Destacados' : 'Nombres de Mujer y Niña Seleccionados'} (Clic para Copiar)
    </span>
    <p className="text-xs text-zinc-400" role="status">El estilo filtra las sugerencias; no cambia los nombres que escribes. La longitud corresponde al primer nombre. Selección editorial, no ranking de popularidad.</p>
    <CompoundNamePicker
      suggestions={getCompoundSuggestions('female', femaleVibe)}
      onCopy={handleCopyTrending}
      onUse={(value) => {
        const [first, ...rest] = value.split(' ');
        setFemaleFirstName(first);
        setFemaleSecondName(rest.join(' '));
      }}
    />
    </div>
    </div>
  );
}
