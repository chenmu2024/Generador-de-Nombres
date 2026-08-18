'use client';

import { usePathname } from 'next/navigation';

export function useLocation() {
  const pathname = usePathname() || '/';
  return { pathname };
}

export function useNavigate() {
  return (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };
}

