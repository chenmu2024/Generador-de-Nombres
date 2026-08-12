'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="text-center space-y-4 max-w-md bg-zinc-900/60 border border-white/10 p-8 rounded-3xl">
        <h2 className="text-xl font-bold text-white">Algo salió mal</h2>
        <p className="text-sm text-zinc-400">
          Ocurrió un error al cargar este generador.
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-sm transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
