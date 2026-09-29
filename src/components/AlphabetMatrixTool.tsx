'use client';

import React, { useState } from 'react';
import { Link } from './Link';
import { Search, Volume2, Copy, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const SAMPLE_NAMES_DATABASE: Record<string, Array<{ name: string; origin: string; meaning: string; gender: 'f' | 'm' | 'u' }>> = {
  A: [
    { name: 'Alexander', origin: 'Griego', meaning: 'Protector de la humanidad', gender: 'm' },
    { name: 'Amelia', origin: 'Germánico', meaning: 'Trabajadora y abnegada', gender: 'f' },
    { name: 'Aitana', origin: 'Vasco / Árabe', meaning: 'Gloria o montaña fuerte', gender: 'f' },
    { name: 'Alex', origin: 'Unisex', meaning: 'Defensor noble', gender: 'u' },
    { name: 'Agustín', origin: 'Latín', meaning: 'Venerable y augusto', gender: 'm' },
  ],
  B: [
    { name: 'Bruno', origin: 'Germánico', meaning: 'El de piel o cabello oscuro', gender: 'm' },
    { name: 'Bella', origin: 'Italiano', meaning: 'Hermosa y radiante', gender: 'f' },
    { name: 'Benjamín', origin: 'Hebreo', meaning: 'Hijo preferido o de la mano derecha', gender: 'm' },
    { name: 'Bárbara', origin: 'Griego', meaning: 'Extranjera y singular', gender: 'f' },
  ],
  C: [
    { name: 'Camila', origin: 'Latín', meaning: 'Aquella que ofrece sacrificios y elegancia', gender: 'f' },
    { name: 'Carlos', origin: 'Germánico', meaning: 'Hombre fuerte y libre', gender: 'm' },
    { name: 'Chloe', origin: 'Griego', meaning: 'Brote verde que florece', gender: 'f' },
    { name: 'Cristian', origin: 'Latín', meaning: 'Seguidor de Cristo', gender: 'm' },
  ],
  E: [
    { name: 'Enzo', origin: 'Italiano', meaning: 'Señor de su hogar', gender: 'm' },
    { name: 'Elena', origin: 'Griego', meaning: 'Luz resplandeciente', gender: 'f' },
    { name: 'Emma', origin: 'Germánico', meaning: 'Fuerte y universal', gender: 'f' },
    { name: 'Emanuel', origin: 'Hebreo', meaning: 'Dios está con nosotros', gender: 'm' },
  ],
  F: [
    { name: 'Fernando', origin: 'Germánico', meaning: 'Osado en la paz y la victoria', gender: 'm' },
    { name: 'Fiorella', origin: 'Italiano', meaning: 'Flor pequeña y delicada', gender: 'f' },
    { name: 'Frida', origin: 'Germánico', meaning: 'Princesa de la paz', gender: 'f' },
    { name: 'Félix', origin: 'Latín', meaning: 'Afortunado y dichoso', gender: 'm' },
  ],
  M: [
    { name: 'Mateo', origin: 'Hebreo', meaning: 'Regalo o don de Dios', gender: 'm' },
    { name: 'Mía', origin: 'Hebreo / Italiano', meaning: 'La elegida o mía querida', gender: 'f' },
    { name: 'Martín', origin: 'Latín', meaning: 'Guerrero consagrado a Marte', gender: 'm' },
    { name: 'Milena', origin: 'Eslavo', meaning: 'Amorosa y llena de gracia', gender: 'f' },
  ],
  "Ñ": [
    { name: 'Iñigo', origin: 'Vasco', meaning: 'Ardiente como el fuego', gender: 'm' },
    { name: 'Begoña', origin: 'Vasco', meaning: 'Lugar sobre el cerro sagrado', gender: 'f' },
    { name: 'Toño', origin: 'Español', meaning: 'Inestimable y valioso', gender: 'm' },
  ],
  Y: [
    { name: 'Yaretzi', origin: 'Maya', meaning: 'Siempre serás amada', gender: 'f' },
    { name: 'Yuri', origin: 'Ruso / Griego', meaning: 'Trabajador de la tierra', gender: 'u' },
    { name: 'Yaritza', origin: 'Árabe', meaning: 'Flor de agua dulce', gender: 'f' },
  ],
  Z: [
    { name: 'Zeus', origin: 'Griego', meaning: 'Dios supremo del cielo y la luz', gender: 'm' },
    { name: 'Zoey', origin: 'Griego', meaning: 'Llena de vida y vitalidad', gender: 'f' },
    { name: 'Zaid', origin: 'Árabe', meaning: 'Crecimiento y abundancia', gender: 'm' },
    { name: 'Zahara', origin: 'Árabe', meaning: 'Flor brillante y esplendorosa', gender: 'f' },
  ]
};

export default function AlphabetMatrixTool({ currentLetter = 'A' }: { currentLetter?: string }) {
  const [selectedLetter, setSelectedLetter] = useState(currentLetter.toUpperCase());
  const [genderFilter, setGenderFilter] = useState<'all' | 'f' | 'm' | 'u'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentNames = SAMPLE_NAMES_DATABASE[selectedLetter] || [
    { name: `${selectedLetter}lberto`, origin: 'Germánico', meaning: 'Ilustre y de noble linaje', gender: 'm' as const },
    { name: `${selectedLetter}licia`, origin: 'Griego', meaning: 'Verdadera y noble', gender: 'f' as const },
    { name: `${selectedLetter}ndrés`, origin: 'Griego', meaning: 'Valiente y varonil', gender: 'm' as const },
  ];

  const filteredNames = currentNames.filter(n => {
    const matchesGender = genderFilter === 'all' || n.gender === genderFilter;
    const matchesSearch = n.name.toLowerCase().includes(searchTerm.toLowerCase()) || n.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGender && matchesSearch;
  });

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="gdn-tool-shell w-full max-w-4xl mx-auto space-y-8">
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
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Buscar nombres con ${selectedLetter}...`}
            className="gdn-tool-input w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-white/5 w-full sm:w-auto justify-center">
          <button
            onClick={() => setGenderFilter('all')}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'all' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setGenderFilter('f')}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'f' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Femeninos 🌸
          </button>
          <button
            onClick={() => setGenderFilter('m')}
            className={`gdn-tool-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              genderFilter === 'm' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Masculinos ⚡
          </button>
        </div>
      </div>

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
              <p className="text-xs text-zinc-400 leading-snug">{item.meaning}</p>
              <span className="text-[10px] text-zinc-500 mt-1 block">Origen: {item.origin}</span>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => speak(item.name)}
                className="p-2 bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 hover:text-violet-300 rounded-xl transition-colors"
                title="Escuchar la pronunciación"
              >
                <Volume2 className="w-4 h-4" />
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
