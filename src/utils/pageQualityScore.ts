export interface PageQualityInput {
  keywordMatch: number;      // 0-20
  searchIntent: number;      // 0-20
  toolValue: number;         // 0-20
  uniqueData: number;        // 0-15
  internalLinks: number;     // 0-10
  uxMobile: number;          // 0-10
  performance: number;       // 0-5
}

export interface PageQualityResult {
  total: number;
  passed: boolean;
  minimumRequired: number;
  breakdown: PageQualityInput;
}

export const MIN_INDEXABLE_PAGE_SCORE = 80;

const limits: Record<keyof PageQualityInput, number> = {
  keywordMatch: 20,
  searchIntent: 20,
  toolValue: 20,
  uniqueData: 15,
  internalLinks: 10,
  uxMobile: 10,
  performance: 5,
};

function clamp(value: number, max: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(max, value));
}

export function calculatePageQualityScore(
  input: PageQualityInput,
): PageQualityResult {
  const normalized: PageQualityInput = {
    keywordMatch: clamp(input.keywordMatch, limits.keywordMatch),
    searchIntent: clamp(input.searchIntent, limits.searchIntent),
    toolValue: clamp(input.toolValue, limits.toolValue),
    uniqueData: clamp(input.uniqueData, limits.uniqueData),
    internalLinks: clamp(input.internalLinks, limits.internalLinks),
    uxMobile: clamp(input.uxMobile, limits.uxMobile),
    performance: clamp(input.performance, limits.performance),
  };

  const total = Object.values(normalized).reduce((sum, value) => sum + value, 0);

  return {
    total,
    passed: total >= MIN_INDEXABLE_PAGE_SCORE,
    minimumRequired: MIN_INDEXABLE_PAGE_SCORE,
    breakdown: normalized,
  };
}
