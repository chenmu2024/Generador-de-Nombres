'use client';

import { useEffect, useState } from 'react';
import { freeFireFrames, freeFireSymbolGroups, freeFireSymbols } from '../../data/freeFireSymbols';
import { copyText } from '../../utils/clipboard';
import { nicknameUnicodeMetrics } from '../../utils/text';
import { Link } from '../Link';

export default function FreeFireSymbolsTool() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('todos');
  const [name, setName] = useState('Luna');
  const [prefix, setPrefix] = useState('꧁');
  const [suffix, setSuffix] = useState('꧂');
  const [position, setPosition] = useState<'antes' | 'despues'>('antes');
  const [feedback, setFeedback] = useState('');
  const [composerOpen, setComposerOpen] = useState(false);
  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(''), 3500);
    return () => clearTimeout(timer);
  }, [feedback]);
  const normalized = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const filtered = freeFireSymbols.filter(symbol => {
    const text = [symbol.value, symbol.label, symbol.categoryLabel, ...Array.from(symbol.value).map(char => 'U+' + char.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0'))].join(' ');
    return (category === 'todos' || symbol.category === category) &&
      text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(normalized);
  });
  const result = name.trim() ? prefix + name.trim() + suffix : '';
  const metrics = nicknameUnicodeMetrics(result);

  async function copy(value: string) {
    if (!value) return;
    setFeedback(await copyText(value) ? 'Copiado: ' + value : 'No se pudo copiar. Selecciona el resultado o usa la copia manual.');
  }

  return (
    <section aria-label="Biblioteca de símbolos para Free Fire" className="gdn-tool-shell space-y-6">
      <details id="combinar-simbolos" open={composerOpen} onToggle={event => setComposerOpen(event.currentTarget.open)}
        className="gdn-surface border rounded-2xl p-4 sm:p-6 scroll-mt-24">
        <summary className="cursor-pointer font-semibold text-violet-200 py-2">Combinar símbolos con mi apodo</summary>
        <div className="space-y-4 pt-4">
        <h2 className="text-xl font-bold font-heading">Prueba los símbolos con tu apodo</h2>
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-zinc-200">Tu apodo</span>
          <input className="gdn-tool-input w-full rounded-xl border p-3" value={name} maxLength={80}
            onChange={event => setName(event.target.value)} placeholder="Escribe tu apodo" />
        </label>
        <fieldset className="flex flex-wrap items-center gap-4">
          <legend className="text-sm font-semibold mb-2">Añadir símbolos sueltos</legend>
          <label className="flex items-center gap-2 min-h-11"><input type="radio" name="symbol-position" checked={position === 'antes'} onChange={() => setPosition('antes')} /> Antes del apodo</label>
          <label className="flex items-center gap-2 min-h-11"><input type="radio" name="symbol-position" checked={position === 'despues'} onChange={() => setPosition('despues')} /> Después del apodo</label>
        </fieldset>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Marcos completos</h3>
          <div className="flex flex-wrap gap-2">
            {freeFireFrames.map(([left, right]) => (
              <button key={left} type="button" aria-label={'Usar marco ' + left + right}
                aria-pressed={prefix === left && suffix === right}
                className="gdn-chip border rounded-xl px-4 py-3 font-mono"
                onClick={() => { setPrefix(left); setSuffix(right); }}>{left} {right}</button>
            ))}
            <button type="button" className="gdn-chip border rounded-xl px-3 py-3" onClick={() => { setPrefix(''); setSuffix(''); }}>Quitar adornos</button>
          </div>
        </div>
        <label className="block space-y-2">
          <span className="text-sm font-semibold">Resultado para copiar</span>
          <input readOnly aria-describedby="symbol-counts" value={result} className="gdn-tool-input w-full rounded-xl border p-3 text-lg font-mono" onFocus={event => event.currentTarget.select()} />
        </label>
        <p id="symbol-counts" className="text-xs text-zinc-400">
          {metrics.visibleGraphemes} caracteres visibles · {metrics.codePoints} puntos de código · {metrics.utf16Units} unidades UTF-16.
          Son medidas del texto; no confirman el límite ni la aceptación del juego.
        </p>
        {!result && <p className="text-sm text-zinc-300">Escribe un apodo para copiar o continuar.</p>}
        <div className="flex flex-wrap gap-3">
          <button type="button" disabled={!result} className="gdn-primary-button rounded-xl px-4 py-3 disabled:opacity-50" onClick={() => void copy(result)}>Copiar apodo completo</button>
          {result && <Link to={'/generador-free-fire?nick=' + encodeURIComponent(result)} className="gdn-chip border rounded-xl px-4 py-3">Probar más letras</Link>}
        </div>
        </div>
      </details>
      <p role="status" aria-live="polite" className={feedback ? 'gdn-surface fixed bottom-6 left-4 right-4 sm:left-auto sm:max-w-md z-50 border rounded-xl p-4 text-sm text-zinc-100 break-words pointer-events-none' : 'sr-only'}>{feedback}</p>

      <div className="gdn-surface border rounded-2xl p-4 sm:p-6 space-y-4">
        <h2 className="text-xl font-bold font-heading">Buscar y copiar símbolos</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between">
          <label className="block flex-1 space-y-2">
            <span className="text-sm font-semibold">Buscar símbolo</span>
            <input type="search" value={query} onChange={event => setQuery(event.target.value)}
              placeholder="Estrella, corazón, ꧁ o U+2605" className="gdn-tool-input w-full rounded-xl border p-3" />
          </label>
          <button type="button" className="gdn-chip border rounded-xl px-4 py-3" onClick={() => { setQuery(''); setCategory('todos'); }}>Ver todos</button>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          {[{ id: 'todos', label: 'Todos' }, ...freeFireSymbolGroups].map(group => (
            <button key={group.id} type="button" aria-pressed={category === group.id}
              className={'gdn-chip border rounded-xl px-3 py-2 ' + (category === group.id ? 'border-violet-400 text-violet-200' : '')}
              onClick={() => setCategory(group.id)}>{group.label}</button>
          ))}
        </div>
        <p role="status" className="text-sm text-zinc-400">{filtered.length} símbolos encontrados</p>
        {filtered.length === 0 && <p className="text-zinc-200">No hay coincidencias. Prueba otra palabra o pulsa «Ver todos».</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map(symbol => (
            <article key={symbol.value} className="gdn-tool-result border rounded-xl p-3 space-y-3 min-w-0">
              <div className="text-3xl text-center font-mono" aria-hidden="true">{symbol.value}</div>
              <h3 className="text-sm font-semibold break-words">{symbol.label}</h3>
              <p className="text-xs text-zinc-400 break-words">{Array.from(symbol.value).map(char => 'U+' + char.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')).join(' ')}</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" aria-label={'Copiar ' + symbol.label} className="gdn-chip border rounded-lg px-2 py-2 text-sm" onClick={() => void copy(symbol.value)}>Copiar</button>
                <button type="button" aria-label={'Añadir ' + symbol.label} className="gdn-chip border rounded-lg px-2 py-2 text-sm"
                  onClick={() => {
                    const replacesFrame = freeFireFrames.some(([left, right]) => prefix === left && suffix === right);
                    if (position === 'antes') { setPrefix(symbol.value); if (replacesFrame) setSuffix(''); }
                    else { setSuffix(symbol.value); if (replacesFrame) setPrefix(''); }
                    setFeedback('Símbolo añadido al apodo.');
                    setComposerOpen(true);
                    requestAnimationFrame(() => document.getElementById('combinar-simbolos')?.scrollIntoView({ block: 'start' }));
                  }}>Añadir</button>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-zinc-400">«Añadir» sustituye el adorno del lado elegido. Si reemplazas un marco, se retira su otro extremo. Elige un marco completo para mantener dos extremos coordinados.</p>
        <p className="text-sm text-zinc-400">¿Buscas un separador en blanco? <Link to="/espacios-invisible-ff" className="text-violet-300 underline">Abrir espacio invisible para Free Fire</Link>.</p>
      </div>
    </section>
  );
}
