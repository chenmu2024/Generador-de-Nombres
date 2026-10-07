import type { Metadata, Viewport } from 'next';
import '../index.css';
import MainLayout from '../layouts/MainLayout';
import ConsentAnalytics from '../components/ConsentAnalytics';
import { publisher } from '../data/editorialProfiles';
import { serializeStructuredData } from '../utils/structuredData';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://generadordenombres.net'),
  title: 'Generador de Nombres, Apodos y Símbolos para Juegos | GDN',
  description: 'Herramientas para crear y comparar nombres, apodos y símbolos Unicode para juegos, redes sociales, personas y mascotas.',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon.png', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }
  ],
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'GeneradorDeNombres.net',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'GeneradorDeNombres.net: herramientas y nombres en español' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData({ '@context': 'https://schema.org', '@graph': [publisher, { '@type': 'WebSite', '@id': 'https://generadordenombres.net/#website', url: 'https://generadordenombres.net/', name: 'GeneradorDeNombres.net', inLanguage: 'es', publisher: { '@id': publisher['@id'] } }] }) }} />
        <MainLayout>{children}</MainLayout>
        <ConsentAnalytics />
      </body>
    </html>
  );
}
