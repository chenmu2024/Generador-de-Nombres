import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { compoundNameGroups, getCompoundSuggestions, lookupNameMeaning } from '../src/data/compoundNames';
import { normalizeSearch, visibleLength } from '../src/utils/text';
import { nameIdeas, alphabetNames } from '../src/data/nameIdeas';
import { nameIdeaPaths } from '../src/data/nameIdeaPaths';
import { getNameIdeaInitials, getNameIdeaTheme, getNameIdeaThemes, nameIdeaContexts, selectNameIdeas, type NameIdeaFilters } from '../src/utils/nameIdeaExplorer';
import FemaleNamesTool from '../src/components/tools/FemaleNamesTool';
import MaleNamesTool from '../src/components/tools/MaleNamesTool';
import UnisexNamesTool from '../src/components/tools/UnisexNamesTool';
import RareNamesTool from '../src/components/tools/RareNamesTool';
import SeoGuide from '../src/components/SeoGuide';
import NameIdeasTool from '../src/components/NameIdeasTool';
import Contact from '../src/views/Contact';
import { seoData } from '../src/data/seoData';
import { petNameLists } from '../src/data/petNameLists';
import { selectPetNameIdeas } from '../src/utils/petNameFilter';
import PetNameLibrary from '../src/components/tools/PetNameLibrary';
import CompoundNamePicker, { selectCompoundIdeas } from '../src/components/tools/CompoundNamePicker';

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
  assert.deepEqual([...nameIdeaPaths].sort(), Object.keys(nameIdeas).sort());
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


test('all eight catalogues expose 24+ unique useful names and editorial context', () => {
  for (const path of nameIdeaPaths) {
    const entries = nameIdeas[path].names;
    assert.ok(entries.length >= 24, `${path}: fewer than 24 entries`);
    assert.equal(new Set(entries).size, entries.length, `${path}: duplicate name`);
    assert.ok(nameIdeaContexts[path]?.explanation.length > 45, `${path}: missing context`);
    assert.ok(nameIdeaContexts[path]?.verification.length > 45, `${path}: missing verification caveat`);
    const groups = getNameIdeaThemes(path);
    if (groups.length) {
      const classified = groups.flatMap(group => group.names);
      assert.deepEqual([...classified].sort(), [...entries].sort(), `${path}: missing or repeated theme assignment`);
    }
  }
});

test('name idea filters combine accent folding, initial, length, topic and stable ordering', () => {
  const base: NameIdeaFilters = { query: '', initial: 'all', length: 'all', theme: 'all', sort: 'alphabetical' };
  const greek = nameIdeas['/nombres-de-dioses'].names;
  assert.deepEqual(
    selectNameIdeas('/nombres-de-dioses', greek, { ...base, query: 'poseidon' }),
    ['Poseidón'],
  );
  assert.deepEqual(
    selectNameIdeas('/nombres-de-dioses', greek, { ...base, theme: 'Cielo y luz', initial: 'S' }),
    ['Selene'],
  );
  assert.deepEqual(
    selectNameIdeas('/nombres-de-dioses', greek, { ...base, length: 'short' }),
    ['Ares', 'Eos', 'Eros', 'Hera', 'Nike', 'Pan', 'Zeus'],
  );
  assert.equal(getNameIdeaTheme('/nombres-caballos', 'Azabache'), 'Pelaje y color');
  assert.deepEqual(getNameIdeaInitials(['Ícaro', 'Azabache', 'Aurora']), ['A', 'Í']);
  assert.equal(selectNameIdeas('/nombres-chinos', nameIdeas['/nombres-chinos'].names, {...base, query: '__not_a_name__'}).length, 0);
  assert.deepEqual(selectNameIdeas('/nombres-chinos', ['An', 'Bai'], {...base, sort: 'reverse'}), ['Bai', 'An']);
});

test('name comparison tool offers selection, CSV export, favorites and evidence caveats', () => {
  for (const path of nameIdeaPaths) {
    const html = renderToStaticMarkup(React.createElement(NameIdeasTool, {path, onCopy:()=>{}}));
    assert.match(html, /Tabla de nombres comparables/);
    assert.match(html, /Seleccionar visibles/);
    assert.match(html, /Exportar CSV/);
    assert.match(html, /Copiar resultados/);
    assert.match(html, /Guardar favorito/);
    assert.match(html, /no un ranking/);
    assert.match(html, /Longitud del nombre/);
  }
  const gods = renderToStaticMarkup(React.createElement(NameIdeasTool, {path:'/nombres-de-dioses', onCopy:()=>{}}));
  assert.match(gods, /Filtrar por temática creativa/);
  assert.match(gods, /Poseidón/);
  assert.match(gods, /aria-label="Escuchar Poseidón"/);
});


test('A-Z catalogue provides usable selections and keeps Ñ as a contains-Ñ group', () => {
  for (const [letter, names] of Object.entries(alphabetNames)) {
    assert.ok(names.length >= (letter === 'Ñ' ? 3 : 8), `${letter}: too few names`);
    assert.equal(new Set(names.map(item => item.name)).size, names.length, `${letter}: duplicates`);
    for (const item of names) {
      assert.ok(['f', 'm', 'u'].includes(item.gender));
      if (letter === 'Ñ') {
        assert.match(item.name, /ñ/i);
      } else {
        const first = normalizeSearch(item.name).slice(0, 1).toUpperCase();
        assert.equal(first, letter, `${letter}: unexpected name ${item.name}`);
      }
    }
  }
});

test('A-Z explorer offers bulk copying, length filtering and shared favorites', () => {
  const source = fs.readFileSync('src/components/AlphabetMatrixTool.tsx', 'utf8');
  assert.match(source, /Copiar resultados/);
  assert.match(source, /Filtrar por longitud/);
  assert.match(source, /Ordenar nombres/);
  assert.match(source, /gdn_favorites_updated/);
  assert.match(source, /Guardar favorito/);
});


test('pet catalogues contain 20 distinct entries with documented categories and no fabricated rankings', () => {
  const categories: Record<string, string[]> = {
    cats: ['Machos ♂️', 'Hembras ♀️', 'Graciosos / Comida 🍡', 'Gatos Naranjas 🍊', 'Elegantes / Reales 👑', 'Cortos (2 Sílabas) ⚡'],
    dogs: ['Tiernas 💖', 'Pequeñas 🎀', 'Blancas / Peluditas ❄️', 'Originales ✨', 'Famosas 👑'],
    blackCats: ['Místicos / Magia 🔮', 'Cine / Anime 🎬', 'Noche / Cosmos 🌑', 'Elegantes / Dark 🖤', 'Divertidos / Tiernos 🍡'],
    maleCats: ['Épicos / Reyes 👑', 'Cortos (2 Sílabas) ⚡', 'Comida / Tiernos 🍡', 'Mitología / Héroes 🏛️', 'Famosos / Anime 🎬'],
  };
  for (const [kind, ideas] of Object.entries(petNameLists)) {
    assert.equal(ideas.length, 20, `${kind}: expected 20 ideas`);
    assert.equal(new Set(ideas.map(item => item.name)).size, ideas.length);
    for (const idea of ideas) {
      assert.ok(categories[kind].includes(idea.category), `${kind}: invalid category ${idea.category}`);
      assert.ok(idea.note.length >= 16);
      assert.doesNotMatch(idea.note, /nombre #1|el más popular|garantizado/i);
    }
  }
});

test('pet filters combine category, accent-insensitive searching, length and sorting', () => {
  const all = petNameLists.blackCats;
  const results = selectPetNameIdeas(all, 'Todos 🐈‍⬛', 'Todos 🐈‍⬛', 'onix', 'all', 'alpha');
  assert.deepEqual(results.map(item => item.name), ['Onyx', 'Ónix']);
  const night = selectPetNameIdeas(all, 'Noche / Cosmos 🌑', 'Todos 🐈‍⬛', '', 'short', 'alpha');
  assert.deepEqual(night.map(item => item.name), []);
  const shortNames = selectPetNameIdeas(petNameLists.cats, 'Todos 🐱', 'Todos 🐱', '', 'short', 'length');
  assert.ok(shortNames.length > 0 && shortNames.every(item => [...item.name].length <= 4));
  assert.deepEqual(selectPetNameIdeas(all, 'Todos 🐈‍⬛', 'Todos 🐈‍⬛', '__no_match__', 'all', 'alpha'), []);
});

test('pet and human result cards have touch targets, copy, favorites and accessible labels', () => {
  const pet = renderToStaticMarkup(React.createElement(PetNameLibrary, {
    kind:'cats', category:'Todos 🐱', allCategory:'Todos 🐱',
    onCopy:()=>{}, onUse:()=>{}, onSpeak:()=>{},
  }));
  assert.match(pet, /aria-label="Buscar nombres de mascotas"/);
  assert.match(pet, /Copiar resultados/);
  assert.match(pet, /Guardar favorito/);
  assert.match(pet, /min-h-11/);
  const people = renderToStaticMarkup(React.createElement(CompoundNamePicker, {
    suggestions: getCompoundSuggestions('male','moderno'),
    onCopy:()=>{}, onUse:()=>{},
  }));
  assert.match(people, /Buscar combinaciones/);
  assert.match(people, /Editar combinación/);
  assert.match(people, /min-h-11/);
  assert.match(people, /Guardar favorito/);
});

test('compound suggestions filter by first-name length without dropping the original text', () => {
  const samples = getCompoundSuggestions('male','moderno');
  const mateo = selectCompoundIdeas(samples, 'MATEO', 'all');
  assert.deepEqual(mateo.map(item=>item.val), ['Mateo Gael']);
  assert.ok(selectCompoundIdeas(samples, '', 'short').every(item => visibleLength(item.val.split(' ')[0]) <= 4));
  assert.deepEqual(selectCompoundIdeas(samples, 'unmatched_zz', 'all'), []);
});
