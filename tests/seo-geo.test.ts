import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { seoData } from '../src/data/seoData';
import { editorialProfiles } from '../src/data/editorialProfiles';
import { pageStructuredData, serializeStructuredData } from '../src/utils/structuredData';
import { getKeywordRecord } from '../src/data/keywordMaster';
import { getBreadcrumbTrail } from '../src/data/topicClusters';
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
    const intent = getKeywordRecord(data.path)?.intent ?? 'mixed';
    const expectedPageType = intent === 'tool' ? 'WebPage' : 'CollectionPage';
    const page = graph.find(node => node['@type'] === expectedPageType);
    assert.equal(page?.dateModified, editorialProfiles[data.path].updated);
    assert.equal(page?.publisher['@id'], 'https://generadordenombres.net/#organization');
    assert.equal(graph.filter(node => node['@type'] === 'WebApplication').length, intent === 'directory' || intent === 'list' ? 0 : 1);
    const breadcrumbs = graph.filter(node => node['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumbs.length, data.path === '/' ? 0 : 1);
    if (breadcrumbs.length) {
      assert.deepEqual(
        breadcrumbs[0].itemListElement.map((item: any) => item.name),
        getBreadcrumbTrail(data.path, data.h1).map(item => item.name),
      );
    }
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


function visibleWordCount(html: string) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-zA-Z0-9#]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .length;
}

test('every indexable SEO page has substantive visible copy and thin pages have FAQs', () => {
  for (const data of Object.values(seoData)) {
    const words = visibleWordCount(data.seoText);
    assert.ok(words >= 150, `${data.path}: only ${words} visible words in seoText`);
    if (words < 250) {
      assert.ok((data.faqs?.length ?? 0) >= 3, `${data.path}: short copy needs at least 3 distinct FAQs`);
    }
  }
});

test('Free Fire pages keep distinct intent and avoid unsupported exclusivity or stale fixed rules', () => {
  const guide = seoData['nombres-free-fire'];
  const generator = seoData['generador-free-fire'];
  const unique = seoData['nombres-ff-unicos'];
  const women = seoData['nombres-ff-mujeres'];
  const clans = seoData['nombres-clanes-ff'];

  assert.match(guide.seoText, /href="\/generador-free-fire"/);
  assert.match(generator.seoText, /href="\/nombres-free-fire"/);
  assert.match(generator.seoText, /punto de partida es tu propio texto/);
  assert.doesNotMatch(women.metaDescription, /que nadie tenga/i);
  assert.doesNotMatch(unique.subtitle, /no están en uso/i);
  assert.doesNotMatch(unique.seoText, /verdaderamente nadie tenga|Fórmula Infalible/i);
  assert.doesNotMatch(clans.seoText, /5,000 Monedas|1,000 Diamantes|Máximo 12 caracteres|Reglas y Costos Oficiales/i);
});

test('creative plushie adoption copy never presents the generated card as official', () => {
  const plushies = seoData['nombres-peluches'];
  assert.doesNotMatch(plushies.subtitle + plushies.seoText, /acta oficial|Ficha Oficial|Promesa de Adopción Oficial|se convierte oficialmente/i);
});


test('editorial copy avoids unsupported rankings, dated template headings and authority language', () => {
  const riskyHeading = /Los Mejores|\b2026\b|Tendencias|Reglas Oficiales|Significado Profundo|pronunciación auténtica/i;
  const riskySummary = /\blos mejores\b|acta oficial|pronunciación auténtica|marca comercial ganadora|máxima confianza/i;

  for (const data of Object.values(seoData)) {
    const headings = Array.from(data.seoText.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g), match => match[1].replace(/<[^>]+>/g, ' '));
    for (const heading of headings) {
      assert.doesNotMatch(heading, riskyHeading, `${data.path}: risky heading "${heading}"`);
    }

    const nonLockedCopy = [
      data.subtitle,
      data.metaDescription,
      ...(data.faqs ?? []).flatMap(item => [item.question, item.answer]),
    ].join(' ');
    assert.doesNotMatch(nonLockedCopy, riskySummary, data.path);
    assert.doesNotMatch(nonLockedCopy, /\b2026\b/, `${data.path}: stale year in non-locked copy`);
  }
});

test('sensitive cultural and pet pages state their limitations instead of implying authenticity or popularity', () => {
  const korean = seoData['nombres-coreanos'].subtitle + seoData['nombres-coreanos'].seoText + JSON.stringify(seoData['nombres-coreanos'].faqs);
  const maleCats = seoData['nombres-gatos-machos'].seoText;
  const shops = seoData['nombres-para-tiendas'].seoText + JSON.stringify(seoData['nombres-para-tiendas'].faqs);

  assert.doesNotMatch(korean, /identificadores auténticos|nicks auténticos|pronunciación auténtica/i);
  assert.doesNotMatch(maleCats, /nombres líderes|más populares en español|adiestramiento para que/i);
  assert.doesNotMatch(shops, /calidad garantizada|marca comercial ganadora|máxima confianza/i);
});
