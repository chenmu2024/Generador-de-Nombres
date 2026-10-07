import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { seoData } from '../src/data/seoData';
import { keywordMaster } from '../src/data/keywordMaster';
import { editorialProfiles } from '../src/data/editorialProfiles';
import { getBreadcrumbTrail, getClusterForPath } from '../src/data/topicClusters';

const ROOT = resolve('out');
const HOST = 'https://generadordenombres.net';
const pages = Object.values(seoData);
const pathToFile = (path: string) => resolve(ROOT, path === '/' ? 'index.html' : path.slice(1) + '.html');
const decode = (value: string) => value
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const tagValue = (html: string, identifier: string) => {
  const tags = html.match(/<meta\s+[^>]+>/g) || [];
  for (const tag of tags) {
    if (!tag.includes(`name="${identifier}"`) && !tag.includes(`property="${identifier}"`)) continue;
    const value = tag.match(/\bcontent="([^"]*)"/);
    return value ? decode(value[1]) : '';
  }
  return '';
};
const links = (html: string) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)].map(match => decode(match[1]));
const errors: string[] = [];
const check = (fn: () => void) => {
  try { fn(); } catch (e) { errors.push(e instanceof Error ? e.message : String(e)); }
};

const sitemap = readFileSync(resolve(ROOT, 'sitemap.xml'), 'utf8');
const robots = readFileSync(resolve(ROOT, 'robots.txt'), 'utf8');
const siteUrls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(match => match[1]);
const expectedUrls = new Set([
  ...pages.map(page => HOST + (page.path === '/' ? '/' : page.path)),
  ...['/contacto','/sobre-nosotros','/politica-de-privacidad','/terminos-y-condiciones'].map(path => HOST + path),
]);

check(() => assert.equal(siteUrls.length, expectedUrls.size, 'Sitemap route count mismatch'));
check(() => assert.deepEqual(new Set(siteUrls), expectedUrls, 'Sitemap indexable destinations differ'));
check(() => assert.equal(new Set(siteUrls).size, siteUrls.length, 'Duplicate sitemap loc'));
check(() => assert.match(robots, /Sitemap:\s*https:\/\/generadordenombres\.net\/sitemap\.xml/));
check(() => assert.doesNotMatch(sitemap, /<image:image>|<image:loc>/, 'Site logo incorrectly reused as an image-sitemap asset'));

const ogImagePath = resolve(ROOT, 'opengraph-image.png');
check(() => assert.ok(existsSync(ogImagePath), 'Static OG asset missing: out/opengraph-image.png; export candidates: ' + readdirSync(ROOT).filter(name => /open|image|png/i.test(name)).join(', ')));
if (existsSync(ogImagePath)) {
  const png = readFileSync(ogImagePath);
  check(() => assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'OG asset is not a valid PNG'));
}

const routeChecks: Array<{ path: string; canonical: string; intent: string; cluster: string; answerLength: number; faqCount: number }> = [];
const summaries = new Set<string>();
const ownership = new Set<string>();

for (const data of pages) {
  const path = data.path;
  const canonical = HOST + (path === '/' ? '/' : path);
  const html = readFileSync(pathToFile(path), 'utf8');
  const record = keywordMaster.find(item => item.targetUrl === path);
  const editorial = editorialProfiles[path];
  if (!record || !editorial) throw new Error(`Missing keyword/editorial record: ${path}`);
  const breadcrumb = getBreadcrumbTrail(path, data.h1);
  const cluster = getClusterForPath(path);
  routeChecks.push({ path, canonical, intent: record.intent, cluster: cluster.id, answerLength: editorial.summary.length, faqCount: data.faqs?.length || 0 });
  ownership.add(record.primaryKeyword.toLocaleLowerCase('es'));
  summaries.add(editorial.summary);

  check(() => assert.ok(html.includes(`rel="canonical" href="${path === '/' ? HOST : canonical}"`), `${path}: canonical drift`));
  check(() => assert.equal(
    new URL(tagValue(html, 'og:url')).toString(),
    new URL(canonical).toString(),
    `${path}: open graph URL mismatch`,
  ));
  check(() => assert.equal(tagValue(html, 'og:image'), HOST + '/opengraph-image.png', `${path}: broken/incorrect OG image URL`));
  check(() => assert.equal(tagValue(html, 'twitter:image'), HOST + '/opengraph-image.png', `${path}: broken/incorrect Twitter image URL`));
  check(() => assert.equal(tagValue(html, 'twitter:card'), 'summary_large_image', `${path}: social card type`));
  check(() => assert.equal(tagValue(html, 'og:title'), data.title, `${path}: OG/title mismatch`));
  check(() => assert.equal(tagValue(html, 'og:description'), data.metaDescription, `${path}: OG description mismatch`));
  check(() => assert.doesNotMatch(html, /<meta\s+[^>]*(?:name="robots"[^>]*content="[^"]*noindex|content="[^"]*noindex[^>]*name="robots")/i, `${path}: accidental noindex`));
  check(() => assert.ok(html.includes(decode(editorial.summary)) && html.includes(decode(editorial.focus)), `${path}: answer or limits missing in server HTML`));
  check(() => assert.ok(links(html).some(href => href.startsWith('/')), `${path}: no crawlable internal links`));
  check(() => assert.ok(breadcrumb[breadcrumb.length - 1].path === path, `${path}: broken breadcrumb hierarchy`));
  check(() => assert.ok(siteUrls.includes(canonical), `${path}: not in sitemap`));
  check(() => assert.ok(editorial.summary.length > 50 && editorial.focus.length > 30, `${path}: thin answer summary`));
}
check(() => assert.equal(summaries.size, pages.length, 'Duplicate GEO answer snippets across indexable pages'));
check(() => assert.equal(ownership.size, pages.length, 'Duplicate locked primary keyword ownership'));

const evidence = {
  schemaVersion: 1,
  basis: 'Static-export L2 lab audit; not Google indexing, GSC ranking, real-user CWV, or AI-citation evidence',
  domain: HOST,
  countIndexable: pages.length,
  countSitemap: siteUrls.length,
  lockedKeywords: keywordMaster.length,
  imageAsset: '/opengraph-image.png',
  errors,
  routes: routeChecks,
};
mkdirSync('reports', { recursive: true });
writeFileSync('reports/seo-geo-release-audit.json', JSON.stringify(evidence, null, 2) + '\n', 'utf8');
if (errors.length) {
  console.error('[SEO/GEO L2] FAILED (' + errors.length + ' findings):');
  errors.forEach(error => console.error(' - ' + error));
  process.exit(1);
}
console.log(`[SEO/GEO L2] PASS: ${pages.length} locked indexable routes, ${siteUrls.length} sitemap URLs, OG/Twitter asset, extractable summaries, unique primary keyword owners and crawlable links.`);
