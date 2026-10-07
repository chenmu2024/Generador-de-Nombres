'use client';

import { useEffect, useState } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { allLinks } from '../data/allLinks';
import { Link } from './Link';
import { useDialog } from './useDialog';

export default function SearchIsland() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [audioError, setAudioError] = useState<string | null>(null);
  const [manualCopy, setManualCopy] = useState<string | null>(null);

  const searchDialogRef = useDialog(isSearchOpen, () => setIsSearchOpen(false));
  const manualDialogRef = useDialog(manualCopy !== null, () => setManualCopy(null));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsSearchOpen(open => !open);
      }
      if (event.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const audioFailed = (event: Event) => setAudioError((event as CustomEvent<string>).detail);
    const copyFailed = (event: Event) => setManualCopy((event as CustomEvent<string>).detail);
    window.addEventListener('gdn-audio-error', audioFailed);
    window.addEventListener('gdn-copy-error', copyFailed);
    return () => {
      window.removeEventListener('gdn-audio-error', audioFailed);
      window.removeEventListener('gdn-copy-error', copyFailed);
    };
  }, []);

  const searchablePages = allLinks.map(page => ({
    title: page.label,
    path: page.path,
    desc: `Generador de nombres y apodos para ${page.label}`,
  }));
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredResults = normalizedQuery === ''
    ? searchablePages.slice(0, 6)
    : searchablePages.filter(page =>
        page.title.toLowerCase().includes(normalizedQuery) ||
        page.desc.toLowerCase().includes(normalizedQuery) ||
        page.path.toLowerCase().includes(normalizedQuery)
      ).slice(0, 8);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSearchOpen(true)}
        aria-label="Buscar categorías y herramientas"
        className="gdn-chip border min-h-11 rounded-xl px-3 py-1.5 text-xs flex items-center gap-2 transition-all"
      >
        <Search className="w-3.5 h-3.5 text-violet-400" />
        <span className="hidden 2xl:inline">Buscar categorías...</span>
        <span className="2xl:hidden">Buscar</span>
        <kbd className="hidden md:inline-block bg-white/10 border border-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">Ctrl K</kbd>
      </button>

      {audioError && (
        <div role="status" className="fixed bottom-4 left-4 right-4 z-[100] gdn-surface p-4 rounded-xl border">
          {audioError}
          <button className="ml-4 underline" onClick={() => setAudioError(null)}>Cerrar</button>
        </div>
      )}

      {manualCopy !== null && (
        <div ref={manualDialogRef} role="dialog" aria-modal="true" aria-label="Copiar manualmente" tabIndex={-1} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <div className="gdn-surface p-6 rounded-2xl border w-full max-w-lg space-y-4">
            <h2 className="text-xl font-bold">Copiar manualmente</h2>
            <p>No se pudo acceder al portapapeles. Selecciona el texto y cópialo con el menú del dispositivo o Ctrl/Cmd+C.</p>
            <textarea aria-label="Texto para copiar" className="gdn-input w-full p-3 border rounded-xl" readOnly value={manualCopy} onFocus={event => event.target.select()} />
            <button onClick={() => setManualCopy(null)} className="gdn-primary-button p-3 rounded-xl">Cerrar</button>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto"
          onClick={() => setIsSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Buscar categorías y herramientas"
          ref={searchDialogRef}
          tabIndex={-1}
        >
          <div className="gdn-surface border rounded-2xl max-w-2xl w-full overflow-hidden relative" onClick={event => event.stopPropagation()}>
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-violet-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                aria-label="Buscar generadores y categorías"
                placeholder="Buscar generadores, categorías (Free Fire, Peluches, Gatos...)"
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm font-semibold focus:outline-none"
                autoFocus
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} aria-label="Cerrar búsqueda" className="text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="gdn-surface-raised px-4 py-2 border-b flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-zinc-500 font-semibold shrink-0">Accesos:</span>
              {[
                ['🔥 Free Fire', '/generador-free-fire'],
                ['🧸 Peluches', '/nombres-peluches'],
                ['🐱 Gatos', '/nombres-gatos-machos'],
                ['🐶 Perritas', '/nombres-perritas'],
                ['🌸 Niñas', '/nombres-de-nina'],
                ['🎮 Roblox', '/nombres-roblox'],
              ].map(([label, path]) => (
                <Link key={path} to={path} onClick={() => setIsSearchOpen(false)} className="gdn-chip shrink-0 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all">
                  {label}
                </Link>
              ))}
            </div>

            <div className="p-3 max-h-96 overflow-y-auto space-y-1">
              {filteredResults.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">
                  No se encontraron categorías para "{searchQuery}".
                </div>
              ) : filteredResults.map(item => (
                <Link key={item.path} to={item.path} onClick={() => setIsSearchOpen(false)} className="block p-3 rounded-xl hover:bg-violet-600/10 border border-transparent hover:border-violet-500/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-300" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
