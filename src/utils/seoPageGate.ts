import { keywordMaster, type KeywordMasterRecord } from '../data/keywordMaster';
import { MIN_INDEXABLE_PAGE_SCORE } from './pageQualityScore';

export type PageGateDecision = 'CREATE' | 'MERGE' | 'REJECT' | 'REVIEW';

export interface PageCandidate {
  keyword: string;
  proposedUrl?: string;
  searchVolume?: number | null;
  keywordDifficulty?: number | null;
  cpc?: number | null;
  searchIntentVerified?: boolean;
  serpChecked?: boolean;
  serpOverlapWithExisting?: number | null; // 0-1
  existingTargetUrl?: string | null;
  hasUniqueToolValue?: boolean;
  hasUniqueDataValue?: boolean;
  proposedQualityScore?: number | null; // 0-100
}

export interface PageGateResult {
  decision: PageGateDecision;
  reasons: string[];
  recommendedTargetUrl?: string;
}

/**
 * Conservative gate for NEW routes only.
 *
 * It intentionally never edits seoData and never creates a route. A human can
 * promote a candidate to a real page only after the missing checks are done.
 */
export function evaluatePageCandidate(candidate: PageCandidate): PageGateResult {
  const reasons: string[] = [];
  const normalizedKeyword = candidate.keyword.trim().toLocaleLowerCase('es');

  const exactKeywordOwner = keywordMaster.find((record) =>
    record.allKeywords.some(
      (keyword) => keyword.toLocaleLowerCase('es') === normalizedKeyword,
    ),
  );

  if (exactKeywordOwner) {
    return {
      decision: 'MERGE',
      reasons: ['El keyword ya está asignado a una página VERIFIED/LOCKED.'],
      recommendedTargetUrl: exactKeywordOwner.targetUrl,
    };
  }

  if (!candidate.serpChecked) {
    reasons.push('Falta validar el SERP real.');
  }

  if (!candidate.searchIntentVerified) {
    reasons.push('Falta confirmar que la intención de búsqueda sea independiente.');
  }

  if (
    candidate.serpOverlapWithExisting != null &&
    candidate.serpOverlapWithExisting >= 0.6
  ) {
    reasons.push('El SERP se solapa >=60% con una página existente.');
    return {
      decision: 'MERGE',
      reasons,
      recommendedTargetUrl: candidate.existingTargetUrl ?? undefined,
    };
  }

  if (!candidate.hasUniqueToolValue && !candidate.hasUniqueDataValue) {
    reasons.push('No existe todavía valor diferencial de herramienta o datos.');
  }

  if (candidate.proposedQualityScore == null) {
    reasons.push(
      `Falta la puntuación de calidad de página (mínimo ${MIN_INDEXABLE_PAGE_SCORE}/100).`,
    );
  } else if (candidate.proposedQualityScore < MIN_INDEXABLE_PAGE_SCORE) {
    reasons.push(
      `La página obtiene ${candidate.proposedQualityScore}/100; necesita al menos ${MIN_INDEXABLE_PAGE_SCORE}/100 antes de indexarse.`,
    );
  }

  if (reasons.length > 0) {
    return {
      decision: 'REVIEW',
      reasons,
      recommendedTargetUrl: candidate.existingTargetUrl ?? undefined,
    };
  }

  return {
    decision: 'CREATE',
    reasons: [
      'SERP validado.',
      'Intención independiente.',
      'Sin solapamiento grave detectado.',
      'Existe valor diferencial de herramienta o datos.',
      `Calidad de página >= ${MIN_INDEXABLE_PAGE_SCORE}/100.`,
    ],
  };
}

export function findKeywordOwner(keyword: string): KeywordMasterRecord | undefined {
  const normalized = keyword.trim().toLocaleLowerCase('es');

  return keywordMaster.find((record) =>
    record.allKeywords.some(
      (item) => item.toLocaleLowerCase('es') === normalized,
    ),
  );
}
