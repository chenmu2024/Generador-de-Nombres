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

export function filterNicknames(names: string[], vibe: string): string[] {
  return names.filter(name => {
    const lower = name.toLowerCase();
    if (vibe === 'short') return visibleLength(name) <= 12;
    if (vibe === 'epico') return /꧁|꧂|⚔|👑|⚡|🔥/u.test(name) || lower.includes('pro') || lower.includes('king');
    if (vibe === 'aesthetic') return /[✿♡✧★✦☆ë]|𝓔/u.test(name);
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
