/**
 * Compact, original task-oriented worked examples. These are illustrative
 * choices (not statistics, source-confirmed name meanings, platform approvals
 * or claims that a username is available).
 *
 * Do not produce formulaic boilerplate for unreviewed programmatic routes.
 * Pages without a reviewed example rely on distinct editorial summaries.
 */
export interface SearchAnswerExample {
  scenario: string;
  action: string;
  verify: string;
}

export const searchAnswerExamples: Readonly<Record<string, SearchAnswerExample>> = {
  '/': {
    scenario: 'Quieres un apodo nuevo para un juego o una red social.',
    action: 'Escribe una palabra breve en el generador; compara estilos Unicode y copia solo el resultado que puedas leer claramente.',
    verify: 'El nombre, los espacios y los símbolos pueden tener reglas distintas en cada aplicación. La vista previa no comprueba disponibilidad.',
  },
  '/nombres-free-fire': {
    scenario: 'Buscas inspiración antes de elegir un nick de Free Fire.',
    action: 'Compara una idea de clan, un apodo corto y otro decorado; después abre el generador especializado para transformar tu palabra.',
    verify: 'Estas propuestas son ejemplos, no cuentas disponibles confirmadas. Valida el resultado dentro del juego.',
  },
  '/generador-free-fire': {
    scenario: 'Ya tienes la palabra Nova y quieres un apodo personalizado.',
    action: 'Escribe Nova, revisa las variantes visibles y copia la que se mantenga legible con su marco decorativo.',
    verify: 'El número de caracteres visibles no equivale necesariamente a la longitud que admite Free Fire.',
  },
  '/espacios-invisible-ff': {
    scenario: 'Quieres separar un tag de clan y un apodo sin usar un espacio convencional.',
    action: 'Compara el punto de código de cada carácter invisible y copia exactamente el que quieras probar.',
    verify: 'Un carácter Unicode invisible puede ser rechazado o normalizado por el juego. Prueba el campo final antes de confirmar.',
  },
  '/nombres-clanes-ff': {
    scenario: 'Tu escuadra quiere compartir una sigla reconocible.',
    action: 'Prueba una sigla breve y compárala junto a los nicks de varios miembros, no solo en una etiqueta aislada.',
    verify: 'La web crea propuestas de texto; no registra ni modifica clanes oficiales.',
  },
  '/nombres-ff-unicos': {
    scenario: 'Quieres distinguir una propuesta breve de otra con símbolos.',
    action: 'Compara legibilidad, espacios y decoración; conserva varias alternativas antes de probarlas en el juego.',
    verify: 'La palabra único describe la creatividad de la lista y no garantiza exclusividad ni disponibilidad.',
  },
  '/nombres-roblox': {
    scenario: 'Buscas un nombre de visualización para Roblox.',
    action: 'Compara un nombre fácil de leer con una variante decorativa y usa las herramientas locales para revisar su formato básico.',
    verify: 'Un formato aparentemente correcto no sustituye las reglas de moderación, disponibilidad y visualización de Roblox.',
  },
  '/nombres-instagram': {
    scenario: 'Te llamas María López y quieres ideas para el campo @usuario.',
    action: 'Introduce nombre y apellido: compara propuestas como maria.lopez o maria_lopez y copia la variante que prefieras.',
    verify: 'Los ejemplos cumplen una comprobación local de formato; su disponibilidad real debe verificarse en Instagram.',
  },
  '/nombres-de-mujer': {
    scenario: 'Estás comparando un nombre corto con uno compuesto.',
    action: 'Prueba ambos en el comparador y léelos junto al apellido; observa ritmo, escritura y facilidad de uso.',
    verify: 'La herramienta no muestra registros de frecuencia ni confirma todos los orígenes de las formas.',
  },
  '/nombres-de-nina': {
    scenario: 'Quieres revisar nombres breves de tres o cuatro letras.',
    action: 'Activa el filtro corto y prueba las opciones con un segundo nombre y los apellidos.',
    verify: 'El filtro cuenta el primer nombre y no certifica un significado sin fuente.',
  },
  '/nombres-de-nino': {
    scenario: 'Quieres comparar dos combinaciones con el mismo primer nombre.',
    action: 'Conserva el primero, cambia el segundo y compara la longitud y la lectura de ambas combinaciones.',
    verify: 'El uso cultural y las etimologías varían según la escritura; solo los significados con fuente están revisados.',
  },
  '/nombres-unisex': {
    scenario: 'Prefieres opciones que no dependan de una categoría rígida.',
    action: 'Compara varias grafías y prueba cómo suenan con los apellidos, sin basarte únicamente en la etiqueta de la lista.',
    verify: 'El uso de cada nombre puede variar por país e idioma; esta lista no mide frecuencia.',
  },
  '/nombres-raros': {
    scenario: 'Buscas un nombre inspirado en astronomía o literatura.',
    action: 'Compara una opción breve y otra mitológica; revisa su pronunciación y ortografía antes de elegir.',
    verify: 'Raro es una clasificación editorial, no un resultado estadístico de un registro civil.',
  },
  '/nombres-por-letra': {
    scenario: 'Recuerdas que un nombre contiene la letra Ñ, pero no cómo comienza.',
    action: 'Abre el filtro Ñ y compara Iñigo, Begoña o Nuño con las demás categorías por inicial.',
    verify: 'La sección Ñ muestra nombres que contienen esa letra, no exclusivamente nombres que empiezan por ella.',
  },
  '/nombres-japoneses': {
    scenario: 'Encuentras dos nombres escritos de forma similar en romaji.',
    action: 'Compara la romanización con los kanji que se muestran y conserva la grafía concreta que estés verificando.',
    verify: 'La romanización sola no fija el significado de un nombre; la voz del dispositivo tampoco lo acredita.',
  },
  '/nombres-coreanos': {
    scenario: 'Comparas dos propuestas coreanas con la misma romanización.',
    action: 'Revisa la forma en hangul y consulta la escritura relevante antes de atribuirle un significado.',
    verify: 'La romanización y el hangul no fijan automáticamente todos los hanja posibles.',
  },
  '/nombres-mayas': {
    scenario: 'Buscas un nombre vinculado con la tradición maya.',
    action: 'Distingue un nombre personal, una palabra de una lengua maya y una asociación artística de fantasía.',
    verify: 'Las lenguas mayas no son intercambiables. Un sonido sintetizado no demuestra una pronunciación tradicional.',
  },
  '/nombres-de-dioses': {
    scenario: 'Quieres inspirarte en una figura mitológica para nombrar un personaje.',
    action: 'Compara sus atributos narrativos y el aspecto del nombre, sin equiparar esas asociaciones con una etimología.',
    verify: 'El significado lingüístico de un nombre y los atributos mitológicos de un personaje son cuestiones distintas.',
  },
  '/nombres-italianos': {
    scenario: 'Buscas variantes fáciles de pronunciar en español.',
    action: 'Filtra por longitud y compara la grafía original de varios nombres antes de copiarlos.',
    verify: 'Las selecciones son editoriales; no se deben leer como estadísticas nacionales de nacimientos.',
  },
  '/nombres-gatos': {
    scenario: 'Acabas de adoptar un gato y te atraen los nombres inspirados en el pelaje.',
    action: 'Compara opciones por apariencia y carácter, marca tus favoritas y pruébalas al llamarlo.',
    verify: 'La inspiración de la lista no demuestra cómo aprenderá el nombre cada animal.',
  },
  '/nombres-gatos-negros': {
    scenario: 'Quieres un nombre que evoque la noche o el color oscuro.',
    action: 'Compara varias ideas temáticas y elige la que resulte fácil de repetir en casa.',
    verify: 'Los símbolos de suerte o misterio son motivos creativos, no propiedades del gato.',
  },
  '/nombres-gatos-machos': {
    scenario: 'Quieres una lista breve para comparar en familia.',
    action: 'Filtra varias opciones y copia una selección corta para pedir otras opiniones.',
    verify: 'No existe una regla universal por sexo o pelaje sobre qué nombre reconocerá mejor un gato.',
  },
  '/nombres-perritas': {
    scenario: 'Necesitas elegir un nombre para una perrita.',
    action: 'Compara propuestas cortas y largas, y prueba en voz alta la forma que usarás a diario.',
    verify: 'El gusto y la comodidad al decirlo son preferencias, no resultados de un ensayo de adiestramiento.',
  },
  '/nombres-caballos': {
    scenario: 'Buscas ideas inspiradas en la naturaleza para un caballo.',
    action: 'Filtra la selección por texto y longitud antes de copiar las propuestas favoritas.',
    verify: 'Este buscador de palabras no registra animales ni genera documentación o marcas físicas.',
  },
  '/nombres-peluches': {
    scenario: 'Quieres regalar un peluche con una identidad inventada.',
    action: 'Prueba un nombre en la herramienta y prepara su ficha de adopción lúdica.',
    verify: 'La ficha es un recuerdo creativo, no un documento legal ni una certificación de fabricante.',
  },
  '/nombres-para-tiendas': {
    scenario: 'Buscas un nombre corto para una tienda de varios productos.',
    action: 'Compara claridad en un letrero y pronunciación; conserva alternativas antes de revisar dominio y marca.',
    verify: 'Ningún resultado confirma disponibilidad de dominio, cuentas o derechos de marca.',
  },
  '/nombres-equipos-futbol': {
    scenario: 'Un equipo amateur necesita un nombre y unas siglas.',
    action: 'Compara cómo se lee la sigla junto al nombre completo antes de llevarla a camisetas.',
    verify: 'La herramienta no registra un club ni confirma exclusividad de un distintivo.',
  },
};
