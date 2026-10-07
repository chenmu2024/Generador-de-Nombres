import { normalizeSearch, visibleLength } from './text';
import type { PetNameIdea } from '../data/petNameLists';

export type PetLength = 'all' | 'short' | 'medium' | 'long';
export type PetSort = 'alpha' | 'length';

export function selectPetNameIdeas(
  items: readonly PetNameIdea[],
  selectedCategory: string,
  allCategory: string,
  query: string,
  length: PetLength,
  sort: PetSort,
): PetNameIdea[] {
  const needle = normalizeSearch(query);
  return items.filter(item => {
    if (selectedCategory !== allCategory && item.category !== selectedCategory) return false;
    if (needle && !normalizeSearch(item.name).includes(needle)) return false;
    const size = visibleLength(item.name);
    if (length === 'short' && size > 4) return false;
    if (length === 'medium' && (size < 5 || size > 7)) return false;
    if (length === 'long' && size < 8) return false;
    return true;
  }).sort((a, b) => sort === 'length'
    ? visibleLength(a.name) - visibleLength(b.name) || a.name.localeCompare(b.name, 'es')
    : a.name.localeCompare(b.name, 'es'));
}
