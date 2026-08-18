import { Suspense } from 'react';
import type { Metadata } from 'next';
import CategoryPage from '../../views/CategoryPage';
import { seoData } from '../../data/seoData';

export async function generateStaticParams() {
  return Object.values(seoData)
    .filter((data) => data.path !== '/')
    .map((data) => ({
      category: data.path.replace(/^\//, ''),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryPath = `/${resolvedParams.category}`;
  const data = Object.values(seoData).find((d) => d.path === categoryPath) || seoData[resolvedParams.category];

  const title = data?.title || 'Generador de Nombres | GeneradorDeNombres.net';
  const description = data?.metaDescription || 'El mejor generador y creador de nombres, apodos y símbolos Unicode.';
  const keywords = data?.keywords || 'generador de nombres, apodos, simbolos';

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://generadordenombres.net/${resolvedParams.category}`,
      type: 'website',
      images: [
        {
          url: 'https://generadordenombres.net/logo.webp',
          width: 512,
          height: 512,
          alt: 'GeneradorDeNombres Logo',
        },
      ],
    },
    alternates: {
      canonical: `https://generadordenombres.net/${resolvedParams.category}`,
    },
  };
}

export default async function DynamicCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categoryPath = `/${resolvedParams.category}`;
  const data = Object.values(seoData).find((d) => d.path === categoryPath) || seoData[resolvedParams.category];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://generadordenombres.net/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data?.h1 || data?.title || resolvedParams.category,
        item: `https://generadordenombres.net/${resolvedParams.category}`,
      },
    ],
  };

  const faqSchema = data?.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: data?.h1 || data?.title || 'Generador de Nombres',
    url: `https://generadordenombres.net/${resolvedParams.category}`,
    description: data?.metaDescription || 'Generador de nombres, letras bonitas y apodos con símbolos Unicode.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
        <CategoryPage initialPath={categoryPath} />
      </Suspense>
    </>
  );
}
