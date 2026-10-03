import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';
import { seoData } from '../src/data/seoData';
import { keywordMaster } from '../src/data/keywordMaster';
import { getClusterIdForPath } from '../src/data/topicClusters';

const errors: string[] = [];
const baseline = JSON.parse(readFileSync(new URL('../tests/fixtures/seo-baseline.json', import.meta.url), 'utf8'));
const current = Object.values(seoData).map(({ id, path, title, h1, keywords }) => ({ id, path, title, h1, keywords }));
if (!isDeepStrictEqual(current, baseline)) errors.push('Locked SEO keywords, titles, H1 or routes changed from the approved baseline.');

const seoPaths = Object.values(seoData).map((item) => item.path);
const keywordPaths = keywordMaster.map((item) => item.targetUrl);

const duplicate = (items: string[]) =>
  items.filter((item, index) => items.indexOf(item) !== index);

for (const path of duplicate(seoPaths)) {
  errors.push(`Duplicate seoData path: ${path}`);
}

for (const path of duplicate(keywordPaths)) {
  errors.push(`Duplicate Keyword Master targetUrl: ${path}`);
}

for (const data of Object.values(seoData)) {
  const record = keywordMaster.find((item) => item.targetUrl === data.path);

  if (!record) {
    errors.push(`Missing Keyword Master record: ${data.path}`);
    continue;
  }

  const sourceKeywords = data.keywords
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (record.primaryKeyword !== sourceKeywords[0]) {
    errors.push(`Primary keyword drift: ${data.path}`);
  }

  if (JSON.stringify(record.allKeywords) !== JSON.stringify(sourceKeywords)) {
    errors.push(`Keyword list drift: ${data.path}`);
  }

  if (!record.lockedKeyword || record.status !== 'VERIFIED') {
    errors.push(`Existing route must stay VERIFIED/LOCKED: ${data.path}`);
  }

  try {
    getClusterIdForPath(data.path);
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }
}

for (const record of keywordMaster) {
  if (!seoPaths.includes(record.targetUrl)) {
    errors.push(`Keyword Master points to missing seoData route: ${record.targetUrl}`);
  }
}

if (errors.length > 0) {
  console.error('[SEO Governance] FAILED');
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

console.log(
  `[SEO Governance] PASS — ${keywordMaster.length} VERIFIED/LOCKED pages, no keyword or route drift.`,
);
