# SEO y GEO: revisión del 4 de octubre de 2026

## Cambios y límites

Las 46 páginas de herramientas tienen resúmenes y criterios distintos, enlaces contextuales, responsable editorial y fecha fija de revisión. Se conservan keywords, title, H1 y rutas protegidas. Los significados revisados enlazan fuentes específicas; los restantes se marcan pendientes. Las asociaciones creativas y mitológicas no se presentan como etimologías. Las selecciones no son rankings de popularidad.

El grafo JSON-LD enlaza Organization, WebSite, WebPage, WebApplication, BreadcrumbList y FAQPage mediante identificadores estables. Las FAQ coinciden con el texto visible y no se duplican con microdatos. Se elimina SearchAction porque el sitio no implementa la búsqueda declarada. No se promete un resultado enriquecido de FAQ.

El sitemap incluye lastmod cuando consta una revisión material. No se cambia la fecha automáticamente al construir. No se inventan fechas para páginas legales y contacto. robots.txt ya permite rastreo de las páginas públicas; esto no demuestra que la infraestructura permita las IP reales de todos los bots.

No se añade llms.txt ni un marcado especial para IA: Google indica que no son requisitos para sus funciones de IA. No se inventan autores personales ni credenciales.

## Después de publicar

El propietario confirma que Google Search Console y Bing Webmaster Tools están verificados. Esta sesión no dispone de un conector autenticado para leer sus informes.

1. Revisar la URL pública de sitemap.xml en ambos paneles, su última lectura y errores. Enviar el sitemap si todavía no consta; no reenviarlo diariamente.
2. Inspeccionar Inicio, nombres-de-nina, nombres-de-mujer, generador-free-fire, nombres-free-fire, nombres-con-en y una página cultural. Confirmar respuesta 200, rastreo permitido, canonical elegido y HTML con resumen/FAQ. Solicitar nueva indexación de páginas revisadas cuando corresponda; no garantiza indexación.
3. Revisar exclusiones por duplicados, canonical alternativo, redirecciones y páginas rastreadas sin indexar. Comparar páginas de intención próxima por consultas y URL, sin cambiar sus palabras clave para intentar resolverlo a ciegas.
4. Guardar un período de 28 días anterior a la publicación y compararlo con 28 días posteriores completos: clics, impresiones, CTR y posición, separados por página, consulta, país y dispositivo. Registrar estacionalidad y cambios de mezcla antes de atribuir una mejora al despliegue.
5. Consultar métricas de experiencia reales: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 en el percentil 75. La ausencia de datos no equivale a una puntuación buena. Las pruebas de laboratorio no sustituyen a los datos de usuarios.
6. Google incluye AI Overviews y AI Mode en el tráfico Web de Search Console; no etiquetar ese total como tráfico exclusivamente de IA. Para otras fuentes, revisar los referentes disponibles en la analítica consentida; una visita directa o un referente ausente no demuestra procedencia de IA.
7. Comprobar en registros/CDN que los bots autorizados no reciben desafíos o bloqueos. Un acceso con User-Agent simulado solo prueba ese acceso, no verifica la identidad ni la IP del rastreador real. OAI-SearchBot y GPTBot tienen propósitos diferentes.
8. Priorizar la siguiente revisión manual de etimologías pendientes. Publicar un significado solo con referencia de la forma exacta; para afirmaciones de popularidad usar registros oficiales con país y período.

## Fuentes oficiales

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: construir y enviar un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google: actualizaciones de documentación](https://developers.google.com/search/updates)
- [OpenAI: rastreadores](https://developers.openai.com/api/docs/bots)
- [Roblox: nombre de visualización](https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name)

Validación del código: npm run lint, npm test, npm run build y npm run seo:audit. La compilación valida el Keyword Master y las rutas/enlaces exportados. Los resultados locales no acreditan mejora de posiciones, tráfico ni citas de IA.
