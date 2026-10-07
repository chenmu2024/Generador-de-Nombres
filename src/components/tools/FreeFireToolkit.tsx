'use client';

import { useState } from 'react';
import { Copy, Flame, Shield, Sparkles } from 'lucide-react';
import { visibleLength } from '../../utils/text';

export default function FreeFireToolkit({
  currentPath,
  handleCopyTrending,
}: {
  currentPath: string;
  handleCopyTrending: (value: string) => void | Promise<void>;
}) {
  const isGamingToolPage = [
    '/nombres-free-fire',
    '/generador-free-fire',
    '/nombres-ff-unicos',
    '/nombres-ff-mujeres',
    '/nombres-clanes-ff',
    '/nombres-anime',
  ].includes(currentPath);

  const [ffTag, setFfTag] = useState('TAG');
  const [ffName, setFfName] = useState('NINJA');
  const [ffClanTag, setFfClanTag] = useState('7K');
  const [ffClanName, setFfClanName] = useState('MAFIA');
  const [ffClanSymbol, setFfClanSymbol] = useState('⚡');

  return (
    <div className="gdn-tool-shell max-w-6xl mx-auto py-2 space-y-8">
          {/* Clan & Squad Specialized Generator Block for /nombres-clanes-ff */}
          {currentPath === '/nombres-clanes-ff' && (
            <div className="bg-gradient-to-br from-red-950/40 via-[#121212] to-amber-950/30 border border-red-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🛡️ Creador de Tags, Insignias y Roster de Escuadra (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres para Clanes y Escuadras de Free Fire
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Genera el tag oficial de tu clan, insignias imponentes con escudos y coronas 👑, y la combinación uniforme de nicks para los 4 integrantes de tu escuadra competitiva.
                  </p>
                </div>
              </div>

              {/* Interactive Clan Tag & Squad Roster Generator */}
              <div className="bg-zinc-950/90 border border-red-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-red-400" /> Generador de Roster Uniforme para Escuadra (4 Jugadores)
                </span>
                
                {/* Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Tag / Iniciales del Clan</label>
                    <input
                      type="text"
                      value={ffClanTag}
                      onChange={(e) => setFfClanTag(e.target.value)}
                      placeholder="Ej: 7K, LOS, VP, ST"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Nombre Base del Clan</label>
                    <input
                      type="text"
                      value={ffClanName}
                      onChange={(e) => setFfClanName(e.target.value)}
                      placeholder="Ej: MAFIA, GODS, ELITE"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Símbolo / Emblema</label>
                    <select aria-label="Símbolo del clan" value={ffClanSymbol}
                      onChange={(e) => setFfClanSymbol(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="⚡">⚡ Rayo Insano</option>
                      <option value="👑">👑 Corona Real</option>
                      <option value="🛡️">🛡️ Escudo Épico</option>
                      <option value="☠︎">☠︎ Calavera Rush</option>
                      <option value="⚔️">⚔️ Espadas Cruzadas</option>
                      <option value="🦅">🦅 Águila Furia</option>
                      <option value="🔥">🔥 Fuego Competitivo</option>
                      <option value="Ⓥ">Ⓥ Verificado V</option>
                    </select>
                  </div>
                </div>

                {/* Squad Roles Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {[
                    { role: '👑 IGL / Capitán', text: `${ffClanTag}ㅤ•ㅤ${ffClanName}ㅤ${ffClanSymbol}` },
                    { role: '🎯 Franco / Sniper', text: `${ffClanTag}ㅤ•ㅤ${ffClanName}ㅤ🎯` },
                    { role: '⚡ Rush / Asalto', text: `${ffClanTag}ㅤ•ㅤ${ffClanName}ㅤ⚡` },
                    { role: '🛡️ Soporte / Support', text: `${ffClanTag}ㅤ•ㅤ${ffClanName}ㅤ🛡️` }
                  ].map((squad, idx) => (
                    <div key={idx} className="bg-zinc-900/90 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between gap-2">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{squad.role}</span>
                      <div className="text-xs font-mono font-bold text-white truncate my-1">{squad.text}</div>
                      <button
                        onClick={() => handleCopyTrending(squad.text)}
                        className="w-full py-1.5 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 text-red-200 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nick
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready-to-copy Clan Presets Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Nombres para Clanes Top Competitivos (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '🛡️ ＥＬＩＴＥ ⚡', val: '🛡️ ＥＬＩＴＥ ⚡', desc: 'Clan Competitivo Liderazgo' },
                    { label: '⚔️ ＭＡＦＩＡ ⚔️', val: '⚔️ ＭＡＦＩＡ ⚔️', desc: 'Estilo Guerreros Imponentes' },
                    { label: '👑 ＧＯＤＳ 👑', val: '👑 ＧＯＤＳ 👑', desc: 'Reyes del Mapa Nivel 10' },
                    { label: '×͜× ＬＯＳ • 7 Ｋ', val: '×͜× ＬＯＳ • 7 Ｋ', desc: 'Estilo Insano Competitivo' },
                    { label: '☬ ＫＩＬ Ｌ Ｅ Ｒ Ｓ ☬', val: '☬ ＫＩＬ Ｌ Ｅ Ｒ Ｓ ☬', desc: 'Clan Rusher Agresivo' },
                    { label: '🔥 ＲＵＳＨ３ＲＳ 🔥', val: '🔥 ＲＵＳＨ３ＲＳ 🔥', desc: 'Especialistas en Duelo' },
                    { label: '亗 ＶＩＰ 亗', val: '亗 ＶＩＰ 亗', desc: 'Exclusivo e Imponente' },
                    { label: '🐉 ＤＲＡＧＯＮＳ 🐉', val: '🐉 ＤＲＡＧＯＮＳ 🐉', desc: 'Fuerza Legendaria' }
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
          )}
          {/* Female / Chicas Insanas Specialized Generator Block for /nombres-ff-mujeres */}
          {currentPath === '/nombres-ff-mujeres' && (
            <div className="bg-gradient-to-br from-fuchsia-950/40 via-[#121212] to-violet-950/30 border border-fuchsia-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🌸 Creador Especial de Chicas Insanas & Aesthetic (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres para Free Fire de Mujeres y Chicas Insanas
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Estilos únicos para jugadoras de Free Fire: símbolos aesthetic, coronas de reina 👑, flores ✿, espacios invisibles y combinaciones para dúos dinámicos insanos.
                  </p>
                </div>
              </div>

              {/* Ready-to-copy Female Presets Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" /> Apodos Femeninos Top Tendencia (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '✿ Q u e e n ✿', val: '✿ Q u e e n ✿', desc: 'Aesthetic de Flores' },
                    { label: '👑 ㅤ B a b y ㅤ 👑', val: '👑 ㅤ B a b y ㅤ 👑', desc: 'Reina Insana con Espacio' },
                    { label: '🌸 ㅤ A i t a n a', val: '🌸 ㅤ A i t a n a', desc: 'Elegante y Delicado' },
                    { label: '☠︎ ＴＯＸＩＣ ☠︎', val: '☠︎ ＴＯＸＩＣ ☠︎', desc: 'Estilo Tóxica Rush' },
                    { label: '꧁ Ⓥ ㅤ P r i n c e s s ꧂', val: '꧁ Ⓥ ㅤ P r i n c e s s ꧂', desc: 'Verificada con Marco' },
                    { label: '🦋 ㅤ V a l e n t i n a', val: '🦋 ㅤ V a l e n t i n a', desc: 'Mariposa Aesthetic' },
                    { label: '♥ ㅤ S u a v e ㅤ ♥', val: '♥ ㅤ S u a v e ㅤ ♥', desc: 'Dúo Romántico' },
                    { label: '🔥 ㅤ G i r l ㅤ 🔥', val: '🔥 ㅤ G i r l ㅤ 🔥', desc: 'Gran Maestra Insana' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-fuchsia-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-fuchsia-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-fuchsia-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-fuchsia-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Duos Matching Section */}
              <div className="bg-zinc-950/80 border border-fuchsia-500/20 rounded-2xl p-5 relative z-10 space-y-3">
                <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Combinaciones para Dúos Dinámicos (Parejas Insanas)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { p1: '👑 K i n g', p2: '👑 Q u e e n' },
                    { p1: '★ I n s a n o ★', p2: '✿ S u a v e ✿' },
                    { p1: '⚡ N o o b', p2: '⚡ B a b y' },
                    { p1: '☠︎ D i a b l o', p2: '☠︎ D i a b l a' }
                  ].map((duo, idx) => (
                    <div key={idx} className="bg-zinc-900/90 p-3 rounded-xl border border-white/5 flex items-center justify-between gap-2 text-xs font-mono">
                      <button
                        onClick={() => handleCopyTrending(duo.p1)}
                        className="text-zinc-300 hover:text-fuchsia-300 font-bold flex items-center gap-1 truncate"
                      >
                        {duo.p1} <Copy className="w-3 h-3 text-zinc-500" />
                      </button>
                      <span className="text-fuchsia-500 font-bold text-xs">❤️</span>
                      <button
                        onClick={() => handleCopyTrending(duo.p2)}
                        className="text-zinc-300 hover:text-fuchsia-300 font-bold flex items-center gap-1 truncate"
                      >
                        {duo.p2} <Copy className="w-3 h-3 text-zinc-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Unique & Rare FF Names Generator Component for /nombres-ff-unicos */}
          {currentPath === '/nombres-ff-unicos' && (
            <div className="bg-gradient-to-br from-amber-950/30 via-[#121212] to-violet-950/20 border border-amber-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    💎 Generador Exclusivo de Apodos Únicos (KD 19)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Creador de Nombres para Free Fire que Nadie Tenga
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Combina símbolos Unicode, jeroglíficos, el símbolo Ⓥ y espacios invisibles para crear variantes poco comunes. La disponibilidad final del apodo depende del servidor y debe comprobarse dentro del juego.
                  </p>
                </div>
              </div>

              {/* Ready-to-copy Exclusives Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Plantillas de Nicks Rarísimos No Usados (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '𓆩⚡𓆪 ㅤ K I N G', val: '𓆩⚡𓆪 ㅤ K I N G', desc: 'Símbolo Alas Egipcias' },
                    { label: 'Ⓥ ㅤ G O D ㅤ ᵀᴹ', val: 'Ⓥ ㅤ G O D ㅤ ᵀᴹ', desc: 'Sello Verificado V' },
                    { label: '亗 ㅤ 𝒱 𝒪 𝒯 ℰ 𝒳', val: '亗 ㅤ 𝒱 𝒪 𝒯 ℰ 𝒳', desc: 'Letras Cursivas Raras' },
                    { label: '×͜× ㅤ 𝔖𝔥𝔞𝔡𝔬𝔮', val: '×͜× ㅤ 𝔖𝔥𝔞𝔡𝔬𝔮', desc: 'Estilo Gótico Insano' },
                    { label: '𓄂 ㅤ 𝔇𝔢𝔞𝔱𝔥 ㅤ 𓆃', val: '𓄂 ㅤ 𝔇𝔢𝔞𝔱𝔥 ㅤ 𓆃', desc: 'Jeroglífico Guardián' },
                    { label: ' ㅤ 𝔏𝔢𝔤𝔢𝔫𝔡', val: ' ㅤ 𝔏𝔢𝔤𝔢𝔫𝔡', desc: 'Logo Manzana Apple' },
                    { label: '╰‿╯ ㅤ 𝔗𝔬𝔡𝔦𝔠', val: '╰‿╯ ㅤ 𝔗𝔬𝔡𝔦𝔠', desc: 'Carita Sonrisa Malvada' },
                    { label: '乄 ㅤ 𝔑𝔦𝔫ℑ𝔞 ㅤ 乄', val: '乄 ㅤ 𝔑𝔦𝔫ℑ𝔞 ㅤ 乄', desc: 'Símbolo Asiático Ninja' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-amber-500/20 text-zinc-200 hover:text-white border border-white/10 hover:border-amber-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-amber-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rarity & Originality Checker Indicator */}
              <div className="bg-zinc-950/80 border border-amber-500/20 rounded-2xl p-5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Índice de Exclusividad Estimado</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-bold">ESTILO DECORADO</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Los caracteres Unicode y símbolos decorativos cambian el estilo visual. No comprobamos la disponibilidad del nombre ni garantizamos que sea único en Free Fire.
                  </p>
                </div>
              </div>
            </div>
          )}
          {isGamingToolPage && (
          <div className="bg-[#121212] border border-violet-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-violet-950/20 via-[#121212] to-fuchsia-950/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🔥 Herramienta Top: Juegos & Redes
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  Espacio Invisible y Creador de Apodos Pro
                </h2>
                <p className="text-zinc-400 mt-2 max-w-2xl">
                  Muchos juegos (como Free Fire, Roblox, PUBG) y redes sociales no permiten usar la barra espaciadora normal en los nombres. Usa este espacio invisible Unicode para separar tu tag de clan, tus iniciales o nombre completo.
                </p>
              </div>
            </div>

            {/* Quick Copy Invisible Spaces */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
              {[
                { title: 'Espacio Invisible Grande', code: 'ㅤ', label: 'Copia el espacio Unicode estándar (U+3164)' },
                { title: 'Espacio Invisible Pequeño', code: 'ᅠ', label: 'Espacio reducido para nombres compactos' },
                { title: 'Doble Espacio Invisible', code: 'ㅤㅤ', label: 'Doble separación para tags de clanes' }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-violet-500/30 transition-all">
                  <div>
                    <h3 className="font-bold text-white font-heading text-lg mb-1">{item.title}</h3>
                    <p className="text-xs text-zinc-500">{item.label}</p>
                  </div>
                  <button
                    onClick={() => handleCopyTrending(item.code)}
                    className="w-full py-3 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 font-semibold rounded-xl border border-violet-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-sm"
                  >
                    <Copy className="w-4 h-4" />
                    Copiar Espacio
                  </button>
                </div>
              ))}
            </div>

            {/* Clan Tags & Symbol Quick Inserter */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-violet-400" /> Prefijos de Clanes y Símbolos Insanos
                </span>
                <span className="text-[11px] text-zinc-400">Clic para añadir a tu apodo</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] text-zinc-500 w-full sm:w-auto font-bold uppercase self-center mr-1">Clanes:</span>
                  {['7K•', '4K•', 'TKN_', 'LOS•', 'VP_', 'ST•', 'FX_', 'B2K_', 'NINJA•', '×͜×', '亗', 'Ⓥ'].map((tag, i) => (
                    <button
                      key={i}
                      onClick={() => setFfTag(tag)}
                      className="px-2.5 py-1 bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 hover:text-white border border-white/5 rounded-lg text-xs font-mono font-bold transition-all active:scale-95"
                    >
                      + {tag}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] text-zinc-500 w-full sm:w-auto font-bold uppercase self-center mr-1">Símbolos FF:</span>
                  {['꧁༺', '༻꧂', '⚡', '☠︎', '✿', 'ღ', '👑', '☁️', '☯︎', '⚔️', '', '✦', '卍', '气'].map((sym, i) => (
                    <button
                      key={i}
                      onClick={() => setFfName(prev => `${sym}${prev}`)}
                      className="px-2.5 py-1 bg-zinc-800/80 hover:bg-fuchsia-600/30 text-fuchsia-300 hover:text-white border border-fuchsia-500/20 rounded-lg text-xs font-mono font-bold transition-all active:scale-95"
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Name Generator with Invisible Space & Character Count Check */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  ⚡ Genera tu Nombre con Espacio Invisible Integrado
                </h3>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                  (visibleLength(ffTag ? `${ffTag}ㅤ${ffName}` : ffName) <= 12)
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {visibleLength(ffTag ? `${ffTag}ㅤ${ffName}` : ffName)}/12 Caracteres {(visibleLength(ffTag ? `${ffTag}ㅤ${ffName}` : ffName) <= 12) ? '≤12 caracteres visibles' : 'Más de 12 caracteres visibles'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 block mb-2">Tag / Clan (Opcional)</label>
                  <input
                    type="text"
                    value={ffTag}
                    onChange={(e) => setFfTag(e.target.value)}
                    placeholder="Ej. SKL"
                    className="w-full px-4 py-3 bg-zinc-800/60 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 block mb-2">Tu Nombre / Apodo</label>
                  <input
                    type="text"
                    value={ffName}
                    onChange={(e) => setFfName(e.target.value)}
                    placeholder="Ej. NINJA"
                    className="w-full px-4 py-3 bg-zinc-800/60 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 text-sm"
                  />
                </div>
              </div>

              {/* Kill Feed Real-Time Simulator */}
              <div className="bg-gradient-to-r from-red-950/40 via-zinc-950 to-zinc-950 border border-red-500/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-red-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5" /> Simulador de Kill Feed en Partida (FF)</span>
                  <span className="text-zinc-500">HEADSHOT 🎯</span>
                </div>
                <div className="font-mono text-sm sm:text-base text-zinc-200 bg-black/60 p-3 rounded-lg border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden text-ellipsis">
                    <span className="text-amber-400 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Ⓥ Heroico</span>
                    <span className="text-white font-bold">{ffTag ? `${ffTag}ㅤ${ffName}` : ffName}</span>
                    <span className="text-red-500 font-bold">☠️ [Headshot]</span>
                    <span className="text-zinc-500 line-through">Bot_Rival_99</span>
                  </div>
                </div>
              </div>

              {/* Result Preview Box */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-zinc-500 block mb-1">Vista previa en Free Fire:</span>
                  <span className="text-xl font-bold text-violet-300 tracking-wide break-all">
                    {ffTag ? `${ffTag}ㅤ${ffName}` : ffName}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyTrending(ffTag ? `${ffTag}ㅤ${ffName}` : ffName)}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-violet-500/20 active:scale-95 transition-all text-sm whitespace-nowrap w-full sm:w-auto justify-center"
                >
                  <Copy className="w-4 h-4" />
                  Copiar Nombre con Espacio
                </button>
              </div>
            </div>

            {/* Color HEX Codes for FF Signature & Chat */}
            <div className="mt-8 bg-zinc-900/90 border border-white/10 rounded-2xl p-6 relative z-10 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                🎨 Códigos de Colores HEX para Chat y Firma en Free Fire
              </h3>
              <p className="text-xs text-zinc-400">
                Pega estos códigos entre corchetes antes de tu nombre en la firma o chat del juego para cambiar su color (Ejemplo: <code className="text-amber-300">[FF0000]MiNombre</code> para texto rojo):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { color: 'Rojo Fuego', hex: '[FF0000]', bg: 'bg-red-500/20 text-red-300 border-red-500/30' },
                  { color: 'Amarillo Dorado', hex: '[FFFF00]', bg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
                  { color: 'Verde Neón', hex: '[00FF00]', bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
                  { color: 'Azul Celeste', hex: '[00FFFF]', bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
                  { color: 'Rosa Neón', hex: '[FF00FF]', bg: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
                  { color: 'Naranja Épico', hex: '[FF8800]', bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopyTrending(`${item.hex}${ffName}`)}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all active:scale-95 hover:brightness-125 ${item.bg}`}
                  >
                    <span className="text-[10px] font-semibold">{item.color}</span>
                    <span className="font-mono text-xs font-bold">{item.hex}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          )}

    </div>
  );
}
