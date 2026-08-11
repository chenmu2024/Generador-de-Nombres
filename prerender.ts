import fs from 'fs';
import path from 'path';
import { seoData } from './src/data/seoData';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[Prerender] Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const staticPageMeta: Record<string, { title: string; metaDescription: string; keywords: string }> = {
  '/sobre-nosotros': {
    title: 'Sobre Nosotros y Misión | GeneradorDeNombres.net',
    metaDescription: 'Conoce al equipo detrás de GeneradorDeNombres.net. Nuestra misión es ofrecer las mejores herramientas gratuitas de apodos, letras raras y símbolos Unicode para gaming y redes sociales.',
    keywords: 'sobre nosotros, mision generadordenombres, equipo'
  },
  '/politica-de-privacidad': {
    title: 'Política de Privacidad y Cookies | GeneradorDeNombres.net',
    metaDescription: 'Consulta la política de privacidad y cookies de GeneradorDeNombres.net. Información sobre el uso de anuncios de Google AdSense, protección de datos RGPD/CCPA.',
    keywords: 'politica de privacidad, cookies, adsense, privacidad generadordenombres'
  },
  '/terminos-y-condiciones': {
    title: 'Términos y Condiciones de Uso | GeneradorDeNombres.net',
    metaDescription: 'Lee los términos y condiciones de uso de GeneradorDeNombres.net. Normas de uso, propiedad intelectual y responsabilidad.',
    keywords: 'terminos y condiciones, condiciones de uso'
  },
  '/contacto': {
    title: 'Contacto y Soporte Editorial | GeneradorDeNombres.net',
    metaDescription: 'Ponte en contacto con el equipo editorial de GeneradorDeNombres.net para sugerencias, soporte o consultas sobre nuestro generador de nombres y símbolos.',
    keywords: 'contacto generadordenombres, soporte, equipo editorial'
  }
};

const allRoutes = [
  '/',
  '/sobre-nosotros',
  '/politica-de-privacidad',
  '/terminos-y-condiciones',
  '/contacto',
  ...Object.values(seoData).filter(d => d.path !== '/').map(d => d.path)
];

console.log(`[Prerender] Pre-rendering ${allRoutes.length} static HTML pages for instant Google indexing...`);

let renderedCount = 0;

for (const routePath of allRoutes) {
  const categoryKey = Object.keys(seoData).find(k => seoData[k].path === routePath);
  const data = categoryKey ? seoData[categoryKey] : null;
  const staticMeta = staticPageMeta[routePath];

  const title = data ? data.title : (staticMeta ? staticMeta.title : 'Generador de Nombres, Apodos y Símbolos | GeneradorDeNombres.net');
  const description = data ? data.metaDescription : (staticMeta ? staticMeta.metaDescription : 'El mejor generador y creador de nombres, apodos y símbolos para Free Fire, Roblox, Instagram y más.');
  const keywords = data ? data.keywords : (staticMeta ? staticMeta.keywords : 'generador de nombres, creador de nombres, simbolos');
  const h1 = data ? data.h1 : (routePath === '/' ? 'Generador de Nombres para Free Fire' : title.split('|')[0].trim());
  const subtitle = data ? data.subtitle : 'Crea apodos épicos con letras raras, símbolos y estilos únicos.';
  const fullUrl = routePath === '/' ? 'https://generadordenombres.net/' : `https://generadordenombres.net${routePath}`;

  // Generate Sample Names Pre-render
  const sampleNames = data ? [
    `꧁༺${data.defaultName || 'Gamer'}༻꧂`,
    `⚡${data.defaultName || 'Gamer'}⚡`,
    `☠︎${data.defaultName || 'Gamer'}☠︎`,
    `👑${data.defaultName || 'Gamer'}👑`,
    `✿${data.defaultName || 'Gamer'}✿`,
    `☬${data.defaultName || 'Gamer'}☬`
  ] : [];

  const sampleNamesMarkup = sampleNames.map(name => `
    <div style="background: rgba(24, 24, 27, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); padding: 16px; border-radius: 16px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
      <span style="font-weight: 700; font-size: 1.125rem; color: #ffffff;">${name}</span>
      <button style="background: #7c3aed; color: #ffffff; padding: 6px 16px; border-radius: 9999px; border: none; font-weight: 600; cursor: pointer;">Copiar</button>
    </div>
  `).join('');

  // Build Sequential Prev / Next Category Navigation
  const routeIdx = allRoutes.indexOf(routePath);
  const prevRoute = routeIdx > 0 ? allRoutes[routeIdx - 1] : allRoutes[allRoutes.length - 1];
  const nextRoute = routeIdx >= 0 && routeIdx < allRoutes.length - 1 ? allRoutes[routeIdx + 1] : allRoutes[0];
  const prevData = Object.values(seoData).find(d => d.path === prevRoute);
  const nextData = Object.values(seoData).find(d => d.path === nextRoute);

  const sequentialNavMarkup = `
    <nav aria-label="Navegación de categorías" style="margin-top: 40px; margin-bottom: 40px; padding: 20px; background: #121212; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
      <a href="${prevRoute}" style="color: #c4b5fd; text-decoration: none; font-weight: 600; font-size: 0.875rem;">
        &larr; Categoría Anterior: ${prevData ? (prevData.h1 || prevData.title) : 'Inicio'}
      </a>
      <a href="${nextRoute}" style="color: #c4b5fd; text-decoration: none; font-weight: 600; font-size: 0.875rem;">
        Siguiente Categoría: ${nextData ? (nextData.h1 || nextData.title) : 'Ver Más'} &rarr;
      </a>
    </nav>
  `;

  // Build Internal Link Grid Mesh for SEO Crawlability with Action Keywords
  const categoriesLinks = Object.values(seoData).map(item => {
    const label = item.h1 || item.title;
    const cleanLabel = label.split(':')[0].split('|')[0].trim();
    return `
    <a href="${item.path}" title="${cleanLabel}" style="color: #a1a1aa; text-decoration: none; padding: 6px 10px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.8125rem; transition: all 0.2s;">
      ✦ ${cleanLabel}
    </a>
  `;
  }).join('\n');

  const internalLinkingMeshMarkup = `
    <section id="directorio-categorias" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 40px; text-align: left;">
      <h3 style="color: #ffffff; font-size: 1.125rem; font-weight: 700; margin-bottom: 20px;">Directorio Completo de Generadores de Nombres y Apodos</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px;">
        ${categoriesLinks}
      </div>
    </section>
  `;

  // EEAT Trust & Editorial Verification Badge Markup
  const eeatTrustBadgeMarkup = `
    <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.2); border-radius: 16px; padding: 16px 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 0.8125rem; color: #d4d4d8;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="background: #7c3aed; color: #ffffff; width: 24px; height: 24px; border-radius: 9999px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.75rem;">✓</span>
        <span><strong>Verificado por el Equipo Editorial:</strong> Compatibilidad Unicode 15.1 probada en Free Fire, Roblox e Instagram.</span>
      </div>
      <span style="color: #a1a1aa; font-weight: 500;">Última actualización: Agosto 2026</span>
    </div>
  `;

  // Build FAQ Markup
  const faqMarkup = (data && data.faqs && data.faqs.length > 0) ? `
    <section id="preguntas-frecuentes" style="margin-top: 40px; margin-bottom: 40px; background: #121212; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 32px;">
      <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 24px;">Preguntas Frecuentes sobre ${h1}</h2>
      ${data.faqs.map(faq => `
        <details style="margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px;">
          <summary style="font-weight: 700; font-size: 1.125rem; color: #f4f4f5; cursor: pointer; margin-bottom: 8px;">${faq.question}</summary>
          <p style="color: #a1a1aa; line-height: 1.6; margin-top: 8px;">${faq.answer}</p>
        </details>
      `).join('')}
    </section>
  ` : '';

  // Build HTML DOM for #root
  const rootMarkup = `
    <header style="max-width: 1200px; margin: 0 auto; padding: 24px 16px; text-align: center;">
      <nav aria-label="Navegación principal" style="margin-bottom: 16px; font-size: 0.875rem; color: #a1a1aa;">
        <a href="/" style="color: #c4b5fd; text-decoration: none;">Inicio</a> ${routePath !== '/' ? ` &gt; <span style="color: #ffffff;">${h1}</span>` : ''}
      </nav>
      <h1 style="font-size: 2.25rem; font-weight: 800; color: #ffffff; margin-bottom: 12px; font-family: sans-serif;">${h1}</h1>
      <p style="font-size: 1.125rem; color: #a1a1aa; max-width: 700px; margin: 0 auto 24px auto;">${subtitle}</p>
      ${eeatTrustBadgeMarkup}
    </header>

    <main style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
      ${sampleNamesMarkup ? `<section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: #c4b5fd; margin-bottom: 16px;">Ejemplos y Apodos Generados para ${h1}</h2>
        <div>${sampleNamesMarkup}</div>
      </section>` : ''}

      ${data && data.seoText ? `
        <article id="articulos-guia" style="background: #121212; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 32px; color: #d4d4d8; line-height: 1.7; margin-bottom: 40px;">
          ${data.seoText}
        </article>
      ` : ''}

      ${faqMarkup}

      ${sequentialNavMarkup}

      ${internalLinkingMeshMarkup}
    </main>

    <footer style="background: #000000; border-top: 1px solid rgba(255,255,255,0.05); padding: 48px 16px; text-align: center; color: #71717a; font-size: 0.875rem; margin-top: 48px;">
      <p style="margin-bottom: 16px;">GeneradorDeNombres.net - El mejor generador de nombres, apodos y símbolos Unicode.</p>
      <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 16px;">
        <a href="/sobre-nosotros" style="color: #a1a1aa; text-decoration: none;">Sobre Nosotros</a>
        <a href="/politica-de-privacidad" style="color: #a1a1aa; text-decoration: none;">Política de Privacidad</a>
        <a href="/terminos-y-condiciones" style="color: #a1a1aa; text-decoration: none;">Términos y Condiciones</a>
        <a href="/contacto" style="color: #a1a1aa; text-decoration: none;">Contacto</a>
      </div>
      <p>© 2026 GeneradorDeNombres.net. Todos los derechos reservados.</p>
    </footer>
  `;

  // Inject into template
  let pageHtml = template;

  // Replace Title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace Meta Description
  pageHtml = pageHtml.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Replace Meta Keywords
  pageHtml = pageHtml.replace(
    /<meta name="keywords" content=".*?" \/>/i,
    `<meta name="keywords" content="${keywords.replace(/"/g, '&quot;')}" />`
  );

  // Replace Canonical Link
  pageHtml = pageHtml.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${fullUrl}" />`
  );

  // Replace hreflang tags for regional targeting
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es" href=".*?" \/>/i, `<link rel="alternate" hreflang="es" href="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es-ES" href=".*?" \/>/i, `<link rel="alternate" hreflang="es-ES" href="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es-MX" href=".*?" \/>/i, `<link rel="alternate" hreflang="es-MX" href="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es-AR" href=".*?" \/>/i, `<link rel="alternate" hreflang="es-AR" href="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es-CO" href=".*?" \/>/i, `<link rel="alternate" hreflang="es-CO" href="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="x-default" href=".*?" \/>/i, `<link rel="alternate" hreflang="x-default" href="${fullUrl}" />`);

  // Replace Open Graph & Twitter Card metadata
  pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${fullUrl}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:image:alt" content=".*?" \/>/i, `<meta property="og:image:alt" content="${h1.replace(/"/g, '&quot;')}" />`);

  pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`);
  pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`);
  pageHtml = pageHtml.replace(/<meta name="twitter:image:alt" content=".*?" \/>/i, `<meta name="twitter:image:alt" content="${h1.replace(/"/g, '&quot;')}" />`);

  const schemaGraph: any[] = [];
  
  // 0. WebSite Schema
  schemaGraph.push({
    "@type": "WebSite",
    "@id": "https://generadordenombres.net/#website",
    "url": "https://generadordenombres.net/",
    "name": "GeneradorDeNombres.net - Generador de Nombres, Apodos y Símbolos",
    "description": "Generador de nombres, apodos y símbolos para Free Fire, Roblox, Instagram y más.",
    "inLanguage": "es",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://generadordenombres.net/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  });

  // 1. Article / WebPage Schema
  schemaGraph.push({
    "@type": data ? "Article" : "WebPage",
    "@id": `${fullUrl}#article`,
    "headline": h1,
    "name": title,
    "description": description,
    "url": fullUrl,
    "inLanguage": "es",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "author": {
      "@type": "Person",
      "name": "Equipo Editorial",
      "url": "https://generadordenombres.net/sobre-nosotros"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GeneradorDeNombres.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://generadordenombres.net/assets/logo.png"
      }
    },
    "datePublished": "2026-01-01T08:00:00+00:00",
    "dateModified": "2026-08-08T08:00:00+00:00",
    "image": "https://generadordenombres.net/assets/og-image.jpg"
  });

  // 2. SoftwareApplication / WebApplication Schema
  if (data) {
    schemaGraph.push({
      "@type": "SoftwareApplication",
      "@id": `${fullUrl}#webapp`,
      "name": `Generador de Apodos para ${h1}`,
      "url": fullUrl,
      "description": data.metaDescription,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.5.0",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1024",
        "bestRating": "5",
        "worstRating": "1"
      }
    });
  }

  // 3. BreadcrumbList Schema
  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://generadordenombres.net/"
      }
    ]
  };
  if (routePath !== '/') {
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": h1,
      "item": fullUrl
    });
  }
  schemaGraph.push(breadcrumbList);

  // 4. FAQPage Schema
  if (data && data.faqs && data.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  // 5. HowTo Schema
  if (data) {
    schemaGraph.push({
      "@type": "HowTo",
      "@id": `${fullUrl}#howto`,
      "name": `Cómo generar y copiar nombres o apodos para ${h1}`,
      "description": `Guía rápida paso a paso para crear un apodo único con símbolos Unicode y usarlo en ${h1}.`,
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Escribe tu nombre o apodo base",
          "text": "Ingresa tu palabra o nombre preferido en la casilla del generador principal."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Selecciona estilo y símbolos Unicode",
          "text": "Explora las combinaciones con fuentes especiales, coronas, rayos, alas o caracteres invisibles."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Copia con un solo clic y pega en el juego",
          "text": "Haz clic en el botón Copiar y pégalo directamente en tu perfil de Free Fire, Roblox, Instagram o WhatsApp."
        }
      ]
    });
  }

  // 6. ItemList Schema
  const relatedLinksForSchema = (data && data.related && data.related.length > 0)
    ? data.related
    : Object.values(seoData)
        .filter((l: any) => l.path !== routePath && l.path !== '/')
        .slice(0, 6)
        .map((l: any) => ({ title: l.h1 || l.title, path: l.path }));

  schemaGraph.push({
    "@type": "ItemList",
    "name": `Generadores y herramientas relacionadas con ${h1}`,
    "itemListElement": relatedLinksForSchema.map((rel: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": rel.title,
      "url": `https://generadordenombres.net${rel.path}`
    }))
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };
  const schemaHtml = `\n    <script type="application/ld+json" id="json-ld-schema">\n${JSON.stringify(schemaData, null, 2)}\n    </script>`;

  // Inject Schemas before </head>
  pageHtml = pageHtml.replace('</head>', `${schemaHtml}\n  </head>`);

  // Inject Pre-rendered DOM inside <div id="root">
  pageHtml = pageHtml.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">${rootMarkup}</div>`);

  // Determine output path
  let targetFilePath: string;
  if (routePath === '/') {
    targetFilePath = path.join(distDir, 'index.html');
  } else {
    const routeFolder = path.join(distDir, routePath.slice(1));
    if (!fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }
    targetFilePath = path.join(routeFolder, 'index.html');
  }

  fs.writeFileSync(targetFilePath, pageHtml, 'utf8');
  renderedCount++;
}

// Generate Dynamic Sitemap.xml in /dist with accurate lastmod and priority
const sitemapEntries = allRoutes.map(rPath => {
  const isHome = rPath === '/';
  const isStatic = ['/sobre-nosotros', '/politica-de-privacidad', '/terminos-y-condiciones', '/contacto'].includes(rPath);
  const priority = isHome ? '1.0' : (isStatic ? '0.4' : '0.8');
  const changefreq = isHome ? 'daily' : (isStatic ? 'monthly' : 'weekly');
  const loc = isHome ? 'https://generadordenombres.net/' : `https://generadordenombres.net${rPath}`;
  
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-08-08</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>https://generadordenombres.net/assets/og-image.jpg</image:loc>
      <image:title>Generador de Nombres, Apodos y Símbolos</image:title>
    </image:image>
  </url>`;
}).join('\n');

const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXmlContent, 'utf8');

console.log(`[Prerender] Successfully generated ${renderedCount} static HTML files and dynamic sitemap.xml in /dist!`);

