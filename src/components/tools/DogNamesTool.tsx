'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';
import PetNameLibrary from './PetNameLibrary';

export default function DogNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [dogCategoryTab, setDogCategoryTab] = useState('Todas 🐾');
  const [dogCustomName, setDogCustomName] = useState('Luna');
  const [dogPersonality, setDogPersonality] = useState('Tierna 💖');
  const [dogSelectedFrame, setDogSelectedFrame] = useState('🌸 [Name] 🌸');

  const speakDogName = (text: string) => readNameAloud(text, 'es-ES');
  const [dogLetter, setDogLetter] = useState('A');

  return (
    <>
      <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-pink-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
      🐾 Mascotas, Cachorras & Placas Estilizadas
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🐶</span> Creador y Buscador de Nombres para Perritas (con Audio)
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Explora nombres por estilo, escucha una lectura sintetizada y crea una placa opcional.
      </p>
      </div>
      </div>
      
      {/* Custom Dog Tag & Social Username Creator */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
      <span>🎀</span> Creador de Placas y Nombres Estilizados para Perrita
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4 md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label htmlFor="dognamestool-field-1" className="text-xs font-semibold text-zinc-400 block mb-2">Estilo / Personalidad de la Perrita:</label>
      <select id="dognamestool-field-1" value={dogPersonality}
      onChange={(e) => setDogPersonality(e.target.value)}
      className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-semibold"
      >
      {['Pequeña 🎀', 'Alegre 🎾', 'Princesa 👑', 'Guerrera ⚡', 'Dulce 🍯', 'Elegante 💎'].map(p => (
      <option key={p} value={p}>{p}</option>
      ))}
      </select>
      </div>
      
      <div>
      <label htmlFor="dognamestool-field-2" className="text-xs font-semibold text-zinc-400 block mb-2">Nombre de la Perrita:</label>
      <input id="dognamestool-field-2"
      type="text"
      value={dogCustomName}
      onChange={(e) => setDogCustomName(e.target.value)}
      placeholder="Luna, Kira, Chloe..."
      className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-bold"
      />
      </div>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-2">Formato opcional para placa o ficha:</label>
      <div className="flex flex-wrap gap-2">
      {[
      '🌸 [Name] 🌸',
      '🎀 [Name] • 🐾 🎀',
      '👑 Princesa [Name] 👑',
      '✨ [Name] • Puppy ✨',
      '💖 [Name] • Love 🐾 💖',
      '🦴 [Name] • Pet Tag 🏷️'
      ].map((frame) => (
      <button
      key={frame}
      onClick={() => setDogSelectedFrame(frame)}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
      dogSelectedFrame === frame
      ? 'bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-sm'
      : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
      }`}
      >
      {frame.replace('[Name]', dogCustomName || 'Luna')}
      </button>
      ))}
      </div>
      </div>
      </div>
      
      {/* Live Dog Tag Card Preview */}
      <div className="gdn-tool-result bg-gradient-to-b from-pink-950/40 via-zinc-950 to-zinc-950 border border-pink-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
      <div>
      <div className="text-xs text-pink-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación 🏷️</div>
      <div className="text-3xl font-extrabold text-pink-300 font-heading mb-2">
      {dogCustomName || 'Luna'}
      </div>
      <div className="text-base font-bold text-white font-heading mb-1 break-all">
      {dogSelectedFrame.replace('[Name]', dogCustomName || 'Luna')}
      </div>
      <div className="text-xs text-zinc-400 italic">Estilo: {dogPersonality}</div>
      </div>
      
      <div className="w-full space-y-2 mt-4">
      <button
      onClick={() => handleCopyTrending(
      dogSelectedFrame.replace('[Name]', dogCustomName || 'Luna')
      )}
      className="w-full py-2.5 bg-pink-500 hover:bg-pink-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/20"
      >
      <Copy className="w-3.5 h-3.5" /> Copiar para Placa / Redes
      </button>
      <button
      onClick={() => speakDogName(dogCustomName)}
      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-pink-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
      >
      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
      </button>
      </div>
      </div>
      </div>
      </div>
      
      {/* Categorized Library */}
      <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
      <span>📖</span> Colección de Nombres para Perritas por Categoría
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Explora ideas editoriales para perritas; sin rankings ni significados inventados.</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
      {['Todas 🐾', 'Tiernas 💖', 'Pequeñas 🎀', 'Blancas / Peluditas ❄️', 'Originales ✨', 'Famosas 👑'].map(tab => (
      <button
      key={tab}
      onClick={() => setDogCategoryTab(tab)}
      className={`gdn-tool-tab px-3 py-2.5 min-h-11 rounded-xl text-xs font-bold transition-all ${
      dogCategoryTab === tab
      ? 'bg-pink-500 text-zinc-950 shadow-md shadow-pink-500/20'
      : 'bg-zinc-800 text-zinc-400 hover:text-white'
      }`}
      >
      {tab}
      </button>
      ))}
      </div>
      </div>
      
      <PetNameLibrary
        kind="dogs"
        category={dogCategoryTab}
        allCategory="Todas 🐾"
        onCopy={handleCopyTrending}
        onUse={setDogCustomName}
        onSpeak={speakDogName}
      />
      </div>
      
      {/* Female Dog Name A-Z Filter Directory */}
      <div>
      <div className="mb-4">
      <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
      <span>🔤</span> Directorio de Nombres para Perritas A-Z
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Filtra por la letra inicial para comparar nombres que encajen con tu cachorra.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
      {['A', 'B', 'C', 'D', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'Z'].map(letter => (
      <button
      key={letter}
      onClick={() => setDogLetter(letter)}
      className={`gdn-tool-tab w-10 h-10 rounded-xl font-bold text-sm transition-all ${
      dogLetter === letter
      ? 'bg-pink-500 text-zinc-950 shadow-lg shadow-pink-500/30 scale-105'
      : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
      }`}
      >
      {letter}
      </button>
      ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {({
      A: [{ name: 'Alma', tag: '💖 Tierna' }, { name: 'Atena', tag: '🛡️ Guerrera' }, { name: 'Abby', tag: '🐾 Dulce' }, { name: 'Arya', tag: '👑 Épica' }],
      B: [{ name: 'Bella', tag: '🌸 Clásica' }, { name: 'Bianca', tag: '❄️ Blanca' }, { name: 'Bambi', tag: '🦌 Pequeña' }, { name: 'Bailey', tag: '🎾 Alegre' }],
      C: [{ name: 'Chloe', tag: '🎀 Elegante' }, { name: 'Cleo', tag: '👑 Reina' }, { name: 'Coco', tag: '🍫 Cafe' }, { name: 'Copito', tag: '☁️ Suave' }],
      D: [{ name: 'Daisy', tag: '🌼 Flor' }, { name: 'Dakota', tag: '🌿 Libre' }, { name: 'Dora', tag: '⭐ Curiosa' }, { name: 'Dulce', tag: '🍯 Cariñosa' }],
      K: [{ name: 'Kira', tag: '✨ Brillo' }, { name: 'Kyra', tag: '👑 Sol' }, { name: 'Koa', tag: '🌴 Pacífica' }, { name: 'Kenia', tag: '🌍 Robusta' }],
      L: [{ name: 'Luna', tag: '🌙 Popular #1' }, { name: 'Lola', tag: '🎀 Divertida' }, { name: 'Lupe', tag: '🐾 Tierna' }, { name: 'Leila', tag: '🖤 Noche' }],
      M: [{ name: 'Maya', tag: '🌿 Sagrada' }, { name: 'Mia', tag: '💖 Mía' }, { name: 'Mila', tag: '✨ Milagro' }, { name: 'Molly', tag: '🎾 Juguetona' }],
      N: [{ name: 'Nala', tag: '🦁 Leona' }, { name: 'Nina', tag: '🌸 Pequeña' }, { name: 'Nébula', tag: '⭐ Espacial' }, { name: 'Noa', tag: '🕊️ Paz' }],
      P: [{ name: 'Penny', tag: '🪙 Tierna' }, { name: 'Perla', tag: '🦪 Valiosa' }, { name: 'Princesa', tag: '👑 Consentida' }, { name: 'Pipa', tag: '🍭 Chispa' }],
      S: [{ name: 'Sasha', tag: '🛡️ Fuerte' }, { name: 'Stella', tag: '⭐ Estrella' }, { name: 'Sombra', tag: '🖤 Oscura' }, { name: 'Sunnie', tag: '☀️ Sol' }],
      T: [{ name: 'Tiana', tag: '👑 Princesa' }, { name: 'Tara', tag: '🌸 Tierra' }, { name: 'Toby', tag: '🎾 Juguetona' }, { name: 'Trufa', tag: '🍫 Dulce' }],
      Z: [{ name: 'Zoe', tag: '✨ Vida' }, { name: 'Zelda', tag: '✨ Fantasía' }, { name: 'Zuri', tag: '🌸 Hermosa' }, { name: 'Zaza', tag: 'Chispa' }]
      }[dogLetter] || []).map((dog, idx) => (
      <div
      key={idx}
      className="bg-zinc-900/80 border border-white/5 hover:border-pink-500/30 rounded-xl p-3 flex flex-col justify-between gap-2 transition-all group"
      >
      <div className="flex items-center justify-between">
      <span className="font-bold text-white text-sm group-hover:text-pink-300 transition-colors">{dog.name}</span>
      <span className="text-[10px] bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded-full">{dog.tag}</span>
      </div>
      
      <div className="flex items-center gap-1.5 pt-1">
      <button
      onClick={() => speakDogName(dog.name)}
      className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-lg text-xs transition-all flex items-center justify-center"
      title="Escuchar audio"
      >
      <Volume2 className="w-3 h-3" />
      </button>
      <button
      onClick={() => setDogCustomName(dog.name)}
      className="px-2 py-1 bg-zinc-800 hover:bg-pink-500/20 text-pink-300 rounded-lg text-[10px] font-semibold transition-all"
      title="Usar en creador"
      >
      Usar
      </button>
      <button
      onClick={() => handleCopyTrending(dog.name)}
      className="flex-1 py-1 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1"
      >
      <Copy className="w-3 h-3" /> Copiar
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
