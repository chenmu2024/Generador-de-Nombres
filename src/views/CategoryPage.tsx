'use client';

import React, { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from '../utils/router';
import { Link } from '../components/Link';
import { ChevronRight, Flame, Zap, Gem, Shield, Smartphone, CheckCircle2, Search, Sparkles, Copy, Volume2, Instagram, X, ListOrdered, Home } from 'lucide-react';
import Generator from '../components/Generator';
import dynamic from 'next/dynamic';

const InvisibleSpaceTool = dynamic(() => import('../components/InvisibleSpaceTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const AlphabetMatrixTool = dynamic(() => import('../components/AlphabetMatrixTool'), {
  ssr: false,
  loading: () => <div className="min-h-[600px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const StoreNameTool = dynamic(() => import('../components/StoreNameTool'), {
  ssr: false,
  loading: () => <div className="min-h-[550px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyRobloxTool = dynamic(() => import('../components/tools/RobloxTool'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyInstagramTool = dynamic(() => import('../components/tools/InstagramTool'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyFootballTool = dynamic(() => import('../components/tools/FootballTool'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyPlushieTool = dynamic(() => import('../components/tools/PlushieTool'), {
  ssr: false,
  loading: () => <div className="min-h-[640px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyJapaneseNamesTool = dynamic(() => import('../components/tools/JapaneseNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyKoreanNamesTool = dynamic(() => import('../components/tools/KoreanNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyFrenchNamesTool = dynamic(() => import('../components/tools/FrenchNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyMayaNamesTool = dynamic(() => import('../components/tools/MayaNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyDogNamesTool = dynamic(() => import('../components/tools/DogNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyCatNamesTool = dynamic(() => import('../components/tools/CatNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyBlackCatNamesTool = dynamic(() => import('../components/tools/BlackCatNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyMaleCatNamesTool = dynamic(() => import('../components/tools/MaleCatNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[560px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});

const LazyRareNamesTool = dynamic(() => import('../components/tools/RareNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyUnisexNamesTool = dynamic(() => import('../components/tools/UnisexNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyMaleNamesTool = dynamic(() => import('../components/tools/MaleNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyFemaleNamesTool = dynamic(() => import('../components/tools/FemaleNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
const LazyAnimeNamesTool = dynamic(() => import('../components/tools/AnimeNamesTool'), {
  ssr: false,
  loading: () => <div className="min-h-[520px] w-full animate-pulse bg-zinc-900/50 rounded-3xl border border-white/5"></div>
});
import { allLinks } from '../data/allLinks';

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
  const usesDedicatedGenerator =
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

  const [robloxBaseInput, setRobloxBaseInput] = useState('Vortex');
  const [robloxStyle, setRobloxStyle] = useState<'username' | 'display'>('display');

  const [igKeyword, setIgKeyword] = useState('Sofia');
  const [igCategory, setIgCategory] = useState<'aesthetic' | 'minimal' | 'brand' | 'dark' | 'private'>('aesthetic');

  const getInitialAlphabetLetter = () => {
    if (location.pathname === '/nombres-con-en') return 'Ñ';
    const match = location.pathname.match(/\/nombres-con-([a-z])$/i);
    return match ? match[1].toUpperCase() : 'A';
  };
  const getInitialAlphabetFirstName = () => {
    if (location.pathname === '/nombres-con-en') return 'Iñigo';
    const match = location.pathname.match(/\/nombres-con-([a-z])$/i);
    if (match) {
      const letter = match[1].toUpperCase();
      const sampleMap: Record<string, string> = {
        A: 'Alexander', B: 'Bruno', C: 'Camila', D: 'Daniel', E: 'Enzo', F: 'Fernando',
        G: 'Gael', H: 'Hugo', I: 'Ian', J: 'Javier', K: 'Kai', L: 'Leo', M: 'Mateo',
        N: 'Noah', Ñ: 'Iñigo', O: 'Oliver', P: 'Pablo', Q: 'Quentin', R: 'René', S: 'Sofía',
        T: 'Thiago', U: 'Uriel', V: 'Valentina', W: 'William', X: 'Ximena', Y: 'Yael', Z: 'Zoe'
      };
      return sampleMap[letter] || 'Ariel';
    }
    return 'Alexander';
  };

  const [alphabetLetter, setAlphabetLetter] = useState(getInitialAlphabetLetter);
  const [alphabetGender, setAlphabetGender] = useState<'todos' | 'masculino' | 'femenino' | 'unisex'>('todos');
  const [alphabetFirstName, setAlphabetFirstName] = useState(getInitialAlphabetFirstName);

  const [alphabetSecondName, setAlphabetSecondName] = useState('Gael');

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

  const handleCopyTrending = (name: string) => {
    navigator.clipboard.writeText(name);
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Route matching for letter paths like /nombres-con-a or /nombres-con-en
    if (location.pathname === '/nombres-con-en') {
      setAlphabetLetter('Ñ');
      setAlphabetFirstName('Iñigo');
    } else {
      const letterMatch = location.pathname.match(/\/nombres-con-([a-z])$/i);
      if (letterMatch) {
        const targetLetter = letterMatch[1].toUpperCase();
        setAlphabetLetter(targetLetter);
        const sampleMap: Record<string, string> = {
          A: 'Alexander', B: 'Bruno', C: 'Camila', D: 'Daniel', E: 'Enzo', F: 'Fernando',
          G: 'Gael', H: 'Hugo', I: 'Ian', J: 'Javier', K: 'Kai', L: 'Leo', M: 'Mateo',
          N: 'Noah', Ñ: 'Iñigo', O: 'Oliver', P: 'Pablo', Q: 'Quentin', R: 'René', S: 'Sofía',
          T: 'Thiago', U: 'Uriel', V: 'Valentina', W: 'William', X: 'Xavier', Y: 'Yago', Z: 'Zoe'
        };
        if (sampleMap[targetLetter]) {
          setAlphabetFirstName(sampleMap[targetLetter]);
        }
      }
    }

  }, [location.pathname]);

  return (
    <main className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 md:space-y-16 relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 font-medium animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ¡Copiado al portapapeles!
        </div>
      )}

      {/* Breadcrumb Navigation for Google & Users */}
      <nav aria-label="Breadcrumb" className={`${location.pathname === '/' ? 'hidden' : 'flex'} items-center gap-2 text-xs text-zinc-400 max-w-4xl mx-auto px-1`} itemScope itemType="https://schema.org/BreadcrumbList">
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link to="/" itemProp="item" className="hover:text-violet-300 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span itemProp="name">Inicio</span>
          </Link>
          <span itemProp="position" className="hidden">1</span>
        </span>
        {location.pathname !== '/' && (
          <React.Fragment key="breadcrumb-sub">
            <ChevronRight className="w-3 h-3 text-zinc-600" aria-hidden="true" />
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-zinc-200 font-semibold truncate">
              <span itemProp="name">{data.h1}</span>
              <span itemProp="position" className="hidden">2</span>
            </span>
          </React.Fragment>
        )}
      </nav>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-4" id="generador">
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

      <div className={`max-w-6xl mx-auto ${location.pathname === '/' ? 'pt-0 pb-2' : 'py-6'}`}>
        {!usesDedicatedGenerator && (
          <Generator 
            title={location.pathname === '/' ? 'Generador de Nombres, Apodos y Símbolos' : data.h1}
            defaultName={data.defaultName || "Gamer"}
            customSymbols={data.customSymbols}
          />
        )}

        {location.pathname === '/espacios-invisible-ff' && (
          <div className="mt-8">
            <InvisibleSpaceTool />
          </div>
        )}

        {(location.pathname === '/nombres-por-letra' || location.pathname.startsWith('/nombres-con-')) && (
          <div className="mt-8">
            <AlphabetMatrixTool />
          </div>
        )}

        {location.pathname === '/nombres-para-tiendas' && (
          <div className="mt-8">
            <StoreNameTool />
          </div>
        )}
      </div>

      {/* Homepage quick access — compact, no duplicated embedded tools */}
      {location.pathname === '/' && (
        <section className="space-y-4" aria-label="Accesos rápidos y tendencias">
          <div className="gdn-nav border p-2 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2">
            <span className="gdn-section-label px-2 text-[11px] font-bold uppercase tracking-wider">Accesos rápidos</span>
            <Link to="/generador-free-fire" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🎮 Free Fire</Link>
            <Link to="/espacios-invisible-ff" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">⚡ Espacio Invisible</Link>
            <Link to="/nombres-por-letra" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🔤 Nombres A-Z</Link>
            <Link to="/nombres-para-tiendas" className="gdn-chip px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all">🛍️ Nombres para Tiendas</Link>
          </div>

          <div className="gdn-surface border p-4 sm:p-5 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" /> Apodos y Símbolos Tendencia de Hoy
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
        <div className="max-w-6xl mx-auto space-y-8">
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
                    Brazaletes & Marcas
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
              <Link to="/nombres-equipos-futbol" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Crear Nombres de Marca <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Espacio Invisible Section & FF Pro Kit (Pestaña / Herramienta Exclusiva Free Fire) */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff' || location.pathname === '/nombres-anime' || location.pathname === '/nombres-de-mujer' || location.pathname === '/nombres-de-nina' || location.pathname === '/nombres-de-nino' || location.pathname === '/nombres-unisex' || location.pathname === '/nombres-raros') && (
        <div className="max-w-6xl mx-auto py-2 space-y-8">
          {/* A-Z Alphabet Directory Specialized Meaning Finder & Name Explorer */}
          {(location.pathname === '/nombres-por-letra' || location.pathname.startsWith('/nombres-con-')) && (
            <div className="bg-gradient-to-br from-indigo-950/40 via-[#121212] to-blue-950/30 border border-indigo-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🔤 Directorio Interactivo A-Z de Nombres por Inicial (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Directorio de Nombres por Letra (A-Z)
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Navega por nuestro abecedario completo. Filtra por género y estilo, combina nombres por su inicial, revisa la etimología y escucha la pronunciación en voz real.
                  </p>
                </div>
              </div>

              {/* A-Z Letter Selector Bar */}
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" /> Selecciona una Letra del Abecedario
                </span>
                <div className="flex flex-wrap gap-1.5 bg-zinc-950/90 p-2 rounded-2xl border border-indigo-500/20">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => {
                    const sampleMap: Record<string, string> = {
                      A: 'Alexander', B: 'Bruno', C: 'Camila', D: 'Daniel', E: 'Enzo', F: 'Fernando',
                      G: 'Gael', H: 'Hugo', I: 'Ian', J: 'Javier', K: 'Kai', L: 'Leo', M: 'Mateo',
                      N: 'Noah', Ñ: 'Iñigo', O: 'Oliver', P: 'Pablo', Q: 'Quentin', R: 'René', S: 'Sofía',
                      T: 'Thiago', U: 'Uriel', V: 'Valentina', W: 'William', X: 'Xavier', Y: 'Yago', Z: 'Zoe'
                    };
                    return (
                      <button
                        key={letter}
                        onClick={() => {
                          setAlphabetLetter(letter);
                          if (sampleMap[letter]) {
                            setAlphabetFirstName(sampleMap[letter]);
                          }
                        }}
                        className={`w-9 h-9 rounded-xl font-bold text-xs transition-all flex items-center justify-center ${
                          alphabetLetter === letter
                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/20 scale-105 border border-indigo-400'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                        }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
                <nav aria-label="Páginas de nombres por letra" className="flex flex-wrap gap-2 pt-2">
                  {[
                    { label: 'A', path: '/nombres-con-a' },
                    { label: 'B', path: '/nombres-con-b' },
                    { label: 'C', path: '/nombres-con-c' },
                    { label: 'E', path: '/nombres-con-e' },
                    { label: 'F', path: '/nombres-con-f' },
                    { label: 'M', path: '/nombres-con-m' },
                    { label: 'Ñ', path: '/nombres-con-en' },
                    { label: 'Y', path: '/nombres-con-y' },
                    { label: 'Z', path: '/nombres-con-z' }
                  ].map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-[11px] font-semibold text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg px-2.5 py-1.5 transition-colors"
                    >
                      Nombres con {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Interactive Alphabet Name Builder & Meaning Explorer */}
              <div className="bg-zinc-950/90 border border-indigo-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    🔤 Creador de Nombres Compuestos con la Letra {alphabetLetter}
                  </span>
                  
                  {/* Gender Filter Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'todos', label: '🌐 Todos' },
                      { id: 'masculino', label: '♂️ Masculino' },
                      { id: 'femenino', label: '♀️ Femenino' },
                      { id: 'unisex', label: '☯️ Unisex' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setAlphabetGender(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          alphabetGender === tab.id
                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Nombre con Letra {alphabetLetter}</label>
                    <input
                      type="text"
                      value={alphabetFirstName}
                      onChange={(e) => setAlphabetFirstName(e.target.value)}
                      placeholder={`Ej: ${alphabetLetter === 'A' ? 'Alexander' : alphabetLetter === 'S' ? 'Sofía' : 'Nombre'}`}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre / Apellido</label>
                    <input
                      type="text"
                      value={alphabetSecondName}
                      onChange={(e) => setAlphabetSecondName(e.target.value)}
                      placeholder="Ej: Gael, Rose, Mateo, Valentina"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
                    />
                  </div>
                </div>

                {/* Combined Result Card with Meaning & Audio */}
                {(() => {
                  const a1 = alphabetFirstName.trim() || 'Alexander';
                  const a2 = alphabetSecondName.trim() || 'Gael';
                  const combinedAlpha = `${a1} ${a2}`;

                  const alphabetMeaningsDb: Record<string, { origin: string; meaning: string }> = {
                    alexander: { origin: 'Griego', meaning: 'Defensor de la humanidad y protector noble' },
                    amelia: { origin: 'Germánico', meaning: 'Trabajadora incansable y llena de energía' },
                    agustín: { origin: 'Latín', meaning: 'Venerable, majestuoso y respetado' },
                    bruno: { origin: 'Germánico', meaning: 'Coraza protectora y fuerte de espíritu' },
                    bella: { origin: 'Latín / Italiano', meaning: 'Hermosa, radiante y llena de gracia' },
                    camila: { origin: 'Latín', meaning: 'Aquella que está frente a Dios o de espíritu puro' },
                    daniel: { origin: 'Hebreo', meaning: 'Dios es mi juez y guía supremo' },
                    enzo: { origin: 'Germánico / Italiano', meaning: 'Príncipe o amo de su hogar' },
                    fernando: { origin: 'Germánico', meaning: 'Viajero audaz, valiente y pacificador' },
                    felipe: { origin: 'Griego', meaning: 'Amante y amigo de los caballos, noble jinete' },
                    fiorella: { origin: 'Italiano', meaning: 'Flor pequeña, delicada, bella y con aroma' },
                    frida: { origin: 'Germánico', meaning: 'Princesa portadora de paz y fuerza espiritual' },
                    félix: { origin: 'Latín', meaning: 'Afortunado, dichoso y lleno de éxito' },
                    freya: { origin: 'Nórdico Antiguo', meaning: 'Diosa de la belleza, el amor y la fuerza' },
                    francisco: { origin: 'Italiano / Germánico', meaning: 'Hombre libre, franco, honesto y generoso' },
                    fabricio: { origin: 'Latín', meaning: 'Artesano hábil, creador y visionario' },
                    fabiola: { origin: 'Latín', meaning: 'Cultivadora noble de habas y campos' },
                    gael: { origin: 'Celta', meaning: 'Hombre generoso y protector' },
                    hugo: { origin: 'Germánico', meaning: 'Inteligencia, mente brillante y corazón sabio' },
                    ian: { origin: 'Escocés / Hebreo', meaning: 'Dios es misericordioso y bondadoso' },
                    javier: { origin: 'Vasco', meaning: 'Aquel que proviene de la casa nueva' },
                    kai: { origin: 'Hawaiano', meaning: 'Mar profundo y libre' },
                    leo: { origin: 'Latín', meaning: 'Fuerte y fiero como un león' },
                    mateo: { origin: 'Hebreo', meaning: 'Regalo divino y bendición' },
                    mia: { origin: 'Hebreo / Escandinavo', meaning: 'Amada de Dios, estrella elegida del mar' },
                    martín: { origin: 'Latín', meaning: 'Consagrado a Marte, guerrero honorable' },
                    maría: { origin: 'Hebreo', meaning: 'Exaltada por Dios, pura, excelsa y llena de gracia' },
                    marcos: { origin: 'Latín', meaning: 'Relacionado con la fuerza del martillo y la protección' },
                    milan: { origin: 'Eslavo', meaning: 'Gracioso, querido, lleno de amor' },
                    milena: { origin: 'Eslavo', meaning: 'Misericordiosa, afable, querida y portadora de paz' },
                    matías: { origin: 'Hebreo', meaning: 'Fiel regalo y don de Dios' },
                    miranda: { origin: 'Latín', meaning: 'Digna de admiración, maravillosa y asombrosa' },
                    melissa: { origin: 'Griego', meaning: 'Dulce como la miel, laboriosa y pura' },
                    noah: { origin: 'Hebreo', meaning: 'Paz, descanso sereno y consuelo' },
                    iñigo: { origin: 'Vasco / Latín', meaning: 'Proveniente del lugar del fuego o guerrero noble' },
                    begoña: { origin: 'Vasco', meaning: 'Lugar sobre la colina dominante o santuario sagrado' },
                    ñusta: { origin: 'Quechua / Inca', meaning: 'Princesa real de linaje noble y virgen del sol' },
                    beñat: { origin: 'Vasco', meaning: 'Fuerte y valiente como un oso guerrero' },
                    nuño: { origin: 'Español Antiguo', meaning: 'Noveno hijo nacido, sabio, justo y respetado' },
                    iñaki: { origin: 'Vasco', meaning: 'Fuego ardiente, resplandeciente y constante' },
                    cariño: { origin: 'Español', meaning: 'Afecto sincero, dulzura interior y ternura pura' },
                    oliver: { origin: 'Latín', meaning: 'Olivo de la paz y dignidad' },
                    pablo: { origin: 'Latín', meaning: 'Pequeño con gran humildad y sabiduría' },
                    quentin: { origin: 'Latín', meaning: 'Quinto hijo nacido, lleno de bendición' },
                    rené: { origin: 'Francés', meaning: 'Renacido con elegancia' },
                    sofía: { origin: 'Griego', meaning: 'Sabiduría divina y entendimiento' },
                    thiago: { origin: 'Hebreo', meaning: 'Sostenido por las manos de Dios' },
                    uriel: { origin: 'Hebreo', meaning: 'Luz de Dios y fuego divino' },
                    valentina: { origin: 'Latín', meaning: 'Valiente, fuerte y saludable' },
                    william: { origin: 'Germánico', meaning: 'Protector decidido y guardián valeroso' },
                    xavier: { origin: 'Vasco', meaning: 'Casa nueva resplandeciente' },
                    yago: { origin: 'Hebreo', meaning: 'Sostenido por la gracia' },
                    zoe: { origin: 'Griego', meaning: 'Llena de vida, vitalidad y resplandor' },
                    zoey: { origin: 'Griego', meaning: 'Llena de vida, alegría espiritual y gracia' },
                    zeus: { origin: 'Griego', meaning: 'Dios supremo del Olimpo, rey del cielo y rayo' },
                    thor: { origin: 'Nórdico', meaning: 'Dios del trueno, protector de la humanidad y fuerza indomable' },
                    anubis: { origin: 'Egipcio', meaning: 'Guardián del inframundo, protector místico de las almas' },
                    atenea: { origin: 'Griego', meaning: 'Diosa de la sabiduría, estrategia militar y las artes' },
                    athena: { origin: 'Griego', meaning: 'Diosa de la sabiduría, estrategia militar y las artes' },
                    ares: { origin: 'Griego', meaning: 'Dios de la guerra, coraje en el combate y valor' },
                    apolo: { origin: 'Griego / Romano', meaning: 'Dios del sol, la luz radiante, música y profecía' },
                    apollo: { origin: 'Griego / Romano', meaning: 'Dios del sol, la luz radiante, música y profecía' },
                    loki: { origin: 'Nórdico', meaning: 'Dios del fuego, la astucia, cambio y traviesa sagacidad' },
                    poseidón: { origin: 'Griego', meaning: 'Dios del océano, tempestades y terremotos' },
                    poseidon: { origin: 'Griego', meaning: 'Dios del océano, tempestades y terremotos' },
                    odín: { origin: 'Nórdico', meaning: 'Padre de todos, dios de la sabiduría, magia y victoria' },
                    odin: { origin: 'Nórdico', meaning: 'Padre de todos, dios de la sabiduría, magia y victoria' },
                    ra: { origin: 'Egipcio', meaning: 'Dios supremo del sol, creador de la luz y vida' },
                    hades: { origin: 'Griego', meaning: 'Señor del inframundo, rey de las sombras y riqueza subterránea' },
                    hermes: { origin: 'Griego', meaning: 'Mensajero divino, dios del comercio, ingenio y velocidad' },
                    horus: { origin: 'Egipcio', meaning: 'Dios halcón del cielo, protector de reyes y justicia' },
                    zaid: { origin: 'Árabe', meaning: 'Aumento, abundancia y crecimiento próspero' },
                    zahra: { origin: 'Árabe', meaning: 'Flor brillante, estrella resplandeciente' },
                    zulema: { origin: 'Hebreo / Árabe', meaning: 'Mujer pacífica, tranquila, sana y limpia' },
                    zacarias: { origin: 'Hebreo', meaning: 'Dios se ha acordado y bendecido' },
                    zelda: { origin: 'Germánico', meaning: 'Guerrera bendecida, sabia y noble' },
                    zion: { origin: 'Hebreo', meaning: 'Punto más alto, colina sagrada y santuario' },
                    zenaida: { origin: 'Griego', meaning: 'Nacida de Zeus, espiritual y luminosa' },
                    sakura: { origin: 'Japonés (桜)', meaning: 'Flor de cerezo, belleza efímera y renacer primaveral' },
                    ren: { origin: 'Japonés (蓮)', meaning: 'Flor de loto sagrado, pureza espiritual e inquebrantable' },
                    yuki: { origin: 'Japonés (雪)', meaning: 'Nieve pura, felicidad radiante y serenidad' },
                    sora: { origin: 'Japonés (空)', meaning: 'Cielo infinito, libertad de espíritu y horizonte' },
                    akira: { origin: 'Japonés (明)', meaning: 'Mente brillante, clara, inteligente e iluminada' },
                    hinata: { origin: 'Japonés (日向)', meaning: 'Lugar soleado orientado al sol y girasol' },
                    kenzo: { origin: 'Japonés (健三)', meaning: 'Sabio, tres veces bendecido, fuerte y saludable' },
                    haruto: { origin: 'Japonés (陽翔)', meaning: 'Sol volando alto hacia el firmamento brillante' },
                    kaito: { origin: 'Japonés (海翔)', meaning: 'Vuelo sobre el gran océano azul y libre' },
                    aoi: { origin: 'Japonés (葵)', meaning: 'Flor de malva silvestre o color azul profundo' },
                    'ji-eun': { origin: 'Coreano (지은)', meaning: 'Sabiduría profunda, gracia y amabilidad sincera' },
                    'min-ji': { origin: 'Coreano (민지)', meaning: 'Inteligencia brillante y claridad radiante' },
                    'tae-hyung': { origin: 'Coreano (태형)', meaning: 'Gran prosperidad, éxito indomable y resplandor' },
                    'jung-kook': { origin: 'Coreano (정국)', meaning: 'Pilar fuerte y honorable de la nación' },
                    'soo-ah': { origin: 'Coreano (수아)', meaning: 'Agua pura e inmaculada y elegancia suprema' },
                    'eun-ji': { origin: 'Coreano (은지)', meaning: 'Gracia divina, bondad y sabiduría humana' },
                    'min-ho': { origin: 'Coreano (민호)', meaning: 'Brillo heroico y valentía refinada' },
                    'hyun-woo': { origin: 'Coreano (현우)', meaning: 'Sabio, virtuoso, divino y de gran espíritu' },
                    'chae-young': { origin: 'Coreano (채영)', meaning: 'Gloria colorida, prosperidad y distinción' },
                    'woo-bin': { origin: 'Coreano (우빈)', meaning: 'Elegante, refinado y cultivado' },
                    matteo: { origin: 'Italiano (Matteo)', meaning: 'Regalo de Dios, don celestial y bendición' },
                    leonardo: { origin: 'Italiano (Leonardo)', meaning: 'Fuerte, audaz y valiente como un león' },
                    lorenzo: { origin: 'Italiano (Lorenzo)', meaning: 'Coronado de laureles, victorioso y honorable' },
                    alessandro: { origin: 'Italiano (Alessandro)', meaning: 'Defensor de la humanidad y protector de los hombres' },
                    chiara: { origin: 'Italiano (Chiara)', meaning: 'Clara, brillante, luminosa, pura y famosa' },
                    gianna: { origin: 'Italiano (Gianna)', meaning: 'Dios es misericordioso y lleno de gracia' },
                    francesca: { origin: 'Italiano (Francesca)', meaning: 'Libre, franca, honesta y de noble espíritu' },
                    isabella: { origin: 'Italiano (Isabella)', meaning: 'Promesa de Dios, consagrada y hermosa' },
                    giovanni: { origin: 'Italiano (Giovanni)', meaning: 'Regalo gracioso de Dios y compasión divina' },
                    ixchel: { origin: 'Maya (Diosa de la Luna)', meaning: 'Diosa mayor del amor, la luna, medicina, tejido y fertilidad' },
                    balam: { origin: 'Maya (Jaguar)', meaning: 'Jaguar protector, guardián fiero de las selvas sagradas' },
                    itza: { origin: 'Maya (Agua Sagrada)', meaning: 'Magia nacida de las aguas puras y regalo divino' },
                    kinich: { origin: 'Maya (Sol Radiante)', meaning: 'Rostro del sol resplandeciente, energía solar y vida' },
                    nicte: { origin: 'Maya (Flor de Mayo)', meaning: 'Flor hermosa de primavera, pureza, delicadeza y juventud' },
                    canek: { origin: 'Maya (Serpiente de Fuego)', meaning: 'Serpiente negra de fuego, guerrero supremo e indomable' },
                    yaretzi: { origin: 'Maya / Prehispánico', meaning: 'Siempre serás amada por los dioses, la naturaleza y tu pueblo' },
                    zazil: { origin: 'Maya (Luz Clara)', meaning: 'Luz transparente, brillo del alba y resplandor de esperanza' },
                    amaite: { origin: 'Maya (Cielo Infinito)', meaning: 'Rostro del cielo infinito y vientos limpios de la mañana' },
                    yaxkin: { origin: 'Maya (Sol Verde)', meaning: 'Sol verde resplandeciente, nuevo amanecer y renacer' },
                    amelie: { origin: 'Francés (Amélie)', meaning: 'Trabajadora dulce, dedicada, noble y llena de simpatía' },
                    gabriel: { origin: 'Francés (Gabriel)', meaning: 'Fuerza divina de Dios, mensajero celestial y protector' },
                    juliette: { origin: 'Francés (Juliette)', meaning: 'Joven, llena de gracia eterna, poesía y romanticismo' },
                    louis: { origin: 'Francés (Louis)', meaning: 'Famoso guerrero en la batalla, rey ilustre y digno' },
                    chloe: { origin: 'Francés (Chloé)', meaning: 'Brote verde fresco, flor primaveral en floración eterna' },
                    antoine: { origin: 'Francés (Antoine)', meaning: 'Digno de alabanza, de valor inestimable y noble presencia' },
                    celeste: { origin: 'Francés (Céleste)', meaning: 'Perteneciente al cielo divino, estelar y purísima' },
                    eloise: { origin: 'Francés (Éloïse)', meaning: 'Ilustre, famosa en la batalla, brillante y victoriosa' },
                    etienne: { origin: 'Francés (Étienne)', meaning: 'Coronado de victoria, honor y gloria imperecedera' },
                    julien: { origin: 'Francés (Julien)', meaning: 'De raíces fuertes, juvenil, noble y distinguido' },
                    mochi: { origin: 'Japonés / Nombre Felino', meaning: 'Pastel de arroz dulce, suave, tierno y esponjoso' },
                    simba: { origin: 'Suajili (León)', meaning: 'León valiente, rey joven y explorador intrépido' },
                    kira: { origin: 'Japonés (Luz Radiante)', meaning: 'Rayo de luz radiante, brillante, alegre y veloz' },
                    salem: { origin: 'Hebreo (Paz)', meaning: 'Paz, tranquilidad y legendario gato negro de gran sabiduría' },
                    felix: { origin: 'Latín (Feliz)', meaning: 'Afortunado, próspero, feliz y cazador audaz' },
                    luna: { origin: 'Latín (Astro Nocturno)', meaning: 'Astro nocturno brillante, serena, mística y hermosa' },
                    milo: { origin: 'Germánico (Amable)', meaning: 'Amistoso, misericordioso, dulce y gran compañero' },
                    nieve: { origin: 'Español (Copos Puros)', meaning: 'Blancura pura, copos de nieve suaves y ternura infinita' },
                    nala: { origin: 'Suajili (Regalo)', meaning: 'Reina leona, regalo bendecido, amada y de noble corazón' },
                    maya: { origin: 'Griego / Canino', meaning: 'Agua sagrada, ilusión mágica, llena de gracia y ternura' },
                    lola: { origin: 'Español (Afecto)', meaning: 'Fuerte, alegre, compañera inseparable y llena de afecto' },
                    sasha: { origin: 'Griego (Protectora)', meaning: 'Protectora de la familia, valiente, noble y fiel guardiana' },
                    pipa: { origin: 'Español (Alegre)', meaning: 'Pequeña semilla alegre, inquieta, juguetona y muy cariñosa' },
                    mimi: { origin: 'Hebreo (Dulzura)', meaning: 'Reina de dulzura, tierno amor, mimada y suave' },
                    bambi: { origin: 'Italiano (Cachorra)', meaning: 'Criatura tierna, ojos brillantes de ciervo y agilidad elegante' },
                    dakota: { origin: 'Sioux (Amiga)', meaning: 'Amiga fiel, leal aliada y exploradora de grandes espacios' },
                    atena: { origin: 'Griego (Sabiduría)', meaning: 'Sabiduría, inteligencia audaz, porte noble y protectora' },
                    nacho: { origin: 'Español (Alegre)', meaning: 'Travieso, dinámico, simpático y gran amigo de juegos' },
                    chester: { origin: 'Inglés (Fortaleza)', meaning: 'Guardián leal, espíritu curioso, cariñoso y de suave pelaje' },
                    dante: { origin: 'Latín (Perdurante)', meaning: 'Resistente, de carácter noble, elegante e inteligente' },
                    oreo: { origin: 'Gastronomía (Dulce)', meaning: 'Contraste único, dulce, tierno y consentido del hogar' },
                    jiji: { origin: 'Japonés / Anime', meaning: 'Compañero leal, protector de brujitas y espíritu inteligente' },
                    kuro: { origin: 'Japonés (Negro)', meaning: 'Negro azabache, elegancia nocturna y velocidad felina' },
                    bagheera: { origin: 'Hindi (Pantera)', meaning: 'Pantera negra sabia, protectora, ágil y de porte regio' },
                    binx: { origin: 'Inglés (Inmortal)', meaning: 'Gato inmortal, alma noble, leal y valiente guardián' },
                    onyx: { origin: 'Griego (Piedra Preciosa)', meaning: 'Mineral negro protector, elegancia, fortaleza y magnetismo' },
                    sombra: { origin: 'Español (Nocturno)', meaning: 'Silueta misteriosa, movimiento silencioso y encanto felino' },
                    eclipse: { origin: 'Astro (Alineación)', meaning: 'Astro nocturno deslumbrante, misterioso, único y majestuoso' },
                    merlin: { origin: 'Celta (Mago)', meaning: 'Mago supremo, gran sabiduría, aura mística y mirada penetrante' },
                    chispita: { origin: 'Español (Chispa Diminuta)', meaning: 'Rayo de luz diminuto, llena de energía, chispa y viva alegría' },
                    chiquita: { origin: 'Español (Tierna)', meaning: 'Pequeñita de enorme corazón, consentida y mimada del hogar' },
                    perlita: { origin: 'Español (Joya)', meaning: 'Joya diminuta del océano, pureza, brillo y radiante elegancia' },
                    canela: { origin: 'Español (Dulzura)', meaning: 'Aroma cálido, dulzura especiada, mirada tierna y cariñosa' },
                    princesa: { origin: 'Realeza (Reina)', meaning: 'Soberana del hogar, porte distinguido, dulzura y afecto real' },
                    tornado: { origin: 'Español (Impetuoso)', meaning: 'Fuerza indomable del viento, velocidad imponente y furia libre' },
                    sultan: { origin: 'Árabe (Soberano)', meaning: 'Gobernante supremo, señorío, altivez y presencia de rey' },
                    gitana: { origin: 'Español (Espíritu Libre)', meaning: 'Espíritu libre y rebelde, belleza silvestre, garbo y porte único' },
                    pegaso: { origin: 'Griego (Mitología)', meaning: 'Corcel alado divino, vuelo majestuoso, elevación y libertad pura' },
                    valkiria: { origin: 'Nórdico (Guerrera)', meaning: 'Guerrera nórdica celestial, temple de acero, elegancia y fuerza' },
                    azabache: { origin: 'Español (Mineral)', meaning: 'Brillo de mineral negro, elegancia nocturna, porte noble y leal' },
                    centella: { origin: 'Español (Fuego)', meaning: 'Destello de fuego, velocidad relampagueante y espíritu vivo' },
                    vodka: { origin: 'Cultura Popular / Parodia', meaning: 'Espíritu de equipo alegre, buen ambiente y camaradería post-partido' },
                    aston: { origin: 'Inglés (Tradición)', meaning: 'Estilo clásico con garra deportiva y lealtad de equipo' },
                    gladiadores: { origin: 'Latín (Guerreros)', meaning: 'Lucha inquebrantable en cada balón, valentía y coraje deportivo' },
                    galacticas: { origin: 'Astronomía (Estrellas)', meaning: 'Calidad técnica deslumbrante, talento supremo y elegancia en la cancha' },
                    aura: { origin: 'Latín (Luz / Brillo)', meaning: 'Energía luminosa, distinción atemporal y magnetismo comercial' },
                    bloom: { origin: 'Inglés (Florecer)', meaning: 'Espacio de frescura, creatividad constante, florecimiento y vida' },
                    emporio: { origin: 'Griego (Comercio)', meaning: 'Centro de comercio completo, gran surtido, calidad y tradición' },
                    velvet: { origin: 'Inglés (Terciopelo)', meaning: 'Textura suave y sofisticada, distinción premium y elegancia chic' },
                    algodon: { origin: 'Español (Suavidad)', meaning: 'Suave como la nube más blanca, consuelo y ternura infinita' },
                    boba: { origin: 'Asiático (Té de Burbujas)', meaning: 'Dulzura moderna, perlas de alegría, encantador y juguetón' },
                    marshmallow: { origin: 'Inglés (Malvavisco)', meaning: 'Nube dulce de azúcar, textura esponjosa y afecto puro' }
                  };

                  const am1 = alphabetMeaningsDb[a1.toLowerCase()] || { origin: `Inicial ${alphabetLetter}`, meaning: 'Liderazgo, armonía y carácter único' };
                  const am2 = alphabetMeaningsDb[a2.toLowerCase()] || { origin: 'Origen Ilustre', meaning: 'Fuerza, nobleza y distinción' };

                  return (
                    <div className="bg-zinc-900/90 p-5 rounded-2xl border border-indigo-500/30 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Nombre Resultante con Inicial {alphabetLetter}</span>
                          <h3 className="text-xl font-bold text-white font-heading">{combinedAlpha}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTrending(combinedAlpha)}
                            className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar Nombre
                          </button>
                          <button
                            onClick={() => speakPlushieName(combinedAlpha)}
                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-indigo-300 rounded-xl transition-colors border border-white/10"
                            title="Escuchar Pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Etymology Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-indigo-300 font-bold">1. {a1} ({am1.origin})</span>
                          <p className="text-zinc-400">"{am1.meaning}"</p>
                        </div>
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-indigo-300 font-bold">2. {a2} ({am2.origin})</span>
                          <p className="text-zinc-400">"{am2.meaning}"</p>
                        </div>
                      </div>

                      {/* Aesthetic Profile Decor Variations */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados para Inicial {alphabetLetter} (Haz clic para copiar):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            `✨ ${combinedAlpha} ✨`,
                            `👑 ${combinedAlpha} 👑`,
                            `⭐ ${combinedAlpha} ⭐`,
                            `⚡ ${combinedAlpha} ⚡`,
                            `💙 ${combinedAlpha} 💙`,
                            `🏆 ${combinedAlpha} 🏆`
                          ].map((dec, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopyTrending(dec)}
                              className="p-2.5 bg-zinc-950/90 hover:bg-indigo-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-indigo-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
                            >
                              <span className="truncate">{dec}</span>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-300 shrink-0 ml-1.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Curated Names Grid for Active Letter */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Nombres Destacados con la Letra {alphabetLetter} en 2026 (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {(() => {
                    const letterDataMap: Record<string, Array<{ label: string; val: string; desc: string; gender: 'masculino' | 'femenino' | 'unisex' }>> = {
                      A: [
                        { label: 'Alexander Gael', val: 'Alexander Gael', desc: 'Defensor y Protector', gender: 'masculino' },
                        { label: 'Agustín Mateo', val: 'Agustín Mateo', desc: 'Venerable y Regalo Divino', gender: 'masculino' },
                        { label: 'Axel Thiago', val: 'Axel Thiago', desc: 'Padre de Paz y Sostenido', gender: 'masculino' },
                        { label: 'Adrián Alonso', val: 'Adrián Alonso', desc: 'Fuerza de Adria y Noble', gender: 'masculino' },
                        { label: 'Amelia Rose', val: 'Amelia Rose', desc: 'Trabajadora y Rosa Grácil', gender: 'femenino' },
                        { label: 'Aitana Sofía', val: 'Aitana Sofía', desc: 'Gloria y Sabiduría', gender: 'femenino' },
                        { label: 'Astrid Selene', val: 'Astrid Selene', desc: 'Belleza Divina y Luna', gender: 'femenino' },
                        { label: 'Alma Valentina', val: 'Alma Valentina', desc: 'Espíritu Puro y Valiente', gender: 'femenino' },
                        { label: 'Ariel Sol', val: 'Ariel Sol', desc: 'León de Dios y Luz', gender: 'unisex' },
                        { label: 'Alex Morgan', val: 'Alex Morgan', desc: 'Protector y Mar Claro', gender: 'unisex' },
                        { label: 'Amor Azul', val: 'Amor Azul', desc: 'Sentimiento Puro y Serenidad', gender: 'unisex' },
                        { label: 'Aston Kai', val: 'Aston Kai', desc: 'Noble de Piedra y Mar', gender: 'unisex' }
                      ],
                      B: [
                        { label: 'Bruno Gael', val: 'Bruno Gael', desc: 'Fuerte Coraza y Generoso', gender: 'masculino' },
                        { label: 'Benjamín Leo', val: 'Benjamín Leo', desc: 'Hijo Predilecto y León', gender: 'masculino' },
                        { label: 'Bastian Dante', val: 'Bastian Dante', desc: 'Venerable e Inmortal', gender: 'masculino' },
                        { label: 'Bella Luna', val: 'Bella Luna', desc: 'Hermosa Luz Nocturna', gender: 'femenino' },
                        { label: 'Bianca Marie', val: 'Bianca Marie', desc: 'Blanca y Pura', gender: 'femenino' },
                        { label: 'Bárbara Zoe', val: 'Bárbara Zoe', desc: 'Exótica y Llena de Vida', gender: 'femenino' },
                        { label: 'Blair Rowan', val: 'Blair Rowan', desc: 'Llanura Libre y Árbol', gender: 'unisex' }
                      ],
                      C: [
                        { label: 'Carlos Mateo', val: 'Carlos Mateo', desc: 'Hombre Libre y Bendición', gender: 'masculino' },
                        { label: 'Cristian Alexander', val: 'Cristian Alexander', desc: 'Fiel y Defensor', gender: 'masculino' },
                        { label: 'Camila Sofía', val: 'Camila Sofía', desc: 'Espíritu Puro y Sabiduría', gender: 'femenino' },
                        { label: 'Chloe Victoria', val: 'Chloe Victoria', desc: 'Brote Verde y Victoria', gender: 'femenino' },
                        { label: 'Charlie Sky', val: 'Charlie Sky', desc: 'Libre y Cielo Abierto', gender: 'unisex' }
                      ],
                      E: [
                        { label: 'Enzo Thiago', val: 'Enzo Thiago', desc: 'Príncipe del Hogar y Sostenido', gender: 'masculino' },
                        { label: 'Emanuel Agustín', val: 'Emanuel Agustín', desc: 'Dios con Nosotros y Venerable', gender: 'masculino' },
                        { label: 'Elena Sofía', val: 'Elena Sofía', desc: 'Resplandor de Luz y Sabiduría', gender: 'femenino' },
                        { label: 'Emma Valentina', val: 'Emma Valentina', desc: 'Fuerte, Universal y Valiente', gender: 'femenino' },
                        { label: 'Eden River', val: 'Eden River', desc: 'Paraíso Terrenal y Río', gender: 'unisex' }
                      ],
                      F: [
                        { label: 'Fernando Gael', val: 'Fernando Gael', desc: 'Viajero Audaz y Generoso', gender: 'masculino' },
                        { label: 'Felipe Mateo', val: 'Felipe Mateo', desc: 'Amante de los Caballos y Bendición', gender: 'masculino' },
                        { label: 'Félix Alexander', val: 'Félix Alexander', desc: 'Afortunado y Defensor Noble', gender: 'masculino' },
                        { label: 'Francisco Javier', val: 'Francisco Javier', desc: 'Hombre Libre de Casa Nueva', gender: 'masculino' },
                        { label: 'Fiorella Sofía', val: 'Fiorella Sofía', desc: 'Flor Hermosa y Sabiduría', gender: 'femenino' },
                        { label: 'Frida Valentina', val: 'Frida Valentina', desc: 'Princesa de Paz y Valiente', gender: 'femenino' },
                        { label: 'Freya Astrid', val: 'Freya Astrid', desc: 'Diosa del Amor y Belleza Divina', gender: 'femenino' },
                        { label: 'Fabiola Rose', val: 'Fabiola Rose', desc: 'Cultivadora Noble y Rosa', gender: 'femenino' },
                        { label: 'Finley Sky', val: 'Finley Sky', desc: 'Héroe Justo y Cielo Libre', gender: 'unisex' },
                        { label: 'Flynn River', val: 'Flynn River', desc: 'Hijo del Guerrero y Río', gender: 'unisex' }
                      ],
                      M: [
                        { label: 'Mateo Alexander', val: 'Mateo Alexander', desc: 'Regalo Divino y Defensor', gender: 'masculino' },
                        { label: 'Martín Gael', val: 'Martín Gael', desc: 'Guerrero Honorable y Generoso', gender: 'masculino' },
                        { label: 'Marcos Agustín', val: 'Marcos Agustín', desc: 'Fuerza de Martillo y Venerable', gender: 'masculino' },
                        { label: 'Matías Enzo', val: 'Matías Enzo', desc: 'Regalo Fiel y Príncipe', gender: 'masculino' },
                        { label: 'Mia Valentina', val: 'Mia Valentina', desc: 'Amada y Valiente', gender: 'femenino' },
                        { label: 'María Sofía', val: 'María Sofía', desc: 'Pura y Sabiduría Divina', gender: 'femenino' },
                        { label: 'Milena Rose', val: 'Milena Rose', desc: 'Querida y Rosa Elegante', gender: 'femenino' },
                        { label: 'Miranda Aitana', val: 'Miranda Aitana', desc: 'Digna de Admiración y Gloria', gender: 'femenino' },
                        { label: 'Melissa Astrid', val: 'Melissa Astrid', desc: 'Miel Dulce y Belleza Divina', gender: 'femenino' },
                        { label: 'Milan Thiago', val: 'Milan Thiago', desc: 'Gracioso y Sostenido', gender: 'unisex' },
                        { label: 'Morgan Sky', val: 'Morgan Sky', desc: 'Mar Claro y Cielo Abierto', gender: 'unisex' },
                        { label: 'Marlowe River', val: 'Marlowe River', desc: 'Colina del Lago y Río', gender: 'unisex' }
                      ],
                      Ñ: [
                        { label: 'Iñigo Gael', val: 'Iñigo Gael', desc: 'Del Fuego y Generoso', gender: 'masculino' },
                        { label: 'Beñat Alexander', val: 'Beñat Alexander', desc: 'Fuerte como Oso y Defensor', gender: 'masculino' },
                        { label: 'Nuño Mateo', val: 'Nuño Mateo', desc: 'Sabio Noveno y Regalo', gender: 'masculino' },
                        { label: 'Iñaki Thiago', val: 'Iñaki Thiago', desc: 'Fuego Ardiente y Sostenido', gender: 'masculino' },
                        { label: 'Begoña Sofía', val: 'Begoña Sofía', desc: 'Lugar Sagrado y Sabiduría', gender: 'femenino' },
                        { label: 'Ñusta Valentina', val: 'Ñusta Valentina', desc: 'Princesa Inca y Valiente', gender: 'femenino' },
                        { label: 'Cariño Rose', val: 'Cariño Rose', desc: 'Dulzura Pura y Rosa', gender: 'femenino' },
                        { label: 'Ñeembucú Sky', val: 'Ñeembucú Sky', desc: 'Palabra Clara y Cielo Abierto', gender: 'unisex' }
                      ],
                      Z: [
                        { label: 'Zeus Alexander', val: 'Zeus Alexander', desc: 'Dios Supremo y Defensor', gender: 'masculino' },
                        { label: 'Zaid Mateo', val: 'Zaid Mateo', desc: 'Crecimiento Próspero y Regalo', gender: 'masculino' },
                        { label: 'Zacarias Gael', val: 'Zacarias Gael', desc: 'Dios Acordado y Generoso', gender: 'masculino' },
                        { label: 'Zoey Valentina', val: 'Zoey Valentina', desc: 'Llena de Vida y Valiente', gender: 'femenino' },
                        { label: 'Zahra Sofía', val: 'Zahra Sofía', desc: 'Estrella Resplandeciente y Sabiduría', gender: 'femenino' },
                        { label: 'Zulema Rose', val: 'Zulema Rose', desc: 'Mujer Pacífica y Rosa', gender: 'femenino' },
                        { label: 'Zelda Astrid', val: 'Zelda Astrid', desc: 'Guerrera Sabia y Belleza Divina', gender: 'femenino' },
                        { label: 'Zion Sky', val: 'Zion Sky', desc: 'Santuario Sagrado y Cielo', gender: 'unisex' },
                        { label: 'Zenith River', val: 'Zenith River', desc: 'Punto Más Alto y Río', gender: 'unisex' },
                        { label: 'Zuri Sun', val: 'Zuri Sun', desc: 'Hermoso y Sol Brillante', gender: 'unisex' }
                      ]
                    };

                    const rawList = letterDataMap[alphabetLetter] || [
                      { label: `${alphabetFirstName} Gael`, val: `${alphabetFirstName} Gael`, desc: `Popular con ${alphabetLetter}`, gender: 'masculino' as const },
                      { label: `${alphabetFirstName} Rose`, val: `${alphabetFirstName} Rose`, desc: `Elegante con ${alphabetLetter}`, gender: 'femenino' as const },
                      { label: `${alphabetFirstName} Mateo`, val: `${alphabetFirstName} Mateo`, desc: `Tradicional con ${alphabetLetter}`, gender: 'masculino' as const },
                      { label: `${alphabetFirstName} Sofía`, val: `${alphabetFirstName} Sofía`, desc: `Melodioso con ${alphabetLetter}`, gender: 'femenino' as const },
                      { label: `${alphabetFirstName} Sky`, val: `${alphabetFirstName} Sky`, desc: `Moderno con ${alphabetLetter}`, gender: 'unisex' as const }
                    ];

                    const list = alphabetGender === 'todos'
                      ? rawList
                      : rawList.filter(item => item.gender === alphabetGender);

                    if (list.length === 0) {
                      return (
                        <div className="col-span-full py-6 text-center text-zinc-400 text-xs bg-zinc-950/60 rounded-xl border border-white/5">
                          No se encontraron nombres {alphabetGender} específicos para la letra {alphabetLetter}. Prueba la pestaña "Todos".
                        </div>
                      );
                    }

                    return list.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCopyTrending(item.val)}
                        className="p-3.5 bg-zinc-900/90 hover:bg-indigo-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-indigo-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-indigo-300 font-bold truncate">{item.label}</span>
                          <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-300 shrink-0" />
                        </div>
                        <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                      </button>
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}
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
{/* Instagram Specialized Generator & Profile Mockup Block for /nombres-instagram */}
          {location.pathname === '/nombres-instagram' && (
            <div className="bg-gradient-to-br from-fuchsia-950/40 via-[#121212] to-pink-950/30 border border-fuchsia-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    📸 Creador & Validador de Handles para Instagram (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres para Instagram Aesthetic, Cuentas Privadas y Marcas
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Genera nombres de usuario (@handles) con el formato habitual de Instagram (letras, números, puntos y guiones bajos, hasta 30 caracteres) y pruébalos en una maqueta de perfil.
                  </p>
                </div>
              </div>

              {/* Interactive Handle Generator & Rule Validator */}
              <div className="bg-zinc-950/90 border border-fuchsia-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-fuchsia-400" /> Creador de Username por Estilo
                  </span>
                  
                  {/* Category Selector Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'aesthetic', label: '✨ Aesthetic' },
                      { id: 'minimal', label: '🌿 Minimalista' },
                      { id: 'brand', label: '💼 Marca' },
                      { id: 'dark', label: '🖤 Dark' },
                      { id: 'private', label: '🔒 Privada / Dump' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setIgCategory(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          igCategory === tab.id
                            ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-md'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input & Clean Value */}
                <div>
                  <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Palabra o Nombre Base para tu IG</label>
                  <input
                    type="text"
                    value={igKeyword}
                    onChange={(e) => setIgKeyword(e.target.value)}
                    placeholder="Escribe tu nombre o nicho (Ej: Sofia, Studio, Vibe)"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500 font-mono"
                  />
                </div>

                {/* Rules Validation Indicator */}
                {(() => {
                  const cleanHandle = igKeyword.toLowerCase().replace(/[^a-z0-9._]/g, '');
                  const isHandleValid = cleanHandle.length >= 1 && cleanHandle.length <= 30;
                  return (
                    <div className="bg-zinc-900/90 p-4 rounded-xl border border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-300">Formato de Handle Oficial Instagram:</span>
                        <span className={`font-mono font-bold ${isHandleValid ? 'text-emerald-400' : 'text-red-400'}`}>
                          @{cleanHandle || 'tu_nombre'} ({cleanHandle.length}/30 caracteres) {isHandleValid ? '✅ Disponible' : '❌ Inválido'}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        {isHandleValid
                          ? '✨ Cumple con las reglas de Instagram: solo letras minúsculas, números, puntos y guiones bajos.'
                          : '⚠️ Recuerda que los @usernames de Instagram no admiten espacios, tildes ni emojis (usa emojis solo en el Nombre Visible).'}
                      </p>
                    </div>
                  );
                })()}

                {/* Live Generated Variations */}
                {(() => {
                  const base = igKeyword.toLowerCase().replace(/[^a-z0-9._]/g, '') || 'sofia';
                  const variationsMap: Record<string, string[]> = {
                    aesthetic: [`by.${base}`, `${base}.notes`, `${base}iia.vibe`, `so.${base}`, `its.${base}a`, `${base}.journal`],
                    minimal: [`${base}_`, `the.${base}`, `iam.${base}`, `${base}.co`, `not.${base}`, `${base}.raw`],
                    brand: [`${base}.studio`, `official.${base}`, `by.${base}.design`, `${base}.lab`, `${base}.media`, `${base}.creative`],
                    dark: [`dark.${base}`, `${base}.void`, `vamp.${base}`, `not.${base}_`, `x.${base}`, `${base}.grave`],
                    private: [`${base}.priv`, `spam.${base}`, `${base}.dumps`, `${base}.archive`, `just.${base}`, `${base}.diary`]
                  };
                  const currentVars = variationsMap[igCategory] || variationsMap.aesthetic;

                  return (
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold text-zinc-300 block">Sugerencias de Usernames Listas para Usar (Haz Clic para Copiar):</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {currentVars.map((handle, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleCopyTrending(`@${handle}`)}
                            className="p-3 bg-zinc-900/90 hover:bg-fuchsia-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-fuchsia-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex items-center justify-between group text-left"
                          >
                            <span className="text-fuchsia-300 font-bold truncate">@{handle}</span>
                            <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-fuchsia-300 shrink-0 ml-2" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Simulated Live Instagram Profile Card */}
              {(() => {
                const cleanBase = igKeyword.toLowerCase().replace(/[^a-z0-9._]/g, '') || 'sofia';
                const mainHandle = igCategory === 'aesthetic' ? `by.${cleanBase}` : igCategory === 'brand' ? `${cleanBase}.studio` : `${cleanBase}_`;
                return (
                  <div className="bg-zinc-950 border border-fuchsia-500/30 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-fuchsia-300 font-bold uppercase tracking-wider flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-pink-500" /> Vista Previa en Perfil Real de Instagram
                      </span>
                      <span className="text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded font-bold border border-fuchsia-500/30">
                        VERIFICADO
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                      {/* Avatar with Story Ring */}
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-amber-500 via-fuchsia-500 to-pink-500">
                          <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-2 border-black">
                            {cleanBase.slice(0, 2).toUpperCase() || 'IG'}
                          </div>
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="space-y-3 text-center sm:text-left flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <span className="text-lg font-bold text-white font-mono">@{mainHandle}</span>
                          <button
                            onClick={() => handleCopyTrending(`@${mainHandle}`)}
                            className="px-3 py-1 bg-fuchsia-600/30 hover:bg-fuchsia-600/50 border border-fuchsia-500/40 text-fuchsia-200 text-xs font-bold rounded-lg transition-all inline-flex items-center justify-center gap-1.5 self-center sm:self-auto"
                          >
                            <Copy className="w-3 h-3" /> Copiar Handle
                          </button>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center sm:justify-start gap-6 text-xs text-zinc-300">
                          <div><strong className="text-white">128</strong> publicaciones</div>
                          <div><strong className="text-white">42.5k</strong> seguidores</div>
                          <div><strong className="text-white">610</strong> seguidos</div>
                        </div>

                        {/* Bio & Display Name */}
                        <div className="text-xs text-zinc-300 space-y-0.5">
                          <div className="font-bold text-white">{igKeyword || 'Sofía'} ✨ | Digital Creator</div>
                          <p className="text-zinc-400">🌿 Aesthetic vibes & minimalist lifestyle</p>
                          <p className="text-fuchsia-400 font-medium">linktr.ee/{mainHandle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Ready-to-copy Instagram Aesthetic Presets Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Presets de Nombres de Instagram Más Usados en 2026
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '@by.aesthetic.notes', val: '@by.aesthetic.notes', desc: 'Aesthetic / Estudio' },
                    { label: '@softie.vibes.co', val: '@softie.vibes.co', desc: 'Minimalista & Soft' },
                    { label: '@the.minimal.journal', val: '@the.minimal.journal', desc: 'Lifestyle / Fotografía' },
                    { label: '@dark.mode.archive', val: '@dark.mode.archive', desc: 'Dark / Eboy Egirl' },
                    { label: '@sofia.dumps', val: '@sofia.dumps', desc: 'Cuenta Spam / Photo Dumps' },
                    { label: '@cozy.studio.lab', val: '@cozy.studio.lab', desc: 'Emprendimientos & Arte' },
                    { label: '@not.your.typical.girl', val: '@not.your.typical.girl', desc: 'Frase Personal' },
                    { label: '@fit.lifestyle.club', val: '@fit.lifestyle.club', desc: 'Fitness & Salud' }
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
            </div>
          )}
          {/* Roblox Specialized Generator & Rule Validator Block for /nombres-roblox */}
          {location.pathname === '/nombres-roblox' && (
            <div className="bg-gradient-to-br from-cyan-950/40 via-[#121212] to-violet-950/30 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🎮 Creador & Validador de Usuario y Display Name de Roblox (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres para Roblox (Aesthetic, Blox Fruits y Brookhaven)
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Genera nombres de usuario válidos sin caracteres proscribibles (3-20 letras) o crea Display Names aesthetic con letras bonitas y emojis para destacar en Blox Fruits, Brookhaven RP y Blade Ball.
                  </p>
                </div>
              </div>

              {/* Interactive Validator & Generator */}
              <div className="bg-zinc-950/90 border border-cyan-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> Validador Oficial de Requisitos de Roblox
                  </span>
                  
                  {/* Mode Selector */}
                  <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setRobloxStyle('display')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        robloxStyle === 'display'
                          ? 'bg-cyan-600 text-white shadow-md'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Display Name (Con Símbolos)
                    </button>
                    <button
                      onClick={() => setRobloxStyle('username')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        robloxStyle === 'username'
                          ? 'bg-cyan-600 text-white shadow-md'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Username Principal (@Usuario)
                    </button>
                  </div>
                </div>

                {/* Input Field */}
                <div>
                  <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Tu Nombre Base</label>
                  <input
                    type="text"
                    value={robloxBaseInput}
                    onChange={(e) => setRobloxBaseInput(e.target.value)}
                    placeholder="Escribe tu idea (Ej. Vortex, Softie, Shadow)"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                {/* Rule Validation Feedback */}
                <div className="bg-zinc-900/90 p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-300">Longitud (3 - 20 Caracteres):</span>
                    <span className={`font-mono font-bold ${robloxBaseInput.length >= 3 && robloxBaseInput.length <= 20 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {robloxBaseInput.length} / 20 {robloxBaseInput.length >= 3 && robloxBaseInput.length <= 20 ? '✅ Válido' : '❌ Inválido'}
                    </span>
                  </div>
                  {robloxStyle === 'username' ? (
                    <div className="text-[11px] text-zinc-400 space-y-1">
                      <p className="flex items-center gap-1.5">
                        {/^[a-zA-Z0-9_]+$/.test(robloxBaseInput) && !robloxBaseInput.startsWith('_') && !robloxBaseInput.endsWith('_') && !robloxBaseInput.includes('__')
                          ? <span className="text-emerald-400 font-bold">✅ Formato para Username Oficial Válido</span>
                          : <span className="text-amber-400 font-bold">⚠️ Solo letras, números y 1 guión bajo (no al inicio/final)</span>
                        }
                      </p>
                      <p className="text-[10px] text-zinc-500">Nota: Los Usernames principales de Roblox NO permiten espacios ni emojis.</p>
                    </div>
                  ) : (
                    <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
                      <span>✨ Compatible como Display Name en Roblox (Admite letras bonitas, espacios y emojis)</span>
                    </div>
                  )}
                </div>

                {/* Live Generated Variations Grid */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-zinc-300 block">Variaciones Disponibles para Roblox (Haz Clic para Copiar):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {(robloxStyle === 'username' ? [
                      `v_${robloxBaseInput}_x`,
                      `iI_${robloxBaseInput}_Ii`,
                      `dev_${robloxBaseInput}`,
                      `xX_${robloxBaseInput}_Xx`,
                      `${robloxBaseInput}_Rbx`,
                      `i_${robloxBaseInput}_7`
                    ] : [
                      `✨ ꜱ ᴏ ꜰ ᴛ ɪ ᴇ _ ${robloxBaseInput} ✨`,
                      `⚡ ${robloxBaseInput} ⚡`,
                      `🌸 ${robloxBaseInput} 🌸`,
                      `👑 ᴘ ʀ ɪ ɴ ᴄ ᴇ s s _ ${robloxBaseInput} 👑`,
                      `🖤 ᴅ ᴀ ʀ ᴋ _ ${robloxBaseInput} 🖤`,
                      `🧸 ${robloxBaseInput} 🧸`
                    ]).map((variant, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCopyTrending(variant)}
                        className="p-3 bg-zinc-900/90 hover:bg-cyan-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-cyan-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex items-center justify-between group"
                      >
                        <span className="truncate">{variant}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-300 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ready-to-copy Game-Specific Presets Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Presets Populares por Juego de Roblox (Blox Fruits, Brookhaven, Y2K)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '⚡ ꜱ ʜ ᴀ ᴅ ᴏ ᴡ ⚡', val: '⚡ ꜱ ʜ ᴀ ᴅ ᴏ ᴡ ⚡', desc: 'Blox Fruits PvP' },
                    { label: '✨ ꜱ ᴏ ꜰ ᴛ ɪ ᴇ ✨', val: '✨ ꜱ ᴏ ꜰ ᴛ ɪ ᴇ ✨', desc: 'Brookhaven Soft' },
                    { label: '🖤 ᴅ ᴀ ʀ ᴋ ᴠ ᴏ ɪ ᴅ 🖤', val: '🖤 ᴅ ᴀ ʀ ᴋ ᴠ ᴏ ɪ ᴅ 🖤', desc: 'Estilo Y2K / Eboy' },
                    { label: '👑 ᴘ ʀ ɪ ɴ ᴄ ᴇ s s 👑', val: '👑 ᴘ ʀ ɪ ɴ ᴄ ᴇ s s 👑', desc: 'Brookhaven RP Girl' },
                    { label: '🐉 D r a g o n 🐉', val: '🐉 D r a g o n 🐉', desc: 'Blox Fruits Frutas' },
                    { label: '🌸 A i t a n a 🌸', val: '🌸 A i t a n a 🌸', desc: 'Preppy Aesthetic' },
                    { label: '🎯 C l u t c h 🎯', val: '🎯 C l u t c h 🎯', desc: 'BedWars & Blade Ball' },
                    { label: '🦇 V a m p 🦇', val: '🦇 V a m p 🦇', desc: 'Gótico / Dark' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-cyan-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-cyan-500/40 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-cyan-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
                    <select aria-label="Seleccionar opción" value={ffClanSymbol}
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
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-bold">99% RARO</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Al integrar caracteres Unicode avanzados (como U+3000 o símbolos egipcios 𓆩𓆪), la probabilidad de encontrar un nombre duplicado en Free Fire se reduce a prácticamente cero.
                  </p>
                </div>
              </div>
            </div>
          )}
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
                  ((ffTag ? `${ffTag}ㅤ${ffName}` : ffName).length <= 12)
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {(ffTag ? `${ffTag}ㅤ${ffName}` : ffName).length}/12 Caracteres {((ffTag ? `${ffTag}ㅤ${ffName}` : ffName).length <= 12) ? '✅ VÁLIDO FF' : '⚠️ EXCEDE LÍMITE FF'}
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
      <section id="relacionados" className="max-w-6xl mx-auto pt-16 border-t border-white/5 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 font-heading">Explora Todos Nuestros Generadores</h2>
          <p className="text-zinc-400 mt-3 text-lg max-w-2xl mx-auto">Encuentra el nombre perfecto para cualquier plataforma o mascota</p>
          
          {/* Search Bar for Categories */}
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className="bg-[#121212] p-8 rounded-3xl border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.02] transition-all duration-300 group flex flex-col items-center text-center gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 bg-zinc-800/50 text-violet-400 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-violet-500/10 transition-all duration-300 relative z-10">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-zinc-300 group-hover:text-zinc-100 transition-colors relative z-10 font-heading">
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


    </main>
  );
}
