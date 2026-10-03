// Storage can be disabled or full. Keep the current session usable in either case.
const sessionValues = new Map<string, string>();

export function readStorage(key: string): string | null {
  if (sessionValues.has(key)) return sessionValues.get(key)!;
  try { return localStorage.getItem(key); }
  catch { return sessionValues.get(key) ?? null; }
}

export function writeStorage(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); sessionValues.delete(key); return true; }
  catch { sessionValues.set(key, value); return false; }
}

export function readFavorites(): string[] {
  try {
    const parsed: unknown = JSON.parse(readStorage('gdn_favorites') || '[]');
    return Array.isArray(parsed) ? [...new Set(parsed.filter((item): item is string => typeof item === 'string'))] : [];
  } catch { return []; }
}
