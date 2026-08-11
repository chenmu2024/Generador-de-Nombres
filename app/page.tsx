import type { Metadata } from 'next';
import CategoryPage from '@/src/views/CategoryPage';
import { seoData } from '@/src/data/seoData';

export const metadata: Metadata = {
  title: seoData.home?.title || 'Generador de Nombres para Free Fire, Mujer y Mascotas | GDN',
  description: seoData.home?.metaDescription || 'El mejor creador de nombres para free fire, juegos, bebés y mascotas. Copia símbolos y letras raras en 1 clic.',
  keywords: seoData.home?.keywords || 'generador de nombres, creador de nombres, simbolos',
  openGraph: {
    title: seoData.home?.title,
    description: seoData.home?.metaDescription,
    url: 'https://generadordenombres.net/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://generadordenombres.net/',
  },
};

export default function HomePage() {
  return <CategoryPage />;
}
