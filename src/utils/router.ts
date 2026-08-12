'use client';

import { usePathname, useRouter } from 'next/navigation';

export function useLocation() {
  let pathname = '/';
  try {
    pathname = usePathname() || '/';
  } catch (e) {
    pathname = '/';
  }
  return { pathname };
}

export function useNavigate() {
  try {
    const router = useRouter();
    return (path: string) => {
      if (router && router.push) {
        router.push(path);
      } else if (typeof window !== 'undefined') {
        window.location.href = path;
      }
    };
  } catch (e) {
    return (path: string) => {
      if (typeof window !== 'undefined') {
        window.location.href = path;
      }
    };
  }
}

