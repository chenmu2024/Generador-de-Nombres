import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
import { seoData } from '../src/data/seoData';
import { editorialProfiles } from '../src/data/editorialProfiles';

const root = resolve('out');
const decode = (value: string) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pathToFile = (path: string) => resolve(root, path === '/' ? 'index.html' : path.slice(1) + '.html');
const routes = [...Object.values(seoData).map(data => data.path), '/sobre-nosotros', '/contacto', '/politica-de-privacidad', '/terminos-y-condiciones'];
let links = 0;
for (const path of routes) {
  const html = readFileSync(pathToFile(path), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: H1`);
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${path}: main landmark`);
  const expected = Object.values(seoData).find(data => data.path === path);
  if (expected) {
    const keywords = html.match(/<meta name="keywords" content="([^"]*)"/);
    assert.equal(decode(keywords?.[1] || ''), expected.keywords, `${path}: emitted keywords`);
    assert.ok(html.includes(`rel="canonical" href="https://generadordenombres.net${path === '/' ? '' : path}"`), `${path}: canonical`);
    const nodes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1])['@graph'] || []);
    for (const type of ['Organization', 'WebSite', 'WebPage', 'WebApplication']) {
      assert.equal(nodes.filter(node => node['@type'] === type).length, 1, `${path}: ${type} graph`);
    }
    assert.equal(nodes.filter(node => node['@type'] === 'FAQPage').length, expected.faqs?.length ? 1 : 0, `${path}: FAQ graph`);
    assert.equal(nodes.filter(node => node['@type'] === 'BreadcrumbList').length, path === '/' ? 0 : 1, `${path}: breadcrumb graph`);
    assert.ok(html.includes(decode(editorialProfiles[path].summary)), `${path}: visible summary`);
    assert.equal(nodes.find(node => node['@type'] === 'WebPage').dateModified, editorialProfiles[path].updated, `${path}: review date`);
  }
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const destination = decode(match[1]).split(/[?#]/)[0];
    if (destination.startsWith('//')) continue;
    assert.ok(existsSync(resolve(root, '.' + destination)) || existsSync(pathToFile(destination)), `${path}: broken link ${destination}`);
    links++;
  }
}
const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
for (const data of Object.values(seoData)) {
  const url = `https://generadordenombres.net${data.path === '/' ? '/' : data.path}`;
  const block = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(match => match[1].includes(`<loc>${url}</loc>`));
  assert.ok(block?.[1].includes(`<lastmod>${editorialProfiles[data.path].updated}</lastmod>`), `${data.path}: stable sitemap date`);
}
console.log(`PASS: ${routes.length} pages, one H1/main each, unchanged emitted keywords/canonicals, ${links} internal links resolve.`);
