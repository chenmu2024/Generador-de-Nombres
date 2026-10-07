export interface EditorialProfile {
  summary: string;
  focus: string;
  updated: string;
}

// Dates record an actual content change; do not refresh them during a build.
const profiles: Record<string, [string, string]> = {
  '/': ['Personaliza texto con letras Unicode o entra en una selección de nombres para personas, mascotas y negocios.', 'Elige primero el uso del nombre: un apodo para juegos tiene restricciones diferentes de un nombre personal o una marca.'],
  '/nombres-free-fire': ['Compara ideas de apodos para Free Fire por estilo, clanes y combinaciones de símbolos.', 'Esta página reúne ideas; el generador especializado sirve para personalizar tu propio texto y el espacio invisible tiene su guía separada.'],
  '/generador-free-fire': ['Escribe tu apodo, prueba letras y símbolos, y copia una propuesta para comprobarla en Free Fire.', 'El contador y la vista previa son orientativos. La aceptación y disponibilidad solo se confirman en el juego.'],
  '/espacios-invisible-ff': ['Copia caracteres de espacio invisible y compara sus códigos Unicode antes de probarlos en el campo de apodo.', 'Los caracteres invisibles también ocupan espacio en el texto. Un carácter válido en Unicode puede ser rechazado por un juego.'],
  '/nombres-ff-unicos': ['Combina un apodo corto con símbolos para crear variantes visuales de nombres para Free Fire.', 'Único describe aquí una propuesta creativa, no una disponibilidad comprobada ni una protección contra copias.'],
  '/nombres-ff-mujeres': ['Explora apodos para Free Fire de mujer y adapta su decoración a tu estilo de juego.', 'Las categorías son estilos editoriales y pueden usarse independientemente del género de quien juega.'],
  '/nombres-clanes-ff': ['Compara nombres de clanes y diseña una sigla que sus integrantes puedan añadir a sus apodos.', 'Prueba la longitud del tag junto al nombre completo. La web no crea clanes ni cambia sus datos dentro del juego.'],
  '/nombres-roblox': ['Distingue tu nombre de usuario de tu nombre de visualización antes de elegir una propuesta para Roblox.', 'El validador comprueba formato básico; las reglas vigentes, la moderación y la disponibilidad las determina Roblox.'],
  '/nombres-instagram': ['Compara ideas de usuario para Instagram y reserva las letras decorativas para los campos que las acepten.', 'El usuario, el nombre del perfil y la biografía son campos distintos. Una propuesta con formato correcto puede estar ocupada.'],
  '/nombres-anime': ['Crea apodos inspirados en la estética del anime y compara opciones para personajes o perfiles.', 'Un apodo de fantasía no acredita una traducción japonesa ni una relación oficial con una serie.'],
  '/nombres-de-mujer': ['Explora nombres de mujer por estilo y combina dos nombres para comparar su escritura y sonoridad.', 'Esta selección amplia incluye nombres largos y cortos. Para centrarte en primeras opciones de 3 o 4 letras, consulta la página de niña.'],
  '/nombres-de-nina': ['Compara nombres de niña de 3 o 4 letras y prueba combinaciones con un segundo nombre.', 'El filtro corto mide el primer nombre. Consulta la fuente de cada significado y prueba la combinación completa con los apellidos.'],
  '/nombres-de-nino': ['Compara nombres de niño cortos, bíblicos y contemporáneos y prueba combinaciones de dos nombres.', 'El estilo cambia las sugerencias. Los nombres que escribes se conservan y su significado solo se muestra como revisado cuando tiene fuente.'],
  '/nombres-unisex': ['Explora propuestas de nombres unisex y compara combinaciones sin asumir un uso idéntico en todas las culturas.', 'El uso de género varía por idioma y región. Esta selección no acredita registros civiles ni frecuencia estadística.'],
  '/nombres-raros': ['Compara propuestas de nombres raros de inspiración mitológica, astronómica y literaria.', 'Raro es una categoría editorial. Para afirmar que un nombre es poco frecuente en un país hacen falta estadísticas de ese lugar.'],
  '/nombres-por-letra': ['Busca nombres por inicial y combina los filtros de texto y género del directorio A-Z.', 'La selección de Ñ muestra nombres que contienen esa letra. El directorio no es un censo exhaustivo ni un ranking de iniciales.'],
  '/nombres-de-dioses': ['Compara nombres de dioses griegos y usa la guía para explorar referencias de otras mitologías.', 'Distingue los atributos de una figura mitológica del significado lingüístico de su nombre; no son equivalentes.'],
  '/nombres-japoneses': ['Compara propuestas en romaji y kanji para nombres japoneses y apodos.', 'La escritura concreta importa: una romanización puede corresponder a distintos kanji. La lectura del dispositivo no verifica el significado.'],
  '/nombres-coreanos': ['Explora propuestas de nombres coreanos en romanización y hangul.', 'El hangul por sí solo no fija todos los significados posibles; una etimología puede depender de los hanja elegidos.'],
  '/nombres-mayas': ['Explora referencias y propuestas de inspiración maya distinguiendo nombres, palabras y asociaciones creativas.', 'Las lenguas mayas son diversas. Una lectura sintetizada en español no acredita una pronunciación en una lengua maya.'],
  '/nombres-franceses': ['Compara nombres franceses y prueba cómo suena una combinación con tus apellidos.', 'Las guías fonéticas son aproximadas. La voz disponible y el idioma de lectura se indican en la herramienta.'],
  '/nombres-italianos': ['Filtra una selección de nombres italianos por texto y longitud conservando su escritura original.', 'La selección permite comparar opciones; no presenta las estadísticas de nacimientos de Italia.'],
  '/nombres-rusos': ['Busca nombres rusos en la romanización usada por esta selección y compara sus longitudes.', 'Puede haber distintas transliteraciones de un nombre escrito en cirílico. Confirma la forma original antes de atribuirle un significado.'],
  '/nombres-griegos': ['Compara nombres griegos de la selección por escritura y longitud.', 'Los nombres personales actuales y las figuras de la mitología se exploran por separado para evitar confundir sus usos.'],
  '/nombres-ingles': ['Busca nombres en inglés y filtra opciones cortas para comparar su escritura.', 'Compartir un idioma no implica compartir popularidad entre países; esta lista es editorial y no un registro nacional.'],
  '/nombres-turcos': ['Compara nombres turcos y busca también sin escribir los acentos o signos de la selección.', 'Conserva la escritura original al copiar. La búsqueda flexible facilita encontrar opciones sin certificar equivalencias lingüísticas.'],
  '/nombres-chinos': ['Compara propuestas romanizadas de nombres chinos por texto y longitud.', 'Una sílaba romanizada puede corresponder a distintos caracteres y tonos. No atribuyas un significado sin conocer la escritura concreta.'],
  '/nombres-gatos': ['Compara nombres para gatos por apariencia y estilo y personaliza una propuesta para copiar.', 'Empieza con una selección general; las páginas de gatos negros y gatos machos ofrecen enfoques más específicos.'],
  '/nombres-gatos-negros': ['Explora nombres para gatos negros inspirados en colores, noche y personajes.', 'La temática es creativa: las creencias sobre suerte no son propiedades del animal ni garantías para quien lo adopta.'],
  '/nombres-gatos-machos': ['Compara nombres para gatos machos y elige una forma que puedas repetir con comodidad.', 'El carácter y el pelaje sirven como inspiración; no determinan qué nombre aprenderá mejor un gato.'],
  '/nombres-perritas': ['Compara nombres para perritas y prueba opciones que te resulten fáciles de decir cada día.', 'La lista general permite explorar estilos; la página de chihuahua se centra en ejemplos para esa raza.'],
  '/nombres-perros-machos': ['Explora nombres para perros machos y personaliza su escritura para una placa o perfil.', 'La longitud del nombre es una preferencia práctica. La web no evalúa el aprendizaje ni el comportamiento del perro.'],
  '/perritas-chihuahua': ['Compara nombres para perritas chihuahua inspirados en su apariencia y tu estilo personal.', 'El tamaño o la forma de la cabeza son puntos de inspiración, no reglas que obliguen a elegir un nombre.'],
  '/nombres-caballos': ['Filtra nombres para caballos por texto y longitud y compara ideas inspiradas en pelajes y naturaleza.', 'La herramienta selecciona y copia texto. No fabrica placas, no registra animales y no realiza marcas físicas.'],
  '/nombres-peluches': ['Pon nombre a un peluche y crea una ficha de adopción de juego con los datos que elijas.', 'La ficha es un recuerdo creativo, sin valor legal ni relación oficial con fabricantes de juguetes.'],
  '/nombres-para-tiendas': ['Compara propuestas de nombres para tiendas y prueba su legibilidad en un letrero o perfil.', 'Una propuesta no verifica marcas registradas, dominios ni cuentas disponibles. Comprueba esos requisitos antes de usarla comercialmente.'],
  '/nombres-equipos-futbol': ['Compara nombres de equipos de fútbol y prueba una sigla para camisetas o torneos.', 'Valora que los integrantes puedan pronunciar y reconocer el nombre. La herramienta no registra equipos ni diseña equipaciones físicas.'],
};

const letterFocus: Record<string, [string, string]> = {
  a: ['A', 'Alexander, Amelia, Alex y Agustín'], b: ['B', 'Bruno, Bella, Benjamín y Bárbara'],
  c: ['C', 'Camila, Carlos, Cristian y Clara'], e: ['E', 'Enzo, Elena, Emma y Emanuel'],
  f: ['F', 'Fernando, Fiorella, Frida y Félix'], m: ['M', 'Mateo, Mía, Martín y Milena'],
  en: ['Ñ', 'Iñigo, Begoña y Nuño'], y: ['Y', 'Yago, Yaiza, Yeray y Yolanda'],
  z: ['Z', 'Zacarías, Zoe, Zaid y Zulema'],
};
for (const [slug, [letter, examples]] of Object.entries(letterFocus)) {
  profiles[`/nombres-con-${slug}`] = letter === 'Ñ'
    ? ['Compara nombres que contienen Ñ, como Iñigo, Begoña y Nuño.', 'Estos ejemplos no empiezan por Ñ. Consulta la forma y la fuente del nombre antes de interpretar su origen.']
    : [`Compara nombres con ${letter}, como ${examples}, y filtra la selección por texto y género.`, `Esta página se centra en la inicial ${letter}. Para comparar otras letras, utiliza el directorio A-Z; la lista no indica popularidad estadística.`];
}

const updatedOn20261007 = new Set([
  '/',
  '/nombres-roblox',
  '/nombres-instagram',
  '/nombres-equipos-futbol',
  '/nombres-japoneses',
  '/nombres-perritas',
  '/nombres-coreanos',
  '/nombres-franceses',
  '/nombres-mayas',
  '/nombres-gatos',
  '/nombres-gatos-negros',
  '/nombres-gatos-machos',
  '/nombres-peluches',
  '/nombres-anime',
  '/nombres-de-mujer',
  '/nombres-de-nina',
  '/nombres-de-nino',
  '/nombres-unisex',
  '/nombres-raros',
  '/nombres-por-letra',
  '/nombres-con-a',
  '/nombres-con-f',
  '/nombres-con-m',
  '/nombres-con-en',
  '/nombres-con-z',
  '/nombres-de-dioses',
  '/nombres-italianos',
  '/nombres-perros-machos',
  '/perritas-chihuahua',
  '/nombres-caballos',
  '/nombres-para-tiendas',
  '/nombres-free-fire',
  '/generador-free-fire',
  '/nombres-ff-unicos',
  '/nombres-ff-mujeres',
  '/nombres-clanes-ff',
  '/nombres-ingles',
  '/nombres-chinos',
  '/nombres-griegos',
  '/nombres-rusos',
  '/nombres-turcos',
  '/nombres-con-b',
  '/nombres-con-c',
  '/nombres-con-e',
  '/nombres-con-y',
]);

export const editorialProfiles: Record<string, EditorialProfile> = Object.fromEntries(
  Object.entries(profiles).map(([path, [summary, focus]]) => [
    path,
    { summary, focus, updated: updatedOn20261007.has(path) ? '2026-10-07' : '2026-10-04' },
  ]),
);

export const publisher = {
  '@type': 'Organization',
  '@id': 'https://generadordenombres.net/#organization',
  name: 'GeneradorDeNombres.net',
  url: 'https://generadordenombres.net/',
  logo: { '@type': 'ImageObject', url: 'https://generadordenombres.net/logo.webp' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'editorial support', url: 'https://generadordenombres.net/contacto', availableLanguage: 'es' },
};
