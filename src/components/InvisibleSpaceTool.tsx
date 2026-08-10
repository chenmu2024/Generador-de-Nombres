import React, { useState } from 'react';
import { Copy, CheckCircle2, Sparkles, HelpCircle, Shield, Smartphone, ChevronDown, Crosshair, RefreshCw, Type } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InvisibleSpaceTool() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [customText, setCustomText] = useState('INSANO');
  const [tagText, setTagText] = useState('TM');
  const [separator, setSeparator] = useState('ㅤ');
  const [selectedFont, setSelectedFont] = useState<'normal' | 'smallcaps' | 'cursive' | 'gothic' | 'spaced'>('normal');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const spaces = [
    { title: 'Espacio Invisible Mediano (Recomendado FF)', char: 'ㅤ', unicode: 'U+3000', desc: 'El carácter oficial más seguro para separar el tag de clan de tu apodo en Free Fire.' },
    { title: 'Espacio Invisible Pequeño (Letra Transparente)', char: 'ᅠ', unicode: 'U+3164', desc: 'Ideal para espacios ajustados en la biografía o firma del perfil de jugador.' },
    { title: 'Espacio Invisible Doble (Separación Ancha)', char: 'ㅤㅤ', unicode: 'U+3000 x2', desc: 'Crea una separación bien distinguible entre dos palabras de tu nick.' },
    { title: 'Espacio Invisible Triple (Nombre 100% Fantasma)', char: 'ㅤㅤㅤ', unicode: 'U+3000 x3', desc: 'Úsalo para que tu nick quede completamente en blanco e invisible en la partida.' }
  ];

  const superscripts = ['ᵀᴹ', 'ᵖʳᵒ', 'Ⓥ', '⚡', '亗', '×͜×', '☠︎', '🌸'];

  // Font conversion mapping helper
  const transformText = (text: string, style: typeof selectedFont) => {
    if (style === 'spaced') {
      return text.split('').join(' ');
    }
    if (style === 'smallcaps') {
      const smallCapsMap: Record<string, string> = {
        a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ',
        n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
        A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ',
        N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ'
      };
      return text.split('').map(c => smallCapsMap[c] || c).join('');
    }
    if (style === 'cursive') {
      const cursiveMap: Record<string, string> = {
        a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂',
        n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
        A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥', K: '𝒦', L: 'ℒ', M: 'ℳ',
        N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
      };
      return text.split('').map(c => cursiveMap[c] || c).join('');
    }
    if (style === 'gothic') {
      const gothicMap: Record<string, string> = {
        a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪',
        n: '𝔫', o: '𝔬', p: '𝔟', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔮', x: '𝔵', y: '𝔶', z: '𝔷',
        A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔍', H: 'ℌ', I: 'ℑ', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐',
        N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗', U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ'
      };
      return text.split('').map(c => gothicMap[c] || c).join('');
    }
    return text;
  };

  const formattedCustomText = transformText(customText, selectedFont);
  const combinedNick = tagText ? `${tagText}${separator}${formattedCustomText}` : formattedCustomText;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setShowToast(true);
    setTimeout(() => {
      setCopiedIndex(null);
      setShowToast(false);
    }, 2000);
  };

  const insertSpaceInCustom = () => {
    setCustomText(prev => prev + 'ㅤ');
  };

  const faqs = [
    {
      q: '¿Por qué la barra espaciadora normal no funciona en Free Fire?',
      a: 'Garena Free Fire bloquea el espacio en blanco estándar (ASCII 32) en el campo de nombre. Para separar palabras es obligatorio usar un carácter Unicode especial (U+3000) que el juego reconoce como letra transparente.'
    },
    {
      q: '¿Garena banea por usar el Espacio Invisible?',
      a: 'No, no existe riesgo de baneos. El espacio invisible es un carácter tipográfico Unicode legítimo (Hangul Filler) compatible de forma nativa en Android e iOS.'
    },
    {
      q: '¿Cómo poner un nombre 100% invisible en la partida?',
      a: 'Copia la opción "Espacio Invisible Triple" de esta página y pégalo en el cuadro de cambio de nombre de Free Fire. Al no tener letras visibles, aparecerás sin nombre en el Kill Feed.'
    },
    {
      q: '¿Cómo cambiar de nombre usando la Tarjeta de Cambio de Nick?',
      a: 'Abre Free Fire > Toca tu perfil arriba a la izquierda > Presiona el icono del lápiz amarillo > Pega tu nick con espacio invisible > Confirma gastando tu tarjeta de cambio o 800 diamantes.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl border border-emerald-400 font-bold text-sm"
          >
            <CheckCircle2 className="w-5 h-5" />
            ¡Espacio invisible copiado al portapapeles!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header Card */}
      <div className="bg-gradient-to-br from-violet-950/90 via-zinc-900 to-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-violet-500/20 shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-violet-600 rounded-full blur-[100px]"></div>
          <div className="absolute top-12 -right-12 w-64 h-64 bg-fuchsia-600 rounded-full blur-[100px]"></div>
        </div>
        
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Herramienta Unicode Oficial FF 2026
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-heading tracking-tight">
          Copiador de Espacio Invisible para Free Fire
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-6">
          Haz 1-clic para copiar el espacio en blanco transparente (Hangul Filler U+3000) indispensable para separar nicks, tags de clanes y nombres invisibles en Free Fire.
        </p>

        {/* Compatibility Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-white/5">
          <span className="text-[10px] uppercase font-bold text-zinc-500 mr-2">Compatibilidad Verificada:</span>
          {[
            'Free Fire & FF MAX ✅',
            'WhatsApp & IG Bio ✅',
            'PUBG Mobile ✅',
            'Roblox & Discord ✅'
          ].map((item, idx) => (
            <span key={idx} className="text-xs bg-zinc-900/90 text-zinc-300 border border-white/10 px-3 py-1 rounded-full font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Popular 1-Click Invisible Nick Combos */}
      <div className="bg-gradient-to-r from-violet-950/60 via-zinc-900 to-fuchsia-950/60 border border-violet-500/20 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" /> Plantillas de Nicks Invisibles Insanos (Clic para Copiar)
          </span>
          <span className="text-[10px] text-zinc-500">100% Probados en FF</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {[
            { label: '×͜× ㅤ INSANO', val: '×͜× ㅤ INSANO' },
            { label: 'Ⓥ ㅤ GOD ㅤ ᵀᴹ', val: 'Ⓥ ㅤ GOD ㅤ ᵀᴹ' },
            { label: '亗 ㅤ K I N G ㅤ 亗', val: '亗 ㅤ K I N G ㅤ 亗' },
            { label: '⚡ ㅤ N O O B ㅤ ⚡', val: '⚡ ㅤ N O O B ㅤ ⚡' },
            { label: '🌸 ㅤ A i t a n a', val: '🌸 ㅤ A i t a n a' },
            { label: 'ㅤㅤㅤ (Nombre Invisible)', val: 'ㅤㅤㅤ' }
          ].map((combo, i) => (
            <button
              key={i}
              onClick={() => copyToClipboard(combo.val, 100 + i)}
              className="p-3 bg-zinc-950/80 hover:bg-violet-600/30 text-zinc-200 hover:text-white border border-white/10 hover:border-violet-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex items-center justify-between group"
            >
              <span>{combo.label}</span>
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-violet-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Direct Copy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spaces.map((s, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all shadow-lg flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-lg">{s.title}</h3>
                <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                  {s.unicode}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>

            <button
              onClick={() => copyToClipboard(s.char, idx)}
              className={`w-full py-3.5 px-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                copiedIndex === idx
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-600/25'
              }`}
            >
              {copiedIndex === idx ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>¡COPIADO!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>COPIAR ESPACIO INVISIBLE</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Nick Assembler & Fast Super-Indices */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Smartphone className="w-6 h-6 text-violet-400" />
          <div>
            <h3 className="text-xl font-bold text-white font-heading">Generador y Creador de Apodo con Espacio Invisible</h3>
            <p className="text-xs text-zinc-400">Mezcla tu tag, espacio transparente y fuentes para verificar la longitud antes de ir a Free Fire</p>
          </div>
        </div>

        {/* Inputs & Separator Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">1. Tag o Clan</label>
            <input
              type="text"
              value={tagText}
              onChange={(e) => setTagText(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-violet-500"
              placeholder="Ej. TM, LOS, 7K"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">2. Tipo de Separador</label>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-violet-500"
            >
              <option value="ㅤ">Espacio Invisible Simple (U+3000)</option>
              <option value="ㅤㅤ">Espacio Invisible Doble (U+3000 x2)</option>
              <option value="ᅠ">Espacio Invisible Pequeño (U+3164)</option>
              <option value=" • ">Punto Central ( • )</option>
              <option value=" ⚡ ">Rayo ( ⚡ )</option>
              <option value=" Ⓥ ">Verificado ( Ⓥ )</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">3. Tu Apodo</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-violet-500"
              placeholder="Ej. INSANO"
            />
          </div>
        </div>

        {/* Font Style Selectors */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-zinc-400 block flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-violet-400" /> Estilo Tipográfico de Letra:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'normal', label: 'Normal' },
              { id: 'smallcaps', label: 'Small Caps (ɪɴsᴀɴᴏ)' },
              { id: 'cursive', label: 'Cursiva (𝒪𝓅𝓅ℴ)' },
              { id: 'gothic', label: 'Gótico (𝔖𝔥𝔞𝔡𝔬𝔮)' },
              { id: 'spaced', label: 'Espaciado (I N S A N O)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFont(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  selectedFont === f.id
                    ? 'bg-violet-600 text-white border-violet-400 shadow-md shadow-violet-600/30'
                    : 'bg-zinc-800 text-zinc-300 border-white/5 hover:bg-zinc-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Extras Bar */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-zinc-400 block">Añadir Adornos y Letras Pequeñas en 1-Clic:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={insertSpaceInCustom}
              className="px-3 py-1.5 bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-500/30 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" /> + Espacio Invisible Extra
            </button>
            {superscripts.map((sup, i) => (
              <button
                key={i}
                onClick={() => setCustomText(prev => prev + sup)}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/5 rounded-lg text-xs font-mono font-bold transition-colors"
              >
                + {sup}
              </button>
            ))}
          </div>
        </div>

        {/* Live Preview Box */}
        <div className="bg-black/60 border border-violet-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">Nombre Completo Listo para Copiar</span>
            <div className="text-2xl font-black text-white font-mono tracking-wide break-all">
              {combinedNick}
            </div>
            <span className={`text-[11px] font-medium mt-1 block ${combinedNick.length <= 12 ? 'text-emerald-400' : 'text-red-400'}`}>
              Longitud: {combinedNick.length}/12 caracteres {combinedNick.length <= 12 ? '✅ Compatible con Free Fire' : '⚠️ Supera el límite máximo de 12'}
            </span>
          </div>
          <button
            onClick={() => copyToClipboard(combinedNick, 99)}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-600/30 active:scale-95 flex-shrink-0"
          >
            <Copy className="w-5 h-5" />
            <span>{copiedIndex === 99 ? '¡COPIADO!' : 'COPIAR NICK COMPLETO'}</span>
          </button>
        </div>

        {/* Live Free Fire Killfeed Simulation Preview */}
        <div className="bg-zinc-950 border border-amber-500/30 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Crosshair className="w-4 h-4 text-red-500" /> Simulador de Kill Feed de Free Fire
            </span>
            <span className="text-[10px] text-zinc-500">Vista previa exacta en partida</span>
          </div>
          <div className="bg-black/80 border border-red-500/20 rounded-xl p-3 flex items-center justify-between font-mono text-xs">
            <span className="text-amber-400 font-bold">{combinedNick}</span>
            <span className="text-red-500 font-bold flex items-center gap-1">
              💥 🎯 [Headshot]
            </span>
            <span className="text-zinc-500">Player_Enano123</span>
          </div>
        </div>
      </div>

      {/* Step-by-step How to Use in Free Fire */}
      <div className="bg-zinc-900/80 border border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
          <Shield className="w-5 h-5 text-amber-400" />
          Pasos para Cambiar tu Nombre en Free Fire usando Espacio Invisible
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-300">
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 space-y-2">
            <span className="text-violet-400 font-bold text-sm block">Paso 1: Copia el Carácter</span>
            <p className="text-zinc-400 leading-relaxed">Presiona en "Copiar Espacio Invisible" o genera tu nick personalizado arriba.</p>
          </div>
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 space-y-2">
            <span className="text-violet-400 font-bold text-sm block">Paso 2: Abre tu Perfil en FF</span>
            <p className="text-zinc-400 leading-relaxed">Inicia Free Fire, toca tu avatar arriba a la izquierda y pulsa el lápiz de edición.</p>
          </div>
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 space-y-2">
            <span className="text-violet-400 font-bold text-sm block">Paso 3: Pega y Confirma</span>
            <p className="text-zinc-400 leading-relaxed">Mapea el campo "Apodo Nuevo", mantén presionado, toca "Pegar" y confirma con tu tarjeta de cambio.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-zinc-900/80 border border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-violet-400" />
          Preguntas Frecuentes sobre el Espacio Invisible en Free Fire
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-zinc-950/50">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left p-4 font-bold text-sm text-white flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-violet-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <div className="p-4 pt-0 text-xs text-zinc-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


