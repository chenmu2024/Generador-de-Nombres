'use client';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function FrenchNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [frCategoryTab, setFrCategoryTab] = useState('Todos 🇫🇷');
  const [frCustomName, setFrCustomName] = useState('Amélie');
  const [frTitlePrefix, setFrTitlePrefix] = useState('Mademoiselle');
  const [frSelectedFrame, setFrSelectedFrame] = useState('⚜️ [Title] [Name] ⚜️');

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
    <div className="bg-[#121212] border border-sky-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🥐 Elegantes, Románticos y Aesthetic
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    <span>🥐</span> Generador de Nombres Franceses y Apodos Parisinos (con Audio)
    </h2>
    <p className="text-zinc-400 mt-1 text-sm">
    Explora nombres refinados con guía fonética, voz francesa nativa en audio y creador de títulos estilo Paris Aesthetic.
    </p>
    </div>
    </div>
    
    {/* Custom French Nickname / Title Creator */}
    <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
    <span>🏰</span> Creador de Nombre Estilo París & Alta Costura
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="space-y-4 md:col-span-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Título / Prefijo de Cortesía:</label>
    <select aria-label="Seleccionar opción" value={frTitlePrefix}
    onChange={(e) => setFrTitlePrefix(e.target.value)}
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm font-semibold"
    >
    {['Mademoiselle', 'Monsieur', 'Chérie', 'Fleur', 'Prince', 'Princesse', 'Madame'].map(p => (
    <option key={p} value={p}>{p}</option>
    ))}
    </select>
    </div>
    
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Francés:</label>
    <input
    type="text"
    value={frCustomName}
    onChange={(e) => setFrCustomName(e.target.value)}
    placeholder="Amélie, Juliette, Louis..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm font-bold"
    />
    </div>
    </div>
    
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Elegante / Flor de Lis:</label>
    <div className="flex flex-wrap gap-2">
    {[
    '⚜️ [Title] [Name] ⚜️',
    '🌹 [Title] [Name] • Chérie 🌹',
    '🥐 Fleur • [Name] ✨',
    '🍷 Monsieur [Name] 🍷',
    '💋 Mademoiselle [Name] 💋',
    '🎨 [Name] • Paris Aesthetic 🎨'
    ].map((frame) => (
    <button
    key={frame}
    onClick={() => setFrSelectedFrame(frame)}
    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
    frSelectedFrame === frame
    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
    : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
    }`}
    >
    {frame
    .replace('[Title]', frTitlePrefix)
    .replace('[Name]', frCustomName || 'Amélie')}
    </button>
    ))}
    </div>
    </div>
    </div>
    
    {/* Styled Output Preview */}
    <div className="bg-gradient-to-b from-sky-950/40 via-zinc-950 to-zinc-950 border border-sky-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
    <div>
    <div className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-2">Estilo Parisino Elegante</div>
    <div className="text-3xl font-extrabold text-sky-300 font-heading mb-2">
    {frCustomName || 'Amélie'}
    </div>
    <div className="text-base font-bold text-white font-heading mb-1 break-all">
    {frSelectedFrame
    .replace('[Title]', frTitlePrefix)
    .replace('[Name]', frCustomName || 'Amélie')}
    </div>
    <div className="text-xs text-zinc-400 italic">Listo para Instagram, TikTok o Discord</div>
    </div>
    
    <div className="w-full space-y-2 mt-4">
    <button
    onClick={() => handleCopyTrending(
    frSelectedFrame
    .replace('[Title]', frTitlePrefix)
    .replace('[Name]', frCustomName || 'Amélie')
    )}
    className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre Francés
    </button>
    <button
    onClick={() => speakFrench(frCustomName)}
    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-sky-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
    >
    <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
    </button>
    </div>
    </div>
    </div>
    </div>
    
    {/* Categorized Library */}
    <div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div>
    <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
    <span>📖</span> Directorio de Nombres Franceses Seleccionados
    </h3>
    <p className="text-xs text-zinc-400 mt-1">Filtra por estilo y reproduce la pronunciación en audio francés.</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
    {['Todos 🇫🇷', 'Femeninos 🌹', 'Masculinos ⚜️', 'Elegantes 💎', 'Románticos 💌', 'Clásicos 👑'].map(tab => (
    <button
    key={tab}
    onClick={() => setFrCategoryTab(tab)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
    frCategoryTab === tab
    ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
    : 'bg-zinc-800 text-zinc-400 hover:text-white'
    }`}
    >
    {tab}
    </button>
    ))}
    </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
    { name: 'Amélie', phonetics: 'Ah-meh-lee', mean: 'Trabajadora dulce, dedicada y de noble espíritu', tag: '🌹 Elegante', category: 'Femeninos 🌹' },
    { name: 'Juliette', phonetics: 'Zhoo-lee-ett', mean: 'Joven, llena de gracia eterna y poesía', tag: '💌 Romántico', category: 'Románticos 💌' },
    { name: 'Chloé', phonetics: 'Kloh-eh', mean: 'Brote verde, flor que florece en primavera', tag: '🦋 Fresco', category: 'Femeninos 🌹' },
    { name: 'Camille', phonetics: 'Kah-mee-yuh', mean: 'Noble, perfecta, refinada y dedicada', tag: '🎨 Sofisticado', category: 'Elegantes 💎' },
    { name: 'Éloïse', phonetics: 'Eh-loh-eez', mean: 'Ilustre, famosa en el combate y brillante', tag: '⚜️ Real', category: 'Elegantes 💎' },
    { name: 'Gabriel', phonetics: 'Gah-bree-ell', mean: 'Fuerza de Dios y mensajero protector', tag: '👑 Clásico', category: 'Masculinos ⚜️' },
    { name: 'Antoine', phonetics: 'Ahn-twahn', mean: 'Inestimable, valioso y digno de alabanza', tag: '🏛️ Noble', category: 'Masculinos ⚜️' },
    { name: 'Céleste', phonetics: 'Seh-lest', mean: 'Celestial, perteneciente al cielo divino', tag: '✨ Divino', category: 'Femeninos 🌹' },
    { name: 'Louis', phonetics: 'Loo-ee', mean: 'Famoso guerrero y rey de gran espíritu', tag: '👑 Real', category: 'Clásicos 👑' },
    { name: 'Mathilde', phonetics: 'Mah-teeld', mean: 'Guerrera poderosa y valiente en batalla', tag: '🛡️ Fuerte', category: 'Elegantes 💎' },
    { name: 'Fleur', phonetics: 'Flur', mean: 'Flor radiante, naturaleza y belleza sutil', tag: '🌸 Naturaleza', category: 'Románticos 💌' },
    { name: 'Étienne', phonetics: 'Eh-tyenn', mean: 'Coronado con victoria y corona de lauro', tag: '🌿 Clásico', category: 'Clásicos 👑' }
    ].filter(item => frCategoryTab === 'Todos 🇫🇷' || item.category === frCategoryTab).map((item, idx) => (
    <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-sky-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
    <div>
    <div className="flex items-center justify-between mb-2">
    <h3 className="font-bold text-white text-lg font-heading group-hover:text-sky-300 transition-colors">{item.name}</h3>
    <span className="text-[10px] bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded-full border border-sky-500/20">{item.tag}</span>
    </div>
    <div className="text-xs text-sky-300/80 italic mb-1">Pronunciación: {item.phonetics}</div>
    <p className="text-xs text-zinc-400 leading-relaxed">{item.mean}</p>
    </div>
    
    <div className="space-y-1.5 pt-2 border-t border-white/5">
    <div className="grid grid-cols-2 gap-1.5">
    <button
    onClick={() => speakFrench(item.name)}
    className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-sky-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Escuchar audio"
    >
    <Volume2 className="w-3 h-3" /> Audio
    </button>
    <button
    onClick={() => setFrCustomName(item.name)}
    className="py-1.5 bg-zinc-800 hover:bg-sky-500/20 text-sky-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Cargar en el creador"
    >
    <span>✨</span> Estilar
    </button>
    </div>
    <button
    onClick={() => handleCopyTrending(item.name)}
    className="w-full py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 rounded-xl text-xs font-bold border border-sky-500/20 transition-all flex items-center justify-center gap-1"
    >
    <Copy className="w-3 h-3" /> Copiar Nombre
    </button>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    </div>
  );
}
