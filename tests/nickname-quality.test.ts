import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  generateFancyNicknames,
  shortenDecoratedNickname,
  decorationPrefixes,
  decorationSuffixes,
  fontMaps,
} from '../src/utils/nameLogic';
import {
  nicknameUnicodeMetrics,
  describeNicknameStyle,
  filterNicknames,
  visibleLength,
} from '../src/utils/text';
import { alphabetNames } from '../src/data/nameIdeas';

test('nickname generation deduplicates styled bases and avoids hundreds of repetitive frames', () => {
  const names = generateFancyNicknames('Nova');
  assert.ok(names.length >= Object.keys(fontMaps).length, 'font styles should remain accessible');
  assert.ok(names.length < 370, 'all styles should use a bounded selection of decorations');
  assert.equal(new Set(names).size, names.length);
  assert.ok(names.every(name => name === name.normalize('NFC')));

  const single = generateFancyNicknames('Nova', 'fancy');
  assert.ok(single.length > 4 && single.length <= 13, 'explicit font should offer more frames, not an unbounded list');
  assert.equal(new Set(single).size, single.length);
  assert.ok(single[0].includes('𝓝'), 'selected font must remain functional');

  const special = generateFancyNicknames('✨');
  assert.ok(special.length > 1 && special.length < 30, 'unsupported input should not multiply identical styled bases');
  assert.equal(new Set(special).size, special.length);
});

test('all decoration pairs stay available through rotating frames across styles', () => {
  const names = generateFancyNicknames('Abcd');
  const found = new Set<number>();
  for (const name of names) {
    for (let i = 0; i < decorationPrefixes.length; i++) {
      if (name.startsWith(decorationPrefixes[i]) && name.endsWith(decorationSuffixes[i])) found.add(i);
    }
  }
  assert.equal(found.size, decorationPrefixes.length, 'every decoration remains reachable');
  assert.equal(decorationSuffixes.length, decorationPrefixes.length);
});

test('custom symbols and Unicode text remain valid output without duplicate suggestions', () => {
  const original = 'Niña🚀';
  const result = generateFancyNicknames(original, 'fancy', ['⚡', '✿', '⚡']);
  assert.ok(result.length > 1 && result.length < 25);
  assert.ok(result.every(x => x.includes('ñ') && x.includes('🚀')));
  assert.equal(new Set(result).size, result.length);
  assert.deepEqual(
    generateFancyNicknames('Nova', 'unrecognized-style'),
    generateFancyNicknames('Nova', 'all'),
  );
});

test('Unicode visual clusters, code points and UTF-16 units are explicitly distinct', () => {
  assert.deepEqual(nicknameUnicodeMetrics('Gamer'), {
    visibleGraphemes: 5, codePoints: 5, utf16Units: 5, hasComplexUnicode: false,
  });
  assert.deepEqual(nicknameUnicodeMetrics('𝓐'), {
    visibleGraphemes: 1, codePoints: 1, utf16Units: 2, hasComplexUnicode: true,
  });
  assert.deepEqual(nicknameUnicodeMetrics('🧑‍🚀'), {
    visibleGraphemes: 1, codePoints: 3, utf16Units: 5, hasComplexUnicode: true,
  });
  assert.deepEqual(nicknameUnicodeMetrics('A\u0301'), {
    visibleGraphemes: 1, codePoints: 2, utf16Units: 2, hasComplexUnicode: true,
  });
});

test('shortening keeps balanced known decorative frames and respects grapheme boundaries', () => {
  const decorated = '꧁༺ NovaLegendExtra ༻꧂';
  const shortened = shortenDecoratedNickname(decorated);
  assert.ok(visibleLength(shortened) <= 12);
  assert.ok(shortened.startsWith('꧁༺ '));
  assert.ok(shortened.endsWith(' ༻꧂'));
  assert.ok(shortened.includes('Nova'));
  assert.equal(shortenDecoratedNickname('👩‍🚀' + 'a'.repeat(25)).startsWith('👩‍🚀'), true);
  assert.equal(visibleLength(shortenDecoratedNickname('👩‍🚀' + 'a'.repeat(25))), 12);
  assert.equal(shortenDecoratedNickname('Pepe'), 'Pepe');
});

test('style badges describe appearance and never claim an in-game rarity rank', () => {
  assert.equal(describeNicknameStyle('Gamer').label, 'TEXTO SIMPLE');
  assert.equal(describeNicknameStyle('𝓐𝓑').label, 'LETRAS DECORATIVAS');
  assert.equal(describeNicknameStyle('꧁༺ Nombre ༻꧂').label, 'CON ADORNOS');
  assert.equal(describeNicknameStyle('Nova_Test').label, 'CON SÍMBOLOS');
  assert.ok(filterNicknames(['𝓐𝓑', 'Normal'], 'aesthetic').includes('𝓐𝓑'));
  assert.ok(filterNicknames(['☠ Nova', 'Normal'], 'toxic').includes('☠ Nova'));
  assert.ok(!['MÍTICO', 'LEGENDARIO', 'ÉPICO'].some(rank =>
    describeNicknameStyle('⚡ Nombre ⚡').label.includes(rank)));
});

test('Ñ category includes the letter anywhere and never falsely presents itself as an initial', () => {
  const names = alphabetNames['Ñ'].map(item => item.name);
  assert.ok(names.length >= 6);
  assert.ok(names.every(name => /ñ/i.test(name)));
  for (const name of ['Íñigo','Begoña','Toño','Iñaki','Beñat','Nuño']) {
    assert.ok(names.includes(name), `Missing meaningful Ñ example: ${name}`);
  }
  const ui = readFileSync('src/components/AlphabetMatrixTool.tsx', 'utf8');
  assert.match(ui, /Nombres que contienen Ñ/);
  assert.match(ui, /no afirma que comiencen por ella/);
  assert.match(ui, /min-h-11|w-11 h-11/);
});

test('generator explains count limitations and does not show fictional rarity as factual rating', () => {
  const component = readFileSync('src/components/Generator.tsx', 'utf8');
  assert.doesNotMatch(component, /getRarityTier|MÍTICO 👑|LEGENDARIO 💎/);
  assert.match(component, /nicknameUnicodeMetrics\(name\)/);
  assert.match(component, /no una rareza oficial/);
  assert.match(component, /no garantiza aceptación en juegos/);
  assert.match(component, /shortenDecoratedNickname\(name\)/);
});
