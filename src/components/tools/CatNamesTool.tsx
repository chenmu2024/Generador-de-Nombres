'use client';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function CatNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [catCategoryTab, setCatCategoryTab] = useState('Todos 🐱');
  const [catCustomName, setCatCustomName] = useState('Mochi');
  const [catBreedType, setCatBreedType] = useState('Gato Naranjita 🍊');
  const [catSelectedFrame, setCatSelectedFrame] = useState('🐾 [Name] • Michi 🐾');

  const speakCatName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-amber-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-amber-950/20 via-[#121212] to-zinc-950">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
      🐱 Michis, Gatitos & Placas Personalizadas
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🐈</span> Creador y Generador de Nombres para Gatos (con Audio)
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Encuentra el nombre ideal por color de pelaje o personalidad, simula la llamada felina y diseña su placa o usuario.
      </p>
      </div>
      </div>
      
      {/* Custom Cat Collar & Social Username Creator */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
      <span>🐟</span> Creador de Placas y Nombres Estilizados para Michi
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4 md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Pelaje / Estilo del Gato:</label>
      <select aria-label="Seleccionar opción" value={catBreedType}
      onChange={(e) => setCatBreedType(e.target.value)}
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm font-semibold"
      >
      {['Gato Naranjita 🍊', 'Panterita Negra 🐈‍⬛', 'Gato Blanco / Nieve ❄️', 'Siamés / Elegante 👑', 'Gato Atigrado 🐯', 'Mestizo / Bebé 🐱'].map(b => (
      <option key={b} value={b}>{b}</option>
      ))}
      </select>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre del Gato / Gatita:</label>
      <input
      type="text"
      value={catCustomName}
      onChange={(e) => setCatCustomName(e.target.value)}
      placeholder="Mochi, Simba, Felix..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm font-bold"
      />
      </div>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Diseño para Collar o Redes (Instagram / TikTok):</label>
      <div className="flex flex-wrap gap-2">
      {[
      '🐾 [Name] • Michi 🐾',
      '🐟 [Name] • [Breed] 🐟',
      '👑 Sir [Name] • Royalty 👑',
      '🍊 [Name] • Mochi 🍡',
      '✨ [Name] • Instagram Michi 📸',
      '🧶 [Name] • Kitten 🐾'
      ].map((frame) => (
      <button
      key={frame}
      onClick={() => setCatSelectedFrame(frame)}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
      catSelectedFrame === frame
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
      : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
      }`}
      >
      {frame
      .replace('[Breed]', catBreedType.split(' ')[0])
      .replace('[Name]', catCustomName || 'Mochi')}
      </button>
      ))}
      </div>
      </div>
      </div>
      
      {/* Live Cat Collar Tag Preview */}
      <div className="bg-gradient-to-b from-amber-950/40 via-zinc-950 to-zinc-950 border border-amber-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
      <div>
      <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación Felina 🏷️</div>
      <div className="text-3xl font-extrabold text-amber-300 font-heading mb-2">
      {catCustomName || 'Mochi'}
      </div>
      <div className="text-base font-bold text-white font-heading mb-1 break-all">
      {catSelectedFrame
      .replace('[Breed]', catBreedType.split(' ')[0])
      .replace('[Name]', catCustomName || 'Mochi')}
      </div>
      <div className="text-xs text-zinc-400 italic">Estilo: {catBreedType}</div>
      </div>
      
      <div className="w-full space-y-2 mt-4">
      <button
      onClick={() => handleCopyTrending(
      catSelectedFrame
      .replace('[Breed]', catBreedType.split(' ')[0])
      .replace('[Name]', catCustomName || 'Mochi')
      )}
      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
      >
      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
      </button>
      <button
      onClick={() => speakCatName(catCustomName)}
      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
      >
      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
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
      <span>📖</span> Colección de Nombres para Gatos y Gatitas
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Explora nombres seleccionados con significado y voz de llamado.</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
      {['Todos 🐱', 'Machos ♂️', 'Hembras ♀️', 'Graciosos / Comida 🍡', 'Gatos Naranjas 🍊', 'Elegantes / Reales 👑', 'Cortos (2 Sílabas) ⚡'].map(tab => (
      <button
      key={tab}
      onClick={() => setCatCategoryTab(tab)}
      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
      catCategoryTab === tab
      ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
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
      { name: 'Mochi', mean: 'Pastelito japonés dulce y suave. El nombre favorito para gatos tiernos.', symbol: '🍡 Comida #1', category: 'Graciosos / Comida 🍡' },
      { name: 'Simba', mean: 'Inspirado en El Rey León. Significa "león valiente" y lleno de liderazgo.', symbol: '🦁 Rey León', category: 'Machos ♂️' },
      { name: 'Luna', mean: 'Nombre #1 para gatitas. Evoca el misterio de la noche y ojos brillantes.', symbol: '🌙 Noche', category: 'Hembras ♀️' },
      { name: 'Nacho', mean: 'Divertido, cálido y perfecto para michis naranjas o crujientes.', symbol: '🍊 Naranjita', category: 'Gatos Naranjas 🍊' },
      { name: 'Oliver', mean: 'Inspirado en Oliver y su Pandilla. Elegante, curioso y juguetón.', symbol: '👑 Elegante', category: 'Elegantes / Reales 👑' },
      { name: 'Mimi', mean: 'Muy corto de dos sílabas, perfecto para la capacidad auditiva felina.', symbol: '⚡ Corto (i)', category: 'Cortos (2 Sílabas) ⚡' },
      { name: 'Garfield', mean: 'El felino naranja amante de la lasaña más famoso del mundo.', symbol: '🍊 Famoso', category: 'Gatos Naranjas 🍊' },
      { name: 'Salem', mean: 'Gato negro místico e inteligente con personalidad única.', symbol: '🐈‍⬛ Místico', category: 'Machos ♂️' },
      { name: 'Kira', mean: 'Significa "brillo solar". Nombre rápido y claro para adiestramiento.', symbol: '✨ Brillo', category: 'Hembras ♀️' },
      { name: 'Sushi', mean: 'Adictivo, simpático e ideal para gatitos ágiles y traviesos.', symbol: '🍣 Divertido', category: 'Graciosos / Comida 🍡' },
      { name: 'Duque', mean: 'Para gatos aristocráticos que caminan como reyes de la casa.', symbol: '👑 Aristócrata', category: 'Elegantes / Reales 👑' },
      { name: 'Leo', mean: 'Súper corto (2 sílabas) y con gran resonancia para la llamada.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' }
      ].filter(item => catCategoryTab === 'Todos 🐱' || item.category === catCategoryTab).map((item, idx) => (
      <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-amber-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
      <div>
      <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-white text-lg font-heading group-hover:text-amber-300 transition-colors">{item.name}</h3>
      <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/20">{item.symbol}</span>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
      </div>
      
      <div className="space-y-1.5 pt-2 border-t border-white/5">
      <div className="grid grid-cols-2 gap-1.5">
      <button
      onClick={() => speakCatName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-amber-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Escuchar audio"
      >
      <Volume2 className="w-3 h-3" /> Audio
      </button>
      <button
      onClick={() => setCatCustomName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-amber-500/20 text-amber-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Cargar en el creador"
      >
      <span>✨</span> Estilar
      </button>
      </div>
      <button
      onClick={() => handleCopyTrending(item.name)}
      className="w-full py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl text-xs font-bold border border-amber-500/20 transition-all flex items-center justify-center gap-1"
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
    </>
  );
}
