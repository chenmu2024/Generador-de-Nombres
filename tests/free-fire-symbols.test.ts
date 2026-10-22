import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { freeFireFrames, freeFireSymbolGroups, freeFireSymbols } from '../src/data/freeFireSymbols';
import { nicknameUnicodeMetrics } from '../src/utils/text';
import { seoData } from '../src/data/seoData';
import { getIntentRoutes } from '../src/components/IntentRoutes';

test('symbol catalogue has unique identifiable characters and paired frames preserve both ends', () => {
  assert.equal(new Set(freeFireSymbols.map(symbol => symbol.value)).size, freeFireSymbols.length);
  assert.ok(freeFireSymbolGroups.length >= 6);
  for (const symbol of freeFireSymbols) {
    assert.equal(Array.from(symbol.value).length, 1, symbol.label);
    assert.ok(symbol.label.trim().length > 3);
    assert.ok(freeFireSymbolGroups.some(group => group.id === symbol.category));
  }
  assert.deepEqual(freeFireFrames[2], ['『', '』']);
  assert.deepEqual(nicknameUnicodeMetrics('👑Luna'), {
    visibleGraphemes: 5, codePoints: 5, utf16Units: 6, hasComplexUnicode: true,
  });
});

test('new symbols route preserves original approved SEO contracts and has a discoverable entry', () => {
  const current = JSON.parse(readFileSync('tests/fixtures/seo-baseline.json', 'utf8'));
  const previousHash = createHash('sha256').update(JSON.stringify(current.slice(0, 46))).digest('hex');
  assert.equal(previousHash, 'c681b1c9e4a9a8efc93d74ebb21be61e2423a0534ffe8124fcce862efdbe22db');
  assert.equal(current.length, 47);
  assert.equal(seoData['simbolos-para-free-fire'].path, '/simbolos-para-free-fire');
  assert.ok(getIntentRoutes('/generador-free-fire').some(route => route.href === '/simbolos-para-free-fire'));
  assert.ok(getIntentRoutes('/simbolos-para-free-fire').some(route => route.href === '/generador-free-fire'));
});
