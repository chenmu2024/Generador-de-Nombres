import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { seoData } from '../src/data/seoData';
import { editorialProfiles } from '../src/data/editorialProfiles';
import { pageStructuredData, serializeStructuredData } from '../src/utils/structuredData';
import SeoGuide from '../src/components/SeoGuide';
import AboutUs from '../src/views/AboutUs';

test('every indexable tool has distinct visible summary and a stable valid review date', () => {
  const summaries = new Set<string>();
  for (const data of Object.values(seoData)) {
    const profile = editorialProfiles[data.path];
    assert.ok(profile, data.path);
    assert.ok(profile.summary.length > 50, data.path);
    assert.ok(profile.focus.length > 30, data.path);
    assert.match(profile.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(profile.updated).toISOString().slice(0, 10), profile.updated);
    const html = renderToStaticMarkup(React.createElement(SeoGuide, { data, currentPath: data.path }));
    assert.ok(html.includes(profile.summary), data.path);
    assert.ok(html.includes(`dateTime="${profile.updated}"`), data.path);
    assert.doesNotMatch(html, /itemScope|itemType|itemProp/);
    if (data.seoText.includes('<div class="overflow-x-auto')) assert.match(html, /tabindex="0" role="region" aria-label="Tabla comparativa/);
    summaries.add(profile.summary);
  }
  assert.equal(summaries.size, Object.values(seoData).length);
});

test('one page graph connects visible FAQs, breadcrumbs and stable publisher identity', () => {
  for (const data of Object.values(seoData)) {
    const graph = pageStructuredData(data)['@graph'] as Record<string, any>[];
    const page = graph.find(node => node['@type'] === 'WebPage');
    assert.equal(page?.dateModified, editorialProfiles[data.path].updated);
    assert.equal(page?.publisher['@id'], 'https://generadordenombres.net/#organization');
    assert.equal(graph.filter(node => node['@type'] === 'BreadcrumbList').length, data.path === '/' ? 0 : 1);
    const faqs = graph.filter(node => node['@type'] === 'FAQPage');
    assert.equal(faqs.length, data.faqs?.length ? 1 : 0);
    if (faqs.length) assert.deepEqual(faqs[0].mainEntity.map((question: any) => ({ question: question.name, answer: question.acceptedAnswer.text })), data.faqs);
    assert.doesNotMatch(serializeStructuredData(pageStructuredData(data)), /SearchAction|aggregateRating/);
  }
});

test('JSON-LD cannot terminate its containing script with user-visible text', () => {
  const value = { description: '</script><script>alert(1)</script>' };
  const serialized = serializeStructuredData(value);
  assert.doesNotMatch(serialized, /</);
  assert.deepEqual(JSON.parse(serialized), value);
});

test('editorial methodology anchor exists and claims reflect actual product limitations', () => {
  const html = renderToStaticMarkup(React.createElement(AboutUs));
  assert.match(html, /id="metodologia"/);
  assert.match(html, /Pendiente de verificación/);
  assert.match(html, /almacenamiento local/);
  assert.doesNotMatch(html, /semanalmente|Mapeo exhaustivo|Sincronización con las actualizaciones/);
  assert.doesNotMatch(fs.readFileSync('src/app/layout.tsx', 'utf8'), /SearchAction/);
});
