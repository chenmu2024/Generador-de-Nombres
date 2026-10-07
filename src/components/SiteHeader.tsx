import { navGroups } from '../data/navigation';
import FavoritesIsland from './FavoritesIsland';
import SearchIsland from './SearchIsland';
import MobileMenuIsland from './MobileMenuIsland';

export default function SiteHeader() {
  return (
    <header className="gdn-header backdrop-blur-xl border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <a href="/" aria-label="GeneradorDeNombres.net - Página de Inicio" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative p-1.5 bg-zinc-900 border border-white/10 rounded-xl shadow-lg shadow-violet-500/20 group-hover:border-violet-500/50 group-hover:shadow-violet-500/40 transition-all overflow-hidden">
              <img src="/favicon.svg" alt="GeneradorDeNombres Logo" width={24} height={24} loading="eager" fetchPriority="high" decoding="async" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-lg font-extrabold font-heading tracking-tight text-white hidden sm:inline">
              GeneradorDeNombres<span className="text-violet-400">.net</span>
            </span>
          </a>

          <nav className="gdn-nav hidden xl:flex items-center gap-1 p-1 border" aria-label="Navegación principal">
            <a href="/" className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5">Inicio</a>
            {navGroups.map(group => (
              <details key={group.title} className="relative group">
                <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5">
                  <span aria-hidden="true">{group.icon}</span>
                  <span>{group.title}</span>
                  <span aria-hidden="true" className="text-zinc-500 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="gdn-surface border rounded-2xl p-2 backdrop-blur-2xl max-h-[min(72vh,560px)] overflow-y-auto overscroll-contain">
                    {group.links.map(link => (
                      <a key={link.path} href={link.path} className="block px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-zinc-300 hover:text-white transition-all">
                        <div className="text-sm font-bold">{link.label}</div>
                        <div className="text-[11px] text-zinc-400">{link.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <FavoritesIsland />
            <SearchIsland />
            <MobileMenuIsland />
          </div>
        </div>
      </div>
    </header>
  );
}
