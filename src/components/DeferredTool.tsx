'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Keep offscreen interactive supplements out of the initial DOM and hydration
 * tree. The visible user-facing generator and server-rendered SEO guide remain
 * available immediately. A manual activation button works when IntersectionObserver
 * is unavailable or if someone jumps to the placeholder via keyboard.
 */
export default function DeferredTool({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const anchorRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) return;
    const anchor = anchorRef.current;
    if (!anchor) return;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section ref={anchorRef} data-deferred-tool={label} data-loaded={active ? 'true' : 'false'} className="scroll-mt-24">
      {active ? children : (
        <div className="gdn-surface border rounded-2xl px-5 py-6 sm:px-8 sm:py-8 space-y-3">
          <h2 className="font-heading text-lg font-bold text-zinc-100">{label}</h2>
          <p className="text-sm text-zinc-400">
            Herramienta complementaria disponible al llegar a esta sección.
          </p>
          <button
            type="button"
            className="gdn-primary-button min-h-11 rounded-xl px-4 py-2 text-sm font-semibold"
            onClick={() => setActive(true)}
          >
            Abrir {label.toLowerCase()}
          </button>
        </div>
      )}
    </section>
  );
}
