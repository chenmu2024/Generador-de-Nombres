import type { CategoryData } from '../data/seoData';
import { editorialProfiles } from '../data/editorialProfiles';

export function pageStructuredData(data: CategoryData) {
  const url = `https://generadordenombres.net${data.path === '/' ? '/' : data.path}`;
  const site = 'https://generadordenombres.net/';
  const profile = editorialProfiles[data.path];
  const page = {
    '@type': 'WebPage', '@id': `${url}#webpage`, url, name: data.h1,
    description: profile.summary, inLanguage: 'es', dateModified: profile.updated,
    isPartOf: { '@id': `${site}#website` }, publisher: { '@id': `${site}#organization` },
    mainEntity: { '@id': `${url}#application` },
    ...(data.path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(data.faqs?.length ? { hasPart: { '@id': `${url}#faq` } } : {}),
  };
  const graph: object[] = [page, {
    '@type': 'WebApplication', '@id': `${url}#application`, name: data.h1, url,
    description: profile.summary, inLanguage: 'es', applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web browser', publisher: { '@id': `${site}#organization` },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }];
  if (data.path !== '/') graph.push({
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: site },
      { '@type': 'ListItem', position: 2, name: data.h1, item: url },
    ],
  });
  if (data.faqs?.length) graph.push({
    '@type': 'FAQPage', '@id': `${url}#faq`, isPartOf: { '@id': `${url}#webpage` },
    mainEntity: data.faqs.map(faq => ({ '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
