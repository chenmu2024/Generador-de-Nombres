import React from 'react';
import { Link } from '../components/Link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-5 max-w-md bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
        <span className="text-5xl font-black text-violet-400">404</span>
        <h1 className="text-2xl font-bold text-slate-900">Página No Encontrada</h1>
        <p className="text-sm text-slate-500">
          La categoría o generador de nombres que buscas no existe o ha sido trasladado.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-sm transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
