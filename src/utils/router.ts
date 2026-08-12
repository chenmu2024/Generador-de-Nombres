'use client';

import { useState, useEffect } from 'react';

export function useLocation() {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  return { pathname };
}

export function useNavigate() {
  return (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };
}
