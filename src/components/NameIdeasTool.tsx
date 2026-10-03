'use client';

import { normalizeSearch, visibleLength } from '../utils/text';
import { useState } from 'react';
import { nameIdeas } from '../data/nameIdeas';
import { speakName } from '../utils/speech';
import { Volume2 } from 'lucide-react';

export default function NameIdeasTool({ path, onCopy }: { path: string; onCopy: (name: string) => void }) {
  const [search, setSearch] = useState('');
  const [lengthFilter, setLengthFilter] = useState('all');
  const data = nameIdeas[path];
  if (!data) return null;
  const language = ({ italian: 'it-IT', russian: 'ru-RU', greek: 'el-GR', english: 'en-GB', turkish: 'tr-TR', chinese: 'zh-CN' } as Record<string, string>)[data.source || ''] || 'es-ES';
  const names = data.names.filter(name => normalizeSearch(name).includes(normalizeSearch(search)) && (lengthFilter === 'all' || visibleLength(name) <= 4));
  return <section className="gdn-surface border rounded-2xl p-6 space-y-4" aria-label="Ideas de nombres">
    <label className="block text-sm text-zinc-300">Filtrar nombres
      <input className="gdn-input border rounded-xl p-3 w-full mt-2" value={search} onChange={event => setSearch(event.target.value)} maxLength={120} />
    </label>
    <label className="block text-sm text-zinc-300">Longitud del nombre
      <select className="gdn-input border rounded-xl p-3 w-full mt-2" value={lengthFilter} onChange={event => setLengthFilter(event.target.value)}><option value="all">Todas las longitudes</option><option value="short">Cortos (hasta 4 letras)</option></select>
    </label>
    <p role="status" className="text-xs text-zinc-400">{names.length} de {data.names.length} nombres</p>
    <p className="text-sm text-zinc-400">Selecciona una idea para copiarla. Esta selección no es un ranking de popularidad.</p>
    <p className="text-xs text-zinc-400">El altavoz solicita una lectura sintetizada; depende de las voces disponibles en tu dispositivo y no confirma la pronunciación lingüística.</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{names.map(name => <div key={name} className="gdn-chip border rounded-xl flex items-center min-w-0"><button className="p-3 flex-1 min-w-0 break-words" onClick={() => onCopy(name)} aria-label={`Copiar ${name}`}>{name}</button><button className="p-3 shrink-0 hover:text-violet-300" onClick={() => speakName(name, language)} aria-label={`Escuchar ${name}`}><Volume2 className="w-4 h-4" aria-hidden="true" /></button></div>)}</div>
    {!names.length && <p role="status">No hay coincidencias. Prueba otra búsqueda.</p>}
    {data.source && <p className="text-xs text-zinc-400">Referencias de uso: <a className="text-violet-300 underline" href={`https://www.behindthename.com/names/usage/${data.source}`} target="_blank" rel="noopener noreferrer">Behind the Name</a>. Los nombres pueden usarse en varias culturas; en chino, el significado depende de los caracteres elegidos.</p>}
  </section>;
}
