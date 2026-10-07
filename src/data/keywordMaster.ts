import { seoData } from './seoData';
import { getClusterIdForPath, type TopicClusterId } from './topicClusters';

export type KeywordStatus = 'VERIFIED' | 'TEST' | 'REJECT' | 'MERGE';
export type KeywordIntent = 'tool' | 'list' | 'directory' | 'mixed';

export interface KeywordMasterRecord {
  id: string;
  targetUrl: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  allKeywords: string[];
  language: 'es';
  cluster: TopicClusterId;
  status: KeywordStatus;
  lockedKeyword: boolean;
  indexable: boolean;
  intent: KeywordIntent;

  // Research / SERP fields. Keep null until verified with external data.
  searchVolume: number | null;
  keywordDifficulty: number | null;
  cpc: number | null;
  country: string | null;
  serpChecked: boolean;
  serpOverlap: number | null;
  competitors: string[];
  dateVerified: string | null;

  // Search Console / revenue fields. Filled by reporting workflows, not page code.
  gscImpressions: number | null;
  gscClicks: number | null;
  gscCtr: number | null;
  gscPosition: number | null;
  revenue: number | null;
  rpm: number | null;
}

const TOOL_PATHS = new Set([
  '/',
  '/generador-free-fire',
  '/espacios-invisible-ff',
  '/nombres-roblox',
  '/nombres-instagram',
  '/nombres-para-tiendas',
  '/nombres-equipos-futbol',
]);

const DIRECTORY_PATHS = new Set([
  '/nombres-por-letra',
]);

function splitKeywords(raw: string): string[] {
  return raw
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

function inferIntent(path: string): KeywordIntent {
  if (TOOL_PATHS.has(path)) return 'tool';
  if (DIRECTORY_PATHS.has(path)) return 'directory';
  return 'mixed';
}

/**
 * Keyword Master is deliberately derived from seoData so there is only one
 * source for the user's already-validated keyword wording.
 *
 * Governance rules:
 * - Existing records are VERIFIED + locked by default. Here VERIFIED means
 *   "approved existing target mapping", not "external SERP research completed".
 * - External research remains explicit in serpChecked/dateVerified and the
 *   Volume/KD/CPC fields; null/false must never be treated as measured data.
 * - lockedKeyword means automated refactors must not replace the primary
 *   keyword, target URL or core search intent.
 * - New candidate keywords must go through seoPageGate before a new route is
 *   added to seoData.
 */
export const keywordMaster: KeywordMasterRecord[] = Object.values(seoData).map((data) => {
  const keywords = splitKeywords(data.keywords);

  return {
    id: data.id,
    targetUrl: data.path,
    primaryKeyword: keywords[0] ?? data.h1,
    secondaryKeywords: keywords.slice(1),
    allKeywords: keywords,
    language: 'es',
    cluster: getClusterIdForPath(data.path),
    status: 'VERIFIED',
    lockedKeyword: true,
    indexable: true,
    intent: inferIntent(data.path),

    searchVolume: null,
    keywordDifficulty: null,
    cpc: null,
    country: null,
    serpChecked: false,
    serpOverlap: null,
    competitors: [],
    dateVerified: null,

    gscImpressions: null,
    gscClicks: null,
    gscCtr: null,
    gscPosition: null,
    revenue: null,
    rpm: null,
  };
});

export const keywordMasterByPath = new Map(
  keywordMaster.map((record) => [record.targetUrl, record] as const),
);

export function getKeywordRecord(path: string): KeywordMasterRecord | undefined {
  return keywordMasterByPath.get(path);
}

export function getIndexableKeywordRecords(): KeywordMasterRecord[] {
  return keywordMaster.filter(
    (record) => record.indexable && record.status === 'VERIFIED',
  );
}

export function getLockedKeywordRecord(path: string): KeywordMasterRecord {
  const record = getKeywordRecord(path);

  if (!record) {
    throw new Error(`[SEO] Missing Keyword Master record for ${path}`);
  }

  return record;
}
