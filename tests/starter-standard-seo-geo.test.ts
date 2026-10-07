import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { seoData } from '../src/data/seoData';
import { keywordMaster } from '../src/data/keywordMaster';
import { editorialProfiles } from '../src/data/editorialProfiles';
import { searchAnswerExamples } from '../src/data/seoAnswerExamples';
import SeoGuide from '../src/components/SeoGuide';

test('Starter Standard project brief maps all 46 owner-locked primary routes without fake search data', () => {
  const doc = fs.readFileSync('docs/SEO-GEO-PROJECT-BRIEF.md', 'utf8');
  const expected = Object.values(seoData);
  assert.equal(expected.length, 46);
  assert.equal(keywordMaster.length, 46);
  for (const data of expected) {
    const primary = keywordMaster.find(record => record.targetUrl === data.path)?.primaryKeyword;
    assert.ok(primary, data.path);
    assert.ok(doc.includes(`| ${data.path} | ${primary} |`), 'Missing keyword owner in brief: ' + data.path);
  }
  assert.match(doc, /not external SERP|not externally/i);
  assert.match(doc, /unknown\/unmeasured/i);
  assert.match(doc, /canonical/i);
  assert.match(doc, /GEO\/AI-search/i);
  assert.match(doc, /training crawler/i);
  assert.ok(fs.existsSync('AGENTS.md'));
  assert.ok(fs.existsSync('DESIGN.md'));
});

test('answer-engine examples are different, actionable, route-owned and honest about verification', () => {
  const paths = Object.keys(searchAnswerExamples);
  assert.ok(paths.length >= 25);
  assert.equal(paths.length, new Set(paths).size);
  const contexts = new Set<string>();
  for (const [path, example] of Object.entries(searchAnswerExamples)) {
    assert.ok(editorialProfiles[path], 'Unrecognized answer example route: ' + path);
    assert.ok(example.scenario.length > 35, path + ': weak scenario');
    assert.ok(example.action.length > 65, path + ': weak unique task');
    assert.ok(example.verify.length > 65, path + ': weak verification warning');
    assert.ok(!contexts.has(example.action), 'Copy-and-swap example: ' + path);
    contexts.add(example.action);
  }
  const rendered = renderToStaticMarkup(React.createElement(SeoGuide, {
    data: seoData['nombres-instagram'], currentPath: '/nombres-instagram',
  }));
  assert.match(rendered, /Ejemplo práctico/);
  assert.match(rendered, /maria\.lopez/);
  assert.match(rendered, /Qué comprobar/);
  assert.match(rendered, /disponibilidad real/);
});

test('new sitemap generator omits page-irrelevant, reused logo image entries', () => {
  const source = fs.readFileSync('generate-sitemap.ts', 'utf8');
  assert.doesNotMatch(source, /<image:image>|<image:loc>/);
  assert.match(source, /editorialProfiles/);
  assert.match(source, /getIndexableKeywordRecords/);
});

test('OG and Twitter/X cards reference real PNG static asset path on all public tool templates', () => {
  for (const path of ['src/app/page.tsx', 'src/app/[category]/page.tsx', 'src/app/layout.tsx']) {
    const source = fs.readFileSync(path, 'utf8');
    assert.match(source, /opengraph-image\.png/, path);
    assert.doesNotMatch(source, /opengraph-image'|opengraph-image"/, path);
    assert.match(source, /twitter:/);
  }
  const audit = fs.readFileSync('scripts/seo-geo-release-audit.ts', 'utf8');
  for (const term of ['og:image', 'twitter:image', 'opengraph-image.png', 'editorial.summary', 'robots.txt', 'sitemap.xml']) {
    assert.ok(audit.includes(term), 'Audit is missing ' + term);
  }
  const build = fs.readFileSync('scripts/build.js', 'utf8');
  assert.ok(build.includes('seo-geo-release-audit.ts'));
});

test('optional llms metadata is not positioned as Google Search requirement or a replacement for sources', () => {
  const contents = fs.readFileSync('public/llms.txt', 'utf8');
  assert.match(contents, /optional interoperability/i);
  assert.match(contents, /not.*required for Google Search/i);
  assert.match(contents, /editorial|meaning|etymolog/i);
  assert.match(contents, /https:\/\/generadordenombres\.net\/sitemap.xml/);
});
