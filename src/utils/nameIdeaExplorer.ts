import { normalizeSearch, visibleLength } from './text';

export type NameLengthFilter = 'all' | 'short' | 'medium' | 'long';
export type NameSort = 'alphabetical' | 'length' | 'reverse';

export interface NameIdeaFilters {
  query: string;
  initial: string;
  length: NameLengthFilter;
  theme: string;
  sort: NameSort;
}

export interface NameIdeaTheme {
  label: string;
  names: readonly string[];
}

// Editorial topics describe inspiration, not etymology or verified use statistics.
const themedNames: Record<string, NameIdeaTheme[]> = {
  '/nombres-de-dioses': [
    { label: 'Cielo y luz', names: ['Zeus', 'Apolo', 'Helios', 'Selene', 'Eos'] },
    { label: 'Mar y naturaleza', names: ['Poseidón', 'Artemisa', 'Deméter', 'Pan', 'Perséfone'] },
    { label: 'Vida y comunidad', names: ['Hera', 'Hestia', 'Afrodita', 'Hermes', 'Dioniso', 'Eros'] },
    { label: 'Conflicto y misterio', names: ['Ares', 'Atenea', 'Hades', 'Hefesto', 'Hécate', 'Némesis', 'Nike', 'Tique'] },
  ],
  '/nombres-caballos': [
    { label: 'Cielo y clima', names: ['Lucero', 'Trueno', 'Estrella', 'Relámpago', 'Luna', 'Aurora', 'Cometa', 'Niebla', 'Viento', 'Centella', 'Rayo', 'Tormenta'] },
    { label: 'Pelaje y color', names: ['Azabache', 'Canela', 'Dorado', 'Sombra', 'Noche', 'Copito', 'Perla'] },
    { label: 'Naturaleza y carácter', names: ['Brisa', 'Roble', 'Zafiro', 'Ícaro', 'Valentía'] },
  ],
};

export function getNameIdeaThemes(path: string): NameIdeaTheme[] {
  return themedNames[path] || [];
}

export function getNameIdeaTheme(path: string, name: string): string | null {
  return getNameIdeaThemes(path).find(group => group.names.includes(name))?.label ?? null;
}

export function getNameIdeaInitials(names: readonly string[]): string[] {
  return [...new Set(names.map(name => name.charAt(0).toLocaleUpperCase('es')))].sort(
    (a, b) => a.localeCompare(b, 'es'),
  );
}

export function selectNameIdeas(
  path: string,
  names: readonly string[],
  filters: NameIdeaFilters,
): string[] {
  const query = normalizeSearch(filters.query);
  const selected = names.filter(name => {
    if (query && !normalizeSearch(name).includes(query)) return false;
    if (filters.initial !== 'all' && name.charAt(0).toLocaleUpperCase('es') !== filters.initial) return false;
    const length = visibleLength(name);
    if (filters.length === 'short' && length > 4) return false;
    if (filters.length === 'medium' && (length < 5 || length > 7)) return false;
    if (filters.length === 'long' && length < 8) return false;
    if (filters.theme !== 'all' && getNameIdeaTheme(path, name) !== filters.theme) return false;
    return true;
  });
  return selected.sort((a, b) => {
    if (filters.sort === 'length') return visibleLength(a) - visibleLength(b) || a.localeCompare(b, 'es');
    if (filters.sort === 'reverse') return b.localeCompare(a, 'es');
    return a.localeCompare(b, 'es');
  });
}

export const nameIdeaContexts: Record<string, { title: string; explanation: string; verification: string }> = {
  '/nombres-italianos': {
    title: 'Comparador de nombres italianos',
    explanation: 'Compara grafías italianas y su longitud antes de elegir una combinación con los apellidos.',
    verification: 'La presencia de un nombre en esta lista no demuestra su popularidad, origen exclusivo o significado.',
  },
  '/nombres-rusos': {
    title: 'Comparador de nombres rusos romanizados',
    explanation: 'Busca variantes escritas con alfabeto latino; la transliteración del cirílico puede cambiar entre sistemas.',
    verification: 'Para un uso formal, comprueba la escritura en cirílico y la transliteración elegida.',
  },
  '/nombres-griegos': {
    title: 'Comparador de nombres griegos',
    explanation: 'Explora nombres personales en transliteración latina. Los dioses y personajes míticos están en otra selección.',
    verification: 'La escritura griega original y la transliteración se deben confirmar de forma individual.',
  },
  '/nombres-ingles': {
    title: 'Comparador de nombres usados en inglés',
    explanation: 'Compara nombres frecuentes en contextos anglófonos, sin equiparar uso con origen exclusivamente inglés.',
    verification: 'No es un ranking de registros de nacimiento de un país concreto.',
  },
  '/nombres-turcos': {
    title: 'Comparador de nombres turcos',
    explanation: 'Compara nombres y conserva letras propias del turco, como ı, İ, ş, ç, ö y ü.',
    verification: 'Una voz sintetizada o una ortografía adaptada no confirma una pronunciación o significado exactos.',
  },
  '/nombres-chinos': {
    title: 'Explorador de nombres chinos romanizados',
    explanation: 'Revisa sílabas en alfabeto latino, sin asignar caracteres Hanzi ni tonos por conjetura.',
    verification: 'La misma romanización puede corresponder a varios Hanzi y significados; verifica la escritura original.',
  },
  '/nombres-de-dioses': {
    title: 'Explorador de nombres mitológicos',
    explanation: 'Filtra deidades por ámbitos narrativos editoriales como cielo, naturaleza o misterio.',
    verification: 'Las categorías son temáticas para facilitar la búsqueda, no traducciones etimológicas.',
  },
  '/nombres-caballos': {
    title: 'Explorador de nombres para caballos',
    explanation: 'Filtra por inspiración creativa: clima, pelaje o naturaleza; compara el sonido antes de elegir.',
    verification: 'Un nombre no determina el carácter, la salud o el rendimiento del caballo.',
  },
};
