'use client';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function MaleCatNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [maleCatCategoryTab, setMaleCatCategoryTab] = useState('Todos 🐱');
  const [maleCatCustomName, setMaleCatCustomName] = useState('Simba');
  const [maleCatPersonality, setMaleCatPersonality] = useState('Épico / Rey 👑');
  const [maleCatSelectedFrame, setMaleCatSelectedFrame] = useState('🦁 [Name] • King 👑');

  const speakMaleCatName = (text: string) => {
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
      <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-blue-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-blue-950/30 via-[#121212] to-zinc-950">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
      🦁 Reyes, Épicos, Cortos & Placas
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🐱</span> Generador y Creador de Nombres para Gatos Machos (con Audio)
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Diseña la placa de tu gato macho, simula el llamado felino por voz y explora el directorio filtrado.
      </p>
      </div>
      </div>
      
      {/* Custom Male Cat Collar & Social Username Creator */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
      <span>🏷️</span> Creador de Placas y Marcos de Honor para Gato Macho
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4 md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Personalidad / Estilo:</label>
      <select aria-label="Seleccionar opción" value={maleCatPersonality}
      onChange={(e) = className="gdn-tool-input"> setMaleCatPersonality(e.target.value)}
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500 text-sm font-semibold"
      >
      {['Épico / Rey 👑', 'Juguetón / Travieso ⚡', 'Súper Corto ⚡', 'Cariñoso / Mochi 🍡', 'Mitología / Héroe 🏛️', 'Elegante / Sir 🎩'].map(p => (
      <option key={p} value={p}>{p}</option>
      ))}
      </select>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre del Gatito Macho:</label>
      <input
      type="text"
      value={maleCatCustomName}
      onChange={(e) = className="gdn-tool-input"> setMaleCatCustomName(e.target.value)}
      placeholder="Simba, Thor, Leo..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 text-sm font-bold"
      />
      </div>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Marcos con Símbolos Masculinos para Collar o Redes:</label>
      <div className="flex flex-wrap gap-2">
      {[
      '🦁 [Name] • King 👑',
      '⚡ [Name] • Macho 🐾',
      '🛡️ Sir [Name] • Hero ⚔️',
      '🍊 [Name] • Mochi 🍡',
      '✨ [Name] • TikTok Cat 📸',
      '🏆 [Name] • Champion 🏅'
      ].map((frame) => (
      <button
      key={frame}
      onClick={() => setMaleCatSelectedFrame(frame)}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
      maleCatSelectedFrame === frame
      ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm'
      : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
      }`}
      >
      {frame.replace('[Name]', maleCatCustomName || 'Simba')}
      </button>
      ))}
      </div>
      </div>
      </div>
      
      {/* Live Male Cat Badge Preview */}
      <div className="bg-gradient-to-b from-blue-950/50 via-zinc-950 to-zinc-950 border border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
      <div>
      <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Placa Oficial de Gato Macho 🏷️</div>
      <div className="text-3xl font-extrabold text-blue-300 font-heading mb-2">
      {maleCatCustomName || 'Simba'}
      </div>
      <div className="text-base font-bold text-white font-heading mb-1 break-all">
      {maleCatSelectedFrame.replace('[Name]', maleCatCustomName || 'Simba')}
      </div>
      <div className="text-xs text-zinc-400 italic">Estilo: {maleCatPersonality}</div>
      </div>
      
      <div className="w-full space-y-2 mt-4">
      <button
      onClick={() => handleCopyTrending(
      maleCatSelectedFrame.replace('[Name]', maleCatCustomName || 'Simba')
      )}
      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
      >
      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
      </button>
      <button
      onClick={() => speakMaleCatName(maleCatCustomName)}
      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-blue-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
      >
      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
      </button>
      </div>
      </div>
      </div>
      </div>
      
      {/* Categorized Male Cat Library */}
      <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
      <span>📖</span> Directorio Seleccionado de Nombres para Gatos Machos
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Explora significados y escucha la pronunciación oficial de cada nombre.</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
      {['Todos 🐱', 'Épicos / Reyes 👑', 'Cortos (2 Sílabas) ⚡', 'Comida / Tiernos 🍡', 'Mitología / Héroes 🏛️', 'Famosos / Anime 🎬'].map(tab => (
      <button
      key={tab}
      onClick={() => setMaleCatCategoryTab(tab)}
      className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
      maleCatCategoryTab === tab
      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
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
      { name: 'Simba', mean: 'El rey de la selva. Significa "león valiente" y con gran presencia.', symbol: '🦁 Rey #1', category: 'Épicos / Reyes 👑' },
      { name: 'Thor', mean: 'Dios nórdico del trueno. Perfecto para gatos fuertes y enérgicos.', symbol: '⚡ Trueno', category: 'Mitología / Héroes 🏛️' },
      { name: 'Leo', mean: 'Súper corto (2 sílabas) y con resonancia aguda idónea para felinos.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' },
      { name: 'Mochi', mean: 'Pastelito japonés suave y dulce. El preferido para gatos cariñosos.', symbol: '🍡 Dulce', category: 'Comida / Tiernos 🍡' },
      { name: 'Loki', mean: 'Dios nórdico de las travesuras. Excelente para gatos inquietos.', symbol: '⚡ Travieso', category: 'Mitología / Héroes 🏛️' },
      { name: 'Zeus', mean: 'Rey del Olimpo y señor de los cielos. Imponente y dominante.', symbol: '🏛️ Olimpo', category: 'Mitología / Héroes 🏛️' },
      { name: 'Nacho', mean: 'Cálido, crujiente y divertido, perfecto para michis naranjas.', symbol: '🍊 Naranjita', category: 'Comida / Tiernos 🍡' },
      { name: 'Max', mean: 'Corto, directo y súper fácil de aprender para el adiestramiento.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' },
      { name: 'Oreo', mean: 'Inspirado en la galleta blanca y negra. Un clásico entrañable.', symbol: '🍡 Galleta', category: 'Comida / Tiernos 🍡' },
      { name: 'Oliver', mean: 'Inspirado en Oliver y su Pandilla de Disney. Curioso y noble.', symbol: '🎬 Disney', category: 'Famosos / Anime 🎬' },
      { name: 'Garfield', mean: 'El icónico michi amante de la lasaña y las sestas mañaneras.', symbol: '🎬 Famoso', category: 'Famosos / Anime 🎬' },
      { name: 'Apolo', mean: 'Dios del sol, la luz y las artes. Para gatos hermosos y dorados.', symbol: '🏛️ Sol', category: 'Mitología / Héroes 🏛️' }
      ].filter(item => maleCatCategoryTab === 'Todos 🐱' || item.category === maleCatCategoryTab).map((item, idx) => (
      <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
      <div>
      <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-white text-lg font-heading group-hover:text-blue-300 transition-colors">{item.name}</h3>
      <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/20">{item.symbol}</span>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
      </div>
      
      <div className="space-y-1.5 pt-2 border-t border-white/5">
      <div className="grid grid-cols-2 gap-1.5">
      <button
      onClick={() => speakMaleCatName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-blue-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Escuchar audio"
      >
      <Volume2 className="w-3 h-3" /> Audio
      </button>
      <button
      onClick={() => setMaleCatCustomName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-blue-500/20 text-blue-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Cargar en el creador"
      >
      <span>✨</span> Estilar
      </button>
      </div>
      <button
      onClick={() => handleCopyTrending(item.name)}
      className="w-full py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-xl text-xs font-bold border border-blue-500/20 transition-all flex items-center justify-center gap-1"
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
