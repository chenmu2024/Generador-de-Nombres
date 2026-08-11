import type { Metadata } from 'next';
import Contact from '@/src/views/Contact';

export const metadata: Metadata = {
  title: 'Contacto y Soporte Editorial | GeneradorDeNombres.net',
  description: 'Ponte en contacto con el equipo editorial de GeneradorDeNombres.net para sugerencias, soporte o consultas sobre nuestro generador de nombres y símbolos.',
  alternates: {
    canonical: 'https://generadordenombres.net/contacto',
  },
};

export default function Page() {
  return <Contact />;
}
