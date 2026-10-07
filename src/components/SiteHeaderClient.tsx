'use client';

import { useEffect, useState } from 'react';
import { Link } from './Link';
import { useLocation, useNavigate } from '../utils/router';
import { Menu, X, ChevronDown, Gamepad2, Users, Heart, Type, Globe, Briefcase, Search, Sparkles, ArrowRight, Bookmark, Copy, Trash2, Check } from 'lucide-react';
import { allLinks } from '../data/allLinks';
import { copyText } from '../utils/clipboard';
import { readFavorites, writeStorage } from '../utils/browserStorage';
import { useDialog } from './useDialog';

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
      { path: '/nombres-de-nina', label: 'Nombres de Niña', desc: 'Ideas no comunes y cortas' },
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

export default function SiteHeaderClient() {
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
  const [copiedFavorite, setCopiedFavorite] = useState<string | null>(null);

  // Load favorites from LocalStorage
  const loadFavorites = () => setFavorites(readFavorites());

  useEffect(() => {
    loadFavorites();
    const handleFavUpdate = () => loadFavorites();
    window.addEventListener('gdn_favorites_updated', handleFavUpdate);
    window.addEventListener('storage', handleFavUpdate);
  
  return (
    <>
      <header className="gdn-header backdrop-blur-xl border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-3">
            <Link to="/" aria-label="GeneradorDeNombres.net - Página de Inicio" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative p-1.5 bg-zinc-900 border border-white/10 rounded-xl shadow-lg shadow-violet-500/20 group-hover:border-violet-500/50 group-hover:shadow-violet-500/40 transition-all overflow-hidden">
                <img src="/favicon.svg" alt="GeneradorDeNombres Logo" width={24} height={24} loading="eager" fetchPriority="high" decoding="async" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-lg font-extrabold font-heading tracking-tight text-white hidden sm:inline">
                GeneradorDeNombres<span className="text-violet-400">.net</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="gdn-nav hidden xl:flex items-center gap-1 p-1 border">
              <Link
                to="/"
                className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
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
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(prev => prev === group.title ? null : group.title)}
                      onFocus={() => setActiveDropdown(group.title)}
                      aria-haspopup="menu"
                      aria-expanded={activeDropdown === group.title}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
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
                    {activeDropdown === group.title && (
                      <div
                        className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in zoom-in-95 duration-150"
                      >
                        <div className="gdn-surface border rounded-2xl p-2 backdrop-blur-2xl">
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
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Global Search & Favorites Trigger Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFavDrawerOpen(true)}
                aria-label={`Mis Nombres Favoritos Guardados (${favorites.length})`}
                className="gdn-chip relative border rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1.5 transition-all"
                title="Mis Nombres Favoritos Guardados"
              >
                <Bookmark className="w-3.5 h-3.5 text-violet-400 fill-violet-500/10" />
                <span className="hidden md:inline font-semibold">Favoritos</span>
                <span className="sr-only">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar categorías y herramientas"
                className="gdn-chip border rounded-xl px-3 py-1.5 text-xs flex items-center gap-2 transition-all"
              >
                <Search className="w-3.5 h-3.5 text-violet-400" />
                <span className="hidden 2xl:inline">Buscar categorías...</span>
                <span className="2xl:hidden">Buscar</span>
                <kbd className="hidden md:inline-block bg-white/10 border border-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  Ctrl K
                </kbd>
              </button>

              {/* Mobile menu button */}
              <button 
                className="xl:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-primary-navigation"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            id="mobile-primary-navigation" ref={menuDialogRef} role="dialog" aria-modal="true" aria-label="Menú principal" tabIndex={-1}
            className="xl:hidden border-t gdn-header overflow-hidden max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-4"><button onClick={() => setIsMenuOpen(false)} className="gdn-chip p-3 rounded-xl border">Cerrar menú</button>
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
                        className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                          location.pathname === link.path
                            ? 'bg-violet-600/20 text-violet-300 font-bold'
                            : 'text-zinc-300 hover:bg-white/5'
                        }`}
                      >
                        <span className="min-w-0">{link.label}</span>
                        <span className="hidden sm:block text-[10px] text-zinc-500 text-right max-w-[55%] leading-tight">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
      {audioError && <div role="status" className="fixed bottom-4 left-4 right-4 z-[100] gdn-surface p-4 rounded-xl border">{audioError}<button className="ml-4 underline" onClick={() => setAudioError(null)}>Cerrar</button></div>}
      {/* Cookie Consent Banner for AdSense / GDPR */}
      {manualCopy !== null && <div ref={manualDialogRef} role="dialog" aria-modal="true" aria-label="Copiar manualmente" tabIndex={-1} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
        <div className="gdn-surface p-6 rounded-2xl border w-full max-w-lg space-y-4">
          <h2 className="text-xl font-bold">Copiar manualmente</h2>
          <p>No se pudo acceder al portapapeles. Selecciona el texto y cópialo con el menú del dispositivo o Ctrl/Cmd+C.</p>
          <textarea aria-label="Texto para copiar" className="gdn-input w-full p-3 border rounded-xl" readOnly value={manualCopy} onFocus={event => event.target.select()} />
          <button onClick={() => setManualCopy(null)} className="gdn-primary-button p-3 rounded-xl">Cerrar</button>
        </div>
      </div>}

      {/* Global Quick Search Modal (Ctrl + K) */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Buscar categorías y herramientas" ref={searchDialogRef} tabIndex={-1}
        >
          <div
            className="gdn-surface border rounded-2xl max-w-2xl w-full overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-violet-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar generadores y categorías"
                placeholder="Buscar generadores, categorías (Free Fire, Peluches, Gatos...)"
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm font-semibold focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Cerrar modal de búsqueda"
                className="text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800"
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Cerrar</span>
              </button>
            </div>

            {/* Quick Tags */}
            <div className="gdn-surface-raised px-4 py-2 border-b flex items-center gap-2 overflow-x-auto text-xs">
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
                  className="gdn-chip shrink-0 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all"
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
                    className="block p-3 rounded-xl hover:bg-violet-600/10 border border-transparent hover:border-violet-500/30 transition-all group"
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
            <div className="gdn-surface-raised p-3 text-[11px] text-zinc-500 flex items-center justify-between border-t">
              <span>Navegación Rápida de Herramientas & Generadores 2026</span>
              <span className="font-mono">ESC para cerrar</span>
            </div>
          </div>
        </div>
      )}
      {/* Favorites Drawer Overlay */}
      {isFavDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
          onClick={() => setIsFavDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mis nombres favoritos" ref={favoritesDialogRef} tabIndex={-1}
        >
          <div
            className="gdn-surface border-l w-full max-w-md h-full flex flex-col overflow-hidden animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="gdn-surface-raised p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-violet-400 fill-violet-500/10" />
                <h3 className="font-bold text-white text-base">Mis Nombres Favoritos</h3>
                <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">
                  {favorites.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFavDrawerOpen(false)}
                aria-label="Cerrar panel de favoritos"
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Cerrar</span>
              </button>
            </div>

            {/* Drawer Actions */}
            {favorites.length > 0 && (
              <div className="gdn-surface p-3 border-b flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={copyAllFavorites}
                  aria-label="Copiar todos los nombres favoritos"
                  className="gdn-primary-button flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all"
                >
                  {favCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{favCopied ? '¡Lista Copiada!' : 'Copiar Todos'}</span>
                </button>

                <button
                  type="button"
                  onClick={clearAllFavorites}
                  aria-label="Vaciar toda la lista de favoritos"
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
                  <div
                    key={idx}
                    className="gdn-surface-raised border rounded-xl p-3 flex items-center justify-between gap-3 group hover:border-violet-500/30 transition-all"
                  >
                    <span className="font-mono text-sm text-zinc-100 font-bold tracking-wide break-all">
                      {favName}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => copyFavorite(favName)}
                        aria-label={copiedFavorite === favName ? `Nombre favorito ${favName} copiado` : `Copiar nombre favorito ${favName}`}
                        className={`p-2.5 rounded-lg transition-colors ${copiedFavorite === favName ? 'text-emerald-400 bg-emerald-500/10' : 'text-zinc-400 hover:text-violet-300 hover:bg-white/10'}`}
                        title={copiedFavorite === favName ? 'Copiado' : 'Copiar'}
                      >
                        {copiedFavorite === favName ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span className="sr-only">{copiedFavorite === favName ? 'Copiado' : 'Copiar'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFavorite(favName)}
                        aria-label={`Eliminar nombre favorito ${favName}`}
                        className="p-2.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Eliminar</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            <div className="gdn-surface-raised p-4 border-t text-xs text-zinc-500 text-center">
              Guardados automáticamente en tu navegador local (LocalStorage).
            </div>
          </div>
        </div>
      )}
    </>
  );
}
