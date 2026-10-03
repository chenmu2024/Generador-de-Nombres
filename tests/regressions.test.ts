import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { graphemes, visibleLength, trimName, filterNicknames, instagramSuggestions, isInstagramUsername } from '../src/utils/text';
import { generateFancyNicknames } from '../src/utils/nameLogic';
import { seoData } from '../src/data/seoData';
import { alphabetNames, nameIdeas } from '../src/data/nameIdeas';
import AlphabetMatrixTool from '../src/components/AlphabetMatrixTool';
import { copyText } from '../src/utils/clipboard';
import { readFavorites, writeStorage } from '../src/utils/browserStorage';
import { privacyEvent } from '../src/utils/telemetry';

test('SEO keywords, titles, H1 and all routes remain unchanged', () => {
  const expected = JSON.parse(readFileSync(new URL('./fixtures/seo-baseline.json', import.meta.url), 'utf8'));
  assert.deepEqual(Object.values(seoData).map(({ id, path, title, h1, keywords }) => ({ id, path, title, h1, keywords })), expected);
});

test('visible character counts and trimming preserve composed Unicode', () => {
  const text = '𝓒𝓐𝓡𝓛𝓞𝓢👨‍👩‍👧‍👦e\u0301🇪🇸';
  assert.equal(visibleLength(text), 9);
  assert.equal(trimName(text, 7), '𝓒𝓐𝓡𝓛𝓞𝓢👨‍👩‍👧‍👦');
  assert.equal(graphemes('👑').join(' '), '👑');
  assert.equal(trimName(text, 0), '');
  const generated = generateFancyNicknames('Carlos👑', 'all');
  for (const name of generated) {
    const trimmed = trimName(name);
    assert.ok(visibleLength(trimmed) <= 12);
    assert.ok(!/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(trimmed));
  }
});

test('vibe filters handle supplementary symbols and lower-case words', () => {
  const names = ['👑king', 'shadow', 'pro', '🙂calm', '𝓒𝓐𝓡𝓛𝓞𝓢', 'a'.repeat(13)];
  assert.deepEqual(filterNicknames(names, 'epico'), ['👑king', 'pro']);
  assert.deepEqual(filterNicknames(names, 'toxic'), ['shadow']);
  assert.ok(filterNicknames(names, 'short').includes('𝓒𝓐𝓡𝓛𝓞𝓢'));
  assert.ok(!filterNicknames(names, 'short').includes('a'.repeat(13)));
});

test('generation normalizes empty and whitespace input consistently', () => {
  assert.deepEqual(generateFancyNicknames('   '), generateFancyNicknames(''));
  assert.deepEqual(generateFancyNicknames(' Carlos👑 '), generateFancyNicknames('Carlos👑'));
});

test('Instagram suggestions are valid at format and length boundaries', () => {
  for (const name of ['', 'sofia', 'a'.repeat(30), 'a'.repeat(31), '..bad', 's💜', '.bad', 'bad.']) {
    assert.ok(instagramSuggestions(name).every(isInstagramUsername));
  }
  assert.deepEqual(instagramSuggestions('a'.repeat(30)), ['a'.repeat(30)]);
  assert.deepEqual(instagramSuggestions('s💜'), []);
  assert.deepEqual(instagramSuggestions(''), []);
});

test('alphabet routes render the requested initial and no invented fallback', () => {
  for (const [letter, entries] of Object.entries(alphabetNames)) {
    assert.ok(entries.length > 0);
    for (const { name } of entries) {
      if (letter === 'Ñ') assert.ok(name.toUpperCase().includes('Ñ'));
      else assert.equal(name.normalize('NFD').replace(/\p{M}/gu, '').toUpperCase()[0], letter);
    }
  }
  const markup = renderToStaticMarkup(React.createElement(AlphabetMatrixTool, { currentLetter: 'D' }));
  assert.ok(markup.includes('Daniel'));
  assert.ok(!markup.includes('Alexander') && !markup.includes('Dlberto'));
  assert.equal(Object.keys(nameIdeas).length, 8);
});

test('corrupt favorites and unavailable storage do not crash', () => {
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: () => '{broken', setItem: () => { throw new Error('quota'); },
  } });
  assert.deepEqual(readFavorites(), []);
  assert.equal(writeStorage('session-test', 'value'), false);
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, get: () => { throw new Error('blocked'); } });
  assert.deepEqual(readFavorites(), []);
});

test('clipboard rejects without reporting success and offers manual text', async () => {
  let offered = '';
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async () => { throw new Error('denied'); } } } });
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { dispatchEvent: (event: CustomEvent<string>) => { offered = event.detail; } } });
  assert.equal(await copyText('👑Carlos'), false);
  assert.equal(offered, '👑Carlos');
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async () => {} } } });
  assert.equal(await copyText('Carlos'), true);
});

test('telemetry strips typed query data and stops immediately after consent withdrawal', () => {
  const values = new Map<string, string>();
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
  } });
  const event = { url: 'https://generadordenombres.net/?s=Carlos#name' };
  assert.equal(privacyEvent(event), null);
  writeStorage('cookie_consent_choice', 'accepted');
  assert.equal(privacyEvent(event)?.url, 'https://generadordenombres.net/');
  writeStorage('cookie_consent_choice', 'declined');
  assert.equal(privacyEvent(event), null);
});
