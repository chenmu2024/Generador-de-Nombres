'use client';

import { speakName as readNameAloud } from '../../utils/speech';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function KoreanNamesTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [krCategoryTab, setKrCategoryTab] = useState('Todos 🇰🇷');
  const [krCustomName, setKrCustomName] = useState('Min-Ji');
  const [krCustomHangul, setKrCustomHangul] = useState('민지');
  const [krSelectedSurname, setKrSelectedSurname] = useState('Kim (김)');
  const [krSelectedFrame, setKrSelectedFrame] = useState('✨ [Surname] [Name] ([Hangul]) ✨');

  const speakKorean = (text: string) => readNameAloud(text, 'ko-KR');

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
    <div className="bg-[#121212] border border-violet-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
    🇰🇷 K-Pop, Hangul & Doramas
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
    <span>🇰🇷</span> Generador y Creador de Nombres Coreanos (con Audio)
    </h2>
    <p className="text-zinc-400 mt-1 text-sm">
    Explora nombres en Hangul, romanización oficial, pronunciación nativa en audio y creador de apodos Idol.
    </p>
    </div>
    </div>
    
    {/* Custom Korean Nickname Creator */}
    <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
    <span>🎤</span> Creador de Nombre Estilo K-Pop Idol & Dorama
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="space-y-4 md:col-span-2">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div>
    <label htmlFor="koreannamestool-field-1" className="text-xs font-semibold text-zinc-400 block mb-2">Apellido Coreano:</label>
    <select id="koreannamestool-field-1" aria-label="Seleccionar opción" value={krSelectedSurname}
    onChange={(e) => setKrSelectedSurname(e.target.value)}
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500 text-sm font-semibold"
    >
    {['Kim (김)', 'Lee (이)', 'Park (박)', 'Choi (최)', 'Jung (정)', 'Kang (강)', 'Yoon (윤)', 'Jang (장)'].map(s => (
    <option key={s} value={s}>{s}</option>
    ))}
    </select>
    </div>
    
    <div>
    <label htmlFor="koreannamestool-field-2" className="text-xs font-semibold text-zinc-400 block mb-2">Nombre / Romaji:</label>
    <input id="koreannamestool-field-2"
    type="text"
    value={krCustomName}
    onChange={(e) => setKrCustomName(e.target.value)}
    placeholder="Min-Ji, Tae-Hyung..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-violet-500 text-sm font-bold"
    />
    </div>
    
    <div>
    <label htmlFor="koreannamestool-field-3" className="text-xs font-semibold text-zinc-400 block mb-2">Hangul (한글):</label>
    <input id="koreannamestool-field-3"
    type="text"
    value={krCustomHangul}
    onChange={(e) => setKrCustomHangul(e.target.value)}
    placeholder="민지, 태형..."
    className="gdn-tool-input w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-violet-300 focus:outline-none focus:border-violet-500 text-sm font-mono font-bold"
    />
    </div>
    </div>
    
    <div>
    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Formato para Redes / Juegos:</label>
    <div className="flex flex-wrap gap-2">
    {[
    '✨ [Surname] [Name] ([Hangul]) ✨',
    '👑 [Hangul] • [Name] 👑',
    '💖 [Name] ([Hangul]) 💖',
    '꧁༺[Surname] [Name]༻꧂',
    '🇰🇷 [Name] • [Hangul]'
    ].map((frame) => (
    <button
    key={frame}
    onClick={() => setKrSelectedFrame(frame)}
    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
    krSelectedFrame === frame
    ? 'bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-sm'
    : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
    }`}
    >
    {frame
    .replace('[Surname]', krSelectedSurname.split(' ')[0])
    .replace('[Name]', krCustomName || 'Min-Ji')
    .replace('[Hangul]', krCustomHangul || '민지')}
    </button>
    ))}
    </div>
    </div>
    </div>
    
    {/* Styled Output Preview */}
    <div className="gdn-tool-result bg-gradient-to-b from-violet-950/40 via-zinc-950 to-zinc-950 border border-violet-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
    <div>
    <div className="text-xs text-violet-400 font-bold uppercase tracking-widest mb-2">Identidad Idol / Dorama</div>
    <div className="text-4xl font-extrabold text-violet-300 font-mono mb-2">
    {krCustomHangul || '민지'}
    </div>
    <div className="text-base font-bold text-white font-heading mb-1 break-all">
    {krSelectedFrame
    .replace('[Surname]', krSelectedSurname.split(' ')[0])
    .replace('[Name]', krCustomName || 'Min-Ji')
    .replace('[Hangul]', krCustomHangul || '민지')}
    </div>
    <div className="text-xs text-zinc-400 italic">Ideal para TikTok, Instagram o Free Fire</div>
    </div>
    
    <div className="w-full space-y-2 mt-4">
    <button
    onClick={() => handleCopyTrending(
    krSelectedFrame
    .replace('[Surname]', krSelectedSurname.split(' ')[0])
    .replace('[Name]', krCustomName || 'Min-Ji')
    .replace('[Hangul]', krCustomHangul || '민지')
    )}
    className="w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-violet-600/20"
    >
    <Copy className="w-3.5 h-3.5" /> Copiar Nombre Coreano
    </button>
    <button
    onClick={() => speakKorean(krCustomHangul || krCustomName)}
    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-violet-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
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
    <span>📚</span> Nombres Coreanos Famosos con Significado
    </h3>
    <p className="text-xs text-zinc-400 mt-1">Filtra por categorías y escucha la voz nativa en coreano.</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
    {['Todos 🇰🇷', 'Niñas 🌸', 'Niños ⚡', 'K-Pop Idols 🎤', 'K-Drama 🎬'].map(tab => (
    <button
    key={tab}
    onClick={() => setKrCategoryTab(tab)}
    className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
    krCategoryTab === tab
    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
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
    { hangul: '지은', name: 'Ji-Eun', mean: 'Sabiduría profunda y amabilidad', vibe: '✨ Estilo IU', category: 'Niñas 🌸' },
    { hangul: '수아', name: 'Soo-Ah', mean: 'Agua pura y elegancia hermosa', vibe: '🌸 Protagonista Dorama', category: 'K-Drama 🎬' },
    { hangul: '민지', name: 'Min-Ji', mean: 'Inteligencia y brillo radiante', vibe: '💖 Estilo NewJeans', category: 'Niñas 🌸' },
    { hangul: '은지', name: 'Eun-Ji', mean: 'Gracia divina y amabilidad humana', vibe: '🌿 K-Pop Idol', category: 'Niñas 🌸' },
    { hangul: '태형', name: 'Tae-Hyung', mean: 'Gran éxito y prosperidad', vibe: '🌟 Estilo BTS V', category: 'K-Pop Idols 🎤' },
    { hangul: '정국', name: 'Jung-Kook', mean: 'Pilar fuerte y noble de la nación', vibe: '🔥 Estilo BTS JK', category: 'K-Pop Idols 🎤' },
    { hangul: '민호', name: 'Min-Ho', mean: 'Valentía brillante y liderazgo', vibe: '🎬 Estilo Lee Min-ho', category: 'K-Drama 🎬' },
    { hangul: '서윤', name: 'Seo-Yoon', mean: 'Bendición presagiada y luz pura', vibe: '✨ Clásico Elegante', category: 'Niñas 🌸' },
    { hangul: '도윤', name: 'Do-Yoon', mean: 'Camino justo y consentimiento', vibe: '⚡ Tendencia Masculina', category: 'Niños ⚡' },
    { hangul: '현우', name: 'Hyun-Woo', mean: 'Sabio, virtuoso y divino', vibe: '🌟 Actor de Dorama', category: 'K-Drama 🎬' },
    { hangul: '지수', name: 'Ji-Soo', mean: 'Sabiduría y belleza de río', vibe: '💖 BLACKPINK Jisoo', category: 'K-Pop Idols 🎤' },
    { hangul: '지민', name: 'Ji-Min', mean: 'Inteligencia brillante y suave', vibe: '✨ BTS Jimin', category: 'K-Pop Idols 🎤' }
    ].filter(item => krCategoryTab === 'Todos 🇰🇷' || item.category === krCategoryTab).map((item, idx) => (
    <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-violet-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
    <div>
    <div className="flex items-center justify-between mb-2">
    <span className="text-2xl font-bold text-violet-300 font-mono">{item.hangul}</span>
    <span className="text-[10px] bg-violet-500/10 text-violet-300 px-2.5 py-0.5 rounded-full border border-violet-500/20">{item.vibe}</span>
    </div>
    <h3 className="font-bold text-white text-lg font-heading group-hover:text-violet-300 transition-colors">{item.name}</h3>
    <p className="text-xs text-zinc-400 mt-1">{item.mean}</p>
    </div>
    
    <div className="space-y-1.5 pt-2 border-t border-white/5">
    <div className="grid grid-cols-2 gap-1.5">
    <button
    onClick={() => speakKorean(item.hangul)}
    className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-violet-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Escuchar audio"
    >
    <Volume2 className="w-3 h-3" /> Audio
    </button>
    <button
    onClick={() => {
    setKrCustomName(item.name);
    setKrCustomHangul(item.hangul);
    }}
    className="py-1.5 bg-zinc-800 hover:bg-violet-500/20 text-violet-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
    title="Cargar en el creador"
    >
    <span>✨</span> Estilar
    </button>
    </div>
    <button
    onClick={() => handleCopyTrending(`${item.name} (${item.hangul})`)}
    className="w-full py-1.5 bg-violet-600/10 hover:bg-violet-600/20 text-violet-300 rounded-xl text-xs font-bold border border-violet-500/20 transition-all flex items-center justify-center gap-1"
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
