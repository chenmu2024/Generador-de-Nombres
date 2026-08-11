/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
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
