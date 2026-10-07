import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { compoundNameGroups, getCompoundSuggestions, lookupNameMeaning } from '../src/data/compoundNames';
import { normalizeSearch, visibleLength } from '../src/utils/text';
import { nameIdeas } from '../src/data/nameIdeas';
import FemaleNamesTool from '../src/components/tools/FemaleNamesTool';
import MaleNamesTool from '../src/components/tools/MaleNamesTool';
import UnisexNamesTool from '../src/components/tools/UnisexNamesTool';
import RareNamesTool from '../src/components/tools/RareNamesTool';
import SeoGuide from '../src/components/SeoGuide';
import NameIdeasTool from '../src/components/NameIdeasTool';
import Contact from '../src/views/Contact';
import { seoData } from '../src/data/seoData';

test('unknown and special object keys never receive invented etymology', () => {
  for (const name of ['PruebaXYZ', '', '   ', '__proto__', 'constructor', '👑']) {
    const result = lookupNameMeaning(name);
    assert.equal(result.origin, 'Pendiente de verificación');
    assert.equal(result.source, undefined);
  }
  assert.deepEqual(lookupNameMeaning(' SOFÍA '), lookupNameMeaning('Sofi\u0301a'));
  assert.equal(lookupNameMeaning('Sofia').meaning, 'Sabiduría.');
  assert.ok(lookupNameMeaning('Sofía').source);
  assert.match(lookupNameMeaning('Orion').meaning, /incierto/);
});

test('all compound styles produce distinct usable selections; short styles obey the limit', () => {
  for (const family of ['female', 'male', 'unisex', 'rare'] as const) {
    const selections = Object.keys(compoundNameGroups[family]).map(style => getCompoundSuggestions(family, style));
    assert.equal(new Set(selections.map(items => JSON.stringify(items))).size, selections.length);
    for (const selection of selections) {
      assert.ok(selection.length >= 8);
      assert.equal(new Set(selection.map(item => item.val)).size, selection.length);
    }
    assert.deepEqual(getCompoundSuggestions(family, '__proto__'), []);
  }
  for (const family of ['female', 'male'] as const) {
    for (const item of getCompoundSuggestions(family, 'corto')) {
      const length = visibleLength(item.val.split(' ')[0]);
      assert.ok(length >= 3 && length <= 4, item.val);
    }
  }
});

test('name components expose selected filters, sources and accurate device audio', () => {
  const props = { handleCopyTrending: () => {} };
  for (const component of [MaleNamesTool, UnisexNamesTool, RareNamesTool]) {
    const html = renderToStaticMarkup(React.createElement(component, props));
    assert.match(html, /aria-pressed="true"/);
    assert.match(html, /Fuente del significado/);
    assert.doesNotMatch(html, /Origen Antiguo|Origen Noble|Populares en 2026/);
  }
  const female = renderToStaticMarkup(React.createElement(FemaleNamesTool, { ...props, currentPath: '/nombres-de-nina' }));
  assert.match(female, /voz sintetizada del dispositivo/);
  assert.doesNotMatch(female, /voz real/);
  assert.match(female, /Fuente del significado/);
});

test('accent insensitive searches preserve displayed spelling and expanded catalogues', () => {
  assert.equal(normalizeSearch(' Poseidón '), normalizeSearch('poseidon'));
  assert.equal(normalizeSearch('Ai\u0308'), normalizeSearch('Aï'));
  for (const entry of Object.values(nameIdeas)) {
    assert.ok(entry.names.length >= 15);
    assert.equal(new Set(entry.names).size, entry.names.length);
  }
  const html = renderToStaticMarkup(React.createElement(NameIdeasTool, {path:'/nombres-de-dioses', onCopy:()=>{}}));
  assert.match(html, /Longitud del nombre/);
  assert.match(html, /Poseidón/);
  assert.match(html, /aria-label="Escuchar Poseidón"/);
  assert.match(html, /lectura sintetizada/);
});

test('home related navigation links to actual tools and the catalogue anchor', () => {
  const html = renderToStaticMarkup(React.createElement(SeoGuide, { data: seoData.home, currentPath: '/' }));
  assert.match(html, /href="\/generador-free-fire"/);
  assert.match(html, /href="#relacionados"/);
});

test('contact message copy is available before launching an email application', () => {
  const html = renderToStaticMarkup(React.createElement(Contact));
  assert.match(html, /Copiar mensaje completo/);
});


test('non-gaming tools avoid platform hijacking and unsupported official claims', () => {
  const files = [
    'src/components/tools/CatNamesTool.tsx',
    'src/components/tools/DogNamesTool.tsx',
    'src/components/tools/BlackCatNamesTool.tsx',
    'src/components/tools/MaleCatNamesTool.tsx',
    'src/components/tools/JapaneseNamesTool.tsx',
    'src/components/tools/KoreanNamesTool.tsx',
    'src/components/tools/FrenchNamesTool.tsx',
    'src/components/tools/MayaNamesTool.tsx',
    'src/components/tools/PlushieTool.tsx',
  ];
  const source = files.map(file => fs.readFileSync(file, 'utf8')).join('\n');
  assert.doesNotMatch(source, /Certificado Oficial|Ficha Oficial|Acta Oficial|Documento Oficial|Adoptante Oficial|Nombre Oficial/);
  assert.doesNotMatch(source, /pronunciación oficial|pronunciación auténtica/i);
  assert.doesNotMatch(source, /Ideal para TikTok, Instagram o Free Fire|Ideal para Free Fire, TikTok, Discord/i);
  assert.doesNotMatch(source, /Diseño para (?:Collar|Placa) o Redes/i);
});


test('shared layout stays server-first and heavy client features are isolated', () => {
  const layout = fs.readFileSync('src/layouts/MainLayout.tsx', 'utf8');
  const category = fs.readFileSync('src/views/CategoryPage.tsx', 'utf8');
  const footer = fs.readFileSync('src/components/SiteFooter.tsx', 'utf8');
  const header = fs.readFileSync('src/components/SiteHeader.tsx', 'utf8');
  const search = fs.readFileSync('src/components/SearchIsland.tsx', 'utf8');
  const favorites = fs.readFileSync('src/components/FavoritesIsland.tsx', 'utf8');
  const mobile = fs.readFileSync('src/components/MobileMenuIsland.tsx', 'utf8');

  assert.doesNotMatch(layout, /['"]use client['"]/);
  assert.match(layout, /SiteHeader/);
  assert.match(layout, /SiteFooter/);
  assert.doesNotMatch(header, /['"]use client['"]/);
  assert.match(header, /SearchIsland/);
  assert.match(header, /FavoritesIsland/);
  assert.match(header, /MobileMenuIsland/);
  assert.match(header, /<details/);
  assert.match(search, /^'use client'/);
  assert.match(favorites, /^'use client'/);
  assert.match(mobile, /^'use client'/);
  assert.doesNotMatch(footer, /['"]use client['"]|next\/link/);

  assert.match(category, /dynamic\(\(\) => import\('\.\.\/components\/tools\/FreeFireToolkit'\)/);
  assert.match(category, /dynamic\(\(\) => import\('\.\.\/components\/tools\/FreeFireSupportSections'\)/);
  assert.match(category, /dynamic\(\(\) => import\('\.\.\/components\/NameIdeasTool'\)/);
  assert.doesNotMatch(category, /import \{ nameIdeas \}|import NameIdeasTool from/);
  assert.doesNotMatch(category, /ffClanTag|ffClanName|ffClanSymbol|setActiveSymbolTab|390 Diamantes/);
});
