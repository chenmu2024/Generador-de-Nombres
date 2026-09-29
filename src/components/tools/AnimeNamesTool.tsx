'use client';

import { useState } from 'react';
import { Copy, Flame, Sparkles, Volume2 } from 'lucide-react';

export default function AnimeNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
} {
  const [animeBaseName, setAnimeBaseName] = useState('Kuro');
  const [animeSuffix, setAnimeSuffix] = useState('-sama');
  const [animeArchetype, setAnimeArchetype] = useState<'shonen' | 'villain' | 'kawaii' | 'isekai' | 'ninja'>('shonen');

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
    <div className="bg-gradient-to-br from-red-950/40 via-[#121212] to-violet-950/30 border border-red-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-wider mb-3">
    ⛩️ Creador Otaku de Nicknames de Anime (2026)
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    Nombres de Anime para Juegos, Discord y Redes
    </h2>
    <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
    Genera apodos japoneses con sufijos honoríficos (-sama, -kun, -chan, -senpai, -dono), caracteres Kanji y símbolos nipones para Genshin Impact, Roblox, Valorant, Free Fire o TikTok.
    </p>
    </div>
    </div>
    
    {/* Interactive Honorific & Archetype Nick Builder */}
    <div className="bg-zinc-950/90 border border-red-500/20 rounded-2xl p-6 relative z-10 space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
    <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
    <Sparkles className="w-4 h-4 text-red-400" /> Generador por Sufijo Honorífico & Estilo Otaku
    </span>
    
    {/* Archetype Selector */}
    <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
    {[
    { id: 'shonen', label: '⚔️ Shonen Héroe' },
    { id: 'villain', label: '🖤 Villano / Dark' },
    { id: 'kawaii', label: '🌸 Kawaii / Shojo' },
    { id: 'isekai', label: '⚡ Isekai / Cazador' },
    { id: 'ninja', label: '⛩️ Ninja / Clan' }
    ].map(tab => (
    <button
    key={tab.id}
    onClick={() => setAnimeArchetype(tab.id as any)}
    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
    animeArchetype === tab.id
    ? 'bg-gradient-to-r from-red-600 to-violet-600 text-white shadow-md'
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
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Nombre o Apodo Base</label>
    <input
    type="text"
    value={animeBaseName}
    onChange={(e) => setAnimeBaseName(e.target.value)}
    placeholder="Ej: Kuro, Akira, Sora, Ren, Kage"
    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
    />
    </div>
    <div>
    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Sufijo Honorífico Japonés</label>
    <select aria-label="Seleccionar opción" value={animeSuffix}
    onChange={(e) => setAnimeSuffix(e.target.value)}
    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
    >
    <option value="-sama">-sama (様 - Señor / Respeto Supremo)</option>
    <option value="-senpai">-senpai (先輩 - Superior / Guía)</option>
    <option value="-kun">-kun (君 - Chico / Amigo)</option>
    <option value="-chan">-chan (ちゃん - Tierno / Afectivo)</option>
    <option value="-dono">-dono (殿 - Lord / Samurai)</option>
    <option value="-san">-san (さん - Respetuoso Estándar)</option>
    <option value="">(Sin Sufijo)</option>
    </select>
    </div>
    </div>
    
    {/* Dynamic Generated Results Grid */}
    {(() => {
    const name = animeBaseName || 'Kuro';
    const suffix = animeSuffix;
    const full = `${name}${suffix}`;
    
    const archetypeCombos: Record<string, { label: string; text: string }[]> = {
    shonen: [
    { label: '🔥 Estilo Protagonista Fuego', text: `⚡ 𝙆 ${full.toUpperCase()} ⚡` },
    { label: '⚔️ Estilo Espadachín', text: `⚔️ 𝙺 ${full} ⚔️` },
    { label: '👑 Estilo Rey Guerrero', text: `👑 𝙆 𝙐 𝙍 𝙊 . ${suffix.toUpperCase()} 👑` },
    { label: '🐉 Estilo Dragón Celestial', text: `🐉 ${full} 🐉` }
    ],
    villain: [
    { label: '🖤 Estilo Villano / Dark', text: `🖤 ᴋ ᴜ ʀ ᴏ ${suffix} 🖤` },
    { label: '☠️ Estilo Sombra Maldita', text: `☠︎ 𝙺 𝚄 𝚁 𝙾 ${suffix} ☠︎` },
    { label: '🦇 Estilo Vampiro / Antihéroe', text: `🦇 ${full} 🦇` },
    { label: '🖤 Estilo Abismo Dark', text: `x . ${full} . x` }
    ],
    kawaii: [
    { label: '🌸 Estilo Shojo / Kawaii', text: `🌸 ꜱ ᴀ ᴋ ᴜ ʀ ᴀ ${suffix} 🌸` },
    { label: '✨ Estilo Mágico / Sparkle', text: `✨ 𝒦 ${full} ✨` },
    { label: '🧸 Estilo Afectivo', text: `🧸 ${full} 🧸` },
    { label: '🎀 Estilo Aesthetic Pink', text: `🎀 ᴋ ᴜ ʀ ᴏ . ${suffix} 🎀` }
    ],
    isekai: [
    { label: '⚡ Estilo Hashira / Cazador', text: `⚡ 𝐻𝑎𝑠ℎ𝑖𝑟𝑎 _ ${full} ⚡` },
    { label: '🔮 Estilo Mago / Isekai', text: `🔮 𝙼𝚊𝚐𝚞𝚜 _ ${full}` },
    { label: '🗡️ Estilo Gremio de Héroes', text: `🗡️ ${full} _ 𝙷ero` },
    { label: '⭐ Estilo Nivel Máximo', text: `⭐ 𝕃𝕧𝕝𝟡𝟡 _ ${full}` }
    ],
    ninja: [
    { label: '⛩️ Estilo Ninjutsu / Clan', text: `⛩️ 𝙆 𝘼 𝙂 𝙀 _ ${full.toUpperCase()} ⛩️` },
    { label: '🦊 Estilo Kitsune Místico', text: `🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ ${full}` },
    { label: '☯️ Estilo Sombra Shinobi', text: `☯️ 𝚂𝚑𝚒𝚗𝚘𝚋𝚒 _ ${full}` },
    { label: '🌊 Estilo Aldea de la Niebla', text: `🌊 ${full} _ 𝙽𝚒𝚗𝚓𝚊` }
    ]
    };
    
    const currentCombos = archetypeCombos[animeArchetype] || archetypeCombos.shonen;
    
    return (
    <div className="space-y-3 pt-2">
    <span className="text-xs font-bold text-zinc-300 block">Variaciones Listas para Copiar y Usar en Juego:</span>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {currentCombos.map((combo, idx) => (
    <div key={idx} className="bg-zinc-900/90 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between gap-2">
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{combo.label}</span>
    <div className="text-xs font-mono font-bold text-white truncate my-1">{combo.text}</div>
    <div className="flex gap-2">
    <button
    onClick={() => handleCopyTrending(combo.text)}
    className="flex-1 py-1.5 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 text-red-200 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
    >
    <Copy className="w-3 h-3" /> Copiar
    </button>
    <button
    onClick={() => speakName(full)}
    className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors"
    title="Escuchar la pronunciación"
    >
    <Volume2 className="w-3.5 h-3.5" />
    </button>
    </div>
    </div>
    ))}
    </div>
    </div>
    );
    })()}
    </div>
    
    {/* Ready-to-copy Popular Anime Presets Grid */}
    <div className="space-y-3 relative z-10">
    <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
    <Flame className="w-4 h-4 text-amber-400" /> Presets de Nombres de Anime Más Populares en Videojuegos
    </span>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {[
    { label: '⚡ 𝙆𝙖𝙜𝙚 - 𝙎𝙖𝙢𝙖 ⛩️', val: '⚡ 𝙆𝙖𝙜𝙚 - 𝙎𝙖𝙢𝙖 ⛩️', desc: 'Genshin / Honkai Star Rail' },
    { label: '🌸 𝕊𝕒𝕜𝕦𝕣𝕒 . ᴄʜᴀɴ 🌸', val: '🌸 𝕊𝕒𝕜𝕦𝕣𝕒 . ᴄʜᴀɴ 🌸', desc: 'Roblox Blox Fruits Girl' },
    { label: '🖤 𝙺𝚞𝚛𝚘𝚗𝚎𝚔𝚘 - 𝚂𝚎𝚗𝚙𝚊𝚒 🖤', val: '🖤 𝙺𝚞𝚛𝚘𝚗𝚎𝚔𝚘 - 𝚂𝚎𝚗𝚙𝚊𝚒 🖤', desc: 'Discord / Valorant Dark' },
    { label: '⛩️ 𝓗𝓪𝓼𝓱𝓲𝓻𝓪 _ 𝓚𝓾𝓻𝓸 ⛩️', val: '⛩️ 𝓗𝓪𝓼𝓱𝓲𝓻𝓪 _ 𝓚𝓾𝓻𝓸 ⛩️', desc: 'Free Fire & Demon Slayer' },
    { label: '🐉 𝙍𝙮𝙪𝙟𝙞𝙣 - 𝙎𝙖𝙢𝙖 🐉', val: '🐉 𝙍𝙮𝙪𝙟𝙞𝙣 - 𝙎𝙖𝙢𝙖 🐉', desc: 'RPG & Anime Clanes' },
    { label: '🔥 𝙁𝙡𝙖m𝙚 _ 𝙃𝙖𝙨𝙝𝙞𝙧𝙖 🔥', val: '🔥 𝙁𝙡𝙖𝙢𝙚 _ 𝙃𝙖𝙨𝙝𝙞𝙧𝙖 🔥', desc: 'Estilo Fuego Competitivo' },
    { label: '🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ 𝚂𝚘𝚛𝚊 🦊', val: '🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ 𝚂𝚘𝚛𝚊 🦊', desc: 'Blox Fruits Fruta Kitsune' },
    { label: '⚔️ 𝙻𝚎𝚟𝚒 - 𝙰𝚌𝚔𝚎𝚛𝚖𝚊𝚗 ⚔️', val: '⚔️ 𝙻𝚎𝚟𝚒 - 𝙰𝚌𝚔𝚎𝚛𝚖𝚊𝚗 ⚔️', desc: 'Estilo Héroe Shonen' }
    ].map((item, idx) => (
    <button
    key={idx}
    onClick={() => handleCopyTrending(item.val)}
    className="p-3.5 bg-zinc-900/90 hover:bg-red-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-red-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
    >
    <div className="flex items-center justify-between w-full">
    <span className="text-red-300 font-bold truncate">{item.label}</span>
    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-300 shrink-0" />
    </div>
    <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
    </button>
    ))}
    </div>
    </div>
    </div>
  );
}
