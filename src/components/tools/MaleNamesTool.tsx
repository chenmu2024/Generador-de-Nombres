'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { getCompoundSuggestions, lookupNameMeaning } from '../../data/compoundNames';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';
import CompoundNamePicker from './CompoundNamePicker';

export default function MaleNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [maleFirstName, setMaleFirstName] = useState('Mateo');
  const [maleSecondName, setMaleSecondName] = useState('Gael');
  const [maleVibe, setMaleVibe] = useState<'moderno' | 'raro' | 'corto' | 'fuerte' | 'biblico'>('moderno');

  const speakName = (text: string) => readNameAloud(text, 'es-ES');

  return (
    <div className="gdn-tool-shell bg-gradient-to-br from-blue-950/40 via-[#121212] to-cyan-950/30 border border-blue-500/30 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🛡️ Buscador de Nombres de Niños con Significado & Creador Compuesto (2026)
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    Nombres de Niños (con Significado, Modernos y Raros)
    </h2>
    <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
    Combina dos nombres masculinos con fuerza y personalidad, descubre su origen histórico y significado profundo, escucha su pronunciación en audio y genera formatos estéticos.
    </p>
    </div>
    </div>
    
    {/* Interactive Male Compound Name Builder & Meaning Explorer */}
    <div className="bg-zinc-950/90 border border-blue-500/20 rounded-2xl p-4 sm:p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-blue-400" /> Explorador por Estilo Masculino & Combinación
    </span>
    
    {/* Male Vibe Tabs */}
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'moderno', label: '🚀 Moderno / Chic' },
    { id: 'raro', label: '👑 Raro & Fuerte' },
    { id: 'corto', label: '⚡ Corto (3-4 Letras)' },
    { id: 'biblico', label: '🛡️ Bíblico / Tradicional' }
    ].map(tab => (
    <button
    key={tab.id}
    aria-pressed={maleVibe === tab.id}
    onClick={() => setMaleVibe(tab.id as any)}
    className={`gdn-tool-tab min-h-11 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
    maleVibe === tab.id
    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
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
    <label htmlFor="malenamestool-field-1" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Masculino</label>
    <input id="malenamestool-field-1"
    maxLength={80}
    type="text"
    value={maleFirstName}
    onChange={(e) => setMaleFirstName(e.target.value)}
    placeholder="Ej: Mateo, Leo, Liam, Enzo"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
    />
    </div>
    <div>
    <label htmlFor="malenamestool-field-2" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre Masculino</label>
    <input id="malenamestool-field-2"
    maxLength={80}
    type="text"
    value={maleSecondName}
    onChange={(e) => setMaleSecondName(e.target.value)}
    placeholder="Ej: Gael, Gabriel, Alexander, Thiago"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
    />
    </div>
    </div>
    
    {/* Combined Result Card with Meaning & Audio */}
    {(() => {
    const m1Name = maleFirstName.trim() || 'Mateo';
    const m2Name = maleSecondName.trim() || 'Gael';
    const combinedMale = `${m1Name} ${m2Name}`;
    
    const mean1 = lookupNameMeaning(m1Name);
    const mean2 = lookupNameMeaning(m2Name);
    
    return (
    <div className="gdn-tool-result bg-zinc-900/90 p-5 rounded-2xl border border-blue-500/30 space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
    <div>
    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Combinación Masculina Resultante</span>
    <h3 className="text-xl font-bold text-white font-heading">{combinedMale}</h3>
    </div>
    <div className="flex items-center gap-2">
    <button
    onClick={() => handleCopyTrending(combinedMale)}
    className="min-h-11 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre
    </button>
    <button
    onClick={() => speakName(combinedMale)}
    className="p-2 bg-zinc-800 hover:bg-zinc-700 text-blue-300 rounded-xl transition-colors border border-white/10"
    title="Escuchar Pronunciación"
    >
    <Volume2 className="w-4 h-4" />
    </button>
    </div>
    </div>
    
    {/* Etymology Breakdown */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-blue-300 font-bold">1. {m1Name} ({mean1.origin})</span>
    <p className="text-zinc-400">{mean1.meaning}</p>
    {mean1.source && <a href={mean1.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-blue-300 font-bold">2. {m2Name} ({mean2.origin})</span>
    <p className="text-zinc-400">{mean2.meaning}</p>
    {mean2.source && <a href={mean2.source} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">Fuente del significado</a>}
    </div>
    </div>
    
    {/* Aesthetic Profile Decor Variations */}
    <div className="pt-2 space-y-2">
    <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Masculinos con Símbolos (Haz clic para copiar):</span>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {[
    `⚡ ${combinedMale} ⚡`,
    `👑 ${combinedMale} 👑`,
    `🛡️ ${combinedMale} 🛡️`,
    `⭐ ${combinedMale} ⭐`,
    `💙 ${combinedMale} 💙`,
    `🏆 ${combinedMale} 🏆`
    ].map((dec, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(dec)}
    className="p-2.5 bg-zinc-950/90 hover:bg-blue-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-blue-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
    >
    <span className="truncate">{dec}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-300 shrink-0 ml-1.5" />
    </button>
    ))}
    </div>
    </div>
    </div>
    );
    })()}
    </div>
    
    {/* Ready-to-copy Curated Male Names Grid */}
    <div className="space-y-3 relative z-10">
    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
    <Flame className="w-4 h-4 text-amber-400" /> Nombres de Niños Seleccionados por Estilo (Clic para Copiar)
    </span>
    <p className="text-xs text-zinc-400" role="status">El estilo filtra las sugerencias; no cambia los nombres que escribes. La longitud corresponde al primer nombre. Selección editorial, no ranking de popularidad.</p>
    <CompoundNamePicker
      suggestions={getCompoundSuggestions('male', maleVibe)}
      onCopy={handleCopyTrending}
      onUse={(value) => {
        const [first, ...rest] = value.split(' ');
        setMaleFirstName(first);
        setMaleSecondName(rest.join(' '));
      }}
    />
    </div>
    </div>
  );
}
