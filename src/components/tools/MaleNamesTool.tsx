'use client';

import { useState } from 'react';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';

export default function MaleNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [maleFirstName, setMaleFirstName] = useState('Mateo');
  const [maleSecondName, setMaleSecondName] = useState('Gael');
  const [maleVibe, setMaleVibe] = useState<'moderno' | 'raro' | 'corto' | 'fuerte' | 'biblico'>('moderno');

  const speakName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.pitch = 1.2;
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="gdn-tool-shell bg-gradient-to-br from-blue-950/40 via-[#121212] to-cyan-950/30 border border-blue-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
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
    <div className="bg-zinc-950/90 border border-blue-500/20 rounded-2xl p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-blue-400" /> Explorador por Estilo Masculino & Combinación
    </span>
    
    {/* Male Vibe Tabs */}
    <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'moderno', label: '🚀 Moderno / Chic' },
    { id: 'raro', label: '👑 Raro & Fuerte' },
    { id: 'corto', label: '⚡ Corto (3-4 Letras)' },
    { id: 'biblico', label: '🛡️ Bíblico / Tradicional' }
    ].map(tab => (
    <button
    key={tab.id}
    onClick={() => setMaleVibe(tab.id as any)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Masculino</label>
    <input
    type="text"
    value={maleFirstName}
    onChange={(e) => setMaleFirstName(e.target.value)}
    placeholder="Ej: Mateo, Leo, Liam, Enzo"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
    />
    </div>
    <div>
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre Masculino</label>
    <input
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
    
    const maleMeaningsDb: Record<string, { origin: string; meaning: string }> = {
    mateo: { origin: 'Hebreo (Mattityahu)', meaning: 'Regalo de Dios y bendición divina' },
    gael: { origin: 'Celta', meaning: 'Hombre generoso, protector y magnánimo' },
    leo: { origin: 'Latín (Leo)', meaning: 'Fuerte, valiente y fiero como un león (3 letras)' },
    liam: { origin: 'Irlandés / Germánico', meaning: 'Protector resuelto y guerrero de voluntad firme' },
    enzo: { origin: 'Germánico / Italiano', meaning: 'Príncipe o amo de su hogar' },
    oliver: { origin: 'Latín (Olivarius)', meaning: 'Olivo de la paz y la dignidad' },
    thiago: { origin: 'Hebreo / Portugués', meaning: 'Sostenido por Dios o que va tras sus huellas' },
    milan: { origin: 'Eslavo', meaning: 'Amado, gracioso y lleno de bondad' },
    bastian: { origin: 'Griego (Sebastós)', meaning: 'Venerable, augusto y digno de respeto' },
    gabriel: { origin: 'Hebreo', meaning: 'Fuerza de Dios y héroe divino' },
    lucas: { origin: 'Griego / Latín', meaning: 'El que resplandece con luz propia' },
    ian: { origin: 'Escocés / Hebreo', meaning: 'Dios es misericordioso (3 letras)' },
    dante: { origin: 'Latín', meaning: 'Resistente, constante y duradero' },
    ezra: { origin: 'Hebreo', meaning: 'Ayuda divina y fuerza sanadora' },
    kai: { origin: 'Hawaiano / Japonés', meaning: 'Océano o mar libre (3 letras)' },
    alexander: { origin: 'Griego', meaning: 'Defensor de los hombres y protector' }
    };
    
    const mean1 = maleMeaningsDb[m1Name.toLowerCase()] || { origin: 'Origen Antiguo', meaning: 'Fortaleza, honor y valentía' };
    const mean2 = maleMeaningsDb[m2Name.toLowerCase()] || { origin: 'Origen Ilustre', meaning: 'Nobleza, liderazgo y sabiduría' };
    
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
    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
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
    <p className="text-zinc-400">"{mean1.meaning}"</p>
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-blue-300 font-bold">2. {m2Name} ({mean2.origin})</span>
    <p className="text-zinc-400">"{mean2.meaning}"</p>
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
    <Flame className="w-4 h-4 text-amber-400" /> Nombres de Niños Populares y Raros en 2026 (Clic para Copiar)
    </span>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {[
    { label: 'Mateo Gael', val: 'Mateo Gael', desc: 'Regalo y Protector' },
    { label: 'Leo Alexander', val: 'Leo Alexander', desc: 'León Defensor' },
    { label: 'Liam Gabriel', val: 'Liam Gabriel', desc: 'Protector y Fuerza' },
    { label: 'Enzo Thiago', val: 'Enzo Thiago', desc: 'Príncipe Sostenido' },
    { label: 'Oliver Mateo', val: 'Oliver Mateo', desc: 'Olivo y Bendición' },
    { label: 'Lucas David', val: 'Lucas David', desc: 'Luz y Amado' },
    { label: 'Ian Bastian', val: 'Ian Bastian', desc: 'Misericordioso y Venerable' },
    { label: 'Milan Dante', val: 'Milan Dante', desc: 'Amado y Duradero' }
    ].map((item, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(item.val)}
    className="p-3.5 bg-zinc-900/90 hover:bg-blue-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-blue-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
    >
    <div className="flex items-center justify-between w-full">
    <span className="text-blue-300 font-bold truncate">{item.label}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-300 shrink-0" />
    </div>
    <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
    </button>
    ))}
    </div>
    </div>
    </div>
  );
}
