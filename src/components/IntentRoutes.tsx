import { Link } from './Link';

type IntentRoute = { label: string; href: string; description: string };

const freeFireRoutes: IntentRoute[] = [
  { label: 'Personalizar mi apodo', href: '/generador-free-fire', description: 'Escribe una base y transforma sus letras.' },
  { label: 'Explorar nombres', href: '/nombres-free-fire', description: 'Compara estilos y ejemplos antes de copiar.' },
  { label: 'Copiar espacio invisible', href: '/espacios-invisible-ff', description: 'Prueba separadores Unicode con precaución.' },
  { label: 'Diseñar un clan', href: '/nombres-clanes-ff', description: 'Combina siglas y nombres de escuadra.' },
];

const instagramRoutes: IntentRoute[] = [
  { label: 'Crear con mi nombre', href: '#instagram-con-tu-nombre', description: 'Convierte nombre y apellido en ideas de @usuario.' },
  { label: 'Revisar formato', href: '#instagram-validar-usuario', description: 'Comprueba caracteres y longitud.' },
  { label: 'Copiar biografía', href: '#instagram-biografia', description: 'Explora plantillas editables para tu perfil.' },
];

const ffPaths = new Set([
  '/nombres-free-fire',
  '/generador-free-fire',
  '/espacios-invisible-ff',
  '/nombres-ff-unicos',
  '/nombres-ff-mujeres',
  '/nombres-clanes-ff',
]);

export function getIntentRoutes(path: string): IntentRoute[] {
  if (ffPaths.has(path)) return freeFireRoutes;
  if (path === '/nombres-instagram') return instagramRoutes;
  return [];
}

export default function IntentRoutes({ path }: { path: string }) {
  const routes = getIntentRoutes(path);
  if (!routes.length) return null;

  return (
    <nav aria-label="Elige la herramienta según lo que quieres hacer"
      className="gdn-surface border rounded-2xl p-4 sm:p-5 space-y-3 max-w-6xl mx-auto">
      <h2 className="text-base sm:text-lg font-heading font-semibold text-zinc-100">
        ¿Qué quieres hacer?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {routes.map(route => {
          const selected = route.href === path;
          const destination = selected ? '#generador' : route.href;
          return (
            <Link key={route.href} to={destination} aria-current={selected ? 'page' : undefined}
              className={`rounded-xl min-h-16 p-3.5 flex flex-col gap-1 border transition-colors ${selected
                ? 'border-violet-400/60 bg-violet-500/10'
                : 'border-white/10 bg-white/[0.02] hover:border-violet-400/40'}`}>
              <span className="text-sm font-bold text-zinc-100">{route.label}{selected ? ' · Aquí' : ''}</span>
              <span className="text-xs text-zinc-300 leading-relaxed">{route.description}</span>
            </Link>
          );
        })}
      </div>
      <p className="text-xs text-zinc-400">
        Los ejemplos son inspiración editorial. Verifica la disponibilidad y los caracteres aceptados directamente en la plataforma correspondiente.
      </p>
    </nav>
  );
}
