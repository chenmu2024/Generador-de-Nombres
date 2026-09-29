'use client';

import { useEffect, useRef, useState } from 'react';
import { Copy, Volume2, Printer, Sparkles, Download, X } from 'lucide-react';

export default function PlushieTool({
  handleCopyTrending,
}: {
  handleCopyTrending: (value: string) => void;
}) {
  const [plushieName, setPlushieName] = useState('Algodón');
  const [plushieType, setPlushieType] = useState('Osito de Felpa 🧸');
  const [plushieOwner, setPlushieOwner] = useState('Sofía');
  const [plushieTrait, setPlushieTrait] = useState('Super suave y le encantan los abrazos ☁️');
  const [plushiePromise, setPlushiePromise] = useState('Prometo darle abrazos diarios y cuidarle siempre 💖');
  const [plushieAdoptionDate, setPlushieAdoptionDate] = useState('07/08/2026');
  const [plushieTheme, setPlushieTheme] = useState<'pink' | 'blue' | 'purple' | 'gold'>('pink');
  const [plushieCategoryTab, setPlushieCategoryTab] = useState('Todos 🧸');
  
  // Plushie Name Combiner & Print Certificate state
  const [plushieWord1, setPlushieWord1] = useState('Mochi');
  const [plushieWord2, setPlushieWord2] = useState('Copito');
  const [showCertPrintModal, setShowCertPrintModal] = useState(false);
  const certModalRef = useRef<HTMLDivElement>(null);
  const [isExportingPNG, setIsExportingPNG] = useState(false);
  
  const handleDownloadPNG = async () => {
    if (!certModalRef.current) return;
    try {
      setIsExportingPNG(true);
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(certModalRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Acta-Adopcion-${plushieName || 'Peluche'}.png`;
      link.click();
    } catch (err) {
      console.error('Error al exportar PNG:', err);
    } finally {
      setIsExportingPNG(false);
    }
  };
  
  // Shared favorites state. Uses the same storage/event contract as Generator + MainLayout.
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);
  
  useEffect(() => {
    const loadSharedFavorites = () => {
      try {
        const local = localStorage.getItem('gdn_favorites');
        setSavedFavorites(local ? JSON.parse(local) : []);
      } catch {
        setSavedFavorites([]);
      }
    };
  
    loadSharedFavorites();
    window.addEventListener('gdn_favorites_updated', loadSharedFavorites);
    return () => window.removeEventListener('gdn_favorites_updated', loadSharedFavorites);
  }, []);
  
  const toggleFavorite = (name: string) => {
    setSavedFavorites(prev => {
      const exists = prev.includes(name);
      const updated = exists ? prev.filter(n => n !== name) : [name, ...prev];
      try {
        localStorage.setItem('gdn_favorites', JSON.stringify(updated));
        window.dispatchEvent(new Event('gdn_favorites_updated'));
      } catch {}
      return updated;
    });
  };

  const speakPlushieName = (text: string) => {
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
    <>
      <div className="gdn-tool-shell max-w-6xl mx-auto py-4 space-y-8">
      <div className="bg-[#121212] border border-pink-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-pink-950/30 via-[#121212] to-amber-950/20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
      🧸 Certificado Oficial de Adopción & Generador 2026
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
      <span>🧸</span> Generador de Nombres para Peluches y Certificado de Adopción (con Audio)
      </h2>
      <p className="text-zinc-400 mt-1 text-sm">
      Crea una ficha de adopción bonita para tu osito, Squishmallow o peluche con temas de color y pronunciación de voz.
      </p>
      </div>
      </div>
      
      {/* Custom Adoption Certificate Creator */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
      <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
      <span>📜</span> Creador de Ficha Oficial de Adopción
      </h3>
      {/* Theme Selector Pills */}
      <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-zinc-400">Estilo del Certificado:</span>
      {[
      { id: 'pink', label: '🌸 Rosa', border: 'border-pink-500', bg: 'bg-pink-500/20 text-pink-300' },
      { id: 'blue', label: '☁️ Celeste', border: 'border-sky-500', bg: 'bg-sky-500/20 text-sky-300' },
      { id: 'purple', label: '💜 Violeta', border: 'border-purple-500', bg: 'bg-purple-500/20 text-purple-300' },
      { id: 'gold', label: '✨ Dorado', border: 'border-amber-500', bg: 'bg-amber-500/20 text-amber-300' }
      ].map(th => (
      <button
      key={th.id}
      onClick={() => setPlushieTheme(th.id as any)}
      className={`gdn-tool-tab px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
      plushieTheme === th.id
      ? `${th.border} ${th.bg} shadow-md`
      : 'border-white/10 bg-zinc-800 text-zinc-400 hover:text-white'
      }`}
      >
      {th.label}
      </button>
      ))}
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4 md:col-span-1">
      <div>
      <div className="flex items-center justify-between mb-1">
      <label className="text-xs font-semibold text-zinc-400">Nombre del Peluche:</label>
      <button
      onClick={() => {
      const cuteList = ['Mochi', 'Algodón', 'Boba', 'Marshmallow', 'Sr. Abrazos', 'Dumpling', 'Sparkle', 'Tofu', 'Pompon', 'Cookie', 'Waffle', 'Nutella', 'Bananita', 'Copito', 'Stitch', 'Kirby', 'Canela', 'Chispa'];
      const randomName = cuteList[Math.floor(Math.random() * cuteList.length)];
      setPlushieName(randomName);
      }}
      className="text-[11px] text-pink-300 hover:text-pink-200 font-bold flex items-center gap-1 bg-pink-500/10 px-2 py-0.5 rounded-lg border border-pink-500/20 transition-all"
      >
      🎲 Aleatorio
      </button>
      </div>
      <input
      type="text"
      value={plushieName}
      onChange={(e) = className="gdn-tool-input"> setPlushieName(e.target.value)}
      placeholder="Algodón, Mochi, Boba..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-bold"
      />
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Especie / Tipo de Peluche:</label>
      <select aria-label="Seleccionar opción" value={plushieType}
      onChange={(e) = className="gdn-tool-input"> setPlushieType(e.target.value)}
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-semibold"
      >
      {['Osito de Felpa 🧸', 'Squishmallow ☁️', 'Unicornio Mágico 🦄', 'Dinosaurio 🦕', 'Conejito 🐰', 'Gatito Kawaii 🐱', 'Oso Panda 🐼', 'Perrito Suave 🐶', 'Dragón Fantástico 🐲'].map(t => (
      <option key={t} value={t}>{t}</option>
      ))}
      </select>
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Adoptante Oficial:</label>
      <input
      type="text"
      value={plushieOwner}
      onChange={(e) = className="gdn-tool-input"> setPlushieOwner(e.target.value)}
      placeholder="Tu nombre..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-medium"
      />
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Súper Poder / Gusto Especial:</label>
      <input
      type="text"
      value={plushieTrait}
      onChange={(e) = className="gdn-tool-input"> setPlushieTrait(e.target.value)}
      placeholder="Ama los abrazos y galletas..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm"
      />
      </div>
      
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Promesa de Adopción:</label>
      <input
      type="text"
      value={plushiePromise}
      onChange={(e) = className="gdn-tool-input"> setPlushiePromise(e.target.value)}
      placeholder="Prometo darle abrazos diarios..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-xs"
      />
      </div>
      </div>
      
      {/* Live Certificate Preview Card with Theme Styling */}
      <div className={`gdn-tool-result md:col-span-2 border rounded-2xl p-6 relative flex flex-col justify-between shadow-2xl transition-all duration-300 ${
      plushieTheme === 'pink' ? 'bg-gradient-to-br from-pink-950/60 via-zinc-950 to-rose-950/40 border-pink-500/40' :
      plushieTheme === 'blue' ? 'bg-gradient-to-br from-sky-950/60 via-zinc-950 to-cyan-950/40 border-sky-500/40' :
      plushieTheme === 'purple' ? 'bg-gradient-to-br from-purple-950/60 via-zinc-950 to-fuchsia-950/40 border-purple-500/40' :
      'bg-gradient-to-br from-amber-950/60 via-zinc-950 to-yellow-950/40 border-amber-500/40'
      }`}>
      <div>
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
      <div className="flex items-center gap-3">
      <span className="text-3xl">🧸</span>
      <div>
      <span className={`text-[10px] font-bold uppercase tracking-widest block ${
      plushieTheme === 'pink' ? 'text-pink-400' :
      plushieTheme === 'blue' ? 'text-sky-400' :
      plushieTheme === 'purple' ? 'text-purple-400' : 'text-amber-400'
      }`}>Certificado Oficial de Amor</span>
      <h3 className="font-extrabold text-white text-xl font-heading">Acta de Adopción de Peluche</h3>
      </div>
      </div>
      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
      plushieTheme === 'pink' ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
      plushieTheme === 'blue' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' :
      plushieTheme === 'purple' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
      'bg-amber-500/20 text-amber-300 border-amber-500/30'
      }`}>
      N° 2026-PEL
      </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs mb-4">
      <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5">
      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Nombre Oficial:</span>
      <span className={`font-extrabold text-base ${
      plushieTheme === 'pink' ? 'text-pink-300' :
      plushieTheme === 'blue' ? 'text-sky-300' :
      plushieTheme === 'purple' ? 'text-purple-300' : 'text-amber-300'
      }`}>{plushieName || 'Peluche'}</span>
      </div>
      <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5">
      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Especie / Tipo:</span>
      <span className="text-amber-300 font-bold text-sm">{plushieType}</span>
      </div>
      <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5">
      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Adoptado por:</span>
      <span className="text-white font-bold text-sm">{plushieOwner || 'Su dueño'}</span>
      </div>
      <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5">
      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Fecha de Adopción:</span>
      <span className="text-zinc-300 font-medium text-xs block">{plushieAdoptionDate}</span>
      </div>
      <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 col-span-2">
      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Rasgo Especial & Promesa:</span>
      <span className="text-zinc-300 font-medium text-xs block mt-0.5">{plushieTrait} • {plushiePromise}</span>
      </div>
      </div>
      </div>
      
      <div className="space-y-2 pt-2 border-t border-white/10">
      <button
      onClick={() => handleCopyTrending(`📜 CERTIFICADO DE ADOPCIÓN DE PELUCHE 📜\n• Nombre: ${plushieName}\n• Especie: ${plushieType}\n• Adoptante: ${plushieOwner}\n• Fecha: ${plushieAdoptionDate}\n• Rasgo Especial: ${plushieTrait}\n• Promesa: ${plushiePromise}\n✨ Certificado Oficial 2026`)}
      className={`w-full py-2.5 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
      plushieTheme === 'pink' ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-pink-600/30' :
      plushieTheme === 'blue' ? 'bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 shadow-sky-600/30' :
      plushieTheme === 'purple' ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-purple-600/30' :
      'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 shadow-amber-600/30'
      }`}
      >
      <Copy className="w-4 h-4" /> Copiar Ficha de Adopción Completa
      </button>
      <div className="grid grid-cols-2 gap-2">
      <button
      onClick={() => speakPlushieName(plushieName)}
      className="py-2 bg-zinc-800 hover:bg-zinc-700 text-pink-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
      >
      <Volume2 className="w-3.5 h-3.5" /> Escuchar Voz
      </button>
      <button
      onClick={() => setShowCertPrintModal(true)}
      className="py-2 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 text-[11px] font-bold rounded-xl border border-pink-500/20 transition-all flex items-center justify-center gap-1.5"
      >
      <Printer className="w-3.5 h-3.5" /> Vista de Impresión
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      {/* Mezclador / Fusionador de Nombres de Peluches */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
      <div>
      <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
      <Sparkles className="w-5 h-5 text-pink-400" /> Mezclador y Fusionador de Nombres Únicos
      </h3>
      <p className="text-xs text-zinc-400 mt-0.5">Mezcla dos palabras o conceptos para crear un nombre hibrido tierno e irrepetible.</p>
      </div>
      <span className="text-xs font-bold text-pink-300 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
      🧬 Creador Híbrido
      </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Palabra 1 (Ej. Mochi / Algodón):</label>
      <input
      type="text"
      value={plushieWord1}
      onChange={(e) = className="gdn-tool-input"> setPlushieWord1(e.target.value)}
      placeholder="Mochi..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-pink-500"
      />
      </div>
      <div>
      <label className="text-xs font-semibold text-zinc-400 block mb-1">Palabra 2 (Ej. Copito / Panda):</label>
      <input
      type="text"
      value={plushieWord2}
      onChange={(e) = className="gdn-tool-input"> setPlushieWord2(e.target.value)}
      placeholder="Copito..."
      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-pink-500"
      />
      </div>
      <div className="sm:col-span-2 flex items-end">
      <div className="w-full flex items-center gap-2">
      {['Mochi + Copito', 'Canela + Nube', 'Snoopy + Bear'].map((pair, idx) => (
      <button
      key={idx}
      onClick={() => {
      const parts = pair.split(' + ');
      setPlushieWord1(parts[0]);
      setPlushieWord2(parts[1]);
      }}
      className="text-[11px] bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white px-2.5 py-2 rounded-xl border border-white/5 transition-all truncate"
      >
      💡 {pair}
      </button>
      ))}
      </div>
      </div>
      </div>
      
      {/* Generated Fusions Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {(() => {
      const w1 = plushieWord1.trim() || 'Mochi';
      const w2 = plushieWord2.trim() || 'Copito';
      const p1 = w1.slice(0, Math.ceil(w1.length / 2));
      const p2 = w2.slice(Math.floor(w2.length / 2));
      const fusions = [
      `${p1}${p2}`,
      `${w2.slice(0, 3)}${w1.slice(-3)}`,
      `${w1}ito`,
      `${w2}mellow`,
      `Sr. ${w1}`,
      `Princesa ${w2}`
      ];
      return fusions.map((fName, fIdx) => (
      <div key={fIdx} className="bg-zinc-950/80 border border-pink-500/20 hover:border-pink-500/50 rounded-xl p-3 flex flex-col justify-between gap-2 transition-all text-center">
      <span className="font-extrabold text-pink-300 text-sm font-heading truncate">{fName}</span>
      <div className="flex items-center justify-center gap-1 pt-1 border-t border-white/5">
      <button
      onClick={() => setPlushieName(fName)}
      className="text-[10px] bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 px-2 py-1 rounded-lg font-bold border border-pink-500/20 transition-all flex items-center gap-1"
      title="Cargar en el certificado"
      >
      📜 Ficha
      </button>
      <button
      onClick={() => toggleFavorite(`${fName} 🧸`)}
      className={`text-[10px] px-2 py-1 rounded-lg font-bold border transition-all ${
      savedFavorites.includes(`${fName} 🧸`)
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      : 'bg-zinc-800 text-zinc-400 hover:text-white border-white/5'
      }`}
      title="Guardar en Favoritos"
      >
      {savedFavorites.includes(`${fName} 🧸`) ? '★' : '☆'}
      </button>
      </div>
      </div>
      ));
      })()}
      </div>
      </div>
      
      {/* Categorized Plushie Library */}
      <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
      <span>📖</span> Directorio de Nombres Adorables para Peluches
      </h3>
      <p className="text-xs text-zinc-400 mt-1">Encuentra la inspiración perfecta y cárgala directamente en tu certificado.</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
      {['Todos 🧸', 'Ositos de Felpa 🐻', 'Squishmallows / Esponjosos ☁️', 'Divertidos / Comida 🍡', 'Tiernos / Kawaii 🌸', 'Dinosaurios / Fantasía 🦕'].map(tab => (
      <button
      key={tab}
      onClick={() => setPlushieCategoryTab(tab)}
      className={`gdn-tool-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
      plushieCategoryTab === tab
      ? 'bg-pink-600 text-white shadow-md shadow-pink-500/20'
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
      { name: 'Algodón', mean: 'Suave como la nube más blanca. El preferido para ositos esponjosos.', symbol: '☁️ Esponjoso', category: 'Ositos de Felpa 🐻' },
      { name: 'Mochi', mean: 'Inspirado en el dulce japonés ultra blando. Ideal para Squishmallows.', symbol: '🍡 Squish', category: 'Squishmallows / Esponjosos ☁️' },
      { name: 'Boba', mean: 'Por las perlas de té de burbujas. Dulce, moderno y encantador.', symbol: '🧋 Kawaii', category: 'Tiernos / Kawaii 🌸' },
      { name: 'Sr. Abrazos', mean: 'Un clásico lleno de afecto para el peluche que siempre está ahí.', symbol: '🧸 Clásico', category: 'Ositos de Felpa 🐻' },
      { name: 'Marshmallow', mean: 'Para muñecos blancos y tiernos que dan ganas de apretar.', symbol: '☁️ Dulce', category: 'Squishmallows / Esponjosos ☁️' },
      { name: 'Burbuja', mean: 'Alegre, flotante y divertido. Perfecto para criaturas acuáticas o unicornios.', symbol: '✨ Fantasía', category: 'Dinosaurios / Fantasía 🦕' },
      { name: 'Muffin', mean: 'Cálido y reconfortante como un bizcochito recién horneado.', symbol: '🧁 Comida', category: 'Divertidos / Comida 🍡' },
      { name: 'Dino', mean: 'Sencillo y tierno para peluches de dinosaurios de felpa.', symbol: '🦕 Dino', category: 'Dinosaurios / Fantasía 🦕' },
      { name: 'Pompon', mean: 'Bolita de algodón pequeña y cariñosa que alegra el día.', symbol: '🌸 Kawaii', category: 'Tiernos / Kawaii 🌸' },
      { name: 'Cookie', mean: 'Crujiente, dulce y gran amigo de las noches de películas.', symbol: '🍪 Comida', category: 'Divertidos / Comida 🍡' },
      { name: 'Teddy', mean: 'El mítico e inolvidable nombre para osos de felpa de generación en generación.', symbol: '🐻 Leyenda', category: 'Ositos de Felpa 🐻' },
      { name: 'Sparkle', mean: 'Lleno de destellos mágicos para unicornios y criaturas brillantes.', symbol: '✨ Mágico', category: 'Dinosaurios / Fantasía 🦕' },
      { name: 'Dumpling', mean: 'Un pequeño bocadito de felicidad esponjosa.', symbol: '🥟 Kawaii', category: 'Divertidos / Comida 🍡' },
      { name: 'Tofu', mean: 'Sencillo, blanco y extremadamente blando al tacto.', symbol: '🧊 Squish', category: 'Squishmallows / Esponjosos ☁️' },
      { name: 'Copito', mean: 'Para peluches de nieve o conejitos blancos e inocentes.', symbol: '❄️ Tierno', category: 'Tiernos / Kawaii 🌸' },
      { name: 'Waffle', mean: 'Cálido y dorado con miel, el mejor amigo de los desayunos.', symbol: '🧇 Comida', category: 'Divertidos / Comida 🍡' },
      { name: 'Stitch', mean: 'Para peluches traviesos pero leales de criaturas espaciales.', symbol: '🌌 Fantasía', category: 'Dinosaurios / Fantasía 🦕' },
      { name: 'Kirby', mean: 'Bola rosa adorable e imbatible lista para dar abrazos.', symbol: '💖 Anime', category: 'Tiernos / Kawaii 🌸' }
      ].filter(item => plushieCategoryTab === 'Todos 🧸' || item.category === plushieCategoryTab).map((item, idx) => (
      <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-pink-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
      <div>
      <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-white text-lg font-heading group-hover:text-pink-300 transition-colors">{item.name}</h3>
      <span className="text-[10px] bg-pink-500/10 text-pink-300 px-2.5 py-0.5 rounded-full border border-pink-500/20">{item.symbol}</span>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
      </div>
      
      <div className="space-y-1.5 pt-2 border-t border-white/5">
      <div className="grid grid-cols-2 gap-1.5">
      <button
      onClick={() => speakPlushieName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Escuchar audio"
      >
      <Volume2 className="w-3 h-3" /> Audio
      </button>
      <button
      onClick={() => setPlushieName(item.name)}
      className="py-1.5 bg-zinc-800 hover:bg-pink-500/20 text-pink-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
      title="Cargar en el certificado"
      >
      <span>📜</span> Ficha
      </button>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
      <button
      onClick={() => handleCopyTrending(item.name)}
      className="col-span-4 py-1.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 rounded-xl text-xs font-bold border border-pink-500/20 transition-all flex items-center justify-center gap-1"
      >
      <Copy className="w-3 h-3" /> Copiar Nombre
      </button>
      <button
      onClick={() => toggleFavorite(`${item.name} 🧸`)}
      className={`col-span-1 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${
      savedFavorites.includes(`${item.name} 🧸`)
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      : 'bg-zinc-800 text-zinc-400 hover:text-white border-white/5'
      }`}
      title="Guardar en mis Favoritos"
      >
      {savedFavorites.includes(`${item.name} 🧸`) ? '★' : '☆'}
      </button>
      </div>
      </div>
      </div>
      ))}
      </div>
      </div>
      </div>
      </div>
      {showCertPrintModal && (
      <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      >
      <div
      ref={certModalRef}
      className="bg-white text-zinc-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative border-8 border-amber-300 print:border-4 print:p-6 print:shadow-none animate-in zoom-in-95 duration-200"
      >
      <button
      onClick={() => setShowCertPrintModal(false)}
      className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 bg-zinc-100 p-2 rounded-full print:hidden transition-all"
      >
      <X className="w-5 h-5" />
      </button>
      
      {/* Certificate Header */}
      <div className="text-center border-b-2 border-dashed border-amber-300 pb-6 mb-6">
      <div className="text-4xl mb-2">🧸 📜 💖</div>
      <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">Documento Oficial de Amor</span>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-600 font-heading">Acta Oficial de Adopción de Peluche</h2>
      <p className="text-xs text-zinc-500 mt-1 font-serif italic">Registrado en la República de la Ternura • N° 2026-PEL</p>
      </div>
      
      {/* Certificate Body Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-6 bg-pink-50/80 p-5 rounded-2xl border border-pink-200">
      <div>
      <span className="text-xs font-bold uppercase text-zinc-400 block">Nombre del Peluche:</span>
      <span className="text-xl font-extrabold text-pink-600 font-heading">{plushieName}</span>
      </div>
      <div>
      <span className="text-xs font-bold uppercase text-zinc-400 block">Tipo / Especie:</span>
      <span className="text-base font-bold text-amber-700">{plushieType}</span>
      </div>
      <div>
      <span className="text-xs font-bold uppercase text-zinc-400 block">Adoptante Oficial:</span>
      <span className="text-base font-bold text-zinc-800">{plushieOwner}</span>
      </div>
      <div>
      <span className="text-xs font-bold uppercase text-zinc-400 block">Fecha de Adopción:</span>
      <span className="text-base font-bold text-zinc-800">{plushieAdoptionDate}</span>
      </div>
      <div className="col-span-2 pt-2 border-t border-pink-200">
      <span className="text-xs font-bold uppercase text-zinc-400 block">Superpoder / Rasgo Especial:</span>
      <span className="text-sm font-medium text-zinc-700">{plushieTrait}</span>
      </div>
      <div className="col-span-2">
      <span className="text-xs font-bold uppercase text-zinc-400 block">Promesa de Cuidado Eterno:</span>
      <span className="text-sm italic font-medium text-pink-700">"{plushiePromise}"</span>
      </div>
      </div>
      
      {/* Certificate Signatures & Stamp */}
      <div className="flex items-center justify-between pt-6 border-t border-dashed border-amber-300 text-center">
      <div className="w-1/3">
      <div className="border-b border-zinc-400 pb-1 mb-1 font-serif italic text-sm text-pink-600">{plushieOwner}</div>
      <span className="text-[10px] text-zinc-400 uppercase font-bold">Firma del Adoptante</span>
      </div>
      <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-amber-400/20 border-2 border-amber-500 text-amber-600 font-bold text-[10px] flex flex-col items-center justify-center p-1 uppercase mx-auto shadow-inner">
      <span>⭐ SELLO ⭐</span>
      <span className="text-[8px] font-extrabold">OFICIAL</span>
      </div>
      </div>
      <div className="w-1/3">
      <div className="border-b border-zinc-400 pb-1 mb-1 font-serif italic text-sm text-amber-700">🧸 {plushieName}</div>
      <span className="text-[10px] text-zinc-400 uppercase font-bold">Huellita / Marca</span>
      </div>
      </div>
      
      {/* Modal Print & Export Action Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-end gap-3 print:hidden">
      <button
      onClick={() => setShowCertPrintModal(false)}
      className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold text-xs rounded-xl transition-all"
      >
      Cerrar
      </button>
      <button
      onClick={handleDownloadPNG}
      disabled={isExportingPNG}
      className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
      >
      <Download className="w-4 h-4" /> {isExportingPNG ? 'Generando PNG...' : 'Guardar Imagen PNG'}
      </button>
      <button
      onClick={() => window.print()}
      className="px-5 py-2 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-pink-500/30 transition-all flex items-center gap-2"
      >
      <Printer className="w-4 h-4" /> Imprimir / PDF
      </button>
      </div>
      </div>
      </div>
      )}
    </>
  );
}
