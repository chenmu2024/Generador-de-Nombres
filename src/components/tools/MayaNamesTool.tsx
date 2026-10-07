'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function MayaNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [myCategoryTab, setMyCategoryTab] = useState('Todos 🗿');
  const [myCustomName, setMyCustomName] = useState('Ixchel');
  const [myTotem, setMyTotem] = useState('Jaguar 🐆');
  const [mySelectedFrame, setMySelectedFrame] = useState('🗿 [Totem] • [Name] • 🪶 🗿');

  const speakMaya = (text: string) => readNameAloud(text, 'es-MX');

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
    <div className="bg-[#121212] border border-emerald-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🗿 Sagrados, Mitología & Naturaleza
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    <span>🗿</span> Generador y Creador de Nombres Mayas y Prehispánicos (con Audio)
    </h2>
    <p className="text-zinc-400 mt-1 text-sm">
    Explora referencias culturales y propuestas de apodos. La lectura es sintetizada en español; no verifica la pronunciación en lenguas mayas. Los emoji son decorativos, no glifos mayas.
    </p>
    </div>
    </div>
    
    {/* Custom Mayan Nickname & Totem Creator */}
    <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
    <span>🪶</span> Creador de Nombre con Totem y Símbolos Mayas
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="space-y-4 md:col-span-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
    <label htmlFor="mayanamestool-field-1" className="text-xs font-semibold text-zinc-400 block mb-2">Tótem / Animal de Poder:</label>
    <select id="mayanamestool-field-1" value={myTotem}
    onChange={(e) => setMyTotem(e.target.value)}
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500 text-sm font-semibold"
    >
    {['Jaguar 🐆', 'Quetzal 🪶', 'Sol ☀️', 'Luna 🌙', 'Agua 💧', 'Serpiente 🐍', 'Ceiba 🌳', 'Fuego 🔥'].map(t => (
    <option key={t} value={t}>{t}</option>
    ))}
    </select>
    </div>
    
    <div>
    <label htmlFor="mayanamestool-field-2" className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Maya / Prehispánico:</label>
    <input id="mayanamestool-field-2"
    type="text"
    value={myCustomName}
    onChange={(e) => setMyCustomName(e.target.value)}
    placeholder="Ixchel, Balam, Yaretzi..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 text-sm font-bold"
    />
    </div>
    </div>
    
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Decorativo:</label>
    <div className="flex flex-wrap gap-2">
    {[
    '🗿 [Totem] • [Name] • 🪶 🗿',
    '⚡ [Name] • [Totem] ⚡',
    '꧁༺[Totem] [Name]༻꧂',
    '☀️ [Name] • Ahau 👑',
    '🌙 Ixchel • [Name] 🌸',
    '🌿 [Name] • Selva Sagrada 🌿'
    ].map((frame) => (
    <button
    key={frame}
    onClick={() => setMySelectedFrame(frame)}
    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
    mySelectedFrame === frame
    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
    : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
    }`}
    >
    {frame
    .replace('[Totem]', myTotem.split(' ')[0])
    .replace('[Name]', myCustomName || 'Ixchel')}
    </button>
    ))}
    </div>
    </div>
    </div>
    
    {/* Styled Output Preview */}
    <div className="gdn-tool-result bg-gradient-to-b from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
    <div>
    <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">Identidad Sagrada Maya</div>
    <div className="text-3xl font-extrabold text-emerald-300 font-heading mb-2">
    {myCustomName || 'Ixchel'}
    </div>
    <div className="text-base font-bold text-white font-heading mb-1 break-all">
    {mySelectedFrame
    .replace('[Totem]', myTotem.split(' ')[0])
    .replace('[Name]', myCustomName || 'Ixchel')}
    </div>
    <div className="text-xs text-zinc-400 italic">Formato decorativo opcional para personajes, perfiles o proyectos creativos</div>
    </div>
    
    <div className="w-full space-y-2 mt-4">
    <button
    onClick={() => handleCopyTrending(
    mySelectedFrame
    .replace('[Totem]', myTotem.split(' ')[0])
    .replace('[Name]', myCustomName || 'Ixchel')
    )}
    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre Maya
    </button>
    <button
    onClick={() => speakMaya(myCustomName)}
    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
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
    <span>📖</span> Directorio de Nombres Mayas Seleccionados
    </h3>
    <p className="text-xs text-zinc-400 mt-1">Filtra por significado sagrado y escucha la pronunciación en audio.</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
    {['Todos 🗿', 'Niñas 🌸', 'Niños ⚡', 'Deidades ☀️', 'Naturaleza 🐆', 'Elegantes 💎'].map(tab => (
    <button
    key={tab}
    onClick={() => setMyCategoryTab(tab)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
    myCategoryTab === tab
    ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
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
    { name: 'Ixchel', mean: 'Referencia a una deidad maya; no equivale a una etimología literal', symbol: '🌙 Luna Sagrada', category: 'Deidades ☀️' },
    { name: 'Itza', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '💧 Agua Pura', category: 'Niñas 🌸' },
    { name: 'Yaretzi', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '💖 Amor Eterno', category: 'Niñas 🌸' },
    { name: 'Kinich', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '☀️ Sol Radiante', category: 'Deidades ☀️' },
    { name: 'Balam', mean: 'Jaguar; las asociaciones poéticas no son una traducción literal', symbol: '🐆 Jaguar', category: 'Naturaleza 🐆' },
    { name: 'Nicté', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '🌸 Flor Maya', category: 'Niñas 🌸' },
    { name: 'Zazil', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '✨ Luz Clara', category: 'Elegantes 💎' },
    { name: 'Canek', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '🐍 Serpiente', category: 'Niños ⚡' },
    { name: 'Amaité', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '☁️ Cielo Infinito', category: 'Elegantes 💎' },
    { name: 'K\'uk\'ulkan', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '🪶 Quetzal Sagrado', category: 'Deidades ☀️' },
    { name: 'Kaknab', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '🌊 Gran Océano', category: 'Naturaleza 🐆' },
    { name: 'Yaxkin', mean: 'Origen y significado pendientes de verificación; no se presenta como traducción maya confirmada', symbol: '🌅 Nuevo Sol', category: 'Niños ⚡' }
    ].filter(item => myCategoryTab === 'Todos 🗿' || item.category === myCategoryTab).map((item, idx) => (
    <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
    <div>
    <div className="flex items-center justify-between mb-2">
    <h3 className="font-bold text-white text-lg font-heading group-hover:text-emerald-300 transition-colors">{item.name}</h3>
    <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/20">{item.symbol}</span>
    </div>
    <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
    </div>
    
    <div className="space-y-1.5 pt-2 border-t border-white/5">
    <div className="grid grid-cols-2 gap-1.5">
    <button
    onClick={() => speakMaya(item.name)}
    className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Escuchar audio"
    >
    <Volume2 className="w-3 h-3" /> Audio
    </button>
    <button
    onClick={() => setMyCustomName(item.name)}
    className="py-1.5 bg-zinc-800 hover:bg-emerald-500/20 text-emerald-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Cargar en el creador"
    >
    <span>✨</span> Usar
    </button>
    </div>
    <button
    onClick={() => handleCopyTrending(item.name)}
    className="w-full py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-bold border border-emerald-500/20 transition-all flex items-center justify-center gap-1"
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
