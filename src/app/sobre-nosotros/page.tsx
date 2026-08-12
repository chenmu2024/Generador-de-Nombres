import type { Metadata } from 'next';
import AboutUs from '../../views/AboutUs';

export const metadata: Metadata = {
  title: 'Sobre Nosotros y Misión | GeneradorDeNombres.net',
  description: 'Conoce al equipo detrás de GeneradorDeNombres.net. Nuestra misión es ofrecer las mejores herramientas gratuitas de apodos, letras raras y símbolos Unicode para gaming y redes sociales.',
  alternates: {
    canonical: 'https://generadordenombres.net/sobre-nosotros',
  },
};

export default function Page() {
  return <AboutUs />;
}
