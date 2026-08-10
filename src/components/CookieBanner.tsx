import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_choice');
    if (!consent) {
      // Small delay so layout loads smoothly before banner slides in
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_choice', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent_choice', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl text-zinc-300 text-xs sm:text-sm space-y-3"
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
            Utilizamos cookies propias y de terceros (como Google AdSense y Analytics) para personalizar anuncios, analizar el tráfico y recordar tus preferencias. Puedes consultar nuestra{' '}
            <Link to="/politica-de-privacidad" className="text-violet-400 underline hover:text-violet-300">
              Política de Privacidad
            </Link>.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="flex-1 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors shadow-lg shadow-violet-600/20 cursor-pointer"
            >
              Aceptar Todas
            </button>
            <button
              onClick={handleDecline}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-medium py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Solo Necesarias
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
