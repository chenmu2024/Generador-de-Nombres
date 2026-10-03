'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';

export default function UnisexNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [unisexFirstName, setUnisexFirstName] = useState('Alex');
  const [unisexSecondName, setUnisexSecondName] = useState('Morgan');
  const [unisexVibe, setUnisexVibe] = useState<'moderno' | 'naturaleza' | 'elegante' | 'mistico'>('moderno');

  const speakName = (text: string) => readNameAloud(text, 'es-ES');

  return (
    <div className="gdn-tool-shell bg-gradient-to-br from-emerald-950/40 via-[#121212] to-teal-950/30 border border-emerald-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
    ✨ Buscador de Nombres Unisex & Combinador Neutro (2026)
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    Nombres Unisex (Neutros, Modernos y con Estilo)
    </h2>
    <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
    Explora nombres versátiles y neutros para bebés, personajes y redes sociales. Combina dos nombres, consulta su etimología y escucha la pronunciación en audio.
    </p>
    </div>
    </div>
    
    {/* Interactive Unisex Compound Name Builder & Meaning Explorer */}
    <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-2xl p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-emerald-400" /> Filtro por Estilo Neutro & Combinador
    </span>
    
    {/* Unisex Vibe Tabs */}
    <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'moderno', label: '🌿 Moderno / Corto' },
    { id: 'naturaleza', label: '🕊️ Naturaleza / Sol' },
    { id: 'elegante', label: '👑 Elegante / Global' },
    { id: 'mistico', label: '✨ Místico / Cósmico' }
    ].map(tab => (
    <button
    key={tab.id}
    onClick={() => setUnisexVibe(tab.id as any)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
    unisexVibe === tab.id
    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
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
    <label htmlFor="unisexnamestool-field-1" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Neutro</label>
    <input id="unisexnamestool-field-1"
    type="text"
    value={unisexFirstName}
    onChange={(e) => setUnisexFirstName(e.target.value)}
    placeholder="Ej: Alex, René, Milan, Sasha"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-medium"
    />
    </div>
    <div>
    <label htmlFor="unisexnamestool-field-2" className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre Neutro</label>
    <input id="unisexnamestool-field-2"
    type="text"
    value={unisexSecondName}
    onChange={(e) => setUnisexSecondName(e.target.value)}
    placeholder="Ej: Morgan, Sol, Sky, Ariel"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-medium"
    />
    </div>
    </div>
    
    {/* Combined Result Card with Meaning & Audio */}
    {(() => {
    const u1 = unisexFirstName.trim() || 'Alex';
    const u2 = unisexSecondName.trim() || 'Morgan';
    const combinedUnisex = `${u1} ${u2}`;
    
    const unisexMeaningsDb: Record<string, { origin: string; meaning: string }> = {
    alex: { origin: 'Griego (Alexandros)', meaning: 'Defensor universal de la humanidad' },
    rene: { origin: 'Latín / Francés', meaning: 'Renacido con elegancia y nueva luz' },
    milan: { origin: 'Eslavo', meaning: 'Amado, gracioso y lleno de afecto' },
    sasha: { origin: 'Ruso / Griego', meaning: 'Protector noble y guardián valiente' },
    ariel: { origin: 'Hebreo', meaning: 'León de Dios y espíritu libre de los vientos' },
    morgan: { origin: 'Galés / Celta', meaning: 'Nacido del mar brillante y las olas' },
    river: { origin: 'Inglés', meaning: 'Río fluido, constante y lleno de vida' },
    sky: { origin: 'Nórdico', meaning: 'Cielo libre, infinito y sereno' },
    eden: { origin: 'Hebreo', meaning: 'Jardín de deleite, paz y armonía' },
    sol: { origin: 'Latín', meaning: 'Luz radiante, calidez y sol brillante' },
    noah: { origin: 'Hebreo', meaning: 'Paz, consuelo y descanso sereno' },
    robin: { origin: 'Germánico / Inglés', meaning: 'Brillante reputación y canto de primavera' },
    jordan: { origin: 'Hebreo', meaning: 'El que fluye hacia abajo con fuerza' },
    vega: { origin: 'Árabe / Español', meaning: 'Estrella brillante que desciende' },
    orion: { origin: 'Griego', meaning: 'Constelación del gran cazador estelar' },
    phoenix: { origin: 'Griego', meaning: 'Ave inmortal que renace victoriosa' }
    };
    
    const um1 = unisexMeaningsDb[u1.toLowerCase()] || { origin: 'Origen Internacional', meaning: 'Armonía, versatilidad y fortaleza' };
    const um2 = unisexMeaningsDb[u2.toLowerCase()] || { origin: 'Origen Universal', meaning: 'Luz, libertad y belleza' };
    
    return (
    <div className="gdn-tool-result bg-zinc-900/90 p-5 rounded-2xl border border-emerald-500/30 space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
    <div>
    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Combinación Unisex Resultante</span>
    <h3 className="text-xl font-bold text-white font-heading">{combinedUnisex}</h3>
    </div>
    <div className="flex items-center gap-2">
    <button
    onClick={() => handleCopyTrending(combinedUnisex)}
    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre
    </button>
    <button
    onClick={() => speakName(combinedUnisex)}
    className="p-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 rounded-xl transition-colors border border-white/10"
    title="Escuchar Pronunciación"
    >
    <Volume2 className="w-4 h-4" />
    </button>
    </div>
    </div>
    
    {/* Etymology Breakdown */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-emerald-300 font-bold">1. {u1} ({um1.origin})</span>
    <p className="text-zinc-400">"{um1.meaning}"</p>
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-emerald-300 font-bold">2. {u2} ({um2.origin})</span>
    <p className="text-zinc-400">"{um2.meaning}"</p>
    </div>
    </div>
    
    {/* Aesthetic Profile Decor Variations */}
    <div className="pt-2 space-y-2">
    <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Neutros (Haz clic para copiar):</span>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {[
    `✨ ${combinedUnisex} ✨`,
    `🍃 ${combinedUnisex} 🍃`,
    `☯️ ${combinedUnisex} ☯️`,
    `🤍 ${combinedUnisex} 🤍`,
    `🕊️ ${combinedUnisex} 🕊️`,
    `💫 ${combinedUnisex} 💫`
    ].map((dec, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(dec)}
    className="p-2.5 bg-zinc-950/90 hover:bg-emerald-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-emerald-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
    >
    <span className="truncate">{dec}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-300 shrink-0 ml-1.5" />
    </button>
    ))}
    </div>
    </div>
    </div>
    );
    })()}
    </div>
    
    {/* Ready-to-copy Curated Unisex Names Grid */}
    <div className="space-y-3 relative z-10">
    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
    <Flame className="w-4 h-4 text-amber-400" /> Nombres Unisex Populares y Estéticos en 2026 (Clic para Copiar)
    </span>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {[
    { label: 'Alex Morgan', val: 'Alex Morgan', desc: 'Defensor y Nacido del Mar' },
    { label: 'René Sol', val: 'René Sol', desc: 'Renacido y Luz Radiante' },
    { label: 'Milan Ariel', val: 'Milan Ariel', desc: 'Amado y León de Dios' },
    { label: 'Sasha Sky', val: 'Sasha Sky', desc: 'Protector y Cielo Libre' },
    { label: 'Eden River', val: 'Eden River', desc: 'Deleite y Río de Vida' },
    { label: 'Noah Taylor', val: 'Noah Taylor', desc: 'Paz y Artesano' },
    { label: 'Jordan Vega', val: 'Jordan Vega', desc: 'Fluido y Estrella' },
    { label: 'Luka Phoenix', val: 'Luka Phoenix', desc: 'Luminoso y Fénix' }
    ].map((item, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(item.val)}
    className="p-3.5 bg-zinc-900/90 hover:bg-emerald-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-emerald-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
    >
    <div className="flex items-center justify-between w-full">
    <span className="text-emerald-300 font-bold truncate">{item.label}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-300 shrink-0" />
    </div>
    <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
    </button>
    ))}
    </div>
    </div>
    </div>
  );
}
