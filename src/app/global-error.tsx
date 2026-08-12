'use client';

import React from 'react';

export default function GlobalError({
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center min-h-screen font-sans p-4">
        <div className="text-center space-y-4 max-w-md bg-zinc-900 border border-white/10 p-8 rounded-3xl">
          <h1 className="text-2xl font-extrabold text-white">¡Ups! Algo salió mal</h1>
          <p className="text-sm text-zinc-400">
            Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
          </p>
          {reset && (
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Reintentar
            </button>
          )}
        </div>
      </body>
    </html>
  );
}
