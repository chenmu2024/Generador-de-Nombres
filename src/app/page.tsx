import { Suspense } from 'react';
import type { Metadata } from 'next';
import CategoryPage from '../views/CategoryPage';
import SeoGuide from '../components/SeoGuide';
import { seoData } from '../data/seoData';

export const metadata: Metadata = {
  title: seoData.home?.title || 'Generador de Nombres para Free Fire, Mujer y Mascotas | GDN',
  description: seoData.home?.metaDescription || 'El mejor creador de nombres para free fire, juegos, bebés y mascotas. Copia símbolos y letras raras en 1 clic.',
  keywords: seoData.home?.keywords || 'generador de nombres, creador de nombres, simbolos',
  openGraph: {
    title: seoData.home?.title,
    description: seoData.home?.metaDescription,
    url: 'https://generadordenombres.net/',
    type: 'website',
    images: [
      {
        url: 'https://generadordenombres.net/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'GeneradorDeNombres Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://generadordenombres.net/',
  },
};

export default function HomePage() {
  const homeData = seoData.home;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GeneradorDeNombres.net',
    url: 'https://generadordenombres.net/',
    description: homeData?.metaDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://generadordenombres.net/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = homeData?.faqs && homeData.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeData.faqs.map((faq) => ({
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
    name: homeData?.h1 || 'Generador de Nombres',
    url: 'https://generadordenombres.net/',
    description: homeData?.metaDescription,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
        <CategoryPage
          initialPath="/"
          data={{
            h1: homeData.h1,
            subtitle: homeData.subtitle,
            defaultName: homeData.defaultName,
            customSymbols: homeData.customSymbols,
            hasFaq: Boolean(homeData.faqs?.length),
          }}
        >
          <SeoGuide data={homeData} currentPath="/" />
        </CategoryPage>
      </Suspense>
    </>
  );
}
