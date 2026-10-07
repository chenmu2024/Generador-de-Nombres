'use client';
import { speakName } from '../utils/speech';

import { normalizeSearch, visibleLength } from '../utils/text';
import { readFavorites, writeStorage } from '../utils/browserStorage';
import { alphabetNames } from '../data/nameIdeas';
import { copyText } from '../utils/clipboard';
import React, { useState, useEffect } from 'react';
import { Link } from './Link';
import { Search, Volume2, Copy, CheckCircle2, Sparkles, Filter, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function AlphabetMatrixTool({ currentLetter = 'A' }: { currentLetter?: string }) {
  const [selectedLetter, setSelectedLetter] = useState(currentLetter.toUpperCase());
  useEffect(() => { setSelectedLetter(currentLetter.toUpperCase()); setSearchTerm(''); }, [currentLetter]);
  const [genderFilter, setGenderFilter] = useState<'all' | 'f' | 'm' | 'u'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [lengthFilter, setLengthFilter] = useState<'all' | 'short' | 'long'>('all');
  const [sortBy, setSortBy] = useState<'az' | 'length'>('az');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    sync();
    window.addEventListener('gdn_favorites_updated', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('gdn_favorites_updated', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const speak = (text: string) => speakName(text, 'es-ES');

  const currentNames = alphabetNames[selectedLetter] || [];

  const filteredNames = currentNames.filter(n => {
    const matchesGender = genderFilter === 'all' || n.gender === genderFilter;
    const matchesSearch = normalizeSearch(n.name).includes(normalizeSearch(searchTerm));
    const nameLength = visibleLength(n.name);
    const matchesLength = lengthFilter === 'all' || (lengthFilter === 'short' ? nameLength <= 4 : nameLength >= 5);
    return matchesGender && matchesSearch && matchesLength;
  }).sort((a, b) =>
    sortBy === 'length'
      ? visibleLength(a.name) - visibleLength(b.name) || a.name.localeCompare(b.name, 'es')
      : a.name.localeCompare(b.name, 'es')
  );

  const copyVisible = async () => {
    if (!filteredNames.length) return;
    if (await copyText(filteredNames.map(item => item.name).join('\n'))) {
      setFeedback(`${filteredNames.length} nombres copiados.`);
    }
  };

  const toggleFavorite = (name: string) => {
    const existing = readFavorites();
    const next = existing.includes(name) ? existing.filter(item => item !== name) : [name, ...existing];
    setFavorites(next);
    const persisted = writeStorage('gdn_favorites', JSON.stringify(next));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
    setFeedback(persisted ? 'Favoritos actualizados.' : 'Favoritos guardados solo durante esta sesión.');
  };

  const copyName = async (name: string) => {
    if (!await copyText(name)) return;
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="gdn-tool-shell w-full max-w-4xl mx-auto space-y-8">
      {selectedLetter === "Ñ" && <p role="status" className="text-sm text-zinc-300">Estos nombres contienen Ñ. No se presentan como nombres que empiezan por Ñ.</p>}
      {/* Alphabet Pill Selector */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-[2rem] p-6 shadow-2xl">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Selecciona la inicial del nombre</span>
          <span className="text-violet-400">Abecedario A-Z</span>
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {ALPHABET.map((letter) => {
            const isSelected = selectedLetter === letter;
            return (
              <button
                key={letter}
                aria-pressed={isSelected}
                onClick={() => setSelectedLetter(letter)}
                className={`gdn-tool-tab w-10 h-10 rounded-xl font-black text-sm transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 border border-white/20'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-zinc-900/50 border border-white/5 rounded-2xl p-4">
        <div className="relative w-full sm:w-auto flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            aria-label="Buscar nombres"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Buscar nombres con ${selectedLetter}...`}
            className="gdn-tool-input w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-white/5 w-full sm:w-auto justify-center">
          <button
            onClick={() => setGenderFilter('all')}
            aria-pressed={genderFilter === 'all'}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'all' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setGenderFilter('f')}
            aria-pressed={genderFilter === 'f'}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'f' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Femeninos 🌸
          </button>
          <button
            onClick={() => setGenderFilter('m')}
            aria-pressed={genderFilter === 'm'}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'm' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Masculinos ⚡
          </button>
          <button
            type="button"
            onClick={() => setGenderFilter('u')}
            aria-pressed={genderFilter === 'u'}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${genderFilter === 'u' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-zinc-400 hover:text-white'}`}
          >
            Unisex
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 gdn-surface-raised border rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm text-zinc-300">Longitud
            <select aria-label="Filtrar por longitud" className="gdn-input border rounded-lg p-2 ml-2" value={lengthFilter} onChange={event => setLengthFilter(event.target.value as 'all' | 'short' | 'long')}>
              <option value="all">Todas</option><option value="short">Hasta 4 letras</option><option value="long">5 o más letras</option>
            </select>
          </label>
          <label className="text-sm text-zinc-300">Orden
            <select aria-label="Ordenar nombres" className="gdn-input border rounded-lg p-2 ml-2" value={sortBy} onChange={event => setSortBy(event.target.value as 'az' | 'length')}>
              <option value="az">A → Z</option><option value="length">Por longitud</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span role="status" className="text-xs text-zinc-300">{filteredNames.length} de {currentNames.length} nombres</span>
          <button type="button" disabled={!filteredNames.length} onClick={() => void copyVisible()} className="gdn-chip border px-3 py-2 text-xs rounded-xl flex items-center gap-2 disabled:opacity-50">
            <Copy className="w-4 h-4" aria-hidden="true" /> Copiar resultados
          </button>
        </div>
      </div>
      <p className="text-xs text-zinc-400">Las etiquetas femenino, masculino y unisex son orientativas; el uso real de un nombre depende de la persona y el contexto.</p>
      {feedback && <p role="status" className="text-sm text-emerald-300">{feedback}</p>}
      {filteredNames.length === 0 && <p role="status" className="text-sm text-amber-200">No hay resultados. Prueba otra letra o ajusta los filtros.</p>}

      {/* Names Grid */}
      <div className="gdn-tool-result grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {filteredNames.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/80 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all flex items-center justify-between gap-4 group"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-white font-heading">{item.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  item.gender === 'f' ? 'bg-pink-500/20 text-pink-300' : item.gender === 'm' ? 'bg-blue-500/20 text-blue-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {item.gender === 'f' ? 'Mujer' : item.gender === 'm' ? 'Hombre' : 'Unisex'}
                </span>
              </div>
              <a className="text-xs text-violet-300 underline" href={`https://www.behindthename.com/names/search?terms=${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer">Consultar nombre y variantes</a>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => speak(item.name)}
                className="p-2 bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 hover:text-violet-300 rounded-xl transition-colors"
                title="Lectura aproximada con la voz del dispositivo" aria-label="Escuchar lectura aproximada"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => toggleFavorite(item.name)}
                className="p-2 bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 rounded-xl transition-colors"
                aria-label={`${favorites.includes(item.name) ? 'Quitar de favoritos' : 'Guardar favorito'}: ${item.name}`}
                aria-pressed={favorites.includes(item.name)}
                title="Guardar favorito"
              >
                <Bookmark className={`w-4 h-4 ${favorites.includes(item.name) ? 'text-emerald-300 fill-emerald-500/30' : ''}`} aria-hidden="true" />
              </button>
              <button
                onClick={() => copyName(item.name)}
                className={`p-2 rounded-xl transition-colors border ${
                  copiedName === item.name
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 hover:text-violet-300 border-white/5'
                }`}
                title="Copiar nombre"
              >
                {copiedName === item.name ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
