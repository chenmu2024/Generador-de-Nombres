'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ConsentAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setAccepted(localStorage.getItem('cookie_consent_choice') === 'accepted');
    };

    syncConsent();
    window.addEventListener('cookie-consent-change', syncConsent);
    window.addEventListener('storage', syncConsent);

    return () => {
      window.removeEventListener('cookie-consent-change', syncConsent);
      window.removeEventListener('storage', syncConsent);
    };
  }, []);

  if (!accepted) return null;

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
