import { Suspense } from 'react';
import type { Metadata } from 'next';
import CategoryPage from '../views/CategoryPage';
import SeoGuide from '../components/SeoGuide';
import { seoData } from '../data/seoData';
import { pageStructuredData, serializeStructuredData } from '../utils/structuredData';

export const metadata: Metadata = {
  title: seoData.home?.title || 'Generador de Nombres para Free Fire, Mujer y Mascotas | GDN',
  description: seoData.home?.metaDescription || 'El mejor creador de nombres para free fire, juegos, bebés y mascotas. Copia símbolos y letras raras en 1 clic.',
  keywords: seoData.home?.keywords || 'generador de nombres, creador de nombres, simbolos',
  openGraph: {
    title: seoData.home?.title,
    description: seoData.home?.metaDescription,
    url: 'https://generadordenombres.net/',
    type: 'website',
    siteName: 'GeneradorDeNombres.net',
    locale: 'es_ES',
    images: [
      {
        url: 'https://generadordenombres.net/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'GeneradorDeNombres Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://generadordenombres.net/',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home?.title,
    description: seoData.home?.metaDescription,
    images: ['https://generadordenombres.net/opengraph-image.png'],
  },
};

export default function HomePage() {
  const homeData = seoData.home;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(pageStructuredData(homeData)) }} />
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
