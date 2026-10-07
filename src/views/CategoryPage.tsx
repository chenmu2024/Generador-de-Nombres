'use client';

import NameIdeasTool from '../components/NameIdeasTool';
import { nameIdeas } from '../data/nameIdeas';
import { visibleLength } from '../utils/text';
import { copyText } from '../utils/clipboard';

import React, { useState, type ReactNode } from 'react';
import { useLocation } from '../utils/router';
import { Link } from '../components/Link';
import { ChevronRight, Flame, Shield, CheckCircle2, Search, Sparkles, Copy, ListOrdered, Home } from 'lucide-react';
import Generator from '../components/Generator';
import dynamic from 'next/dynamic';

const InvisibleSpaceTool = dynamic(() => import('../components/InvisibleSpaceTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const AlphabetMatrixTool = dynamic(() => import('../components/AlphabetMatrixTool'), {
  loading: () => <div className="min-h-[600px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const StoreNameTool = dynamic(() => import('../components/StoreNameTool'), {
  loading: () => <div className="min-h-[550px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyRobloxTool = dynamic(() => import('../components/tools/RobloxTool'), {
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyInstagramTool = dynamic(() => import('../components/tools/InstagramTool'), {
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyFootballTool = dynamic(() => import('../components/tools/FootballTool'), {
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyPlushieTool = dynamic(() => import('../components/tools/PlushieTool'), {
  loading: () => <div className="min-h-[640px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyJapaneseNamesTool = dynamic(() => import('../components/tools/JapaneseNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyKoreanNamesTool = dynamic(() => import('../components/tools/KoreanNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyFrenchNamesTool = dynamic(() => import('../components/tools/FrenchNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyMayaNamesTool = dynamic(() => import('../components/tools/MayaNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyDogNamesTool = dynamic(() => import('../components/tools/DogNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyCatNamesTool = dynamic(() => import('../components/tools/CatNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyBlackCatNamesTool = dynamic(() => import('../components/tools/BlackCatNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyMaleCatNamesTool = dynamic(() => import('../components/tools/MaleCatNamesTool'), {
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyRareNamesTool = dynamic(() => import('../components/tools/RareNamesTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyUnisexNamesTool = dynamic(() => import('../components/tools/UnisexNamesTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyMaleNamesTool = dynamic(() => import('../components/tools/MaleNamesTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyFemaleNamesTool = dynamic(() => import('../components/tools/FemaleNamesTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyAnimeNamesTool = dynamic(() => import('../components/tools/AnimeNamesTool'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
import { allLinks } from '../data/allLinks';
import { getBreadcrumbTrail } from '../data/topicClusters';

type CategoryClientData = {
  h1: string;
  subtitle: string;
  defaultName?: string;
  customSymbols?: string[];
  hasFaq: boolean;
};

export default function CategoryPage({
  initialPath,
  data,
  children,
}: {
  initialPath?: string;
  data: CategoryClientData;
  children?: ReactNode;
}) {
  const routerLocation = useLocation();
  const currentPath = initialPath || routerLocation.pathname || '/';
  const location = { pathname: currentPath };
  const breadcrumbTrail = getBreadcrumbTrail(currentPath, data.h1);
  const isGamingToolPage = ['/nombres-free-fire', '/generador-free-fire', '/espacios-invisible-ff', '/nombres-ff-unicos', '/nombres-ff-mujeres', '/nombres-clanes-ff', '/nombres-anime'].includes(currentPath);
  const usesDedicatedGenerator =
    !!nameIdeas[currentPath] ||
    location.pathname === '/espacios-invisible-ff' ||
    location.pathname === '/nombres-por-letra' ||
    location.pathname.startsWith('/nombres-con-') ||
    location.pathname === '/nombres-para-tiendas' ||
    location.pathname === '/nombres-roblox' ||
    location.pathname === '/nombres-instagram' ||
    location.pathname === '/nombres-equipos-futbol' ||
    location.pathname === '/nombres-japoneses' ||
    location.pathname === '/nombres-coreanos' ||
    location.pathname === '/nombres-franceses' ||
    location.pathname === '/nombres-mayas' ||
    location.pathname === '/nombres-perritas' ||
    location.pathname === '/nombres-perros-machos' ||
    location.pathname === '/perritas-chihuahua' ||
    location.pathname === '/nombres-gatos-negros' ||
    location.pathname === '/nombres-gatos' ||
    location.pathname === '/nombres-gatos-machos' ||
    location.pathname === '/nombres-peluches' ||
    location.pathname === '/nombres-raros' ||
    location.pathname === '/nombres-unisex' ||
    location.pathname === '/nombres-de-nino' ||
    location.pathname === '/nombres-de-mujer' ||
    location.pathname === '/nombres-de-nina' ||
    location.pathname === '/nombres-anime';
  const [showToast, setShowToast] = useState(false);
  const [searchCategory, setSearchCategory] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('s') || '';
    }
    return '';
  });
  const [activeSymbolTab, setActiveSymbolTab] = useState('populares');
  const [ffTag, setFfTag] = useState('TAG');
  const [ffName, setFfName] = useState('NINJA');
  const [ffClanTag, setFfClanTag] = useState('7K');
  const [ffClanName, setFfClanName] = useState('MAFIA');
  const [ffClanSymbol, setFfClanSymbol] = useState('⚡');

  const handleCopyTrending = async (name: string) => {
    if (!await copyText(name)) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const symbolCategories = {
    populares: ['꧁', '꧂', ' ঔৣ', '☬', '✞', '乂', '亗', '么', '★', '❤', '⚡', '✿', '╰‿╯', '⚓'],
    coronas: ['👑', '♕', '♔', '𓆩', '𓆪', '♚', '♛', '𓄂', '𓆃', '𓅓'],
    armas: ['⚔️', '🗡️', '🔫', '💣', '🛡️', '🏹', '⚡', '💥', '☠️', '☣️'],
    japoneses: ['乄', '么', '亗', '卍', '气', '王', '神', '鬼', '龍', '魔']
  };

  const filteredLinks = allLinks.filter(link => 
    link.path !== '/' && 
    link.label.toLowerCase().includes(searchCategory.toLowerCase())
  );



  return (
    <div className="gdn-page-shell py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 md:space-y-16 relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 font-medium animate-in fade-in slide-in-from-bottom-5 duration-200"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ¡Copiado al portapapeles!
        </div>
      )}

      {/* Breadcrumb Navigation for Google & Users */}
      <nav aria-label="Breadcrumb" className={`${location.pathname === '/' ? 'hidden' : 'flex'} items-center gap-2 text-xs text-zinc-400 max-w-4xl mx-auto px-1`}>
        {breadcrumbTrail.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <ChevronRight className="w-3 h-3 text-zinc-600 shrink-0" aria-hidden="true" />}
            {index === breadcrumbTrail.length - 1 ? (
              <span className="text-zinc-200 font-semibold truncate" aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-violet-300 transition-colors flex items-center gap-1 shrink-0">
                {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{item.name}</span>
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Header Section */}
      <div className="gdn-page-hero text-center max-w-4xl mx-auto space-y-4" id="generador">
        <h1 className="gdn-hero-title text-4xl sm:text-5xl md:text-6xl font-bold font-heading pb-2 leading-[1.05]">
          {data.h1}
        </h1>
        <p className="gdn-copy text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>

        {/* Table of Contents / Índice Rápido */}
        <div className={`${location.pathname === '/' ? 'hidden' : 'gdn-surface-raised'} border p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto text-left`}>
          <div className="gdn-section-label flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
            <ListOrdered className="w-4 h-4 text-violet-400" /> Índice de Contenidos Rápido
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <a href="#generador" className="gdn-chip p-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border font-medium">
              <span>⚡</span> Generador
            </a>
            <a href="#articulos-guia" className="gdn-chip p-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border font-medium">
              <span>📖</span> Guía
            </a>
            {data.hasFaq && (
              <a href="#preguntas-frecuentes" className="gdn-chip p-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border font-medium">
                <span>❓</span> Preguntas
              </a>
            )}
            <a href="#relacionados" className="gdn-chip p-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border font-medium">
              <span>🔗</span> Más Nombres
            </a>
          </div>
        </div>
      </div>

      {currentPath === '/' && <nav aria-label="Elegir tipo de nombre" className="flex flex-wrap justify-center gap-3">
        {[['Juegos', '/generador-free-fire'], ['Personas', '/nombres-de-nina'], ['Mascotas', '/nombres-gatos'], ['Tiendas', '/nombres-para-tiendas']].map(([label, path]) => <Link key={path} to={path} className="gdn-chip border rounded-xl px-4 py-3">{label}</Link>)}
      </nav>}
      {nameIdeas[currentPath] && <NameIdeasTool key={currentPath} path={currentPath} onCopy={handleCopyTrending} />}
      <div className={`max-w-6xl mx-auto ${location.pathname === '/' ? 'pt-0 pb-2' : 'py-6'}`}>
        {!usesDedicatedGenerator && (
          <Generator 
            title={location.pathname === '/' ? 'Generador de Nombres, Apodos y Símbolos' : data.h1}
            defaultName={data.defaultName || "Gamer"}
            customSymbols={data.customSymbols}
            compact={location.pathname === '/'}
          />
        )}

        {location.pathname === '/espacios-invisible-ff' && (
          <div className="mt-3 md:mt-5">
            <InvisibleSpaceTool />
          </div>
        )}

        {(location.pathname === '/nombres-por-letra' || location.pathname.startsWith('/nombres-con-')) && (
          <div className="mt-3 md:mt-5">
            <AlphabetMatrixTool key={currentPath} currentLetter={currentPath === "/nombres-con-en" ? "Ñ" : currentPath.startsWith("/nombres-con-") ? currentPath.split("-").pop() : "A"} />
          </div>
        )}

        {location.pathname === '/nombres-para-tiendas' && (
          <div className="mt-3 md:mt-5">
            <StoreNameTool />
          </div>
        )}
      </div>

      {/* Homepage quick access — compact, no duplicated embedded tools */}
      {location.pathname === '/' && (
        <section className="gdn-home-discovery space-y-4" aria-label="Accesos rápidos y tendencias">
          <div className="gdn-home-quick gdn-nav border p-2 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2">
            <span className="gdn-section-label px-2 text-[11px] font-bold uppercase tracking-wider">Accesos rápidos</span>
            <Link to="/generador-free-fire" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🎮 Free Fire</Link>
            <Link to="/espacios-invisible-ff" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">⚡ Espacio Invisible</Link>
            <Link to="/nombres-por-letra" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🔤 Nombres A-Z</Link>
            <Link to="/nombres-para-tiendas" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🛍️ Nombres para Tiendas</Link>
          </div>

          <div className="gdn-home-trends gdn-surface border p-4 sm:p-5 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" /> Selección de Apodos y Símbolos
              </span>
              <span className="text-[10px] text-zinc-500 hidden sm:inline">Copiar en 1 clic</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {[
                { label: '×͜× ㅤ 𝙆𝙄𝙉𝙂 ㅤ ×͜×', val: '×͜× ㅤ 𝙆𝙄𝙉𝙂 ㅤ ×͜×' },
                { label: '꧁༺ Cärlös ༻꧂', val: '꧁༺ Cärlös ༻꧂' },
                { label: '✿ Q u e e n ✿', val: '✿ Q u e e n ✿' },
                { label: '⚡ 🇳​​​​​🇴​​​​​🇴​​​​​🇧​​​​​ ⚡', val: '⚡ 🇳​​​​​🇴​​​​​🇴​​​​​🇧​​​​​ ⚡' },
                { label: 'ㅤ (Espacio Invisible)', val: 'ㅤ' },
                { label: '亗 L E G E N D 亗', val: '亗 L E G E N D 亗' }
              ].map((chip, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyTrending(chip.val)}
                  className="gdn-chip px-3.5 py-2 border rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 group"
                >
                  <span className="font-mono">{chip.label}</span>
                  <Copy className="w-3 h-3 text-zinc-500 group-hover:text-violet-300" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bento Grid Portal Hub for Homepage */}
      {location.pathname === '/' && (
        <div className="gdn-home-hub max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-violet-500/10 text-violet-300 border border-violet-500/20">
              🌐 Portal Hub 6 Canales Principales
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              Explora Nuestro Catálogo Completo de Nombres
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm">
              Accede directamente a los generadores especializados y guías de nombres más buscadas en Latinoamérica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hub 1: Gamer & Redes */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🎮</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Gaming & Redes
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Gamer, Free Fire & Redes
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Generadores de apodos insanos, símbolos raros, espacios invisibles y biografías aesthetic para Instagram y Roblox.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/generador-free-fire" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Generador FF</Link>
                  <Link to="/espacios-invisible-ff" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Espacio Invisible</Link>
                  <Link to="/nombres-ff-unicos" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">FF Únicos</Link>
                  <Link to="/nombres-instagram" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Instagram</Link>
                </div>
              </div>
              <Link to="/generador-free-fire" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ir a Herramientas Gamer <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 2: Personas & Bebés */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">👶</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Personas & Bebés
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Personas & Bebés
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Listas completas de nombres de mujer, niña poco comunes, niños con significado profundo, unisex y raros.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-de-mujer" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Nombres Mujer</Link>
                  <Link to="/nombres-de-nina" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Niña Poco Comunes</Link>
                  <Link to="/nombres-de-nino" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Niños con Significado</Link>
                  <Link to="/nombres-unisex" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Unisex</Link>
                </div>
              </div>
              <Link to="/nombres-de-mujer" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explorar Personas y Bebés <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 3: Directorio A-Z */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🔤</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Filtro Interactivo A-Z
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Directorio Por Letra A-Z
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Navega por iniciales de la A a la Z. Encuentra nombres masculinos, femeninos y tradicionales con pronunciación en audio.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-con-a" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Con A</Link>
                  <Link to="/nombres-con-f" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Con F</Link>
                  <Link to="/nombres-con-m" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Con M</Link>
                  <Link to="/nombres-con-en" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Con Ñ</Link>
                  <Link to="/nombres-con-z" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Con Z</Link>
                </div>
              </div>
              <Link to="/nombres-por-letra" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Abrir Directorio A-Z <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 4: Culturas del Mundo */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🌐</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Mitología & Idiomas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Culturas del Mundo
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Nombres de dioses griegos y nórdicos, nombres japoneses con Kanji, coreanos Hangul, mayas, italianos y franceses.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-de-dioses" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Dioses</Link>
                  <Link to="/nombres-japoneses" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Japoneses</Link>
                  <Link to="/nombres-coreanos" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Coreanos</Link>
                  <Link to="/nombres-mayas" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Mayas</Link>
                </div>
              </div>
              <Link to="/nombres-japoneses" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explorar Culturas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 5: Mascotas */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🐾</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Mascotas & Animales
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Mascotas & Animales
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Ideas bonitas para perritas, perros machos, michis y gatos negros, chihuahuas diminutas y caballos imponentes.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-perritas" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Perritas Bonitas</Link>
                  <Link to="/nombres-perros-machos" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Perros Machos</Link>
                  <Link to="/nombres-gatos" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Gatos</Link>
                  <Link to="/perritas-chihuahua" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Chihuahuas</Link>
                </div>
              </div>
              <Link to="/nombres-perritas" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver Nombres de Mascotas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 6: Equipos & Negocios */}
            <div className="gdn-surface border rounded-2xl p-6 hover:border-violet-500/35 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">💼</span>
                  <span className="gdn-chip text-[10px] font-bold border px-3 py-1 rounded-full uppercase">
                    Negocios & Marcas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-violet-300 transition-colors">
                  Equipos & Negocios
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Generador de nombres e insignias para equipos de fútbol, marcas para tiendas que venden de todo y peluches.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-equipos-futbol" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Equipos Fútbol</Link>
                  <Link to="/nombres-para-tiendas" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Tiendas & Bazares</Link>
                  <Link to="/nombres-peluches" className="gdn-chip text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border">Peluches</Link>
                </div>
              </div>
              <Link to="/nombres-para-tiendas" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Crear Nombres de Marca <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Espacio Invisible Section & FF Pro Kit (Pestaña / Herramienta Exclusiva Free Fire) */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff' || location.pathname === '/nombres-anime' || location.pathname === '/nombres-de-mujer' || location.pathname === '/nombres-de-nina' || location.pathname === '/nombres-de-nino' || location.pathname === '/nombres-unisex' || location.pathname === '/nombres-raros') && (
        <div className="gdn-tool-shell max-w-6xl mx-auto py-2 space-y-8">
          {location.pathname === '/nombres-raros' && (
            <LazyRareNamesTool handleCopyTrending={handleCopyTrending} />
          )}
          {location.pathname === '/nombres-unisex' && (
            <LazyUnisexNamesTool handleCopyTrending={handleCopyTrending} />
          )}
          {location.pathname === '/nombres-de-nino' && (
            <LazyMaleNamesTool handleCopyTrending={handleCopyTrending} />
          )}
          {(location.pathname === '/nombres-de-mujer' || location.pathname === '/nombres-de-nina') && (
            <LazyFemaleNamesTool handleCopyTrending={handleCopyTrending} currentPath={location.pathname} />
          )}
          {location.pathname === '/nombres-anime' && (
            <LazyAnimeNamesTool handleCopyTrending={handleCopyTrending} />
          )}
          {/* Clan & Squad Specialized Generator Block for /nombres-clanes-ff */}
          {location.pathname === '/nombres-clanes-ff' && (
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
          {location.pathname === '/nombres-ff-mujeres' && (
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
          {location.pathname === '/nombres-ff-unicos' && (
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
          {!isGamingToolPage && <p className="text-sm text-zinc-400">¿Buscas apodos para juegos? <Link to="/generador-free-fire" className="text-violet-300 underline">Explorar el generador de Free Fire</Link>.</p>}
        </div>
      )}

      {/* Roblox Username Validator & Display Name Helper */}
      {(location.pathname === '/nombres-roblox') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyRobloxTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {/* Instagram Username Validator & Bio Aesthetic Generator */}
      {(location.pathname === '/nombres-instagram') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyInstagramTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {/* Football & Clan Customizer */}
      {(location.pathname === '/nombres-equipos-futbol') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyFootballTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {location.pathname === '/nombres-japoneses' && (
        <LazyJapaneseNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-coreanos' && (
        <LazyKoreanNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-franceses' && (
        <LazyFrenchNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-mayas' && (
        <LazyMayaNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {(location.pathname === '/nombres-perritas' || location.pathname === '/nombres-perros-machos' || location.pathname === '/perritas-chihuahua') && (
        <LazyDogNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-gatos-negros' && (
        <LazyBlackCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-gatos' && (
        <LazyCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-gatos-machos' && (
        <LazyMaleCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {location.pathname === '/nombres-peluches' && (
        <LazyPlushieTool handleCopyTrending={handleCopyTrending} />
      )}

      {/* Trending Names Section */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-8">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <Flame className="w-8 h-8 text-orange-500" />
                  Apodos Populares
                </h2>
                <p className="text-zinc-400 mt-2">Una selección de estilos populares para inspirarte y copiar.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-400">Ejemplos listos para copiar</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                '꧁ঔৣ☬✞Killer✞☬ঔৣ꧂',
                '乂✰ɢᴏᴅ✰乂',
                '★Pʀᴏ❤Gᴀᴍᴇʀ★',
                'S ɴ ɪ ᴘ ᴇ ʀ 么',
                '꧁༒Legend༒꧂',
                '亗 V E N O M 亗',
                'ＯＰ ＧＡＭＥＲ ＹＴ',
                'I A M 么 B O S S'
              ].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyTrending(name)}
                  className="group gdn-surface-raised hover:border-violet-500/30 border rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span className="font-medium text-zinc-200 truncate w-full text-center group-hover:text-violet-300 transition-colors">{name}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 group-hover:text-violet-400 transition-colors">Copiar</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Symbol Bank Section */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-4">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-violet-400" />
                  Banco de Símbolos Especiales
                </h2>
                <p className="text-zinc-400 mt-2">Haz clic en cualquier símbolo para copiarlo directamente.</p>
              </div>

              {/* Tabs */}
              <div className="gdn-nav flex flex-wrap gap-2 p-1.5 border">
                {[
                  { id: 'populares', label: '🔥 Populares' },
                  { id: 'coronas', label: '👑 Coronas' },
                  { id: 'armas', label: '⚔️ Armas' },
                  { id: 'japoneses', label: '⛩️ Japoneses' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSymbolTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeSymbolTab === tab.id
                        ? 'gdn-primary-button text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Symbol Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-3">
              {(symbolCategories[activeSymbolTab as keyof typeof symbolCategories] || symbolCategories.populares).map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopyTrending(sym)}
                  className="gdn-chip h-14 border rounded-xl text-xl flex items-center justify-center transition-all active:scale-95 group relative"
                  title="Copiar símbolo"
                >
                  <span>{sym}</span>
                  <Copy className="w-3 h-3 text-violet-400 absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Duos and Couples Section (For Free Fire page) */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-2">
          <div className="gdn-surface border rounded-2xl p-7 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span className="text-2xl">❤️</span> Nombres para Dúos y Parejas en Free Fire
                </h2>
                <p className="text-zinc-400 mt-1">Combinaciones perfectas para jugar con tu pareja o tu mejor amigo en Dúo Squad.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { pair1: '꧁👑 D U E Ñ O 👑꧂', pair2: '꧁👑 D U E Ñ A 👑꧂', tag: 'Rey y Reina' },
                { pair1: '×͜× K I N G', pair2: '×͜× Q U E E N', tag: 'Estilo Insano' },
                { pair1: '⚡ B O N N I E ⚡', pair2: '⚡ C L Y D E ⚡', tag: 'Pareja Mítica' },
                { pair1: '亗 A D A N 亗', pair2: '亗 E V A 亗', tag: 'Clásico Pro' }
              ].map((duo, idx) => (
                <div key={idx} className="gdn-surface-raised border rounded-xl p-4 flex items-center justify-between gap-3 hover:border-violet-500/30 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-lg border border-violet-500/20 whitespace-nowrap">
                      {duo.tag}
                    </span>
                    <div className="truncate text-sm font-bold text-zinc-200">
                      <span className="text-violet-400">{duo.pair1}</span> <span className="text-zinc-600 mx-1">&</span> <span className="text-fuchsia-400">{duo.pair2}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyTrending(duo.pair1)}
                      className="gdn-chip px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                      title="Copiar Él"
                    >
                      Él
                    </button>
                    <button
                      onClick={() => handleCopyTrending(duo.pair2)}
                      className="gdn-chip px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                      title="Copiar Ella"
                    >
                      Ella
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* How to Change Name Guide */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-4">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-6 flex items-center gap-3">
              <span className="text-2xl">🎮</span> ¿Cómo Cambiar tu Nombre en Free Fire Paso a Paso?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Copia tu Apodo', desc: 'Genera o elige tu nombre favorito en nuestro sitio y haz clic en Copiar.' },
                { step: '2', title: 'Abre Free Fire', desc: 'Entra al juego y toca tu foto de perfil en la esquina superior izquierda.' },
                { step: '3', title: 'Icono de Lápiz', desc: 'Toca el icono amarillo de edición que aparece debajo de tu nombre actual.' },
                { step: '4', title: 'Pega y Confirma', desc: 'Pega el apodo copiado y confirma usando 390 Diamantes o una Tarjeta de Nombre.' }
              ].map((item, idx) => (
                <div key={idx} className="gdn-surface-raised border rounded-xl p-6 relative flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold font-heading flex items-center justify-center text-lg mb-4 ">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white font-heading mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {children}

      {/* Category Sequential Pagination Bar for Google Crawling & UX */}
      <nav aria-label="Navegación de categorías relacionadas" className={`${location.pathname === '/' ? 'hidden' : 'gdn-surface'} max-w-6xl mx-auto my-12 p-6 border rounded-2xl flex-col sm:flex-row items-center justify-between gap-4 ${location.pathname === '/' ? '' : 'flex'}`}>
        {(() => {
          const cIdx = allLinks.findIndex(l => l.path === location.pathname);
          const pLink = cIdx > 0 ? allLinks[cIdx - 1] : allLinks[allLinks.length - 1];
          const nLink = cIdx >= 0 && cIdx < allLinks.length - 1 ? allLinks[cIdx + 1] : allLinks[0];
          return (
            <>
              {pLink && (
                <Link
                  to={pLink.path}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group text-left w-full sm:w-auto"
                >
                  <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-xl group-hover:border-violet-500/30 group-hover:bg-violet-500/10 text-violet-400 transition-all">
                    &larr;
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">Categoría Anterior</span>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-violet-300 transition-colors">{pLink.label}</span>
                  </div>
                </Link>
              )}

              <div className="text-xs text-zinc-500 font-medium hidden md:block">
                Explorando categoría {cIdx >= 0 ? cIdx + 1 : 1} de {allLinks.length}
              </div>

              {nLink && (
                <Link
                  to={nLink.path}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group text-right sm:flex-row-reverse w-full sm:w-auto"
                >
                  <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-xl group-hover:border-violet-500/30 group-hover:bg-violet-500/10 text-violet-400 transition-all">
                    &rarr;
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">Siguiente Categoría</span>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-violet-300 transition-colors">{nLink.label}</span>
                  </div>
                </Link>
              )}
            </>
          );
        })()}
      </nav>

      {/* Explore All Categories */}
      <section id="relacionados" className={`max-w-6xl mx-auto border-t border-white/5 scroll-mt-24 ${location.pathname === '/' ? 'pt-10' : 'pt-16'}`}>
        <div className={`text-center ${location.pathname === '/' ? 'mb-6' : 'mb-10'}`}>
          <h2 className={`font-bold text-zinc-100 font-heading ${location.pathname === '/' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>Explora Todos Nuestros Generadores</h2>
          <p className={`text-zinc-400 mt-2 max-w-2xl mx-auto ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}>Encuentra el nombre perfecto para cualquier plataforma o mascota</p>
          
          {/* Search Bar for Categories — internal pages only; global search already covers homepage */}
          {location.pathname !== '/' && (
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                placeholder="Buscar generador (ej. Roblox, Gatos...)"
                className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          )}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${location.pathname === '/' ? 'lg:grid-cols-4' : 'lg:grid-cols-3 lg:gap-6'}`}>
          {filteredLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.02] transition-all duration-300 group relative overflow-hidden ${location.pathname === '/' ? 'gdn-surface rounded-xl px-4 py-3 flex items-center gap-3 text-left' : 'bg-[#121212] p-8 rounded-3xl flex flex-col items-center text-center gap-4'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`bg-zinc-800/50 text-violet-400 flex items-center justify-center group-hover:bg-violet-500/10 transition-all duration-300 relative z-10 ${location.pathname === '/' ? 'w-8 h-8 rounded-lg shrink-0' : 'w-14 h-14 rounded-2xl text-2xl group-hover:scale-110'}`}>
                <Flame className={location.pathname === '/' ? 'w-4 h-4' : 'w-6 h-6'} />
              </div>
              <h3 className={`font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors relative z-10 font-heading ${location.pathname === '/' ? 'text-sm leading-tight' : 'text-xl'}`}>
                {link.label}
              </h3>
            </Link>
          ))}
          {filteredLinks.length === 0 && (
            <div className="col-span-full text-center py-12 text-zinc-500">
              No se encontraron generadores que coincidan con "{searchCategory}".
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
