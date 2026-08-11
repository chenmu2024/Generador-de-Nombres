import type { Metadata } from 'next';
import TermsOfService from '@/src/views/TermsOfService';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | GeneradorDeNombres.net',
  description: 'Lee los términos y condiciones de uso de GeneradorDeNombres.net. Normas de uso, propiedad intelectual y responsabilidad.',
  alternates: {
    canonical: 'https://generadordenombres.net/terminos-y-condiciones',
  },
};

export default function Page() {
  return <TermsOfService />;
}
