'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '../utils/router';
import { Link } from '../components/Link';
import { HelpCircle, ChevronRight, Flame, Zap, Gem, Shield, Smartphone, CheckCircle2, Search, Sparkles, Copy, Volume2, Instagram, Gamepad2, Tv, Swords, Printer, Bookmark, Trash2, Heart, Share2, X, Download, CheckSquare, Square, ListOrdered, Home, Star } from 'lucide-react';
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
import { allLinks } from '../data/allLinks';
import type { CategoryData } from '../data/seoData';

export default function CategoryPage({ initialPath, data }: { initialPath?: string; data: CategoryData }) {
  const routerLocation = useLocation();
  const currentPath = initialPath || routerLocation.pathname || '/';
  const location = { pathname: currentPath };
  const [showToast, setShowToast] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
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
  const [robloxInput, setRobloxInput] = useState('v_softie_x');
  const [igInput, setIgInput] = useState('iam.sofia_');

  // Interactive modules state
  const [teamPrefix, setTeamPrefix] = useState('Real');
  const [teamBase, setTeamBase] = useState('Tapitas');
  const [teamMascot, setTeamMascot] = useState('🦅');
  const [teamSlogan, setTeamSlogan] = useState('Unidos por la Gloria y el Balón');
  const [teamKitColor, setTeamKitColor] = useState('🔴🔵 Azulgrana');
  const [teamCategoryTab, setTeamCategoryTab] = useState('Graciosos 🍺');
  
  const [jpCategoryTab, setJpCategoryTab] = useState('Todos 🌸');
  const [jpCustomName, setJpCustomName] = useState('Sakura');
  const [jpCustomKanji, setJpCustomKanji] = useState('桜');
  const [jpSelectedFrame, setJpSelectedFrame] = useState('🌸 [Name] 🌸');

  const speakJapanese = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [krCategoryTab, setKrCategoryTab] = useState('Todos 🇰🇷');
  const [krCustomName, setKrCustomName] = useState('Min-Ji');
  const [krCustomHangul, setKrCustomHangul] = useState('민지');
  const [krSelectedSurname, setKrSelectedSurname] = useState('Kim (김)');
  const [krSelectedFrame, setKrSelectedFrame] = useState('✨ [Surname] [Name] ([Hangul]) ✨');

  const speakKorean = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [frCategoryTab, setFrCategoryTab] = useState('Todos 🇫🇷');
  const [frCustomName, setFrCustomName] = useState('Amélie');
  const [frTitlePrefix, setFrTitlePrefix] = useState('Mademoiselle');
  const [frSelectedFrame, setFrSelectedFrame] = useState('⚜️ [Title] [Name] ⚜️');

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [myCategoryTab, setMyCategoryTab] = useState('Todos 🗿');
  const [myCustomName, setMyCustomName] = useState('Ixchel');
  const [myTotem, setMyTotem] = useState('Jaguar 🐆');
  const [mySelectedFrame, setMySelectedFrame] = useState('🗿 [Totem] • [Name] • 🪶 🗿');

  const speakMaya = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-MX';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [dogCategoryTab, setDogCategoryTab] = useState('Todas 🐾');
  const [dogCustomName, setDogCustomName] = useState('Luna');
  const [dogPersonality, setDogPersonality] = useState('Tierna 💖');
  const [dogSelectedFrame, setDogSelectedFrame] = useState('🌸 [Name] 🌸');

  const speakDogName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [catCategoryTab, setCatCategoryTab] = useState('Todos 🐱');
  const [catCustomName, setCatCustomName] = useState('Mochi');
  const [catBreedType, setCatBreedType] = useState('Gato Naranjita 🍊');
  const [catSelectedFrame, setCatSelectedFrame] = useState('🐾 [Name] • Michi 🐾');

  const speakCatName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [blackCatCategoryTab, setBlackCatCategoryTab] = useState('Todos 🐈‍⬛');
  const [blackCatCustomName, setBlackCatCustomName] = useState('Salem');
  const [blackCatVibe, setBlackCatVibe] = useState('Místico 🔮');
  const [blackCatSelectedFrame, setBlackCatSelectedFrame] = useState('🐈‍⬛ [Name] • Salem 🔮');

  const speakBlackCatName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.pitch = 0.8;
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [maleCatCategoryTab, setMaleCatCategoryTab] = useState('Todos 🐱');
  const [maleCatCustomName, setMaleCatCustomName] = useState('Simba');
  const [maleCatPersonality, setMaleCatPersonality] = useState('Épico / Rey 👑');
  const [maleCatSelectedFrame, setMaleCatSelectedFrame] = useState('🦁 [Name] • King 👑');

  const speakMaleCatName = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const [dogLetter, setDogLetter] = useState('A');
  const [catMaleCategory, setCatMaleCategory] = useState('Todos');

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

  // Persistent Favorites Drawer state
  const [savedFavorites, setSavedFavorites] = useState<string[]>(() => {
    try {
      const local = localStorage.getItem('nombres_favoritos_saved');
      return local ? JSON.parse(local) : ['Algodón 🧸', 'Mochi 🍡', '⚡ N I N J A ⚡'];
    } catch {
      return ['Algodón 🧸', 'Mochi 🍡'];
    }
  });
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [favSearchTerm, setFavSearchTerm] = useState('');

  const toggleFavorite = (name: string) => {
    setSavedFavorites(prev => {
      const exists = prev.includes(name);
      const updated = exists ? prev.filter(n => n !== name) : [...prev, name];
      try {
        localStorage.setItem('nombres_favoritos_saved', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const [ffClanTag, setFfClanTag] = useState('7K');
  const [ffClanName, setFfClanName] = useState('MAFIA');
  const [ffClanSymbol, setFfClanSymbol] = useState('⚡');

  const [robloxBaseInput, setRobloxBaseInput] = useState('Vortex');
  const [robloxStyle, setRobloxStyle] = useState<'username' | 'display'>('display');

  const [igKeyword, setIgKeyword] = useState('Sofia');
  const [igCategory, setIgCategory] = useState<'aesthetic' | 'minimal' | 'brand' | 'dark' | 'private'>('aesthetic');

  const [animeBaseName, setAnimeBaseName] = useState('Kuro');
  const [animeSuffix, setAnimeSuffix] = useState('-sama');
  const [animeArchetype, setAnimeArchetype] = useState<'shonen' | 'villain' | 'kawaii' | 'isekai' | 'ninja'>('shonen');

  const [femaleFirstName, setFemaleFirstName] = useState('Sofía');
  const [femaleSecondName, setFemaleSecondName] = useState('Valentina');
  const [femaleVibe, setFemaleVibe] = useState<'elegante' | 'corto' | 'biblico' | 'moderno' | 'internacional'>('elegante');

  const [maleFirstName, setMaleFirstName] = useState('Mateo');
  const [maleSecondName, setMaleSecondName] = useState('Gael');
  const [maleVibe, setMaleVibe] = useState<'moderno' | 'raro' | 'corto' | 'fuerte' | 'biblico'>('moderno');

  const [unisexFirstName, setUnisexFirstName] = useState('Alex');
  const [unisexSecondName, setUnisexSecondName] = useState('Morgan');
  const [unisexVibe, setUnisexVibe] = useState<'moderno' | 'naturaleza' | 'elegante' | 'mistico'>('moderno');

  const [rareFirstName, setRareFirstName] = useState('Orion');
  const [rareSecondName, setRareSecondName] = useState('Cassian');
  const [rareVibe, setRareVibe] = useState<'mitologia' | 'espacial' | 'antiguo' | 'fantasia'>('mitologia');


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

  const isLengthValid = robloxInput.length >= 3 && robloxInput.length <= 20;
  const isCharsValid = /^[a-zA-Z0-9_]+$/.test(robloxInput) || robloxInput === '';
  const isUnderscoreValid = (robloxInput.match(/_/g) || []).length <= 1;
  const isEdgeUnderscoreValid = !robloxInput.startsWith('_') && !robloxInput.endsWith('_');
  const isRobloxValid = isLengthValid && isCharsValid && isUnderscoreValid && isEdgeUnderscoreValid;

  const isIgLenValid = igInput.length >= 1 && igInput.length <= 30;
  const isIgCharsValid = /^[a-zA-Z0-9._]+$/.test(igInput) || igInput === '';
  const isIgDotEdgeValid = !igInput.startsWith('.') && !igInput.endsWith('.');
  const isIgConsecutiveDotValid = !igInput.includes('..');
  const isIgValid = isIgLenValid && isIgCharsValid && isIgDotEdgeValid && isIgConsecutiveDotValid;

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

  const [homeActiveTool, setHomeActiveTool] = useState<'ff' | 'invisible' | 'alphabet' | 'store'>('ff');

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

    if (document.title !== data.title) {
      document.title = data.title;
    }
  }, [data, location.pathname]);

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 relative">
      
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
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 max-w-4xl mx-auto px-1" itemScope itemType="https://schema.org/BreadcrumbList">
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
      <div className="text-center max-w-4xl mx-auto space-y-6" id="generador">
        <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 tracking-tight pb-2 leading-tight">
          {data.h1}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed min-h-[3.5rem]">
          {data.subtitle}
        </p>

        {/* Table of Contents / Índice Rápido */}
        <div className="bg-zinc-900/90 border border-violet-500/20 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto text-left shadow-xl">
          <div className="flex items-center gap-2 text-violet-300 font-bold text-xs uppercase tracking-wider mb-2">
            <ListOrdered className="w-4 h-4 text-violet-400" /> Índice de Contenidos Rápido
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <a href="#generador" className="p-2 rounded-xl bg-zinc-800/80 hover:bg-violet-600/30 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-white/5 font-medium">
              <span>⚡</span> Generador
            </a>
            <a href="#articulos-guia" className="p-2 rounded-xl bg-zinc-800/80 hover:bg-violet-600/30 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-white/5 font-medium">
              <span>📖</span> Guía
            </a>
            {data.faqs && data.faqs.length > 0 && (
              <a href="#preguntas-frecuentes" className="p-2 rounded-xl bg-zinc-800/80 hover:bg-violet-600/30 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-white/5 font-medium">
                <span>❓</span> Preguntas
              </a>
            )}
            <a href="#relacionados" className="p-2 rounded-xl bg-zinc-800/80 hover:bg-violet-600/30 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-white/5 font-medium">
              <span>🔗</span> Más Nombres
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8">
        <Generator 
          title={location.pathname === '/' ? 'Generador de Nombres, Apodos y Símbolos' : data.h1}
          defaultName={data.defaultName || "Gamer"}
          customSymbols={data.customSymbols}
        />

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

      {/* Quick Tool Switcher Bar for Homepage */}
      {location.pathname === '/' && (
        <div className="space-y-6">
          {/* Trending 1-Click Copy Bar */}
          <div className="bg-gradient-to-r from-violet-950/60 via-zinc-900 to-fuchsia-950/60 border border-violet-500/20 p-4 sm:p-6 rounded-3xl max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" /> Apodos y Símbolos Tendencia de Hoy (Copiar en 1-Clic)
              </span>
              <span className="text-[10px] text-zinc-500 hidden sm:inline">Actualizado 2026</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {[
                { label: '×͜× ㅤ 𝙆𝙄𝙉𝙂 ㅤ ×͜×', val: '×͜× ㅤ 𝙆𝙄𝙉𝙂 ㅤ ×͜×' },
                { label: '꧁༺ Cärlös ༻꧂', val: '꧁༺ Cärlös ༻꧂' },
                { label: '✿ Q u e e n ✿', val: '✿ Q u e e n ✿' },
                { label: '⚡ 🇳​​​​​🇴​​​​​🇴​​​​​🇧​​​​​ ⚡', val: '⚡ 🇳​​​​​🇴​​​​​🇴​​​​​🇧​​​​​ ⚡' },
                { label: 'ㅤ (Espacio Invisible)', val: 'ㅤ' },
                { label: '亗 L E G E N D 亗', val: '亗 L E G E N D 亗' },
                { label: '☠︎ 𝔖𝔥𝔞𝔡𝔬𝔮 ☠︎', val: '☠︎ 𝔖𝔥𝔞𝔡𝔬𝔮 ☠︎' },
                { label: '🌸 A i t a n a 🌸', val: '🌸 A i t a n a 🌸' }
              ].map((chip, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyTrending(chip.val)}
                  className="px-3.5 py-2 bg-zinc-950/80 hover:bg-violet-600/30 text-zinc-200 hover:text-violet-200 border border-white/10 hover:border-violet-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 group"
                >
                  <span className="font-mono">{chip.label}</span>
                  <Copy className="w-3 h-3 text-zinc-500 group-hover:text-violet-300" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-zinc-900/90 border border-white/10 p-2 rounded-2xl max-w-3xl mx-auto shadow-2xl">
            <button
              onClick={() => setHomeActiveTool('ff')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 ${
                homeActiveTool === 'ff'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🎮</span> Generador Gamer FF
            </button>
            <button
              onClick={() => setHomeActiveTool('invisible')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 ${
                homeActiveTool === 'invisible'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>⚡</span> Espacio Invisible
            </button>
            <button
              onClick={() => setHomeActiveTool('alphabet')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 ${
                homeActiveTool === 'alphabet'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🔤</span> Nombres A-Z
            </button>
            <button
              onClick={() => setHomeActiveTool('store')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 ${
                homeActiveTool === 'store'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🛍️</span> Generador Tiendas
            </button>
          </div>

          {/* Render selected micro tool */}
          {homeActiveTool === 'invisible' && (
            <div className="mt-8">
              <InvisibleSpaceTool />
            </div>
          )}
          {homeActiveTool === 'alphabet' && (
            <div className="mt-8">
              <AlphabetMatrixTool />
            </div>
          )}
          {homeActiveTool === 'store' && (
            <div className="mt-8">
              <StoreNameTool />
            </div>
          )}
        </div>
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
            <div className="bg-gradient-to-br from-violet-950/40 via-zinc-900 to-zinc-950 border border-violet-500/30 rounded-3xl p-6 shadow-xl hover:border-violet-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🎮</span>
                  <span className="text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full uppercase">
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
                  <Link to="/generador-free-fire" className="text-xs font-semibold bg-zinc-800 hover:bg-violet-600/30 text-violet-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Generador FF</Link>
                  <Link to="/espacios-invisible-ff" className="text-xs font-semibold bg-zinc-800 hover:bg-violet-600/30 text-violet-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Espacio Invisible</Link>
                  <Link to="/nombres-ff-unicos" className="text-xs font-semibold bg-zinc-800 hover:bg-violet-600/30 text-violet-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">FF Únicos</Link>
                  <Link to="/nombres-instagram" className="text-xs font-semibold bg-zinc-800 hover:bg-violet-600/30 text-violet-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Instagram</Link>
                </div>
              </div>
              <Link to="/generador-free-fire" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ir a Herramientas Gamer <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 2: Personas & Bebés */}
            <div className="bg-gradient-to-br from-pink-950/40 via-zinc-900 to-zinc-950 border border-pink-500/30 rounded-3xl p-6 shadow-xl hover:border-pink-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">👶</span>
                  <span className="text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full uppercase">
                    Personas & Bebés
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-pink-300 transition-colors">
                  Personas & Bebés
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Listas completas de nombres de mujer, niña poco comunes, niños con significado profundo, unisex y raros.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-de-mujer" className="text-xs font-semibold bg-zinc-800 hover:bg-pink-600/30 text-pink-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Nombres Mujer</Link>
                  <Link to="/nombres-de-nina" className="text-xs font-semibold bg-zinc-800 hover:bg-pink-600/30 text-pink-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Niña Poco Comunes</Link>
                  <Link to="/nombres-de-nino" className="text-xs font-semibold bg-zinc-800 hover:bg-pink-600/30 text-pink-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Niños con Significado</Link>
                  <Link to="/nombres-unisex" className="text-xs font-semibold bg-zinc-800 hover:bg-pink-600/30 text-pink-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Unisex</Link>
                </div>
              </div>
              <Link to="/nombres-de-mujer" className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explorar Personas y Bebés <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 3: Directorio A-Z */}
            <div className="bg-gradient-to-br from-blue-950/40 via-zinc-900 to-zinc-950 border border-blue-500/30 rounded-3xl p-6 shadow-xl hover:border-blue-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🔤</span>
                  <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full uppercase">
                    Filtro Interactivo A-Z
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-blue-300 transition-colors">
                  Directorio Por Letra A-Z
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Navega por iniciales de la A a la Z. Encuentra nombres masculinos, femeninos y tradicionales con pronunciación en audio.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-con-a" className="text-xs font-semibold bg-zinc-800 hover:bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Con A</Link>
                  <Link to="/nombres-con-f" className="text-xs font-semibold bg-zinc-800 hover:bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Con F</Link>
                  <Link to="/nombres-con-m" className="text-xs font-semibold bg-zinc-800 hover:bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Con M</Link>
                  <Link to="/nombres-con-en" className="text-xs font-semibold bg-zinc-800 hover:bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Con Ñ</Link>
                  <Link to="/nombres-con-z" className="text-xs font-semibold bg-zinc-800 hover:bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Con Z</Link>
                </div>
              </div>
              <Link to="/nombres-por-letra" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Abrir Directorio A-Z <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 4: Culturas del Mundo */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/30 rounded-3xl p-6 shadow-xl hover:border-emerald-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🌐</span>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full uppercase">
                    Mitología & Idiomas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-emerald-300 transition-colors">
                  Culturas del Mundo
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Nombres de dioses griegos y nórdicos, nombres japoneses con Kanji, coreanos Hangul, mayas, italianos y franceses.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-de-dioses" className="text-xs font-semibold bg-zinc-800 hover:bg-emerald-600/30 text-emerald-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Dioses</Link>
                  <Link to="/nombres-japoneses" className="text-xs font-semibold bg-zinc-800 hover:bg-emerald-600/30 text-emerald-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Japoneses</Link>
                  <Link to="/nombres-coreanos" className="text-xs font-semibold bg-zinc-800 hover:bg-emerald-600/30 text-emerald-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Coreanos</Link>
                  <Link to="/nombres-mayas" className="text-xs font-semibold bg-zinc-800 hover:bg-emerald-600/30 text-emerald-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Mayas</Link>
                </div>
              </div>
              <Link to="/nombres-japoneses" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explorar Culturas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 5: Mascotas */}
            <div className="bg-gradient-to-br from-amber-950/40 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 shadow-xl hover:border-amber-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🐾</span>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full uppercase">
                    Mascotas & Animales
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-amber-300 transition-colors">
                  Mascotas & Animales
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Ideas bonitas para perritas, perros machos, michis y gatos negros, chihuahuas diminutas y caballos imponentes.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-perritas" className="text-xs font-semibold bg-zinc-800 hover:bg-amber-600/30 text-amber-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Perritas Bonitas</Link>
                  <Link to="/nombres-perros-machos" className="text-xs font-semibold bg-zinc-800 hover:bg-amber-600/30 text-amber-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Perros Machos</Link>
                  <Link to="/nombres-gatos" className="text-xs font-semibold bg-zinc-800 hover:bg-amber-600/30 text-amber-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Gatos</Link>
                  <Link to="/perritas-chihuahua" className="text-xs font-semibold bg-zinc-800 hover:bg-amber-600/30 text-amber-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Chihuahuas</Link>
                </div>
              </div>
              <Link to="/nombres-perritas" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver Nombres de Mascotas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub 6: Equipos & Negocios */}
            <div className="bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-3xl p-6 shadow-xl hover:border-cyan-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">💼</span>
                  <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full uppercase">
                    Brazaletes & Marcas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                  Equipos & Negocios
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Generador de nombres e insignias para equipos de fútbol, marcas para tiendas que venden de todo y peluches.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <Link to="/nombres-equipos-futbol" className="text-xs font-semibold bg-zinc-800 hover:bg-cyan-600/30 text-cyan-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Equipos Fútbol</Link>
                  <Link to="/nombres-para-tiendas" className="text-xs font-semibold bg-zinc-800 hover:bg-cyan-600/30 text-cyan-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Tiendas & Bazares</Link>
                  <Link to="/nombres-peluches" className="text-xs font-semibold bg-zinc-800 hover:bg-cyan-600/30 text-cyan-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5">Peluches</Link>
                </div>
              </div>
              <Link to="/nombres-equipos-futbol" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Crear Nombres de Marca <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Espacio Invisible Section & FF Pro Kit (Pestaña / Herramienta Exclusiva Free Fire) */}
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff' || location.pathname === '/nombres-roblox' || location.pathname === '/nombres-instagram' || location.pathname === '/nombres-anime' || location.pathname === '/nombres-de-mujer' || location.pathname === '/nombres-de-nina' || location.pathname === '/nombres-de-nino' || location.pathname === '/nombres-unisex' || location.pathname === '/nombres-raros' || location.pathname === '/nombres-por-letra' || location.pathname.startsWith('/nombres-con-') || location.pathname === '/') && (
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
          {/* Rare & Exotic Names Specialized Meaning Finder & Customizer for /nombres-raros */}
          {location.pathname === '/nombres-raros' && (
            <div className="bg-gradient-to-br from-purple-950/40 via-[#121212] to-indigo-950/30 border border-purple-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🔮 Buscador de Nombres Raros & Combinador Exótico (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres Raros (Únicos, Poco Comunes y Fascinantes)
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Explora nombres extravagantes, mitológicos y cósmicos. Combina dos nombres exóticos, descubre su etimología antigua y escucha la pronunciación en audio real.
                  </p>
                </div>
              </div>

              {/* Interactive Rare Name Builder & Meaning Explorer */}
              <div className="bg-zinc-950/90 border border-purple-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-400" /> Explorador por Categoría de Rareza & Creador
                  </span>
                  
                  {/* Rare Vibe Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'mitologia', label: '🔮 Mitología / Leyendas' },
                      { id: 'espacial', label: '🌌 Astrología / Cosmos' },
                      { id: 'antiguo', label: '⚜️ Antiguo / Histórico' },
                      { id: 'fantasia', label: '✨ Fantasía / Épico' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setRareVibe(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          rareVibe === tab.id
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
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
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Raro / Base</label>
                    <input
                      type="text"
                      value={rareFirstName}
                      onChange={(e) => setRareFirstName(e.target.value)}
                      placeholder="Ej: Orion, Freya, Cassian, Zephyr"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre / Apellido Raro</label>
                    <input
                      type="text"
                      value={rareSecondName}
                      onChange={(e) => setRareSecondName(e.target.value)}
                      placeholder="Ej: Cassian, Astrid, Soren, Lyra"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium"
                    />
                  </div>
                </div>

                {/* Combined Result Card with Meaning & Audio */}
                {(() => {
                  const r1 = rareFirstName.trim() || 'Orion';
                  const r2 = rareSecondName.trim() || 'Cassian';
                  const combinedRare = `${r1} ${r2}`;

                  const rareMeaningsDb: Record<string, { origin: string; meaning: string }> = {
                    orion: { origin: 'Mitología Griega', meaning: 'Constelación del gran cazador estelar e hijo del fuego' },
                    cassian: { origin: 'Latín (Cassianus)', meaning: 'Perteneciente a la noble casa de Cassius, valiente e íntegro' },
                    freya: { origin: 'Mitología Nórdica', meaning: 'Diosa del amor, la belleza, la magia y la fuerza femenina' },
                    zephyr: { origin: 'Griego (Zephyros)', meaning: 'Viento del oeste, suave, renovador y libre' },
                    astrid: { origin: 'Nórdico Antiguo', meaning: 'Hermosa como los dioses o de belleza divina' },
                    lyra: { origin: 'Griego / Astrología', meaning: 'Constelación de la lira celestial que emite música divina' },
                    selene: { origin: 'Mitología Griega', meaning: 'Diosa de la luna radiante y resplandor nocturno' },
                    caelia: { origin: 'Latín', meaning: 'Perteneciente al cielo o venida del firmamento' },
                    kenzo: { origin: 'Japonés', meaning: 'Fuerte, saludable, sabio y de espíritu firme' },
                    dante: { origin: 'Latín (Durante)', meaning: 'Resistente, constante, duradero e inmortal' },
                    soren: { origin: 'Escandinavo / Latín', meaning: 'Severo, digno de respeto y protector' },
                    elion: { origin: 'Hebreo / Celta', meaning: 'El altísimo o guardián de las colinas de luz' },
                    aurelia: { origin: 'Latín (Aurelius)', meaning: 'Resplandeciente como el oro puro' },
                    cyrus: { origin: 'Persa Antiguo', meaning: 'Sol victorioso, señor y gran líder' },
                    darian: { origin: 'Persa / Griego', meaning: 'Regalo precioso y poseedor del bien' },
                    kael: { origin: 'Gaelico / Celta', meaning: 'Guerrero esbelto y protector de las tierras altas' }
                  };

                  const rm1 = rareMeaningsDb[r1.toLowerCase()] || { origin: 'Origen Exótico', meaning: 'Misterio, magnetismo y personalidad inolvidable' };
                  const rm2 = rareMeaningsDb[r2.toLowerCase()] || { origin: 'Origen Místico', meaning: 'Fuerza singular, brillo y distinción' };

                  return (
                    <div className="bg-zinc-900/90 p-5 rounded-2xl border border-purple-500/30 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">Combinación Exótica Resultante</span>
                          <h3 className="text-xl font-bold text-white font-heading">{combinedRare}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTrending(combinedRare)}
                            className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar Nombre
                          </button>
                          <button
                            onClick={() => speakPlushieName(combinedRare)}
                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-purple-300 rounded-xl transition-colors border border-white/10"
                            title="Escuchar Pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Etymology Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-purple-300 font-bold">1. {r1} ({rm1.origin})</span>
                          <p className="text-zinc-400">"{rm1.meaning}"</p>
                        </div>
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-purple-300 font-bold">2. {r2} ({rm2.origin})</span>
                          <p className="text-zinc-400">"{rm2.meaning}"</p>
                        </div>
                      </div>

                      {/* Aesthetic Profile Decor Variations */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Exóticos y Místicos (Haz clic para copiar):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            `🔮 ${combinedRare} 🔮`,
                            `🌌 ${combinedRare} 🌌`,
                            `⚜️ ${combinedRare} ⚜️`,
                            `✨ ${combinedRare} ✨`,
                            `🪐 ${combinedRare} 🪐`,
                            `✦ ${combinedRare} ✦`
                          ].map((dec, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopyTrending(dec)}
                              className="p-2.5 bg-zinc-950/90 hover:bg-purple-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
                            >
                              <span className="truncate">{dec}</span>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-300 shrink-0 ml-1.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Curated Rare Names Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Nombres Raros y Exóticos Populares en 2026 (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Orion Cassian', val: 'Orion Cassian', desc: 'Cazador Estelar e Íntegro' },
                    { label: 'Freya Astrid', val: 'Freya Astrid', desc: 'Diosa Nórdica de Belleza Divina' },
                    { label: 'Zephyr Soren', val: 'Zephyr Soren', desc: 'Viento del Oeste y Digno' },
                    { label: 'Lyra Selene', val: 'Lyra Selene', desc: 'Lira Celestial y Luna Radiante' },
                    { label: 'Dante Cyrus', val: 'Dante Cyrus', desc: 'Inmortal y Sol Victorioso' },
                    { label: 'Aurelia Caelia', val: 'Aurelia Caelia', desc: 'Dorada y Perteneciente al Cielo' },
                    { label: 'Kael Elion', val: 'Kael Elion', desc: 'Guerrero Celta y Guardián de Luz' },
                    { label: 'Kenzo Darian', val: 'Kenzo Darian', desc: 'Espíritu Firme y Regalo Precioso' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-purple-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-purple-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Unisex Names Specialized Meaning Finder & Customizer for /nombres-unisex */}
          {location.pathname === '/nombres-unisex' && (
            <div className="bg-gradient-to-br from-emerald-950/40 via-[#121212] to-teal-950/30 border border-emerald-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    ✨ Buscador de Nombres Unisex & Combinador Neutro (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres Unisex (Neutros, Modernos y con Estilo)
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Explora nombres versátiles y neutros para bebés, personajes y redes sociales. Combina dos nombres, consulta su etimología y escucha la pronunciación en audio.
                  </p>
                </div>
              </div>

              {/* Interactive Unisex Compound Name Builder & Meaning Explorer */}
              <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-400" /> Filtro por Estilo Neutro & Combinador
                  </span>
                  
                  {/* Unisex Vibe Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'moderno', label: '🌿 Moderno / Corto' },
                      { id: 'naturaleza', label: '🕊️ Naturaleza / Sol' },
                      { id: 'elegante', label: '👑 Elegante / Global' },
                      { id: 'mistico', label: '✨ Místico / Cósmico' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setUnisexVibe(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          unisexVibe === tab.id
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
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
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Neutro</label>
                    <input
                      type="text"
                      value={unisexFirstName}
                      onChange={(e) => setUnisexFirstName(e.target.value)}
                      placeholder="Ej: Alex, René, Milan, Sasha"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre Neutro</label>
                    <input
                      type="text"
                      value={unisexSecondName}
                      onChange={(e) => setUnisexSecondName(e.target.value)}
                      placeholder="Ej: Morgan, Sol, Sky, Ariel"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                </div>

                {/* Combined Result Card with Meaning & Audio */}
                {(() => {
                  const u1 = unisexFirstName.trim() || 'Alex';
                  const u2 = unisexSecondName.trim() || 'Morgan';
                  const combinedUnisex = `${u1} ${u2}`;

                  const unisexMeaningsDb: Record<string, { origin: string; meaning: string }> = {
                    alex: { origin: 'Griego (Alexandros)', meaning: 'Defensor universal de la humanidad' },
                    rene: { origin: 'Latín / Francés', meaning: 'Renacido con elegancia y nueva luz' },
                    milan: { origin: 'Eslavo', meaning: 'Amado, gracioso y lleno de afecto' },
                    sasha: { origin: 'Ruso / Griego', meaning: 'Protector noble y guardián valiente' },
                    ariel: { origin: 'Hebreo', meaning: 'León de Dios y espíritu libre de los vientos' },
                    morgan: { origin: 'Galés / Celta', meaning: 'Nacido del mar brillante y las olas' },
                    river: { origin: 'Inglés', meaning: 'Río fluido, constante y lleno de vida' },
                    sky: { origin: 'Nórdico', meaning: 'Cielo libre, infinito y sereno' },
                    eden: { origin: 'Hebreo', meaning: 'Jardín de deleite, paz y armonía' },
                    sol: { origin: 'Latín', meaning: 'Luz radiante, calidez y sol brillante' },
                    noah: { origin: 'Hebreo', meaning: 'Paz, consuelo y descanso sereno' },
                    robin: { origin: 'Germánico / Inglés', meaning: 'Brillante reputación y canto de primavera' },
                    jordan: { origin: 'Hebreo', meaning: 'El que fluye hacia abajo con fuerza' },
                    vega: { origin: 'Árabe / Español', meaning: 'Estrella brillante que desciende' },
                    orion: { origin: 'Griego', meaning: 'Constelación del gran cazador estelar' },
                    phoenix: { origin: 'Griego', meaning: 'Ave inmortal que renace victoriosa' }
                  };

                  const um1 = unisexMeaningsDb[u1.toLowerCase()] || { origin: 'Origen Internacional', meaning: 'Armonía, versatilidad y fortaleza' };
                  const um2 = unisexMeaningsDb[u2.toLowerCase()] || { origin: 'Origen Universal', meaning: 'Luz, libertad y belleza' };

                  return (
                    <div className="bg-zinc-900/90 p-5 rounded-2xl border border-emerald-500/30 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Combinación Unisex Resultante</span>
                          <h3 className="text-xl font-bold text-white font-heading">{combinedUnisex}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTrending(combinedUnisex)}
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar Nombre
                          </button>
                          <button
                            onClick={() => speakPlushieName(combinedUnisex)}
                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 rounded-xl transition-colors border border-white/10"
                            title="Escuchar Pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Etymology Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-emerald-300 font-bold">1. {u1} ({um1.origin})</span>
                          <p className="text-zinc-400">"{um1.meaning}"</p>
                        </div>
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-emerald-300 font-bold">2. {u2} ({um2.origin})</span>
                          <p className="text-zinc-400">"{um2.meaning}"</p>
                        </div>
                      </div>

                      {/* Aesthetic Profile Decor Variations */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Neutros (Haz clic para copiar):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            `✨ ${combinedUnisex} ✨`,
                            `🍃 ${combinedUnisex} 🍃`,
                            `☯️ ${combinedUnisex} ☯️`,
                            `🤍 ${combinedUnisex} 🤍`,
                            `🕊️ ${combinedUnisex} 🕊️`,
                            `💫 ${combinedUnisex} 💫`
                          ].map((dec, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopyTrending(dec)}
                              className="p-2.5 bg-zinc-950/90 hover:bg-emerald-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-emerald-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
                            >
                              <span className="truncate">{dec}</span>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-300 shrink-0 ml-1.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Curated Unisex Names Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Nombres Unisex Populares y Estéticos en 2026 (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Alex Morgan', val: 'Alex Morgan', desc: 'Defensor y Nacido del Mar' },
                    { label: 'René Sol', val: 'René Sol', desc: 'Renacido y Luz Radiante' },
                    { label: 'Milan Ariel', val: 'Milan Ariel', desc: 'Amado y León de Dios' },
                    { label: 'Sasha Sky', val: 'Sasha Sky', desc: 'Protector y Cielo Libre' },
                    { label: 'Eden River', val: 'Eden River', desc: 'Deleite y Río de Vida' },
                    { label: 'Noah Taylor', val: 'Noah Taylor', desc: 'Paz y Artesano' },
                    { label: 'Jordan Vega', val: 'Jordan Vega', desc: 'Fluido y Estrella' },
                    { label: 'Luka Phoenix', val: 'Luka Phoenix', desc: 'Luminoso y Fénix' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-emerald-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-emerald-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-emerald-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Male Names Specialized Meaning Finder & Compound Customizer for /nombres-de-nino */}
          {location.pathname === '/nombres-de-nino' && (
            <div className="bg-gradient-to-br from-blue-950/40 via-[#121212] to-cyan-950/30 border border-blue-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🛡️ Buscador de Nombres de Niños con Significado & Creador Compuesto (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres de Niños (con Significado, Modernos y Raros)
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Combina dos nombres masculinos con fuerza y personalidad, descubre su origen histórico y significado profundo, escucha su pronunciación en audio y genera formatos estéticos.
                  </p>
                </div>
              </div>

              {/* Interactive Male Compound Name Builder & Meaning Explorer */}
              <div className="bg-zinc-950/90 border border-blue-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-400" /> Explorador por Estilo Masculino & Combinación
                  </span>
                  
                  {/* Male Vibe Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'moderno', label: '🚀 Moderno / Chic' },
                      { id: 'raro', label: '👑 Raro & Fuerte' },
                      { id: 'corto', label: '⚡ Corto (3-4 Letras)' },
                      { id: 'biblico', label: '🛡️ Bíblico / Tradicional' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setMaleVibe(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          maleVibe === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
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
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre Masculino</label>
                    <input
                      type="text"
                      value={maleFirstName}
                      onChange={(e) => setMaleFirstName(e.target.value)}
                      placeholder="Ej: Mateo, Leo, Liam, Enzo"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre Masculino</label>
                    <input
                      type="text"
                      value={maleSecondName}
                      onChange={(e) => setMaleSecondName(e.target.value)}
                      placeholder="Ej: Gael, Gabriel, Alexander, Thiago"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>
                </div>

                {/* Combined Result Card with Meaning & Audio */}
                {(() => {
                  const m1Name = maleFirstName.trim() || 'Mateo';
                  const m2Name = maleSecondName.trim() || 'Gael';
                  const combinedMale = `${m1Name} ${m2Name}`;

                  const maleMeaningsDb: Record<string, { origin: string; meaning: string }> = {
                    mateo: { origin: 'Hebreo (Mattityahu)', meaning: 'Regalo de Dios y bendición divina' },
                    gael: { origin: 'Celta', meaning: 'Hombre generoso, protector y magnánimo' },
                    leo: { origin: 'Latín (Leo)', meaning: 'Fuerte, valiente y fiero como un león (3 letras)' },
                    liam: { origin: 'Irlandés / Germánico', meaning: 'Protector resuelto y guerrero de voluntad firme' },
                    enzo: { origin: 'Germánico / Italiano', meaning: 'Príncipe o amo de su hogar' },
                    oliver: { origin: 'Latín (Olivarius)', meaning: 'Olivo de la paz y la dignidad' },
                    thiago: { origin: 'Hebreo / Portugués', meaning: 'Sostenido por Dios o que va tras sus huellas' },
                    milan: { origin: 'Eslavo', meaning: 'Amado, gracioso y lleno de bondad' },
                    bastian: { origin: 'Griego (Sebastós)', meaning: 'Venerable, augusto y digno de respeto' },
                    gabriel: { origin: 'Hebreo', meaning: 'Fuerza de Dios y héroe divino' },
                    lucas: { origin: 'Griego / Latín', meaning: 'El que resplandece con luz propia' },
                    ian: { origin: 'Escocés / Hebreo', meaning: 'Dios es misericordioso (3 letras)' },
                    dante: { origin: 'Latín', meaning: 'Resistente, constante y duradero' },
                    ezra: { origin: 'Hebreo', meaning: 'Ayuda divina y fuerza sanadora' },
                    kai: { origin: 'Hawaiano / Japonés', meaning: 'Océano o mar libre (3 letras)' },
                    alexander: { origin: 'Griego', meaning: 'Defensor de los hombres y protector' }
                  };

                  const mean1 = maleMeaningsDb[m1Name.toLowerCase()] || { origin: 'Origen Antiguo', meaning: 'Fortaleza, honor y valentía' };
                  const mean2 = maleMeaningsDb[m2Name.toLowerCase()] || { origin: 'Origen Ilustre', meaning: 'Nobleza, liderazgo y sabiduría' };

                  return (
                    <div className="bg-zinc-900/90 p-5 rounded-2xl border border-blue-500/30 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Combinación Masculina Resultante</span>
                          <h3 className="text-xl font-bold text-white font-heading">{combinedMale}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTrending(combinedMale)}
                            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar Nombre
                          </button>
                          <button
                            onClick={() => speakPlushieName(combinedMale)}
                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-blue-300 rounded-xl transition-colors border border-white/10"
                            title="Escuchar Pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Etymology Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-blue-300 font-bold">1. {m1Name} ({mean1.origin})</span>
                          <p className="text-zinc-400">"{mean1.meaning}"</p>
                        </div>
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-blue-300 font-bold">2. {m2Name} ({mean2.origin})</span>
                          <p className="text-zinc-400">"{mean2.meaning}"</p>
                        </div>
                      </div>

                      {/* Aesthetic Profile Decor Variations */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados Masculinos con Símbolos (Haz clic para copiar):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            `⚡ ${combinedMale} ⚡`,
                            `👑 ${combinedMale} 👑`,
                            `🛡️ ${combinedMale} 🛡️`,
                            `⭐ ${combinedMale} ⭐`,
                            `💙 ${combinedMale} 💙`,
                            `🏆 ${combinedMale} 🏆`
                          ].map((dec, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopyTrending(dec)}
                              className="p-2.5 bg-zinc-950/90 hover:bg-blue-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-blue-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
                            >
                              <span className="truncate">{dec}</span>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-300 shrink-0 ml-1.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Curated Male Names Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Nombres de Niños Populares y Raros en 2026 (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Mateo Gael', val: 'Mateo Gael', desc: 'Regalo y Protector' },
                    { label: 'Leo Alexander', val: 'Leo Alexander', desc: 'León Defensor' },
                    { label: 'Liam Gabriel', val: 'Liam Gabriel', desc: 'Protector y Fuerza' },
                    { label: 'Enzo Thiago', val: 'Enzo Thiago', desc: 'Príncipe Sostenido' },
                    { label: 'Oliver Mateo', val: 'Oliver Mateo', desc: 'Olivo y Bendición' },
                    { label: 'Lucas David', val: 'Lucas David', desc: 'Luz y Amado' },
                    { label: 'Ian Bastian', val: 'Ian Bastian', desc: 'Misericordioso y Venerable' },
                    { label: 'Milan Dante', val: 'Milan Dante', desc: 'Amado y Duradero' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-blue-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-blue-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-blue-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Female Names Specialized Meaning Finder & Compound Name Customizer for /nombres-de-mujer and /nombres-de-nina */}
          {(location.pathname === '/nombres-de-mujer' || location.pathname === '/nombres-de-nina') && (
            <div className="bg-gradient-to-br from-pink-950/40 via-[#121212] to-amber-950/30 border border-pink-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    🌸 {location.pathname === '/nombres-de-nina' ? 'Buscador de Nombres de Niña No Comunes & Cortos (3-4 Letras)' : 'Buscador de Significados & Creador de Nombres Compuestos (2026)'}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    {location.pathname === '/nombres-de-nina' 
                      ? 'Nombres de Niña No Comunes, Cortos y Preciosos con Significado' 
                      : 'Nombres de Mujer y Niña Bonitos, Elegantes y con Significado'}
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    {location.pathname === '/nombres-de-nina'
                      ? 'Descubre nombres de niñas raros pero hermosos, de 3 y 4 letras, combina dos nombres dulces, revisa su etimología y escucha la pronunciación en voz real.'
                      : 'Combina dos nombres bonitos, explora su origen histórico y significado profundo, escucha la pronunciación en audio y genera versiones decoradas para perfiles.'}
                  </p>
                </div>
              </div>

              {/* Interactive Compound Name Builder & Meaning Explorer */}
              <div className="bg-zinc-950/90 border border-pink-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-pink-400" /> Explorador por Estilo & Combinación Compuesta
                  </span>
                  
                  {/* Vibe Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'elegante', label: '👑 Elegante' },
                      { id: 'corto', label: '🌿 Corto (3-4 Letras)' },
                      { id: 'biblico', label: '🕊️ Bíblico / Raro' },
                      { id: 'internacional', label: '✨ Chic / Global' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setFemaleVibe(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          femaleVibe === tab.id
                            ? 'bg-gradient-to-r from-pink-600 to-amber-600 text-white shadow-md'
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
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Primer Nombre</label>
                    <input
                      type="text"
                      value={femaleFirstName}
                      onChange={(e) => setFemaleFirstName(e.target.value)}
                      placeholder="Ej: Zoe, Mia, Aitana, Iris"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Segundo Nombre (Compuesto)</label>
                    <input
                      type="text"
                      value={femaleSecondName}
                      onChange={(e) => setFemaleSecondName(e.target.value)}
                      placeholder="Ej: Valentina, Lucía, Elena, Isabel"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
                    />
                  </div>
                </div>

                {/* Combined Result Card with Meaning & Audio */}
                {(() => {
                  const p1 = femaleFirstName.trim() || (location.pathname === '/nombres-de-nina' ? 'Aitana' : 'Sofía');
                  const p2 = femaleSecondName.trim() || (location.pathname === '/nombres-de-nina' ? 'Lucía' : 'Valentina');
                  const combined = `${p1} ${p2}`;

                  const meaningsDatabase: Record<string, { origin: string; meaning: string }> = {
                    sofia: { origin: 'Griego', meaning: 'Sabiduría pura y divina' },
                    valentina: { origin: 'Latín', meaning: 'Valiente, fuerte y saludable' },
                    emma: { origin: 'Germánico', meaning: 'Universal, poderosa y completa' },
                    isabella: { origin: 'Hebreo', meaning: 'Consagrada a Dios y llena de gracia' },
                    aitana: { origin: 'Vasco / Ibérico', meaning: 'Fuerza de la montaña o gloria' },
                    mia: { origin: 'Escandinavo / Hebreo', meaning: 'La elegida, amada por Dios (3 letras)' },
                    zoe: { origin: 'Griego', meaning: 'Vida, vitalidad y energía eterna (3 letras)' },
                    iris: { origin: 'Griego', meaning: 'Diosa del arcoíris y mensajera de luz (4 letras)' },
                    lia: { origin: 'Hebreo', meaning: 'Portadora de buenas noticias y leal (3 letras)' },
                    chloe: { origin: 'Griego', meaning: 'Brote verde floreciente y juventud (5 letras)' },
                    lyra: { origin: 'Griego', meaning: 'Constelación celestial de la lira (4 letras)' },
                    ona: { origin: 'Catalán', meaning: 'Ola de mar, gracia y serenidad (3 letras)' },
                    nayra: { origin: 'Guanche', meaning: 'Guerrera de ojos grandes y resplandecientes' },
                    gala: { origin: 'Latín', meaning: 'Hermosa, festiva y elegante (4 letras)' },
                    yara: { origin: 'Tupí-Guaraní', meaning: 'Señora de las aguas y reina de la naturaleza (4 letras)' },
                    aria: { origin: 'Italiano', meaning: 'Melodía noble y aire puro (4 letras)' },
                    alana: { origin: 'Celta', meaning: 'Armoniosa, noble y preciosa (5 letras)' },
                    lucia: { origin: 'Latín', meaning: 'Nacida en la primera luz de la mañana' },
                    elena: { origin: 'Griego', meaning: 'Resplandeciente como la luz del sol' },
                    camila: { origin: 'Latín', meaning: 'Aquella que ofrece sacrificios y nobleza' },
                    victoria: { origin: 'Latín', meaning: 'Triunfadora y victoriosa en la vida' }
                  };

                  const m1 = meaningsDatabase[p1.toLowerCase()] || { origin: 'Origen Antiguo', meaning: 'Luz, belleza y fortaleza' };
                  const m2 = meaningsDatabase[p2.toLowerCase()] || { origin: 'Origen Noble', meaning: 'Gracia, nobleza y virtud' };

                  return (
                    <div className="bg-zinc-900/90 p-5 rounded-2xl border border-pink-500/30 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block">Combinación Compuesta Resultante</span>
                          <h3 className="text-xl font-bold text-white font-heading">{combined}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTrending(combined)}
                            className="px-3.5 py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar Nombre
                          </button>
                          <button
                            onClick={() => speakPlushieName(combined)}
                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-xl transition-colors border border-white/10"
                            title="Escuchar Pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Etymology Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-pink-300 font-bold">1. {p1} ({m1.origin})</span>
                          <p className="text-zinc-400">"{m1.meaning}"</p>
                        </div>
                        <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="text-pink-300 font-bold">2. {p2} ({m2.origin})</span>
                          <p className="text-zinc-400">"{m2.meaning}"</p>
                        </div>
                      </div>

                      {/* Aesthetic Profile Decor Variations */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-bold text-zinc-300 block">Estilos Decorados con Símbolos Aesthetic (Haz clic para copiar):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            `✨ ${combined} ✨`,
                            `🌸 ${combined} 🌸`,
                            `👑 ${combined} 👑`,
                            `🌷 ${combined} 🌷`,
                            `🎀 ${combined} 🎀`,
                            `💖 ${combined} 💖`
                          ].map((dec, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopyTrending(dec)}
                              className="p-2.5 bg-zinc-950/90 hover:bg-pink-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-pink-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex items-center justify-between group"
                            >
                              <span className="truncate">{dec}</span>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-300 shrink-0 ml-1.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Curated Female / Girl Names Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> {location.pathname === '/nombres-de-nina' ? 'Nombres de Niña No Comunes y Cortos Destacados' : 'Nombres de Mujer y Niña Populares en 2026'} (Clic para Copiar)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {(location.pathname === '/nombres-de-nina' ? [
                    { label: 'Zoe Valentina', val: 'Zoe Valentina', desc: '3 Letras | Vida y Fuerza' },
                    { label: 'Mia Aitana', val: 'Mia Aitana', desc: '3 Letras | Amada y Montaña' },
                    { label: 'Iris Lucía', val: 'Iris Lucía', desc: '4 Letras | Arcoíris y Luz' },
                    { label: 'Lia Isabel', val: 'Lia Isabel', desc: '3 Letras | Leal y Divina' },
                    { label: 'Chloe Marcela', val: 'Chloe Marcela', desc: '5 Letras | Floreciente' },
                    { label: 'Lyra Elena', val: 'Lyra Elena', desc: '4 Letras | Constelación' },
                    { label: 'Ona Sofía', val: 'Ona Sofía', desc: '3 Letras | Ola de Mar' },
                    { label: 'Nayra Victoria', val: 'Nayra Victoria', desc: '5 Letras | Ojos Brillantes' }
                  ] : [
                    { label: 'Sofía Valentina', val: 'Sofía Valentina', desc: 'Sabiduría y Fuerza' },
                    { label: 'Emma Isabella', val: 'Emma Isabella', desc: 'Poderosa y Divina' },
                    { label: 'Aitana Lucía', val: 'Aitana Lucía', desc: 'Luz de la Montaña' },
                    { label: 'Mia Elena', val: 'Mia Elena', desc: 'Amada y Resplandeciente' },
                    { label: 'Camila Victoria', val: 'Camila Victoria', desc: 'Nobleza Victoriosa' },
                    { label: 'Zoe Regina', val: 'Zoe Regina', desc: 'Vida y Reina' },
                    { label: 'Valeria Nicole', val: 'Valeria Nicole', desc: 'Valiente y Victoriosa' },
                    { label: 'Chloe Marcela', val: 'Chloe Marcela', desc: 'Floreciente y Fuerte' }
                  ]).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyTrending(item.val)}
                      className="p-3.5 bg-zinc-900/90 hover:bg-pink-600/20 text-zinc-200 hover:text-white border border-white/10 hover:border-pink-500/40 rounded-xl text-xs font-medium transition-all active:scale-95 flex flex-col justify-between gap-1.5 group text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-pink-300 font-bold truncate">{item.label}</span>
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-300 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Anime Specialized Generator & Nick Customizer for /nombres-anime */}
          {location.pathname === '/nombres-anime' && (
            <div className="bg-gradient-to-br from-red-950/40 via-[#121212] to-violet-950/30 border border-red-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    ⛩️ Creador Otaku de Nicknames de Anime (2026)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                    Nombres de Anime para Juegos, Discord y Redes
                  </h2>
                  <p className="text-zinc-400 mt-2 max-w-2xl text-sm">
                    Genera apodos japoneses con sufijos honoríficos (-sama, -kun, -chan, -senpai, -dono), caracteres Kanji y símbolos nipones para Genshin Impact, Roblox, Valorant, Free Fire o TikTok.
                  </p>
                </div>
              </div>

              {/* Interactive Honorific & Archetype Nick Builder */}
              <div className="bg-zinc-950/90 border border-red-500/20 rounded-2xl p-6 relative z-10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-red-400" /> Generador por Sufijo Honorífico & Estilo Otaku
                  </span>
                  
                  {/* Archetype Selector */}
                  <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    {[
                      { id: 'shonen', label: '⚔️ Shonen Héroe' },
                      { id: 'villain', label: '🖤 Villano / Dark' },
                      { id: 'kawaii', label: '🌸 Kawaii / Shojo' },
                      { id: 'isekai', label: '⚡ Isekai / Cazador' },
                      { id: 'ninja', label: '⛩️ Ninja / Clan' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setAnimeArchetype(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          animeArchetype === tab.id
                            ? 'bg-gradient-to-r from-red-600 to-violet-600 text-white shadow-md'
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
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">1. Nombre o Apodo Base</label>
                    <input
                      type="text"
                      value={animeBaseName}
                      onChange={(e) => setAnimeBaseName(e.target.value)}
                      placeholder="Ej: Kuro, Akira, Sora, Ren, Kage"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">2. Sufijo Honorífico Japonés</label>
                    <select aria-label="Seleccionar opción" value={animeSuffix}
                      onChange={(e) => setAnimeSuffix(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 font-mono"
                    >
                      <option value="-sama">-sama (様 - Señor / Respeto Supremo)</option>
                      <option value="-senpai">-senpai (先輩 - Superior / Guía)</option>
                      <option value="-kun">-kun (君 - Chico / Amigo)</option>
                      <option value="-chan">-chan (ちゃん - Tierno / Afectivo)</option>
                      <option value="-dono">-dono (殿 - Lord / Samurai)</option>
                      <option value="-san">-san (さん - Respetuoso Estándar)</option>
                      <option value="">(Sin Sufijo)</option>
                    </select>
                  </div>
                </div>

                {/* Dynamic Generated Results Grid */}
                {(() => {
                  const name = animeBaseName || 'Kuro';
                  const suffix = animeSuffix;
                  const full = `${name}${suffix}`;

                  const archetypeCombos: Record<string, { label: string; text: string }[]> = {
                    shonen: [
                      { label: '🔥 Estilo Protagonista Fuego', text: `⚡ 𝙆 ${full.toUpperCase()} ⚡` },
                      { label: '⚔️ Estilo Espadachín', text: `⚔️ 𝙺 ${full} ⚔️` },
                      { label: '👑 Estilo Rey Guerrero', text: `👑 𝙆 𝙐 𝙍 𝙊 . ${suffix.toUpperCase()} 👑` },
                      { label: '🐉 Estilo Dragón Celestial', text: `🐉 ${full} 🐉` }
                    ],
                    villain: [
                      { label: '🖤 Estilo Villano / Dark', text: `🖤 ᴋ ᴜ ʀ ᴏ ${suffix} 🖤` },
                      { label: '☠️ Estilo Sombra Maldita', text: `☠︎ 𝙺 𝚄 𝚁 𝙾 ${suffix} ☠︎` },
                      { label: '🦇 Estilo Vampiro / Antihéroe', text: `🦇 ${full} 🦇` },
                      { label: '🖤 Estilo Abismo Dark', text: `x . ${full} . x` }
                    ],
                    kawaii: [
                      { label: '🌸 Estilo Shojo / Kawaii', text: `🌸 ꜱ ᴀ ᴋ ᴜ ʀ ᴀ ${suffix} 🌸` },
                      { label: '✨ Estilo Mágico / Sparkle', text: `✨ 𝒦 ${full} ✨` },
                      { label: '🧸 Estilo Afectivo', text: `🧸 ${full} 🧸` },
                      { label: '🎀 Estilo Aesthetic Pink', text: `🎀 ᴋ ᴜ ʀ ᴏ . ${suffix} 🎀` }
                    ],
                    isekai: [
                      { label: '⚡ Estilo Hashira / Cazador', text: `⚡ 𝐻𝑎𝑠ℎ𝑖𝑟𝑎 _ ${full} ⚡` },
                      { label: '🔮 Estilo Mago / Isekai', text: `🔮 𝙼𝚊𝚐𝚞𝚜 _ ${full}` },
                      { label: '🗡️ Estilo Gremio de Héroes', text: `🗡️ ${full} _ 𝙷ero` },
                      { label: '⭐ Estilo Nivel Máximo', text: `⭐ 𝕃𝕧𝕝𝟡𝟡 _ ${full}` }
                    ],
                    ninja: [
                      { label: '⛩️ Estilo Ninjutsu / Clan', text: `⛩️ 𝙆 𝘼 𝙂 𝙀 _ ${full.toUpperCase()} ⛩️` },
                      { label: '🦊 Estilo Kitsune Místico', text: `🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ ${full}` },
                      { label: '☯️ Estilo Sombra Shinobi', text: `☯️ 𝚂𝚑𝚒𝚗𝚘𝚋𝚒 _ ${full}` },
                      { label: '🌊 Estilo Aldea de la Niebla', text: `🌊 ${full} _ 𝙽𝚒𝚗𝚓𝚊` }
                    ]
                  };

                  const currentCombos = archetypeCombos[animeArchetype] || archetypeCombos.shonen;

                  return (
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold text-zinc-300 block">Variaciones Listas para Copiar y Usar en Juego:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {currentCombos.map((combo, idx) => (
                          <div key={idx} className="bg-zinc-900/90 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between gap-2">
                            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{combo.label}</span>
                            <div className="text-xs font-mono font-bold text-white truncate my-1">{combo.text}</div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleCopyTrending(combo.text)}
                                className="flex-1 py-1.5 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 text-red-200 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                              >
                                <Copy className="w-3 h-3" /> Copiar
                              </button>
                              <button
                                onClick={() => speakPlushieName(full)}
                                className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors"
                                title="Escuchar la pronunciación"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Ready-to-copy Popular Anime Presets Grid */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Presets de Nombres de Anime Más Populares en Videojuegos
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: '⚡ 𝙆𝙖𝙜𝙚 - 𝙎𝙖𝙢𝙖 ⛩️', val: '⚡ 𝙆𝙖𝙜𝙚 - 𝙎𝙖𝙢𝙖 ⛩️', desc: 'Genshin / Honkai Star Rail' },
                    { label: '🌸 𝕊𝕒𝕜𝕦𝕣𝕒 . ᴄʜᴀɴ 🌸', val: '🌸 𝕊𝕒𝕜𝕦𝕣𝕒 . ᴄʜᴀɴ 🌸', desc: 'Roblox Blox Fruits Girl' },
                    { label: '🖤 𝙺𝚞𝚛𝚘𝚗𝚎𝚔𝚘 - 𝚂𝚎𝚗𝚙𝚊𝚒 🖤', val: '🖤 𝙺𝚞𝚛𝚘𝚗𝚎𝚔𝚘 - 𝚂𝚎𝚗𝚙𝚊𝚒 🖤', desc: 'Discord / Valorant Dark' },
                    { label: '⛩️ 𝓗𝓪𝓼𝓱𝓲𝓻𝓪 _ 𝓚𝓾𝓻𝓸 ⛩️', val: '⛩️ 𝓗𝓪𝓼𝓱𝓲𝓻𝓪 _ 𝓚𝓾𝓻𝓸 ⛩️', desc: 'Free Fire & Demon Slayer' },
                    { label: '🐉 𝙍𝙮𝙪𝙟𝙞𝙣 - 𝙎𝙖𝙢𝙖 🐉', val: '🐉 𝙍𝙮𝙪𝙟𝙞𝙣 - 𝙎𝙖𝙢𝙖 🐉', desc: 'RPG & Anime Clanes' },
                    { label: '🔥 𝙁𝙡𝙖m𝙚 _ 𝙃𝙖𝙨𝙝𝙞𝙧𝙖 🔥', val: '🔥 𝙁𝙡𝙖𝙢𝙚 _ 𝙃𝙖𝙨𝙝𝙞𝙧𝙖 🔥', desc: 'Estilo Fuego Competitivo' },
                    { label: '🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ 𝚂𝚘𝚛𝚊 🦊', val: '🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ 𝚂𝚘𝚛𝚊 🦊', desc: 'Blox Fruits Fruta Kitsune' },
                    { label: '⚔️ 𝙻𝚎𝚟𝚒 - 𝙰𝚌𝚔𝚎𝚛𝚖𝚊𝚗 ⚔️', val: '⚔️ 𝙻𝚎𝚟𝚒 - 𝙰𝚌𝚔𝚎𝚛𝚖𝚊𝚗 ⚔️', desc: 'Estilo Héroe Shonen' }
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

      {/* Japanese Culture Interactive Directory */}
      {(location.pathname === '/nombres-japoneses') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-rose-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🌸 Japoneses, Anime & Aesthetic
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🌸</span> Generador de Nombres y Apodos Japoneses (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Explora nombres con Kanji, pronunciación en audio real, significados y creador de apodos estilo Anime / Gamer.
                </p>
              </div>
            </div>

            {/* Japanese Name Decorator / Nickname Generator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>⛩️</span> Creador de Apodo Aesthetic / Otaku para Juegos y Redes
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Japones / Romaji:</label>
                      <input
                        type="text"
                        value={jpCustomName}
                        onChange={(e) => setJpCustomName(e.target.value)}
                        placeholder="Sakura, Hinata, Gojo..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500 text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Caracter Kanji (Opcional):</label>
                      <input
                        type="text"
                        value={jpCustomKanji}
                        onChange={(e) => setJpCustomKanji(e.target.value)}
                        placeholder="桜, 日向, 鬼..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-rose-400 focus:outline-none focus:border-rose-500 text-sm font-mono font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco de Símbolos:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🌸 [Name] 🌸',
                        '⛩️ 桜 • [Name] • 🌸 ⛩️',
                        '꧁⚔️[Name]⚔️꧂',
                        '⚡[Kanji] • [Name]⚡',
                        '☯️ [Name] ☯️',
                        '🦊 [Name] 🦊',
                        '🎐 [Name] 🎐',
                        '💮 [Kanji] • [Name] 💮'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setJpSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            jpSelectedFrame === frame
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame.replace('[Name]', jpCustomName || 'Nombre').replace('[Kanji]', jpCustomKanji || '桜')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Styled Output Card */}
                <div className="bg-gradient-to-b from-rose-950/30 via-zinc-950 to-zinc-950 border border-rose-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-2">Vista Previa Apodo</div>
                    <div className="text-4xl font-extrabold text-rose-400 font-mono mb-2">
                      {jpCustomKanji || '桜'}
                    </div>
                    <div className="text-lg font-bold text-white font-heading mb-1 break-all">
                      {jpSelectedFrame
                        .replace('[Name]', jpCustomName || 'Sakura')
                        .replace('[Kanji]', jpCustomKanji || '桜')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Listo para Free Fire, Discord o TikTok</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        jpSelectedFrame
                          .replace('[Name]', jpCustomName || 'Sakura')
                          .replace('[Kanji]', jpCustomKanji || '桜')
                      )}
                      className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar Apodo Aesthetic
                    </button>
                    <button
                      onClick={() => speakJapanese(jpCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-rose-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs & Directory */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Directorio de Nombres Japoneses Seleccionados
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Presiona el botón de audio para escuchar la pronunciación auténtica en japonés.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🌸', 'Niñas 🌸', 'Niños ⚡', 'Anime 🎮', 'Naturaleza 🌿'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setJpCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        jpCategoryTab === tab
                          ? 'bg-rose-500 text-zinc-950 shadow-md shadow-rose-500/20'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { kanji: '桜', name: 'Sakura', romaji: 'Sáh-koo-rah', meaning: 'Flor de cerezo y primavera', tag: '🌸 Niñas', category: 'Niñas 🌸' },
                  { kanji: '日向', name: 'Hinata', romaji: 'Hee-nah-tah', meaning: 'Lugar soleado y cálido', tag: '☀️ Anime', category: 'Anime 🎮' },
                  { kanji: '雪', name: 'Yuki', romaji: 'Yoo-kee', meaning: 'Nieve blanca y pureza', tag: '❄️ Niñas', category: 'Niñas 🌸' },
                  { kanji: '蓮', name: 'Ren', romaji: 'Ren', meaning: 'Flor de loto sagrado y fortaleza', tag: '🪷 Niños', category: 'Niños ⚡' },
                  { kanji: '葵', name: 'Aoi', romaji: 'Ah-oh-ee', meaning: 'Flor de malva y azul cobalto', tag: '💙 Niñas', category: 'Niñas 🌸' },
                  { kanji: '空', name: 'Sora', romaji: 'Soh-rah', meaning: 'Cielo infinito y libertad', tag: '☁️ Naturaleza', category: 'Naturaleza 🌿' },
                  { kanji: '心愛', name: 'Kokoa', romaji: 'Koh-koh-ah', meaning: 'Corazón lleno de amor divino', tag: '💖 Niñas', category: 'Niñas 🌸' },
                  { kanji: '健太', name: 'Kenta', romaji: 'Ken-tah', meaning: 'Fuerte, sano y vigoroso', tag: '⚡ Niños', category: 'Niños ⚡' },
                  { kanji: '炭治郎', name: 'Tanjiro', romaji: 'Tahn-jee-roh', meaning: 'Hijo mayor del carbón (Kimetsu)', tag: '⚔️ Anime', category: 'Anime 🎮' },
                  { kanji: '禰豆子', name: 'Nezuko', romaji: 'Neh-zoo-koh', meaning: 'Flor de nieve en la colina', tag: '🌸 Anime', category: 'Anime 🎮' },
                  { kanji: '五条', name: 'Gojo', romaji: 'Goh-joh', meaning: 'Cinco leyes de la alta nobleza', tag: '✨ Anime', category: 'Anime 🎮' },
                  { kanji: '明', name: 'Akira', romaji: 'Ah-kee-rah', meaning: 'Mente clara, brillante e inteligente', tag: '💡 Niños', category: 'Niños ⚡' },
                  { kanji: '楓', name: 'Kaede', romaji: 'Kah-eh-deh', meaning: 'Hoja de arce de otoño', tag: '🍁 Naturaleza', category: 'Naturaleza 🌿' },
                  { kanji: '椿', name: 'Tsubaki', romaji: 'Tsoo-bah-kee', meaning: 'Flor de camelia invernal', tag: '🌺 Naturaleza', category: 'Naturaleza 🌿' },
                  { kanji: 'リヴァイ', name: 'Levi', romaji: 'Reh-vee', meaning: 'Unión y liderazgo supremo', tag: '🗡️ Anime', category: 'Anime 🎮' },
                  { kanji: '花', name: 'Hana', romaji: 'Hah-nah', meaning: 'Flor radiante de jardín', tag: '🌸 Niñas', category: 'Niñas 🌸' }
                ].filter(item => jpCategoryTab === 'Todos 🌸' || item.category === jpCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-rose-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl font-bold text-rose-400 font-mono">{item.kanji}</span>
                        <span className="text-[10px] bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/20">{item.tag}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg font-heading group-hover:text-rose-300 transition-colors">{item.name}</h3>
                      <div className="text-xs text-rose-300/80 italic mb-1">Pronunciación: {item.romaji}</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.meaning}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakJapanese(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-rose-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => {
                            setJpCustomName(item.name);
                            setJpCustomKanji(item.kanji);
                          }}
                          className="py-1.5 bg-zinc-800 hover:bg-rose-500/20 text-rose-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(`${item.name} (${item.kanji})`)}
                        className="w-full py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 rounded-xl text-xs font-bold border border-rose-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Korean Culture Interactive Directory */}
      {(location.pathname === '/nombres-coreanos') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-violet-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🇰🇷 K-Pop, Hangul & Doramas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🇰🇷</span> Generador y Creador de Nombres Coreanos (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Explora nombres en Hangul, romanización oficial, pronunciación nativa en audio y creador de apodos Idol.
                </p>
              </div>
            </div>

            {/* Custom Korean Nickname Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🎤</span> Creador de Nombre Estilo K-Pop Idol & Dorama
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Apellido Coreano:</label>
                      <select aria-label="Seleccionar opción" value={krSelectedSurname}
                        onChange={(e) => setKrSelectedSurname(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500 text-sm font-semibold"
                      >
                        {['Kim (김)', 'Lee (이)', 'Park (박)', 'Choi (최)', 'Jung (정)', 'Kang (강)', 'Yoon (윤)', 'Jang (장)'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre / Romaji:</label>
                      <input
                        type="text"
                        value={krCustomName}
                        onChange={(e) => setKrCustomName(e.target.value)}
                        placeholder="Min-Ji, Tae-Hyung..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-violet-500 text-sm font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Hangul (한글):</label>
                      <input
                        type="text"
                        value={krCustomHangul}
                        onChange={(e) => setKrCustomHangul(e.target.value)}
                        placeholder="민지, 태형..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-violet-300 focus:outline-none focus:border-violet-500 text-sm font-mono font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Formato para Redes / Juegos:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '✨ [Surname] [Name] ([Hangul]) ✨',
                        '👑 [Hangul] • [Name] 👑',
                        '💖 [Name] ([Hangul]) 💖',
                        '꧁༺[Surname] [Name]༻꧂',
                        '🇰🇷 [Name] • [Hangul]'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setKrSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            krSelectedFrame === frame
                              ? 'bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame
                            .replace('[Surname]', krSelectedSurname.split(' ')[0])
                            .replace('[Name]', krCustomName || 'Min-Ji')
                            .replace('[Hangul]', krCustomHangul || '민지')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Styled Output Preview */}
                <div className="bg-gradient-to-b from-violet-950/40 via-zinc-950 to-zinc-950 border border-violet-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-violet-400 font-bold uppercase tracking-widest mb-2">Identidad Idol / Dorama</div>
                    <div className="text-4xl font-extrabold text-violet-300 font-mono mb-2">
                      {krCustomHangul || '민지'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {krSelectedFrame
                        .replace('[Surname]', krSelectedSurname.split(' ')[0])
                        .replace('[Name]', krCustomName || 'Min-Ji')
                        .replace('[Hangul]', krCustomHangul || '민지')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Ideal para TikTok, Instagram o Free Fire</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        krSelectedFrame
                          .replace('[Surname]', krSelectedSurname.split(' ')[0])
                          .replace('[Name]', krCustomName || 'Min-Ji')
                          .replace('[Hangul]', krCustomHangul || '민지')
                      )}
                      className="w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-violet-600/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar Nombre Coreano
                    </button>
                    <button
                      onClick={() => speakKorean(krCustomHangul || krCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-violet-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📚</span> Nombres Coreanos Famosos con Significado
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Filtra por categorías y escucha la voz nativa en coreano.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🇰🇷', 'Niñas 🌸', 'Niños ⚡', 'K-Pop Idols 🎤', 'K-Drama 🎬'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setKrCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        krCategoryTab === tab
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
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
                  { hangul: '지은', name: 'Ji-Eun', mean: 'Sabiduría profunda y amabilidad', vibe: '✨ Estilo IU', category: 'Niñas 🌸' },
                  { hangul: '수아', name: 'Soo-Ah', mean: 'Agua pura y elegancia hermosa', vibe: '🌸 Protagonista Dorama', category: 'K-Drama 🎬' },
                  { hangul: '민지', name: 'Min-Ji', mean: 'Inteligencia y brillo radiante', vibe: '💖 Estilo NewJeans', category: 'Niñas 🌸' },
                  { hangul: '은지', name: 'Eun-Ji', mean: 'Gracia divina y amabilidad humana', vibe: '🌿 K-Pop Idol', category: 'Niñas 🌸' },
                  { hangul: '태형', name: 'Tae-Hyung', mean: 'Gran éxito y prosperidad', vibe: '🌟 Estilo BTS V', category: 'K-Pop Idols 🎤' },
                  { hangul: '정국', name: 'Jung-Kook', mean: 'Pilar fuerte y noble de la nación', vibe: '🔥 Estilo BTS JK', category: 'K-Pop Idols 🎤' },
                  { hangul: '민호', name: 'Min-Ho', mean: 'Valentía brillante y liderazgo', vibe: '🎬 Estilo Lee Min-ho', category: 'K-Drama 🎬' },
                  { hangul: '서윤', name: 'Seo-Yoon', mean: 'Bendición presagiada y luz pura', vibe: '✨ Clásico Elegante', category: 'Niñas 🌸' },
                  { hangul: '도윤', name: 'Do-Yoon', mean: 'Camino justo y consentimiento', vibe: '⚡ Tendencia Masculina', category: 'Niños ⚡' },
                  { hangul: '현우', name: 'Hyun-Woo', mean: 'Sabio, virtuoso y divino', vibe: '🌟 Actor de Dorama', category: 'K-Drama 🎬' },
                  { hangul: '지수', name: 'Ji-Soo', mean: 'Sabiduría y belleza de río', vibe: '💖 BLACKPINK Jisoo', category: 'K-Pop Idols 🎤' },
                  { hangul: '지민', name: 'Ji-Min', mean: 'Inteligencia brillante y suave', vibe: '✨ BTS Jimin', category: 'K-Pop Idols 🎤' }
                ].filter(item => krCategoryTab === 'Todos 🇰🇷' || item.category === krCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-violet-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-violet-300 font-mono">{item.hangul}</span>
                        <span className="text-[10px] bg-violet-500/10 text-violet-300 px-2.5 py-0.5 rounded-full border border-violet-500/20">{item.vibe}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg font-heading group-hover:text-violet-300 transition-colors">{item.name}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakKorean(item.hangul)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-violet-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => {
                            setKrCustomName(item.name);
                            setKrCustomHangul(item.hangul);
                          }}
                          className="py-1.5 bg-zinc-800 hover:bg-violet-500/20 text-violet-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(`${item.name} (${item.hangul})`)}
                        className="w-full py-1.5 bg-violet-600/10 hover:bg-violet-600/20 text-violet-300 rounded-xl text-xs font-bold border border-violet-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* French Culture Directory */}
      {(location.pathname === '/nombres-franceses') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-sky-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🥐 Elegantes, Románticos y Aesthetic
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🥐</span> Generador de Nombres Franceses y Apodos Parisinos (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Explora nombres refinados con guía fonética, voz francesa nativa en audio y creador de títulos estilo Paris Aesthetic.
                </p>
              </div>
            </div>

            {/* Custom French Nickname / Title Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🏰</span> Creador de Nombre Estilo París & Alta Costura
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Título / Prefijo de Cortesía:</label>
                      <select aria-label="Seleccionar opción" value={frTitlePrefix}
                        onChange={(e) => setFrTitlePrefix(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm font-semibold"
                      >
                        {['Mademoiselle', 'Monsieur', 'Chérie', 'Fleur', 'Prince', 'Princesse', 'Madame'].map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Francés:</label>
                      <input
                        type="text"
                        value={frCustomName}
                        onChange={(e) => setFrCustomName(e.target.value)}
                        placeholder="Amélie, Juliette, Louis..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Elegante / Flor de Lis:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '⚜️ [Title] [Name] ⚜️',
                        '🌹 [Title] [Name] • Chérie 🌹',
                        '🥐 Fleur • [Name] ✨',
                        '🍷 Monsieur [Name] 🍷',
                        '💋 Mademoiselle [Name] 💋',
                        '🎨 [Name] • Paris Aesthetic 🎨'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setFrSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            frSelectedFrame === frame
                              ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame
                            .replace('[Title]', frTitlePrefix)
                            .replace('[Name]', frCustomName || 'Amélie')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Styled Output Preview */}
                <div className="bg-gradient-to-b from-sky-950/40 via-zinc-950 to-zinc-950 border border-sky-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-2">Estilo Parisino Elegante</div>
                    <div className="text-3xl font-extrabold text-sky-300 font-heading mb-2">
                      {frCustomName || 'Amélie'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {frSelectedFrame
                        .replace('[Title]', frTitlePrefix)
                        .replace('[Name]', frCustomName || 'Amélie')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Listo para Instagram, TikTok o Discord</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        frSelectedFrame
                          .replace('[Title]', frTitlePrefix)
                          .replace('[Name]', frCustomName || 'Amélie')
                      )}
                      className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar Nombre Francés
                    </button>
                    <button
                      onClick={() => speakFrench(frCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-sky-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Directorio de Nombres Franceses Seleccionados
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Filtra por estilo y reproduce la pronunciación en audio francés.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🇫🇷', 'Femeninos 🌹', 'Masculinos ⚜️', 'Elegantes 💎', 'Románticos 💌', 'Clásicos 👑'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setFrCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        frCategoryTab === tab
                          ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
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
                  { name: 'Amélie', phonetics: 'Ah-meh-lee', mean: 'Trabajadora dulce, dedicada y de noble espíritu', tag: '🌹 Elegante', category: 'Femeninos 🌹' },
                  { name: 'Juliette', phonetics: 'Zhoo-lee-ett', mean: 'Joven, llena de gracia eterna y poesía', tag: '💌 Romántico', category: 'Románticos 💌' },
                  { name: 'Chloé', phonetics: 'Kloh-eh', mean: 'Brote verde, flor que florece en primavera', tag: '🦋 Fresco', category: 'Femeninos 🌹' },
                  { name: 'Camille', phonetics: 'Kah-mee-yuh', mean: 'Noble, perfecta, refinada y dedicada', tag: '🎨 Sofisticado', category: 'Elegantes 💎' },
                  { name: 'Éloïse', phonetics: 'Eh-loh-eez', mean: 'Ilustre, famosa en el combate y brillante', tag: '⚜️ Real', category: 'Elegantes 💎' },
                  { name: 'Gabriel', phonetics: 'Gah-bree-ell', mean: 'Fuerza de Dios y mensajero protector', tag: '👑 Clásico', category: 'Masculinos ⚜️' },
                  { name: 'Antoine', phonetics: 'Ahn-twahn', mean: 'Inestimable, valioso y digno de alabanza', tag: '🏛️ Noble', category: 'Masculinos ⚜️' },
                  { name: 'Céleste', phonetics: 'Seh-lest', mean: 'Celestial, perteneciente al cielo divino', tag: '✨ Divino', category: 'Femeninos 🌹' },
                  { name: 'Louis', phonetics: 'Loo-ee', mean: 'Famoso guerrero y rey de gran espíritu', tag: '👑 Real', category: 'Clásicos 👑' },
                  { name: 'Mathilde', phonetics: 'Mah-teeld', mean: 'Guerrera poderosa y valiente en batalla', tag: '🛡️ Fuerte', category: 'Elegantes 💎' },
                  { name: 'Fleur', phonetics: 'Flur', mean: 'Flor radiante, naturaleza y belleza sutil', tag: '🌸 Naturaleza', category: 'Románticos 💌' },
                  { name: 'Étienne', phonetics: 'Eh-tyenn', mean: 'Coronado con victoria y corona de lauro', tag: '🌿 Clásico', category: 'Clásicos 👑' }
                ].filter(item => frCategoryTab === 'Todos 🇫🇷' || item.category === frCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-sky-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg font-heading group-hover:text-sky-300 transition-colors">{item.name}</h3>
                        <span className="text-[10px] bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded-full border border-sky-500/20">{item.tag}</span>
                      </div>
                      <div className="text-xs text-sky-300/80 italic mb-1">Pronunciación: {item.phonetics}</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakFrench(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-sky-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setFrCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-sky-500/20 text-sky-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 rounded-xl text-xs font-bold border border-sky-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Maya Culture Directory */}
      {(location.pathname === '/nombres-mayas') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-emerald-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🗿 Sagrados, Mitología & Naturaleza
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🗿</span> Generador y Creador de Nombres Mayas y Prehispánicos (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Explora nombres sagrados conectados con la astronomía, deidades y tótems de la selva con pronunciación en audio.
                </p>
              </div>
            </div>

            {/* Custom Mayan Nickname & Totem Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🪶</span> Creador de Nombre con Totem y Símbolos Mayas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Tótem / Animal de Poder:</label>
                      <select aria-label="Seleccionar opción" value={myTotem}
                        onChange={(e) => setMyTotem(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      >
                        {['Jaguar 🐆', 'Quetzal 🪶', 'Sol ☀️', 'Luna 🌙', 'Agua 💧', 'Serpiente 🐍', 'Ceiba 🌳', 'Fuego 🔥'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre Maya / Prehispánico:</label>
                      <input
                        type="text"
                        value={myCustomName}
                        onChange={(e) => setMyCustomName(e.target.value)}
                        placeholder="Ixchel, Balam, Yaretzi..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Jeroglífico / Sagrado:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🗿 [Totem] • [Name] • 🪶 🗿',
                        '⚡ [Name] • [Totem] ⚡',
                        '꧁༺[Totem] [Name]༻꧂',
                        '☀️ [Name] • Ahau 👑',
                        '🌙 Ixchel • [Name] 🌸',
                        '🌿 [Name] • Selva Sagrada 🌿'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setMySelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            mySelectedFrame === frame
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame
                            .replace('[Totem]', myTotem.split(' ')[0])
                            .replace('[Name]', myCustomName || 'Ixchel')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Styled Output Preview */}
                <div className="bg-gradient-to-b from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">Identidad Sagrada Maya</div>
                    <div className="text-3xl font-extrabold text-emerald-300 font-heading mb-2">
                      {myCustomName || 'Ixchel'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {mySelectedFrame
                        .replace('[Totem]', myTotem.split(' ')[0])
                        .replace('[Name]', myCustomName || 'Ixchel')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Ideal para Free Fire, TikTok, Discord o Novelas</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        mySelectedFrame
                          .replace('[Totem]', myTotem.split(' ')[0])
                          .replace('[Name]', myCustomName || 'Ixchel')
                      )}
                      className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar Nombre Maya
                    </button>
                    <button
                      onClick={() => speakMaya(myCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Pronunciación (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Directorio de Nombres Mayas Seleccionados
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Filtra por significado sagrado y escucha la pronunciación en audio.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🗿', 'Niñas 🌸', 'Niños ⚡', 'Deidades ☀️', 'Naturaleza 🐆', 'Elegantes 💎'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setMyCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        myCategoryTab === tab
                          ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
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
                  { name: 'Ixchel', mean: 'Diosa maya de la luna, la medicina, el tejido y el amor divino', symbol: '🌙 Luna Sagrada', category: 'Deidades ☀️' },
                  { name: 'Itza', mean: 'Regalo de Dios / Magia nacida de las aguas cristalinas', symbol: '💧 Agua Pura', category: 'Niñas 🌸' },
                  { name: 'Yaretzi', mean: 'Siempre serás amada por los dioses y tu pueblo', symbol: '💖 Amor Eterno', category: 'Niñas 🌸' },
                  { name: 'Kinich', mean: 'Rostro del sol / Dios solar de la energía y luz radiante', symbol: '☀️ Sol Radiante', category: 'Deidades ☀️' },
                  { name: 'Balam', mean: 'Jaguar protector de la selva y las montañas sagradas', symbol: '🐆 Jaguar', category: 'Naturaleza 🐆' },
                  { name: 'Nicté', mean: 'Flor sagrada de mayo, pureza y delicadeza', symbol: '🌸 Flor Maya', category: 'Niñas 🌸' },
                  { name: 'Zazil', mean: 'Luz clara, transparencia y resplandor del amanecer', symbol: '✨ Luz Clara', category: 'Elegantes 💎' },
                  { name: 'Canek', mean: 'Serpiente negra de fuego y rey guerrero maya', symbol: '🐍 Serpiente', category: 'Niños ⚡' },
                  { name: 'Amaité', mean: 'Rostro del cielo infinito y brisa sagrada', symbol: '☁️ Cielo Infinito', category: 'Elegantes 💎' },
                  { name: 'K\'uk\'ulkan', mean: 'Serpiente emplumada sagrada y viento divino', symbol: '🪶 Quetzal Sagrado', category: 'Deidades ☀️' },
                  { name: 'Kaknab', mean: 'Mar infinito y gran océano de aguas profundas', symbol: '🌊 Gran Océano', category: 'Naturaleza 🐆' },
                  { name: 'Yaxkin', mean: 'Sol verde, renacer de la tierra y nuevo amanecer', symbol: '🌅 Nuevo Sol', category: 'Niños ⚡' }
                ].filter(item => myCategoryTab === 'Todos 🗿' || item.category === myCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg font-heading group-hover:text-emerald-300 transition-colors">{item.name}</h3>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/20">{item.symbol}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakMaya(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-emerald-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setMyCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-emerald-500/20 text-emerald-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-bold border border-emerald-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Female Dog Name Generator & A-Z Filter Directory */}
      {(location.pathname === '/nombres-perritas' || location.pathname === '/nombres-perros-machos' || location.pathname === '/perritas-chihuahua') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-pink-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🐾 Mascotas, Cachorras & Placas Estilizadas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🐶</span> Creador y Buscador de Nombres para Perritas (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Encuentra el nombre ideal por personalidad, simula la llamada por audio y diseña su placa o usuario de redes sociales.
                </p>
              </div>
            </div>

            {/* Custom Dog Tag & Social Username Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🎀</span> Creador de Placas y Nombres Estilizados para Perrita
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo / Personalidad de la Perrita:</label>
                      <select aria-label="Seleccionar opción" value={dogPersonality}
                        onChange={(e) => setDogPersonality(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-semibold"
                      >
                        {['Pequeña 🎀', 'Alegre 🎾', 'Princesa 👑', 'Guerrera ⚡', 'Dulce 🍯', 'Elegante 💎'].map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre de la Perrita:</label>
                      <input
                        type="text"
                        value={dogCustomName}
                        onChange={(e) => setDogCustomName(e.target.value)}
                        placeholder="Luna, Kira, Chloe..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Diseño para Placa o Redes Social (Instagram / TikTok):</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🌸 [Name] 🌸',
                        '🎀 [Name] • 🐾 🎀',
                        '👑 Princesa [Name] 👑',
                        '✨ [Name] • Puppy ✨',
                        '💖 [Name] • Love 🐾 💖',
                        '🦴 [Name] • Pet Tag 🏷️'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setDogSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            dogSelectedFrame === frame
                              ? 'bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame.replace('[Name]', dogCustomName || 'Luna')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Dog Tag Card Preview */}
                <div className="bg-gradient-to-b from-pink-950/40 via-zinc-950 to-zinc-950 border border-pink-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-pink-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación 🏷️</div>
                    <div className="text-3xl font-extrabold text-pink-300 font-heading mb-2">
                      {dogCustomName || 'Luna'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {dogSelectedFrame.replace('[Name]', dogCustomName || 'Luna')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Estilo: {dogPersonality}</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        dogSelectedFrame.replace('[Name]', dogCustomName || 'Luna')
                      )}
                      className="w-full py-2.5 bg-pink-500 hover:bg-pink-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar para Placa / Redes
                    </button>
                    <button
                      onClick={() => speakDogName(dogCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-pink-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Library */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Colección de Nombres para Perritas por Categoría
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Explora nombres populares con significado y voz de llamado.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todas 🐾', 'Tiernas 💖', 'Pequeñas 🎀', 'Blancas / Peluditas ❄️', 'Originales ✨', 'Famosas 👑'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setDogCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        dogCategoryTab === tab
                          ? 'bg-pink-500 text-zinc-950 shadow-md shadow-pink-500/20'
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
                  { name: 'Luna', mean: 'El nombre #1 más querido para perritas. Evoca la luz nocturna y tranquilidad.', symbol: '🌙 Popular #1', category: 'Tiernas 💖' },
                  { name: 'Kira', mean: 'Significa "brillo radiante" o "sol". Nombre corto e ideal para adiestramiento.', symbol: '✨ Brillo', category: 'Originales ✨' },
                  { name: 'Nala', mean: 'Inspirado en El Rey León. Significa "reina" o "regalo de la naturaleza".', symbol: '🦁 Leona', category: 'Famosas 👑' },
                  { name: 'Chloe', mean: 'Significa "brote verde" o "frescura". Perfecto para perritas coquetas.', symbol: '🎀 Coqueta', category: 'Pequeñas 🎀' },
                  { name: 'Copito', mean: 'Ideal para perritas de pelaje blanco, suave y muy esponjoso.', symbol: '❄️ Suave', category: 'Blancas / Peluditas ❄️' },
                  { name: 'Bella', mean: 'Un clásico hermoso para cachorras nobles, cariñosas y elegantes.', symbol: '🌸 Clásica', category: 'Tiernas 💖' },
                  { name: 'Sasha', mean: 'Significa "protectora de la familia". Ideal para razas medianas o grandes.', symbol: '🛡️ Fuerte', category: 'Originales ✨' },
                  { name: 'Mimi', mean: 'Nombre muy dulce y de fácil pronunciación para razas miniatura.', symbol: '🍬 Miniatura', category: 'Pequeñas 🎀' },
                  { name: 'Bianca', mean: 'Significa "blanca y pura". Elegante para Poodle, Maltés o Pomerania.', symbol: '🕊️ Blanca', category: 'Blancas / Peluditas ❄️' },
                  { name: 'Arya', mean: 'De origen valiente e independeinte. Nombre corto e inspirador.', symbol: '👑 Noble', category: 'Famosas 👑' },
                  { name: 'Maya', mean: 'Inspirado en la gran cultura milenaria. Significa "ilusión o agua sagrada".', symbol: '🌿 Sagrada', category: 'Originales ✨' },
                  { name: 'Daisy', mean: 'Significa "margarita". Nombre alegre, jovial y lleno de vida.', symbol: '🌼 Flor', category: 'Tiernas 💖' }
                ].filter(item => dogCategoryTab === 'Todas 🐾' || item.category === dogCategoryTab).map((item, idx) => (
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
                          onClick={() => speakDogName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setDogCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-pink-500/20 text-pink-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 rounded-xl text-xs font-bold border border-pink-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Female Dog Name A-Z Filter Directory */}
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                  <span>🔤</span> Directorio de Nombres para Perritas A-Z
                </h3>
                <p className="text-xs text-zinc-400 mt-1">Filtra por la letra inicial para encontrar el nombre perfecto para tu cachorra.</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['A', 'B', 'C', 'D', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'Z'].map(letter => (
                  <button
                    key={letter}
                    onClick={() => setDogLetter(letter)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                      dogLetter === letter
                        ? 'bg-pink-500 text-zinc-950 shadow-lg shadow-pink-500/30 scale-105'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {({
                  A: [{ name: 'Alma', tag: '💖 Tierna' }, { name: 'Atena', tag: '🛡️ Guerrera' }, { name: 'Abby', tag: '🐾 Dulce' }, { name: 'Arya', tag: '👑 Épica' }],
                  B: [{ name: 'Bella', tag: '🌸 Clásica' }, { name: 'Bianca', tag: '❄️ Blanca' }, { name: 'Bambi', tag: '🦌 Pequeña' }, { name: 'Bailey', tag: '🎾 Alegre' }],
                  C: [{ name: 'Chloe', tag: '🎀 Elegante' }, { name: 'Cleo', tag: '👑 Reina' }, { name: 'Coco', tag: '🍫 Cafe' }, { name: 'Copito', tag: '☁️ Suave' }],
                  D: [{ name: 'Daisy', tag: '🌼 Flor' }, { name: 'Dakota', tag: '🌿 Libre' }, { name: 'Dora', tag: '⭐ Curiosa' }, { name: 'Dulce', tag: '🍯 Cariñosa' }],
                  K: [{ name: 'Kira', tag: '✨ Brillo' }, { name: 'Kyra', tag: '👑 Sol' }, { name: 'Koa', tag: '🌴 Pacífica' }, { name: 'Kenia', tag: '🌍 Robusta' }],
                  L: [{ name: 'Luna', tag: '🌙 Popular #1' }, { name: 'Lola', tag: '🎀 Divertida' }, { name: 'Lupe', tag: '🐾 Tierna' }, { name: 'Leila', tag: '🖤 Noche' }],
                  M: [{ name: 'Maya', tag: '🌿 Sagrada' }, { name: 'Mia', tag: '💖 Mía' }, { name: 'Mila', tag: '✨ Milagro' }, { name: 'Molly', tag: '🎾 Juguetona' }],
                  N: [{ name: 'Nala', tag: '🦁 Leona' }, { name: 'Nina', tag: '🌸 Pequeña' }, { name: 'Nébula', tag: '⭐ Espacial' }, { name: 'Noa', tag: '🕊️ Paz' }],
                  P: [{ name: 'Penny', tag: '🪙 Tierna' }, { name: 'Perla', tag: '🦪 Valiosa' }, { name: 'Princesa', tag: '👑 Consentida' }, { name: 'Pipa', tag: '🍭 Chispa' }],
                  S: [{ name: 'Sasha', tag: '🛡️ Fuerte' }, { name: 'Stella', tag: '⭐ Estrella' }, { name: 'Sombra', tag: '🖤 Oscura' }, { name: 'Sunnie', tag: '☀️ Sol' }],
                  T: [{ name: 'Tiana', tag: '👑 Princesa' }, { name: 'Tara', tag: '🌸 Tierra' }, { name: 'Toby', tag: '🎾 Juguetona' }, { name: 'Trufa', tag: '🍫 Dulce' }],
                  Z: [{ name: 'Zoe', tag: '✨ Vida' }, { name: 'Zelda', tag: '🎮 Gamer' }, { name: 'Zuri', tag: '🌸 Hermosa' }, { name: 'Zaza', tag: 'Chispa' }]
                }[dogLetter] || []).map((dog, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900/80 border border-white/5 hover:border-pink-500/30 rounded-xl p-3 flex flex-col justify-between gap-2 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm group-hover:text-pink-300 transition-colors">{dog.name}</span>
                      <span className="text-[10px] bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded-full">{dog.tag}</span>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                      <button
                        onClick={() => speakDogName(dog.name)}
                        className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-pink-300 rounded-lg text-xs transition-all flex items-center justify-center"
                        title="Escuchar audio"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => setDogCustomName(dog.name)}
                        className="px-2 py-1 bg-zinc-800 hover:bg-pink-500/20 text-pink-300 rounded-lg text-[10px] font-semibold transition-all"
                        title="Estilar en creador"
                      >
                        Estilar
                      </button>
                      <button
                        onClick={() => handleCopyTrending(dog.name)}
                        className="flex-1 py-1 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Black Cat Mystical Name Section */}
      {(location.pathname === '/nombres-gatos-negros') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-purple-500/20 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-purple-950/20 via-[#121212] to-zinc-950">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                <span>🐈‍⬛</span> Nombres Místicos y Oscuros para Gatos Negros
              </h2>
              <p className="text-zinc-400 mt-1 text-sm">
                Inspirados en la magia, las brujas, la noche y el cosmos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { name: 'Salem', mean: 'El gato negro mágico de Sabrina más icónico', icon: '🧹' },
                { name: 'Shadow', mean: 'Sombra sigilosa que camina de noche', icon: '🖤' },
                { name: 'Onyx', mean: 'Piedra preciosa negra llena de energía', icon: '💎' },
                { name: 'Eclipse', mean: 'La luna tapando el sol en la oscuridad', icon: '🌒' },
                { name: 'Merlín', mean: 'El mago más poderoso de la leyenda', icon: '🔮' },
                { name: 'Bagheera', mean: 'La pantera negra majestuosa de El Libro de la Selva', icon: '🐆' }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 rounded-2xl p-4 flex items-center justify-between gap-3 transition-all">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <h3 className="font-bold text-white text-base font-heading">{item.name}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{item.mean}</p>
                  </div>
                  <button
                    onClick={() => handleCopyTrending(item.name)}
                    className="p-2.5 bg-zinc-800 hover:bg-purple-600/30 text-purple-300 rounded-xl border border-white/5 transition-all shrink-0"
                    title="Copiar"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-4">
              <span className="text-xs font-semibold text-purple-300 block mb-3">Símbolos Místicos y de Noche para Copiar:</span>
              <div className="flex flex-wrap gap-2">
                {['🐈‍⬛', '🌙', '🔮', '🦇', '🖤', '☠️', '🕸️', '🕷️', '🎃', '✨', '🪐', '🌌', '🪄'].map((sym, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopyTrending(sym)}
                    className="w-10 h-10 bg-zinc-800 hover:bg-purple-600/30 rounded-xl text-lg flex items-center justify-center transition-all active:scale-95 border border-white/5 text-purple-300"
                  >
                    {sym}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Nombres para Gatos Generator & Directory */}
      {location.pathname === '/nombres-gatos' && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-amber-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-amber-950/20 via-[#121212] to-zinc-950">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🐱 Michis, Gatitos & Placas Personalizadas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🐈</span> Creador y Generador de Nombres para Gatos (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Encuentra el nombre ideal por color de pelaje o personalidad, simula la llamada felina y diseña su placa o usuario.
                </p>
              </div>
            </div>

            {/* Custom Cat Collar & Social Username Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🐟</span> Creador de Placas y Nombres Estilizados para Michi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Pelaje / Estilo del Gato:</label>
                      <select aria-label="Seleccionar opción" value={catBreedType}
                        onChange={(e) => setCatBreedType(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm font-semibold"
                      >
                        {['Gato Naranjita 🍊', 'Panterita Negra 🐈‍⬛', 'Gato Blanco / Nieve ❄️', 'Siamés / Elegante 👑', 'Gato Atigrado 🐯', 'Mestizo / Bebé 🐱'].map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre del Gato / Gatita:</label>
                      <input
                        type="text"
                        value={catCustomName}
                        onChange={(e) => setCatCustomName(e.target.value)}
                        placeholder="Mochi, Simba, Felix..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Diseño para Collar o Redes (Instagram / TikTok):</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🐾 [Name] • Michi 🐾',
                        '🐟 [Name] • [Breed] 🐟',
                        '👑 Sir [Name] • Royalty 👑',
                        '🍊 [Name] • Mochi 🍡',
                        '✨ [Name] • Instagram Michi 📸',
                        '🧶 [Name] • Kitten 🐾'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setCatSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            catSelectedFrame === frame
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame
                            .replace('[Breed]', catBreedType.split(' ')[0])
                            .replace('[Name]', catCustomName || 'Mochi')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Cat Collar Tag Preview */}
                <div className="bg-gradient-to-b from-amber-950/40 via-zinc-950 to-zinc-950 border border-amber-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación Felina 🏷️</div>
                    <div className="text-3xl font-extrabold text-amber-300 font-heading mb-2">
                      {catCustomName || 'Mochi'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {catSelectedFrame
                        .replace('[Breed]', catBreedType.split(' ')[0])
                        .replace('[Name]', catCustomName || 'Mochi')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Estilo: {catBreedType}</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        catSelectedFrame
                          .replace('[Breed]', catBreedType.split(' ')[0])
                          .replace('[Name]', catCustomName || 'Mochi')
                      )}
                      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
                    </button>
                    <button
                      onClick={() => speakCatName(catCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Colección de Nombres para Gatos y Gatitas
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Explora nombres seleccionados con significado y voz de llamado.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🐱', 'Machos ♂️', 'Hembras ♀️', 'Graciosos / Comida 🍡', 'Gatos Naranjas 🍊', 'Elegantes / Reales 👑', 'Cortos (2 Sílabas) ⚡'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setCatCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        catCategoryTab === tab
                          ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
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
                  { name: 'Mochi', mean: 'Pastelito japonés dulce y suave. El nombre favorito para gatos tiernos.', symbol: '🍡 Comida #1', category: 'Graciosos / Comida 🍡' },
                  { name: 'Simba', mean: 'Inspirado en El Rey León. Significa "león valiente" y lleno de liderazgo.', symbol: '🦁 Rey León', category: 'Machos ♂️' },
                  { name: 'Luna', mean: 'Nombre #1 para gatitas. Evoca el misterio de la noche y ojos brillantes.', symbol: '🌙 Noche', category: 'Hembras ♀️' },
                  { name: 'Nacho', mean: 'Divertido, cálido y perfecto para michis naranjas o crujientes.', symbol: '🍊 Naranjita', category: 'Gatos Naranjas 🍊' },
                  { name: 'Oliver', mean: 'Inspirado en Oliver y su Pandilla. Elegante, curioso y juguetón.', symbol: '👑 Elegante', category: 'Elegantes / Reales 👑' },
                  { name: 'Mimi', mean: 'Muy corto de dos sílabas, perfecto para la capacidad auditiva felina.', symbol: '⚡ Corto (i)', category: 'Cortos (2 Sílabas) ⚡' },
                  { name: 'Garfield', mean: 'El felino naranja amante de la lasaña más famoso del mundo.', symbol: '🍊 Famoso', category: 'Gatos Naranjas 🍊' },
                  { name: 'Salem', mean: 'Gato negro místico e inteligente con personalidad única.', symbol: '🐈‍⬛ Místico', category: 'Machos ♂️' },
                  { name: 'Kira', mean: 'Significa "brillo solar". Nombre rápido y claro para adiestramiento.', symbol: '✨ Brillo', category: 'Hembras ♀️' },
                  { name: 'Sushi', mean: 'Adictivo, simpático e ideal para gatitos ágiles y traviesos.', symbol: '🍣 Divertido', category: 'Graciosos / Comida 🍡' },
                  { name: 'Duque', mean: 'Para gatos aristocráticos que caminan como reyes de la casa.', symbol: '👑 Aristócrata', category: 'Elegantes / Reales 👑' },
                  { name: 'Leo', mean: 'Súper corto (2 sílabas) y con gran resonancia para la llamada.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' }
                ].filter(item => catCategoryTab === 'Todos 🐱' || item.category === catCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-amber-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg font-heading group-hover:text-amber-300 transition-colors">{item.name}</h3>
                        <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/20">{item.symbol}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakCatName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-amber-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setCatCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-amber-500/20 text-amber-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl text-xs font-bold border border-amber-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Nombres para Gatos Negros Generator & Library */}
      {(location.pathname === '/nombres-gatos-negros') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-purple-950/30 via-[#121212] to-zinc-950">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🐈‍⬛ Místicos, Magia, Anime & Panteritas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🐈‍⬛</span> Generador y Creador de Nombres para Gatos Negros (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Crea placas góticas y nombres místicos con audio de llamado para tu panterita nocturna.
                </p>
              </div>
            </div>

            {/* Custom Gothic Collar & Social Username Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🔮</span> Creador de Placas Místicas y Marcos Mágicos para Gato Negro
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo / Vibe Místico:</label>
                      <select aria-label="Seleccionar opción" value={blackCatVibe}
                        onChange={(e) => setBlackCatVibe(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-purple-500 text-sm font-semibold"
                      >
                        {['Místico 🔮', 'Panterita 🐈‍⬛', 'Magia / Bruja 🪄', 'Anime / Ghibli 🎬', 'Noche / Cosmos 🌑', 'Elegante / Dark 🖤'].map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre de la Panterita:</label>
                      <input
                        type="text"
                        value={blackCatCustomName}
                        onChange={(e) => setBlackCatCustomName(e.target.value)}
                        placeholder="Salem, Sombra, Jiji..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Estilo de Marco Místico y Símbolos Nocturnos:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🐈‍⬛ [Name] • Salem 🔮',
                        '🌙 [Name] • Panterita 🖤',
                        '🔮 Salem • [Name] ✨',
                        '🦇 [Name] • Gothic Cat ☠️',
                        '✨ [Name] • Eclipse 🌑',
                        '🪄 Lord [Name] • Witch 🔮'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setBlackCatSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            blackCatSelectedFrame === frame
                              ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame.replace('[Name]', blackCatCustomName || 'Salem')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Black Cat Tag Card Preview */}
                <div className="bg-gradient-to-b from-purple-950/50 via-zinc-950 to-zinc-950 border border-purple-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">Placa de Identificación Mística 🔮</div>
                    <div className="text-3xl font-extrabold text-purple-300 font-heading mb-2">
                      {blackCatCustomName || 'Salem'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {blackCatSelectedFrame.replace('[Name]', blackCatCustomName || 'Salem')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Vibe: {blackCatVibe}</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        blackCatSelectedFrame.replace('[Name]', blackCatCustomName || 'Salem')
                      )}
                      className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
                    </button>
                    <button
                      onClick={() => speakBlackCatName(blackCatCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-purple-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado Místico (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Black Cat Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Directorio de Nombres para Gatos Negros
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Filtra por temática mágica o de cultura pop y escucha su llamado.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🐈‍⬛', 'Místicos / Magia 🔮', 'Cine / Anime 🎬', 'Noche / Cosmos 🌑', 'Elegantes / Dark 🖤', 'Divertidos / Tiernos 🍡'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setBlackCatCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        blackCatCategoryTab === tab
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
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
                  { name: 'Salem', mean: 'El inolvidable gato parlante de Sabrina. Sarcástico, sabio e icónico.', symbol: '🔮 Bruja #1', category: 'Místicos / Magia 🔮' },
                  { name: 'Jiji', mean: 'Gato negro de Kiki (Studio Ghibli). Leal, tierno y con gran voz interior.', symbol: '🎬 Ghibli', category: 'Cine / Anime 🎬' },
                  { name: 'Kuro', mean: 'Significa "Negro" en japonés. Muy usado en animes como Ao no Exorcist.', symbol: '⚡ Anime', category: 'Cine / Anime 🎬' },
                  { name: 'Bagheera', mean: 'La sabia pantera negra de El Libro de la Selva. Ágil, valiente y noble.', symbol: '🐆 Pantera', category: 'Cine / Anime 🎬' },
                  { name: 'Sombra', mean: 'Perfecto para gatitos sigilosos que caminan en la penumbra de la casa.', symbol: '🌑 Sigilo', category: 'Noche / Cosmos 🌑' },
                  { name: 'Eclipse', mean: 'Fenómeno cósmico donde la luna oculta al sol. Mágico y fascinante.', symbol: '🌑 Cosmos', category: 'Noche / Cosmos 🌑' },
                  { name: 'Onyx', mean: 'Inspirado en la valiosa piedra preciosa de tono negro profundo.', symbol: '💎 Elegante', category: 'Elegantes / Dark 🖤' },
                  { name: 'Merlín', mean: 'El mago más poderoso de las leyendas. Para michis misteriosos e inteligentes.', symbol: '🪄 Mago', category: 'Místicos / Magia 🔮' },
                  { name: 'Frijolito', mean: 'Súper divertido e ideal para gatitos pequeños de pelaje oscuro.', symbol: '🍡 Tierno', category: 'Divertidos / Tiernos 🍡' },
                  { name: 'Panterita', mean: 'Cariñoso homenaje al rey de la selva en formato miniatura.', symbol: '🐈‍⬛ Clásico', category: 'Divertidos / Tiernos 🍡' },
                  { name: 'Velvet', mean: 'Significa "terciopelo". Para minipanteras de pelaje súper suave y brillante.', symbol: '🖤 Terciopelo', category: 'Elegantes / Dark 🖤' },
                  { name: 'Hécate', mean: 'Diosa griega de la magia, las encrucijadas, la luna y la noche.', symbol: '🔮 Deidad', category: 'Místicos / Magia 🔮' }
                ].filter(item => blackCatCategoryTab === 'Todos 🐈‍⬛' || item.category === blackCatCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg font-heading group-hover:text-purple-300 transition-colors">{item.name}</h3>
                        <span className="text-[10px] bg-purple-500/10 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/20">{item.symbol}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakBlackCatName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-purple-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setBlackCatCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-purple-500/20 text-purple-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 rounded-xl text-xs font-bold border border-purple-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Nombres para Gatos Machos Generator & Library */}
      {(location.pathname === '/nombres-gatos-machos') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
          <div className="bg-[#121212] border border-blue-500/20 rounded-3xl p-6 md:p-8 shadow-2xl bg-gradient-to-br from-blue-950/30 via-[#121212] to-zinc-950">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  🦁 Reyes, Épicos, Cortos & Placas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <span>🐱</span> Generador y Creador de Nombres para Gatos Machos (con Audio)
                </h2>
                <p className="text-zinc-400 mt-1 text-sm">
                  Diseña la placa de tu gato macho, simula el llamado felino por voz y explora el directorio filtrado.
                </p>
              </div>
            </div>

            {/* Custom Male Cat Collar & Social Username Creator */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span>🏷️</span> Creador de Placas y Marcos de Honor para Gato Macho
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Personalidad / Estilo:</label>
                      <select aria-label="Seleccionar opción" value={maleCatPersonality}
                        onChange={(e) => setMaleCatPersonality(e.target.value)}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500 text-sm font-semibold"
                      >
                        {['Épico / Rey 👑', 'Juguetón / Travieso ⚡', 'Súper Corto ⚡', 'Cariñoso / Mochi 🍡', 'Mitología / Héroe 🏛️', 'Elegante / Sir 🎩'].map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-400 block mb-2">Nombre del Gatito Macho:</label>
                      <input
                        type="text"
                        value={maleCatCustomName}
                        onChange={(e) => setMaleCatCustomName(e.target.value)}
                        placeholder="Simba, Thor, Leo..."
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">Marcos con Símbolos Masculinos para Collar o Redes:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '🦁 [Name] • King 👑',
                        '⚡ [Name] • Macho 🐾',
                        '🛡️ Sir [Name] • Hero ⚔️',
                        '🍊 [Name] • Mochi 🍡',
                        '✨ [Name] • TikTok Cat 📸',
                        '🏆 [Name] • Champion 🏅'
                      ].map((frame) => (
                        <button
                          key={frame}
                          onClick={() => setMaleCatSelectedFrame(frame)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            maleCatSelectedFrame === frame
                              ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm'
                              : 'bg-zinc-800 text-zinc-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {frame.replace('[Name]', maleCatCustomName || 'Simba')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Male Cat Badge Preview */}
                <div className="bg-gradient-to-b from-blue-950/50 via-zinc-950 to-zinc-950 border border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-xl">
                  <div>
                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Placa Oficial de Gato Macho 🏷️</div>
                    <div className="text-3xl font-extrabold text-blue-300 font-heading mb-2">
                      {maleCatCustomName || 'Simba'}
                    </div>
                    <div className="text-base font-bold text-white font-heading mb-1 break-all">
                      {maleCatSelectedFrame.replace('[Name]', maleCatCustomName || 'Simba')}
                    </div>
                    <div className="text-xs text-zinc-400 italic">Estilo: {maleCatPersonality}</div>
                  </div>

                  <div className="w-full space-y-2 mt-4">
                    <button
                      onClick={() => handleCopyTrending(
                        maleCatSelectedFrame.replace('[Name]', maleCatCustomName || 'Simba')
                      )}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar para Collar / Redes
                    </button>
                    <button
                      onClick={() => speakMaleCatName(maleCatCustomName)}
                      className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-blue-300 text-[11px] font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Escuchar Llamado (Audio)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Male Cat Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span>📖</span> Directorio Seleccionado de Nombres para Gatos Machos
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Explora significados y escucha la pronunciación oficial de cada nombre.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Todos 🐱', 'Épicos / Reyes 👑', 'Cortos (2 Sílabas) ⚡', 'Comida / Tiernos 🍡', 'Mitología / Héroes 🏛️', 'Famosos / Anime 🎬'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setMaleCatCategoryTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        maleCatCategoryTab === tab
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
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
                  { name: 'Simba', mean: 'El rey de la selva. Significa "león valiente" y con gran presencia.', symbol: '🦁 Rey #1', category: 'Épicos / Reyes 👑' },
                  { name: 'Thor', mean: 'Dios nórdico del trueno. Perfecto para gatos fuertes y enérgicos.', symbol: '⚡ Trueno', category: 'Mitología / Héroes 🏛️' },
                  { name: 'Leo', mean: 'Súper corto (2 sílabas) y con resonancia aguda idónea para felinos.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' },
                  { name: 'Mochi', mean: 'Pastelito japonés suave y dulce. El preferido para gatos cariñosos.', symbol: '🍡 Dulce', category: 'Comida / Tiernos 🍡' },
                  { name: 'Loki', mean: 'Dios nórdico de las travesuras. Excelente para gatos inquietos.', symbol: '⚡ Travieso', category: 'Mitología / Héroes 🏛️' },
                  { name: 'Zeus', mean: 'Rey del Olimpo y señor de los cielos. Imponente y dominante.', symbol: '🏛️ Olimpo', category: 'Mitología / Héroes 🏛️' },
                  { name: 'Nacho', mean: 'Cálido, crujiente y divertido, perfecto para michis naranjas.', symbol: '🍊 Naranjita', category: 'Comida / Tiernos 🍡' },
                  { name: 'Max', mean: 'Corto, directo y súper fácil de aprender para el adiestramiento.', symbol: '⚡ Corto', category: 'Cortos (2 Sílabas) ⚡' },
                  { name: 'Oreo', mean: 'Inspirado en la galleta blanca y negra. Un clásico entrañable.', symbol: '🍡 Galleta', category: 'Comida / Tiernos 🍡' },
                  { name: 'Oliver', mean: 'Inspirado en Oliver y su Pandilla de Disney. Curioso y noble.', symbol: '🎬 Disney', category: 'Famosos / Anime 🎬' },
                  { name: 'Garfield', mean: 'El icónico michi amante de la lasaña y las sestas mañaneras.', symbol: '🎬 Famoso', category: 'Famosos / Anime 🎬' },
                  { name: 'Apolo', mean: 'Dios del sol, la luz y las artes. Para gatos hermosos y dorados.', symbol: '🏛️ Sol', category: 'Mitología / Héroes 🏛️' }
                ].filter(item => maleCatCategoryTab === 'Todos 🐱' || item.category === maleCatCategoryTab).map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg font-heading group-hover:text-blue-300 transition-colors">{item.name}</h3>
                        <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/20">{item.symbol}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">{item.mean}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => speakMaleCatName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-zinc-700 text-blue-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3 h-3" /> Audio
                        </button>
                        <button
                          onClick={() => setMaleCatCustomName(item.name)}
                          className="py-1.5 bg-zinc-800 hover:bg-blue-500/20 text-blue-300 rounded-xl text-[11px] font-semibold border border-white/5 transition-all flex items-center justify-center gap-1"
                          title="Cargar en el creador"
                        >
                          <span>✨</span> Estilar
                        </button>
                      </div>
                      <button
                        onClick={() => handleCopyTrending(item.name)}
                        className="w-full py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-xl text-xs font-bold border border-blue-500/20 transition-all flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copiar Nombre
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plushie Adoption Certificate Generator & Library */}
      {(location.pathname === '/nombres-peluches') && (
        <div className="max-w-6xl mx-auto py-4 space-y-8">
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
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
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
                      onChange={(e) => setPlushieName(e.target.value)}
                      placeholder="Algodón, Mochi, Boba..."
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-1">Especie / Tipo de Peluche:</label>
                    <select aria-label="Seleccionar opción" value={plushieType}
                      onChange={(e) => setPlushieType(e.target.value)}
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
                      onChange={(e) => setPlushieOwner(e.target.value)}
                      placeholder="Tu nombre..."
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-1">Súper Poder / Gusto Especial:</label>
                    <input
                      type="text"
                      value={plushieTrait}
                      onChange={(e) => setPlushieTrait(e.target.value)}
                      placeholder="Ama los abrazos y galletas..."
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-1">Promesa de Adopción:</label>
                    <input
                      type="text"
                      value={plushiePromise}
                      onChange={(e) => setPlushiePromise(e.target.value)}
                      placeholder="Prometo darle abrazos diarios..."
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-pink-500 text-xs"
                    />
                  </div>
                </div>

                {/* Live Certificate Preview Card with Theme Styling */}
                <div className={`md:col-span-2 border rounded-2xl p-6 relative flex flex-col justify-between shadow-2xl transition-all duration-300 ${
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
                    onChange={(e) => setPlushieWord1(e.target.value)}
                    placeholder="Mochi..."
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 block mb-1">Palabra 2 (Ej. Copito / Panda):</label>
                  <input
                    type="text"
                    value={plushieWord2}
                    onChange={(e) => setPlushieWord2(e.target.value)}
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
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
      )}
      {location.pathname === '/' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-8">
          {[
            { icon: <Zap className="w-6 h-6" />, title: 'Rápido y Fácil', desc: 'Genera cientos de nombres épicos en un solo clic.' },
            { icon: <Gem className="w-6 h-6" />, title: 'Símbolos Únicos', desc: 'La mayor colección de letras raras y adornos.' },
            { icon: <Shield className="w-6 h-6" />, title: 'Uso responsable', desc: 'La compatibilidad de caracteres puede variar según la plataforma y sus actualizaciones.' },
            { icon: <Smartphone className="w-6 h-6" />, title: 'Para Móvil', desc: 'Copia y pega fácilmente desde tu celular.' }
          ].map((feature, i) => (
            <div key={i} className="bg-[#121212] p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-violet-500/20 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 text-violet-400 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 font-heading mb-2">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trending Names Section */}
      {(location.pathname === '/' || location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            
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
                  className="group bg-[#121212] hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
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
      {(location.pathname === '/' || location.pathname === '/nombres-free-fire' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-4">
          <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-violet-400" />
                  Banco de Símbolos Especiales
                </h2>
                <p className="text-zinc-400 mt-2">Haz clic en cualquier símbolo para copiarlo directamente.</p>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-white/5">
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
                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
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
                  className="h-14 bg-zinc-900/60 hover:bg-violet-500/20 border border-white/5 hover:border-violet-500/30 rounded-2xl text-xl flex items-center justify-center text-zinc-200 transition-all active:scale-95 group relative"
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
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
        <div className="max-w-6xl mx-auto py-2">
          <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
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
                <div key={idx} className="bg-zinc-900/60 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-violet-500/30 transition-all">
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
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-violet-600/30 text-zinc-300 hover:text-violet-200 rounded-lg text-xs font-medium border border-white/5 transition-all"
                      title="Copiar Él"
                    >
                      Él
                    </button>
                    <button
                      onClick={() => handleCopyTrending(duo.pair2)}
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-fuchsia-600/30 text-zinc-300 hover:text-fuchsia-200 rounded-lg text-xs font-medium border border-white/5 transition-all"
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
      {(location.pathname === '/nombres-free-fire' || location.pathname === '/' || location.pathname === '/generador-free-fire' || location.pathname === '/espacios-invisible-ff' || location.pathname === '/nombres-ff-unicos' || location.pathname === '/nombres-ff-mujeres' || location.pathname === '/nombres-clanes-ff') && (
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
                <div key={idx} className="bg-[#121212] border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold font-heading flex items-center justify-center text-lg mb-4 shadow-lg shadow-violet-500/30">
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

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        {/* SEO Text */}
        <article id="articulos-guia" className="lg:col-span-8 bg-[#121212] rounded-3xl border border-white/5 p-8 md:p-12 prose prose-invert prose-zinc prose-lg max-w-none shadow-2xl shadow-black/50 prose-headings:font-heading prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white scroll-mt-24">
          {/* Interactive Table of Contents for SEO & UX */}
          <div className="mb-8 p-6 bg-zinc-900/90 rounded-2xl border border-violet-500/20 not-prose">
            <div className="flex items-center gap-2 font-bold text-white mb-3 text-base font-heading">
              <ListOrdered className="w-5 h-5 text-violet-400" />
              <span>Índice de Contenidos</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#articulos-guia" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-violet-500" />
                  <span>Guía Completa e Ideas para {data.h1}</span>
                </a>
              </li>
              {data.faqs && data.faqs.length > 0 && (
                <li>
                  <a href="#preguntas-frecuentes" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-violet-500" />
                    <span>Preguntas Frecuentes (FAQ)</span>
                  </a>
                </li>
              )}
              <li>
                <a href="#relacionados" className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-violet-500" />
                  <span>Generadores y Herramientas Relacionadas</span>
                </a>
              </li>
            </ul>
          </div>

          <div dangerouslySetInnerHTML={{ __html: data.seoText }} />
        </article>

        {/* Sidebar Features */}
        <div className="lg:col-span-4 space-y-8">
          {data.faqs && data.faqs.length > 0 && (
            <section id="preguntas-frecuentes" className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 rounded-3xl p-8 text-white border border-violet-500/20 shadow-xl relative overflow-hidden scroll-mt-24" itemScope itemType="https://schema.org/FAQPage">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="bg-violet-500/20 p-2 rounded-xl text-violet-300">
                  <HelpCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold font-heading">Preguntas Frecuentes</h3>
              </div>
              <div className="space-y-6 relative z-10">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="space-y-2 border-b border-white/10 pb-5 last:border-0 last:pb-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h4 className="font-semibold text-lg text-zinc-100" itemProp="name">{faq.question}</h4>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-zinc-400 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="bg-[#121212] rounded-3xl p-8 border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold text-zinc-100 mb-6 font-heading">Más Generadores</h3>
            <div className="space-y-2">
              {allLinks.filter(link => link.path !== location.pathname && link.path !== '/').slice(0, 5).map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <span className="font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-violet-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
               <Link to="/nombres-free-fire" className="text-violet-400 font-semibold hover:text-violet-300 transition-colors text-sm flex items-center justify-center gap-2">
                 Ver todos los generadores <ChevronRight className="w-4 h-4" />
               </Link>
            </div>
          </div>

          {/* Interactive User Rating / Feedback Widget */}
          <div className="bg-[#121212] rounded-3xl p-6 border border-white/5 shadow-xl text-center space-y-3">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-xs font-bold text-zinc-300 ml-1">Tu opinión nos ayuda a mejorar</span>
            </div>
            <p className="text-sm text-zinc-200 font-medium">¿Te sirvieron las ideas de este generador?</p>
            {feedbackGiven ? (
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl text-xs font-semibold border border-emerald-500/20">
                ¡Gracias por tu valoración! ❤️
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setFeedbackGiven(true)}
                  className="px-4 py-2 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 rounded-xl text-xs font-bold border border-violet-500/30 transition-all flex items-center gap-1"
                >
                  👍 ¡Sí, me sirvió!
                </button>
                <button
                  onClick={() => setFeedbackGiven(true)}
                  className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 rounded-xl text-xs font-medium border border-white/5 transition-all"
                >
                  👎 Regular
                </button>
              </div>
            )}
          </div>

          {/* E-E-A-T Quality Guarantee Card */}
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-3xl p-6 border border-white/10 shadow-2xl space-y-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Metodología y revisión editorial</span>
            </div>
            <p className="leading-relaxed">
              Revisamos periódicamente los caracteres, símbolos y ejemplos incluidos en nuestras herramientas. La compatibilidad puede variar según la plataforma, el dispositivo y futuras actualizaciones de cada servicio.
            </p>
            <div className="pt-2.5 border-t border-white/5 space-y-1.5 text-[11px] text-zinc-400">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Última revisión:</span>
                <span className="font-semibold text-zinc-300">Septiembre 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Compatibilidad:</span>
                <span className="font-semibold text-emerald-400">Compatibilidad variable por plataforma</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <Link to="/politica-de-privacidad" className="text-violet-400 hover:underline">Política de Privacidad</Link>
                <Link to="/contacto" className="text-violet-400 hover:underline">Soporte Editorial</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Sequential Pagination Bar for Google Crawling & UX */}
      <nav aria-label="Navegación de categorías relacionadas" className="max-w-6xl mx-auto my-12 p-6 bg-[#121212] border border-white/5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
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

      {/* Floating Favorites Drawer Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
          className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-zinc-950 font-extrabold text-xs px-4 py-3 rounded-2xl shadow-2xl shadow-amber-500/40 border border-amber-300 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <Heart className="w-4 h-4 fill-zinc-950" />
          <span>Mis Favoritos ({savedFavorites.length})</span>
        </button>

        {isFavoritesOpen && (
          <div
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl p-5 text-white z-50 backdrop-blur-xl animate-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
                <h3 className="font-bold text-sm font-heading">Nombres Guardados ({savedFavorites.length})</h3>
              </div>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {savedFavorites.length > 0 && (
              <div className="mb-3 relative">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={favSearchTerm}
                  onChange={(e) => setFavSearchTerm(e.target.value)}
                  placeholder="Buscar en favoritos..."
                  className="w-full pl-8 pr-3 py-1.5 bg-zinc-800 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
                {favSearchTerm && (
                  <button
                    onClick={() => setFavSearchTerm('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            {savedFavorites.length === 0 ? (
              <div className="py-8 text-center text-xs text-zinc-500">
                No has guardado nombres aún. Haz clic en el icono ★ junto a cualquier nombre para guardarlo aquí.
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {savedFavorites
                  .filter(fav => fav.toLowerCase().includes(favSearchTerm.toLowerCase()))
                  .map((fav, fIdx) => (
                    <div key={fIdx} className="bg-zinc-800/80 border border-white/5 rounded-xl px-3 py-2 flex items-center justify-between text-xs group">
                      <span className="font-semibold text-amber-200 truncate">{fav}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyTrending(fav)}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                          title="Copiar"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleFavorite(fav)}
                          className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {savedFavorites.length > 0 && (
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setSavedFavorites([]);
                      try { localStorage.removeItem('nombres_favoritos_saved'); } catch(e){}
                    }}
                    className="text-[11px] text-zinc-500 hover:text-red-400 transition-colors font-medium"
                  >
                    Vaciar Lista
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const blob = new Blob([savedFavorites.join('\n')], { type: 'text/plain;charset=utf-8' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'Mis_Nombres_Favoritos_2026.txt';
                        link.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs rounded-xl border border-white/10 transition-all flex items-center gap-1"
                      title="Exportar archivo TXT"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" /> .TXT
                    </button>
                    <button
                      onClick={() => handleCopyTrending(savedFavorites.join(', '))}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copiar Todos ({savedFavorites.length})
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </main>
  );
}
