import type { Metadata } from 'next';
import PrivacyPolicy from '@/src/views/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Cookies | GeneradorDeNombres.net',
  description: 'Consulta la política de privacidad y cookies de GeneradorDeNombres.net. Información sobre el uso de anuncios de Google AdSense, protección de datos RGPD/CCPA.',
  alternates: {
    canonical: 'https://generadordenombres.net/politica-de-privacidad',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
