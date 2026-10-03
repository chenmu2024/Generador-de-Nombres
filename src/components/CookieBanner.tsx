'use client';

import React, { useState, useEffect, useRef } from 'react';
import { readStorage, writeStorage } from '../utils/browserStorage';

import { Link } from './Link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const focusBanner = () => requestAnimationFrame(() => bannerRef.current?.focus({ preventScroll: true }));
    const reopen = () => { setIsVisible(true); focusBanner(); };
    window.addEventListener('gdn-privacy-settings', reopen);
    const consent = readStorage('cookie_consent_choice');
    if (!consent) {
      setIsVisible(true);
      focusBanner();
    }
    return () => window.removeEventListener('gdn-privacy-settings', reopen);
  }, []);

  useEffect(() => {
    if (!isVisible || !bannerRef.current) return;
    const banner = bannerRef.current;
    const resize = () => setBannerHeight(banner.offsetHeight);
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(banner);
    return () => observer.disconnect();
  }, [isVisible]);

  const handleAccept = () => {
    writeStorage('cookie_consent_choice', 'accepted');
    window.dispatchEvent(new Event('cookie-consent-change'));
    setIsVisible(false);
  };

  const handleDecline = () => {
    writeStorage('cookie_consent_choice', 'declined');
    window.dispatchEvent(new Event('cookie-consent-change'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
    <div aria-hidden="true" style={{ height: `calc(${bannerHeight + 32}px + env(safe-area-inset-bottom))` }} />
    <div ref={bannerRef} role="region" tabIndex={-1} aria-label="Preferencias de privacidad"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      className="gdn-surface fixed inset-x-4 mx-auto max-w-5xl z-50 backdrop-blur-xl border rounded-2xl p-3 sm:p-4 text-zinc-300 text-xs space-y-2 max-h-[calc(100dvh-2rem)] overflow-y-auto"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
          <span>Aviso de Cookies y Privacidad</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-zinc-400 hover:text-white min-h-11 min-w-11 p-3 -my-2 -mr-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <p className="text-zinc-400 text-xs leading-relaxed flex-1">
        Guardamos tu elección en este dispositivo. La analítica opcional solo se carga si eliges “Aceptar Todas”. Consulta nuestra{' '}
        <Link to="/politica-de-privacidad" className="text-violet-400 underline hover:text-violet-300">
          Política de Privacidad
        </Link>.
      </p>

      <div className="flex items-center gap-2 sm:shrink-0">
        <button
          onClick={handleAccept}
          className="gdn-primary-button flex-1 min-h-11 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors cursor-pointer"
        >
          Aceptar Todas
        </button>
        <button
          onClick={handleDecline}
          className="gdn-chip border min-h-11 text-zinc-300 hover:text-white font-medium py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer"
        >
          Solo Necesarias
        </button>
      </div>
      </div>
    </div>
    </>
  );
}

