'use client';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function BlackCatNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [blackCatCategoryTab, setBlackCatCategoryTab] = useState('Todos 🐈‍⬛');
  const [blackCatCustomName, setBlackCatCustomName] = useState('Salem');
  const [blackCatVibe, setBlackCatVibe] = useState('Místico 🔮');
  const [blackCatSelectedFrame, setBlackCatSelectedFrame] = useState('🐈‍⬛ [Name] • Salem 🔮');

  const speakBlackCatName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.pitch = 0.8;
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-purple-500/20 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-purple-950/20 via-[#121212] to-zinc-950">
      <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🐈‍⬛</span> Nombres Místicos y Oscuros para Gatos Negros
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Inspirados en la magia, las brujas, la noche y el cosmos.
      </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {[
      { name: 'Salem', mean: 'El gato negro mágico de Sabrina más icónico', icon: '🧹' },
      { name: 'Shadow', mean: 'Sombra sigilosa que camina de noche', icon: '🖤' },
      { name: 'Onyx', mean: 'Piedra preciosa negra llena de energía', icon: '💎' },
      { name: 'Eclipse', mean: 'La luna tapando el sol en la oscuridad', icon: '🌒' },
      { name: 'Merlín', mean: 'El mago más poderoso de la leyenda', icon: '🔮' },
      { name: 'Bagheera', mean: 'La pantera negra majestuosa de El Libro de la Selva', icon: '🐆' }
      ].map((item, idx) => (
      <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 rounded-2xl p-4 flex items-center justify-between gap-3 transition-all">
      <div>
      <div className="flex items-center gap-2">
      <span className="text-lg">{item.icon}</span>
      <h3 className="font-bold text-white text-base font-heading">{item.name}</h3>
      </div>
      <p className="text-xs text-zinc-400 mt-1">{item.mean}</p>
      </div>
      <button
      onClick={() => handleCopyTrending(item.name)}
      className="p-2.5 bg-zinc-800 hover:bg-purple-600/30 text-purple-300 rounded-xl border border-white/5 transition-all shrink-0"
      title="Copiar"
      >
      <Copy className="w-4 h-4" />
      </button>
      </div>
      ))}
      </div>
      
      <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-4">
      <span className="text-xs font-semibold text-purple-300 block mb-3">Símbolos Místicos y de Noche para Copiar:</span>
      <div className="flex flex-wrap gap-2">
      {['🐈‍⬛', '🌙', '🔮', '🦇', '🖤', '☠️', '🕸️', '🕷️', '🎃', '✨', '🪐', '🌌', '🪄'].map((sym, i) => (
      <button
      key={i}
      onClick={() => handleCopyTrending(sym)}
      className="w-10 h-10 bg-zinc-800 hover:bg-purple-600/30 rounded-xl text-lg flex items-center justify-center transition-all active:scale-95 border border-white/5 text-purple-300"
      >
      {sym}
      </button>
      ))}
      </div>
      </div>
      </div>
      </div>
      <div className="max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-purple-950/30 via-[#121212] to-zinc-950">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
      🐈‍⬛ Místicos, Magia, Anime & Panteritas
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🐈‍⬛</span> Generador y Creador de Nombres para Gatos Negros (con Audio)
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Crea placas góticas y nombres místicos con audio de llamado para tu panterita nocturna.
      </p>
      </div>
      </div>
      
      {/* Custom Gothic Collar & Social Username Creator */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
      <span>🔮</span> Creador de Placas Místicas y Marcos Mágicos para Gato Negro
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4 md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo / Vibe Místico:</label>
      <select aria-label="Seleccionar opción" value={blackCatVibe}
      onChange={(e) => setBlackCatVibe(e.target.value)}
      className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-purple-500 text-sm font-semibold"
      >
      {['Místico 🔮', 'Panterita 🐈‍⬛', 'Magia / Bruja 🪄', 'Anime / Ghibli 🎬', 'Noche / Cosmos 🌑', 'Elegante / Dark 🖤'].map(v => (
      <option key={v} value={v}>{v}</option>
      ))}
      </select>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre de la Panterita:</label>
      <input
      type="text"
      value={blackCatCustomName}
      onChange={(e) => setBlackCatCustomName(e.target.value)}
      placeholder="Salem, Sombra, Jiji..."
      className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 text-sm font-bold"
      />
      </div>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Místico y Símbolos Nocturnos:</label>
      <div className="flex flex-wrap gap-2">
      {[
      '🐈‍⬛ [Name] • Salem 🔮',
      '🌙 [Name] • Panterita 🖤',
      '🔮 Salem • [Name] ✨',
      '🦇 [Name] • Gothic Cat ☠️',
      '✨ [Name] • Eclipse 🌑',
      '🪄 Lord [Name] • Witch 🔮'
      ].map((frame) => (
      <button
      key={frame}
      onClick={() => setBlackCatSelectedFrame(frame)}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
      blackCatSelectedFrame === frame
      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm'
      : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
      }`}
      >
      {frame.replace('[Name]', blackCatCustomName || 'Salem')}
      </button>
      ))}
      </div>
      </div>
      </div>
      
      {/* Live Black Cat Tag Card Preview */}
      <div className="bg-gradient-to-b from-purple-950/50 via-zinc-950 to-zinc-950 border border-purple-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
      <div>
      <div className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación Mística 🔮</div>
      <div className="text-3xl font-extrabold text-purple-300 font-heading mb-2">
      {blackCatCustomName || 'Salem'}
      </div>
      <div className="text-base font-bold text-white font-heading mb-1 break-all">
      {blackCatSelectedFrame.replace('[Name]', blackCatCustomName || 'Salem')}
      </div>
      <div className="text-xs text-zinc-400 italic">Vibe: {blackCatVibe}</div>
      </div>
      
      <div className="w-full space-y-2 mt-4">
      <button
      onClick={() => handleCopyTrending(
      blackCatSelectedFrame.replace('[Name]', blackCatCustomName || 'Salem')
      )}
      className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20"
      >
      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
      </button>
      <button
      onClick={() => speakBlackCatName(blackCatCustomName)}
      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-purple-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
      >
      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado Místico (Audio)
      </button>
      </div>
      </div>
      </div>
      </div>
      
      {/* Categorized Black Cat Library */}
      <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
      <span>📖</span> Directorio de Nombres para Gatos Negros
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Filtra por temática mágica o de cultura pop y escucha su llamado.</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
      {['Todos 🐈‍⬛', 'Místicos / Magia 🔮', 'Cine / Anime 🎬', 'Noche / Cosmos 🌑', 'Elegantes / Dark 🖤', 'Divertidos / Tiernos 🍡'].map(tab => (
      <button
      key={tab}
      onClick={() => setBlackCatCategoryTab(tab)}
      className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
      blackCatCategoryTab === tab
      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
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
      { name: 'Salem', mean: 'El inolvidable gato parlante de Sabrina. Sarcástico, sabio e icónico.', symbol: '🔮 Bruja #1', category: 'Místicos / Magia 🔮' },
      { name: 'Jiji', mean: 'Gato negro de Kiki (Studio Ghibli). Leal, tierno y con gran voz interior.', symbol: '🎬 Ghibli', category: 'Cine / Anime 🎬' },
      { name: 'Kuro', mean: 'Significa "Negro" en japonés. Muy usado en animes como Ao no Exorcist.', symbol: '⚡ Anime', category: 'Cine / Anime 🎬' },
      { name: 'Bagheera', mean: 'La sabia pantera negra de El Libro de la Selva. Ágil, valiente y noble.', symbol: '🐆 Pantera', category: 'Cine / Anime 🎬' },
      { name: 'Sombra', mean: 'Perfecto para gatitos sigilosos que caminan en la penumbra de la casa.', symbol: '🌑 Sigilo', category: 'Noche / Cosmos 🌑' },
      { name: 'Eclipse', mean: 'Fenómeno cósmico donde la luna oculta al sol. Mágico y fascinante.', symbol: '🌑 Cosmos', category: 'Noche / Cosmos 🌑' },
      { name: 'Onyx', mean: 'Inspirado en la valiosa piedra preciosa de tono negro profundo.', symbol: '💎 Elegante', category: 'Elegantes / Dark 🖤' },
      { name: 'Merlín', mean: 'El mago más poderoso de las leyendas. Para michis misteriosos e inteligentes.', symbol: '🪄 Mago', category: 'Místicos / Magia 🔮' },
      { name: 'Frijolito', mean: 'Súper divertido e ideal para gatitos pequeños de pelaje oscuro.', symbol: '🍡 Tierno', category: 'Divertidos / Tiernos 🍡' },
      { name: 'Panterita', mean: 'Cariñoso homenaje al rey de la selva en formato miniatura.', symbol: '🐈‍⬛ Clásico', category: 'Divertidos / Tiernos 🍡' },
      { name: 'Velvet', mean: 'Significa "terciopelo". Para minipanteras de pelaje súper suave y brillante.', symbol: '🖤 Terciopelo', category: 'Elegantes / Dark 🖤' },
      { name: 'Hécate', mean: 'Diosa griega de la magia, las encrucijadas, la luna y la noche.', symbol: '🔮 Deidad', category: 'Místicos / Magia 🔮' }
      ].filter(item => blackCatCategoryTab === 'Todos 🐈‍⬛' || item.category === blackCatCategoryTab).map((item, idx) => (
      <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
      <div>
      <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-white text-lg font-heading group-hover:text-purple-300 transition-colors">{item.name}</h3>
      <span className="text-[10px] bg-purple-500/10 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/20">{item.symbol}</span>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
      </div>
      
      <div className="space-y-1.5 pt-2 border-t border-white/5">
      <div className="grid grid-cols-2 gap-1.5">
      <button
      onClick={() => speakBlackCatName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-purple-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Escuchar audio"
      >
      <Volume2 className="w-3 h-3" /> Audio
      </button>
      <button
      onClick={() => setBlackCatCustomName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-purple-500/20 text-purple-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Cargar en el creador"
      >
      <span>✨</span> Estilar
      </button>
      </div>
      <button
      onClick={() => handleCopyTrending(item.name)}
      className="w-full py-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 rounded-xl text-xs font-bold border border-purple-500/20 transition-all flex items-center justify-center gap-1"
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
