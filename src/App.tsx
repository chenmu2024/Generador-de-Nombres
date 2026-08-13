/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';

const CategoryPage = lazy(() => import('./views/CategoryPage'));
const AboutUs = lazy(() => import('./views/AboutUs'));
const PrivacyPolicy = lazy(() => import('./views/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./views/TermsOfService'));
const Contact = lazy(() => import('./views/Contact'));

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
      <MainLayout>
        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-y-condiciones" element={<TermsOfService />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}
