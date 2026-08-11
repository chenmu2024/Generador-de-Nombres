import type { Metadata, Viewport } from 'next';
import '@/src/index.css';
import MainLayout from '@/src/layouts/MainLayout';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://generadordenombres.net'),
  title: 'Generador de Nombres, Apodos y Símbolos | GeneradorDeNombres.net',
  description: 'El mejor generador y creador de nombres, apodos y símbolos para Free Fire, Roblox, Instagram y más.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/assets/logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
