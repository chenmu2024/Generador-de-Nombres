'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navGroups } from '../data/navigation';
import { Link } from './Link';
import { useLocation } from '../utils/router';
import { useDialog } from './useDialog';

export default function MobileMenuIsland() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useDialog(isOpen, () => setIsOpen(false));

  return (
    <>
      <button
        type="button"
        className="xl:hidden min-w-11 min-h-11 p-2 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => setIsOpen(open => !open)}
        aria-label={isOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
        aria-expanded={isOpen}
        aria-controls="mobile-primary-navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          id="mobile-primary-navigation"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          tabIndex={-1}
          className="fixed left-0 right-0 top-16 z-50 xl:hidden border-t gdn-header max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain"
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-2.5 rounded-xl text-base font-bold ${location.pathname === '/' ? 'bg-white/10 text-white' : 'text-zinc-400'}`}>
              🏠 Inicio
            </Link>
            {navGroups.map(group => (
              <div key={group.title} className="space-y-1">
                <div className="px-4 text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
                  <span aria-hidden="true">{group.icon}</span>
                  <span>{group.title}</span>
                </div>
                <div className="grid grid-cols-1 gap-1 pt-1 pl-2">
                  {group.links.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${location.pathname === link.path ? 'bg-violet-600/20 text-violet-300 font-bold' : 'text-zinc-300 hover:bg-white/5'}`}
                    >
                      <span className="min-w-0">{link.label}</span>
                      <span className="hidden sm:block text-[10px] text-zinc-500 text-right max-w-[55%] leading-tight">{link.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
