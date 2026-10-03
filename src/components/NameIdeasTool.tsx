'use client';

import { useState } from 'react';
import { nameIdeas } from '../data/nameIdeas';

export default function NameIdeasTool({ path, onCopy }: { path: string; onCopy: (name: string) => void }) {
  const [search, setSearch] = useState('');
  const data = nameIdeas[path];
  if (!data) return null;
  const names = data.names.filter(name => name.toLocaleLowerCase('es').includes(search.trim().toLocaleLowerCase('es')));
  return <section className="gdn-surface border rounded-2xl p-6 space-y-4" aria-label="Ideas de nombres">
    <label className="block text-sm text-zinc-300">Filtrar nombres
      <input className="gdn-input border rounded-xl p-3 w-full mt-2" value={search} onChange={event => setSearch(event.target.value)} maxLength={120} />
    </label>
    <p className="text-sm text-zinc-400">Selecciona una idea para copiarla. Esta selección no es un ranking de popularidad.</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{names.map(name => <button key={name} className="gdn-chip border rounded-xl p-4" onClick={() => onCopy(name)} aria-label={`Copiar ${name}`}>{name}</button>)}</div>
    {!names.length && <p role="status">No hay coincidencias. Prueba otra búsqueda.</p>}
    {data.source && <p className="text-xs text-zinc-400">Referencias de uso: <a className="text-violet-300 underline" href={`https://www.behindthename.com/names/usage/${data.source}`} target="_blank" rel="noopener noreferrer">Behind the Name</a>. Los nombres pueden usarse en varias culturas; en chino, el significado depende de los caracteres elegidos.</p>}
  </section>;
}
