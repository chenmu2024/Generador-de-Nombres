'use client';

import NameIdeasTool from '../components/NameIdeasTool';
import { nameIdeas } from '../data/nameIdeas';
import { copyText } from '../utils/clipboard';

import React, { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link } from '../components/Link';
import { ChevronRight, Flame, CheckCircle2, Search, Copy, ListOrdered, Home } from 'lucide-react';
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
const LazyFreeFireToolkit = dynamic(() => import('../components/tools/FreeFireToolkit'), {
  loading: () => <div className="min-h-[720px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyFreeFireSupportSections = dynamic(() => import('../components/tools/FreeFireSupportSections'), {
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
import { allLinks } from '../data/allLinks';
import { getBreadcrumbTrail, getClusterForPath } from '../data/topicClusters';

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
  initialPath: string;
  data: CategoryClientData;
  children?: ReactNode;
}) {
  const currentPath = initialPath || '/';
  const breadcrumbTrail = getBreadcrumbTrail(currentPath, data.h1);
  const usesDedicatedGenerator =
    !!nameIdeas[currentPath] ||
    currentPath === '/espacios-invisible-ff' ||
    currentPath === '/nombres-por-letra' ||
    currentPath.startsWith('/nombres-con-') ||
    currentPath === '/nombres-para-tiendas' ||
    currentPath === '/nombres-roblox' ||
    currentPath === '/nombres-instagram' ||
    currentPath === '/nombres-equipos-futbol' ||
    currentPath === '/nombres-japoneses' ||
    currentPath === '/nombres-coreanos' ||
    currentPath === '/nombres-franceses' ||
    currentPath === '/nombres-mayas' ||
    currentPath === '/nombres-perritas' ||
    currentPath === '/nombres-perros-machos' ||
    currentPath === '/perritas-chihuahua' ||
    currentPath === '/nombres-gatos-negros' ||
    currentPath === '/nombres-gatos' ||
    currentPath === '/nombres-gatos-machos' ||
    currentPath === '/nombres-peluches' ||
    currentPath === '/nombres-raros' ||
    currentPath === '/nombres-unisex' ||
    currentPath === '/nombres-de-nino' ||
    currentPath === '/nombres-de-mujer' ||
    currentPath === '/nombres-de-nina' ||
    currentPath === '/nombres-anime';
  const [showToast, setShowToast] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchCategory(params.get('s') || '');
  }, []);

  const handleCopyTrending = async (name: string) => {
    if (!await copyText(name)) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const cluster = useMemo(
    () => currentPath === '/' ? null : getClusterForPath(currentPath),
    [currentPath],
  );
  const clusterLinks = useMemo(() => {
    if (currentPath === '/') return allLinks;
    const clusterPathSet = new Set<string>(cluster ? [...cluster.paths] : []);
    return allLinks.filter(link => clusterPathSet.has(link.path));
  }, [cluster, currentPath]);
  const filteredLinks = useMemo(
    () => clusterLinks.filter(link =>
      link.path !== '/' &&
      link.path !== currentPath &&
      link.label.toLowerCase().includes(searchCategory.toLowerCase())
    ),
    [clusterLinks, currentPath, searchCategory],
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
      <nav aria-label="Breadcrumb" className={`${currentPath === '/' ? 'hidden' : 'flex'} items-center gap-2 text-xs text-zinc-400 max-w-4xl mx-auto px-1`}>
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
        <div className={`${currentPath === '/' ? 'hidden' : 'gdn-surface-raised'} border p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto text-left`}>
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
      <div className={`max-w-6xl mx-auto ${currentPath === '/' ? 'pt-0 pb-2' : 'py-6'}`}>
        {!usesDedicatedGenerator && (
          <Generator 
            title={currentPath === '/' ? 'Generador de Nombres, Apodos y Símbolos' : data.h1}
            defaultName={data.defaultName || "Gamer"}
            customSymbols={data.customSymbols}
            compact={currentPath === '/'}
          />
        )}

        {currentPath === '/espacios-invisible-ff' && (
          <div className="mt-3 md:mt-5">
            <InvisibleSpaceTool />
          </div>
        )}

        {(currentPath === '/nombres-por-letra' || currentPath.startsWith('/nombres-con-')) && (
          <div className="mt-3 md:mt-5">
            <AlphabetMatrixTool key={currentPath} currentLetter={currentPath === "/nombres-con-en" ? "Ñ" : currentPath.startsWith("/nombres-con-") ? currentPath.split("-").pop() : "A"} />
          </div>
        )}

        {currentPath === '/nombres-para-tiendas' && (
          <div className="mt-3 md:mt-5">
            <StoreNameTool />
          </div>
        )}
      </div>

      {/* Homepage quick access — compact, no duplicated embedded tools */}
      {currentPath === '/' && (
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
      {currentPath === '/' && (
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

      {/* Specialized name tools */}
      {currentPath === '/nombres-raros' && <LazyRareNamesTool handleCopyTrending={handleCopyTrending} />}
      {currentPath === '/nombres-unisex' && <LazyUnisexNamesTool handleCopyTrending={handleCopyTrending} />}
      {currentPath === '/nombres-de-nino' && <LazyMaleNamesTool handleCopyTrending={handleCopyTrending} />}
      {(currentPath === '/nombres-de-mujer' || currentPath === '/nombres-de-nina') && (
        <LazyFemaleNamesTool handleCopyTrending={handleCopyTrending} currentPath={currentPath} />
      )}
      {currentPath === '/nombres-anime' && <LazyAnimeNamesTool handleCopyTrending={handleCopyTrending} />}

      {['/nombres-free-fire', '/generador-free-fire', '/nombres-ff-unicos', '/nombres-ff-mujeres', '/nombres-clanes-ff', '/nombres-anime'].includes(currentPath) && (
        <LazyFreeFireToolkit currentPath={currentPath} handleCopyTrending={handleCopyTrending} />
      )}

      {/* Roblox Username Validator & Display Name Helper */}
      {(currentPath === '/nombres-roblox') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyRobloxTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {/* Instagram Username Validator & Bio Aesthetic Generator */}
      {(currentPath === '/nombres-instagram') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyInstagramTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {/* Football & Clan Customizer */}
      {(currentPath === '/nombres-equipos-futbol') && (
        <React.Suspense fallback={<div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5 my-4" />}>
          <LazyFootballTool handleCopyTrending={handleCopyTrending} />
        </React.Suspense>
      )}

      {currentPath === '/nombres-japoneses' && (
        <LazyJapaneseNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-coreanos' && (
        <LazyKoreanNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-franceses' && (
        <LazyFrenchNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-mayas' && (
        <LazyMayaNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {(currentPath === '/nombres-perritas' || currentPath === '/nombres-perros-machos' || currentPath === '/perritas-chihuahua') && (
        <LazyDogNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-gatos-negros' && (
        <LazyBlackCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-gatos' && (
        <LazyCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-gatos-machos' && (
        <LazyMaleCatNamesTool handleCopyTrending={handleCopyTrending} />
      )}

      {currentPath === '/nombres-peluches' && (
        <LazyPlushieTool handleCopyTrending={handleCopyTrending} />
      )}

      {['/nombres-free-fire', '/generador-free-fire', '/espacios-invisible-ff', '/nombres-ff-unicos', '/nombres-ff-mujeres', '/nombres-clanes-ff'].includes(currentPath) && (
        <LazyFreeFireSupportSections currentPath={currentPath} handleCopyTrending={handleCopyTrending} />
      )}

      {children}

      {/* Category Sequential Pagination Bar for Google Crawling & UX */}
      <nav aria-label="Navegación de categorías relacionadas" className={`${currentPath === '/' ? 'hidden' : 'gdn-surface'} max-w-6xl mx-auto my-12 p-6 border rounded-2xl flex-col sm:flex-row items-center justify-between gap-4 ${currentPath === '/' ? '' : 'flex'}`}>
        {(() => {
          const cIdx = clusterLinks.findIndex(l => l.path === currentPath);
          const pLink = cIdx > 0 ? clusterLinks[cIdx - 1] : null;
          const nLink = cIdx >= 0 && cIdx < clusterLinks.length - 1 ? clusterLinks[cIdx + 1] : null;
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
                Explorando {cluster?.label || 'categorías'} · {cIdx >= 0 ? cIdx + 1 : 1} de {clusterLinks.length}
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
      <section id="relacionados" className={`max-w-6xl mx-auto border-t border-white/5 scroll-mt-24 ${currentPath === '/' ? 'pt-10' : 'pt-16'}`}>
        <div className={`text-center ${currentPath === '/' ? 'mb-6' : 'mb-10'}`}>
          <h2 className={`font-bold text-zinc-100 font-heading ${currentPath === '/' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>{currentPath === '/' ? 'Explora Todos Nuestros Generadores' : `Explora más sobre ${cluster?.label}`}</h2>
          <p className={`text-zinc-400 mt-2 max-w-2xl mx-auto ${currentPath === '/' ? 'text-sm' : 'text-lg'}`}>{currentPath === '/' ? 'Encuentra ideas y herramientas para juegos, personas, mascotas y negocios' : 'Continúa con páginas de la misma temática para comparar opciones sin perder el contexto.'}</p>
          
          {/* Search Bar for Categories — internal pages only; global search already covers homepage */}
          {currentPath !== '/' && (
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                placeholder={`Buscar dentro de ${cluster?.label || 'esta categoría'}...`}
                className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          )}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${currentPath === '/' ? 'lg:grid-cols-4' : 'lg:grid-cols-3 lg:gap-6'}`}>
          {filteredLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.02] transition-all duration-300 group relative overflow-hidden ${currentPath === '/' ? 'gdn-surface rounded-xl px-4 py-3 flex items-center gap-3 text-left' : 'bg-[#121212] p-8 rounded-3xl flex flex-col items-center text-center gap-4'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`bg-zinc-800/50 text-violet-400 flex items-center justify-center group-hover:bg-violet-500/10 transition-all duration-300 relative z-10 ${currentPath === '/' ? 'w-8 h-8 rounded-lg shrink-0' : 'w-14 h-14 rounded-2xl text-2xl group-hover:scale-110'}`}>
                <Flame className={currentPath === '/' ? 'w-4 h-4' : 'w-6 h-6'} />
              </div>
              <h3 className={`font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors relative z-10 font-heading ${currentPath === '/' ? 'text-sm leading-tight' : 'text-xl'}`}>
                {link.label}
              </h3>
            </Link>
          ))}
          {filteredLinks.length === 0 && (
            <div className="col-span-full text-center py-12 text-zinc-500">
              No se encontraron páginas relacionadas que coincidan con "{searchCategory}".
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
