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

export default function DynamicCategoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <CategoryPage />
    </Suspense>
  );
}
