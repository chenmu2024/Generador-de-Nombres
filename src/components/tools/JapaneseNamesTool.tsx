'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function JapaneseNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [jpCategoryTab, setJpCategoryTab] = useState('Todos 🌸');
  const [jpCustomName, setJpCustomName] = useState('Sakura');
  const [jpCustomKanji, setJpCustomKanji] = useState('桜');
  const [jpSelectedFrame, setJpSelectedFrame] = useState('🌸 [Name] 🌸');

  const speakJapanese = (text: string) => readNameAloud(text, 'ja-JP');

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
    <div className="bg-[#121212] border border-rose-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🌸 Japoneses, Anime & Aesthetic
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    <span>🌸</span> Generador de Nombres y Apodos Japoneses (con Audio)
    </h2>
    <p className="text-zinc-400 mt-1 text-sm">
    Explora nombres con Kanji, lectura sintetizada del dispositivo, significados y creador de apodos estilo Anime / Gamer.
    </p>
    </div>
    </div>
    
    {/* Japanese Name Decorator / Nickname Generator */}
    <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
    <span>⛩️</span> Creador de Apodo Aesthetic / Otaku para Juegos y Redes
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="space-y-4 md:col-span-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
    <label htmlFor="japanesenamestool-field-1" className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Japones / Romaji:</label>
    <input id="japanesenamestool-field-1"
    type="text"
    value={jpCustomName}
    onChange={(e) => setJpCustomName(e.target.value)}
    placeholder="Sakura, Hinata, Gojo..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500 text-sm font-bold"
    />
    </div>
    <div>
    <label htmlFor="japanesenamestool-field-2" className="text-xs font-semibold text-zinc-400 block mb-2">Escritura japonesa (Opcional):</label>
    <input id="japanesenamestool-field-2"
    type="text"
    value={jpCustomKanji}
    onChange={(e) => setJpCustomKanji(e.target.value)}
    placeholder="桜, 日向, 鬼..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-rose-400 focus:outline-none focus:border-rose-500 text-sm font-mono font-bold"
    />
    </div>
    </div>
    
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco de Símbolos:</label>
    <div className="flex flex-wrap gap-2">
    {[
    '🌸 [Name] 🌸',
    '⛩️ 桜 • [Name] • 🌸 ⛩️',
    '꧁⚔️[Name]⚔️꧂',
    '⚡[Kanji] • [Name]⚡',
    '☯️ [Name] ☯️',
    '🦊 [Name] 🦊',
    '🎐 [Name] 🎐',
    '💮 [Kanji] • [Name] 💮'
    ].map((frame) => (
    <button
    key={frame}
    onClick={() => setJpSelectedFrame(frame)}
    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
    jpSelectedFrame === frame
    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm'
    : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
    }`}
    >
    {frame.replace('[Name]', jpCustomName || 'Nombre').replace('[Kanji]', jpCustomKanji || '桜')}
    </button>
    ))}
    </div>
    </div>
    </div>
    
    {/* Styled Output Card */}
    <div className="gdn-tool-result bg-gradient-to-b from-rose-950/30 via-zinc-950 to-zinc-950 border border-rose-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
    <div>
    <div className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-2">Vista Previa Apodo</div>
    <div className="text-4xl font-extrabold text-rose-400 font-mono mb-2">
    {jpCustomKanji || '桜'}
    </div>
    <div className="text-lg font-bold text-white font-heading mb-1 break-all">
    {jpSelectedFrame
    .replace('[Name]', jpCustomName || 'Sakura')
    .replace('[Kanji]', jpCustomKanji || '桜')}
    </div>
    <div className="text-xs text-zinc-400 italic">Listo para Free Fire, Discord o TikTok</div>
    </div>
    
    <div className="w-full space-y-2 mt-4">
    <button
    onClick={() => handleCopyTrending(
    jpSelectedFrame
    .replace('[Name]', jpCustomName || 'Sakura')
    .replace('[Kanji]', jpCustomKanji || '桜')
    )}
    className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Apodo Aesthetic
    </button>
    <button
    onClick={() => speakJapanese(jpCustomName)}
    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-rose-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
    >
    <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
    </button>
    </div>
    </div>
    </div>
    </div>
    
    {/* Filter Tabs & Directory */}
    <div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div>
    <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
    <span>📖</span> Directorio de Nombres Japoneses Seleccionados
    </h3>
    <p className="text-xs text-zinc-400 mt-1">Presiona el botón de audio para escuchar la pronunciación auténtica en japonés.</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
    {['Todos 🌸', 'Niñas 🌸', 'Niños ⚡', 'Anime 🎮', 'Naturaleza 🌿'].map(tab => (
    <button
    key={tab}
    onClick={() => setJpCategoryTab(tab)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
    jpCategoryTab === tab
    ? 'bg-rose-500 text-zinc-950 shadow-md shadow-rose-500/20'
    : 'bg-zinc-800 text-zinc-400 hover:text-white'
    }`}
    >
    {tab}
    </button>
    ))}
    </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
    { kanji: '桜', name: 'Sakura', romaji: 'Sáh-koo-rah', meaning: 'Cerezo (桜)', tag: '🌸 Niñas', category: 'Niñas 🌸' },
    { kanji: '日向', name: 'Hinata', romaji: 'Hee-nah-tah', meaning: 'Lugar orientado al sol (日向)', tag: '☀️ Anime', category: 'Anime 🎮' },
    { kanji: '雪', name: 'Yuki', romaji: 'Yoo-kee', meaning: 'Nieve (雪)', tag: '❄️ Niñas', category: 'Niñas 🌸' },
    { kanji: '蓮', name: 'Ren', romaji: 'Ren', meaning: 'Loto (蓮)', tag: '🪷 Niños', category: 'Niños ⚡' },
    { kanji: '葵', name: 'Aoi', romaji: 'Ah-oh-ee', meaning: 'Malva (葵); no equivale al color azul', tag: '💙 Niñas', category: 'Niñas 🌸' },
    { kanji: '空', name: 'Sora', romaji: 'Soh-rah', meaning: 'Cielo (空)', tag: '☁️ Naturaleza', category: 'Naturaleza 🌿' },
    { kanji: '心愛', name: 'Kokoa', romaji: 'Koh-koh-ah', meaning: 'Caracteres de corazón (心) y amor (愛)', tag: '💖 Niñas', category: 'Niñas 🌸' },
    { kanji: '健太', name: 'Kenta', romaji: 'Ken-tah', meaning: 'Fuerte, sano y vigoroso', tag: '⚡ Niños', category: 'Niños ⚡' },
    { kanji: '炭治郎', name: 'Tanjiro', romaji: 'Tahn-jee-roh', meaning: 'Nombre de un personaje de Kimetsu no Yaiba; no es una traducción literal', tag: '⚔️ Anime', category: 'Anime 🎮' },
    { kanji: '禰豆子', name: 'Nezuko', romaji: 'Neh-zoo-koh', meaning: 'Nombre de un personaje de Kimetsu no Yaiba; etimología no verificada', tag: '🌸 Anime', category: 'Anime 🎮' },
    { kanji: '五条', name: 'Gojo', romaji: 'Goh-joh', meaning: 'Apellido de un personaje de anime; etimología no verificada', tag: '✨ Anime', category: 'Anime 🎮' },
    { kanji: '明', name: 'Akira', romaji: 'Ah-kee-rah', meaning: 'Brillante / claro (明)', tag: '💡 Niños', category: 'Niños ⚡' },
    { kanji: '楓', name: 'Kaede', romaji: 'Kah-eh-deh', meaning: 'Arce (楓)', tag: '🍁 Naturaleza', category: 'Naturaleza 🌿' },
    { kanji: '椿', name: 'Tsubaki', romaji: 'Tsoo-bah-kee', meaning: 'Camelia (椿)', tag: '🌺 Naturaleza', category: 'Naturaleza 🌿' },
    { kanji: 'リヴァイ', name: 'Levi', romaji: 'Reh-vee', meaning: 'Nombre de personaje escrito en katakana; no es un nombre de origen japonés', tag: '🗡️ Anime', category: 'Anime 🎮' },
    { kanji: '花', name: 'Hana', romaji: 'Hah-nah', meaning: 'Flor (花)', tag: '🌸 Niñas', category: 'Niñas 🌸' }
    ].filter(item => jpCategoryTab === 'Todos 🌸' || item.category === jpCategoryTab).map((item, idx) => (
    <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-rose-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
    <div>
    <div className="flex items-center justify-between mb-2">
    <span className="text-3xl font-bold text-rose-400 font-mono">{item.kanji}</span>
    <span className="text-[10px] bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/20">{item.tag}</span>
    </div>
    <h3 className="font-bold text-white text-lg font-heading group-hover:text-rose-300 transition-colors">{item.name}</h3>
    <div className="text-xs text-rose-300/80 italic mb-1">Guía aproximada: {item.romaji}</div>
    <p className="text-xs text-zinc-400 leading-relaxed">{item.meaning}</p>
    </div>
    
    <div className="space-y-1.5 pt-2 border-t border-white/5">
    <div className="grid grid-cols-2 gap-1.5">
    <button
    onClick={() => speakJapanese(item.kanji)}
    className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-rose-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Escuchar audio"
    >
    <Volume2 className="w-3 h-3" /> Audio
    </button>
    <button
    onClick={() => {
    setJpCustomName(item.name);
    setJpCustomKanji(item.kanji);
    }}
    className="py-1.5 bg-zinc-800 hover:bg-rose-500/20 text-rose-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Cargar en el creador"
    >
    <span>✨</span> Estilar
    </button>
    </div>
    <button
    onClick={() => handleCopyTrending(`${item.name} (${item.kanji})`)}
    className="w-full py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 rounded-xl text-xs font-bold border border-rose-500/20 transition-all flex items-center justify-center gap-1"
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
