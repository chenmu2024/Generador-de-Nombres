import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flame, Menu, X, ChevronDown, Gamepad2, Users, Heart, Type, Globe, Briefcase, Search, Sparkles, ArrowRight, Bookmark, Copy, Trash2, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { allLinks } from '../data/allLinks';
import CookieBanner from '../components/CookieBanner';

const navGroups = [
  {
    title: 'Juegos & Redes',
    icon: Gamepad2,
    badge: '🔥 Hot',
    links: [
      { path: '/generador-free-fire', label: 'Free Fire Generator', desc: 'Símbolos, letras raras y apodos' },
      { path: '/espacios-invisible-ff', label: 'Espacio Invisible', desc: 'Unicode transparente para FF' },
      { path: '/nombres-ff-unicos', label: 'FF Nombres Únicos', desc: 'Apodos que nadie tiene' },
      { path: '/nombres-ff-mujeres', label: 'FF Chicas & Mujeres', desc: 'Estilo femenino e insano' },
      { path: '/nombres-clanes-ff', label: 'Clanes Free Fire', desc: 'Tags e insignias de escuadra' },
      { path: '/nombres-roblox', label: 'Roblox Display Names', desc: 'Aesthetic y compatibles' },
      { path: '/nombres-instagram', label: 'Instagram Aesthetic', desc: 'Nombres y bios de perfil' },
      { path: '/nombres-anime', label: 'Anime & Otaku', desc: 'Héroes, villanos y apodos' }
    ]
  },
  {
    title: 'Personas & Bebés',
    icon: Users,
    badge: '👶 Nuevo',
    links: [
      { path: '/nombres-de-mujer', label: 'Nombres de Mujer', desc: 'Lista bonita y elegante' },
      { path: '/nombres-de-nina', label: 'Nombres de Niña', desc: '300+ no comunes y cortos' },
      { path: '/nombres-de-nino', label: 'Nombres de Niño', desc: 'Con significado profundo' },
      { path: '/nombres-unisex', label: 'Nombres Unisex', desc: 'Neutros y modernos' },
      { path: '/nombres-raros', label: 'Nombres Raros', desc: 'Únicos y poco comunes' }
    ]
  },
  {
    title: 'Por Letra A-Z',
    icon: Type,
    links: [
      { path: '/nombres-por-letra', label: 'Directorio A-Z', desc: 'Navega de la A a la Z' },
      { path: '/nombres-con-a', label: 'Nombres con A', desc: 'Alexander, Amelia, Aitana' },
      { path: '/nombres-con-f', label: 'Nombres con F', desc: 'Fernando, Frida, Félix' },
      { path: '/nombres-con-m', label: 'Nombres con M', desc: 'Mateo, Mía, Martín' },
      { path: '/nombres-con-en', label: 'Nombres con Ñ', desc: 'Tradición hispana e Iñigo' },
      { path: '/nombres-con-z', label: 'Nombres con Z', desc: 'Zeus, Zoey, Zaid' }
    ]
  },
  {
    title: 'Culturas',
    icon: Globe,
    links: [
      { path: '/nombres-de-dioses', label: 'Dioses & Mitología', desc: 'Griegos, nórdicos y egipcios' },
      { path: '/nombres-japoneses', label: 'Japoneses (Kanji)', desc: 'Anime, manga y audio' },
      { path: '/nombres-coreanos', label: 'Coreanos (Hangul)', desc: 'K-Pop y Doramas' },
      { path: '/nombres-italianos', label: 'Italianos', desc: 'Elegancia mediterránea' },
      { path: '/nombres-mayas', label: 'Mayas & Sagrados', desc: 'Prehispánicos y deidades' },
      { path: '/nombres-franceses', label: 'Franceses', desc: 'Sofisticados y románticos' }
    ]
  },
  {
    title: 'Mascotas',
    icon: Heart,
    links: [
      { path: '/nombres-gatos', label: 'Gatos Generales', desc: 'Michis machos y hembras' },
      { path: '/nombres-perritas', label: 'Perritas Bonitas', desc: 'Cachorras y tiernas' },
      { path: '/nombres-perros-machos', label: 'Perros Machos', desc: 'Ideas fuertes y épicas' },
      { path: '/nombres-gatos-negros', label: 'Gatos Negros', desc: 'Místicos y panteritas' },
      { path: '/perritas-chihuahua', label: 'Perritas Chihuahua', desc: 'Razas diminutas' },
      { path: '/nombres-caballos', label: 'Caballos & Yeguas', desc: 'Imponentes y de paso' }
    ]
  },
  {
    title: 'Equipos & Negocios',
    icon: Briefcase,
    links: [
      { path: '/nombres-equipos-futbol', label: 'Equipos de Fútbol', desc: 'Torneos y eSports' },
      { path: '/nombres-para-tiendas', label: 'Tiendas & Negocios', desc: 'Marcas y e-Commerce' },
      { path: '/nombres-peluches', label: 'Peluches & Adopción', desc: 'Squishmallows y ositos' }
    ]
  }
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Search Modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavDrawerOpen, setIsFavDrawerOpen] = useState(false);
  const [favCopied, setFavCopied] = useState(false);

  // Load favorites from LocalStorage
  const loadFavorites = () => {
    try {
      const stored = localStorage.getItem('gdn_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadFavorites();
    const handleFavUpdate = () => loadFavorites();
    window.addEventListener('gdn_favorites_updated', handleFavUpdate);
    return () => window.removeEventListener('gdn_favorites_updated', handleFavUpdate);
  }, []);

  // Global Ctrl + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsFavDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);



  const removeFavorite = (nameToRemove: string) => {
    const updated = favorites.filter(f => f !== nameToRemove);
    setFavorites(updated);
    localStorage.setItem('gdn_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('gdn_favorites');
    window.dispatchEvent(new Event('gdn_favorites_updated'));
  };

  const copyAllFavorites = () => {
    if (favorites.length === 0) return;
    navigator.clipboard.writeText(favorites.join('\n'));
    setFavCopied(true);
    setTimeout(() => setFavCopied(false), 2000);
  };

  // Filter categories and pages for quick search
  const searchablePages = allLinks.map(page => ({
    title: page.label,
    path: page.path,
    desc: `Generador de nombres y apodos para ${page.label}`,
    h1: page.label
  }));

  const filteredResults = searchQuery.trim() === ''
    ? searchablePages.slice(0, 6)
    : searchablePages.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.path.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col font-sans selection:bg-violet-500/30">
      <header className="bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-3">
            <Link to="/" aria-label="GeneradorDeNombres.net - Página de Inicio" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative p-1.5 bg-zinc-900 border border-white/10 rounded-xl shadow-lg shadow-violet-500/20 group-hover:border-violet-500/50 group-hover:shadow-violet-500/40 transition-all overflow-hidden">
                <img src="/favicon.svg" alt="GeneradorDeNombres Logo" width={24} height={24} decoding="async" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-lg font-extrabold font-heading tracking-tight text-white hidden sm:inline">
                GeneradorDeNombres<span className="text-violet-400">.net</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-1 rounded-2xl border border-white/5">
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                Inicio
              </Link>

              {navGroups.map((group) => {
                const isGroupActive = group.links.some(l => l.path === location.pathname);
                return (
                  <div
                    key={group.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(group.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                        isGroupActive
                          ? 'bg-white/10 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                      }`}
                    >
                      <group.icon className="w-3.5 h-3.5 opacity-70" />
                      <span>{group.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === group.title ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Box */}
                    <AnimatePresence>
                      {activeDropdown === group.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 w-64 z-50"
                        >
                          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl">
                            {group.links.map((link) => (
                              <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                                  location.pathname === link.path
                                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                                    : 'hover:bg-white/5 text-zinc-300 hover:text-white'
                                }`}
                              >
                                <div className="text-sm font-bold">{link.label}</div>
                                <div className="text-[11px] text-zinc-400">{link.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Global Search & Favorites Trigger Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavDrawerOpen(true)}
                className="relative bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-zinc-300 flex items-center gap-1.5 transition-all hover:border-pink-500/40"
                title="Mis Nombres Favoritos Guardados"
              >
                <Bookmark className="w-3.5 h-3.5 text-pink-400 fill-pink-500/20" />
                <span className="hidden sm:inline font-semibold">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-zinc-400 flex items-center gap-2 transition-all hover:border-violet-500/40"
              >
                <Search className="w-3.5 h-3.5 text-violet-400" />
                <span className="hidden sm:inline">Buscar categorías...</span>
                <span className="sm:hidden">Buscar</span>
                <kbd className="hidden sm:inline-block bg-white/10 border border-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  Ctrl K
                </kbd>
              </button>

              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0a0a0a] overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname === '/' ? 'bg-white/10 text-white' : 'text-zinc-400'
                  }`}
                >
                  🏠 Inicio
                </Link>

                {navGroups.map((group) => (
                  <div key={group.title} className="space-y-1">
                    <div className="px-4 text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
                      <group.icon className="w-3.5 h-3.5" />
                      <span>{group.title}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 pt-1 pl-2">
                      {group.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-sm font-medium ${
                            location.pathname === link.path
                              ? 'bg-violet-600/20 text-violet-300 font-bold'
                              : 'text-zinc-300 hover:bg-white/5'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span className="text-[10px] text-zinc-500">{link.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#0a0a0a] border-t border-white/5 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" aria-label="GeneradorDeNombres.net - Inicio" className="inline-flex justify-center items-center gap-3 mb-6 group">
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1.5 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity">
               <Flame className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold font-heading text-white">GeneradorDeNombres.net</span>
          </Link>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            El generador de nombres, apodos y símbolos Unicode más completo. Crea apodos épicos y letras raras para Free Fire, Roblox, Instagram, mascotas y nombres de bebés.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-left mb-12 border-b border-white/5 pb-12">
            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🔥 Free Fire & Gaming</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/generador-free-fire" className="hover:text-violet-300 transition-colors">Generador Free Fire</Link></li>
                <li><Link to="/espacios-invisible-ff" className="hover:text-violet-300 transition-colors">Espacio Invisible FF</Link></li>
                <li><Link to="/nombres-ff-unicos" className="hover:text-violet-300 transition-colors">Nombres Únicos FF</Link></li>
                <li><Link to="/nombres-ff-mujeres" className="hover:text-violet-300 transition-colors">FF Chicas & Mujeres</Link></li>
                <li><Link to="/nombres-clanes-ff" className="hover:text-violet-300 transition-colors">Nombres para Clanes FF</Link></li>
                <li><Link to="/nombres-roblox" className="hover:text-violet-300 transition-colors">Nombres para Roblox</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">📱 Redes Sociales</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/nombres-instagram" className="hover:text-violet-300 transition-colors">Nombres Instagram</Link></li>
                <li><Link to="/nombres-tiktok" className="hover:text-violet-300 transition-colors">Nombres TikTok</Link></li>
                <li><Link to="/nombres-canales-youtube" className="hover:text-violet-300 transition-colors">Canales de YouTube</Link></li>
                <li><Link to="/nombres-para-podcast" className="hover:text-violet-300 transition-colors">Nombres para Podcast</Link></li>
                <li><Link to="/simbolos-letras-raras" className="hover:text-violet-300 transition-colors">Letras Raras & Símbolos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">👶 Personas & Bebés</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/nombres-de-mujer" className="hover:text-violet-300 transition-colors">Nombres de Mujer</Link></li>
                <li><Link to="/nombres-de-nina" className="hover:text-violet-300 transition-colors">Nombres de Niña</Link></li>
                <li><Link to="/nombres-de-nino" className="hover:text-violet-300 transition-colors">Nombres de Niño</Link></li>
                <li><Link to="/nombres-unisex" className="hover:text-violet-300 transition-colors">Nombres Unisex</Link></li>
                <li><Link to="/nombres-raros" className="hover:text-violet-300 transition-colors">Nombres Raros & Únicos</Link></li>
                <li><Link to="/generador-apellidos" className="hover:text-violet-300 transition-colors">Generador de Apellidos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🐾 Mascotas & Peluches</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/nombres-gatos" className="hover:text-violet-300 transition-colors">Nombres para Gatos</Link></li>
                <li><Link to="/nombres-perritas" className="hover:text-violet-300 transition-colors">Nombres para Perritas</Link></li>
                <li><Link to="/nombres-perros-machos" className="hover:text-violet-300 transition-colors">Perros Machos</Link></li>
                <li><Link to="/nombres-gatos-negros" className="hover:text-violet-300 transition-colors">Gatos Negros</Link></li>
                <li><Link to="/perritas-chihuahua" className="hover:text-violet-300 transition-colors">Perritas Chihuahua</Link></li>
                <li><Link to="/nombres-peluches" className="hover:text-violet-300 transition-colors">Nombres para Peluches</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🌍 Culturas & Anime</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/nombres-de-dioses" className="hover:text-violet-300 transition-colors">Dioses & Mitología</Link></li>
                <li><Link to="/nombres-japoneses" className="hover:text-violet-300 transition-colors">Nombres Japoneses</Link></li>
                <li><Link to="/nombres-coreanos" className="hover:text-violet-300 transition-colors">Nombres Coreanos</Link></li>
                <li><Link to="/nombres-anime" className="hover:text-violet-300 transition-colors">Nombres Anime</Link></li>
                <li><Link to="/nombres-mayas" className="hover:text-violet-300 transition-colors">Nombres Mayas</Link></li>
                <li><Link to="/nombres-italianos" className="hover:text-violet-300 transition-colors">Nombres Italianos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">💼 Negocios & Equipos</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link to="/nombres-para-tiendas" className="hover:text-violet-300 transition-colors">Nombres para Tiendas</Link></li>
                <li><Link to="/nombres-equipos-futbol" className="hover:text-violet-300 transition-colors">Equipos de Fútbol</Link></li>
                <li><Link to="/nombres-bandas-rock" className="hover:text-violet-300 transition-colors">Bandas de Rock</Link></li>
                <li><Link to="/nombres-superheroes" className="hover:text-violet-300 transition-colors">Superhéroes</Link></li>
                <li><Link to="/nombres-barcos" className="hover:text-violet-300 transition-colors">Nombres de Barcos</Link></li>
                <li><Link to="/nombres-por-letra" className="hover:text-violet-300 transition-colors">Directorio A-Z</Link></li>
              </ul>
            </div>
          </div>
          
          <nav aria-label="Enlaces legales y de contacto" className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-zinc-600">
            <Link to="/sobre-nosotros" className="hover:text-zinc-300 transition-colors">Sobre Nosotros</Link>
            <Link to="/politica-de-privacidad" className="hover:text-zinc-300 transition-colors">Política de Privacidad</Link>
            <Link to="/terminos-y-condiciones" className="hover:text-zinc-300 transition-colors">Términos y Condiciones</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">Mapa del Sitio XML</a>
            <Link to="/contacto" className="hover:text-zinc-300 transition-colors">Contacto y Soporte</Link>
          </nav>

          <p className="text-zinc-700 text-sm mt-8">
            © {new Date().getFullYear()} generadordenombres.net. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Cookie Consent Banner for AdSense / GDPR */}
      <CookieBanner />

      {/* Global Quick Search Modal (Ctrl + K) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <Search className="w-5 h-5 text-violet-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar generadores, categorías (Free Fire, Peluches, Gatos...)"
                  className="w-full bg-transparent text-white placeholder-zinc-500 text-sm font-semibold focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Tags */}
              <div className="px-4 py-2 bg-zinc-950/50 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
                <span className="text-zinc-500 font-semibold shrink-0">Popular:</span>
                {[
                  { label: '🔥 Free Fire', path: '/generador-free-fire' },
                  { label: '🧸 Peluches', path: '/nombres-peluches' },
                  { label: '🐱 Gatos', path: '/nombres-gatos-machos' },
                  { label: '🐶 Perritas', path: '/nombres-perritas' },
                  { label: '🌸 Niñas', path: '/nombres-de-nina' },
                  { label: '🎮 Roblox', path: '/nombres-roblox' }
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigate(tag.path);
                      setIsSearchOpen(false);
                    }}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 hover:bg-violet-500/20 text-zinc-300 hover:text-violet-300 border border-white/5 text-[11px] font-medium transition-all"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

              {/* Search Results List */}
              <div className="p-3 max-h-96 overflow-y-auto space-y-1">
                {filteredResults.length === 0 ? (
                  <div className="py-8 text-center text-xs text-zinc-500">
                    No se encontraron categorías para "{searchQuery}". Pruebe con palabras como Free Fire, Gatos, Bebés o Tiendas.
                  </div>
                ) : (
                  filteredResults.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setIsSearchOpen(false)}
                      className="block p-3 rounded-2xl hover:bg-violet-600/10 border border-transparent hover:border-violet-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                          {item.h1 || item.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-300 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{item.desc}</p>
                    </Link>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-zinc-950 text-[11px] text-zinc-500 flex items-center justify-between border-t border-white/5">
                <span>Navegación Rápida de Herramientas & Generadores 2026</span>
                <span className="font-mono">ESC para cerrar</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Favorites Drawer Overlay */}
      <AnimatePresence>
        {isFavDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
            onClick={() => setIsFavDrawerOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-zinc-900 border-l border-white/10 w-full max-w-md h-full flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-pink-400 fill-pink-500/20" />
                  <h3 className="font-bold text-white text-base">Mis Nombres Favoritos</h3>
                  <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">
                    {favorites.length}
                  </span>
                </div>
                <button
                  onClick={() => setIsFavDrawerOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Actions */}
              {favorites.length > 0 && (
                <div className="p-3 bg-zinc-900 border-b border-white/5 flex items-center justify-between text-xs">
                  <button
                    onClick={copyAllFavorites}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/30 font-semibold transition-all"
                  >
                    {favCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{favCopied ? '¡Lista Copiada!' : 'Copiar Todos'}</span>
                  </button>

                  <button
                    onClick={clearAllFavorites}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vaciar</span>
                  </button>
                </div>
              )}

              {/* Drawer Content */}
              <div className="flex-1 p-4 overflow-y-auto space-y-2">
                {favorites.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <Bookmark className="w-12 h-12 text-zinc-600 mx-auto" />
                    <p className="text-zinc-400 text-sm font-medium">No tienes nombres guardados en tus favoritos.</p>
                    <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                      Haz clic en el icono de corazón ❤️ o marcador de cualquier nombre generado para guardarlo aquí y consultarlo cuando quieras.
                    </p>
                  </div>
                ) : (
                  favorites.map((favName, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-zinc-950 border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 group hover:border-pink-500/40 transition-all"
                    >
                      <span className="font-mono text-sm text-zinc-100 font-bold tracking-wide break-all">
                        {favName}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(favName);
                            alert(`¡"${favName}" copiado al portapapeles!`);
                          }}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-pink-300 hover:bg-white/10 transition-colors"
                          title="Copiar"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFavorite(favName)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-zinc-950 border-t border-white/10 text-xs text-zinc-500 text-center">
                Guardados automáticamente en tu navegador local (LocalStorage).
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
