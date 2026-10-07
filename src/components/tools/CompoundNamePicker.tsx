'use client';

import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Check, Copy, Search } from 'lucide-react';
import { readFavorites, writeStorage } from '../../utils/browserStorage';
import { copyText } from '../../utils/clipboard';
import { normalizeSearch, visibleLength } from '../../utils/text';

export interface CompoundSuggestion {
  label: string;
  val: string;
  desc: string;
}

export type CompoundLengthFilter = 'all' | 'short' | 'long';

export function selectCompoundIdeas(
  suggestions: readonly CompoundSuggestion[],
  query: string,
  length: CompoundLengthFilter,
): CompoundSuggestion[] {
  const needle = normalizeSearch(query);
  return suggestions.filter(item => {
    if (needle && !normalizeSearch(item.val).includes(needle)) return false;
    const first = item.val.split(' ')[0];
    const count = visibleLength(first);
    if (length === 'short' && count > 4) return false;
    if (length === 'long' && count < 5) return false;
    return true;
  });
}

export default function CompoundNamePicker({
  suggestions,
  onCopy,
  onUse,
}: {
  suggestions: readonly CompoundSuggestion[];
  onCopy: (value: string) => void | Promise<void>;
  onUse: (value: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [length, setLength] = useState<CompoundLengthFilter>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

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

  const results = useMemo(() => selectCompoundIdeas(suggestions, query, length), [suggestions, query, length]);

  const toggleFavorite = (name: string) => {
    const old = readFavorites();
    const next = old.includes(name) ? old.filter(item => item !== name) : [name, ...old];
    setFavorites(next);
    const saved = writeStorage('gdn_favorites', JSON.stringify(next));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
    setFeedback(saved ? 'Favoritos actualizados.' : 'Favoritos disponibles solo durante esta sesión.');
  };

  const copyAll = async () => {
    if (!results.length) return;
    if (await copyText(results.map(item => item.val).join('\n'))) {
      setFeedback(`${results.length} combinaciones copiadas.`);
    }
  };

  return (
    <div className="space-y-3">
      <div className="gdn-surface-raised border border-white/10 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,180px)] gap-3">
        <label className="text-xs text-zinc-300">
          Buscar combinación
          <div className="relative mt-1">
            <Search aria-hidden="true" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input type="search" aria-label="Buscar combinaciones de nombres"
              placeholder="Buscar en los resultados..."
              maxLength={80}
              value={query}
              onChange={event => setQuery(event.target.value)}
              className="gdn-tool-input w-full min-h-11 rounded-xl bg-zinc-900 text-white border border-white/10 pl-9 pr-3" />
          </div>
        </label>
        <label className="text-xs text-zinc-300">
          Longitud del primer nombre
          <select aria-label="Longitud del primer nombre"
            value={length} onChange={event => setLength(event.target.value as CompoundLengthFilter)}
            className="gdn-tool-input w-full min-h-11 mt-1 p-2 rounded-xl bg-zinc-900 text-white border border-white/10">
            <option value="all">Todas</option>
            <option value="short">Hasta 4 letras</option>
            <option value="long">5 letras o más</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span role="status" aria-live="polite" className="text-xs text-zinc-300">{results.length} combinaciones disponibles</span>
        <button type="button" onClick={() => void copyAll()} disabled={results.length === 0}
          className="gdn-chip min-h-11 px-3 py-2 border border-white/10 rounded-xl text-xs flex items-center gap-1.5 disabled:opacity-50">
          <Copy className="w-4 h-4" aria-hidden="true" /> Copiar resultados
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {results.map(item => {
          const saved = favorites.includes(item.val);
          return (
            <article key={item.val} className="min-w-0 gdn-surface border border-white/10 rounded-xl p-3 flex flex-col justify-between gap-3">
              <div>
                <h4 className="text-sm text-zinc-100 font-semibold break-words">{item.label}</h4>
                <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <button type="button" onClick={() => onUse(item.val)}
                  className="min-h-11 rounded-lg bg-zinc-800 text-zinc-100 text-xs hover:bg-white/10"
                  aria-label={`Editar combinación ${item.val}`}>Editar</button>
                <button type="button" onClick={() => void onCopy(item.val)}
                  className="min-h-11 rounded-lg bg-zinc-800 text-zinc-100 text-xs flex justify-center items-center gap-1 hover:bg-white/10"
                  aria-label={`Copiar ${item.val}`}><Copy className="w-3.5 h-3.5" aria-hidden="true" /> Copiar</button>
                <button type="button" onClick={() => toggleFavorite(item.val)}
                  aria-pressed={saved}
                  aria-label={`${saved ? 'Quitar de favoritos' : 'Guardar favorito'}: ${item.val}`}
                  className="min-h-11 rounded-lg bg-zinc-800 flex justify-center items-center hover:bg-white/10">
                  {saved ? <Check className="w-4 h-4 text-emerald-300" aria-hidden="true" /> : <Bookmark className="w-4 h-4 text-zinc-300" aria-hidden="true" />}
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {results.length === 0 && <p role="status" className="text-xs text-amber-200">Sin coincidencias. Borra la búsqueda o ajusta la longitud.</p>}
      {feedback && <p role="status" className="text-xs text-emerald-300">{feedback}</p>}
      <p className="text-xs text-zinc-400">Propuestas editoriales. No son rankings de popularidad y no indican significados sin una fuente verificada.</p>
    </div>
  );
}
