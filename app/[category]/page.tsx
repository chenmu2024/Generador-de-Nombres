import type { Metadata } from 'next';
import CategoryPage from '@/src/views/CategoryPage';
import { seoData } from '@/src/data/seoData';

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

  return {
    title: data?.title || 'Generador de Nombres | GeneradorDeNombres.net',
    description: data?.metaDescription || 'El mejor generador y creador de nombres, apodos y símbolos Unicode.',
    keywords: data?.keywords || 'generador de nombres, apodos, simbolos',
    openGraph: {
      title: data?.title,
      description: data?.metaDescription,
      url: `https://generadordenombres.net/${resolvedParams.category}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://generadordenombres.net/${resolvedParams.category}`,
    },
  };
}

export default function DynamicCategoryPage() {
  return <CategoryPage />;
}
