import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface FootballToolProps {
  handleCopyTrending: (text: string) => void;
}

export default function FootballTool({ handleCopyTrending }: FootballToolProps) {
  const [teamPrefix, setTeamPrefix] = useState('Real');
  const [teamBase, setTeamBase] = useState('');
  const [teamMascot, setTeamMascot] = useState('🦅');
  const [teamKitColor, setTeamKitColor] = useState('🔴🔵 Azulgrana');
  const [teamSlogan, setTeamSlogan] = useState('Unidos por la Gloria y el Balón');
  const [teamCategoryTab, setTeamCategoryTab] = useState('Graciosos 🍺');

  return (
    <div className="max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-amber-500/20 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-amber-950/20 via-[#121212] to-emerald-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              ⚽ Creador e Identidad Deportiva Completa
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
              Generador de Nombres, Escudo, Kit y Eslogan para Equipos
            </h2>
            <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
              Crea la identidad de tu equipo para torneos de barrio (Fútbol 5/7), ligas aficionadas o clanes de eSports / FIFA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-zinc-900/90 border border-white/10 rounded-2xl p-6">
          {/* Form Controls */}
          <div className="space-y-4 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-zinc-400 block mb-2">Prefijo Deportivo / Estilo:</label>
                <select aria-label="Seleccionar opción" value={teamPrefix}
                  onChange={(e) => setTeamPrefix(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm font-semibold"
                >
                  {['Real', 'Atlético', 'Inter', 'Deportivo', 'Sporting', 'FC', 'Los', 'Club', 'Rayo', 'Vodka', 'Aston', 'Nottingham', 'Espartanos'].map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre / Barrio / Cerveza:</label>
                <input
                  type="text"
                  value={teamBase}
                  onChange={(e) => setTeamBase(e.target.value)}
                  placeholder="Tapitas, Titan, Barrio..."
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm font-bold"
                />
              </div>
            </div>

            {/* Mascots */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 block mb-2">Emblema o Mascota:</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: '🦅', label: 'Águilas' },
                  { icon: '🦁', label: 'Leones' },
                  { icon: '⚡', label: 'Rayos' },
                  { icon: '⚔️', label: 'Gladiadores' },
                  { icon: '🐺', label: 'Lobos' },
                  { icon: '🍺', label: 'Birras' },
                  { icon: '👑', label: 'Reinas' },
                  { icon: '🐂', label: 'Toros' }
                ].map(m => (
                  <button
                    key={m.label}
                    onClick={() => setTeamMascot(m.icon)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                      teamMascot === m.icon
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                        : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                    }`}
                  >
                    <span>{m.icon}</span> <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Uniform Kit Color */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 block mb-2">Colores de la Camiseta (Uniforme):</label>
              <div className="flex flex-wrap gap-2">
                {['🔴🔵 Azulgrana', '⚪🔴 Banda Roja', '🟡🔵 Azul y Oro', '🟢⚪ Verdiblanco', '🖤🔴 Rojinegro', '💜⚪ Morado'].map(color => (
                  <button
                    key={color}
                    onClick={() => setTeamKitColor(color)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                      teamKitColor === color
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Slogan */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 block mb-2">Eslogan del Equipo:</label>
              <input
                type="text"
                value={teamSlogan}
                onChange={(e) => setTeamSlogan(e.target.value)}
                placeholder="Unidos por la Gloria..."
                className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 text-xs italic"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {[
                  'Unidos por la Gloria y el Balón',
                  'En la cancha se deja el corazón',
                  'Nuestra pasión no se negocia',
                  'La gambeta es nuestro estilo'
                ].map(s => (
                  <button
                    key={s}
                    onClick={() => setTeamSlogan(s)}
                    className="text-[10px] text-zinc-400 bg-zinc-800/80 hover:text-amber-300 px-2.5 py-1 rounded-lg border border-white/5"
                  >
                    "{s}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-gradient-to-b from-amber-950/40 via-zinc-950 to-zinc-950 border border-amber-500/30 rounded-2xl p-6 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-xl">
            <div className="w-full">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-4xl mb-3 shadow-lg shadow-amber-500/10">
                {teamMascot}
              </div>
              <div className="text-xs text-amber-400 font-extrabold uppercase tracking-widest mb-1">
                {teamPrefix}
              </div>
              <div className="text-2xl font-black text-white font-heading tracking-tight mb-2">
                {teamBase || 'Equipo'}
              </div>
              <div className="text-xs text-zinc-400 italic mb-4 px-2">
                "{teamSlogan}"
              </div>

              <div className="bg-zinc-900/90 border border-white/5 rounded-xl p-3 text-xs text-left mb-4 space-y-1">
                <div className="flex justify-between text-zinc-400">
                  <span>Uniforme:</span> <span className="text-amber-300 font-bold">{teamKitColor}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Categoría:</span> <span className="text-white font-medium">Torneo / Amigos</span>
                </div>
              </div>
            </div>

            <div className="w-full space-y-2">
              <button
                onClick={() => handleCopyTrending(`${teamMascot} ${teamPrefix} ${teamBase || 'Equipo'}`)}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
              >
                <Copy className="w-4 h-4" /> Copiar Nombre Oficial
              </button>
              <button
                onClick={() => handleCopyTrending(`⚽ EQUIPO: ${teamMascot} ${teamPrefix} ${teamBase || 'Equipo'}\n🎨 Colores: ${teamKitColor}\n💬 Eslogan: "${teamSlogan}"`)}
                className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
              >
                <Copy className="w-3 h-3" /> Copiar Ficha Completa
              </button>
            </div>
          </div>
        </div>

        {/* Categorized Name Library */}
        <div className="mt-8 pt-8 border-t border-amber-500/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <span>🏆</span> Ideas Famosas de Nombres para Equipos por Estilo
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Explora listas seleccionadas según el tipo de torneo o liga.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Graciosos 🍺', 'Épicos ⚡', 'Femenino 👑', 'Barrio ⚽'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setTeamCategoryTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    teamCategoryTab === tab
                      ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {({
              'Graciosos 🍺': [
                { name: 'Vodka Juniors', note: 'Parodia de Boca Juniors' },
                { name: 'Aston Birra', note: 'Inspirado en Aston Villa' },
                { name: 'Inter de Mitad', note: 'Comedia de Inter de Milán' },
                { name: 'Real Cohólicos', note: 'Homenaje humorístico al Real Madrid' },
                { name: 'Nottingham Miedo', note: 'Inspirado en Nottingham Forest' },
                { name: 'Deportivo Tapita', note: 'Para ligas relámpago' },
                { name: 'Alcohol Club FC', note: 'Clásico de torneos' },
                { name: 'Pura Sangre de Bar', note: 'Amigos del fin de semana' }
              ],
              'Épicos ⚡': [
                { name: 'Gladiadores del Norte', note: 'Imponente e intimidante' },
                { name: 'Furia Titán FC', note: 'Gran presencia física' },
                { name: 'Rayos de Fuego', note: 'Velocidad y fuerza' },
                { name: 'Espartanos del Balón', note: 'Espíritu guerrero' },
                { name: 'Guerreros Aztecas', note: 'Identidad y orgullo' },
                { name: 'Reyes de la Cancha', note: 'Dominio total' },
                { name: 'Toros Negros FC', note: 'Fuerza implacable' },
                { name: 'Titanes Dorados', note: 'Espíritu de campeones' }
              ],
              'Femenino 👑': [
                { name: 'Las Reinas del Balón', note: 'Elegancia y técnica' },
                { name: 'Valkirias FC', note: 'Guerreras invencibles' },
                { name: 'Las Galácticas del Barrio', note: 'Talento puro' },
                { name: 'Chicas Súper Poderosas', note: 'Diversión y victoria' },
                { name: 'Poder Femenino FC', note: 'Orgullo deportivo' },
                { name: 'Águilas Doradas Femenil', note: 'Vuelo alto en la tabla' },
                { name: 'Estrellas del Césped', note: 'Brillo y agilidad' },
                { name: 'Amazonas FC', note: 'Garra y trabajo en equipo' }
              ],
              'Barrio ⚽': [
                { name: 'La Banda del 10', note: 'Fútbol 5 de calle' },
                { name: 'Los Crack del Callejón', note: 'Magia de barrio' },
                { name: 'Pelota de Trapo', note: 'Tradición y potrero' },
                { name: 'Deportivo Quinta', note: 'Compañeros de siempre' },
                { name: 'La Gambeta FC', note: 'Habilidad y regate' },
                { name: 'Potrero Sagrado', note: 'Pasión popular' },
                { name: 'Relámpagos del Barrio', note: 'Contraataque veloz' },
                { name: 'Los Pibes del Parque', note: 'Fútbol 7 con amigos' }
              ]
            }[teamCategoryTab] || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-white/5 hover:border-amber-500/30 rounded-xl p-3.5 flex flex-col justify-between gap-2 transition-all group"
              >
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors font-heading">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{item.note}</p>
                </div>
                <button
                  onClick={() => handleCopyTrending(item.name)}
                  className="w-full py-1.5 bg-zinc-800 hover:bg-amber-500/20 text-amber-300 rounded-lg text-[11px] font-semibold transition-all border border-white/5 flex items-center justify-center gap-1 mt-1"
                >
                  <Copy className="w-3 h-3" /> Copiar Nombre
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
