'use client';

import { useEffect, useState } from 'react';
import { Bookmark, Check, Copy, Trash2, X } from 'lucide-react';
import { copyText } from '../utils/clipboard';
import { readFavorites, writeStorage } from '../utils/browserStorage';
import { useDialog } from './useDialog';

export default function FavoritesIsland() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedFavorite, setCopiedFavorite] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);
  const [recentlyCleared, setRecentlyCleared] = useState<string[] | null>(null);
  const [storageWarning, setStorageWarning] = useState(false);
  const closeDrawer = () => {
    setIsOpen(false);
    setConfirmClear(false);
    setRecentlyCleared(null);
  };
  const drawerRef = useDialog(isOpen, closeDrawer);

  useEffect(() => {
    const load = () => setFavorites(readFavorites());
    load();
    window.addEventListener('gdn_favorites_updated', load);
    window.addEventListener('storage', load);
    return () => {
      window.removeEventListener('gdn_favorites_updated', load);
      window.removeEventListener('storage', load);
    };
  }, []);

  const persist = (values: string[]) => {
    setFavorites(values);
    const stored = writeStorage('gdn_favorites', JSON.stringify(values));
    setStorageWarning(!stored);
    window.dispatchEvent(new Event('gdn_favorites_updated'));
  };

  const clearFavorites = () => {
    setRecentlyCleared([...favorites]);
    persist([]);
    setConfirmClear(false);
  };

  const undoClear = () => {
    if (!recentlyCleared) return;
    // Preserve names saved from another tool while the drawer was open.
    persist([...new Set([...recentlyCleared, ...readFavorites()])]);
    setRecentlyCleared(null);
  };

  const copyAll = async () => {
    if (!favorites.length || !await copyText(favorites.join('\n'))) return;
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1600);
  };

  const copyOne = async (name: string) => {
    if (!await copyText(name)) return;
    setCopiedFavorite(name);
    setTimeout(() => setCopiedFavorite(current => current === name ? null : current), 1600);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Mis nombres favoritos guardados (${favorites.length})`}
        className="gdn-chip relative min-h-11 border rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1.5 transition-all"
      >
        <Bookmark className="w-3.5 h-3.5 text-violet-400 fill-violet-500/10" />
        <span className="hidden md:inline font-semibold">Favoritos</span>
        {favorites.length > 0 && <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 rounded-full min-w-[18px] text-center">{favorites.length}</span>}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end" onClick={closeDrawer} role="dialog" aria-modal="true" aria-label="Mis nombres favoritos" ref={drawerRef} tabIndex={-1}>
          <div className="gdn-surface border-l w-full max-w-md h-full flex flex-col overflow-hidden" onClick={event => event.stopPropagation()}>
            <div className="gdn-surface-raised p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-violet-400" />
                <h3 className="font-bold text-white text-base">Mis Nombres Favoritos</h3>
                <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">{favorites.length}</span>
              </div>
              <button type="button" onClick={closeDrawer} aria-label="Cerrar panel de favoritos" className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            {favorites.length > 0 && (
              <div className="gdn-surface p-3 border-b flex items-center justify-between text-xs">
                <button type="button" onClick={copyAll} className="gdn-primary-button flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold">
                  {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedAll ? 'Lista copiada' : 'Copiar todos'}
                </button>
                <button type="button" aria-label="Vaciar todos los favoritos" onClick={() => setConfirmClear(true)} className="flex items-center gap-1 min-h-11 px-2.5 py-1.5 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10">
                  <Trash2 className="w-3.5 h-3.5" /> Vaciar
                </button>
              </div>
            )}

            {storageWarning && (
              <p role="status" className="px-4 py-3 bg-amber-500/10 text-amber-200 text-xs">
                El navegador bloquea el almacenamiento: los favoritos pueden desaparecer al cerrar esta página.
              </p>
            )}

            {confirmClear && (
              <div role="alertdialog" aria-label="Confirmar vaciado de favoritos" aria-modal="false"
                className="m-3 p-4 rounded-xl border border-red-400/40 bg-red-950/30 space-y-3">
                <p className="text-sm text-zinc-100">
                  ¿Vaciar {favorites.length} favoritos? Podrás deshacerlo mientras mantengas abierto este panel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button type="button" aria-label="Confirmar vaciado de favoritos" onClick={clearFavorites} className="min-h-11 rounded-xl bg-red-600 hover:bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                    Sí, vaciar
                  </button>
                  <button type="button" onClick={() => setConfirmClear(false)} className="gdn-chip min-h-11 rounded-xl border px-4 py-2 text-sm">
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {recentlyCleared !== null && (
              <div role="status" aria-live="polite" className="m-3 px-4 py-3 rounded-xl border border-violet-400/30 bg-violet-500/10 flex items-center justify-between gap-3">
                <span className="text-sm text-zinc-200">Se vació la lista.</span>
                <button type="button" aria-label="Deshacer vaciado de favoritos" onClick={undoClear} className="gdn-chip border rounded-xl min-h-11 px-4 py-2 text-sm font-semibold">
                  Deshacer vaciado
                </button>
              </div>
            )}

            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {favorites.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <Bookmark className="w-12 h-12 text-zinc-600 mx-auto" />
                  <p className="text-zinc-400 text-sm font-medium">No tienes nombres guardados.</p>
                  <p className="text-xs text-zinc-500">Guarda nombres desde las herramientas para consultarlos aquí.</p>
                </div>
              ) : favorites.map(name => (
                <div key={name} className="gdn-surface-raised border rounded-xl p-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-zinc-100 font-bold tracking-wide break-all">{name}</span>
                  <div className="flex items-center gap-1 shrink-0">
                    <button type="button" onClick={() => copyOne(name)} aria-label={`Copiar ${name}`} className="p-2.5 rounded-lg text-zinc-400 hover:text-violet-300 hover:bg-white/10">
                      {copiedFavorite === name ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button type="button" onClick={() => persist(favorites.filter(item => item !== name))} aria-label={`Eliminar ${name}`} className="p-2.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
