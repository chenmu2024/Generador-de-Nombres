const segmenter = new Intl.Segmenter('es', { granularity: 'grapheme' });

export function graphemes(text: string): string[] {
  return Array.from(segmenter.segment(text), item => item.segment);
}

export function visibleLength(text: string): number {
  return graphemes(text).length;
}

export function trimName(text: string, limit = 12): string {
  return graphemes(text).slice(0, Math.max(0, limit)).join('');
}

export interface NicknameUnicodeMetrics {
  visibleGraphemes: number;
  codePoints: number;
  utf16Units: number;
  hasComplexUnicode: boolean;
}

/**
 * Different products may count characters as grapheme clusters, Unicode
 * code points, UTF-16 code units or proprietary filtered character sets.
 * None of these counters can certify Free Fire/Roblox acceptance.
 */
export function nicknameUnicodeMetrics(name: string): NicknameUnicodeMetrics {
  const visibleGraphemes = visibleLength(name);
  const codePoints = Array.from(name).length;
  const utf16Units = name.length;
  return {
    visibleGraphemes,
    codePoints,
    utf16Units,
    hasComplexUnicode: visibleGraphemes !== codePoints ||
      codePoints !== utf16Units ||
      /[^\x00-\x7F]/u.test(name),
  };
}

export type VisualStyle = { label: string; tone: string };

/** Visual description, not an official in-game rank or rarity claim. */
export function describeNicknameStyle(name: string): VisualStyle {
  if (/[꧁꧂༺༻【】『』]|[☠👑⚡🔥✿♡★✦✧]/u.test(name)) {
    return { label: 'CON ADORNOS', tone: 'bg-amber-500/10 text-amber-300 border-amber-500/30' };
  }
  if (/[^\p{L}\p{N}\p{M}\s]/u.test(name)) {
    return { label: 'CON SÍMBOLOS', tone: 'bg-violet-500/10 text-violet-300 border-violet-500/30' };
  }
  if (name.normalize('NFKC') !== name || /[\u{1D400}-\u{1D7FF}]/u.test(name)) {
    return { label: 'LETRAS DECORATIVAS', tone: 'bg-violet-500/10 text-violet-300 border-violet-500/30' };
  }
  return { label: 'TEXTO SIMPLE', tone: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' };
}

export function filterNicknames(names: string[], vibe: string): string[] {
  return names.filter(name => {
    const lower = name.toLowerCase();
    if (vibe === 'short') return visibleLength(name) <= 12;
    if (vibe === 'epico') return /꧁|꧂|⚔|👑|⚡|🔥/u.test(name) || lower.includes('pro') || lower.includes('king');
    if (vibe === 'aesthetic') return /[✿♡✧★✦☆ë]|[\u{1D400}-\u{1D7FF}]/u.test(name);
    if (vibe === 'toxic') return /☠|☣|🖤|😈|✞/u.test(name) || lower.includes('killer') || lower.includes('shadow');
    return true;
  });
}

export function isInstagramUsername(name: string): boolean {
  return /^[a-zA-Z0-9._]{1,30}$/.test(name) && !name.startsWith('.') && !name.endsWith('.') && !name.includes('..');
}

export function instagramSuggestions(name: string): string[] {
  const base = name;
  if (!isInstagramUsername(base)) return [];
  return [...new Set([`iam.${base}`, `${base}.official`, `real.${base}`, `the.${base}_`, `${base}.ph`, base])].filter(isInstagramUsername);
}
export function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es').trim();
}
