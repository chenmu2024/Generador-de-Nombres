import { seoData } from './src/data/seoData';
import { getIndexableKeywordRecords } from './src/data/keywordMaster';
import fs from 'fs';

const baseUrl = 'https://generadordenombres.net';
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'daily', title: 'Generador de Nombres, Apodos y Símbolos' },
  { path: '/sobre-nosotros', priority: '0.4', changefreq: 'monthly', title: 'Sobre Nosotros y Misión' },
  { path: '/politica-de-privacidad', priority: '0.3', changefreq: 'monthly', title: 'Política de Privacidad' },
  { path: '/terminos-y-condiciones', priority: '0.3', changefreq: 'monthly', title: 'Términos y Condiciones' },
  { path: '/contacto', priority: '0.5', changefreq: 'monthly', title: 'Contacto y Soporte Editorial' }
];

const seoByPath = new Map(
  Object.values(seoData).map((data) => [data.path, data] as const),
);

const seoPaths = getIndexableKeywordRecords()
  .filter((record) => record.targetUrl !== '/')
  .map((record) => {
    const data = seoByPath.get(record.targetUrl);

    if (!data) {
      throw new Error(
        `[SEO] VERIFIED Keyword Master route missing from seoData: ${record.targetUrl}`,
      );
    }

    return {
      path: record.targetUrl,
      priority: '0.8',
      changefreq: 'weekly',
      title: data.h1 || data.title,
    };
  });

const allPages = [...staticPages, ...seoPaths];

const urls = allPages.map((item) => {
  const loc = item.path === '/' ? baseUrl + '/' : baseUrl + item.path;
  const imageXml = `
    <image:image>
      <image:loc>${baseUrl}/logo.webp</image:loc>
      <image:title>${item.title.replace(/&/g, '&amp;')}</image:title>
    </image:image>`;

  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>${imageXml}
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(
  `[SEO] sitemap.xml updated with ${allPages.length} URLs; only VERIFIED/indexable keyword pages included.`,
);
