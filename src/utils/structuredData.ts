import type { CategoryData } from '../data/seoData';
import { editorialProfiles } from '../data/editorialProfiles';
import { getKeywordRecord } from '../data/keywordMaster';
import { getBreadcrumbTrail } from '../data/topicClusters';

export function pageStructuredData(data: CategoryData) {
  const url = `https://generadordenombres.net${data.path === '/' ? '/' : data.path}`;
  const site = 'https://generadordenombres.net/';
  const profile = editorialProfiles[data.path];
  const intent = getKeywordRecord(data.path)?.intent ?? 'mixed';
  const pageType = intent === 'tool' ? 'WebPage' : 'CollectionPage';
  const applicationId = `${url}#application`;
  const breadcrumbItems = getBreadcrumbTrail(data.path, data.h1);
  const hasApplication = intent === 'tool' || intent === 'mixed';

  const page = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: data.h1,
    description: profile.summary,
    inLanguage: 'es',
    dateModified: profile.updated,
    isPartOf: { '@id': `${site}#website` },
    publisher: { '@id': `${site}#organization` },
    ...(hasApplication ? { mainEntity: { '@id': applicationId } } : {}),
    ...(data.path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(data.faqs?.length ? { hasPart: { '@id': `${url}#faq` } } : {}),
  };

  const graph: object[] = [page];

  if (hasApplication) {
    graph.push({
      '@type': 'WebApplication',
      '@id': applicationId,
      name: data.h1,
      url,
      description: profile.summary,
      inLanguage: 'es',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web browser',
      publisher: { '@id': `${site}#organization` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    });
  }

  if (data.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.path === '/' ? site : `https://generadordenombres.net${item.path}`,
      })),
    });
  }

  if (data.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': `${url}#webpage` },
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
