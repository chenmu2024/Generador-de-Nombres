'use client';

import React, { useState, useEffect, useRef } from 'react';
import { readStorage, writeStorage } from '../utils/browserStorage';

import { Link } from './Link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reopen = () => { setIsVisible(true); requestAnimationFrame(() => bannerRef.current?.scrollIntoView({ block: "center" })); };
    window.addEventListener('gdn-privacy-settings', reopen);
    const consent = readStorage('cookie_consent_choice');
    if (!consent) {
      setIsVisible(true);
    }
    return () => window.removeEventListener('gdn-privacy-settings', reopen);
  }, []);

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
    <div ref={bannerRef} role="region" aria-label="Preferencias de privacidad"
      className="gdn-surface relative mx-4 my-4 md:mx-auto md:max-w-2xl z-50 backdrop-blur-xl border rounded-2xl p-4 text-zinc-300 text-xs sm:text-sm space-y-3 animate-in fade-in slide-in-from-bottom-5 duration-300 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
          <span>Aviso de Cookies y Privacidad</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-zinc-400 text-xs leading-relaxed">
        Usamos almacenamiento local para recordar tu elección. Las herramientas opcionales de analítica de rendimiento solo se cargan cuando eliges “Aceptar Todas”. Puedes consultar nuestra{' '}
        <Link to="/politica-de-privacidad" className="text-violet-400 underline hover:text-violet-300">
          Política de Privacidad
        </Link>.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleAccept}
          className="gdn-primary-button flex-1 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors cursor-pointer"
        >
          Aceptar Todas
        </button>
        <button
          onClick={handleDecline}
          className="gdn-chip border text-zinc-300 hover:text-white font-medium py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer"
        >
          Solo Necesarias
        </button>
      </div>
    </div>
  );
}
