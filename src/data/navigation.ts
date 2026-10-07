export type NavLinkItem = {
  path: string;
  label: string;
  desc: string;
};

export type NavGroup = {
  title: string;
  icon: string;
  links: NavLinkItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: 'Juegos & Redes',
    icon: '🎮',
    links: [
      { path: '/generador-free-fire', label: 'Free Fire Generator', desc: 'Escribe y crea apodos personalizados' },
      { path: '/nombres-free-fire', label: 'Nombres Free Fire', desc: 'Explora ejemplos e ideas para el juego' },
      { path: '/espacios-invisible-ff', label: 'Espacio Invisible', desc: 'Unicode transparente para FF' },
      { path: '/nombres-ff-unicos', label: 'FF Nombres Únicos', desc: 'Ideas variadas para personalizar' },
      { path: '/nombres-ff-mujeres', label: 'FF Chicas & Mujeres', desc: 'Estilo femenino e insano' },
      { path: '/nombres-clanes-ff', label: 'Clanes Free Fire', desc: 'Tags e insignias de escuadra' },
      { path: '/nombres-roblox', label: 'Roblox Display Names', desc: 'Estilos para revisar en la plataforma' },
      { path: '/nombres-instagram', label: 'Instagram Aesthetic', desc: 'Nombres y bios de perfil' },
      { path: '/nombres-anime', label: 'Anime & Otaku', desc: 'Héroes, villanos y apodos' },
    ],
  },
  {
    title: 'Personas & Bebés',
    icon: '👶',
    links: [
      { path: '/nombres-de-mujer', label: 'Nombres de Mujer', desc: 'Lista bonita y elegante' },
      { path: '/nombres-de-nina', label: 'Nombres de Niña', desc: 'Ideas no comunes y cortas' },
      { path: '/nombres-de-nino', label: 'Nombres de Niño', desc: 'Con significado profundo' },
      { path: '/nombres-unisex', label: 'Nombres Unisex', desc: 'Neutros y modernos' },
      { path: '/nombres-raros', label: 'Nombres Raros', desc: 'Únicos y poco comunes' },
    ],
  },
  {
    title: 'Por Letra A-Z',
    icon: '🔤',
    links: [
      { path: '/nombres-por-letra', label: 'Directorio A-Z', desc: 'Navega de la A a la Z' },
      { path: '/nombres-con-a', label: 'Nombres con A', desc: 'Alexander, Amelia, Aitana' },
      { path: '/nombres-con-b', label: 'Nombres con B', desc: 'Bruno, Beatriz y otras ideas' },
      { path: '/nombres-con-c', label: 'Nombres con C', desc: 'Camila, César y otras ideas' },
      { path: '/nombres-con-e', label: 'Nombres con E', desc: 'Elena, Eric y otras ideas' },
      { path: '/nombres-con-f', label: 'Nombres con F', desc: 'Fernando, Frida, Félix' },
      { path: '/nombres-con-m', label: 'Nombres con M', desc: 'Mateo, Mía, Martín' },
      { path: '/nombres-con-en', label: 'Nombres con Ñ', desc: 'Tradición hispana e Iñigo' },
      { path: '/nombres-con-y', label: 'Nombres con Y', desc: 'Yara, Yahir y otras ideas' },
      { path: '/nombres-con-z', label: 'Nombres con Z', desc: 'Zeus, Zoey, Zaid' },
    ],
  },
  {
    title: 'Culturas',
    icon: '🌍',
    links: [
      { path: '/nombres-de-dioses', label: 'Dioses & Mitología', desc: 'Griegos, nórdicos y egipcios' },
      { path: '/nombres-japoneses', label: 'Japoneses', desc: 'Ideas y escritura para comparar' },
      { path: '/nombres-coreanos', label: 'Coreanos (Hangul)', desc: 'K-Pop y Doramas' },
      { path: '/nombres-italianos', label: 'Italianos', desc: 'Elegancia mediterránea' },
      { path: '/nombres-mayas', label: 'Mayas & Sagrados', desc: 'Prehispánicos y deidades' },
      { path: '/nombres-franceses', label: 'Franceses', desc: 'Selección de nombres personales' },
      { path: '/nombres-rusos', label: 'Rusos', desc: 'Nombres en escritura latina' },
      { path: '/nombres-griegos', label: 'Griegos', desc: 'Nombres personales y variantes' },
      { path: '/nombres-ingles', label: 'En inglés', desc: 'Nombres utilizados en inglés' },
      { path: '/nombres-turcos', label: 'Turcos', desc: 'Nombres con letras turcas' },
      { path: '/nombres-chinos', label: 'Chinos', desc: 'Ideas romanizadas, sin Hanzi supuestos' },
    ],
  },
  {
    title: 'Mascotas',
    icon: '🐾',
    links: [
      { path: '/nombres-gatos', label: 'Gatos Generales', desc: 'Michis machos y hembras' },
      { path: '/nombres-gatos-machos', label: 'Gatos Machos', desc: 'Ideas para gatos y mininos' },
      { path: '/nombres-perritas', label: 'Perritas Bonitas', desc: 'Cachorras y tiernas' },
      { path: '/nombres-perros-machos', label: 'Perros Machos', desc: 'Ideas fuertes y épicas' },
      { path: '/nombres-gatos-negros', label: 'Gatos Negros', desc: 'Místicos y panteritas' },
      { path: '/perritas-chihuahua', label: 'Perritas Chihuahua', desc: 'Razas diminutas' },
      { path: '/nombres-caballos', label: 'Caballos & Yeguas', desc: 'Imponentes y de paso' },
    ],
  },
  {
    title: 'Equipos & Negocios',
    icon: '💼',
    links: [
      { path: '/nombres-equipos-futbol', label: 'Equipos de Fútbol', desc: 'Torneos y eSports' },
      { path: '/nombres-para-tiendas', label: 'Tiendas & Negocios', desc: 'Marcas y e-Commerce' },
      { path: '/nombres-peluches', label: 'Peluches & Adopción', desc: 'Squishmallows y ositos' },
    ],
  },
];
