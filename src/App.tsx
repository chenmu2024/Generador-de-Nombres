/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './layouts/MainLayout';
import CategoryPage from './views/CategoryPage';
import AboutUs from './views/AboutUs';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import Contact from './views/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <Analytics />
      <MainLayout>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsOfService />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/:category" element={<CategoryPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
