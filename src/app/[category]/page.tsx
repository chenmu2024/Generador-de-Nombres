import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPage from '../../views/CategoryPage';
import SeoGuide from '../../components/SeoGuide';
import { seoData } from '../../data/seoData';
import { pageStructuredData, serializeStructuredData } from '../../utils/structuredData';

export const dynamicParams = false;

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

  if (!data) {
    return {
      title: 'Página no encontrada | GDN',
      robots: { index: false, follow: false },
    };
  }

  const title = data.title;
  const description = data.metaDescription;
  const keywords = data.keywords;

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
          url: 'https://generadordenombres.net/opengraph-image',
          width: 1200,
          height: 630,
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

  if (!data) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(pageStructuredData(data)) }} />
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
        <CategoryPage
          initialPath={categoryPath}
          data={{
            h1: data.h1,
            subtitle: data.subtitle,
            defaultName: data.defaultName,
            customSymbols: data.customSymbols,
            hasFaq: Boolean(data.faqs?.length),
          }}
        >
          <SeoGuide data={data} currentPath={categoryPath} />
        </CategoryPage>
      </Suspense>
    </>
  );
}
