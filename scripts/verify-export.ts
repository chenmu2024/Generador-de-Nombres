import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
import { seoData } from '../src/data/seoData';

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
  }
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const destination = decode(match[1]).split(/[?#]/)[0];
    if (destination.startsWith('//')) continue;
    assert.ok(existsSync(resolve(root, '.' + destination)) || existsSync(pathToFile(destination)), `${path}: broken link ${destination}`);
    links++;
  }
}
console.log(`PASS: ${routes.length} pages, one H1/main each, unchanged emitted keywords/canonicals, ${links} internal links resolve.`);
