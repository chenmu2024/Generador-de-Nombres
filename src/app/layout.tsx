import type { Metadata, Viewport } from 'next';
import '../index.css';
import MainLayout from '../layouts/MainLayout';
import ConsentAnalytics from '../components/ConsentAnalytics';

export const viewport: Viewport = {
  themeColor: '#F6F7FB',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://generadordenombres.net'),
  title: 'Generador de Nombres, Apodos y Símbolos para Juegos | GDN',
  description: 'El mejor generador y creador de nombres, apodos y símbolos para Free Fire, Roblox, Instagram y más.',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon.png', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#F6F7FB] text-slate-900 antialiased selection:bg-violet-200 selection:text-violet-900">
        <MainLayout>{children}</MainLayout>
        <ConsentAnalytics />
      </body>
    </html>
  );
}
