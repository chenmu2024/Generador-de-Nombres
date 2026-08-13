import type { Metadata, Viewport } from 'next';
import '../index.css';
import MainLayout from '../layouts/MainLayout';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://generadordenombres.net'),
  title: 'Generador de Nombres, Apodos y Símbolos | GeneradorDeNombres.net',
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
    <html lang="es" className="dark">
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
