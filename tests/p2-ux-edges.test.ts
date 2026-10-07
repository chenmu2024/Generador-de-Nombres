import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { navGroups } from '../src/data/navigation';
import { navLinks, allLinks } from '../src/data/allLinks';
import { seoData } from '../src/data/seoData';
import { CONTACT_EMAIL, MAX_MAILTO_URL_LENGTH, prepareContactDraft } from '../src/utils/contactDraft';
import Contact from '../src/views/Contact';
import SiteHeader from '../src/components/SiteHeader';

test('every indexable keyword route has a discoverable top-menu or home entry', () => {
  const expected = new Set(Object.values(seoData).map(page => page.path));
  const navigation = new Set(['/', ...navGroups.flatMap(group => group.links.map(item => item.path))]);
  assert.equal(navigation.size, expected.size, 'navigation must include every page exactly once');
  assert.deepEqual([...navigation].sort(), [...expected].sort(), 'missing or invented routes in navigation');
  assert.equal(new Set(allLinks.map(item => item.path)).size, expected.size);
  assert.deepEqual(new Set(allLinks.map(item => item.path)), expected);
  assert.ok(navLinks.some(item => item.path === '/'));
  for (const group of navGroups) {
    assert.ok(group.title && group.links.length > 0);
    assert.equal(new Set(group.links.map(item => item.path)).size, group.links.length);
  }
  assert.doesNotMatch(JSON.stringify(navGroups), /nadie tiene|compatibles\b/i);
});

test('large desktop nav stays scrollable and mobile menu stays accessible', () => {
  const rendered = renderToStaticMarkup(React.createElement(SiteHeader));
  assert.match(rendered, /Navegación principal/);
  assert.match(rendered, /max-h-\[min\(72vh,560px\)\]/);
  assert.match(rendered, /href="\/nombres-chinos"/);
  assert.match(rendered, /href="\/nombres-gatos-machos"/);
  assert.match(rendered, /href="\/nombres-con-y"/);
  const mobile = fs.readFileSync('src/components/MobileMenuIsland.tsx', 'utf8');
  assert.match(mobile, /min-w-11 min-h-11/);
  assert.match(mobile, /100dvh-4rem/);
});

test('contact draft encodes special characters and requires explicit external send', () => {
  const prepared = prepareContactDraft({
    name: '  Ana García  ',
    email: '  ana@example.com  ',
    subject: 'Sugerencia',
    message: '  Un gato con Ñ y 😺\r\nSaludos  ',
  });
  assert.equal(prepared.subject, '[GeneradorDeNombres.net] Sugerencia - Ana García');
  assert.ok(prepared.body.includes('Nombre: Ana García'));
  assert.ok(prepared.body.includes('Un gato con Ñ y 😺\nSaludos'));
  assert.ok(prepared.plainText.startsWith(`Para: ${CONTACT_EMAIL}\n`));
  assert.ok(prepared.mailtoUrl?.startsWith(`mailto:${CONTACT_EMAIL}?subject=`));
  assert.ok(prepared.mailtoUrl?.includes('%C3%91'));
  assert.ok(prepared.mailtoUrl?.includes('%F0%9F%98%BA'));
  assert.ok(prepared.mailtoUrl && prepared.mailtoUrl.length <= MAX_MAILTO_URL_LENGTH);
});

test('oversize contact messages retain full text but do not construct fragile mailto URL', () => {
  const message = 'ñ😊'.repeat(1200);
  const draft = prepareContactDraft({
    name: 'Ana\nInjected', email: 'ana@example.com', subject: 'Soporte\nHeader',
    message,
  });
  assert.equal(draft.mailtoUrl, null);
  assert.ok(draft.plainText.includes(message));
  assert.doesNotMatch(draft.subject, /[\r\n]/);
  assert.ok(draft.body.startsWith('Nombre: Ana Injected'));
  assert.ok(draft.body.includes('Asunto: Soporte Header'));
});

test('contact form explains actual email handling and offers clipboard and offline fallback', () => {
  const html = renderToStaticMarkup(React.createElement(Contact));
  assert.match(html, /no almacena ni envía formularios/);
  assert.match(html, /Descargar borrador TXT/);
  assert.match(html, /Copiar mensaje completo/);
  const source = fs.readFileSync('src/views/Contact.tsx', 'utf8');
  assert.match(source, /prepared\.mailtoUrl/);
  assert.match(source, /window\.location\.href = prepared\.mailtoUrl/);
  assert.match(source, /URL\.createObjectURL/);
  assert.match(source, /Borrador preparado, todavía no enviado/);
});

test('nickname bulk selection is limited to currently rendered cards', () => {
  const source = fs.readFileSync('src/components/Generator.tsx', 'utf8');
  assert.match(source, /const currentlyVisible = displayedNames\.slice\(0, visibleCount\)/);
  assert.match(source, /visibleSet\.has\(name\)/);
  assert.match(source, /aria-label=\{displayedNames\.slice\(0, visibleCount\)/);
  assert.match(source, /TXT filtrados/);
  assert.doesNotMatch(source, /setSelectedNames\(\[\.\.\.displayedNames\]\)/);
});

test('favorites clear requires explicit confirmation and retains an undo option', () => {
  const source = fs.readFileSync('src/components/FavoritesIsland.tsx', 'utf8');
  assert.match(source, /Confirmar vaciado de favoritos/);
  assert.match(source, /setConfirmClear\(true\)/);
  assert.match(source, /setRecentlyCleared\(\[\.\.\.favorites\]\)/);
  assert.match(source, /Deshacer vaciado de favoritos/);
  assert.match(source, /\.\.\.readFavorites\(\)/);
  assert.match(source, /setStorageWarning\(!stored\)/);
  assert.doesNotMatch(source, /onClick=\{\(\) => persist\(\[\]\)\}/);
});
