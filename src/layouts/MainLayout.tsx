import type { ReactNode } from 'react';
import SiteHeaderClient from '../components/SiteHeaderClient';
import SiteFooter from '../components/SiteFooter';
import CookieBanner from '../components/CookieBanner';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="gdn-shell min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-violet-500/30">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:p-4 focus:bg-zinc-900">Saltar al contenido</a>
      <SiteHeaderClient />
      <main id="main-content" tabIndex={-1} className="flex-grow min-h-screen">
        {children}
      </main>
      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
