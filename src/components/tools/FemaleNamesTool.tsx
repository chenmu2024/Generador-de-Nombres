'use client';

import { useState } from 'react';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';

export default function FemaleNamesTool({
  handleCopyTrending,
  currentPath,
}: {
  handleCopyTrending: (value: string) => void;
  currentPath: string;
}) {
  const [femaleFirstName, setFemaleFirstName] = useState('Sofía');
  const [femaleSecondName, setFemaleSecondName] = useState('Valentina');
  const [femaleVibe, setFemaleVibe] = useState<'elegante' | 'corto' | 'biblico' | 'moderno' | 'internacional'>('elegante');

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
    <div className="gdn-tool-shell bg-gradient-to-br from-pink-950/40 via-[#121212] to-amber-950/30 border border-pink-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
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
    ? 'Descubre nombres de niñas raros pero hermosos, de 3 y 4 letras, combina dos nombres dulces, revisa su etimología y escucha la pronunciación en voz real.'
    : 'Combina dos nombres bonitos, explora su origen histórico y significado profundo, escucha la pronunciación en audio y genera versiones decoradas para perfiles.'}
    </p>
    </div>
    </div>
    
    {/* Interactive Compound Name Builder & Meaning Explorer */}
    <div className="bg-zinc-950/90 border border-pink-500/20 rounded-2xl p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-pink-400" /> Explorador por Estilo & Combinación Compuesta
    </span>
    
    {/* Vibe Tabs */}
    <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'elegante', label: '👑 Elegante' },
    { id: 'corto', label: '🌿 Corto (3-4 Letras)' },
    { id: 'biblico', label: '🕊️ Bíblico / Raro' },
    { id: 'internacional', label: '✨ Chic / Global' }
    ].map(tab => (
    <button
    key={tab.id}
    onClick={() => setFemaleVibe(tab.id as any)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre</label>
    <input
    type="text"
    value={femaleFirstName}
    onChange={(e) => setFemaleFirstName(e.target.value)}
    placeholder="Ej: Zoe, Mia, Aitana, Iris"
    className="gdn-tool-input w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
    />
    </div>
    <div>
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre (Compuesto)</label>
    <input
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
    
    const meaningsDatabase: Record<string, { origin: string; meaning: string }> = {
    sofia: { origin: 'Griego', meaning: 'Sabiduría pura y divina' },
    valentina: { origin: 'Latín', meaning: 'Valiente, fuerte y saludable' },
    emma: { origin: 'Germánico', meaning: 'Universal, poderosa y completa' },
    isabella: { origin: 'Hebreo', meaning: 'Consagrada a Dios y llena de gracia' },
    aitana: { origin: 'Vasco / Ibérico', meaning: 'Fuerza de la montaña o gloria' },
    mia: { origin: 'Escandinavo / Hebreo', meaning: 'La elegida, amada por Dios (3 letras)' },
    zoe: { origin: 'Griego', meaning: 'Vida, vitalidad y energía eterna (3 letras)' },
    iris: { origin: 'Griego', meaning: 'Diosa del arcoíris y mensajera de luz (4 letras)' },
    lia: { origin: 'Hebreo', meaning: 'Portadora de buenas noticias y leal (3 letras)' },
    chloe: { origin: 'Griego', meaning: 'Brote verde floreciente y juventud (5 letras)' },
    lyra: { origin: 'Griego', meaning: 'Constelación celestial de la lira (4 letras)' },
    ona: { origin: 'Catalán', meaning: 'Ola de mar, gracia y serenidad (3 letras)' },
    nayra: { origin: 'Guanche', meaning: 'Guerrera de ojos grandes y resplandecientes' },
    gala: { origin: 'Latín', meaning: 'Hermosa, festiva y elegante (4 letras)' },
    yara: { origin: 'Tupí-Guaraní', meaning: 'Señora de las aguas y reina de la naturaleza (4 letras)' },
    aria: { origin: 'Italiano', meaning: 'Melodía noble y aire puro (4 letras)' },
    alana: { origin: 'Celta', meaning: 'Armoniosa, noble y preciosa (5 letras)' },
    lucia: { origin: 'Latín', meaning: 'Nacida en la primera luz de la mañana' },
    elena: { origin: 'Griego', meaning: 'Resplandeciente como la luz del sol' },
    camila: { origin: 'Latín', meaning: 'Aquella que ofrece sacrificios y nobleza' },
    victoria: { origin: 'Latín', meaning: 'Triunfadora y victoriosa en la vida' }
    };
    
    const m1 = meaningsDatabase[p1.toLowerCase()] || { origin: 'Origen Antiguo', meaning: 'Luz, belleza y fortaleza' };
    const m2 = meaningsDatabase[p2.toLowerCase()] || { origin: 'Origen Noble', meaning: 'Gracia, nobleza y virtud' };
    
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
    className="px-3.5 py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
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
    <p className="text-zinc-400">"{m1.meaning}"</p>
    </div>
    <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
    <span className="text-pink-300 font-bold">2. {p2} ({m2.origin})</span>
    <p className="text-zinc-400">"{m2.meaning}"</p>
    </div>
    </div>
    
    {/* Aesthetic Profile Decor Variations */}
    <div className="pt-2 space-y-2">
    <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados con Símbolos Aesthetic (Haz clic para copiar):</span>
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
    <Flame className="w-4 h-4 text-amber-400" /> {currentPath === '/nombres-de-nina' ? 'Nombres de Niña No Comunes y Cortos Destacados' : 'Nombres de Mujer y Niña Populares en 2026'} (Clic para Copiar)
    </span>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {(currentPath === '/nombres-de-nina' ? [
    { label: 'Zoe Valentina', val: 'Zoe Valentina', desc: '3 Letras | Vida y Fuerza' },
    { label: 'Mia Aitana', val: 'Mia Aitana', desc: '3 Letras | Amada y Montaña' },
    { label: 'Iris Lucía', val: 'Iris Lucía', desc: '4 Letras | Arcoíris y Luz' },
    { label: 'Lia Isabel', val: 'Lia Isabel', desc: '3 Letras | Leal y Divina' },
    { label: 'Chloe Marcela', val: 'Chloe Marcela', desc: '5 Letras | Floreciente' },
    { label: 'Lyra Elena', val: 'Lyra Elena', desc: '4 Letras | Constelación' },
    { label: 'Ona Sofía', val: 'Ona Sofía', desc: '3 Letras | Ola de Mar' },
    { label: 'Nayra Victoria', val: 'Nayra Victoria', desc: '5 Letras | Ojos Brillantes' }
    ] : [
    { label: 'Sofía Valentina', val: 'Sofía Valentina', desc: 'Sabiduría y Fuerza' },
    { label: 'Emma Isabella', val: 'Emma Isabella', desc: 'Poderosa y Divina' },
    { label: 'Aitana Lucía', val: 'Aitana Lucía', desc: 'Luz de la Montaña' },
    { label: 'Mia Elena', val: 'Mia Elena', desc: 'Amada y Resplandeciente' },
    { label: 'Camila Victoria', val: 'Camila Victoria', desc: 'Nobleza Victoriosa' },
    { label: 'Zoe Regina', val: 'Zoe Regina', desc: 'Vida y Reina' },
    { label: 'Valeria Nicole', val: 'Valeria Nicole', desc: 'Valiente y Victoriosa' },
    { label: 'Chloe Marcela', val: 'Chloe Marcela', desc: 'Floreciente y Fuerte' }
    ]).map((item, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(item.val)}
    className="p-3.5 bg-zinc-900/90 hover:bg-pink-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-pink-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
    >
    <div className="flex items-center justify-between w-full">
    <span className="text-pink-300 font-bold truncate">{item.label}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-300 shrink-0" />
    </div>
    <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
    </button>
    ))}
    </div>
    </div>
    </div>
  );
}
