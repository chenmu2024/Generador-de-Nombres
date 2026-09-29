'use client';

import React, { useState, useEffect } from 'react';
import { Link } from './Link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_choice');
    if (!consent) {
      // Delay display until page initial load & performance audits complete
      const timer = setTimeout(() => setIsVisible(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_choice', 'accepted');
    window.dispatchEvent(new Event('cookie-consent-change'));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent_choice', 'declined');
    window.dispatchEvent(new Event('cookie-consent-change'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="gdn-surface fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 backdrop-blur-xl border rounded-2xl p-5 text-slate-700 text-xs sm:text-sm space-y-3 animate-in fade-in slide-in-from-bottom-5 duration-300 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-violet-600 shrink-0" />
          <span>Aviso de Cookies y Privacidad</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-500 text-xs leading-relaxed">
        Usamos almacenamiento local para recordar tu elección. Las herramientas opcionales de analítica de rendimiento solo se cargan cuando eliges “Aceptar Todas”. Puedes consultar nuestra{' '}
        <Link to="/politica-de-privacidad" className="text-violet-600 underline hover:text-violet-700">
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
          className="gdn-chip border text-slate-600 hover:text-violet-700 font-medium py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer"
        >
          Solo Necesarias
        </button>
      </div>
    </div>
  );
}
