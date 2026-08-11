import React, { useState, useRef, useEffect } from 'react';
import { Copy, Wand2, X, CheckCircle2, Dices, Loader2, Download, Sparkles, CheckSquare, Square, Trophy, Shield, Flame, Image, Share2, Scissors, Zap, Crown, Bookmark, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateFancyNicknames, popularSymbols } from '../utils/nameLogic';

interface GeneratorProps {
  title: string;
  defaultName?: string;
  customSymbols?: string[];
}

const randomNames = ["Ninja", "Shadow", "Killer", "Pro", "Ghost", "Sniper", "King", "Queen", "Legend", "Alpha"];

// Rarity calculation helper
function getRarityTier(name: string) {
  if (/[꧁꧂☠️⚔️👑⚡🔥☣️🖤]/.test(name) || name.length > 14) {
    return { label: 'MÍTICO 👑', bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' };
  }
  if (/[✿♡✧★✦☆]/.test(name) || name.length > 10) {
    return { label: 'LEGENDARIO 💎', bg: 'bg-violet-500/10 text-violet-300 border-violet-500/30' };
  }
  return { label: 'ÉPICO ⚡', bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' };
}

// Auto-trim helper for Free Fire limit (<= 12 chars)
function autoTrimFF(name: string): string {
  if (name.length <= 12) return name;
  // If wrapped with symbols like "꧁...꧂" or "⚡...⚡"
  return name.slice(0, 12);
}

export default function Generator({ title, defaultName = 'Gamer', customSymbols }: GeneratorProps) {
  const [inputText, setInputText] = useState('');
  const [style, setStyle] = useState('all');
  const [vibeFilter, setVibeFilter] = useState<'all' | 'epico' | 'aesthetic' | 'short' | 'toxic'>('all');
  const [generatedNames, setGeneratedNames] = useState<string[]>(() => 
    generateFancyNicknames(defaultName, 'all', customSymbols)
  );
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('¡Copiado al portapapeles!');
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Spinner Roulette state
  const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinnerResult, setSpinnerResult] = useState<string | null>(null);

  // Favorites State
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('gdn_favorites');
      if (stored) setFavorites(JSON.parse(stored));
    } catch(e) {
      console.error(e);
    }
  }, []);

  const toggleFavorite = (nameToFav: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (favorites.includes(nameToFav)) {
      updated = favorites.filter(f => f !== nameToFav);
      setToastMessage('Eliminado de favoritos');
    } else {
      updated = [nameToFav, ...favorites];
      setToastMessage('❤️ ¡Guardado en favoritos!');
    }
    setFavorites(updated);
    localStorage.setItem('gdn_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };
  // Gamer Card Modal State
  const [cardModalName, setCardModalName] = useState<string | null>(null);
  const [isExportingCard, setIsExportingCard] = useState(false);
  const gamerCardRef = useRef<HTMLDivElement>(null);

  const symbolsToUse = customSymbols || popularSymbols;

  React.useEffect(() => {
    // Generate names when the component mounts or category changes, now also updates live as user types
    const names = generateFancyNicknames(inputText || defaultName, style, customSymbols);
    setGeneratedNames(names);
    setSelectedNames([]);
  }, [inputText, defaultName, style, customSymbols]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const textToGenerate = inputText.trim() || defaultName;
      const names = generateFancyNicknames(textToGenerate, style, customSymbols);
      setGeneratedNames(names);
      setSelectedNames([]);
      setCopiedIndex(null);
      setIsGenerating(false);
    }, 400);
  };

  const handleRandomize = () => {
    const random = randomNames[Math.floor(Math.random() * randomNames.length)];
    setInputText(random);
    setGeneratedNames(generateFancyNicknames(random, style, customSymbols));
    setSelectedNames([]);
    setCopiedIndex(null);
  };

  const copyToClipboard = (text: string, index: number | null, customMsg?: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setToastMessage(customMsg || '¡Copiado al portapapeles!');
    setShowToast(true);
    
    // Add to history if not already the most recent
    setHistory(prev => {
      const newHistory = prev.filter(item => item !== text);
      return [text, ...newHistory].slice(0, 10);
    });

    setTimeout(() => {
      setCopiedIndex(null);
      setShowToast(false);
    }, 2000);
  };

  // Selection logic
  const toggleSelectName = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNames(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const toggleSelectAll = () => {
    if (selectedNames.length === generatedNames.length) {
      setSelectedNames([]);
    } else {
      setSelectedNames([...generatedNames]);
    }
  };

  const copySelected = () => {
    if (selectedNames.length === 0) return;
    const textToCopy = selectedNames.join('\n');
    copyToClipboard(textToCopy, null, `¡${selectedNames.length} nombres copiados!`);
  };

  const exportSelectedTXT = () => {
    const listToExport = selectedNames.length > 0 ? selectedNames : generatedNames;
    if (listToExport.length === 0) return;
    
    const blob = new Blob([listToExport.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nombres_${title.replace(/\s+/g, '_')}_2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Roulette Spin logic
  const startSpin = () => {
    if (generatedNames.length === 0) return;
    setIsSpinning(true);
    setSpinnerResult(null);

    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * generatedNames.length);
      setSpinnerResult(generatedNames[randomIndex]);
      counter++;
      if (counter > 25) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  const appendSymbol = (symbol: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      const newText = inputText.slice(0, start) + symbol + inputText.slice(end);
      setInputText(newText);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(start + symbol.length, start + symbol.length);
        }
      }, 0);
    } else {
      setInputText(prev => prev + symbol);
    }
  };

  // Export Gamer Card as PNG
  const handleExportGamerCard = async () => {
    if (!gamerCardRef.current) return;
    try {
      setIsExportingCard(true);
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(gamerCardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#09090b',
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Tarjeta_Gamer_${cardModalName || 'Nick'}.png`;
      link.click();
    } catch (err) {
      console.error('Error al exportar Tarjeta Gamer:', err);
    } finally {
      setIsExportingCard(false);
    }
  };

  // Filter generated names according to Vibe
  const displayedNames = generatedNames.filter(name => {
    if (vibeFilter === 'short') return name.length <= 12;
    if (vibeFilter === 'epico') return /[꧁꧂⚔️👑⚡🔥]/.test(name) || name.includes('Pro') || name.includes('King');
    if (vibeFilter === 'aesthetic') return /[✿♡✧★✦☆]/.test(name) || name.includes('ë') || name.includes('𝓔');
    if (vibeFilter === 'toxic') return /[☠️☣️🖤😈✞]/.test(name) || name.includes('Killer') || name.includes('Shadow');
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#121212] rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden border border-white/10 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 font-medium text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative p-8 md:p-12 text-center overflow-hidden bg-gradient-to-br from-[#1a1525] to-[#121212] border-b border-white/5">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-violet-600 rounded-full blur-[100px]"></div>
          <div className="absolute top-12 -right-12 w-64 h-64 bg-fuchsia-600 rounded-full blur-[100px]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10 font-heading">{title}</h2>
        <p className="text-zinc-400 relative z-10 max-w-lg mx-auto">Crea apodos únicos en segundos con símbolos épicos y exporta con un clic</p>
      </div>
      
      <div className="p-6 md:p-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-1 w-full">
            <div className="flex-1 flex relative w-full group">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder={`Escribe tu nombre (ej. ${defaultName})`}
                className="flex-1 px-5 py-4 pr-24 text-lg bg-zinc-900/50 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-violet-500 focus:bg-zinc-900 text-white placeholder-zinc-500 transition-all w-full"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {inputText && (
                  <button
                    onClick={() => {
                      setInputText('');
                      setGeneratedNames(generateFancyNicknames(defaultName, style, customSymbols));
                    }}
                    className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                    title="Borrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={handleRandomize}
                  className="p-2 text-violet-400 hover:text-violet-300 hover:bg-violet-500/20 rounded-xl transition-colors"
                  title="Nombre aleatorio"
                >
                  <Dices className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="text-right mt-2 px-2">
              <span className={`text-xs font-medium ${inputText.length > 12 ? 'text-amber-500' : 'text-zinc-500'}`}>
                {inputText.length} caracteres {inputText.length > 12 ? '(Excede límite de Free Fire)' : ''}
              </span>
            </div>
          </div>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            aria-label="Seleccionar estilo de letras y tipografía"
            className="px-5 py-4 text-lg bg-zinc-900/50 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-violet-500 text-white appearance-none cursor-pointer w-full md:w-auto min-w-[200px]"
          >
            <option value="all">Todos los estilos</option>
            <option value="fancy">Letras Fancy (𝓔)</option>
            <option value="gothic">Letras Góticas (ë)</option>
            <option value="circles">Círculos (ⓔ)</option>
            <option value="squares">Cuadrados (🄴)</option>
            <option value="bold">Negrita (𝗲)</option>
            <option value="italic">Cursiva (𝘢)</option>
            <option value="boldItalic">Negrita Cursiva (𝙖)</option>
            <option value="monospace">Monocromo (𝚊)</option>
            <option value="smallCaps">Versalitas (ᴀ)</option>
            <option value="glitch">Glitch (a̷)</option>
            <option value="strikethrough">Tachado (a̶)</option>
            <option value="underline">Subrayado (a̲)</option>
            <option value="inverted">Invertido (ɐ)</option>
            <option value="tiny">Miniatura (ᵃ)</option>
            <option value="asian">Letras Asiáticas (卂)</option>
            <option value="wide">Ancho (ａ)</option>
            <option value="bubbleBlack">Burbuja Negra (🅐)</option>
            <option value="fraktur">Gótico Fraktur (𝔞)</option>
            <option value="frakturBold">Fraktur Bold (𝖆)</option>
            <option value="doubleStruck">Doble Trazo (𝕒)</option>
            <option value="script">Script (𝒶)</option>
            <option value="sansSerif">Sans Serif (𝖺)</option>
            <option value="currency">Moneda (₳)</option>
            <option value="magic">Mágico (ค)</option>
            <option value="kawaii">Kawaii (α)</option>
            <option value="hacker">Hacker (4)</option>
            <option value="cursive">Cursiva 2 (𝓪)</option>
            <option value="brackets">Corchetes (【a】)</option>
            <option value="subscript">Subíndice (ₐ)</option>
            <option value="greek">Griego (α)</option>
            <option value="cyrillic">Cirílico (а)</option>
            <option value="medieval">Medieval (𝔄)</option>
            <option value="heavyCircles">Círculos Oscuros (🅐)</option>
            <option value="blackSquares">Cuadrados Negros (🅰)</option>
            <option value="creepy">Creepy (a̸)</option>
            <option value="stars">Estrellas (a★)</option>
            <option value="hearts">Corazones (a♥)</option>
            <option value="cross">Cruces (a†)</option>
            <option value="birds">Aves (aʚ)</option>
          </select>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 text-white font-bold font-heading rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 min-w-[160px] w-full md:w-auto"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Wand2 className="w-5 h-5" />
            )}
            <span>{isGenerating ? 'GENERANDO...' : 'GENERAR'}</span>
          </button>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            Símbolos Rápidos <span className="text-xs font-normal normal-case text-zinc-600">(Clic para agregar)</span>
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {symbolsToUse.map((sym, i) => (
              <button
                key={i}
                onClick={() => appendSymbol(sym)}
                className="px-4 py-3 bg-zinc-900/50 hover:bg-violet-500/20 hover:text-violet-300 border border-white/5 hover:border-violet-500/30 rounded-xl text-lg md:text-xl transition-all shadow-sm active:scale-95 text-zinc-300"
              >
                {sym}
              </button>
            ))}
          </div>
        </div>

        {generatedNames.length > 0 ? (
          <div>
            {/* Vibe / Mood Quick Filters */}
            <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-zinc-500 font-bold shrink-0">Filtrar Estilo:</span>
              {[
                { id: 'all', label: '🌟 Todos', color: 'bg-white/10 hover:bg-white/20 text-white' },
                { id: 'epico', label: '⚔️ Épico / Pro', color: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30' },
                { id: 'aesthetic', label: '🌸 Aesthetic', color: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border-pink-500/30' },
                { id: 'short', label: '⚡ Cortos (≤12 FF)', color: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
                { id: 'toxic', label: '☠️ Tóxico', color: 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border-violet-500/30' },
              ].map((vibe) => (
                <button
                  key={vibe.id}
                  onClick={() => setVibeFilter(vibe.id as any)}
                  className={`shrink-0 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    vibeFilter === vibe.id
                      ? 'bg-violet-600 text-white border-violet-400 shadow-md shadow-violet-500/20'
                      : vibe.color + ' border-white/5'
                  }`}
                >
                  {vibe.label}
                </button>
              ))}
            </div>

            {/* Toolbar for Selection & Spinner */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSelectAll}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-white/5 transition-all"
                >
                  {selectedNames.length === displayedNames.length ? (
                    <>
                      <CheckSquare className="w-4 h-4 text-violet-400" /> Desseleccionar Todo
                    </>
                  ) : (
                    <>
                      <Square className="w-4 h-4 text-zinc-400" /> Seleccionar Todo ({displayedNames.length})
                    </>
                  )}
                </button>

                {selectedNames.length > 0 && (
                  <span className="text-xs text-violet-400 font-bold bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-xl">
                    {selectedNames.length} Elegidos
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {selectedNames.length > 0 && (
                  <button
                    onClick={copySelected}
                    className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copiar Seleccionados
                  </button>
                )}

                <button
                  onClick={exportSelectedTXT}
                  className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                  title="Descargar lista como TXT"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" /> Descargar TXT
                </button>

                <button
                  onClick={() => {
                    setIsSpinnerOpen(true);
                    startSpin();
                  }}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
                >
                  <Trophy className="w-3.5 h-3.5" /> Ruleta de la Suerte
                </button>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.02 }
                }
              }}
            >
              {displayedNames.map((name, index) => {
                const isSelected = selectedNames.includes(name);
                const rarity = getRarityTier(name);
                const isExceedFF = name.length > 12;

                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    onClick={() => copyToClipboard(name, index)}
                    className={`group flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/10'
                        : 'border-white/5 bg-zinc-900/30 hover:bg-violet-500/10 hover:border-violet-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 pr-2 min-w-0">
                      <button
                        onClick={(e) => toggleSelectName(name, e)}
                        className="p-1 text-zinc-500 hover:text-violet-400 transition-colors shrink-0"
                        title="Seleccionar para copiar en lote"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-5 h-5 text-violet-400" />
                        ) : (
                          <Square className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400" />
                        )}
                      </button>
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <span className="text-base sm:text-lg font-medium text-zinc-100 break-all">{name}</span>
                        
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${rarity.bg}`}>
                            {rarity.label}
                          </span>
                          <span className={`text-[10px] font-semibold tracking-wide ${isExceedFF ? 'text-amber-400' : 'text-zinc-500'}`}>
                            {name.length} CARACTERES {isExceedFF && '(>12 FF)'}
                          </span>

                          {isExceedFF && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const trimmed = autoTrimFF(name);
                                copyToClipboard(trimmed, index, '¡Nombre recortado ≤12 FF copiado!');
                              }}
                              className="text-[10px] bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded flex items-center gap-1 border border-amber-500/30 transition-all"
                              title="Recortar automáticamente a 12 caracteres"
                            >
                              <Scissors className="w-3 h-3" /> Ajustar ≤12
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => toggleFavorite(name, e)}
                        className={`p-2 rounded-xl border transition-all ${
                          favorites.includes(name)
                            ? 'bg-pink-500/20 text-pink-400 border-pink-500/40 shadow-sm'
                            : 'bg-zinc-800/80 hover:bg-pink-500/20 text-zinc-400 hover:text-pink-300 border-white/5'
                        }`}
                        title={favorites.includes(name) ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(name) ? 'fill-pink-500' : ''}`} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCardModalName(name);
                        }}
                        className="p-2 bg-zinc-800/80 hover:bg-violet-600/30 text-zinc-400 hover:text-violet-300 rounded-xl border border-white/5 transition-all"
                        title="Generar Tarjeta Gamer PNG"
                      >
                        <Image className="w-4 h-4" />
                      </button>

                      <button
                        className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors border ${
                          copiedIndex === index 
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                            : 'bg-zinc-800/50 text-zinc-400 border-white/5 group-hover:text-violet-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/20'
                        }`}
                      >
                        {copiedIndex === index ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-16 px-4 border-2 border-dashed border-white/10 rounded-3xl bg-zinc-900/20">
            <Wand2 className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-zinc-300 font-heading">No hay resultados</h3>
            <p className="text-zinc-500 mt-2">Escribe un nombre y haz clic en Generar para ver resultados increíbles.</p>
          </div>
        )}

        {/* History Section */}
        {history.length > 0 && (
          <div className="pt-8 border-t border-white/5">
             <div className="flex items-center justify-between mb-5">
               <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                 Historial Reciente (Últimos copiados)
               </h3>
               <button 
                 onClick={() => setHistory([])}
                 className="text-xs text-zinc-500 hover:text-rose-400 transition-colors px-2 py-1"
               >
                 Limpiar
               </button>
             </div>
             <div className="flex flex-wrap gap-2 md:gap-3">
               {history.map((name, idx) => (
                 <button
                   key={idx}
                   onClick={() => copyToClipboard(name, null)}
                   className="px-4 py-2 bg-zinc-900/50 border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/10 rounded-xl text-sm text-zinc-300 transition-colors flex items-center gap-2 group"
                 >
                   <span>{name}</span>
                   <Copy className="w-3 h-3 text-zinc-600 group-hover:text-violet-400 transition-colors" />
                 </button>
               ))}
             </div>
          </div>
        )}
      </div>

      {/* Lucky Spinner Modal (Ruleta de la Suerte) */}
      <AnimatePresence>
        {isSpinnerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsSpinnerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-amber-500/30 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsSpinnerOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-amber-500/30 shadow-lg shadow-amber-500/20">
                <Trophy className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-white font-heading">Ruleta del Nombre Perfecto</h3>
              <p className="text-zinc-400 text-xs mt-1 mb-6">Si tienes dudas, ¡deja que el azar elija tu nuevo apodo!</p>

              {/* Roulette Display Box */}
              <div className="bg-zinc-950 border-2 border-amber-500/40 rounded-2xl p-6 min-h-[110px] flex items-center justify-center shadow-inner mb-6 relative">
                <div className="absolute -top-3 bg-amber-500 text-zinc-950 font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {isSpinning ? 'Girando...' : '¡Nombre Ganador!'}
                </div>
                <span className={`text-2xl sm:text-3xl font-extrabold text-amber-300 break-all transition-all ${isSpinning ? 'scale-105 opacity-80 blur-[0.5px]' : 'scale-100'}`}>
                  {spinnerResult || '---'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={startSpin}
                  disabled={isSpinning}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-zinc-950 font-black text-xs rounded-xl shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  <Dices className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
                  {isSpinning ? 'Girando...' : 'Volver a Girar'}
                </button>

                {spinnerResult && !isSpinning && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setCardModalName(spinnerResult);
                        setIsSpinnerOpen(false);
                      }}
                      className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 border border-white/10"
                    >
                      <Image className="w-4 h-4 text-violet-400" /> Tarjeta Gamer
                    </button>
                    <button
                      onClick={() => {
                        copyToClipboard(spinnerResult, null, '¡Nombre ganador copiado!');
                        setIsSpinnerOpen(false);
                      }}
                      className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" /> Copiar Este Nombre
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gamer Badge Card Modal */}
      <AnimatePresence>
        {cardModalName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setCardModalName(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCardModalName(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-800 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                  Tarjeta Gamer ID
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-2">Ficha de Identidad Gamer</h3>
                <p className="text-xs text-zinc-400 mt-1">Guarda tu imagen oficial para redes sociales y clanes</p>
              </div>

              {/* Downloadable Card Element */}
              <div
                ref={gamerCardRef}
                className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-2 border-violet-500/40 rounded-3xl p-6 relative overflow-hidden shadow-2xl"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-amber-400" />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">Pase de Combate 2026</h4>
                      <p className="text-[10px] text-zinc-400">Verificado para Free Fire / PUBG</p>
                    </div>
                  </div>
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>

                <div className="relative z-10 text-center py-4 bg-zinc-900/80 border border-white/10 rounded-2xl mb-5 shadow-inner">
                  <span className="text-xs text-zinc-400 uppercase tracking-widest block mb-1">Apodo Oficial</span>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-amber-300 break-all px-2">
                    {cardModalName}
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-3 text-left mb-4">
                  <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-500 block uppercase">Rango Oficial</span>
                    <span className="text-xs font-black text-amber-300 flex items-center gap-1 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> Gran Maestro
                    </span>
                  </div>
                  <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-500 block uppercase">Límite FF</span>
                    <span className={`text-xs font-black flex items-center gap-1 mt-0.5 ${cardModalName.length <= 12 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      <Zap className="w-3.5 h-3.5" /> {cardModalName.length} / 12 Chars
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/5">
                  <span>generadordenombres.net / 2026</span>
                  <span className="font-mono text-violet-400">ID: #{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setCardModalName(null)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-xl transition-all"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleExportGamerCard}
                  disabled={isExportingCard}
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-violet-500/25 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  {isExportingCard ? 'Generando PNG...' : 'Guardar Imagen PNG'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

