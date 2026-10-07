import { isInstagramUsername } from './text';

export interface InstagramPersonalizedIdea {
  username: string;
  group: 'Base personal' | 'Minimalista' | 'Creador' | 'Diario';
}

/**
 * Pure, browser-independent username ideas. Converts user's input into an
 * ASCII base so suggested @handles match the local format validator.
 * It neither queries Instagram nor checks availability/ownership.
 */
export function createInstagramPersonalizedIdeas(name: string): InstagramPersonalizedIdea[] {
  const cleaned = name
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  if (!cleaned) return [];
  const parts = cleaned.split(/\s+/).slice(0, 4);
  const first = parts[0];
  const last = parts.length > 1 ? parts[parts.length - 1] : '';
  const joined = parts.join('');
  const dotted = parts.join('.');
  const underscored = parts.join('_');
  const suggestions: InstagramPersonalizedIdea[] = [
    { username: dotted, group: 'Base personal' },
    { username: underscored, group: 'Base personal' },
    { username: joined, group: 'Minimalista' },
    { username: `soy.${first}`, group: 'Minimalista' },
    { username: `hola.${first}`, group: 'Minimalista' },
    { username: `by.${first}`, group: 'Creador' },
    { username: `${first}.crea`, group: 'Creador' },
    { username: `${first}.studio`, group: 'Creador' },
    { username: `${first}.diario`, group: 'Diario' },
    { username: `${first}.ideas`, group: 'Diario' },
  ];
  if (last) {
    suggestions.push(
      { username: `${first}.${last}`, group: 'Base personal' },
      { username: `${first}_${last}`, group: 'Base personal' },
      { username: `${first}.${last[0]}`, group: 'Minimalista' },
      { username: `${first[0]}.${last}`, group: 'Minimalista' },
    );
  }
  const used = new Set<string>();
  return suggestions.filter(item => {
    if (!isInstagramUsername(item.username) || used.has(item.username)) return false;
    used.add(item.username);
    return true;
  });
}
