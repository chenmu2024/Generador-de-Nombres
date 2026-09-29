'use client';

import { usePathname, useRouter } from 'next/navigation';

export function useLocation() {
  const pathname = usePathname() || '/';
  return { pathname };
}

export function useNavigate() {
  const router = useRouter();

  return (path: string) => {
    router.push(path);
  };
}
