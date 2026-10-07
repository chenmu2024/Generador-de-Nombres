'use client';

import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Check, ClipboardCopy, Download, Search, Shuffle, Volume2 } from 'lucide-react';
import { nameIdeas } from '../data/nameIdeas';
import { readFavorites, writeStorage } from '../utils/browserStorage';
import { copyText } from '../utils/clipboard';
import {
  getNameIdeaInitials,
  getNameIdeaTheme,
  getNameIdeaThemes,
  nameIdeaContexts,
  selectNameIdeas,
  type NameLengthFilter,
  type NameSort,
} from '../utils/nameIdeaExplorer';
import { speakName } from '../utils/speech';
import { visibleLength } from '../utils/text';

type Props = { path: string; onCopy: (name: string) => void | Promise<void> };

const voices: Record<string, string> = {
  italian: 'it-IT',
  russian: 'ru-RU',
  greek: 'el-GR',
  english: 'en-GB',
  turkish: 'tr-TR',
  chinese: 'zh-CN',
};

const fieldClass = 'gdn-input border rounded-xl p-3 w-full mt-2 text-sm';

export default function NameIdeasTool({ path, onCopy }: Props) {
  const [search, setSearch] = useState('');
  const [initial, setInitial] = useState('all');
  const [length, setLength] = useState<NameLengthFilter>('all');
  const [theme, setTheme] = useState('all');
  const [sort, setSort] = useState<NameSort>('alphabetical');
  const [selected, setSelected] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const data = nameIdeas[path];
  const context = nameIdeaContexts[path];

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

  const allNames = useMemo(() => data?.names ?? [], [data]);
  const themes = useMemo(() => getNameIdeaThemes(path), [path]);
  const initials = useMemo(() => getNameIdeaInitials(allNames), [allNames]);
  const names = useMemo(
    () => selectNameIdeas(path, allNames, { query: search, initial, length, theme, sort }),
    [path, allNames, search, initial, length, theme, sort],
  );
  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);

  if (!data || !context) return null;
  const language = voices[data.source || ''] || 'es-ES';

  const toggleSelected = (name: string) => {
    setSelected(previous => previous.includes(name)
      ? previous.filter(item => item !== name)
      : [...previous, name]);
  };

  const toggleFavorite = (name: string) => {
    const previous = readFavorites();
    const next = previous.includes(name) ? previous.filter(item => item !== name) : [name, ...previous];
    setFavorites(next);
    const persisted = writeStorage('gdn_favorites', JSON.stringify(next));
    window.dispatchEvent(new Event('gdn_favorites_updated'));
    setFeedback(persisted ? (previous.includes(name) ? 'Eliminado de favoritos.' : 'Guardado en favoritos.')
      : 'Favorito guardado solo durante esta sesión.');
  };

  const copyNames = async (items: readonly string[]) => {
    if (!items.length) return;
    if (await copyText(items.join('\n'))) {
      setFeedback(`${items.length} nombre${items.length === 1 ? '' : 's'} copiado${items.length === 1 ? '' : 's'}.`);
    }
  };

  const exportCsv = (items: readonly string[]) => {
    if (!items.length) return;
    const rows = [
      ['Nombre', 'Inicial', 'Letras', 'Tema editorial'],
      ...items.map(name => [
        name,
        name.charAt(0).toLocaleUpperCase('es'),
        String(visibleLength(name)),
        getNameIdeaTheme(path, name) ?? '',
      ]),
    ];
    const csv = rows.map(row => row.map(cell => `"${cell.replaceAll('"', '""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `ideas-${path.replace(/^\//, '')}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFeedback(`CSV preparado con ${items.length} nombres.`);
  };

  const randomize = () => {
    if (!names.length) return;
    const picked = names[Math.floor(Math.random() * names.length)];
    setHighlighted(picked);
    setFeedback(`Sugerencia para comparar: ${picked}.`);
  };

  const copySingle = (name: string) => {
    setHighlighted(name);
    void onCopy(name);
  };

  return (
    <section className="gdn-surface border rounded-2xl p-4 sm:p-6 space-y-5" aria-label="Ideas de nombres">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-heading">{context.title}</h2>
        <p className="text-sm text-zinc-300">{context.explanation}</p>
        <p className="text-xs text-zinc-400">{context.verification}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <label className="block text-sm text-zinc-300">
          Buscar por nombre
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-6 text-zinc-500" aria-hidden="true" />
            <input
              type="search"
              className={fieldClass + ' pl-10'}
              aria-label="Filtrar nombres"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Escribe parte del nombre"
              maxLength={120}
            />
          </div>
        </label>
        <label className="block text-sm text-zinc-300">
          Letra inicial
          <select className={fieldClass} value={initial} onChange={event => setInitial(event.target.value)}>
            <option value="all">Todas las iniciales</option>
            {initials.map(letter => <option key={letter} value={letter}>{letter}</option>)}
          </select>
        </label>
        <label className="block text-sm text-zinc-300">
          Longitud del nombre
          <select className={fieldClass} value={length} onChange={event => setLength(event.target.value as NameLengthFilter)}>
            <option value="all">Todas las longitudes</option>
            <option value="short">Cortos (hasta 4 letras)</option>
            <option value="medium">Medianos (5–7 letras)</option>
            <option value="long">Largos (8 o más letras)</option>
          </select>
        </label>
        <label className="block text-sm text-zinc-300">
          Ordenar
          <select className={fieldClass} value={sort} onChange={event => setSort(event.target.value as NameSort)}>
            <option value="alphabetical">A → Z</option>
            <option value="reverse">Z → A</option>
            <option value="length">Del más corto al más largo</option>
          </select>
        </label>
      </div>

      {themes.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-semibold text-zinc-200">Filtrar por temática creativa</div>
          <div className="flex flex-wrap gap-2" aria-label="Temas">
            {[{label: 'Todas', value: 'all'}, ...themes.map(item => ({label: item.label, value: item.label}))].map(item => (
              <button
                key={item.value}
                type="button"
                aria-pressed={theme === item.value}
                onClick={() => setTheme(item.value)}
                className={`gdn-chip px-3 py-2 rounded-xl text-sm border transition-colors ${theme === item.value ? 'border-violet-400 text-violet-200 bg-violet-500/20' : 'border-white/10 text-zinc-300 hover:text-white'}`}
              >{item.label}</button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p role="status" className="text-sm text-zinc-300">{names.length} de {allNames.length} nombres · {selected.length} seleccionados</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={randomize} disabled={!names.length} className="gdn-chip border rounded-xl px-3 py-2 text-xs flex items-center gap-1.5 disabled:opacity-50">
            <Shuffle className="w-4 h-4" aria-hidden="true" /> Idea aleatoria
          </button>
          <button type="button" onClick={() => setSelected(previous => [...new Set([...previous, ...names])])} disabled={!names.length} className="gdn-chip border rounded-xl px-3 py-2 text-xs disabled:opacity-50">
            Seleccionar visibles
          </button>
          <button type="button" onClick={() => setSelected([])} disabled={!selected.length} className="gdn-chip border rounded-xl px-3 py-2 text-xs disabled:opacity-50">
            Quitar selección
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10" role="region" tabIndex={0} aria-label="Tabla de nombres comparables">
        <table className="w-full text-sm min-w-[570px]">
          <thead className="bg-zinc-900/80 text-left text-zinc-300">
            <tr>
              <th scope="col" className="p-3 w-12">Elegir</th>
              <th scope="col" className="p-3">Nombre</th>
              <th scope="col" className="p-3">Letras</th>
              {themes.length > 0 && <th scope="col" className="p-3">Tema</th>}
              <th scope="col" className="p-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name => (
              <tr key={name} className={`border-t border-white/10 ${highlighted === name ? 'bg-violet-500/10' : 'hover:bg-white/5'}`}>
                <td className="p-3">
                  <input
                    type="checkbox"
                    className="accent-violet-500 w-4 h-4"
                    checked={selectedSet.has(name)}
                    onChange={() => toggleSelected(name)}
                    aria-label={`Seleccionar ${name}`}
                  />
                </td>
                <th scope="row" className="p-3 text-left text-zinc-100 font-semibold break-words">{name}</th>
                <td className="p-3 text-zinc-400">{visibleLength(name)}</td>
                {themes.length > 0 && <td className="p-3 text-zinc-300">{getNameIdeaTheme(path, name) ?? 'Otra inspiración'}</td>}
                <td className="p-2">
                  <div className="flex items-center justify-end gap-1">
                    <button type="button" onClick={() => copySingle(name)} className="p-2 rounded-lg hover:bg-white/10" aria-label={`Copiar ${name}`} title="Copiar nombre"><ClipboardCopy className="w-4 h-4" aria-hidden="true" /></button>
                    <button type="button" onClick={() => speakName(name, language)} className="p-2 rounded-lg hover:bg-white/10" aria-label={`Escuchar ${name}`} title="Lectura sintetizada"><Volume2 className="w-4 h-4" aria-hidden="true" /></button>
                    <button type="button" onClick={() => toggleFavorite(name)} aria-pressed={favoriteSet.has(name)} className="p-2 rounded-lg hover:bg-white/10" aria-label={`${favoriteSet.has(name) ? 'Quitar de favoritos' : 'Guardar favorito'}: ${name}`} title="Favoritos">
                      {favoriteSet.has(name) ? <Check className="w-4 h-4 text-emerald-300" aria-hidden="true" /> : <Bookmark className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!names.length && <p role="status" className="text-sm text-amber-200">No hay coincidencias. Prueba otra letra, longitud o temática.</p>}

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => void copyNames(selected)} disabled={!selected.length} className="gdn-primary-button px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 disabled:opacity-50">
          <ClipboardCopy className="w-4 h-4" aria-hidden="true" /> Copiar seleccionados ({selected.length})
        </button>
        <button type="button" onClick={() => void copyNames(names)} disabled={!names.length} className="gdn-chip border px-4 py-2.5 rounded-xl text-sm disabled:opacity-50">
          Copiar resultados ({names.length})
        </button>
        <button type="button" onClick={() => exportCsv(selected.length ? selected : names)} disabled={!(selected.length || names.length)} className="gdn-chip border px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 disabled:opacity-50">
          <Download className="w-4 h-4" aria-hidden="true" /> Exportar CSV
        </button>
      </div>

      {feedback && <p role="status" aria-live="polite" className="text-sm text-emerald-300">{feedback}</p>}
      <p className="text-xs text-zinc-400">La tabla es una selección editorial, no un ranking. Los favoritos se guardan en este navegador cuando el almacenamiento está disponible. La lectura sintetizada depende de la voz instalada y no verifica la pronunciación.</p>
      {data.source && <p className="text-xs text-zinc-400">Para investigar usos documentados, consulta <a className="text-violet-300 underline" href={`https://www.behindthename.com/names/usage/${data.source}`} target="_blank" rel="noopener noreferrer">Behind the Name</a>. Esta selección no certifica el origen individual ni la etimología.</p>}
    </section>
  );
}
