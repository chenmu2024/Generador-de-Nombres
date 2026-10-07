'use client';

import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Check, Copy, Search, Volume2 } from 'lucide-react';
import { readFavorites, writeStorage } from '../../utils/browserStorage';
import { copyText } from '../../utils/clipboard';
import { petNameLists, type PetNameKind } from '../../data/petNameLists';
import { selectPetNameIdeas, type PetLength, type PetSort } from '../../utils/petNameFilter';

type Props = {
  kind: PetNameKind;
  category: string;
  allCategory: string;
  onCopy: (name: string) => void | Promise<void>;
  onUse: (name: string) => void;
  onSpeak: (name: string) => void;
};

const themeStyles: Record<PetNameKind, { accent: string; border: string; button: string }> = {
  cats: { accent: 'text-amber-300', border: 'hover:border-amber-500/40', button: 'hover:bg-amber-500/20' },
  dogs: { accent: 'text-pink-300', border: 'hover:border-pink-500/40', button: 'hover:bg-pink-500/20' },
  blackCats: { accent: 'text-purple-300', border: 'hover:border-purple-500/40', button: 'hover:bg-purple-500/20' },
  maleCats: { accent: 'text-blue-300', border: 'hover:border-blue-500/40', button: 'hover:bg-blue-500/20' },
};

export default function PetNameLibrary({ kind, category, allCategory, onCopy, onUse, onSpeak }: Props) {
  const [query, setQuery] = useState('');
  const [length, setLength] = useState<PetLength>('all');
  const [sort, setSort] = useState<PetSort>('alpha');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');
  const theme = themeStyles[kind];
  const allNames = petNameLists[kind];

  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    sync();
    window.addEventListener('gdn_favorites_updated', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('gdn_favorites_updated', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const names = useMemo(
    () => selectPetNameIdeas(allNames, category, allCategory, query, length, sort),
    [allNames, category, allCategory, query, length, sort],
  );

  const toggleFavorite = (name: string) => {
    const old = readFavorites();
    const next = old.includes(name) ? old.filter(item => item !== name) : [name, ...old];
    setFavorites(next);
    const saved = writeStorage('gdn_favorites', JSON.stringify(next));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
    setFeedback(saved ? 'Favoritos actualizados.' : 'Favorito guardado solo durante esta sesión.');
  };

  const copyVisible = async () => {
    if (!names.length) return;
    if (await copyText(names.map(item => item.name).join('\n'))) {
      setFeedback(`${names.length} nombres copiados.`);
    }
  };

  return (
    <div className="space-y-4">
      <div className="gdn-surface-raised border border-white/10 rounded-2xl p-3 sm:p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="text-sm text-zinc-300">
            Buscar nombre
            <div className="relative mt-1">
              <Search aria-hidden="true" className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                className="gdn-tool-input w-full min-h-11 pl-9 pr-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
                placeholder="Buscar nombre..."
                aria-label="Buscar nombres de mascotas"
                value={query}
                onChange={event => setQuery(event.target.value)}
                maxLength={80}
              />
            </div>
          </label>
          <label className="text-sm text-zinc-300">
            Longitud
            <select
              className="gdn-tool-input w-full min-h-11 mt-1 p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white"
              value={length}
              onChange={event => setLength(event.target.value as PetLength)}
              aria-label="Filtrar por longitud"
            >
              <option value="all">Todas</option>
              <option value="short">Hasta 4 letras</option>
              <option value="medium">5–7 letras</option>
              <option value="long">8 o más letras</option>
            </select>
          </label>
          <label className="text-sm text-zinc-300">
            Orden
            <select
              className="gdn-tool-input w-full min-h-11 mt-1 p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white"
              value={sort}
              onChange={event => setSort(event.target.value as PetSort)}
              aria-label="Ordenar nombres de mascotas"
            >
              <option value="alpha">A → Z</option>
              <option value="length">Del más corto</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" className="text-xs text-zinc-300">
            {names.length} resultados de {allNames.length} ideas editoriales
          </p>
          <button
            type="button"
            disabled={names.length === 0}
            onClick={() => void copyVisible()}
            className="gdn-chip min-h-11 px-3 py-2 rounded-xl border border-white/10 text-xs font-semibold flex items-center gap-2 disabled:opacity-50"
          ><Copy aria-hidden="true" className="w-4 h-4" /> Copiar resultados</button>
        </div>
        {feedback && <p role="status" className="text-xs text-emerald-300">{feedback}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {names.map(item => {
          const isSaved = favorites.includes(item.name);
          return (
            <article key={item.name} className={`min-w-0 gdn-surface border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3 ${theme.border}`}>
              <div className="min-w-0 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className={`font-bold text-lg break-words ${theme.accent}`}>{item.name}</h4>
                  <span className="text-[11px] text-zinc-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full">{item.symbol}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{item.note}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
                <button type="button" onClick={() => onUse(item.name)}
                  className={`min-h-11 rounded-xl bg-zinc-800 text-xs text-zinc-100 ${theme.button}`}
                  aria-label={`Usar ${item.name} en el creador`}>Usar</button>
                <button type="button" onClick={() => void onCopy(item.name)}
                  className={`min-h-11 rounded-xl bg-zinc-800 text-xs flex justify-center items-center gap-1 text-zinc-100 ${theme.button}`}
                  aria-label={`Copiar ${item.name}`}><Copy className="w-4 h-4" aria-hidden="true" /> Copiar</button>
                <button type="button" onClick={() => toggleFavorite(item.name)}
                  aria-label={`${isSaved ? 'Quitar de favoritos' : 'Guardar favorito'}: ${item.name}`}
                  aria-pressed={isSaved}
                  className={`min-h-11 rounded-xl bg-zinc-800 flex items-center justify-center ${theme.button}`}>
                  {isSaved ? <Check className="w-4 h-4 text-emerald-300" aria-hidden="true" /> : <Bookmark className="w-4 h-4 text-zinc-300" aria-hidden="true" />}
                </button>
              </div>
              <button type="button" onClick={() => onSpeak(item.name)}
                className="min-h-11 text-xs text-zinc-300 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                <Volume2 className="w-4 h-4" aria-hidden="true" /> Escuchar voz sintetizada
              </button>
            </article>
          );
        })}
      </div>
      {names.length === 0 && <p role="status" className="text-sm text-amber-200">No hay coincidencias. Cambia la categoría o borra los filtros de búsqueda.</p>}
      <p className="text-xs text-zinc-400">Selección editorial por estilo, no ranking ni significado verificado. El audio depende de la voz instalada en el dispositivo; no entrena a tu mascota.</p>
    </div>
  );
}
