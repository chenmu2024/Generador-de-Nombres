import Link from 'next/link';
import { Flame } from 'lucide-react';
import PrivacySettingsButton from './PrivacySettingsButton';

export default function SiteFooter() {
  return (
      <footer className="gdn-footer border-t mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" aria-label="GeneradorDeNombres.net - Inicio" className="inline-flex justify-center items-center gap-3 mb-6 group">
            <div className="bg-violet-600 p-1.5 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
               <Flame className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold font-heading text-white">GeneradorDeNombres.net</span>
          </Link>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            Herramientas y selecciones de nombres, apodos y símbolos Unicode para juegos, redes sociales, mascotas, personas y negocios.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-left mb-12 border-b border-white/5 pb-12">
            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🔥 Free Fire & Gaming</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/generador-free-fire" className="hover:text-violet-300 transition-colors">Generador Free Fire</Link></li>
                <li><Link href="/espacios-invisible-ff" className="hover:text-violet-300 transition-colors">Espacio Invisible FF</Link></li>
                <li><Link href="/nombres-ff-unicos" className="hover:text-violet-300 transition-colors">Nombres Únicos FF</Link></li>
                <li><Link href="/nombres-ff-mujeres" className="hover:text-violet-300 transition-colors">FF Chicas & Mujeres</Link></li>
                <li><Link href="/nombres-clanes-ff" className="hover:text-violet-300 transition-colors">Nombres para Clanes FF</Link></li>
                <li><Link href="/nombres-roblox" className="hover:text-violet-300 transition-colors">Nombres para Roblox</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">📱 Redes Sociales</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/nombres-instagram" className="hover:text-violet-300 transition-colors">Nombres Instagram</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">👶 Personas & Bebés</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/nombres-de-mujer" className="hover:text-violet-300 transition-colors">Nombres de Mujer</Link></li>
                <li><Link href="/nombres-de-nina" className="hover:text-violet-300 transition-colors">Nombres de Niña</Link></li>
                <li><Link href="/nombres-de-nino" className="hover:text-violet-300 transition-colors">Nombres de Niño</Link></li>
                <li><Link href="/nombres-unisex" className="hover:text-violet-300 transition-colors">Nombres Unisex</Link></li>
                <li><Link href="/nombres-raros" className="hover:text-violet-300 transition-colors">Nombres Raros & Únicos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🐾 Mascotas & Peluches</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/nombres-gatos" className="hover:text-violet-300 transition-colors">Nombres para Gatos</Link></li>
                <li><Link href="/nombres-perritas" className="hover:text-violet-300 transition-colors">Nombres para Perritas</Link></li>
                <li><Link href="/nombres-perros-machos" className="hover:text-violet-300 transition-colors">Perros Machos</Link></li>
                <li><Link href="/nombres-gatos-negros" className="hover:text-violet-300 transition-colors">Gatos Negros</Link></li>
                <li><Link href="/perritas-chihuahua" className="hover:text-violet-300 transition-colors">Perritas Chihuahua</Link></li>
                <li><Link href="/nombres-peluches" className="hover:text-violet-300 transition-colors">Nombres para Peluches</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">🌍 Culturas & Anime</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/nombres-de-dioses" className="hover:text-violet-300 transition-colors">Dioses & Mitología</Link></li>
                <li><Link href="/nombres-japoneses" className="hover:text-violet-300 transition-colors">Nombres Japoneses</Link></li>
                <li><Link href="/nombres-coreanos" className="hover:text-violet-300 transition-colors">Nombres Coreanos</Link></li>
                <li><Link href="/nombres-anime" className="hover:text-violet-300 transition-colors">Nombres Anime</Link></li>
                <li><Link href="/nombres-mayas" className="hover:text-violet-300 transition-colors">Nombres Mayas</Link></li>
                <li><Link href="/nombres-italianos" className="hover:text-violet-300 transition-colors">Nombres Italianos</Link></li>
                <li><Link href="/nombres-chinos" className="hover:text-violet-300 transition-colors">Nombres Chinos</Link></li>
                <li><Link href="/nombres-rusos" className="hover:text-violet-300 transition-colors">Nombres Rusos</Link></li>
                <li><Link href="/nombres-griegos" className="hover:text-violet-300 transition-colors">Nombres Griegos</Link></li>
                <li><Link href="/nombres-turcos" className="hover:text-violet-300 transition-colors">Nombres Turcos</Link></li>
                <li><Link href="/nombres-ingles" className="hover:text-violet-300 transition-colors">Nombres en Inglés</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 font-heading">💼 Negocios & Equipos</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><Link href="/nombres-para-tiendas" className="hover:text-violet-300 transition-colors">Nombres para Tiendas</Link></li>
                <li><Link href="/nombres-equipos-futbol" className="hover:text-violet-300 transition-colors">Equipos de Fútbol</Link></li>
                <li><Link href="/nombres-por-letra" className="hover:text-violet-300 transition-colors">Directorio A-Z</Link></li>
              </ul>
            </div>
          </div>
          
          <nav aria-label="Enlaces legales y de contacto" className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
            <Link href="/sobre-nosotros" className="hover:text-zinc-300 transition-colors">Sobre Nosotros</Link>
            <Link href="/politica-de-privacidad" className="hover:text-zinc-300 transition-colors">Política de Privacidad</Link>
            <PrivacySettingsButton />
            <Link href="/terminos-y-condiciones" className="hover:text-zinc-300 transition-colors">Términos y Condiciones</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">Mapa del Sitio XML</a>
            <Link href="/contacto" className="hover:text-zinc-300 transition-colors">Contacto y Soporte</Link>
          </nav>

            <p className="mt-8 text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Sitio independiente, sin afiliación con las marcas mencionadas.{' '}
              <Link href="/terminos-y-condiciones#aviso-legal" className="text-violet-400 underline underline-offset-4 hover:text-violet-300">Aviso legal</Link>
            </p>

          <p className="text-zinc-400 text-sm mt-8">
            © {new Date().getFullYear()} generadordenombres.net. Todos los derechos reservados.
          </p>
        </div>
      </footer>
  );
}
