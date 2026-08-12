import { Suspense } from 'react';
import type { Metadata } from 'next';
import CategoryPage from '../views/CategoryPage';
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
        url: 'https://generadordenombres.net/logo.webp',
        width: 512,
        height: 512,
        alt: 'GeneradorDeNombres Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://generadordenombres.net/',
  },
};

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <CategoryPage />
    </Suspense>
  );
}
