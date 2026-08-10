import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Copy, CheckCircle2, Store, RefreshCw, Wand2 } from 'lucide-react';

const STORE_STYLES = [
  { id: 'all', label: 'Todos los Negocios' },
  { id: 'todo', label: 'Vende de Todo / Novedades' },
  { id: 'boutique', label: 'Boutique & Moda' },
  { id: 'tech', label: 'Tecnología & Gadgets' },
  { id: 'abarrotes', label: 'Abarrotes & Mini Super' }
];

const PREFIXES = ["Bazar", "Tienda", "Novedades", "Boutique", "Mundo", "Plaza", "Universo", "Mega", "Imperio", "El Rincón de"];
const SUFFIXES = ["Express", "Store", "Shop", "Oficial", "Market", "Premium", "Online", "Plus", "360", "Global"];
const MOCK_STORE_NAMES: Record<string, string[]> = {
  todo: ["Novedades El Sol", "Bazar MultiOfertas", "Mundo Variedades", "Mega Tienda Express", "Plaza TodoEnUno", "Universo Ofertas", "Bazar Fantasía", "Imperio Variedades"],
  boutique: ["Lumina Boutique", "Velvet & Co.", "Moda Aura", "Sutra Boutique", "Aesthetic Store", "Chic Studio", "Luna Rose Clothing", "Seda & Estilo"],
  tech: ["ByteMarket", "TechZone 360", "NEXO Gadgets", "CyberStore", "ElectroMundo", "Digital Hub", "SmartBazar", "Zeta Tech"],
  abarrotes: ["Don Abarrote", "MiniSuper La Esquina", "Mercadito Express", "Abarrotes El Ahorro", "La Canasta Fresca", "Supercito Familiar", "Provisión Central", "Don Pepe Market"]
};

export default function StoreNameTool() {
  const [activeTab, setActiveTab] = useState('todo');
  const [customKeyword, setCustomKeyword] = useState('Novedades');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const currentList = MOCK_STORE_NAMES[activeTab] || MOCK_STORE_NAMES.todo;

  const generatedCustomList = [
    `Bazar ${customKeyword}`,
    `${customKeyword} Express Store`,
    `Mundo ${customKeyword}`,
    `Mega ${customKeyword} 360`,
    `Plaza ${customKeyword} Oficial`,
    `Universo ${customKeyword}`,
    `El Rincón de ${customKeyword}`,
    `${customKeyword} & Co. Market`
  ];

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-amber-950/60 via-zinc-900 to-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-amber-500/20 shadow-2xl text-center relative overflow-hidden">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
          <Store className="w-3.5 h-3.5" /> Generador de Marcas & Tiendas 2026
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-heading tracking-tight">
          Nombres Atractivos para Tiendas que Venden de Todo
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Encuentra el nombre comercial pegajoso y recordable para tu tienda física, e-commerce o bazar de novedades.
        </p>
      </div>

      {/* Niche Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {STORE_STYLES.map((st) => (
          <button
            key={st.id}
            onClick={() => setActiveTab(st.id)}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-95 ${
              activeTab === st.id
                ? 'bg-amber-500 text-zinc-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Custom Keyword Input */}
      <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            Palabra clave o Nombre Principal
          </label>
          <input
            type="text"
            value={customKeyword}
            onChange={(e) => setCustomKeyword(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-amber-500"
            placeholder="Ej. Ofertas, Novedades, Luna..."
          />
        </div>
      </div>

      {/* Generated Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(customKeyword ? generatedCustomList : currentList).map((name, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/80 border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white font-heading">{name}</span>
            </div>

            <button
              onClick={() => handleCopy(name)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                copiedName === name
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-zinc-800 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-300 border-white/5'
              }`}
            >
              {copiedName === name ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
