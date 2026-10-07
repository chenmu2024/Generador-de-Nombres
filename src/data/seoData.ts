export interface FAQ {
  question: string;
  answer: string;
}

export interface CategoryData {
  id: string;
  path: string;
  title: string;
  h1: string;
  subtitle: string;
  seoText: string;
  metaDescription: string;
  keywords: string;
  defaultName?: string;
  customSymbols?: string[];
  faqs?: FAQ[];
  related?: Array<{ title: string; path: string; }>;
}

export const seoData: Record<string, CategoryData> = {
  home: {
    id: 'home',
    path: '/',
    title: 'Generador de Nombres, Apodos y Símbolos para Juegos | GDN',
    h1: 'Generador de Nombres, Apodos y Símbolos',
    subtitle: 'El mejor creador de nombres y apodos para juegos, redes sociales, bebés y mascotas. Copia símbolos y letras raras en 1 clic.',
    seoText: `
      <h2>El Mejor Generador de Nombres, Apodos y Letras Bonitas</h2>
      <p>Bienvenido a <strong>GeneradorDeNombres.net</strong>, la plataforma comunitaria definitiva para personalizar tus nicks, apodos y perfiles. Ya sea que busques destacar en tus partidas de videojuegos (como Free Fire, Roblox, PUBG) o en tus biografías de redes sociales (Instagram, TikTok, WhatsApp), nuestro sistema convierte texto común en combinaciones llamativas con símbolos especiales, letras góticas, cursivas y tipografías Unicode compatibles.</p>
      
      <h3>¿Cómo crear nombres y apodos personalizados?</h3>
      <p>Es muy sencillo: solo escribe tu nombre o palabra clave en el cuadro principal. Al instante, nuestro sistema generará decenas de estilos únicos. También incluimos herramientas para copiar el <strong>espacio invisible (Unicode U+3164)</strong> y una amplia biblioteca de <strong>símbolos y caracteres especiales</strong> listos para copiar con un solo clic (como ꧁༺ ༻꧂, ⚡, ☠︎, 👑, y flores).</p>
      
      <h3>Nombres para Personas, Bebés y Mascotas</h3>
      <p>Nuestra plataforma abarca mucho más que apodos para juegos. Si buscas inspiración para la vida real, disponemos de extensas listas y guías para encontrar hermosos <strong>nombres de mujer</strong>, opciones con significado para bebés (niños y niñas), e incluso listas de <strong>nombres para perritas</strong> y gatos con significados profundos.</p>
      
      <h3>Símbolos, Letras Raras y Fuentes Unicode</h3>
      <p>Contamos con una amplia colección de caracteres Unicode estándar compatibles con la mayoría de navegadores, aplicaciones y juegos modernos. Transforma tu texto normal en letras cursivas, medievales, estéticas y asiáticas de forma 100% gratuita.</p>
    `,
    metaDescription: 'Generador de nombres, apodos y símbolos para juegos, redes sociales, bebés y mascotas. Copia letras raras y espacios invisibles fácilmente.',
    keywords: 'generador de nombres, creador de apodos, letras raras, simbolos unicode, espacio invisible, nombres de mujer, nombres para perritas',
    defaultName: 'Gamer',

    customSymbols: ["꧁", "꧂", "༺", "༻", "⚡", "☠︎", "👑", "✿", "☬", "⚔️", "☯︎", "★", "♥", "✨", "🔥", "ツ", "×͜×", "シ", "ッ", "メ"],
    faqs: [
      {
        question: "¿Es gratis usar este generador de nombres?",
        answer: "Sí, nuestra herramienta es 100% gratuita. Puedes generar, copiar y usar todos los nombres, símbolos y letras raras las veces que quieras sin costo alguno."
      },
      {
        question: "¿Dónde puedo usar los nombres generados?",
        answer: "Los nombres y letras generadas utilizan caracteres Unicode estándar, lo que significa que puedes probarlos en Free Fire, Roblox, PUBG, Instagram, TikTok, WhatsApp, Facebook, Twitter, Discord, etc. Cada plataforma decide qué caracteres acepta."
      },
      {
        question: "¿Cómo copio un nombre o apodo?",
        answer: "Simplemente haz clic (o toca en móviles) en el botón Copiar junto al nombre o sobre el símbolo que te guste. Se copiará automáticamente al portapapeles y podrás pegarlo donde desees."
      }
    ]
  },
  'nombres-free-fire': {
    id: 'nombres-free-fire',
    path: '/nombres-free-fire',
    title: 'Nombres para Free Fire - Apodos Chidos e Insanos | GDN',
    h1: 'Generador y Creador de Nombres para Free Fire',
    subtitle: 'Explora ideas de nombres para Free Fire por estilo, símbolos, clanes, dúos y variantes femeninas antes de personalizar tu propia base.',
    seoText: `
      <h2>Ideas de Nombres para Free Fire por Estilo (Apodos Insanos y Épicos)</h2>
      <p>Esta página funciona como guía e inspiración para comparar estilos de nombres en Free Fire: apodos agresivos, combinaciones con símbolos, ideas para dúos, variantes femeninas y ejemplos con tag de clan. Si ya tienes una palabra base y quieres transformarla, utiliza el <a href="/generador-free-fire">generador de nombres para Free Fire</a>. Los límites, caracteres admitidos y disponibilidad dependen siempre de lo que acepte el juego en ese momento.</p>
      
      <h3>Guía Rápida: Estilos de Nombres para Free Fire</h3>
      <p>A continuación te mostramos combinaciones de esta selección editorial clasificadas por estilo e intención en partida:</p>
      
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombres Insanos & Chiteros</th>
              <th class="py-3.5 px-4 font-bold">Nombres para Clanes (Con Tag)</th>
              <th class="py-3.5 px-4 font-bold">Nombres de Chicas & Aesthetic</th>
              <th class="py-3.5 px-4 font-bold">Nombres para Dúos Dinámicos</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-medium text-zinc-100">꧁༺ ₦Ї₦ℑ₳ ༻꧂</td>
              <td class="py-3 px-4 font-medium text-zinc-100">7K • L E Y E N D A S</td>
              <td class="py-3 px-4 font-medium text-zinc-100">✿ Q u e e n ✿</td>
              <td class="py-3 px-4 font-medium text-zinc-100">👑 K i n g & 👑 Q u e e n</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-medium text-zinc-100">☠︎ ＴＯＸＩＣ ☠︎</td>
              <td class="py-3 px-4 font-medium text-zinc-100">LOS • D I O S E S ⚡</td>
              <td class="py-3 px-4 font-medium text-zinc-100">🌸 ㅤ A i t a n a</td>
              <td class="py-3 px-4 font-medium text-zinc-100">★ I n s a n o & ✿ S u a v e</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-medium text-zinc-100">×͜× E L D I A B L O</td>
              <td class="py-3 px-4 font-medium text-zinc-100">VP • M A F I A ☬</td>
              <td class="py-3 px-4 font-medium text-zinc-100">꧁ Ⓥ ㅤ P r i n c e s s ꧂</td>
              <td class="py-3 px-4 font-medium text-zinc-100">⚡ N o o b & ⚡ B a b y</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-medium text-zinc-100">ＥＬ ＪＥＦＥ ツ</td>
              <td class="py-3 px-4 font-medium text-zinc-100">ST • S N I P E R S 🎯</td>
              <td class="py-3 px-4 font-medium text-zinc-100">🦋 ㅤ V a l e n t i n a</td>
              <td class="py-3 px-4 font-medium text-zinc-100">☠︎ D i a b l o & ☠︎ D i a b l a</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-medium text-zinc-100">𓆩⚡𓆪 ㅤ K I N G</td>
              <td class="py-3 px-4 font-medium text-zinc-100">FX • R U S H 3 R S 🐉</td>
              <td class="py-3 px-4 font-medium text-zinc-100">♥ ㅤ S u a v e ㅤ ♥</td>
              <td class="py-3 px-4 font-medium text-zinc-100">☯︎ S o l & ☯︎ L u n a</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Cómo Poner Espacio Invisible y Símbolos Especiales en Free Fire</h3>
      <p>Para incluir espacios entre tu tag de clan y tu apodo en Free Fire no puedes usar la barra espaciadora del teclado normal. Tienes que usar el <strong>carácter transparente Unicode <code>U+3164</code></strong> (Espacio Invisible). En nuestro creador de nombres arriba, solo haz clic en la opción de espacio transparente o copia directamente los nombres ya formateados.</p>

      <h3>Qué Comprobar sobre Longitud y Caracteres en Free Fire</h3>
      <ul>
        <li><strong>Longitud del apodo:</strong> Comprueba el límite que muestra tu versión de Free Fire antes de confirmar, ya que las reglas pueden cambiar.</li>
        <li><strong>Símbolos para probar:</strong> Caracteres Unicode especiales (꧁, ꧂, ⚡, ☠︎, 👑, ✿, ☬, ⚔️, ☯︎, ★, ♥, ✨, 🔥, ツ, ×͜×, Ⓥ, ╰‿╯).</li>
        <li><strong>Cambio de nombre:</strong> El coste y los métodos disponibles pueden variar; confirma siempre lo que muestra tu cuenta dentro del juego.</li>
      </ul>
    `,
    metaDescription: 'Lista de nombres para Free Fire con símbolos y letras raras. Encuentra apodos insanos, chidos, de mujer y clanes para destacar en tu juego.',
    keywords: 'nombres para free fire, generador de nombres free fire, creador de nombres para free fire, nombres insanos para free fire, simbolos para free fire, espacios invisibles free fire, nombres para clanes de free fire, nombres para duos free fire',
    defaultName: 'ProPlayer',
    customSymbols: ["꧁", "꧂", "༺", "༻", "⚡", "☠︎", "👑", "✿", "☬", "⚔️", "☯︎", "★", "♥", "✨", "🔥", "ツ", "×͜×", "シ", "ッ", "メ", "🔫", "Ⓥ", "╰‿╯", "乄", "𓆩", "𓆪", "亗", "", "ㅤ"],
    faqs: [
      {
        question: "¿Cómo pongo el espacio invisible en mi nombre de Free Fire?",
        answer: "Si el campo de apodo no conserva una separación normal, puedes probar el carácter Unicode U+3164 desde nuestra herramienta de Espacio Invisible. La aceptación depende de la versión y debe confirmarse dentro del juego."
      },
      {
        question: "¿Cuál es el límite de letras para los nombres en Free Fire?",
        answer: "El juego puede aplicar límites de longitud y de caracteres según la versión. Usa el contador del generador como referencia y confirma el resultado en el campo de apodo antes de guardar."
      },
      {
        question: "¿Cómo pongo la V de Verificado (Ⓥ) en mi perfil de Free Fire?",
        answer: "El símbolo de texto Ⓥ o 🅅 puede copiarse como decoración, pero no convierte una cuenta en verificada ni sustituye ninguna insignia que la plataforma otorgue dentro del juego."
      },
      {
        question: "¿Cuánto cuesta cambiar de nombre en Free Fire?",
        answer: "El coste y los métodos para cambiar el apodo pueden variar con el tiempo. Revisa el precio y las opciones que aparecen en tu cuenta antes de confirmar."
      },
      {
        question: "¿Es gratis usar este creador de nombres para Free Fire?",
        answer: "Sí, nuestra herramienta es 100% gratuita y sin límites. Puedes generar, personalizar, medir la longitud y copiar todos los nombres, símbolos y espacios invisibles que quieras."
      }
    ]
  },
  'nombres-roblox': {
    id: 'nombres-roblox',
    path: '/nombres-roblox',
    title: 'Nombres para Roblox - Display Names Aesthetic | GDN',
    h1: 'Generador y Creador de Nombres para Roblox',
    subtitle: 'Encuentra y genera nombres de usuario (Username) válidos y Display Names aesthetic para Roblox, Blox Fruits, Brookhaven, Adopt Me! y Da Hood.',
    seoText: `
      <h2>Los Mejores Nombres para Roblox en 2026 (Aesthetic, Baddies y Tryhard)</h2>
      <p>Crear un nombre llamativo en <strong>Roblox</strong> es esencial para destacar en juegos populares como <em>Blox Fruits, Brookhaven RP, Adopt Me!, Murder Mystery 2, Da Hood y BedWars</em>. Roblox utiliza un sistema doble de identidad que debes entender bien: tu <strong>Nombre de Usuario (@Username)</strong> único y tu <strong>Nombre de Visualización (Display Name)</strong> editable gratis.</p>

      <h3>Diferencia entre Username y Display Name en Roblox</h3>
      <ul>
        <li><strong>Username (@usuario):</strong> Es el nombre de inicio de sesión único de tu cuenta. Solo permite letras (A-Z), números (0-9) y un único guión bajo (<code>_</code>). No admite espacios ni símbolos especiales.</li>
        <li><strong>Display Name (Nombre de Pantalla):</strong> Es el nombre visible sobre tu avatar. Tiene reglas distintas al Username; el generador no comprueba su aceptación. Consulta las <a href="https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name" target="_blank" rel="noopener noreferrer">condiciones oficiales de Roblox</a> antes de cambiarlo.</li>
      </ul>

      <h3>Tabla de Ideas de Nombres por Juego de Roblox</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Juego / Estilo</th>
              <th class="py-3.5 px-4 font-bold">Username Válido (@Usuario)</th>
              <th class="py-3.5 px-4 font-bold">Display Name Aesthetic (Símbolos)</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Blox Fruits (Pirata / PvP)</td>
              <td class="py-3 px-4 font-mono text-amber-300">Vortex_PvP</td>
              <td class="py-3 px-4 font-mono text-zinc-100">𓆩⚡𓆪 ㅤ V O R T E X ㅤ 𓆩⚡𓆪</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Aesthetic / Soft / Cute</td>
              <td class="py-3 px-4 font-mono text-amber-300">v_softie_x</td>
              <td class="py-3 px-4 font-mono text-zinc-100">🌸 ㅤ ꜱ ᴏ ꜰ ᴛ ɪ ᴇ ㅤ 🌸</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Brookhaven RP (Lujo & RP)</td>
              <td class="py-3 px-4 font-mono text-amber-300">iI_Princess_v</td>
              <td class="py-3 px-4 font-mono text-zinc-100">👑 ㅤ ᴘ ʀ ɪ ɴ ᴄ ᴇ s s ㅤ 👑</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Da Hood / MM2 (Tryhard)</td>
              <td class="py-3 px-4 font-mono text-amber-300">xX_DarkVoid_Xx</td>
              <td class="py-3 px-4 font-mono text-zinc-100">🖤 ㅤ ᴅ ᴀ ʀ ᴋ ᴠ ᴏ ɪ ᴅ ㅤ ☠︎</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Adopt Me! (Mascotas)</td>
              <td class="py-3 px-4 font-mono text-amber-300">Honey_Paws</td>
              <td class="py-3 px-4 font-mono text-zinc-100">🧸 ㅤ ʜ ᴏ ɴ ᴇ ʏ ㅤ 🍯</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Reglas Oficiales de Validación de Nombres en Roblox</h3>
      <ol>
        <li><strong>Longitud permitida:</strong> Entre 3 y 20 caracteres estrictos.</li>
        <li><strong>Caracteres autorizados:</strong> Letras (a-z), números (0-9) y un solo guión bajo (<code>_</code>).</li>
        <li><strong>Posición del Guión Bajo:</strong> No se permite un guión bajo ni al inicio ni al final del nombre, ni dos guiones seguidos.</li>
        <li><strong>Filtro de Censura:</strong> Roblox bloquea automáticamente datos personales (como nombres reales completos, números telefónicos o palabras malsonantes).</li>
      </ol>
    `,
    metaDescription: 'Generador de nombres para Roblox. Crea Display Names aesthetic y apodos válidos para Blox Fruits, Brookhaven y Adopt Me con validador.',
    keywords: 'nombres para roblox, nombres aesthetic para roblox, nombres de roblox, validador de usuario roblox, display name roblox, nombres para blox fruits, nombres para brookhaven',
    defaultName: 'Robloxian',
    customSymbols: ["✨", "⚡", "👑", "🖤", "🦋", "🍄", "⭐", "💫", "🧸", "🎀", "🌸", "☁️", "🤍", "🍓", "☠︎", "亗", "𓆩", "𓆪", "×͜×", "✿"],
    faqs: [
      {
        question: "¿Cómo cambiar tu Display Name en Roblox totalmente gratis?",
        answer: "Entra en la configuración de tu cuenta y busca el nombre de visualización. Revisa las condiciones y el plazo que Roblox indique antes de guardar. La disponibilidad y la moderación se comprueban en Roblox."
      },
      {
        question: "¿Cuánto cuesta cambiar el Username (@usuario) principal de Roblox?",
        answer: "La web no cobra por generar propuestas. Si cambias el Username dentro de Roblox, revisa el coste mostrado por la plataforma antes de confirmar."
      },
      {
        question: "¿Por qué Roblox dice que mi nombre de usuario no está disponible?",
        answer: "Puede deberse a disponibilidad, formato o moderación. Nuestro validador comprueba formato básico; Roblox decide si acepta el nombre."
      },
      {
        question: "¿Se pueden poner símbolos especiales en el Username principal?",
        answer: "No uses un resultado decorado como garantía de compatibilidad. El Username y el Display Name tienen reglas distintas; consulta el soporte oficial de Roblox y prueba el texto en el campo correspondiente."
      }
    ]
  },
  'nombres-instagram': {
    id: 'nombres-instagram',
    path: '/nombres-instagram',
    title: 'Nombres para Instagram Aesthetic - Generador | GDN',
    h1: 'Generador y Creador de Nombres para Instagram',
    subtitle: 'Explora ideas de usernames (@usuario), letras bonitas y nombres de perfil aesthetic para cuentas personales, marcas, moda y creadores de contenido. Comprueba la disponibilidad en Instagram.',
    seoText: `
      <h2>Los Mejores Nombres para Instagram en 2026 (Aesthetic, Marcas y Personales)</h2>
      <p>Crear un <strong>nombre de usuario memorable para Instagram</strong> es la decisión estratégica más importante para construir tu marca personal o comercial. Tu perfil de Instagram maneja dos campos distintos con reglas diferentes: tu <strong>Nombre de Usuario único (@username)</strong> y tu <strong>Nombre de Perfil (Display Name)</strong>.</p>

      <h3>Diferencia entre @Username y Nombre de Perfil en Instagram</h3>
      <ul>
        <li><strong>Nombre de Usuario (@username):</strong> Es la dirección web única de tu perfil (instagram.com/tu_usuario). Solo admite letras (a-z), números (0-9), puntos (<code>.</code>) y guiones bajos (<code>_</code>). No permite espacios ni caracteres especiales.</li>
        <li><strong>Nombre de Perfil (Display Name):</strong> Aparece debajo de tu foto de perfil y en los resultados de búsqueda. Admite letras bonitas, fuentes tipográficas aesthetic, espacios, emojis y símbolos especiales.</li>
      </ul>

      <h3>Tabla de Estilos de Nombres para Instagram por Nicho</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nicho / Categoría</th>
              <th class="py-3.5 px-4 font-bold">Username Válido (@usuario)</th>
              <th class="py-3.5 px-4 font-bold">Nombre de Perfil (Aesthetic / Bio)</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Personal / Aesthetic / Soft</td>
              <td class="py-3 px-4 font-mono text-amber-300">iam.sofia_</td>
              <td class="py-3 px-4 font-mono text-zinc-100">✨ ꜱ ᴏ ꜰ ɪ ᴀ ✨ ㅤ | 🕊️ ᴠ ɪ ʙ ᴇ s</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Moda & Style / Outfit</td>
              <td class="py-3 px-4 font-mono text-amber-300">styleby.valen</td>
              <td class="py-3 px-4 font-mono text-zinc-100">🌷 V a l e n t i n a 🩰 Fashion & Style</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Gamer / Streaming / VTuber</td>
              <td class="py-3 px-4 font-mono text-amber-300">vortex.gaming_</td>
              <td class="py-3 px-4 font-mono text-zinc-100">⚡ ᴠ ᴏ ʀ ᴛ ᴇ x ⚡ | 🎮 Streamer</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Fotografía & Content Creator</td>
              <td class="py-3 px-4 font-mono text-amber-300">ph.mateo.studio</td>
              <td class="py-3 px-4 font-mono text-zinc-100">📸 M A T E O 📸 | Visuals & Art</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Marca / Emprendimiento / Tienda</td>
              <td class="py-3 px-4 font-mono text-amber-300">luna.store.official</td>
              <td class="py-3 px-4 font-mono text-zinc-100">🛍️ L U N A ㅤ S T O R E | Tienda Online</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Reglas Oficiales de Instagram para el @Username</h3>
      <ol>
        <li><strong>Longitud máxima:</strong> Hasta 30 caracteres.</li>
        <li><strong>Símbolos permitidos:</strong> Únicamente letras, números, puntos (<code>.</code>) y guiones bajos (<code>_</code>).</li>
        <li><strong>Restricciones de Puntos:</strong> No se pueden usar dos puntos consecutivos (<code>..</code>) ni ubicar un punto al principio o final del usuario.</li>
        <li><strong>Disponibilidad:</strong> Si un usuario fue cambiado recientemente por otra persona, Instagram guarda una reserva temporal de 14 días.</li>
      </ol>
    `,
    metaDescription: 'Generador de nombres para Instagram aesthetic y redes sociales. Transforma tu usuario con fuentes bonitas, símbolos y estilo único.',
    keywords: 'nombres para instagram, nombres de usuario para instagram, letras para instagram, validador username instagram, nombres aesthetic instagram, usernames bonitos instagram',
    defaultName: 'Aesthetic',
    customSymbols: ["✨", "🤍", "🕊️", "☁️", "🦋", "🌸", "🌷", "🧸", "🍯", "🍵", "🌿", "🪴", "🎨", "🎭", "📸", "🎧", "⚡", "🛍️"],
    faqs: [
      {
        question: "¿Por qué Instagram me dice que mi nombre de usuario no está disponible?",
        answer: "El nombre puede estar ocupado, reservado o incumplir las reglas del campo. Una propuesta de nuestro generador no comprueba disponibilidad ni moderación en Instagram."
      },
      {
        question: "¿Cómo poner letras bonitas o tipografías especiales en la bio de Instagram?",
        answer: "Las letras personalizadas no se pueden escribir con el teclado estándar de tu celular. Debes usar nuestro generador de tipografías arriba: escribe tu texto, selecciona la tipografía aesthetic que más te guste y copia-pega el resultado en tu perfil de Instagram."
      },
      {
        question: "¿Cada cuánto tiempo puedo cambiar mi @username en Instagram?",
        answer: "Los cambios y la posibilidad de recuperar un nombre anterior dependen de las condiciones que Instagram muestre en tu cuenta. Compruébalas antes de guardar."
      },
      {
        question: "¿Qué trucos puedo usar si mi nombre deseado ya está ocupado en Instagram?",
        answer: "Prueba añadir prefijos o sufijos limpios como: 'iam', 'real', 'the', 'by', 'official', 'ph', 'studio', o utilizar puntos y guiones bajos estratégicos (ej: 'sofia.studio' o 'real_sofia')."
      }
    ]
  },
  'nombres-equipos-futbol': {
    id: 'nombres-equipos-futbol',
    path: '/nombres-equipos-futbol',
    title: 'Nombres para Equipos de Fútbol - Creador | GDN',
    h1: 'Generador de Nombres para Equipos de Fútbol: Graciosos, Épicos y Femeninos',
    subtitle: 'Descubre los mejores nombres para tu equipo de fútbol 5, fútbol 7, torneo de barrio, liga de empresas, clanes de EA Sports FC o eSports. Incluye tabla por estilos, parodias cerveceras, audio de llamado e identificador de escudos y camisetas.',
    seoText: `
      <h2>Los Mejores Nombres para Equipos de Fútbol, Torneos de Barrio, Ligas y Clanes (2026)</h2>
      <p>¿Armaste un equipo para el torneo del barrio, una liga de Fútbol 5 / Fútbol 7, la liga de empresas o un clan de EA Sports FC (FIFA) y eFootball? La identidad y mística de un equipo nacen con un nombre memorable. Ya sea que busques imponer respeto en la cancha con un nombre épico y tradicional, o hacer reír a los rivales con un juego de palabras cervecero o parodia deportiva, aquí encontrarás la guía más completa de ideas originales.</p>

      <h3>Categorías Principales de Nombres para Equipos de Fútbol</h3>
      <p>Encuentra el nombre que represente el espíritu competitivo y la camaradería de tu grupo de jugadores:</p>
      <ul>
        <li><strong>Nombres Graciosos y Parodias Cerveceras (Fútbol 5 y Barrio):</strong> Juegos de palabras ingeniosos inspirados en grandes clubes de la Champions League o ligas americanas: <em>Vodka Juniors, Aston Birra, Real Cohólicos, Inter de Mitad, Nottingham Miedo, Bayer Neverkusen, Deportivo Tapita, Alcohol Club, Manchester Chiquito</em> y <em>Celta de Vino</em>.</li>
        <li><strong>Nombres Femeninos e Impetuosos (Empoderamiento Deportivo):</strong> Nombres llenos de garra, clase y talento: <em>Las Reinas del Balón, Valkirias FC, Las Galácticas del Barrio, Chicas Súper Poderosas, Poder Femenino FC, Diosas de la Gambeta, Amazonas FC</em> y <em>Reinas de la Cancha</em>.</li>
        <li><strong>Nombres Épicos, Guerreros y Tradicionales (Para Salir Campeón):</strong> Nombres imponentes con prefijos clásicos (Real, Atlético, Deportivo, FC): <em>Gladiadores del Norte, Furia Titán FC, Rayos de Fuego, Espartanos del Balón, Reyes de la Gambeta, Imperio FC, Búfalos Dorados</em> y <em>Centenarios FC</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre de Equipo, Estilo, Sigla Recomendada y Estampa de Camiseta</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre del Equipo</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Categoría</th>
              <th class="py-3.5 px-4 font-bold">Formato / Sigla</th>
              <th class="py-3.5 px-4 font-bold">Concepto / Significado</th>
              <th class="py-3.5 px-4 font-bold">Estampa de Camiseta / Escudo</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Vodka Juniors</td>
              <td class="py-3 px-4 text-zinc-300">Parodia Cervecera</td>
              <td class="py-3 px-4 font-mono text-zinc-400">C.D. / F.C.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Homenaje humorístico xeneize, buen ambiente y fiesta post-partido.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚽ Vodka Jrs. 🍺</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Aston Birra</td>
              <td class="py-3 px-4 text-zinc-300">Cervecero / Amigos</td>
              <td class="py-3 px-4 font-mono text-zinc-400">A.B.F.C.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Estilo británico con espíritu relajado de tercer tiempo entre amigos.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🏆 Aston Birra 🍻</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Valkirias FC</td>
              <td class="py-3 px-4 text-zinc-300">Femenino / Guerreras</td>
              <td class="py-3 px-4 font-mono text-zinc-400">F.C. Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Espíritu indomable, fuerza nórdica, elegancia y talento en la cancha.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Valkirias FC ⚡</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Real Cohólicos</td>
              <td class="py-3 px-4 text-zinc-300">Gracioso / Amateurs</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Real C.F.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Toque real y elegante con sentido del humor para ligas relámpago.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🥇 Real Cohólicos 👑</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Gladiadores FC</td>
              <td class="py-3 px-4 text-zinc-300">Épico / Torneo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">F.C. / C.A.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Lucha inquebrantable en cada balón, coraje y garra hasta el minuto 90.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚔️ Gladiadores 🛡️</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Galácticas FC</td>
              <td class="py-3 px-4 text-zinc-300">Femenino / Estrellas</td>
              <td class="py-3 px-4 font-mono text-zinc-400">F.C.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Juego deslumbrante, toque fino, calidad técnica y trabajo en equipo.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⭐ Galácticas 🌟</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Nottingham Miedo</td>
              <td class="py-3 px-4 text-zinc-300">Divertido / Liga 7</td>
              <td class="py-3 px-4 font-mono text-zinc-400">C.D.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Sin temores ante ningún rival, ataque vertical y camaradería pura.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🔥 Nottingham M. ⚽</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Espartanos FC</td>
              <td class="py-3 px-4 text-zinc-300">Tradicional / Imponente</td>
              <td class="py-3 px-4 font-mono text-zinc-400">A.D. / F.C.</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Defensa impenetrable, disciplina de equipo y mentalidad ganadora.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🛡️ Espartanos ⚔️</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Crear el Escudo, Camiseta y Nombre Definitivo</h3>
      <ol>
        <li><strong>Prefijos Oficiales vs. Parodias:</strong> Selecciona un prefijo clásico si buscas patrocinadores formales (ej. <em>Real, Deportivo, Atlético, Club de Fútbol</em>). Si es un torneo relámpago con amigos, prioriza nombres humorísticos para animar los partidos.</li>
        <li><strong>Formato Abreviado para Camisetas:</strong> Verifica que el nombre quede legible al ser estampado en la espalda o impreso en el escudo de pecho.</li>
        <li><strong>Identidad e Insignias de Escudo:</strong> Utiliza nuestro creador interactivo superior para previsualizar el escudo con símbolos como balones (⚽), trofeos (🏆), coronas (👑), escudos (🛡️) o chopas de cerveza (🍺) para enviar a estampado o publicar en redes.</li>
      </ol>
    `,
    metaDescription: 'Ideas de nombres para equipos de fútbol y torneos. Nombres chistosos, imponentes, épicos y originales para tu equipo o club deportivo.',
    keywords: 'nombres para equipos de futbol, nombres de equipos de futbol, nombres para equipos de futbol graciosos, nombres de equipos femeninos, nombres de equipos de futbol 5, nombres para torneos de futbol',
    defaultName: 'Fútbol Club',
    customSymbols: ["⚽", "🏆", "🥇", "🥅", "🦅", "🦁", "🔥", "⭐", "⚔️", "🛡️", "👑", "💪", "⚡", "🏟️", "🍺", "🍻", "🚩", "🎯", "🌟", "✦", "📜"],
    faqs: [
      {
        question: "¿Cómo elegir el nombre perfecto para mi equipo de fútbol o torneo?",
        answer: "Busca un nombre de fácil pronunciación para el árbitro, la hinchada y el locutor. Si es un torneo entre amigos, los nombres humorísticos y parodias cerveceras funcionan genial. Si buscan patrocinadores o un uniforme profesional, opta por prefijos clásicos (Real, Atlético, FC) junto con el nombre del barrio o empresa."
      },
      {
        question: "¿Cuáles son los nombres más graciosos y cerveceros para equipos de fútbol 5?",
        answer: "Entre las propuestas editoriales están Vodka Juniors, Aston Birra, Real Cohólicos, Inter de Mitad, Nottingham Miedo, Bayer Neverkusen, Deportivo Tapita, Alcohol Club y Celta de Vino."
      },
      {
        question: "¿Qué nombres transmiten mayor fuerza para equipos femeninos?",
        answer: "Para equipos femeninos destacan nombres con garra y elegancia como Las Reinas del Balón, Valkirias FC, Las Galácticas, Amazonas FC, Chicas Súper Poderosas, Diosas de la Gambeta y Poder Femenino FC."
      },
      {
        question: "¿Puedo usar estos nombres para clanes de eSports o EA Sports FC / FIFA / eFootball?",
        answer: "Los nombres generados son texto Unicode, pero cada juego o plataforma aplica sus propias reglas de longitud y caracteres permitidos. Conviene comprobar el nombre antes de guardarlo."
      }
    ]
  },
  'nombres-japoneses': {
    id: 'nombres-japoneses',
    path: '/nombres-japoneses',
    title: 'Nombres Japoneses de Mujer y Niño con Kanjis | GDN',
    h1: 'Generador de Nombres Japoneses: Kanji, Romaji y Anime',
    subtitle: "Descubre los nombres japoneses más hermosos, poéticos e imponentes para niña, niño, anime y apodos aesthetic. Incluye caracteres Kanji, Romaji, significados y audio de pronunciación.",
    seoText: `
      <h2>Los Mejores Nombres Japoneses Hermosos y su Significado Profundo (2026)</h2>
      <p>La cultura tradicional de Japón, la estética otaku, la mitología nipona y el universo del anime/manga han popularizado los <strong>nombres japoneses</strong> en todo el mundo. Destacan por la belleza de sus ideogramas (<em>Kanji</em>), su elegante sonoridad (<em>Romaji</em>) y sus significados profundamente vinculados con los elementos naturales (el sol, la nieve, las flores de cerezo, el viento y los mares), las estaciones del año y los valores morales y espirituales.</p>

      <h3>Categorías Principales de Nombres Japoneses</h3>
      <p>Explora la selección de nombres según su uso en la vida real, literatura, personajes RPG y nicks de videojuegos:</p>
      <ul>
        <li><strong>Nombres Japoneses para Niña (Femeninos):</strong> <em>Sakura (桜), Yuki (雪), Aoi (葵), Hana (花), Kokoa (心愛), Mei (芽), Rin (凛)</em> y <em>Hinata (日向)</em>. Evocan flores, pureza, dulzura y luz del sol.</li>
        <li><strong>Nombres Japoneses para Niño (Masculinos):</strong> <em>Ren (蓮), Haruto (陽翔), Kaito (海翔), Kenzo (健三), Sora (空), Akira (明), Ryu (竜)</em> y <em>Hiroshi (寛)</em>. Transmiten fuerza de loto, vuelo solar, coraje de dragón y sabiduría.</li>
        <li><strong>Nombres Unisex y Estilo Anime / Otaku:</strong> <em>Sora, Hikari, Kai, Natsu, Yori, Ren, Akira</em> y <em>Tomo</em>. Ideales para nicks de Free Fire, Roblox, Genshin Impact y perfiles aesthetic.</li>
      </ul>

      <h3>Tabla Comparativa: Kanji, Romaji, Significado y Combinaciones</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Romaji</th>
              <th class="py-3.5 px-4 font-bold">Kanji</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Sakura</td>
              <td class="py-3 px-4 font-bold text-pink-300">桜</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Sakura Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Ren</td>
              <td class="py-3 px-4 font-bold text-pink-300">蓮</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Ren Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Yuki</td>
              <td class="py-3 px-4 font-bold text-pink-300">雪 / 幸</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Yuki Sky</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Haruto</td>
              <td class="py-3 px-4 font-bold text-pink-300">陽翔</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Haruto Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Hinata</td>
              <td class="py-3 px-4 font-bold text-pink-300">日向</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Hinata Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Kaito</td>
              <td class="py-3 px-4 font-bold text-pink-300">海翔</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Kaito Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Akira</td>
              <td class="py-3 px-4 font-bold text-pink-300">明 / 晶</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Akira Sol</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Japoneses</h3>
      <ol>
        <li><strong>Comprende el Significado del Kanji:</strong> El mismo sonido en Romaji puede cambiar de significado según el ideograma Kanji elegido (por ejemplo, <em>Yuki</em> como nieve 雪 o felicidad 幸).</li>
        <li><strong>Equilibra la Sonoridad con Apellidos Hispanos o Internacionales:</strong> Si buscas un nombre para bebé, opta por opciones de pronunciación natural en español como <em>Kenzo, Ren, Akira, Sakura, Mei</em> o <em>Kaito</em>.</li>
        <li><strong>Incorporate Símbolos Estéticos para Nicks:</strong> Para avatares, anime o videojuegos (Genshin Impact, Roblox, Free Fire), personaliza el nombre con símbolos decorativos (🌸, ⛩️); los emojis no son kanji usando el generador arriba.</li>
      </ol>
    `,
    metaDescription: "Lista completa de nombres japoneses para niña, niño y anime. Con caracteres Kanji, significados profundos y audio de pronunciación.",
    keywords: 'nombres japoneses, nombres japoneses para niña, nombres japoneses para niño, nombres de anime, nombres japoneses con significado, nombres en kanji, nombres japoneses masculinos, nombres japoneses femeninos',
    defaultName: 'Sakura',
    customSymbols: ["桜", "月", "雪", "愛", "光", "花", "星", "海", "空", "水", "風", "火", "心", "魂", "神", "🌸", "💮", "🎎", "🎏", "🎐", "🎋", "⛩️", "☯️", "🦊", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Qué es el Kanji y cómo influye en el significado de un nombre japonés?",
        answer: "Un mismo nombre expresado en letras romanas (Romaji) puede escribirse con distintos ideogramas (Kanji). Por ejemplo, Yuki puede significar 'nieve' (雪) o 'felicidad' (幸) según los caracteres seleccionados."
      },
      {
        question: "¿Cuáles son algunos nombres japoneses  para niña y niño?",
        answer: "Sakura, Yuki, Aoi, Hinata y Ren son ejemplos de esta selección editorial. No son un ranking de nacimientos; el significado necesita la escritura concreta y una fuente para esa forma."
      },
      {
        question: "¿Puedo usar estos nombres para avatares de anime o nicks de videojuegos?",
        answer: "¡Totalmente! Son ideales para personajes de rol, Genshin Impact, Roblox, Free Fire, anime y perfiles aesthetic."
      },
      {
        question: "¿Cómo escuchar la pronunciación en audio de cada nombre japonés?",
        answer: "En nuestro generador interactivo arriba puedes ingresar cualquier nombre japonés o selección de ideogramas y presionar el ícono del altavoz para escuchar su pronunciación en voz sintetizada del dispositivo."
      }
    ]
  },
  'nombres-perritas': {
    id: 'nombres-perritas',
    path: '/nombres-perritas',
    title: 'Nombres para Perritas - Ideas Bonitas y Cortas | GDN',
    h1: 'Generador de Nombres para Perritas: Tiernas, Cortas y Originales',
    subtitle: 'Descubre los nombres para perritas y cachorras más bonitos, cortos y fáciles de recordar. Incluye significados por personalidad, audio de llamado canino y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres para Perritas, Cachorras y Mascotas Femeninas (2026)</h2>
      <p>La llegada de una nueva cachorra a la familia es un momento inolvidable repleto de ternura y felicidad. Elegir un nombre corto y fácil de pronunciar también resulta práctico para el llamado diario. Muchas familias prefieren opciones de dos sílabas, como <em>Luna, Kira, Nala, Maya, Lola, Bella, Chloe, Pipa, Mimi</em> o <em>Sasha</em>, porque son rápidas de decir y fáciles de repetir de forma consistente.</p>

      <h3>Categorías Principales de Nombres para Perritas</h3>
      <p>Observa el aspecto físico y el temperamento único de tu perrita para encontrar la opción ideal:</p>
      <ul>
        <li><strong>Perritas Pequeñas (Chihuahua, Poodle, Pomerania, Yorkie):</strong> Nombres dulces y delicados como <em>Mimi, Copito, Bambi, Chloe, Bella, Pipa, Lola, Molly, Daisy</em> y <em>Lulu</em>.</li>
        <li><strong>Perritas Medianas y Grandes (Golden, Husky, Pastor Alemán, Labradora):</strong> Nombres imponentes y llenos de fuerza como <em>Arya, Dakota, Sasha, Atena, Maya, Freya, Kira, Brena, Dakota</em> y <em>Kora</em>.</li>
        <li><strong>Perritas Blancas, Esponjosas o de Pelaje Claro:</strong> Nombres inspirados en la nieve, flores y luz como <em>Bianca, Copito, Nieve, Perla, Nébula, Clara, Algodón, Perla</em> y <em>Mágica</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre para Perrita, Estilo, Significado y Placa Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Perrita</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Raza</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Luna</td>
              <td class="py-3 px-4 text-zinc-300">Popular / Dulce</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Astro nocturno brillante, hermosa, serena y protectora.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🎀 Luna 🌙</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Kira</td>
              <td class="py-3 px-4 text-zinc-300">Mediana / Alegre</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rayo de luz radiante, sol resplandeciente y veloz.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">✨ Kira 🐾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Nala</td>
              <td class="py-3 px-4 text-zinc-300">Golden / Noble</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Reina leona, regalo bendecido, amada y de noble corazón.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Nala 💖</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Maya</td>
              <td class="py-3 px-4 text-zinc-300">Juguetona / Leal</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Agua sagrada, ilusión mágica, llena de gracia y ternura.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌸 Maya 🐶</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Lola</td>
              <td class="py-3 px-4 text-zinc-300">Pequeña / Mimada</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Fuerte, alegre, compañera inseparable y llena de afecto.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">💕 Lola 🦴</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Bella</td>
              <td class="py-3 px-4 text-zinc-300">Elegante / Cariñosa</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Hermosa, radiante, de pelaje deslumbrante y gran bondad.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Bella ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Sasha</td>
              <td class="py-3 px-4 text-zinc-300">Grande / Leal</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Protectora de la familia, valiente, noble y fiel guardiana.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐾 Sasha 🌟</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chloe</td>
              <td class="py-3 px-4 text-zinc-300">Coqueta / Delicada</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Brote fresco de flor, llena de vitalidad y encanto francés.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌺 Chloe 💗</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave de Adiestramiento Canino para Aprender su Nombre</h3>
      <ol>
        <li><strong>Pronunciación Clara y Tono Alegre:</strong> Usa el reproductor de audio interactivo arriba para comparar una lectura sintetizada aproximada.</li>
        <li><strong>Diferencia el Nombre de Comandos:</strong> Evita utilizar nombres que se parezcan fonéticamente a órdenes de mando habituales (como "No", "Sit", "Toma" o "Ven").</li>
        <li><strong>Refuerzo Positivo Inmediato:</strong> Premia con un bocadito, una golosina o muestra de afecto cada vez que tu cachorra te mire o se acerque al pronunciar su nombre.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres para perritas bonitas, cortas y originales. Ideas para cachorras por raza y tamaño con audio de llamado interactivo.',
    keywords: 'nombres para perros hembras, nombres para perritas, nombres para perritas pequeñas, nombres para perritas bonitas, nombres originales de perritas, nombres de perritas cortas, nombres de cachorras, nombres para perritas de raza',
    defaultName: 'Luna',
    customSymbols: ["🐾", "🐶", "🐕", "🐩", "🦴", "🌸", "🎀", "💖", "💕", "👑", "🌟", "✨", "🍖", "🎾", "💗", "🦋", "🌺", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cuántas sílabas debe tener el nombre ideal de una perrita?",
        answer: "Los nombres de dos sílabas son una opción práctica porque suelen ser rápidos de pronunciar y repetir. No es una regla estricta: lo más importante es usar el nombre de forma consistente."
      },
      {
        question: "¿Cuáles son algunos nombres de perrita ?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Luna, Kira, Nala, Maya, Lola, Bella, Sasha, Chloe, Pipa, Mimi, Daisy y Molly."
      },
      {
        question: "¿Cómo elegir un nombre adecuado según la raza y tamaño?",
        answer: "Para perritas pequeñas (Chihuahua, Yorkie, Pomerania) funcionan nombres dulces como Mimi, Chloe, Pipa o Bambi. Para razas grandes (Golden, Pastor Alemán, Labradora) destacan nombres imponentes como Dakota, Arya, Freya, Kora o Sasha."
      },
      {
        question: "¿Puedo crear una placa personalizada o perfil social para mi perrita?",
        answer: "¡Por supuesto! Con nuestro creador interactivo arriba puedes añadir coronitas (👑), huellitas (🐾), huesos (🦴) y flores (🌸) para grabar su placa física o crear su perfil en Instagram y TikTok."
      }
    ]
  },
  'nombres-coreanos': {
    id: 'nombres-coreanos',
    path: '/nombres-coreanos',
    title: 'Nombres Coreanos de Mujer y K-Pop con Hangul | GDN',
    h1: 'Generador de Nombres Coreanos: K-Pop, Doramas y Hangul',
    subtitle: "Descubre los nombres coreanos seleccionados, poéticos e icónicos para niña, niño, Idols de K-Pop y doramas. Incluye escritura en Hangul, romanización, significados y audio de pronunciación.",
    seoText: `
      <h2>Los Mejores Nombres Coreanos, su Escritura en Hangul y Significado Profundo (2026)</h2>
      <p>Gracias al impacto global de la Ola Coreana (<em>Hallyu</em>), impulsada por gigantes del K-Pop (BTS, BLACKPINK, NewJeans, TWICE, Stray Kids) y producciones de K-Dramas (doramas de Netflix), los <strong>nombres coreanos</strong> se han convertido en un referente de estética, modernidad y elegancia. Elegir un nombre coreano es perfecto tanto para crear un perfil aesthetic en TikTok, Instagram, Discord o Roblox, como para bautizar a personajes de novelas, usuarios de Free Fire o mascotas.</p>

      <p>Las romanizaciones personales pueden variar. Consulta las <a href="https://www.korean.go.kr/front_eng/roman/roman_01.do" target="_blank" rel="noopener noreferrer">reglas del Instituto Nacional de la Lengua Coreana</a>. Las lecturas son síntesis del dispositivo, no grabaciones nativas.</p>
      <h3>Categorías Principales de Nombres Coreanos</h3>
      <p>Explora la selección de nombres según su estética cultural y sus referentes en la industria del entretenimiento:</p>
      <ul>
        <li><strong>Nombres Coreanos para Niñas (Estilo Idol e Influencer):</strong> <em>Ji-Eun (지은), Min-Ji (민지), Soo-Ah (수아), Eun-Ji (은지), Chae-Young (채영), Ha-Eun (하은), Yuna (유나)</em> y <em>Ji-Soo (지수)</em>. El significado requiere conocer los hanja concretos de cada persona.</li>
        <li><strong>Nombres Coreanos para Niños (Masculinos y Actores):</strong> <em>Tae-Hyung (태형), Jung-Kook (정국), Min-Ho (민호), Woo-Bin (우빈), Hyun-Woo (현우), Seo-Jun (서준), Eun-Woo (은우)</em> y <em>Sun-Woo (선우)</em>. Estas escrituras en Hangul no fijan un significado único.</li>
        <li><strong>Apellidos Coreanos Tradicionales y Combinaciones:</strong> <em>Kim (김), Lee (이), Park (박), Choi (최), Jung (정), Kang (강)</em> y <em>Yoon (윤)</em>. Combinados con nombres de dos sílabas para formar identificadores auténticos de tres sílabas.</li>
      </ul>

      <h3>Tabla Comparativa: Hangul, Romanización, Significado e Idols Referentes</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Romanización</th>
              <th class="py-3.5 px-4 font-bold">Hangul</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Referente / Combinación</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Ji-Eun</td>
              <td class="py-3 px-4 font-bold text-pink-300">지은</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">IU (Lee Ji-eun) / Ji-Eun Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Tae-Hyung</td>
              <td class="py-3 px-4 font-bold text-pink-300">태형</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">V (BTS) / Kim Tae-Hyung</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Min-Ji</td>
              <td class="py-3 px-4 font-bold text-pink-300">민지</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Minji (NewJeans) / Min-Ji Sky</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Jung-Kook</td>
              <td class="py-3 px-4 font-bold text-pink-300">정국</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Jungkook (BTS) / Jeon Jung-Kook</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Soo-Ah</td>
              <td class="py-3 px-4 font-bold text-pink-300">수아</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Soo-Ah Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Min-Ho</td>
              <td class="py-3 px-4 font-bold text-pink-300">민호</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Lee Min-ho / Min-Ho Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chae-Young</td>
              <td class="py-3 px-4 font-bold text-pink-300">채영</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Rosé (BLACKPINK) / Chae-Young Sofía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Coreanos</h3>
      <ol>
        <li><strong>Estructura la Combinación de 3 Sílabas:</strong> Antepone un apellido familiar de una sola sílaba (ej. <em>Kim, Lee, Park, Choi</em>) seguido del nombre de dos sílabas (ej. <em>Min-Ji, Tae-Hyung, Soo-Ah</em>).</li>
        <li><strong>Aprovecha la Escritura en Hangul:</strong> Los bloques silábicos en Hangul (지, 은, 태, 형) brindan una estética visual única e inconfundible para perfiles sociales y avatares.</li>
        <li><strong>Escucha la Lectura Sintetizada:</strong> Comprueba la eufonía de cada nombre reproduciendo el audio en tiempo real desde el reproductor interactivo de nuestro generador arriba.</li>
      </ol>
    `,
    metaDescription: 'Descubre nombres coreanos de mujer, doramas y K-Pop. Incluye escritura en Hangul, significados poéticos y audio de pronunciación.',
    keywords: 'nombres coreanos de mujer, nombres coreanos, nombres coreanos para niña, nombres coreanos para niño, nombres kpop, nombres en hangul, nombres coreanos masculinos, nombres para doramas, nombres coreanos esteticos',
    defaultName: 'Min Ji',
    customSymbols: ["사랑", "별", "달", "꽃", "눈", "빛", "봄", "여름", "가을", "겨울", "하늘", "바다", "마음", "영혼", "🇰🇷", "✨", "💖", "🌸", "👑", "🎧", "🎀", "⭐", "🔮", "🧸", "✦", "📜", "⚡", "🦋"],
    faqs: [
      {
        question: "¿Cómo se estructuran los nombres coreanos tradicionales?",
        answer: "Suelen constar de 3 sílabas en total: primero el apellido familiar (de 1 sílaba como Kim, Lee, Park, Choi) seguido del nombre propio (generalmente de 2 sílabas como Ji-Eun, Min-Ji o Tae-Hyung)."
      },
      {
        question: "¿Cuáles son algunos nombres coreanos  en K-Pop y Doramas?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. En opciones femeninas destacan Ji-Eun, Min-Ji, Soo-Ah, Eun-Ji, Chae-Young, Ha-Eun y Yuna. En opciones masculinas se incluyen Tae-Hyung, Jung-Kook, Min-Ho, Woo-Bin, Seo-Jun y Eun-Woo."
      },
      {
        question: "¿Puedo usar estos nombres para cuentas aesthetic de TikTok, Instagram, Roblox o Free Fire?",
        answer: "¡Sí! Puedes combinar palabras en Hangul (como 사랑, 별, 달) con símbolos decorativos y nombres de tus idols favoritos para crear nicks auténticos y llamativos."
      },
      {
        question: "¿Cómo escuchar la pronunciación auténtica en coreano (Hangul)?",
        answer: "En el generador interactivo superior puedes ingresar cualquier nombre o palabra en Hangul o Romanizado y hacer clic en el ícono del altavoz (🔊) para solicitar una lectura sintetizada; necesita una voz coreana instalada y la lectura no sustituye a una grabación humana."
      }
    ]
  },
  'nombres-franceses': {
    id: 'nombres-franceses',
    path: '/nombres-franceses',
    title: 'Nombres Franceses para Niña y Niño Elegantes | GDN',
    h1: 'Generador de Nombres Franceses: Elegantes, Románticos y Fonética',
    subtitle: 'Descubre los nombres franceses más refinados, poéticos y melódicos para niña, niño, mascotas y perfiles aesthetic. Incluye pronunciación fonética, significados profundos y audio sintetizado del dispositivo.',
    seoText: `
      <h2>Los Mejores Nombres Franceses Elegantes, Románticos y su Pronunciación (2026)</h2>
      <p>El francés es reconocido mundialmente como el idioma del amor, la alta cultura, la moda parisina y el arte. Los <strong>nombres franceses</strong> destacan por sus melodiosas terminaciones vocálicas, sus acentos característicos (<em>é, è, ë, î</em>), su elegancia innata y sus significados vinculados con la nobleza, las flores y la luz. Son la opción perfecta para nombrar a una bebé o un niño, personajes literarios o de rol, así como para crear perfiles aesthetic en Instagram, TikTok o apodos refinados para videojuegos.</p>

      <p>Referencia: <a href="https://www.behindthename.com/name/antoine" target="_blank" rel="noopener noreferrer">Antoine en Behind the Name</a>. Las asociaciones poéticas no son traducciones literales.</p>
      <h3>Categorías Principales de Nombres Franceses</h3>
      <p>Explora la selección de nombres según su sonoridad y prestigio cultural:</p>
      <ul>
        <li><strong>Nombres Franceses para Niñas (Femeninos y Románticos):</strong> <em>Amélie, Juliette, Chloé, Éloïse, Céleste, Camille, Sophie, Charlotte, Geneviève, Manon</em> y <em>Isabelle</em>. Evocan dulzura poética, delicadeza primaveral y distinción aristocrática.</li>
        <li><strong>Nombres Franceses para Niños (Masculinos y Clásicos):</strong> <em>Gabriel, Antoine, Louis, Étienne, Julien, Matthieu, Alexandre, Adrien, Olivier, Gaspard</em> y <em>Théo</em>. Representan fuerza noble, reyes ilustres, liderazgo y gran estirpe.</li>
        <li><strong>Nombres Cortos Franceses e Internacionales:</strong> <em>Léo, Élise, Guy, Remy, Jules, Inès, Fleur, Maël</em> y <em>Marc</em>. Fáciles de pronunciar en múltiples lenguas con un toque chic e inconfundible.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Francés, Fonética, Género, Significado e Ideas de Combinación</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Francés</th>
              <th class="py-3.5 px-4 font-bold">Guía Fonética</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Amélie</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Ah-meh-lee</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Amélie Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Gabriel</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Gah-bree-ell</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Gabriel Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Juliette</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Zhoo-lee-ett</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Juliette Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Louis</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Loo-ee</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Louis Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chloé</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Kloh-eh</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Brote verde. <a href="https://www.behindthename.com/name/chloe" target="_blank" rel="noopener noreferrer">Fuente de Chloé</a></td>
              <td class="py-3 px-4 font-mono text-indigo-300">Chloé Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Antoine</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Ahn-twahn</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Antoine Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Céleste</td>
              <td class="py-3 px-4 text-pink-300 font-mono">Seh-lest</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Céleste Marie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Franceses</h3>
      <ol>
        <li><strong>Presta Atención a la Acentuación Final:</strong> En francés, la sílaba tónica tiende a ubicarse al final del nombre (ej. <em>Amélie, Juliette, Louis, Chloé</em>), otorgándole una cadencia romántica y sofisticada.</li>
        <li><strong>Combina con Apellidos Hispanos o Internacionales:</strong> Los nombres franceses de dos o tres sílabas como <em>Camille, Gabriel, Éloïse, Céleste</em> o <em>Antoine</em> crean combinaciones elegantes con apellidos hispanos.</li>
        <li><strong>Personaliza Apodos con Títulos de Cortesía:</strong> Para perfiles aesthetic en TikTok, Instagram o videojuegos, combina palabras como <em>Chérie, Fleur, Mademoiselle</em> o <em>Monsieur</em> con símbolos elegantes (⚜️, 🌹, 💎) usando el generador interactivo arriba.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres franceses bonitos y elegantes para niña y niño. Descubre significados románticos y pronunciación en audio con voz sintetizada del dispositivo.',
    keywords: 'nombres franceses, nombres franceses para niña, nombres franceses para niño, nombres elegantes franceses, nombres franceses masculinos, fonetica francesa, nombres franceses bonitos, nombres franceses romanticos',
    defaultName: 'Amélie',
    customSymbols: ["❤️", "⚜️", "🥐", "🥖", "🍷", "🧀", "🎨", "🗼", "🌹", "💋", "💌", "🕊️", "✨", "🥂", "👑", "💎", "🍾", "🎀", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Por qué los nombres franceses son considerados románticos y elegantes?",
        answer: "Romántico y elegante son valoraciones de estilo. Compara la escritura, el ritmo y la pronunciación de las opciones con tus apellidos; no todos los nombres franceses se pronuncian igual."
      },
      {
        question: "¿Cuáles son algunos nombres franceses  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. En opciones femeninas destacan Amélie, Juliette, Chloé, Éloïse, Céleste, Camille, Sophie y Charlotte. En opciones masculinas se incluyen Gabriel, Antoine, Louis, Étienne, Julien, Alexandre y Adrien."
      },
      {
        question: "¿Cómo funciona la guía fonética y pronunciación en francés?",
        answer: "El francés suele suavizar o mantener mudas las consonantes finales y enfatizar la vocal final. En nuestro reproductor superior puedes hacer clic en el botón de audio para escuchar la lectura sintetizada del dispositivo de cualquier nombre."
      },
      {
        question: "¿Puedo añadir títulos de cortesía como Mademoiselle o Monsieur en el generador?",
        answer: "¡Por supuesto! Puedes ingresar prefijos como Mademoiselle, Monsieur, Chérie o Fleur junto a símbolos de flor de lis (⚜️), rosas (🌹) o perlas (💎) para copiar apodos chic al instante."
      }
    ]
  },
  'nombres-mayas': {
    id: 'nombres-mayas',
    path: '/nombres-mayas',
    title: 'Nombres Mayas para Niña y Niño con Significado | GDN',
    h1: 'Generador de Nombres Mayas y Prehispánicos: Naturaleza, Mitología y Dioses',
    subtitle: 'Descubre los nombres mayas y prehispánicos más sagrados, hermosos e imponentes para niña, niño, deidades y apodos de videojuegos. Incluye significados profundos, etimología astral y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres Mayas Auténticos, su Significado y Mitología Sagrada (2026)</h2>
      <p>La civilización maya es una de las culturas místicas y sabias más fascinantes de la historia de la humanidad. Sus <strong>nombres mayas y prehispánicos</strong> destacan por su profunda veneración hacia los elementos cósmicos, la astronomía, las selvas sagradas, los animales de poder (como el jaguar y el quetzal) y sus deidades tutelares (Ixchel, Kinich Ahau, K'uk'ulkan, Chaac). Maya y náhuatl son lenguas distintas. No deben confundirse ni atribuir un origen maya a un nombre sin una fuente lingüística. Consulta el <a href="https://codicemayademexico.inah.gob.mx/" target="_blank" rel="noopener noreferrer">Códice Maya de México del INAH</a> para conocer la escritura maya; los emoji del generador son decorativos.</p>

      <h3>Categorías Principales de Nombres Mayas y Prehispánicos</h3>
      <p>Explora nuestra selección de nombres indígenas autóctonos agrupados por sus atributos y raíces sagradas:</p>
      <ul>
        <li><strong>Nombres Mayas para Niñas (Espirituales y Hermosos):</strong> <em>Ixchel</em>. La asociación de Ixchel con la tradición maya no confirma todas las traducciones difundidas en internet.</li>
        <li><strong>Nombres Mayas para Niños (Guerreros, Sol y Naturaleza):</strong> <em>Balam, Kinich, Canek, Kaknab, Yaxkin, Akbal, Itzamná, Xbalanqué, Yum Kax, K'uk'ulkan</em> y <em>Chilam</em>. Evocan al jaguar protector de la selva, al sol radiante, la serpiente emplumada y referentes mitológicos; su uso como nombres personales requiere revisión.</li>
        <li><strong>Nombres de Animales de Poder y Astros:</strong> <em>Balam</em> (jaguar), <em>K'uk'</em> (quetzal), <em>Kan</em> (serpiente sagrada), <em>K'in</em> (sol) y <em>U</em> (luna). Ideales para avatares, mascotas y nicks aesthetic.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Maya, Género, Simbolismo, Significado y Combinación</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre / Propuesta</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Simbolismo / Elemento</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Ixchel</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Diosa Mayor de la Luna</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Ixchel Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Balam</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 text-zinc-300">Animal Sagrado (Jaguar)</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Balam Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Itza</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 text-zinc-300">Referencia cultural por verificar</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Itza Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Kinich</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Dios Solar (Kinich Ahau)</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Kinich Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Nicté</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Flor de Mayo</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Nicté Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Canek</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Nombre histórico</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Canek Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Yaretzi</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Origen por verificar</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Yaretzi Sky</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Mayas y Prehispánicos</h3>
      <ol>
        <li><strong>Conoce el Elemento Sagrado:</strong> Asocia el nombre con su simbolismo natural (agua en Itza, flor en Nicté, jaguar en Balam, luna en Ixchel).</li>
        <li><strong>Combínalo con un Segundo Nombre Armónico:</strong> Para bebés, la fusión de un nombre maya profundo con un segundo nombre lírico (ej. <em>Ixchel Sofía, Balam Gael, Nicté Valentina</em>) crea un conjunto de gran eufonía.</li>
        <li><strong>Utiliza Símbolos Prehispánicos para Nicks y Avatares:</strong> Enriquece tus perfiles en Free Fire, Roblox o redes sociales añadiendo emoji decorativos (☀️, 🐆, 🪶, 🗿, 🐍) con nuestro generador arriba.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres mayas y prehispánicos para niña y niño. Descubre significados de deidades, la naturaleza y audio de pronunciación.',
    keywords: 'nombres mayas, nombres mayas para niña, nombres mayas para niño, nombres prehispanicos, nombres de dioses mayas, nombres mayas con significado, nombres mayas de hombre, nombres mayas femeninos',
    defaultName: 'Ixchel',
    customSymbols: ["☀️", "🌙", "⭐", "🦅", "🐆", "🐍", "🌽", "🔥", "💧", "🌿", "🗿", "🌴", "🦜", "🐢", "🪶", "👑", "✨", "🏹", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Qué representan los elementos de la naturaleza en los nombres mayas?",
        answer: "Para la civilización maya, la naturaleza y el ser humano estaban estrechamente conectados. Las asociaciones simbólicas no deben confundirse con traducciones literales ni con un registro de nombres personales."
      },
      {
        question: "¿Cuáles son algunos nombres mayas  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. La selección incluye referencias como Ixchel y Balam. No contamos con estadísticas que acrediten su popularidad; el origen y las etimologías de las demás propuestas requieren verificación."
      },
      {
        question: "¿Puedo usar un nombre maya como nick para videojuegos o redes sociales?",
        answer: "¡Por supuesto! Los nombres mayas transmiten misticismo, fuerza espiritual y originalidad única ante rivales en plataformas como Free Fire, Roblox, Genshin Impact y TikTok."
      },
      {
        question: "¿Cómo escuchar la pronunciación en audio de cada nombre maya?",
        answer: "En el generador interactivo arriba puedes ingresar cualquier nombre maya o combinación y presionar el altavoz para solicitar una lectura sintetizada en español. No es una grabación nativa ni confirma la pronunciación en una lengua maya."
      }
    ]
  },
  'nombres-gatos': {
    id: 'nombres-gatos',
    path: '/nombres-gatos',
    title: 'Nombres para Gatos y Gatitas - Ideas Bonitas | GDN',
    h1: 'Generador de Nombres para Gatos: Machos, Hembras y Gatitos Recién Nacidos',
    subtitle: 'Descubre los nombres para michis más bonitos, cortos y graciosos. Incluye significados por tipo de pelaje, audio de llamado felino y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres para Gatos, Gatitas y Gatitos Recién Nacidos (2026)</h2>
      <p>Elegir el nombre perfecto para un gato o gatita es un momento mágico e inolvidable. Para el uso cotidiano suelen ser cómodos los nombres cortos y fáciles de repetir. Opciones como <em>Mochi, Simba, Salem, Kira, Felix, Luna, Mimi, Garfield</em> o <em>Nieve</em> funcionan bien como inspiración porque se pronuncian con rapidez y tienen sonidos claramente diferenciables.</p>

      <h3>Categorías Principales de Nombres Felinos</h3>
      <p>El aspecto físico y el carácter único de tu felino son la mejor fuente de inspiración:</p>
      <ul>
        <li><strong>Gatos Naranjas o Rubios (Tabby / Garfield):</strong> Nombres cálidos y divertidos como <em>Mandarina, Nacho, Garfield, Cheeto, Mango, Caramel, Solecito</em> y <em>Simba</em>.</li>
        <li><strong>Gatos Negros (Panteritas Místicas):</strong> Nombres elegantes y misteriosos como <em>Salem, Sombra, Onyx, Eclipse, Merlín, Bagheera, Noche</em> y <em>Kuro</em>.</li>
        <li><strong>Gatos Blancos y Esponjosos:</strong> Nombres inspirados en la pureza y suavidad como <em>Copito, Mochi, Nieve, Algodón, Perla, Tofu, Coco</em> y <em>Lumi</em>.</li>
        <li><strong>Gatos Grises, Siamés o Ruso Azul:</strong> Nombres finos y aristocráticos como <em>Grisie, Ceniza, Silver, Smoke, Mist, Smokey, Sombra</em> y <em>Kira</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Felino, Estilo / Pelaje, Género, Significado y Apodo Recomendado</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Gato</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Pelaje</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Mochi</td>
              <td class="py-3 px-4 text-zinc-300">Blanco / Esponjoso</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pastel japonés dulce, suave, tierno y reconfortante.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐾 Mochi 💖</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Simba</td>
              <td class="py-3 px-4 text-zinc-300">Naranja / Rubio</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">León valiente, rey joven, explorador y espíritu curioso.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Simba 🦁</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Kira</td>
              <td class="py-3 px-4 text-zinc-300">Gris / Atigrado / Elegante</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rayo de luz radiante, brillante, alegre y veloz.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">✨ Kira 🐾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Salem</td>
              <td class="py-3 px-4 text-zinc-300">Negro / Místico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Paz, tranquilidad y legendario gato negro de sabiduría.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐈‍⬛ Salem 🌙</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Felix</td>
              <td class="py-3 px-4 text-zinc-300">Clásico / Atigrado</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Afortunado, feliz, próspero y cazador audaz.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">😼 Felix ⭐</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Luna</td>
              <td class="py-3 px-4 text-zinc-300">Blanco / Gris / Místico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Astro nocturno brillante, misteriosa y serena.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌙 Luna ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Milo</td>
              <td class="py-3 px-4 text-zinc-300">Juguetón / Cariñoso</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Amistoso, misericordioso, leal y gran compañero.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🧶 Milo 🐟</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Nieve</td>
              <td class="py-3 px-4 text-zinc-300">Blanco / Algodón</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Blancura pura, copos de nieve y suavidad infinita.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🥛 Nieve ❄️</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave de Adiestramiento Felino para Aprender su Nombre</h3>
      <ol>
        <li><strong>Aprovecha Frecuencias Agudas:</strong> Usa el reproductor de audio interactivo arriba para escuchar cómo suena el nombre en tono agudo y cariñoso, ideal para la percepción felina.</li>
        <li><strong>Asociación Positiva Inmediata:</strong> Premia a tu gato con alimento húmedo, golosinas o caricias en la barbilla cada vez que vuelva hacia ti al llamarlo.</li>
        <li><strong>Evita el Uso del Nombre para Regaños:</strong> No utilices su nombre para reprimendas para prevenir que asocie su identificación con emociones negativas.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres para gatos machos y hembras. Ideas cortas, graciosas y bonitas por color de pelaje con audio de llamado interactivo.',
    keywords: 'nombres para gatos, nombres para gatitos, nombres de gatos machos, nombres de gatos hembras, nombres para gatos naranjas, nombres originales para gatos, nombres bonitos para gatos, nombres para gatos pequeños',
    defaultName: 'Mochi',
    customSymbols: ["🐾", "🐱", "🐈", "🐟", "🧶", "🐁", "🥛", "😻", "😽", "😺", "😸", "💖", "✨", "🍊", "🐈‍⬛", "👑", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Qué debo considerar al pronunciar el nombre de mi gato?",
        answer: "No aportamos evidencia de que esas letras hagan que un gato responda mejor. Elige un nombre fácil de repetir y observa cómo responde tu animal; no atribuimos una ventaja auditiva a estas propuestas."
      },
      {
        question: "¿Cuáles son algunos nombres de gato ?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Mochi, Simba, Salem, Felix, Milo, Oliver y Thor. En hembras se incluyen Luna, Kira, Nieve, Mishi, Chloe, Mia y Bella."
      },
      {
        question: "¿Cómo saber qué nombre elegir según el color del gato?",
        answer: "Para gatos naranjas destacan Mandarina, Nacho, Simba y Garfield. Para gatos negros triunfan Salem, Sombra, Onyx y Bagheera. Para gatos blancos sobresalen Copito, Mochi, Nieve y Tofu."
      },
      {
        question: "¿Puedo crear una placa personalizada o perfil de redes para mi michi?",
        answer: "¡Por supuesto! En nuestro creador interactivo arriba puedes agregar emoticonos de huellitas (🐾), peces (🐟), lana (🧶) o coronas (👑) para grabar su collar o crearle una biografía única en Instagram o TikTok."
      }
    ]
  },
  'nombres-gatos-negros': {
    id: 'nombres-gatos-negros',
    path: '/nombres-gatos-negros',
    title: 'Nombres para Gatos Negros - Místicos y Únicos | GDN',
    h1: 'Generador de Nombres para Gatos Negros: Místicos, Magia y Panteritas',
    subtitle: 'Descubre los mejores nombres para gatos y gatitas negras. Incluye significados por temática mística, cine y anime, audio de llamado felino y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres Místicos, Mágicos y Épicos para Gatos Negros (2026)</h2>
      <p>Los gatos negros son criaturas fascinantes repletas de elegancia, magnetismo y un aura misteriosa incomparable. A lo largo de la historia y en diversas culturas (como la celta, la nórdica, la egipcia o la japonesa), las mini panteras han sido veneradas como guardianes del hogar, protectores espirituales y símbolos vivientes de buena fortuna. Elegir el nombre de un gato o gatita negra permite explorar temáticas inspiradoras como la astronomía, la magia, el cine, el anime y la mitología.</p>

      <h3>Categorías Principales de Nombres para Gatos Negros</h3>
      <p>Personajes legendarios y estilos que han inmortalizado a los felinos de pelaje azabache:</p>
      <ul>
        <li><strong>Nombres de Cine y Televisión:</strong> <em>Salem</em> (Sabrina), <em>Bagheera</em> (El Libro de la Selva), <em>Binx</em> (Hocus Pocus), <em>Lucifer</em> (Cenicienta) y <em>Sylvester</em>.</li>
        <li><strong>Nombres de Anime y Cultura Pop:</strong> <em>Jiji</em> (Kiki entregas a domicilio), <em>Kuro</em> (Ao no Exorcist), <em>Luna</em> (Sailor Moon) y <em>Blair</em> (Soul Eater).</li>
        <li><strong>Nombres Místicos, Mágicos y de la Noche:</strong> <em>Sombra, Eclipse, Onyx, Merlín, Hécate, Nix, Nocturno, Obsidian, Cosmos, Astra</em> y <em>Voodoo</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre para Gato Negro, Estilo, Género, Significado y Placa Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Gato Negro</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Temática</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Salem</td>
              <td class="py-3 px-4 text-zinc-300">Cine / Místico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Paz, tranquilidad y legendario gato sabio parlante de televisión.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐈‍⬛ Salem 🌙</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Jiji</td>
              <td class="py-3 px-4 text-zinc-300">Anime / Studio Ghibli</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Compañero leal, protector de brujitas y espíritu inteligente.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">✨ Jiji 🧹</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Kuro</td>
              <td class="py-3 px-4 text-zinc-300">Japonés / Kawaii</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Negro azabache, elegancia nocturna y velocidad felina.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐾 Kuro 🖤</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Bagheera</td>
              <td class="py-3 px-4 text-zinc-300">Cine / Panterita</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pantera negra sabia, protectora, ágil y de porte regio.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Bagheera 🐆</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Binx</td>
              <td class="py-3 px-4 text-zinc-300">Cine / Halloween</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Gato inmortal, alma noble, leal y valiente guardián.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🔮 Binx 🎃</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Onyx</td>
              <td class="py-3 px-4 text-zinc-300">Mineral / Mágico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Piedra preciosa negra, fortaleza, protección contra malas vibras.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">💎 Onyx 🖤</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Sombra</td>
              <td class="py-3 px-4 text-zinc-300">Sigilo / Noche</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Silueta misteriosa, movimiento silencioso y encanto felino.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌑 Sombra 🖤</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Merlín</td>
              <td class="py-3 px-4 text-zinc-300">Mágico / Leyenda</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Mago supremo, gran sabiduría, aura mística y mirada penetrante.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🪄 Merlín ✨</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres de Gatos Negros</h3>
      <ol>
        <li><strong>Resalta la Elegancia de su Pelaje Azabache:</strong> Opta por nombres vinculados a minerales oscuros (Onyx, Obsidian, Ágata) o la inmensidad de la noche (Eclipse, Cosmos, Nocturno, Sombra).</li>
        <li><strong>Usa Referencias de Películas y Anime:</strong> Nombres populares como Salem, Jiji, Kuro, Binx o Bagheera aportan una personalidad reconocible y divertida.</li>
        <li><strong>Personaliza su Placa y Perfil Social:</strong> Añade emoticonos de lunas (🌙), murciélagos (🦇), varitas mágicas (🪄) o estrellas (✨) con el creador interactivo arriba para copiar nicks o grabar su collar.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres para gatos negros y gatitas. Ideas místicas, de películas y anime con audio de llamado felino e identificador de placa.',
    keywords: 'nombres para gatos negros, nombres de gatos negros, nombres para panteras, nombres de gatos negros machos, nombres de gatos negros hembras, nombres de brujas para gatos, nombres misticos para gatos, nombres para gatitas negras',
    defaultName: 'Salem',
    customSymbols: ["🐈‍⬛", "🌙", "⭐", "✨", "🔮", "🪄", "🦇", "🕷️", "🕸️", "🖤", "☠️", "👻", "🎃", "🌑", "🦉", "💎", "🧹", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Es cierto que los gatos negros traen buena suerte?",
        answer: "Las creencias sobre gatos negros varían entre culturas y son tradiciones, no garantías de suerte. El color del pelaje no determina la fortuna del hogar."
      },
      {
        question: "¿Cuáles son los nombres más famosos para gatos negros masculinos y femeninos?",
        answer: "En opciones masculinas triunfan Salem, Jiji, Kuro, Bagheera, Binx, Merlín, Onyx y Felix. En opciones femeninas destacan Luna, Sombra, Nix, Hécate, Mora, Tinta, Trufa y Velvet."
      },
      {
        question: "¿Por qué los nombres místicos y de la noche son tan populares para las panteritas?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Porque resaltan el aura misteriosa, el andar silencioso y el brillante pelaje negro azabache de estos felinos, evocando astros, gemas preciosas y leyendas de magia."
      },
      {
        question: "¿Cómo funciona el generador interactivo y creador de placas?",
        answer: "Ingresa el nombre de tu minipantera, selecciona su estilo (místico, anime, cine) y añade marcos decorativos con lunas (🌙), estrellas (✨) o varitas (🪄) para copiarlo a redes sociales o grabar su placa física."
      }
    ]
  },
  'nombres-gatos-machos': {
    id: 'nombres-gatos-machos',
    path: '/nombres-gatos-machos',
    title: 'Nombres para Gatos Machos - Originales y Cortos | GDN',
    h1: 'Generador de Nombres para Gatos Machos: Cortos, Épicos y Tiernos',
    subtitle: 'Descubre los mejores nombres para gatos machos y gatitos recién nacidos. Incluye significados por personalidad, tabla de estilos, audio interactivo de llamado felino y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres para Gatos Machos y Gatitos Recién Nacidos (2026)</h2>
      <p>Dar la bienvenida a un gato macho a la familia es una experiencia emocionante e inolvidable. Ya sea un inquieto gatito atigrado, un cariñoso michi naranja o una elegante panterita negra, encontrar un nombre que refleje su temperamento, agilidad y personalidad es fundamental. Para el llamado diario suelen resultar prácticos los nombres cortos y fáciles de repetir, como <em>Simba, Loki, Milo, Thor, Zeus, Felix, Oliver, Salem, Nacho</em> o <em>Chester</em>.</p>

      <h3>1. Clasificación de Nombres para Gatos Machos Según su Personalidad y Pelaje</h3>
      <p>Observa el comportamiento y los rasgos de tu felino para elegir el nombre perfecto:</p>
      <ul>
        <li><strong>Gatos Valientes y Líderes (Épicos / Mitología / Reyes):</strong> Nombres con gran porte y fuerza como <em>Simba, Thor, Zeus, Ares, Leo, Rey, Kaiser, Apolo, Titán, Hércules, Balam</em> y <em>Dante</em>.</li>
        <li><strong>Gatos Juguetones y Traviesos (Divertidos):</strong> Nombres dinámicos como <em>Loki, Nacho, Taco, Chester, Bandido, Charly, Bubu, Pixel, Ziggy, Cheeto</em> y <em>Mango</em>.</li>
        <li><strong>Gatos Cariñosos y Suaves (Tiernos / Gastronomía):</strong> Nombres dulces como <em>Mochi, Milo, Oreo, Copito, Caramel, Tofu, Baloo, Peluche, Miso</em> y <em>Brownie</em>.</li>
        <li><strong>Gatos Elegantes y Misteriosos (Aristocráticos / Cine):</strong> Nombres finos como <em>Oliver, Duque, Merlín, Salem, Félix, Romeo, Gatsby, Kuro, Bagheera</em> y <em>Jasper</em>.</li>
      </ul>

      <h3>2. Tabla Comparativa: Nombre para Gato Macho, Estilo, Significado y Placa Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Gato Macho</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Carácter</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Simba</td>
              <td class="py-3 px-4 text-zinc-300">Épico / Rey / Naranja</td>
              <td class="py-3 px-4 font-medium text-zinc-100">León valiente, rey joven, explorador e intrépido cazador</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">👑 Simba 🦁</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Loki</td>
              <td class="py-3 px-4 text-zinc-300">Travieso / Mitológico</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Dios de las travesuras, astuto, veloz y lleno de energía</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">⚡ Loki 🐾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Milo</td>
              <td class="py-3 px-4 text-zinc-300">Cariñoso / Dulce</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Amistoso, misericordioso, leal y gran compañero de hogar</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">🧶 Milo 🐟</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Thor</td>
              <td class="py-3 px-4 text-zinc-300">Fuerte / Imponente</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Dios del trueno, fuerza indomable, protector y valiente</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">🔨 Thor ⚡</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zeus</td>
              <td class="py-3 px-4 text-zinc-300">Majestuoso / Líder</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rey de los dioses, aura dorada, brillo y liderazgo supremo</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">⚡ Zeus 👑</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Felix</td>
              <td class="py-3 px-4 text-zinc-300">Clásico / Afortunado</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Afortunado, próspero, dichoso y cazador ágil de ratones</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">😼 Felix ⭐</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Oliver</td>
              <td class="py-3 px-4 text-zinc-300">Elegante / Distinguido</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Olivo de la paz, nobleza, serenidad y porte distinguido</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">🕊️ Oliver ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Salem</td>
              <td class="py-3 px-4 text-zinc-300">Místico / Negro</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Paz, tranquilidad y legendario felino sabio de pelaje nocturno</td>
              <td class="py-3 px-4 font-mono text-xs text-indigo-300">🐈‍⬛ Salem 🌙</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3. Trucos de Adiestramiento para que tu Gato Macho Reconozca su Nombre</h3>
      <p>Para lograr que tu felino acuda a tu llamado sin titubear:</p>
      <ul>
        <li>Usa el simulador de audio de nuestra herramienta interactiva para practicar el llamado con tono agudo y constante.</li>
        <li>Pronuncia su nombre siempre antes de ofrecerle su plato de comida húmeda, una golosina o su juguete preferido.</li>
        <li>Mantén el nombre corto (2 sílabas); si escoges un nombre largo, acostúmbrate a usar un diminutivo cariñoso constante.</li>
      </ul>

      <h3>Preguntas Frecuentes sobre Nombres de Gatos Machos</h3>
      <div class="space-y-4 not-prose my-6">
        <div class="bg-zinc-900/60 border border-white/10 rounded-xl p-4">
          <h4 class="font-bold text-white text-base">¿Cuáles son los nombres de gatos machos más populares en español?</h4>
          <p class="text-xs text-zinc-400 mt-1">Los nombres líderes en España y Latinoamérica son <strong>Simba, Leo, Milo, Felix, Loki y Thor</strong> gracias a su sonoridad clara y facilidad de retención.</p>
        </div>
        <div class="bg-zinc-900/60 border border-white/10 rounded-xl p-4">
          <h4 class="font-bold text-white text-base">¿Puedo crear una placa de identificación o perfil de TikTok para mi gato macho?</h4>
          <p class="text-xs text-zinc-400 mt-1">¡Claro que sí! Con nuestro creador interactivo arriba puedes añadir coronas (👑), garras (🐾), rayos (⚡), peces (🐟) y estrellas (✨) para mandar a grabar su collar o su perfil social.</p>
        </div>
      </div>
    `,
    metaDescription: 'Descubre los mejores nombres para gatos machos y gatitos. Nombres bonitos, cortos y épicos con audio interactivo de llamado felino.',
    keywords: 'nombres para gatos machos, nombres de gatos machos, nombres para gatitos machos, nombres de gatos machos originales, nombres para gatos machos cortitos, nombres bonitos para gatos machos',
    defaultName: 'Simba',
    customSymbols: ["🐾", "🐈", "🦁", "🐅", "👑", "⚡", "🔥", "⭐", "💪", "🐟", "🧶", "🏆", "🍊", "🐈‍⬛", "😼", "🔨", "🌟"],
  },
  'nombres-peluches': {
    id: 'nombres-peluches',
    path: '/nombres-peluches',
    title: 'Nombres para Peluches y Osos - Tiernos y Bonitos | GDN',
    h1: 'Generador de Nombres para Peluches y Certificado de Adopción',
    subtitle: 'Explora nombres tiernos y creativos para ositos, Squishmallows y otros peluches, con una ficha de adopción de juego y lectura sintetizada opcional.',
    seoText: `
      <h2>Ideas de Nombres para Peluches, Ositos de Felpa, Squishmallows y Muñecos</h2>
      <p>Ponerle un nombre a un peluche, osito de felpa o muñeco es un ritual entrañable lleno de ternura, nostalgia y afecto. Ya sea un osito clásico reglado por una persona especial, un Squishmallow ultra suave y esponjoso, un tierno conejito de orejas largas, un peluche kawaii de gatito o un majestuoso unicornio, bautizar a tu compañero suave le otorga una personalidad única y crea un recuerdo emotivo imborrable para toda la vida.</p>

      <h3>Categorías Principales de Nombres para Peluches</h3>
      <p>Explora nuestras mejores categorías de nombres agrupadas por el carácter y la ternura del muñeco:</p>
      <ul>
        <li><strong>Squishmallows y Peluches Ultra Esponjosos:</strong> Nombres inspirados en nubes, postres y dulzura blanda: <em>Mochi, Algodón, Marshmallow, Nube, Tofu, Pompon, Copito, Malvavisco, Bubbles, Cannoli, Waffle</em> y <em>Bananita</em>.</li>
        <li><strong>Ositos de Felpa Clásicos (Teddy Bears):</strong> Nombres cálidos y abrazables para toda la vida: <em>Teddy, Sr. Abrazos, Miel, Canela, Brownie, Choco, Osito, Copo, Bruno, Barnaby</em> y <em>Brumbo</em>.</li>
        <li><strong>Peluches Kawaii, Anime y Comida Dulce:</strong> Nombres inspirados en la cultura japonesa y repostería: <em>Boba, Dumpling, Sakura, Miso, Kiki, Puchi, Muffin, Cookie, Nutella, Mochi-Mochi</em> y <em>Matcha</em>.</li>
        <li><strong>Dinosaurios, Unicornios y Criaturas Fantásticas:</strong> Nombres mágicos y juguetones: <em>Dino, Sparkle, Arcoíris, Chispita, Stella, Rex, Nibbles, Puff, Stitch, Yoshi</em> y <em>Kirby</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre de Peluche, Tipo / Textura, Estilo, Significado y Promesa de Adopción</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre del Peluche</th>
              <th class="py-3.5 px-4 font-bold">Tipo / Textura</th>
              <th class="py-3.5 px-4 font-bold">Estilo de Nombre</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Promesa de Adopción Creativa</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Algodón</td>
              <td class="py-3 px-4 text-zinc-300">Osito de Felpa</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Tierno / Clásico</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Suave como la nube más blanca, ideal para abrazos nocturnos.</td>
              <td class="py-3 px-4 font-mono text-pink-300">🧸 Cuidados y abrazos diarios ☁️</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Mochi</td>
              <td class="py-3 px-4 text-zinc-300">Squishmallow</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Kawaii / Postre</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Inspirado en el dulce japonés ultra blando y apretable.</td>
              <td class="py-3 px-4 font-mono text-pink-300">🍡 Amor esponjoso permanente 💖</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Boba</td>
              <td class="py-3 px-4 text-zinc-300">Gatito / Panda Kawaii</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Moderno / Dulce</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Por las perlas de té de burbujas, dulce, tierno y encantador.</td>
              <td class="py-3 px-4 font-mono text-pink-300">🧋 Acompañante de aventuras ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Sr. Abrazos</td>
              <td class="py-3 px-4 text-zinc-300">Oso Gigante</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Distinguido / Afectuoso</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Un guardián cariñoso con título de caballero que consuela en todo momento.</td>
              <td class="py-3 px-4 font-mono text-pink-300">👑 Abrazos en noches frías 🎀</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Marshmallow</td>
              <td class="py-3 px-4 text-zinc-300">Conejito Blanco</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Dulce / Esponjoso</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Sabor a malvavisco dulce, ternura pura y suavidad infinita.</td>
              <td class="py-3 px-4 font-mono text-pink-300">☁️ Amor dulce para siempre 🍬</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-300">Sparkle</td>
              <td class="py-3 px-4 text-zinc-300">Unicornio Mágico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Fantasía / Brillo</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Lleno de destellos estelares, sueños mágicos y colores brillantes.</td>
              <td class="py-3 px-4 font-mono text-pink-300">🦄 Magia y sueños felices ✨</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Crear y Celebrar la Adopción de tu Peluche</h3>
      <ol>
        <li><strong>Ficha Creativa de Adopción:</strong> Rellena el formulario interactivo superior con el nombre, tipo de muñeco, nombre del adoptante y su súper poder o promesa.</li>
        <li><strong>Pronunciación y Audio Cariñoso:</strong> Utiliza el reproductor de voz integrado para escuchar cómo suena el nombre de tu peluche en voz alta.</li>
        <li><strong>Celebración de Cumpleaños:</strong> Puedes usar la fecha de la ficha como un cumpleaños o aniversario de adopción de juego si te apetece mantener esa tradición.</li>
      </ol>
    `,
    metaDescription: 'Nombres para peluches, osos de felpa y juguetes. Ideas tiernas, bonitas y creativas para darle personalidad a tus muñecos favoritos.',
    keywords: 'nombres para peluches, nombres de peluches, nombres para ositos de peluche, nombres para squishmallows, acta de adopcion peluche, certificado de adopcion peluche, nombres tiernos para muñecos, nombres para peluches kawaii',
    defaultName: 'Algodón',
    customSymbols: ["🧸", "🎀", "💖", "💕", "☁️", "✨", "🐰", "🦕", "🦄", "🐼", "🐱", "🌸", "🍭", "🍪", "🍡", "🧋", "🧁", "🍩", "🐻", "🐾", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cómo elegir un nombre único y tierno para mi peluche o Squishmallow?",
        answer: "Puedes inspirarte en tu postre favorito (Boba, Mochi, Muffin, Cannoli), en una característica de su apariencia o textura (Copito, Canela, Nube, Algodón) o agregar un título cariñoso de distinción como Sr. Abrazos o Princesa Pelusa."
      },
      {
        question: "¿Cuáles son algunos nombres  para peluches y Squishmallows?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Mochi, Algodón, Boba, Marshmallow, Teddy, Sr. Abrazos, Copito, Sparkle, Dumpling, Cannoli, Nube y Sakura."
      },
      {
        question: "¿Cómo funciona el Certificado / Acta de Adopción de Peluches interactivo?",
        answer: "La ficha es un recuerdo de juego: escribe los datos, elige la decoración y copia el texto preparado. No es un documento oficial ni una adopción con efectos legales."
      },
      {
        question: "¿Puedo escuchar una lectura del nombre de mi peluche?",
        answer: "Puedes solicitar una lectura sintetizada con la voz disponible en tu dispositivo. No es una grabación humana ni una comprobación lingüística."
      }
    ]
  },
  'generador-free-fire': {
    id: 'generador-free-fire',
    path: '/generador-free-fire',
    title: 'Generador de Nombres para Free Fire con Símbolos | GDN',
    h1: 'Generador y Creador de Nombres para Free Fire',
    subtitle: 'Escribe una base, prueba símbolos y espacios, revisa la longitud y copia variantes para comprobarlas directamente en Free Fire.',
    seoText: `
      <h2>Generador de Nombres para Free Fire: de una Base a Variantes Copiables</h2>
      <p>Esta página tiene una intención de herramienta: tú escribes una palabra o apodo base y el generador produce variantes visuales con letras Unicode, símbolos y separadores. A diferencia de la guía de <a href="/nombres-free-fire">nombres para Free Fire</a>, aquí el punto de partida es tu propio texto.</p>

      <h3>Flujo recomendado para crear un apodo</h3>
      <ol>
        <li><strong>Escribe una base corta</strong> que puedas reconocer fácilmente.</li>
        <li><strong>Prueba una familia de símbolos</strong> en lugar de añadir muchos a la vez.</li>
        <li><strong>Revisa la longitud visible</strong> y simplifica la variante si queda demasiado cargada.</li>
        <li><strong>Copia y prueba el resultado en Free Fire</strong> antes de decidirte.</li>
      </ol>

      <h3>Qué comprueba el generador y qué decide el juego</h3>
      <p>La herramienta puede transformar texto, contar caracteres visibles y facilitar la copia. No consulta la base de datos de Free Fire, no reserva nombres y no puede garantizar que cada carácter Unicode sea aceptado por una versión concreta del juego. Si necesitas separar palabras, consulta la guía de <a href="/espacios-invisible-ff">espacio invisible para Free Fire</a>.</p>

      <h3>Usa la página específica cuando tu intención sea distinta</h3>
      <p>Para nombres de equipo ve a <a href="/nombres-clanes-ff">clanes y escuadras</a>; para inspiración femenina consulta <a href="/nombres-ff-mujeres">nombres de mujer para Free Fire</a>; y para variaciones centradas en originalidad visual usa <a href="/nombres-ff-unicos">nombres únicos</a>. Esta separación evita mezclar herramientas y listas con objetivos diferentes.</p>
    `,
    metaDescription: 'Generador de nombres para Free Fire: escribe tu apodo, crea variantes con símbolos y espacios, revisa longitud y copia el resultado para probarlo en el juego.',
    keywords: 'generador de nombres para free fire, creador de nombres para free fire, crear nombres para free fire, nombres para free fire',
    defaultName: 'Insano',
    customSymbols: ["ㅤ", "Ⓥ", "꧁", "꧂", "༺", "༻", "⚡", "☠︎", "👑", "✿", "☬", "⚔️", "☯︎", "★", "♥", "✨", "🔥", "ツ", "×͜×", "シ", "ッ", "メ", "🔫"],
    faqs: [
      {
        question: "¿Este generador comprueba si un nombre está disponible en Free Fire?",
        answer: "No. Genera y formatea texto; la disponibilidad solo puede confirmarse al probar el nombre dentro del juego."
      },
      {
        question: "¿Qué diferencia hay entre este generador y la lista de nombres para Free Fire?",
        answer: "Aquí partes de tu propio texto y lo transformas. La página de nombres para Free Fire funciona principalmente como guía e inspiración por estilos."
      },
      {
        question: "¿Todos los símbolos generados funcionan en cualquier versión de Free Fire?",
        answer: "No se puede garantizar. La aceptación de caracteres puede cambiar según la versión, la plataforma y las reglas del juego."
      }
    ]
  },
  'espacios-invisible-ff': {
    id: 'espacios-invisible-ff',
    path: '/espacios-invisible-ff',
    title: 'Espacio Invisible para Free Fire - U+3164 y U+3000 | GDN',
    h1: 'Generador y Copiador de Espacio Invisible para Free Fire',
    subtitle: 'Copia Hangul Filler (U+3164), U+1160 y el espacio ideográfico U+3000 para probar separaciones Unicode en nombres y clanes.',
    seoText: `
      <h2>El Mejor Generador y Copiador de Espacio Invisible para Free Fire</h2>
      <p>El <strong>espacio invisible para Free Fire</strong> (también conocido como <em>letra transparente</em>, <em>espacio en blanco Unicode</em> o <em>código transparente</em>) puede servir para separar el tag de tu clan de tu nombre cuando tu versión del juego admite ese carácter (por ejemplo: <code>TM ㅤ INSANO</code>) o crear un <strong>nickname 100% invisible o fantasma</strong>.</p>
      
      <p>Garena Free Fire bloquea la barra espaciadora predeterminada del teclado Android e iOS. Por esa razón, necesitas utilizar el carácter especial <strong>Unicode U+3164 (Hangul Filler)</strong>, <strong>U+1160 (Hangul Jungseong Filler)</strong> o <strong>U+3000 (Ideographic Space)</strong>, el cual el motor del juego procesa como una letra válida pero renderiza de forma totalmente invisible.</p>

      <h3>Opciones de Espacio Invisible para Copiar (1-Clic)</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Tipo de Espacio</th>
              <th class="py-3.5 px-4 font-bold">Código Unicode</th>
              <th class="py-3.5 px-4 font-bold">Uso Recomendado en Free Fire</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Hangul Filler</td>
              <td class="py-3 px-4 font-mono text-amber-300">U+3164</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Separar tag de clan y apodo en nick de 12 caracteres.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Hangul Jungseong Filler</td>
              <td class="py-3 px-4 font-mono text-amber-300">U+1160</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Separación estrecha en firmas de perfil o biografía.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Espacio Ideográfico</td>
              <td class="py-3 px-4 font-mono text-amber-300">U+3000</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Separación amplia en apodos de 2 palabras.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Hangul Filler Doble</td>
              <td class="py-3 px-4 font-mono text-amber-300">U+3164 x2</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Nick completamente invisible en partida y Kill Feed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Cómo Poner Espacio Invisible en Free Fire Paso a Paso</h3>
      <ol>
        <li>Haz clic en el botón <strong>"Copiar Espacio Invisible"</strong> en los recuadros de la parte superior.</li>
        <li>Abre el juego <strong>Free Fire</strong> o <strong>Free Fire MAX</strong> en tu dispositivo móvil.</li>
        <li>Dirígete a tu <strong>Perfil de Jugador</strong> (esquina superior izquierda) y presiona el ícono del lápiz amarillo de edición.</li>
        <li>Mantiene presionado el cuadro de texto de "Apodo Nuevo" y selecciona <strong>Pegar</strong>.</li>
        <li>Confirma el cambio usando el método y coste que muestre tu cuenta en ese momento.</li>
      </ol>

      <h3>Plantillas de Nombres con Espacio Invisible Listas para Copiar</h3>
      <p>Si prefieres no armar tu apodo desde cero, aquí tienes las combinaciones más usadas por jugadores profesionales de Gran Maestro:</p>
      <ul>
        <li><code>×͜× ㅤ INSANO</code> (Estilo insano con espacio)</li>
        <li><code>Ⓥ ㅤ GOD ㅤ ᵀᴹ</code> (Símbolo Verificado + Espacio)</li>
        <li><code>亗 ㅤ K I N G ㅤ 亗</code> (Corona de Reyes con espacio)</li>
        <li><code>⚡ ㅤ N O O B ㅤ ⚡</code> (Rayo insano + espacio)</li>
        <li><code>🌸 ㅤ A i t a n a</code> (Aesthetic con espacio transparente)</li>
      </ul>
    `,
    metaDescription: 'Copia caracteres invisibles Unicode para Free Fire: Hangul Filler U+3164, U+1160 y espacio ideográfico U+3000. Prueba cuál admite tu versión.',
    keywords: 'espacio invisible free fire, espacios para nombres de free fire, letra invisible free fire, espacio en blanco free fire, copiar espacio invisible ff, unicode u+3000 free fire, nombre invisible free fire',
    defaultName: 'NOOB ㅤ KING',
    customSymbols: ["ㅤ", "ᅠ", " ", " ", " ", " ", "⚡", "👑", "☠︎", "Ⓥ", "亗", "×͜×", "🌸"],
    faqs: [
      {
        question: "¿Por qué no funciona la barra espaciadora normal en Free Fire?",
        answer: "Free Fire puede rechazar el espacio ASCII normal en algunos campos. Hangul Filler (U+3164) es una alternativa frecuente, aunque la compatibilidad puede variar según la versión del juego."
      },
      {
        question: "¿Me pueden banear por usar espacio invisible en Free Fire?",
        answer: "Hangul Filler es un carácter Unicode legítimo, pero las reglas sobre nombres especiales dependen de Garena y pueden cambiar. Revisa las normas vigentes y confirma que tu versión del juego acepte el carácter."
      },
      {
        question: "¿Cómo poner un nombre 100% invisible o transparente en Free Fire?",
        answer: "Puedes copiar un carácter invisible para probarlo en el campo de apodo. No garantizamos un perfil totalmente transparente: Free Fire puede rechazarlo, normalizarlo o mostrarlo de otra forma."
      },
      {
        question: "¿Funciona también para cambiar el nombre de un Clan en Free Fire?",
        answer: "La compatibilidad depende de cada campo, aplicación y versión. Prueba el carácter en el nombre de clan o perfil antes de confirmar; su aceptación en un campo no garantiza otros usos."
      },
      {
        question: "¿Cuántos caracteres ocupa el espacio invisible?",
        answer: "Nuestro simulador cuenta caracteres visibles, incluidos los espacios invisibles. Este conteo no garantiza el límite de 12 caracteres ni la aceptación en Free Fire: compruébalo en tu versión del juego."
      }
    ]
  },
  'nombres-ff-unicos': {
    id: 'nombres-ff-unicos',
    path: '/nombres-ff-unicos',
    title: 'Nombres para Free Fire que Nadie Tenga - Únicos | GDN',
    h1: 'Nombres para Free Fire que Nadie Tenga (Exclusivos y Raros)',
    subtitle: 'Crea variaciones visuales poco comunes para Free Fire con bases cortas, símbolos y separadores, sin afirmar disponibilidad ni exclusividad comprobada.',
    seoText: `
      <h2>Cómo Crear Variantes de Nombres para Free Fire que Nadie Tenga</h2>
      <p>Cuando una base sencilla ya está ocupada, una forma práctica de diferenciarla visualmente es combinarla con letras, separadores o símbolos. Esta página se centra en esa intención creativa; no consulta una base de datos de usuarios ni puede demostrar que una propuesta esté libre.</p>
      
      <p>Para aumentar la diferenciación visual puedes combinar una <strong>base corta</strong>, uno o dos <strong>símbolos Unicode</strong>, un <strong>separador que el juego acepte</strong> y una variación ortográfica propia. Cuantas más decoraciones añadas, más importante es comprobar legibilidad, longitud y compatibilidad antes de guardar.</p>

      <h3>Ideas de Variaciones Visuales Poco Comunes</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Estilo de Nombre</th>
              <th class="py-3.5 px-4 font-bold">Ejemplo Listo para Copiar</th>
              <th class="py-3.5 px-4 font-bold">Qué cambia visualmente</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Runas Antiguas & Jeroglíficos</td>
              <td class="py-3 px-4 font-mono text-amber-300">𓆩⚡𓆪 ㅤ K Y R O S</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Combina un marco poco habitual con un separador visual.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Latín y Mitología Rara</td>
              <td class="py-3 px-4 font-mono text-amber-300">╰‿╯ ㅤ V O R T E X</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Usa una base temática y un marco sencillo para diferenciar la forma.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Corto 3-4 Letras Insano</td>
              <td class="py-3 px-4 font-mono text-amber-300">7K ㅤ Z E X 亗</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Mantiene una base corta y añade un tag más un símbolo final.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Con Verificado & Manzana</td>
              <td class="py-3 px-4 font-mono text-amber-300">Ⓥ ㅤ S P E C T R E </td>
              <td class="py-3 px-4 font-medium text-zinc-100">Combina dos símbolos decorativos; no representa verificación oficial.</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Chiteros / Diabólicos</td>
              <td class="py-3 px-4 font-mono text-amber-300">乄 ㅤ N E X U S ☠︎</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Mantiene una estructura simétrica con símbolos a ambos lados.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Fórmula para Crear una Variación Propia en 3 Pasos</h3>
      <ol>
        <li><strong>Paso 1: Elige una Base:</strong> Parte de una palabra que recuerdes fácilmente y que encaje con tu estilo de juego.</li>
        <li><strong>Paso 2: Prueba un Separador:</strong> Usa un espacio Unicode solo si tu versión del juego lo acepta y comprueba el resultado antes de guardar.</li>
        <li><strong>Paso 3: Añade un Marco de Símbolos Raros:</strong> Encierra tu palabra entre dos símbolos simétricos como <code>𓆩...𓆪</code> o <code>꧁...꧂</code>.</li>
      </ol>
    `,
    metaDescription: 'Descubre nombres para Free Fire que nadie tenga. Apodos raros, originales e insanos con símbolos especiales para destacar en tus partidas.',
    keywords: 'nombres para free fire que nadie tenga, nombres raros free fire, apodos unicos free fire, nombres no usados free fire, nombres de 3 letras para free fire, generador de nombres raros ff',
    defaultName: 'Kyros',
    customSymbols: ["𓆩", "𓆪", "亗", "╰‿╯", "乄", "Ⓥ", "", "☣", "☬", "꧁", "꧂", "༺", "༻", "⚡", "☠︎", "👑", "☯︎", "⚔️", "ㅤ"],
    faqs: [
      {
        question: "¿Cómo saber si un nombre para Free Fire ya está registrado?",
        answer: "Puedes comprobarlo directamente en la tienda del juego al usar una Tarjeta de Cambio de Nombre o intentando añadir a ese jugador mediante la barra de búsqueda de amigos. Si el juego no encuentra al jugador, tómalo solo como una señal orientativa: la disponibilidad real se confirma al intentar guardar el apodo."
      },
      {
        question: "¿Por qué los nombres de 3 letras son los más cotizados en Free Fire?",
        answer: "Un apodo de 3 letras es breve y fácil de comparar. Decorarlo crea variantes visuales, pero no acredita rareza estadística ni disponibilidad dentro de Free Fire."
      },
      {
        question: "¿Qué símbolos raros puedo usar para que nadie me copie el apodo?",
        answer: "Puedes probar símbolos como 亗, Ⓥ o 𓆩𓆪. No tenemos estadísticas de uso ni un método que impida copiar un apodo; comprueba compatibilidad y disponibilidad en el juego."
      },
      {
        question: "¿Qué pasa si uso un símbolo no compatible con mi celular?",
        answer: "Si un símbolo no es soportado por el teclado de tu sistema operativo (Android/iOS), se mostrará como un cuadro con signo de interrogación [?]. Los símbolos incluidos se ofrecen como opciones Unicode para probar; su compatibilidad puede variar según la versión de Free Fire, el dispositivo y futuras actualizaciones."
      }
    ]
  },
  'nombres-ff-mujeres': {
    id: 'nombres-ff-mujeres',
    path: '/nombres-ff-mujeres',
    title: 'Nombres para Free Fire de Mujer - Apodos Chidos | GDN',
    h1: 'Nombres para Free Fire para Mujeres y Chicas Insanas',
    subtitle: 'Apodos femeninos para Free Fire organizados por estilo visual, con variantes para copiar y adaptar sin afirmar disponibilidad o exclusividad.',
    seoText: `
      <h2>Nombres para Free Fire de Mujer por Estilo</h2>
      <p>Esta página se centra en apodos femeninos para Free Fire y separa esa intención de otras herramientas del sitio. Aquí puedes explorar combinaciones con flores, coronas, mariposas, símbolos oscuros o estilos minimalistas; si quieres transformar cualquier palabra desde cero, utiliza el <a href="/generador-free-fire">generador de nombres para Free Fire</a>.</p>

      <h3>Elige primero el estilo, después la decoración</h3>
      <ul>
        <li><strong>Suave y floral:</strong> usa uno o dos símbolos y deja que el nombre siga siendo legible.</li>
        <li><strong>Competitivo:</strong> prioriza una base corta antes de añadir coronas, rayos o marcos.</li>
        <li><strong>Dúo o pareja:</strong> crea dos nombres que compartan estructura, pero comprueba cada uno por separado.</li>
        <li><strong>Minimalista:</strong> conserva el nombre casi limpio y añade un solo detalle visual.</li>
      </ul>

      <h3>Qué diferencia esta página de “nombres únicos”</h3>
      <p>“Femenino” describe aquí un estilo editorial; no significa que el apodo esté libre ni que nadie más lo use. Para ideas centradas en variaciones poco comunes consulta <a href="/nombres-ff-unicos">nombres para Free Fire únicos</a>. Para tags de equipo, la página de <a href="/nombres-clanes-ff">nombres de clanes</a> mantiene esa intención separada.</p>

      <p>Antes de guardar un resultado, pruébalo dentro del juego. Free Fire decide qué caracteres acepta, qué longitud permite y si un nombre está disponible en ese momento.</p>
    `,
    metaDescription: 'Explora nombres para Free Fire de mujer por estilos floral, competitivo, minimalista y dúo. Personaliza símbolos y comprueba compatibilidad y disponibilidad en el juego.',
    keywords: 'nombres para free fire para mujeres, nombres para free fire de mujer que nadie tenga, apodos para mujeres en free fire',
    defaultName: 'Queen',
    customSymbols: ["✿", "👑", "🌸", "✨", "🎀", "💖", "💎", "🌙", "🦋", "🥀"],
    faqs: [
      {
        question: "¿Los nombres femeninos de esta página están disponibles en Free Fire?",
        answer: "No podemos comprobar disponibilidad. La página ofrece propuestas visuales y debes probar el resultado dentro del juego."
      },
      {
        question: "¿Qué diferencia esta página del generador general de Free Fire?",
        answer: "Esta página organiza inspiración femenina por estilo; el generador general está pensado para escribir cualquier base y transformarla."
      },
      {
        question: "¿Puedo usar estos estilos aunque no quiera un apodo muy decorado?",
        answer: "Sí. Puedes tomar solo el nombre base o usar una variante minimalista con pocos símbolos."
      }
    ]
  },
  'nombres-clanes-ff': {
    id: 'nombres-clanes-ff',
    path: '/nombres-clanes-ff',
    title: 'Nombres para Clanes de Free Fire - Generador | GDN',
    h1: 'Nombres para Clanes y Escuadras de Free Fire',
    subtitle: 'Crea nombres, siglas y estilos visuales para clanes y escuadras de Free Fire, y comprueba después las reglas vigentes dentro del juego.',
    seoText: `
      <h2>Ideas de Nombres para Clanes y Escuadras de Free Fire</h2>
      <p>El nombre de un clan en Free Fire es el sello de identidad que representa el nivel, la disciplina y el poder de tu grupo en la isla. Tanto si buscas formar un <strong>clan competitivo para torneos y salas privadas (eSports)</strong>, un <strong>clan insano o tóxico para apostados y 4v4</strong>, o un <strong>clan mixto y aesthetic con espacio invisible</strong>, la clave está en combinar una sigla o Tag limpia con un nombre imponente.</p>
      
      <h3>Tabla de Estilos de Nombres y Tags para Clanes (Con Ejemplos)</h3>
      <p>A continuación se muestran ejemplos organizados por la temática visual de la escuadra:</p>
      
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-violet-950/60 text-violet-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Tipo de Clan</th>
              <th class="py-3.5 px-4 font-bold">Nombre del Clan</th>
              <th class="py-3.5 px-4 font-bold">Tag para Miembros</th>
              <th class="py-3.5 px-4 font-bold">Ejemplo de Nick de Integrante</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">eSports & Competitivo</td>
              <td class="py-3 px-4 font-medium text-zinc-100">VORTEX eSPORTS 🏆</td>
              <td class="py-3 px-4 font-mono text-amber-300">VX •</td>
              <td class="py-3 px-4 font-mono text-zinc-100">VX • ㅤ R U S H 3 R</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Insano & Apostados (4v4)</td>
              <td class="py-3 px-4 font-medium text-zinc-100">LOS DIOSES ☠︎</td>
              <td class="py-3 px-4 font-mono text-amber-300">7K •</td>
              <td class="py-3 px-4 font-mono text-zinc-100">7K • ㅤ E L ㅤ D I A B L O 亗</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Mafia & Chiteros</td>
              <td class="py-3 px-4 font-medium text-zinc-100">MAFIA LATINA ☬</td>
              <td class="py-3 px-4 font-mono text-amber-300">ML •</td>
              <td class="py-3 px-4 font-mono text-zinc-100">乄 ML • ㅤ G O D</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Mixto & Aesthetic</td>
              <td class="py-3 px-4 font-medium text-zinc-100">ROYAL KINGS ✿</td>
              <td class="py-3 px-4 font-mono text-amber-300">RK •</td>
              <td class="py-3 px-4 font-mono text-zinc-100">RK • ㅤ A i t a n a 🌸</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-violet-300">Escuadra Sniper & Rusher</td>
              <td class="py-3 px-4 font-medium text-zinc-100">SILENT KILLERS 🎯</td>
              <td class="py-3 px-4 font-mono text-amber-300">SK •</td>
              <td class="py-3 px-4 font-mono text-zinc-100">𓆩⚡𓆪 SK • ㅤ S N I P E R</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Una Estructura Práctica para la Sigla o Tag del Clan</h3>
      <p>Una convención sencilla es usar una sigla breve de <strong>2 a 4 caracteres</strong> acompañada de un punto central, un guion o un separador que el juego acepte. Por ejemplo: <code>VP • ㅤ N A M E</code>. Mantener el tag corto facilita que varios integrantes conserven una estructura visual parecida sin asumir un límite fijo de caracteres.</p>

      <h3>Qué Comprobar Antes de Crear o Renombrar un Clan</h3>
      <ul>
        <li><strong>Coste:</strong> revisa el importe y la moneda que muestre tu cuenta antes de confirmar, porque pueden cambiar.</li>
        <li><strong>Longitud:</strong> comprueba el límite vigente directamente en el campo de nombre del clan.</li>
        <li><strong>Símbolos:</strong> prueba escudos, coronas, espadas u otros caracteres uno a uno; Unicode válido no significa compatibilidad garantizada.</li>
        <li><strong>Gestión:</strong> revisa dentro del juego los permisos, niveles y requisitos actuales antes de organizar la escuadra.</li>
      </ul>
    `,
    metaDescription: 'Generador de nombres para clanes de Free Fire. Encuentra apodos para escuadras, tags intimidantes y nombres de clanes insanos con símbolos.',
    keywords: 'nombres para clanes de free fire, nombres de clanes free fire, tags para clanes ff, nombres para escuadras free fire, nombres para clanes insanos, prefijos de clanes free fire',
    defaultName: 'ELITE ⚡ TEAM',
    customSymbols: ["🛡️", "⚔️", "👑", "☠︎", "🦅", "🐉", "🔥", "🏆", "☬", "⚡", "VP •", "7K •", "ST •", "FX •", "乄", "亗", "𓆩", "𓆪", "ㅤ", "Ⓥ"],
    faqs: [
      {
        question: "¿Cómo poner la sigla o Tag del clan a los nombres de los miembros?",
        answer: "Combina una sigla breve con el apodo y comprueba el texto completo en el campo del juego. El contador de la web es orientativo y no garantiza un límite fijo ni aceptación."
      },
      {
        question: "¿Cuánto cuesta cambiar el nombre a un Clan existente en Free Fire?",
        answer: "Consulta el precio y los permisos vigentes en la gestión de tu clan dentro de Free Fire antes de confirmar un cambio."
      },
      {
        question: "¿Cómo hacer que mi clan se vea profesional para torneos?",
        answer: "Usa un Tag corto de 2 o 3 letras (como FX, VX, 7K, ST) con una tipografía limpia y sin recargar demasiado de símbolos. Mantener una estructura visual coherente entre los integrantes hace que el tag sea más fácil de reconocer."
      },
      {
        question: "¿Cómo separar el Tag del clan con espacio invisible?",
        answer: "Puedes copiar un espacio Unicode para probar una separación visual entre el tag y el apodo. Cada versión y campo del juego determina si lo acepta."
      }
    ]
  },
  'nombres-anime': {
    id: 'nombres-anime',
    path: '/nombres-anime',
    title: 'Nombres de Anime para Juegos y Redes | GDN',
    h1: 'Generador y Creador de Nombres de Anime para Juegos y Redes Sociales',
    subtitle: 'Crea apodos japoneses con sufijos honoríficos (-sama, -kun, -chan, -senpai), caracteres Kanji, Katanas y símbolos de poder para tu perfil otaku en Genshin, Roblox, Free Fire y Discord.',
    seoText: `
      <h2>Los Mejores Nombres de Anime para Perfiles Gamer, Discord y Redes Sociales en 2026</h2>
      <p>El universo del anime y manga japonés ha revolucionado la identidad digital de millones de jugadores y creadores de contenido. Utilizar un <strong>nombre de inspiración otaku o nipona</strong> en videojuegos como <strong>Genshin Impact, Honkai Star Rail, Roblox Blox Fruits, Free Fire, Valorant, Fortnite</strong> o plataformas sociales como <strong>Discord, TikTok e Instagram</strong> transmite una estética mística, poderosa y llena de personalidad.</p>

      <h3>Cómo Crear un Nick de Anime Único y Estético (Guía Otaku)</h3>
      <p>Para construir un apodo de anime que destaque en cualquier servidor o comunidad, puedes aplicar estas 4 técnicas esenciales:</p>
      <ul>
        <li><strong>Agrega Sufijos Honoríficos Japoneses:</strong> Incorpora terminaciones tradicionales como <em>-sama</em> (respeto / Lord / Deidad), <em>-senpai</em> (mentor / superior), <em>-kun</em> (amigo), <em>-chan</em> (tierna / kawaii) o <em>-dono</em> (samurai / guerrero). Ejemplos: <code>Kage-Sama</code>, <code>Kuro.Senpai</code>, <code>Sakura-Chan</code>.</li>
        <li><strong>Símbolos Místicos y Kanjis Japoneses:</strong> Decora tu usuario con puertas Torii (⛩️), zorros Kitsune (🦊), katanas (⚔️), nubes de lluvia (☁️), truenos (⚡), flores de cerezo (🌸) y ramas de bambú (🎋).</li>
        <li><strong>Combinaciones de Arquetipos Clásicos:</strong> Inspírate en clases populares como Cazadores de Demonios (<em>Demon Slayer / Kimetsu</em>), Hechiceros de Grado Especial (<em>Jujutsu Kaisen</em>), Piratas (<em>One Piece / Blox Fruits</em>), Shinigamis (<em>Bleach</em>) o Ninjas (<em>Naruto</em>).</li>
        <li><strong>Usa Fuentes Tipográficas Unicode Aesthetic:</strong> Transforma tus letras con fuentes en negrita, cursiva gótica o espaciado fino para que luzca épico sobre tu avatar.</li>
      </ul>

      <h3>Tabla de Estilos de Nombres de Anime por Videojuego y Comunidad</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-red-950/60 text-red-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Juego / Comunidad</th>
              <th class="py-3.5 px-4 font-bold">Estilo de Nombre Anime</th>
              <th class="py-3.5 px-4 font-bold">Ejemplo de Apodo Estético Válido</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-red-400">Genshin Impact & HSR</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Archonte / Hashira / Deidad Elemenal</td>
              <td class="py-3 px-4 font-mono text-amber-300">⚡ 𝙆𝙖𝙜𝙚 - 𝙎𝙖𝙢𝙖 ⛩️</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-red-400">Roblox Blox Fruits</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Kitsune / Pirata / Espadachín</td>
              <td class="py-3 px-4 font-mono text-amber-300">🦊 𝙺𝚒𝚝𝚜𝚞𝚗𝚎 _ 𝚂𝚘𝚛𝚊 ⚔️</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-red-400">Valorant & Free Fire</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Dark / Anti-Héroe / Sombra Tryhard</td>
              <td class="py-3 px-4 font-mono text-amber-300">🖤 𝙺𝚞𝚛𝚘𝚗𝚎𝚔𝚘 - 𝚂𝚎𝚗𝚙𝚊𝚒 ☠︎</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-red-400">Discord, TikTok & IG</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Otaku Aesthetic / Soft / Kawaii</td>
              <td class="py-3 px-4 font-mono text-amber-300">🌸 𝕊𝕒𝕜𝕦𝕣𝕒 . ᴄʜᴀɴ 🌸</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-red-400">Fortnite & Call of Duty</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Shinigami / Caza Recompensas</td>
              <td class="py-3 px-4 font-mono text-amber-300">𓆩⚡𓆪 ㅤ S H I N I G A M I ㅤ 亗</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metaDescription: 'Generador de nombres de anime para juegos y redes sociales. Apodos otaku con sufijos (-sama, -senpai, -chan) y kanjis para Genshin, Roblox y Discord.',
    keywords: 'nombres de anime, nombres otaku para juegos, nombres japoneses de anime, creador de nombres anime, apodos anime para discord, nombres para roblox anime, nombres para genshin impact, nombres para blox fruits anime',
    defaultName: 'Kuro',
    customSymbols: ["⛩️", "🌸", "🍥", "🦊", "⚡", "🔥", "🌙", "🗡️", "☯️", "⚔️", "👑", "🐉", "🖤", "✨", "🎋", "☁️", "𓆩", "𓆪", "亗", "☠︎"],
    faqs: [
      {
        question: "¿Qué significan los sufijos honoríficos -sama, -senpai, -kun y -chan en un nick de anime?",
        answer: "-Sama (様): Denota superioridad, respeto y estatus de Lord o deidad. -Senpai (先輩): Indica mentor, líder o compañero experimentado. -Kun (君): Utilizado habitualmente para jóvenes o amigos masculinos. -Chan (ちゃん): Expresa dulzura, cariño y estética tierno o kawaii."
      },
      {
        question: "¿Puedo usar estos nombres de anime en Discord, Roblox y Free Fire?",
        answer: "Sí. Todos los nombres y tipografías generados por nuestra herramienta utilizan fuentes estándar Unicode, diseñadas para Unicode y pueden funcionar en muchas plataformas, aunque cada servicio puede filtrar o normalizar ciertos caracteres."
      },
      {
        question: "¿Cómo poner la flor de cerezo (🌸) o la puerta Torii (⛩️) en mi nombre?",
        answer: "Solo haz clic en los símbolos o en las plantillas pregeneradas en la parte superior de nuestro creador de nombres. El texto se copiará al portapapeles con 1 solo clic listo para pegar en tu juego."
      },
      {
        question: "¿Es gratis usar este creador de nombres de anime?",
        answer: "Sí, nuestra herramienta es 100% gratuita y sin límites de generación. Puedes crear, personalizar con kanjis y copiar todas las combinaciones que desees."
      }
    ]
  },
  'nombres-de-mujer': {
    id: 'nombres-de-mujer',
    path: '/nombres-de-mujer',
    title: 'Nombres de Mujer - Bonitos, Elegantes y Raros | GDN',
    h1: 'Nombres de Mujer: Lista de Nombres Bonitos, Elegantes y con Significado',
    subtitle: "Explora y genera una selección de nombres de mujer ordenados por estilo (elegantes, bíblicos, cortos, modernos), origen y combinaciones compuestas con audio de pronunciación.",
    seoText: `
      <h2>Los Nombres de Mujer más Bonitos, Elegantes y Significativos para 2026</h2>
      <p>Elegir un <strong>nombre de mujer</strong> es una decisión fundamental cargada de emoción, historia y personalidad. Ya sea que estés buscando el nombre perfecto para tu futura hija, investigando combinaciones de nombres compuestos con apellidos, o seleccionando el apodo ideal para tu perfil en redes sociales y juegos, nuestra guía interactiva te ofrece los nombres femeninos más hermosos en español e internacionales.</p>

      <h3>Categorías de Nombres de Mujer según su Estilo y Origen</h3>
      <p>Para facilitarte la búsqueda entre cientos de alternativas, clasificamos los nombres femeninos según sus características principales:</p>
      <ul>
        <li><strong>Nombres Elegantes y Reales:</strong> Nombres tradicionales con distinción y porte como <em>Sofía, Victoria, Isabella, Elena, Camila, Beatrice, Charlotte</em> y <em>Valentina</em>.</li>
        <li><strong>Nombres Cortos y Modernos (3-5 Letras):</strong> Nombres contemporáneos de fácil pronunciación multilingual como <em>Mia, Zoe, Chloe, Emma, Ava, Iris, Lia, Gala</em> y <em>Aria</em>.</li>
        <li><strong>Nombres Bíblicos y Tradicionales:</strong> Con profundas raíces hebreas y significados espirituales como <em>Sara, Ruth, Esther, María, Hannah, Miriam, Noemí</em> y <em>Raquel</em>.</li>
        <li><strong>Nombres de la Naturaleza y Místicos:</strong> Inspirados en elementos celestiales, flores y piedras preciosas como <em>Luna, Alba, Violeta, Flora, Stella, Coral, Jade</em> y <em>Nerea</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología, Significado y Combinación Compuesta</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-pink-950/60 text-pink-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Femenino</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Mejor Combinación Compuesta</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Sofía</td>
              <td class="py-3 px-4 text-zinc-300">Griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Sabiduría. <a href="https://www.behindthename.com/name/sophia" target="_blank" rel="noopener noreferrer">Fuente de Sofía</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Sofía Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Valentina</td>
              <td class="py-3 px-4 text-zinc-300">Latín</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Forma femenina de Valentinus, derivado de Valens: fuerte, vigoroso o saludable. <a href="https://www.behindthename.com/name/valentine-1" target="_blank" rel="noopener noreferrer">Fuente de Valentina</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Emma Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Isabella</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-pink-300">Isabella Lucía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Aitana</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-pink-300">Aitana María</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Emma</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-pink-300">Emma Victoria</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Lucía</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-pink-300">Lucía Isabel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos para Elegir el Nombre de Mujer Perfecto</h3>
      <ol>
        <li><strong>Revisa la Armonía con los Apellidos:</strong> Evita la cacofonía asegurándote de que la última letra del primer nombre no sea igual a la primera letra del primer apellido (por ejemplo, prefiere <em>Elena Morales</em> sobre <em>Elena Álvarez</em>).</li>
        <li><strong>Prueba la Pronunciación y Sonoridad:</strong> Escucha cómo suena en voz alta usando la función de audio de nuestra herramienta.</li>
        <li><strong>Considera los Nombres Compuestos:</strong> Combinar un primer nombre corto con un segundo nombre de ritmo suave aporta versatilidad y distinción.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres de mujer bonitos, elegantes y con significado. Ideas de nombres compuestos, bíblicos y audio de pronunciación.',
    keywords: 'nombres de mujer, nombres de mujeres bonitos, nombres de mujer con significado, nombres de mujer elegantes, nombres de niña compuestos, nombres femeninos bonitos',
    defaultName: 'Sofía',
    customSymbols: ["✨", "💖", "🌸", "👑", "💎", "🌷", "🦋", "🌺", "🎀", "🕊️"],
    faqs: [
      {
        question: "¿Cómo elegir una buena combinación de nombres de mujer compuestos?",
        answer: "Es recomendable combinar un primer nombre corto (2 sílabas) con un segundo nombre más largo o clásico. Por ejemplo: Sofía Valentina, Emma Victoria o Lucía Isabel. Asegúrate de probar la sonoridad en voz alta con nuestra herramienta de audio."
      },
      {
        question: "¿Cuáles son algunos nombres de mujer  y bonitos?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Sofía, Valentina, Isabella, Aitana, Emma, Lucía, Camila, Mia y Chloe son ejemplos de nuestra selección editorial. La popularidad varía según el país y el año; esta lista no es un ranking estadístico."
      },
      {
        question: "¿Qué nombres de mujer significan 'luz' o 'fuerza'?",
        answer: "Nombres como Lucía, Elena, Nora y Kiara significan 'luz' o 'brillante'. Por otro lado, Valentina, Aitana, Carla y Astrid tienen significados relacionados con 'fuerza', 'valentía' y 'protección'."
      },
      {
        question: "¿Es útil escuchar la pronunciación de un nombre antes de decidirlo?",
        answer: "Sí, la sonoridad es clave al elegir un nombre. Nuestra plataforma incluye un reproductor de voz en tiempo real para que escuches la lectura aproximada en español."
      }
    ]
  },
  'nombres-de-nina': {
    id: 'nombres-de-nina',
    path: '/nombres-de-nina',
    title: 'Nombres de Niña No Comunes y Cortos | GDN',
    h1: 'Nombres de Niña (No Comunes, Cortos y Preciosos)',
    subtitle: 'La guía interactiva de nombres para niñas raros, cortos (3 y 4 letras), con referencias de significado, combinaciones compuestas y audio sintetizado del dispositivo.',
    seoText: `
      <h2>Los Mejores Nombres de Niña No Comunes, Cortos, Preciosos y con Significado (2026)</h2>
      <p>Buscar un <strong>nombre de niña no común, corto y precioso</strong> para tu futura hija o para un personaje especial implica encontrar el equilibrio perfecto entre singularidad, dulzura, eufonía y fácil pronunciación. Esta selección editorial incluye nombres breves de 3 a 4 letras para que puedas comparar su escritura y pronunciación.</p>

      <h3>Tendencias en Nombres de Niña Raros y Preciosos</h3>
      <p>A continuación exploramos categorías para comparar nombres femeninos únicos:</p>
      <ul>
        <li><strong>Nombres Cortos de 3 y 4 Letras:</strong> Sencillos, modernos e ideales para combinar con apellidos largos. Ejemplos: <em>Zoe, Mia, Iris, Lia, Ona, Gala, Yara, Lyra, Iria, Aria, Mila</em>.</li>
        <li><strong>Nombres Raros pero Elegantes:</strong> Opciones poco comunes con raíces históricas o mitológicas que aportan distinción como <em>Nayra, Alana, Sira, Adara, Chloe, Aitana, Freya, Ayla</em> y <em>Kira</em>.</li>
        <li><strong>Nombres Inspirados en la Naturaleza y el Universo:</strong> Reflejan luz, flores y estrellas como <em>Luna, Alba, Iris, Coral, Nerea, Stella, Sol, Caelia, Maya</em> y <em>Jade</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombres Cortos de Niña, Origen y Significado</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-pink-950/60 text-pink-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre de Niña</th>
              <th class="py-3.5 px-4 font-bold">Nº de Letras</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Compuesta</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Zoe</td>
              <td class="py-3 px-4 font-mono text-zinc-400">3 letras</td>
              <td class="py-3 px-4 text-zinc-300">Griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Vida. <a href="https://www.behindthename.com/name/zoe" target="_blank" rel="noopener noreferrer">Fuente de Zoe</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Zoe Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Mia</td>
              <td class="py-3 px-4 font-mono text-zinc-400">3 letras</td>
              <td class="py-3 px-4 text-zinc-300">Forma corta de Maria</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Diminutivo de Maria; coincide con la palabra italiana mia (mía). <a href="https://www.behindthename.com/name/mia" target="_blank" rel="noopener noreferrer">Fuente de Mia</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Mia Isabella</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Iris</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Arcoíris; también es el nombre de una diosa griega. <a href="https://www.behindthename.com/name/iris" target="_blank" rel="noopener noreferrer">Fuente de Iris</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Iris Victoria</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Aria</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Italiano (palabra)</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Canción o melodía; literalmente aire. <a href="https://www.behindthename.com/name/aria-1" target="_blank" rel="noopener noreferrer">Fuente de Aria</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Aria Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Lia</td>
              <td class="py-3 px-4 font-mono text-zinc-400">3 letras</td>
              <td class="py-3 px-4 text-zinc-300">Variante de Leah</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Forma de Leah usada en italiano, portugués, georgiano y griego. <a href="https://www.behindthename.com/name/lia-1" target="_blank" rel="noopener noreferrer">Fuente de Lia</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Lia Elena</td>
            </tr>

            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-pink-400">Lyra</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Astronomía</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Nombre de la constelación de la Lira. <a href="https://www.behindthename.com/name/lyra" target="_blank" rel="noopener noreferrer">Fuente de Lyra</a></td>
              <td class="py-3 px-4 font-mono text-pink-300">Lyra Beatriz</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir un Nombre de Niña Poco Común</h3>
      <ol>
        <li><strong>Analiza el Ritmo con el Apellido:</strong> Si tu primer apellido es largo (ej. <em>Fernández, Rodríguez</em>), un nombre corto de 3 o 4 letras crea un balance fonético armónico.</li>
        <li><strong>Verifica la Inicial del Nombre y Apellido:</strong> Asegúrate de que las iniciales no formen palabras indeseadas ni repitan vocales ásperas al unirse.</li>
        <li><strong>Escucha la Pronunciación en Audio:</strong> Utiliza el reproductor de voz interactivo de nuestra herramienta para escuchar la acentuación natural.</li>
      </ol>
    `,
    metaDescription: 'Nombres de niña no comunes, cortos, raros y preciosos con significado. Generador con origen, combinaciones y pronunciación en audio.',
    keywords: 'nombres de niña no comunes, nombres de niña cortos, nombres raros de niña, nombres de niña preciosos, nombres de niña de 3 letras, nombres de niña de 4 letras',
    defaultName: 'Aitana',
    customSymbols: ["🌸", "🎀", "💖", "✨", "🌷", "🕊️", "⭐", "🌺", "👑", "🍃"],
    faqs: [
      {
        question: "¿Por qué son tan populares los nombres cortos de niña de 3 o 4 letras?",
        answer: "Nombres como Mia, Zoe, Lia, Iris y Aria tienen 3 o 4 letras y permiten comparar combinaciones breves. La facilidad de pronunciación depende del idioma; esta selección no acredita popularidad internacional."
      },
      {
        question: "¿Cuáles son algunos nombres de niña no comunes y preciosos para 2026?",
        answer: "Puedes comparar Nayra, Lyra, Aria, Adara, Ayla y Freya como propuestas editoriales. No afirmamos su frecuencia en 2026 y cada significado necesita su propia fuente."
      },
      {
        question: "¿Cómo probar la sonoridad y pronunciación de un nombre compuesto?",
        answer: "Escribe la combinación deseada (ej. 'Zoe Valentina' o 'Mia Aitana') en nuestro generador e interactúa con el botón de audio para escuchar la voz sintetizada del dispositivo."
      },
      {
        question: "¿Qué nombres de niña cortos significan 'luz' o 'vida'?",
        answer: "Zoe significa vida según la referencia enlazada en esta página. Iris significa arcoíris, no luz. Otros nombres requieren comprobar su escritura y fuente antes de atribuirles ese significado."
      }
    ]
  },
  'nombres-de-nino': {
    id: 'nombres-de-nino',
    path: '/nombres-de-nino',
    title: 'Nombres de Niños Modernos y con Significado | GDN',
    h1: 'Nombres de Niños: Lista de Nombres con Significado, Modernos y Raros',
    subtitle: 'Nombres masculinos inspiradores para bebés y personajes, con orígenes etimológicos, significados de fuerza, nombres cortos (3 y 4 letras) y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres de Niños con Significado, Modernos y Raros para 2026</h2>
      <p>Elegir un <strong>nombre de niño</strong> es un momento trascendental. Buscar un nombre masculino que transmita fuerza, nobleza y buen augurio, pero que al mismo tiempo sea moderno, eufónico y fácil de pronunciar, es la prioridad de padres y creadores.</p>

      <h3>Tendencias en Nombres Masculinos: Estilos y Significados</h3>
      <p>A continuación clasificamos los nombres de niño más destacados en las tendencias actuales:</p>
      <ul>
        <li><strong>Nombres Modernos e Internacionales:</strong> Nombres universales y populares en español y globalmente como <em>Mateo, Liam, Leo, Enzo, Oliver, Thiago, Milan, Noah, Gael</em> y <em>Alexander</em>.</li>
        <li><strong>Nombres Cortos de 3 y 4 Letras:</strong> Sencillos de memorizar, con energía e ideales para combinar con apellidos largos como <em>Leo, Ian, Marc, Kai, Roy, Teo, Eric, Pol, Max, Ciro</em> y <em>Axel</em>.</li>
        <li><strong>Nombres Raros y Fuertes:</strong> Opciones poco comunes con un gran peso histórico o mitológico que aportan distinción como <em>Bastian, Kilian, Dante, Ezra, Thiago, Axel, Aaron</em> y <em>Darian</em>.</li>
        <li><strong>Nombres Bíblicos y Tradicionales:</strong> Nombres con profundas raíces hebreas y significados de protección como <em>Gabriel, Samuel, Lucas, David, Isaac, Daniel, Ezekiel</em> y <em>Mateo</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología, Significado y Combinación Compuesta</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-blue-950/60 text-blue-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Masculino</th>
              <th class="py-3.5 px-4 font-bold">Nº de Letras</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Mateo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Hebreo, a través del griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Forma de Matthew; su raíz Mattithiah significa regalo de Yahweh. <a href="https://www.behindthename.com/name/mattithiah" target="_blank" rel="noopener noreferrer">Fuente de Mateo</a></td>
              <td class="py-3 px-4 font-mono text-blue-300">Mateo Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Leo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">3 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Leo Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Liam</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Liam Gabriel</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Gael</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Oliver Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Enzo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Enzo Thiago</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Oliver</td>
              <td class="py-3 px-4 font-mono text-zinc-400">6 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Oliver Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-blue-400">Bastian</td>
              <td class="py-3 px-4 font-mono text-zinc-400">7 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-blue-300">Ian Bastian</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir un Nombre Masculino</h3>
      <ol>
        <li><strong>Busca la Sinergia entre Nombre y Apellidos:</strong> Un primer nombre vibrante o corto como <em>Liam</em> o <em>Leo</em> equilibra muy bien los apellidos hispanos de varias sílabas.</li>
        <li><strong>Verifica la Sonoridad de la Combinación Compuesta:</strong> Evita la repetición de consonantes duras seguidas (por ejemplo, prefiere <em>Mateo Gael</em> sobre <em>Mateo Oscar</em>).</li>
        <li><strong>Utiliza la Pronunciación en Voz Sintetizada:</strong> Aprovecha el reproductor de audio integrado en nuestro generador para escuchar cómo se pronuncia la combinación elegida.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres de niños con significado. Nombres masculinos modernos, raros, cortos y bíblicos con etimología y pronunciación en audio.',
    keywords: 'nombres de niños con significado, nombres para niños modernos, nombres de niños raros, nombres masculinos cortos, nombres para niños compuestos, nombres de bebe nino',
    defaultName: 'Mateo',
    customSymbols: ["⭐", "👑", "🛡️", "⚔️", "🦁", "⚡", "💙", "🏆", "🚀", "🌿"],
    faqs: [
      {
        question: "¿Cuáles son algunos nombres de niños  y modernos?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Mateo, Leo, Liam, Thiago, Enzo, Oliver, Lucas, Gael, Milan y Noah, reconocidos por su sonoridad enérgica y fácil pronunciación internacional."
      },
      {
        question: "¿Qué nombres masculinos de 3 y 4 letras transmiten fuerza?",
        answer: "Leo, Ian, Marc, Kai, Max y Axel son propuestas breves para comparar. Fuerza es una asociación de estilo; no presentamos esas asociaciones como traducciones verificadas."
      },
      {
        question: "¿Cómo probar la sonoridad y combinación de dos nombres de niño?",
        answer: "Usa nuestro Creador de Nombres Compuestos arriba: escribe la combinación (ej. 'Mateo Gael' o 'Leo Alexander'), revisa el origen etimológico y presiona el botón de audio para escuchar la lectura aproximada en español."
      },
      {
        question: "¿Cuáles son los mejores nombres de niño raros con significado especial?",
        answer: "Bastian, Kilian, Ezra, Dante y Darian son propuestas de la selección. Consulta una referencia específica para cada nombre antes de atribuirle un significado; raro no es una frecuencia estadística comprobada."
      }
    ]
  },
  'nombres-unisex': {
    id: 'nombres-unisex',
    path: '/nombres-unisex',
    title: 'Nombres Unisex - Neutros, Modernos y Bonitos | GDN',
    h1: 'Nombres Unisex: Lista de Nombres Neutros, Modernos y con Estilo',
    subtitle: 'La guía interactiva de nombres neutros y sin género para bebés, usuarios de redes sociales, personajes y mascotas con origen etimológico, combinaciones estéticas y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres Unisex, Neutros y Modernos para 2026</h2>
      <p>Los <strong>nombres unisex o sin género</strong> trascienden las barreras y estereotipos tradicionales. Al no estar encasillados en un solo género masculino o femenino, brindan una vibra contemporánea, versátil y cosmopolita que resulta ideal tanto para recién nacidos como para usuarios de redes sociales (Discord, Roblox, Instagram, TikTok), marcas o mascotas.</p>

      <h3>Principales Estilos de Nombres Unisex y Sin Género</h3>
      <p>A continuación exploramos las 4 vertientes principales de nombres neutros de esta selección editorial:</p>
      <ul>
        <li><strong>Nombres Cortos y Modernos (3-5 Letras):</strong> Nombres globales de fácil pronunciación como <em>Alex, René, Milan, Sasha, Noah, Luka, Teo, Dani, Gabi</em> y <em>Kai</em>.</li>
        <li><strong>Nombres de la Naturaleza y Elementos:</strong> Inspirados en paisajes y fenómenos universales como <em>Sol, River, Sky, Eden, Vega, Cruz, Iris, Nieve, Boreal</em> y <em>Jade</em>.</li>
        <li><strong>Nombres Elegantes de Origen Internacional:</strong> Con sonoridad refinada de origen celta, francés o anglosajón como <em>Ariel, Morgan, Taylor, Paris, Jordan, Robin, Francis, Kim</em> y <em>Quinn</em>.</li>
        <li><strong>Nombres Místicos y Cósmicos:</strong> De inspiración astronómica y mitológica como <em>Orion, Phoenix, Atlas, Nova, Luka, Vega, Kiran</em> y <em>Sirius</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología, Significado y Combinación Estética</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-emerald-950/60 text-emerald-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Unisex</th>
              <th class="py-3.5 px-4 font-bold">Nº de Letras</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Estética</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Alex</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Forma abreviada</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Forma corta de Alexander, Alexandra y otros nombres que empiezan por Alex. <a href="https://www.behindthename.com/name/alex" target="_blank" rel="noopener noreferrer">Fuente de Alex</a></td>
              <td class="py-3 px-4 font-mono text-emerald-300">Alex Morgan</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">René</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-emerald-300">René Sol</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Milan</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-emerald-300">Milan Ariel</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Sasha</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-emerald-300">Sasha Sky</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Ariel</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-emerald-300">Ariel Eden</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Morgan</td>
              <td class="py-3 px-4 font-mono text-zinc-400">6 letras</td>
              <td class="py-3 px-4 text-zinc-300">Galés</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Procede de Morcant; posiblemente combina mar y círculo. La etimología no es segura. <a href="https://www.behindthename.com/name/morgan-1" target="_blank" rel="noopener noreferrer">Fuente de Morgan</a></td>
              <td class="py-3 px-4 font-mono text-emerald-300">Taylor Morgan</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-emerald-400">Eden</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-emerald-300">Eden River</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir un Nombre Unisex o Neutro</h3>
      <ol>
        <li><strong>Evalúa la Fluidez Universal:</strong> Elige un nombre de pronunciación clara en múltiples idiomas si buscas proyección internacional (ej. <em>Alex, Sasha, Milan, Noah</em>).</li>
        <li><strong>Combina con Apellidos Tradicionales:</strong> Un nombre neutro vanguardista aporta un contraste contemporáneo muy elegante al unirse con apellidos clásicos de varias sílabas.</li>
        <li><strong>Prueba la Pronunciación con Audio en Tiempo Real:</strong> Escucha el ritmo y la cadencia exacta usando el reproductor de voz de nuestra herramienta.</li>
      </ol>
    `,
    metaDescription: 'Descubre los mejores nombres unisex y neutros. Nombres sin género para bebés, mascotas y perfiles con origen, significado y audio.',
    keywords: 'nombres unisex, nombres neutros, nombres sin genero, nombres unisex para bebes, nombres unisex cortos, nombres neutros con significado, nombres andróginos',
    defaultName: 'Alex',
    customSymbols: ["✨", "☯️", "🌟", "🤍", "🍃", "🕊️", "💫", "🌿", "⚡", "🌌", "🌊", "🔮"],
    faqs: [
      {
        question: "¿Por qué elegir un nombre unisex o sin género para un bebé o personaje?",
        answer: "Un nombre puede tener usos de género distintos según el país y el idioma. Alex, Sasha y Morgan son propuestas para comparar; comprueba el contexto cultural y los requisitos locales antes de elegir."
      },
      {
        question: "¿Cuáles son algunos nombres unisex  y modernos?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Alex, Milan, Sasha, Noah, Luka, René, Ariel, Morgan, Eden, Taylor, River y Sky debido a su eufonía y estética contemporánea."
      },
      {
        question: "¿Cómo probar la combinación y sonoridad de un nombre neutro compuesto?",
        answer: "Utiliza nuestro Creador de Nombres Unisex arriba: escribe la combinación (ej. 'Alex Morgan' o 'René Sol'), consulta la referencias de significado disponibles y presiona el botón del altavoz para escuchar la pronunciación en audio con voz en español."
      },
      {
        question: "¿Existen nombres unisex inspirados en la naturaleza?",
        answer: "Sol, River y Sky pueden servir de inspiración. Que una palabra describa la naturaleza no demuestra que sea un nombre unisex en todos los idiomas o regiones."
      }
    ]
  },
  'nombres-raros': {
    id: 'nombres-raros',
    path: '/nombres-raros',
    title: 'Nombres Raros y Pocos Comunes con Significado | GDN',
    h1: 'Nombres Raros: Guía de Nombres Únicos, Poco Comunes y Exóticos',
    subtitle: 'Descubre nombres raros con significados profundos, orígenes mitológicos, astrales y legendarios con creador de combinaciones y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres Raros, Únicos y Poco Comunes para 2026</h2>
      <p>Elegir un <strong>nombre raro y poco común</strong> es la vía definitiva para dejar una huella imborrable. Ya sea para un recién nacido cuyos padres buscan originalidad sin perder elegancia, para personajes de literatura y videojuegos, o para nicknames en redes sociales (TikTok, Instagram, Discord), los nombres raros aportan magnetismo, distinción y un toque de enigma fascinante.</p>

      <h3>Categorías Principales de Nombres Raros y Exóticos</h3>
      <p>Explora las corrientes de nombres raros de esta selección editorial:</p>
      <ul>
        <li><strong>Nombres Mitológicos y Legendarios:</strong> Inspirados en deidades y héroes de civilizaciones antiguas como <em>Orion, Freya, Selene, Astrid, Osiris, Indra, Astraea, Thoth, Valkiria</em> y <em>Ares</em>.</li>
        <li><strong>Nombres Cósmicos y Astronómicos:</strong> Referentes a estrellas, constelaciones y fenómenos galácticos como <em>Lyra, Zephyr, Nova, Cassiopeia, Sirius, Polaris, Vega, Atlas, Celeste</em> y <em>Andrómeda</em>.</li>
        <li><strong>Nombres de Antiguos Linajes e Históricos:</strong> De raíz latina, celta o germánica clásica como <em>Cassian, Soren, Aurelia, Cyrus, Darian, Elion, Dante, Balthazar, Alois</em> y <em>Valerius</em>.</li>
        <li><strong>Nombres Cortos Raros (3-4 Letras):</strong> Sencillos de recordar pero sumamente inusuales como <em>Kai, Roy, Keo, Nyx, Lux, Sol, Zea, Mio, Dax, Pax</em> y <em>Zoe</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología, Significado y Combinación Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-purple-950/60 text-purple-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Raro</th>
              <th class="py-3.5 px-4 font-bold">Nº de Letras</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Orion</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Mitología griega</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Nombre de un cazador mitológico y de una constelación. Su significado etimológico es incierto. <a href="https://www.behindthename.com/name/orion" target="_blank" rel="noopener noreferrer">Fuente de Orion</a></td>
              <td class="py-3 px-4 font-mono text-purple-300">Orion Cassian</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Freya</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-purple-300">Freya Astrid</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Cassian</td>
              <td class="py-3 px-4 font-mono text-zinc-400">7 letras</td>
              <td class="py-3 px-4 text-zinc-300">Romano</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Procede de Cassianus, derivado del apellido romano Cassius. <a href="https://www.behindthename.com/name/cassian" target="_blank" rel="noopener noreferrer">Fuente de Cassian</a></td>
              <td class="py-3 px-4 font-mono text-purple-300">Dante Cassian</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Zephyr</td>
              <td class="py-3 px-4 font-mono text-zinc-400">6 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-purple-300">Zephyr Soren</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Lyra</td>
              <td class="py-3 px-4 font-mono text-zinc-400">4 letras</td>
              <td class="py-3 px-4 text-zinc-300">Astronomía</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Nombre de la constelación de la Lira. <a href="https://www.behindthename.com/name/lyra" target="_blank" rel="noopener noreferrer">Fuente de Lyra</a></td>
              <td class="py-3 px-4 font-mono text-purple-300">Lyra Selene</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Astrid</td>
              <td class="py-3 px-4 font-mono text-zinc-400">6 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-purple-300">Aurelia Astrid</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-purple-400">Soren</td>
              <td class="py-3 px-4 font-mono text-zinc-400">5 letras</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-purple-300">Soren Elion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir un Nombre Raro y Sofisticado</h3>
      <ol>
        <li><strong>Prioriza la Facilidad de Pronunciación:</strong> Aunque el nombre sea poco común, asegúrate de que sea fácil de leer y articular en tu idioma habitual (ej. <em>Orion, Lyra, Cassian</em>).</li>
        <li><strong>Combina con Nombres o Apellidos Armónicos:</strong> Si utilizas un primer nombre muy exótico, equilibrarlo con un segundo nombre de sonoridad clásica crea un conjunto distinguido y memorable.</li>
        <li><strong>Verifica el Significado Etimológico Completo:</strong> Explora la raíz cultural, historia o mitología detrás de cada nombre en nuestra guía interactiva antes de tomar una decisión.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres raros, únicos y poco comunes. Nombres exóticos masculinos, femeninos y neutros con significado y audio de pronunciación.',
    keywords: 'nombres raros, nombres poco comunes, nombres raros con significado, nombres exóticos, nombres mitologicos, nombres unicos para bebes, nombres extravagantes',
    defaultName: 'Orion',
    customSymbols: ["🔮", "✨", "🌌", "⭐", "💎", "🪐", "⚜️", "✦", "👑", "📜", "🦅", "🌙"],
    faqs: [
      {
        question: "¿Qué hace que un nombre sea clasificado como 'raro' pero distinguido?",
        answer: "En esta web raro es una categoría editorial para explorar opciones como Orion, Cassian o Lyra. La frecuencia de un nombre depende del país y del período; no contamos con un ranking estadístico."
      },
      {
        question: "¿Cuáles son los nombres raros y poco comunes?",
        answer: "Entre los nombres raros más destacados para este año se encuentran Orion, Cassian, Zephyr, Freya, Lyra, Soren, Aurelia, Cyrus, Darian, Elion, Nyx y Atlas."
      },
      {
        question: "¿Cómo verificar la pronunciación y sonoridad de nombres raros compuestos?",
        answer: "Puedes usar nuestro Creador de Nombres Raros interactivo arriba: combina dos términos exóticos (como 'Orion Cassian' o 'Freya Astrid'), revisa la referencias de significado disponibles y presiona el botón del altavoz para escuchar su pronunciación con voz sintetizada del dispositivo."
      },
      {
        question: "¿Existen nombres raros y cortos de 3 y 4 letras?",
        answer: "Sí, nombres como Kai, Keo, Nyx, Lux, Sol, Zea, Mio, Dax, Pax y Roy combinan una extensión breve con un origen exótico y gran personalidad."
      }
    ]
  },
  'nombres-por-letra': {
    id: 'nombres-por-letra',
    path: '/nombres-por-letra',
    title: 'Nombres por Letra A-Z - Guía de Iniciales | GDN',
    h1: 'Directorio Completo de Nombres por Letra Inicial (A-Z)',
    subtitle: 'Navega por el abecedario completo para descubrir nombres masculinos, femeninos y unisex organizados por su letra inicial con origen, significados y audio de pronunciación.',
    seoText: `
      <h2>Encuentra el Nombre Perfecto según su Letra Inicial (A a la Z) para 2026</h2>
      <p>Organizar nombres por su <strong>letra inicial</strong> es una de las estrategias más efectivas a la hora de elegir el nombre ideal. Ya sea para combinar armónicamente con apellidos específicos, mantener iniciales familiares o encontrar una aliteración atractiva para apodos en redes sociales y perfiles de juego, el directorio alfabético A-Z te permite explorar una selección de alternativas de forma rápida e intuitiva.</p>

      <h3>Ventajas de Buscar Nombres por su Letra Inicial</h3>
      <p>Buscar por inicial ofrece beneficios clave tanto en el ámbito personal como en la estética del nombre:</p>
      <ul>
        <li><strong>Eufonía y Armonía Fónica:</strong> Evita la cacofonía asegurando que la última letra del primer nombre no choque con la primera letra del apellido (ej. <em>Lucas Silva</em> vs. <em>Lucas Alberto</em>).</li>
        <li><strong>Nombres Compuestos Coordinados:</strong> Permite crear combinaciones de dos nombres con iniciales parecidas o complementarias (ej. <em>Alexander Agustín</em>, <em>Bella Bianca</em>, <em>Carlos Cristian</em>).</li>
        <li><strong>Iniciales Simbólicas Familiar o Personal:</strong> Rinde homenaje a tradiciones familiares manteniendo la misma inicial en todos los hermanos o miembros de un grupo.</li>
        <li><strong>Diseño de Nicknames y Gamertags:</strong> Ideal para crear marcas personales, iniciales de clan o firmas estéticas con siglas limpias (ej. <em>A.G.</em>, <em>M.V.</em>, <em>S.R.</em>).</li>
      </ul>

      <h3>Tabla Comparativa: Nombres Populares y Significado por Inicial</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Inicial</th>
              <th class="py-3.5 px-4 font-bold">Nombres Populares</th>
              <th class="py-3.5 px-4 font-bold">Criterio de selección</th>
              <th class="py-3.5 px-4 font-bold">Estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra A</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Alexander, Amelia, Aitana, Agustín</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Alexander Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra B</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Bruno, Bella, Benjamín, Bianca</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Bruno Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra C</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Camila, Carlos, Cristian, Chloe</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Camila Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra E</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Enzo, Elena, Emanuel, Emma</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Enzo Thiago</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra M</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Mateo, Mia, Milan, María</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Mateo Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra S</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Sofía, Santiago, Samuel, Selene</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Sofía Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Letra Z</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Zoe, Zach, Zaira, Zephyr</td>
              <td class="py-3 px-4 text-zinc-300">Selección por inicial</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Consultar cada nombre y su fuente</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zoe Valentina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres por Inicial</h3>
      <ol>
        <li><strong>Revisa las Siglas o Monogramas Resultantes:</strong> Junta las iniciales del nombre completo con los apellidos para asegurarte de que no formen palabras indeseadas o extrañas.</li>
        <li><strong>Filtra por Género o Estilo Neutro:</strong> Utiliza los selectores interactivos para alternar entre nombres masculinos, femeninos o unisex dentro de la misma letra inicial.</li>
        <li><strong>Escucha la Pronunciación en Voz Alta:</strong> Utiliza el reproductor de audio integrado para verificar que la sonoridad de la inicial fluya adecuadamente al articularse.</li>
      </ol>
    `,
    metaDescription: 'Directorio A-Z de nombres organizados por letra inicial. Filtra nombres de mujer, hombre y bebés con significados y pronunciación.',
    keywords: 'nombres por letra, nombres de la a a la z, directorio de nombres por inicial, nombres masculinos por letra, nombres femeninos por letra, buscador alfabético de nombres',
    defaultName: 'Alberto',
    customSymbols: ["🔤", "🅰️", "🅱️", "Ⓒ", "Ⓓ", "Ⓔ", "Ⓕ", "Ⓖ", "💎", "⭐", "✨"],
    faqs: [
      {
        question: "¿Cómo navegar eficientemente por el abecedario de nombres (A-Z)?",
        answer: "Selecciona una inicial, escribe una búsqueda y combina el filtro de género. El directorio muestra una selección de nombres y permite solicitar una lectura sintetizada del dispositivo."
      },
      {
        question: "¿Puedo filtrar los nombres por letra según el género (niño, niña o unisex)?",
        answer: "Sí. Combina la inicial con el filtro de género para explorar la selección disponible. Los usos de género son orientativos y pueden variar según la cultura."
      },
      {
        question: "¿Puedo escuchar la pronunciación en audio de cada nombre?",
        answer: "En nuestro generador interactivo, cada nombre y combinación generada cuenta con un botón de altavoz que reproduce la sonoridad en voz sintetizada del dispositivo."
      },
      {
        question: "¿Qué iniciales son las más populares para nombres de bebés y personajes?",
        answer: "No contamos con estadísticas para clasificar iniciales por popularidad. Puedes comparar las selecciones de cada letra y elegir según escritura, pronunciación y apellidos."
      }
    ]
  },
  'nombres-con-a': {
    id: 'nombres-con-a',
    path: '/nombres-con-a',
    title: 'Nombres con A para Hombre, Mujer y Bebés | GDN',
    h1: 'Nombres con la Letra A: Guía Completa para Hombre y Mujer',
    subtitle: 'Descubre los nombres más bonitos, populares y modernos que empiezan con la letra A. Incluye etimología, significados profundos, combinaciones compuestas y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres con la Letra A para Hombre, Mujer y Bebés (2026)</h2>
      <p>La letra <strong>A</strong> es, con diferencia, la inicial más elegida en el mundo hispanohablante para nombrar a niños, niñas y personajes. Representa el inicio del abecedario, liderazgo, apertura y energía primigenia. Desde clásicos eternos como <em>Alexander</em> y <em>Agustín</em> hasta nombres modernos y melódicos como <em>Aitana, Amelia, Astrid, Axel, Arlo</em> y <em>Ariel</em>, los nombres con la letra A poseen una eufonía natural inigualable.</p>

      <h3>Categorías Principales de Nombres con la Letra A</h3>
      <p>Explora las corrientes de nombres con A agrupadas según su uso, resonancia y género:</p>
      <ul>
        <li><strong>Nombres Masculinos con A Destacados:</strong> <em>Alexander, Agustín, Adrián, Axel, Ángel, Antonio, Alonso, Ariel, Asher, Arlo, Adriel</em> y <em>Arturo</em>. Destacan por su fuerza y nobleza histórica.</li>
        <li><strong>Nombres Femeninos con A Elegantes:</strong> <em>Amelia, Aitana, Astrid, Alma, Ariana, Aurora, Alice, Abril, Athena, Amanda, Allegra</em> y <em>Alba</em>. Se caracterizan por su dulzura, solidez y belleza lírica.</li>
        <li><strong>Nombres Unisex y Modernos con A:</strong> <em>Alex, Ariel, Amor, Azul, Ashley, Alpha, Aston</em> y <em>Avery</em>. Ideales para quienes buscan versatilidad y originalidad contemporánea.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología y Significado de Nombres con A</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre con A</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Alexander</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Defensor de los hombres. <a href="https://www.behindthename.com/name/alexander" target="_blank" rel="noopener noreferrer">Fuente de Alexander</a></td>
              <td class="py-3 px-4 font-mono text-indigo-300">Alexander Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Amelia</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Amelia Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Aitana</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Aitana Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Agustín</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Agustín Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Astrid</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Astrid Selene</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Axel</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Axel Thiago</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Ariel</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Ariel Sol</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres que Inician con A</h3>
      <ol>
        <li><strong>Busca Contraste Silábico:</strong> Si el primer nombre que empieza con A es largo (como <em>Alexander</em> o <em>Adriana</em>), combínalo con un segundo nombre breve (como <em>Gael</em> o <em>Rose</em>) para mantener el ritmo vocal.</li>
        <li><strong>Evita la Cacofonía con el Apellido:</strong> Si tu primer apellido empieza por la vocal A (ej. <em>Alvarez</em>, <em>Aguilar</em>), asegúrate de que la última letra del primer nombre no sea una 'a' prolongada para evitar un efecto pesado de aliteración.</li>
        <li><strong>Comprueba la Pronunciación en Voz Alta:</strong> Utiliza la herramienta interactiva de audio para escuchar la sonoridad del nombre y su combinación antes de decidir.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres con A para hombres, mujeres y bebés. Descubre significados, etimologías y audio de pronunciación en voz sintetizada del dispositivo.',
    keywords: 'nombres con a, nombres con a de hombre, nombres con a de mujer, nombres con la letra a, nombres con a para bebes, nombres bonitos con a, nombres raros con a',
    defaultName: 'Alexander',
    customSymbols: ["🅰️", "✨", "⭐", "👑", "💎", "⚡", "📜", "🌸", "🛡️", "✦"],
    faqs: [
      {
        question: "¿Por qué la letra A es la inicial más popular para nombres en español?",
        answer: "Esta página reúne ejemplos que empiezan por A. No contamos con estadísticas para afirmar que sea la inicial más popular; compara las propuestas según tu preferencia."
      },
      {
        question: "¿Cuáles son algunos nombres con A  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Para niños destacan Alexander, Agustín, Adrián, Axel, Ángel, Alonso y Adriel. Para niñas se incluyen Amelia, Aitana, Astrid, Alma, Ariana, Aurora, Alice y Alba."
      },
      {
        question: "¿Cómo combinar un primer nombre que empieza con A con un segundo nombre?",
        answer: "Se recomienda buscar equilibrio de silabas: si el primer nombre es largo (como Alexander o Ariana), combínalo con un segundo nombre corto (como Gael, Rose o Cruz). Si es corto (como Alma o Axel), combínalo con un nombre de sonoridad clásica o melódica."
      },
      {
        question: "¿Puedo escuchar la pronunciación en audio de los nombres con A?",
        answer: "Sí, en nuestro generador interactivo arriba puedes presionar el ícono del altavoz en cualquier nombre o combinación para escuchar su pronunciación en voz sintetizada del dispositivo en español."
      }
    ]
  },
  'nombres-con-b': {
    id: 'nombres-con-b',
    path: '/nombres-con-b',
    title: 'Nombres con B para Niña, Niño y Mascotas | GDN',
    h1: 'Nombres con la Letra B',
    subtitle: 'Directorio de nombres que empiezan con B para comparar opciones masculinas y femeninas dentro del índice A-Z.',
    seoText: `
      <h2>Nombres con B: Ideas para Comparar por Inicial</h2>
      <p>La letra B reúne opciones muy distintas entre sí, desde Bruno, Benjamín y Balthazar hasta Bella, Bianca y Bárbara. Esta página está pensada como un filtro por inicial: primero eliges la B y después comparas escritura, longitud y el estilo que mejor encaje con el uso que buscas.</p>

      <h3>Cómo usar una página de nombres por letra</h3>
      <ul>
        <li><strong>Empieza por la inicial:</strong> descarta rápidamente nombres que no cumplan tu requisito principal.</li>
        <li><strong>Compara la longitud:</strong> prueba cómo se ve el nombre junto a los apellidos o un segundo nombre.</li>
        <li><strong>Verifica el significado:</strong> no asumas un origen solo por cómo suena; consulta la fuente cuando el dato sea importante.</li>
      </ul>

      <h3>Cuándo volver al directorio completo</h3>
      <p>Si todavía no estás decidido por la B, vuelve al <a href="/nombres-por-letra">directorio de nombres por letra</a> para comparar otras iniciales. También puedes explorar listas más amplias de <a href="/nombres-de-mujer">nombres de mujer</a> o <a href="/nombres-de-nino">nombres de niño</a>. La selección no representa un ranking de popularidad ni un registro civil exhaustivo.</p>
    `,
    metaDescription: 'Explora nombres con B para hombre y mujer dentro del directorio A-Z. Compara escritura y longitud y revisa el origen antes de asumir un significado.',
    keywords: 'nombres con b, nombres con b de hombre, nombres con b de mujer',
    defaultName: 'Bruno',
    customSymbols: ["🅱️", "✨", "🧸"],
    faqs: [
      {
        question: "¿Todos los nombres de esta página empiezan con B?",
        answer: "Sí. La intención principal de la página es filtrar propuestas por la inicial B."
      },
      {
        question: "¿La lista de nombres con B está ordenada por popularidad?",
        answer: "No. Es una selección editorial y no utiliza estadísticas de nacimientos para ordenar los resultados."
      },
      {
        question: "¿Dónde puedo comparar otras iniciales?",
        answer: "En el directorio A-Z puedes cambiar de letra y explorar páginas específicas para otras iniciales."
      }
    ]
  },
  'nombres-con-c': {
    id: 'nombres-con-c',
    path: '/nombres-con-c',
    title: 'Nombres con C para Hombre, Mujer y Bebés | GDN',
    h1: 'Nombres con la Letra C',
    subtitle: 'Directorio de nombres que comienzan con C para comparar escritura, longitud y distintas opciones de hombre y mujer.',
    seoText: `
      <h2>Nombres con C: Cómo Comparar Opciones por Inicial</h2>
      <p>Camila, Carlos, Cristian, Clara, Catalina o Christopher muestran que una misma inicial puede aparecer en nombres de longitudes y tradiciones muy diferentes. Esta página agrupa propuestas que empiezan con C para que la inicial sea el primer criterio y no tengas que revisar listas que no cumplen ese requisito.</p>

      <h3>Qué mirar además de la primera letra</h3>
      <p>Después de elegir la C, compara el número de sílabas, la longitud escrita y cómo se combina cada opción con los apellidos. Si el origen o el significado es decisivo para ti, compruébalo en una fuente específica antes de tomar una descripción breve como una etimología definitiva.</p>
      <ul>
        <li><strong>Nombre corto:</strong> útil si buscas una combinación sencilla con apellidos largos.</li>
        <li><strong>Nombre compuesto:</strong> prueba el ritmo completo antes de decidir.</li>
        <li><strong>Uso internacional:</strong> revisa si la grafía cambia entre idiomas.</li>
      </ul>

      <h3>Explora otras letras</h3>
      <p>El <a href="/nombres-por-letra">directorio A-Z</a> reúne las demás iniciales. Si tu prioridad no es una letra concreta, las páginas de <a href="/nombres-de-nina">nombres de niña</a> y <a href="/nombres-de-nino">nombres de niño</a> ofrecen filtros por otros criterios.</p>
    `,
    metaDescription: 'Explora nombres con C para hombre y mujer. Compara longitud, escritura y combinaciones dentro del directorio A-Z sin asumir popularidad ni origen no verificado.',
    keywords: 'nombres con c, nombre con c, nombres con c de mujer',
    defaultName: 'Camila',
    customSymbols: ["Ⓒ", "✨", "💖"],
    faqs: [
      {
        question: "¿Qué diferencia esta página del directorio A-Z?",
        answer: "Aquí la selección ya está limitada a nombres que empiezan con C; el directorio A-Z permite cambiar entre todas las iniciales."
      },
      {
        question: "¿Un nombre con C se escribe igual en todos los idiomas?",
        answer: "No necesariamente. Algunas formas cambian de grafía o transliteración según el idioma y el país."
      },
      {
        question: "¿Los ejemplos con C están ordenados de más a menos populares?",
        answer: "No. La selección sirve para comparar opciones y no representa un ranking estadístico."
      }
    ]
  },
  'nombres-con-e': {
    id: 'nombres-con-e',
    path: '/nombres-con-e',
    title: 'Nombres con E para Hombre, Mujer y Bebés | GDN',
    h1: 'Nombres con la Letra E (Hombre y Mujer)',
    subtitle: 'Directorio de nombres que empiezan con E para comparar opciones de hombre y mujer por escritura y longitud.',
    seoText: `
      <h2>Nombres con E para Hombre y Mujer</h2>
      <p>Enzo, Elena, Emma, Emanuel, Esteban y Eva son ejemplos de cómo la E aparece en nombres cortos y largos, clásicos y contemporáneos. La función de esta página es concentrar la búsqueda en una inicial concreta y ayudarte a comparar las opciones sin mezclar letras que no te interesan.</p>

      <h3>Cómo reducir la lista</h3>
      <ul>
        <li><strong>Por longitud:</strong> compara nombres breves como Eva con formas más extensas como Emanuel.</li>
        <li><strong>Por combinación:</strong> lee el nombre completo junto con los apellidos antes de elegir.</li>
        <li><strong>Por contexto:</strong> si el origen o el idioma son importantes, investiga la forma concreta en una fuente fiable.</li>
      </ul>

      <h3>La inicial no determina el significado</h3>
      <p>Compartir la letra E no implica compartir origen, significado ni popularidad. La página no crea una categoría lingüística artificial: solo usa la primera letra como herramienta de navegación. Para cambiar de inicial puedes volver al <a href="/nombres-por-letra">directorio completo A-Z</a>; para comparar por tipo de nombre, consulta <a href="/nombres-de-mujer">nombres de mujer</a> o <a href="/nombres-de-nino">nombres de niño</a>.</p>
    `,
    metaDescription: 'Explora nombres con E para hombre y mujer por longitud y escritura. Directorio por inicial con enlaces al índice A-Z y sin rankings de popularidad inventados.',
    keywords: 'nombres con e, nombres con e de hombre, nombres con e de mujer',
    defaultName: 'Enzo',
    customSymbols: ["Ⓔ", "✨", "🌟"],
    faqs: [
      {
        question: "¿Compartir la letra E significa que los nombres tienen el mismo origen?",
        answer: "No. La E es solo el criterio de navegación; cada nombre puede tener una historia lingüística distinta."
      },
      {
        question: "¿Puedo comparar nombres cortos y largos con E?",
        answer: "Sí. La página está pensada para revisar opciones de distintas longitudes antes de combinarlas con apellidos."
      },
      {
        question: "¿Dónde cambio a otra letra?",
        answer: "El directorio A-Z permite pasar a otras iniciales y mantener la búsqueda organizada por letra."
      }
    ]
  },
  'nombres-con-f': {
    id: 'nombres-con-f',
    path: '/nombres-con-f',
    title: 'Nombres con F para Hombre, Mujer y Bebés | GDN',
    h1: 'Nombres con la Letra F: Guía Completa para Hombre y Mujer',
    subtitle: 'Descubre los nombres más bonitos, elegantes y poderosos que inician con la letra F. Incluye significados profundos, etimologías, combinaciones compuestas y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres con la Letra F para Hombre, Mujer y Bebés (2026)</h2>
      <p>La letra <strong>F</strong> es sinónimo de fuerza, fidelidad, fortuna y elegancia. Aunque representa un porcentaje más selecto de nombres en el abecedario español en comparación con vocales como la A, los nombres que empiezan con la letra F destacan por su inconfundible presencia sonora y su profunda herencia cultural germánica, latina y nórdica. Desde clásicos de gran nobleza como <em>Fernando, Felipe</em> y <em>Francisco</em> hasta alternativas femeninas líricas como <em>Fiorella, Frida, Freya</em> y <em>Francesca</em>, los nombres con F siempre impresionan por su sofisticación.</p>

      <h3>Categorías Principales de Nombres con la Letra F</h3>
      <p>Explora las corrientes de nombres con la inicial F divididas por género y estilo:</p>
      <ul>
        <li><strong>Nombres Masculinos con F Destacados:</strong> <em>Fernando, Felipe, Félix, Francisco, Fabricio, Fabio, Franco, Farid, Federico, Faustino, Flavio, Fabián</em> y <em>Ferdinand</em>. Sobresalen por reflejar valor, astucia y liderazgo.</li>
        <li><strong>Nombres Femeninos con F Elegantes:</strong> <em>Fiorella, Frida, Freya, Francesca, Fabiola, Fátima, Florencia, Fernanda, Fiona, Faith, Flora</em> y <em>Fabiene</em>. Representan belleza, paz, fe y resplandor natural.</li>
        <li><strong>Nombres Raros y Modernos con F:</strong> <em>Finley, Flynn, Falcon, Fenix, Forest, Fabi, Ferran</em> y <em>Farah</em>. Excelentes para quienes buscan nombres vanguardistas con aire exótico.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología y Significado de Nombres con F</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre con F</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Fernando</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Fernando Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Fiorella</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Fiorella Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Felipe</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Felipe Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Frida</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Frida Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Félix</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Félix Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Freya</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Freya Astrid</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Francisco</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Francisco Javier</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres que Inician con F</h3>
      <ol>
        <li><strong>Aprovecha la Sonoridad Fricativa:</strong> La consonante F posee un sonido continuo y elegante que combina excepcionalmente con vocales abiertas (A, E, O) como en <em>Fernando, Fátima, Freya, Fabricio</em>.</li>
        <li><strong>Crea Contrastes de Longitud en Nombres Compuestos:</strong> Si eliges un primer nombre largo como <em>Francisco</em> o <em>Francesca</em>, acompáñalo de un segundo nombre más breve como <em>Gael, Rose</em> o <em>Cruz</em>.</li>
        <li><strong>Comprueba el Ritmo con el Apellido:</strong> Revisa que el flujo fónico entre el nombre terminado y el primer apellido mantenga naturalidad y no cause repetición innecesaria de sílabas.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres con F para hombre, mujer y bebés. Descubre significados profundos, etimología y audio de pronunciación.',
    keywords: 'nombres con f, nombres con f de hombre, nombres con f de mujer, nombres con la letra f, nombres bonitos con f, nombres con f para bebes, nombres que empiezan con f',
    defaultName: 'Fernando',
    customSymbols: ["Ⓕ", "🔥", "⚡", "👑", "✨", "🌸", "🛡️", "✦", "📜", "🦅"],
    faqs: [
      {
        question: "¿Qué atributos y sonoridad transmiten los nombres con la letra F?",
        answer: "Los nombres con la inicial F evocan fortaleza, fidelidad, fortuna y elegancia. Su sonoridad fricativa aporta una distinción refinada y memorable tanto en opciones masculinas como femeninas."
      },
      {
        question: "¿Cuáles son algunos nombres con F  para niño y niña?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Para niños, los más elegidos son Fernando, Felipe, Félix, Francisco, Franco, Fabricio y Federico. Para niñas destacan Fiorella, Frida, Freya, Francesca, Fátima, Florencia y Fabiola."
      },
      {
        question: "¿Cómo crear combinaciones armoniosas con nombres que empiezan por F?",
        answer: "Combina un primer nombre largo con F (como Fernando o Francesca) con un segundo nombre de 1 o 2 sílabas (como Gael, Cruz o Rose), o combina nombres de sonoridad suave si el apellido es fuerte."
      },
      {
        question: "¿Puedo escuchar la pronunciación en audio de cada nombre con F?",
        answer: "Sí, en nuestro generador interactivo puedes hacer clic en el ícono del altavoz en cualquier nombre o combinación compuesta para escuchar su pronunciación en voz sintetizada del dispositivo en español."
      }
    ]
  },
  'nombres-con-m': {
    id: 'nombres-con-m',
    path: '/nombres-con-m',
    title: 'Nombres con M para Mujer, Hombre y Bebés | GDN',
    h1: 'Nombres con la Letra M: Guía Completa para Mujer y Hombre',
    subtitle: "Descubre los nombres seleccionados, melódicos y elegantes que inician con la letra M. Incluye significados profundos, etimologías, combinaciones compuestas y audio de pronunciación.",
    seoText: `
      <h2>Los Mejores Nombres con la Letra M para Mujer, Hombre y Bebés (2026)</h2>
      <p>La letra <strong>M</strong> es una de las iniciales más queridas y utilizadas globalmente. Representa la maternidad, el misterio, la melodía y la majestuosidad. Fónicamente suave y profundamente resonante, la M encabeza algunos de los nombres más influyentes en el mundo hispanohablante: desde favoritos masculinos como <em>Mateo, Martín, Marcos, Matías</em> y <em>Milan</em>, hasta joyas femeninas atemporales y modernas como <em>Mia, María, Milena, Miranda, Melissa</em> y <em>Maya</em>.</p>

      <h3>Categorías Principales de Nombres con la Letra M</h3>
      <p>Explora las corrientes de nombres con la inicial M agrupadas según su resonancia, género y carácter:</p>
      <ul>
        <li><strong>Nombres Masculinos con M Destacados:</strong> <em>Mateo, Martín, Marcos, Matías, Milan, Miguel, Mauricio, Manuel, Mario, Maximiliano, Marlon, Milo</em> y <em>Mauricio</em>. Se distinguen por su equilibrio entre calidez, fuerza y nobleza.</li>
        <li><strong>Nombres Femeninos con M Elegantes:</strong> <em>Mia, María, Milena, Miranda, Melissa, Maya, Mariana, Martina, Montserrat, Michelle, Maite, Micaela</em> y <em>Mabel</em>. Destacan por su lirismo, distinción y presencia afectuosa.</li>
        <li><strong>Nombres Raros y Modernos con M:</strong> <em>Morgan, Milan, Montana, Moon, Marlowe, Miller, Mika</em> y <em>Maverick</em>. Perfectos para quienes buscan opciones cosmopolitas, estilos unisex y marcas personales únicas.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología y Significado de Nombres con M</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre con M</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Mateo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Hebreo, a través del griego</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Forma de Matthew; su raíz Mattithiah significa regalo de Yahweh. <a href="https://www.behindthename.com/name/mattithiah" target="_blank" rel="noopener noreferrer">Fuente de Mateo</a></td>
              <td class="py-3 px-4 font-mono text-indigo-300">Mateo Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Mia</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Forma corta de Maria</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Diminutivo de Maria; coincide con la palabra italiana mia (mía). <a href="https://www.behindthename.com/name/mia" target="_blank" rel="noopener noreferrer">Fuente de Mia</a></td>
              <td class="py-3 px-4 font-mono text-indigo-300">Mia Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Martín</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Martín Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">María</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">María Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Milan</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Milan Thiago</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Milena</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Milena Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Marcos</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Marcos Agustín</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres que Inician con M</h3>
      <ol>
        <li><strong>Aprovecha la Melodía Vocal Abierta:</strong> La M inicial combina excelentemente con casi cualquier combinación de vocales, ofreciendo un ritmo armonioso en nombres compuestos como <em>Mateo Alexander, Mia Valentina, Martín Gael</em>.</li>
        <li><strong>Coordina con Apellidos Fuertes o Cortos:</strong> Si tu apellido es breve (ej. <em>Sanz, Cruz, Gil</em>), un primer nombre con M melódico y de tres sílabas como <em>Micaela, Mauricio</em> o <em>Miranda</em> genera una sonoridad majestuosa.</li>
        <li><strong>Verifica la Pronunciación Interactiva:</strong> Escucha cómo suena el nombre en voz sintetizada del dispositivo en español utilizando el reproductor de audio de nuestro generador interactivo arriba.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres con M para mujer, hombre y bebés. Descubre significados profundos, etimología y audio de pronunciación.',
    keywords: 'nombres con m, nombres con m de mujer, nombres con m de hombre, nombres de niña con m, nombres con la letra m, nombres bonitos con m, nombres de nino con m',
    defaultName: 'Mateo',
    customSymbols: ["Ⓜ️", "✨", "💖", "⭐", "👑", "🌺", "✦", "📜", "🌙", "🛡️"],
    faqs: [
      {
        question: "¿Por qué los nombres con la letra M son tan populares globalmente?",
        answer: "Esta selección reúne ejemplos que empiezan por M. No atribuimos una popularidad global ni una respuesta afectiva universal al sonido de esta letra."
      },
      {
        question: "¿Cuáles son algunos nombres con M  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Mateo, Martín, Marcos, Matías, Milan, Miguel y Mauricio. Para niña destacan Mia, María, Milena, Miranda, Melissa, Maya, Mariana y Martina."
      },
      {
        question: "¿Cómo combinar un nombre que empieza con M con un segundo nombre?",
        answer: "Si el primer nombre con M es corto (como Mia o Milan), combínalo con un segundo nombre melódico de 3 o 4 sílabas (como Valentina o Alexander). Si es largo (como Maximiliano o Montserrat), acompáñalo de un término de 1 o 2 sílabas."
      },
      {
        question: "¿Puedo escuchar el audio con la pronunciación de cada nombre con M?",
        answer: "Sí, en nuestro generador interactivo arriba puedes presionar el ícono del altavoz en cualquier nombre o combinación compuesta para escuchar la pronunciación en voz sintetizada del dispositivo en español."
      }
    ]
  },
  'nombres-con-en': {
    id: 'nombres-con-en',
    path: '/nombres-con-en',
    title: 'Nombres con Ñ Hispanos y Tradicionales | GDN',
    h1: 'Nombres con la Letra Ñ: Guía Completa de Nombres Hispanos y Autóctonos',
    subtitle: 'Descubre los nombres con la letra Ñ más icónicos, raros y culturales para hombre y mujer. Incluye etimología vasca, quechua y latina, significados, combinaciones y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres con la Letra Ñ para Hombre, Mujer y Personajes (2026)</h2>
      <p>Esta selección de <strong>nombres con Ñ</strong> incluye nombres que contienen la letra, como Iñigo, Begoña y Nuño. Contener Ñ no equivale a empezar por Ñ. No asumimos que una palabra cultural sea un nombre personal ni atribuimos frecuencia a idiomas sin datos.</p>

      <h3>Categorías Principales de Nombres con la Letra Ñ</h3>
      <p>Explora las variedades de nombres que integran la eñe según sus raíces históricas, culturales y estilo:</p>
      <ul>
        <li><strong>Nombres Masculinos Tradicionales e Hispanos:</strong> <em>Iñigo, Beñat, Nuño e Iñaki</em> contienen la letra Ñ, aunque no empiezan por ella. <em>Toño</em> es una forma familiar de Antonio.</li>
        <li><strong>Nombres Femeninos con Ñ:</strong> <em>Begoña</em> es un nombre documentado de uso español y vasco. No todas las palabras con Ñ son nombres personales.</li>
        <li><strong>Vocabulario Cultural:</strong> <em>Ñusta</em> es un término quechua para una princesa de los antiguos incas. Su definición histórica no demuestra por sí sola su uso como nombre de pila.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología y Significado de Nombres con Ñ</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre con Ñ</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Iñigo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Iñigo Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Begoña</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Begoña Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Ñusta</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Ñusta Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Beñat</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Beñat Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Nuño</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Nuño Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Iñaki</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Iñaki Thiago</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Cariño</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Apodo afectuoso</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Cariño Rose</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres que Integran la Letra Ñ</h3>
      <ol>
        <li><strong>Comprueba la escritura y el uso:</strong> Compara Iñigo o Begoña y consulta una fuente específica antes de atribuir un origen o significado. Un título cultural no demuestra uso como nombre de pila.</li>
        <li><strong>Combina con Nombres Secundarios Ligeros:</strong> Debido a la sonoridad distintiva de la letra Ñ, acompáñala de un segundo nombre breve y melódico (como <em>Gael, Sofía, Mateo, Rose</em>) para crear un ritmo armónico.</li>
        <li><strong>Consulta la Pronunciación:</strong> La voz del dispositivo ofrece una lectura aproximada; consulta hablantes y fuentes lingüísticas para confirmar la pronunciación.</li>
      </ol>
      <p>Fuentes consultadas: <a href="https://www.behindthename.com/name/i10n14igo">Íñigo</a>, <a href="https://www.behindthename.com/name/begon14a">Begoña</a>, <a href="https://www.behindthename.com/name/ben14at">Beñat</a>, <a href="https://www.behindthename.com/name/nun14o">Nuño</a>, <a href="https://www.behindthename.com/name/in14aki">Iñaki</a> y <a href="https://dle.rae.es/%C3%B1usta">ñusta (RAE)</a>. Las combinaciones son propuestas creativas.</p>
    `,
    metaDescription: 'Lista completa de nombres con la letra Ñ para hombres, mujeres y bebés. Descubre etimologías, significados y audio de pronunciación.',
    keywords: 'nombres con ñ, nombres con ñ de mujer, nombres con ñ de hombre, nombres con la letra ñ, nombres tradicionales con ñ, nombres incas con ñ, nombres vascos con ñ',
    defaultName: 'Iñigo',
    customSymbols: ["🇪🇸", "✨", "👑", "⭐", "🌿", "🔥", "✦", "📜", "🛡️", "🏛️"],
    faqs: [
      {
        question: "¿Existen nombres que empiecen directamente por la letra Ñ?",
        answer: "Los nombres de pila documentados que empiezan por Ñ son poco frecuentes. Este directorio muestra nombres que contienen Ñ. Palabras, títulos culturales y topónimos no deben confundirse con nombres personales."
      },
      {
        question: "¿Cuáles son los nombres con la letra Ñ más emblemáticos e hispanos?",
        answer: "Entre las opciones masculinas están Iñigo, Beñat, Nuño e Iñaki. Begoña es una opción femenina documentada. Contienen Ñ, pero sus iniciales son otras letras."
      },
      {
        question: "¿Cómo combinar armoniosamente un nombre con Ñ con un segundo nombre?",
        answer: "Puedes comparar Iñigo Gael, Begoña Sofía o Nuño Alexander. Estas propuestas contienen Ñ; no presentamos títulos culturales ni palabras no verificadas como nombres personales."
      },
      {
        question: "¿Puedo escuchar el audio de la pronunciación de nombres con Ñ?",
        answer: "Puedes seleccionar Ñ y pulsar el altavoz para una lectura aproximada con la voz española disponible en tu dispositivo. No es una grabación de un hablante ni una verificación lingüística."
      }
    ]
  },
  'nombres-con-y': {
    id: 'nombres-con-y',
    path: '/nombres-con-y',
    title: 'Nombres con Y para Niña, Niño y Bebés | GDN',
    h1: 'Nombres con la Letra Y',
    subtitle: 'Directorio de nombres que comienzan con Y para comparar grafías, longitudes y variantes sin convertir la rareza en una afirmación estadística.',
    seoText: `
      <h2>Nombres con Y: Una Inicial con Muchas Grafías</h2>
      <p>Yaretzi, Yasmin, Yuri, Yanis, Yael o Yolanda muestran la variedad de nombres que pueden comenzar con Y. Esta página sirve para explorar esa inicial de forma directa, pero no asume que un nombre sea “raro” o “exótico” solo por empezar con una letra menos frecuente en español.</p>

      <h3>Presta atención a las variantes de escritura</h3>
      <p>Algunos nombres con Y circulan en varios idiomas y pueden tener formas alternativas con J, I u otras grafías. Si necesitas una forma para documentos o para un uso cultural específico, comprueba cuál corresponde al contexto que te interesa antes de elegir únicamente por apariencia.</p>
      <ul>
        <li><strong>Compara longitud</strong> para ver cómo funciona cada opción con los apellidos.</li>
        <li><strong>Revisa la grafía</strong> cuando existan transliteraciones o variantes internacionales.</li>
        <li><strong>No infieras popularidad</strong> por la inicial; hacen falta estadísticas para afirmarlo.</li>
      </ul>

      <h3>Más formas de explorar</h3>
      <p>Desde el <a href="/nombres-por-letra">directorio A-Z</a> puedes saltar a cualquier otra letra. Si prefieres una selección basada en estilo en lugar de inicial, consulta las páginas de <a href="/nombres-raros">nombres raros</a> o <a href="/nombres-unisex">nombres unisex</a>.</p>
    `,
    metaDescription: 'Explora nombres con Y para mujer y hombre. Compara grafías, longitud y variantes dentro del directorio A-Z sin confundir inicial con rareza o popularidad.',
    keywords: 'nombres con y, nombres con y de mujer, nombres con y de hombre',
    defaultName: 'Yaretzi',
    customSymbols: ["✨", "💖", "🌸"],
    faqs: [
      {
        question: "¿Todos los nombres con Y son raros en español?",
        answer: "No. La frecuencia depende del país y del periodo; la inicial por sí sola no permite afirmar que un nombre sea raro."
      },
      {
        question: "¿Puede un nombre con Y tener otra grafía en otro idioma?",
        answer: "Sí. Algunas formas cambian por transliteración o tradición ortográfica, por lo que conviene verificar el contexto."
      },
      {
        question: "¿Dónde puedo buscar nombres por otra inicial?",
        answer: "El directorio A-Z enlaza las páginas disponibles para cada letra y permite ampliar la búsqueda."
      }
    ]
  },
  'nombres-con-z': {
    id: 'nombres-con-z',
    path: '/nombres-con-z',
    title: 'Nombres con Z para Hombre, Mujer y Bebés | GDN',
    h1: 'Nombres con la Letra Z: Guía Completa para Hombre y Mujer',
    subtitle: 'Descubre los nombres más potentes, raros y elegantes que inician con la letra Z. Incluye significados profundos, etimologías, combinaciones compuestas y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres con la Letra Z para Hombre, Mujer y Bebés (2026)</h2>
      <p>La letra <strong>Z</strong> es la última letra del abecedario y una de las más fascinantes y magnéticas. Ocupa un lugar especial por su sonido vibrante, su exótico origen místico y su extraordinaria fuerza visual. Los nombres que empiezan con la letra Z destacan inmediatamente por su originalidad y distinción, abarcando desde referencias mitológicas como <em>Zeus</em> hasta tendencias atemporales como <em>Zoey, Zoe, Zaid, Zahra, Zulema, Zacarias, Zion</em> y <em>Zelda</em>.</p>

      <h3>Categorías Principales de Nombres con la Letra Z</h3>
      <p>Explora las variedades de nombres que inician con la consonante Z según su carácter, género y resonancia:</p>
      <ul>
        <li><strong>Nombres Masculinos con Z Destacados:</strong> <em>Zeus, Zaid, Zacarias, Zack, Zenón, Zephyr, Zarek, Zian, Zander</em> y <em>Zechariah</em>. Transmiten poder, sabiduría, autoridad mitológica y carácter inquebrantable.</li>
        <li><strong>Nombres Femeninos con Z Elegantes:</strong> <em>Zoey, Zoe, Zahra, Zulema, Zaria, Zenaida, Zelda, Zelma, Zoraida, Zayra</em> y <em>Zara</em>. Se caracterizan por su vitalidad, brillo estelar, belleza exótica y paz.</li>
        <li><strong>Nombres Raros y Modernos con Z:</strong> <em>Zion, Zenith, Zuri, Zephyr, Ziggy, Zale, Zan</em> y <em>Zander</em>. Ideales para conceptos futuristas, vanguardistas, marcas personales y avatares.</li>
      </ul>

      <h3>Tabla Comparativa: Origen, Etimología y Significado de Nombres con Z</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre con Z</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zeus</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zeus Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zoey / Zoe</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zoey Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zaid</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zaid Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zahra</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zahra Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zulema</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zulema Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zion</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zion Sky</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zelda</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zelda Astrid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres que Inician con Z</h3>
      <ol>
        <li><strong>Aprovecha el Impacto de la Z Inicial:</strong> Por ser la última inicial del alfabeto y tener un trazo gráfico distintivo, los nombres con Z otorgan carácter memorizable desde la primera sílaba.</li>
        <li><strong>Equilibra con Nombres Secundarios Tradicionales:</strong> Si eliges un nombre exótico con Z (como <em>Zeus, Zion, Zahra</em> o <em>Zulema</em>), acompáñalo de un segundo nombre clásico (como <em>Alexander, Mateo, Sofía, Rose</em>) para darle una cadencia atemporal.</li>
        <li><strong>Escucha la Pronunciación en Tiempo Real:</strong> Revisa cómo suena la combinación completa utilizando la herramienta de voz interactiva en nuestro generador.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres con Z para hombre, mujer y bebés. Descubre significados profundos, etimologías y audio de pronunciación.',
    keywords: 'nombres con z, nombres con z de mujer, nombres con z de hombre, nombres con la letra z, nombres de niña con z, nombres raros con z, nombres bonitos con z',
    defaultName: 'Zoey',
    customSymbols: ["⚡", "✨", "🏛️", "👑", "⭐", "💎", "✦", "📜", "🌙", "🛡️"],
    faqs: [
      {
        question: "¿Qué atributos y vibración transmiten los nombres con la letra Z?",
        answer: "Transmiten fuerza, distinción, brillo estelar y sofisticación exótica. Al ser la última letra del abecedario, otorgan un sello de originalidad y personalidad inconfundible."
      },
      {
        question: "¿Cuáles son algunos nombres con Z  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Para niño destacan Zeus, Zaid, Zacarias, Zack, Zenón, Zephyr y Zander. Para niña se incluyen Zoey, Zoe, Zahra, Zulema, Zaria, Zenaida, Zelda y Zara."
      },
      {
        question: "¿Cómo combinar de forma armoniosa un nombre que empieza con Z?",
        answer: "Se sugiere buscar contraste fónico: aísla la sonoridad de la Z combinándola con segundos nombres de vocales suaves o de uso tradicional (como Zoey Valentina, Zaid Mateo o Zeus Alexander)."
      },
      {
        question: "¿Puedo escuchar la pronunciación en audio de cada nombre con Z?",
        answer: "Sí, en nuestro generador A-Z interactivo arriba puedes ingresar cualquier nombre con Z o combinación compuesta y hacer clic en el ícono del altavoz para escuchar su locución en voz sintetizada del dispositivo en español."
      }
    ]
  },
  'nombres-de-dioses': {
    id: 'nombres-de-dioses',
    path: '/nombres-de-dioses',
    title: 'Nombres de Dioses y Deidades Mitológicas | GDN',
    h1: 'Nombres de Dioses y Deidades Mitológicas: Guía Épica',
    subtitle: 'Descubre los nombres más imponentes y legendarios inspirados en el Olimpo, Valhalla, el Nilo y civilizaciones antiguas. Incluye significados, panteones, combinaciones y audio de pronunciación.',
    seoText: `
      <h2>Los Nombres de Dioses y Deidades Mitológicas más Potentes y Épicos (2026)</h2>
      <p>Los <strong>nombres de dioses y deidades mitológicas</strong> poseen una resonancia legendaria sin igual. Encarnan las fuerzas primordiales de la naturaleza, el trueno, el sol, la sabiduría, la guerra y el misticismo universal. Muy populares tanto para bebés como para nicks de videojuegos (Free Fire, League of Legends, RPGs), marcas y mascotas, los nombres mitológicos ofrecen una personalidad imponente y trascendente.</p>

      <h3>Categorías Principales por Panteones Mitológicos</h3>
      <p>Explora las deidades organizadas según su tradición cultural y sus atributos dominantes:</p>
      <ul>
        <li><strong>Mitología Griega y Romana (El Olimpo):</strong> <em>Zeus, Poseidón, Atenea, Apolo, Ares, Hermes, Hades, Hefesto, Artemisa, Selene</em> y <em>Cronos</em>. Símbolos de poder celestial, estrategia militar y luz luminosa.</li>
        <li><strong>Mitología Nórdica (El Valhalla):</strong> <em>Thor, Odín, Freya, Loki, Tyr, Baldur, Heimdall, Valkiria, Frigg</em> y <em>Skadi</em>. Representan el trueno, el destino, la magia rúnica, la lealtad y el combate feroz.</li>
        <li><strong>Mitología Egipcia y Oriental:</strong> <em>Anubis, Horus, Ra, Isis, Osiris, Sekhmet, Thot, Bastet, Shiva, Indra</em> y <em>Amón</em>. Evocan renacimiento, el sol naciente, misterios del inframundo y eternidad.</li>
      </ul>

      <h3>Tabla Comparativa: Panteón, Simbolismo y Poder de Deidades Mitológicas</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Deidad</th>
              <th class="py-3.5 px-4 font-bold">Panteón</th>
              <th class="py-3.5 px-4 font-bold">Dominio y Atributo Principal</th>
              <th class="py-3.5 px-4 font-bold">Asociación mitológica (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zeus</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Griego</td>
              <td class="py-3 px-4 text-zinc-300">Rey de los Dioses, Rayo y Cielo</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Dios supremo del Olimpo, soberano del firmamento y justicia.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Zeus Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Thor</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Nórdico</td>
              <td class="py-3 px-4 text-zinc-300">Dios del Trueno y la Fuerza</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Protector de la humanidad armado con el martillo Mjolnir.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Thor Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Atenea / Athena</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Griego</td>
              <td class="py-3 px-4 text-zinc-300">Diosa de la Sabiduría y Estrategia</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Mente brillante, guerrera sabia, defensora de las artes.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Atenea Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Anubis</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Egipcio</td>
              <td class="py-3 px-4 text-zinc-300">Guardián del Inframundo y Almas</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Protector místico, guía nocturno y balanza de la verdad.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Anubis Sky</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Freya</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Nórdico</td>
              <td class="py-3 px-4 text-zinc-300">Diosa del Amor, Magia y Combate</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Señora de las Valkirias, belleza resplandeciente y poder.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Freya Astrid</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Apolo / Apollo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Griego / Romano</td>
              <td class="py-3 px-4 text-zinc-300">Dios del Sol, Música y Profecía</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Luz dorada radiante, verdad, sanación y armonía poética.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Apolo Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Odín</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Nórdico</td>
              <td class="py-3 px-4 text-zinc-300">Padre de Todos, Sabiduría y Runas</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Gran estratega, buscador del conocimiento y señor de Asgard.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Odín Gael</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Mitológicos</h3>
      <ol>
        <li><strong>Identifica el Significado de la Deidad:</strong> Asegúrate de conocer la historia y los atributos de la figura mitológica (ej. sabiduría con Atenea, fuerza protectora con Thor, soberanía celestial con Zeus).</li>
        <li><strong>Combina con Nombres Contemporáneos:</strong> Para bebés, equilibrar un nombre mitológico imponente (como Zeus o Apolo) con un segundo nombre tradicional (como Alexander o Mateo) genera una excelente sonoridad.</li>
        <li><strong>Para Videojuegos y Nicks:</strong> Agrega símbolos celestiales o rúnicos (ej. ⚡, ⚔️, 🏛️) para resaltar el aura mística en plataformas como Free Fire o Instagram.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres de dioses griegos, nórdicos, egipcios y romanos. Descubre significados mitológicos, panteones y audio de pronunciación.',
    keywords: 'nombres de dioses, nombres mitologicos, nombres de dioses griegos, nombres de dioses nordicos, nombres mitologicos para free fire, nombres de diosas, nombres mitologicos de bebes',
    defaultName: 'Zeus',
    customSymbols: ["🏛️", "⚡", "🔨", "👁️", "⚔️", "🛡️", "✦", "📜", "🔥", "👑"],
    faqs: [
      {
        question: "¿Por qué elegir nombres de dioses para nicks de Free Fire o videojuegos?",
        answer: "Porque transmiten inmediatamente un aura de imponencia, estrategia y poder épico ante los rivales. Al añadirle símbolos de trueno o espadas se vuelven extremadamente memorables."
      },
      {
        question: "¿Cuáles son algunos nombres mitológicos  para bebés?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. En niños destacan Zeus, Thor, Apolo, Odín, Ares, Hermes y Anubis. En niñas se incluyen Atenea, Freya, Selene, Artemisa, Isis y Valkiria."
      },
      {
        question: "¿Cómo combinar un nombre mitológico con un segundo nombre?",
        answer: "Se recomienda combinar la deidad con un término melódico de 2 a 3 sílabas (por ejemplo: Zeus Alexander, Atenea Sofía, Thor Gael, Freya Astrid)."
      },
      {
        question: "¿Puedo escuchar cómo se pronuncia cada nombre mitológico?",
        answer: "Usa el altavoz junto a un nombre de la selección para solicitar una lectura sintetizada en español. Depende de las voces del dispositivo y no reproduce necesariamente la pronunciación de la lengua de origen."
      }
    ]
  },
  'nombres-italianos': {
    id: 'nombres-italianos',
    path: '/nombres-italianos',
    title: 'Nombres Italianos Hombre y Mujer Elegantes | GDN',
    h1: 'Generador de Nombres Italianos: Elegantes, Clásicos y Modernos',
    subtitle: 'Descubre los nombres de origen italiano más melódicos, aristocráticos y populares para niña, niño, mascotas y perfiles aesthetic. Incluye significados profundos, etimología latina y audio de pronunciación.',
    seoText: `
      <h2>Los Mejores Nombres Italianos Elegantes, Clásicos y su Significado Profundo (2026)</h2>
      <p>El italiano es reconocido universalmente como la lengua del arte, la ópera, la alta costura y el romance mediterráneo. Los <strong>nombres italianos</strong> se caracterizan por sus finales vocálicos armónicos, su sonoridad lírica inconfundible y su rica herencia etimológica latina y renacentista. Son ideales tanto para nombrar a un bebé como para bautizar a personajes de literatura, mascotas o crear nicknames aesthetic para Instagram, TikTok y videojuegos.</p>

      <h3>Categorías Principales de Nombres Italianos</h3>
      <p>Explora nuestra selección de nombres de origen italiano agrupados por género, origen y resonancia cultural:</p>
      <ul>
        <li><strong>Nombres Italianos para Niñas (Femeninos y Sofisticados):</strong> <em>Gianna, Chiara, Francesca, Isabella, Alessia, Beatrice, Valentina, Sofia, Guia, Milena, Carlotta, Gia</em> y <em>Flavia</em>. Destacan por su elegancia poética, dulzura y nobleza.</li>
        <li><strong>Nombres Italianos para Niños (Masculinos y Clásicos):</strong> <em>Matteo, Leonardo, Lorenzo, Alessandro, Enzo, Giovanni, Marco, Luca, Santino, Stefano, Vincenzo, Rocco</em> y <em>Flavio</em>. Reflejan fuerza mediterránea, sabiduría y estirpe.</li>
        <li><strong>Nombres Cortos Italianos e Internacionales:</strong> <em>Enzo, Luca, Aldo, Vito, Nino, Mia, Gia, Cleo, Pia</em> y <em>Leo</em>. Son opciones breves; la facilidad de pronunciación depende del idioma y de la combinación elegida.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Italiano, Origen, Significado y Combinaciones</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre Italiano</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Origen Etimológico</th>
              <th class="py-3.5 px-4 font-bold">Significado y estado de revisión</th>
              <th class="py-3.5 px-4 font-bold">Combinación Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Matteo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Matteo Alexander</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chiara</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Chiara Valentina</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Leonardo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Leonardo Gael</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Gianna</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Gianna Sofía</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Lorenzo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Lorenzo Mateo</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Francesca</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Francesca Rose</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Enzo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 text-zinc-300">Pendiente de verificación</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pendiente de verificación: no se afirma una traducción ni una etimología.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">Enzo Thiago</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para Elegir Nombres Italianos</h3>
      <ol>
        <li><strong>Aprovecha la Fluidez Vocálica:</strong> La mayoría de nombres italianos terminan en vocal (a, o, e, i), lo que facilita combinarlos con un segundo nombre tradicional o internacional.</li>
        <li><strong>Equilibra la Sonoridad de las Dobles Consonantes:</strong> Nombres con 'tt' (Matteo), 'zz' (Azzurra) o 'll' (Isabella) aportan un ritmo melódico atemporal que resalta en cualquier registro.</li>
        <li><strong>Prueba la Pronunciación en Voz Sintetizada:</strong> Escucha el ritmo y la entonación con nuestro reproductor de voz interactivo en la parte superior.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres italianos para niña, niño y bebés. Descubre significados profundos, etimología latina y audio de pronunciación.',
    keywords: 'nombres italianos hombre, nombres italianos, nombres italianos para niños, nombres italianos de mujer, nombres italianos de niña, nombres italianos elegantes, nombres italianos con significado, nombres italianos para bebe',
    defaultName: 'Matteo',
    customSymbols: ["🇮🇹", "🍷", "🍕", "🎨", "🏛️", "⚜️", "🎭", "☀️", "👑", "✨", "🌹", "💎", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Por qué los nombres italianos son tan populares y elegantes?",
        answer: "Elegante es una valoración de estilo, no una categoría estadística. Puedes comparar la escritura, el ritmo y las terminaciones de esta selección italiana con tus apellidos; no afirmamos su popularidad global."
      },
      {
        question: "¿Cuáles son algunos nombres italianos  para niña y niño?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Para niña destacan Gianna, Chiara, Francesca, Isabella, Alessia, Beatrice, Sofia y Valentina. Puedes comparar Matteo, Leonardo, Lorenzo, Alessandro, Enzo, Giovanni, Marco, Luca y Santino."
      },
      {
        question: "¿Cómo funciona la fonética de las dobles consonantes en nombres italianos?",
        answer: "Las guías fonéticas son orientativas y no sustituyen una referencia de pronunciación. Comprueba la escritura: Enzo no contiene zz. La voz sintetizada puede variar según el dispositivo."
      },
      {
        question: "¿Puedo escuchar la pronunciación en audio de cada nombre italiano?",
        answer: "Usa el altavoz junto a una idea de la selección para solicitar una lectura sintetizada en italiano. Depende de que tu dispositivo tenga una voz compatible; no es una verificación lingüística."
      }
    ]
  },
  'nombres-rusos': {
    id: 'nombres-rusos',
    path: '/nombres-rusos',
    title: 'Nombres Rusos para Niña y Niño con Significado | GDN',
    h1: 'Nombres Rusos (Fuertes y Místicos)',
    subtitle: 'Selección de nombres rusos en romanización para comparar formas, recordando que la escritura cirílica y la transliteración pueden variar.',
    seoText: `
      <h2>Nombres Rusos: Romanización, Cirílico y Variantes</h2>
      <p>Esta página permite explorar nombres rusos en una forma romanizada, como Aleksandr, Anastasiya, Dmitriy, Irina o Mikhail. La romanización facilita la búsqueda en español, pero no sustituye la escritura original en cirílico ni garantiza que exista una única transliteración aceptada para cada nombre.</p>

      <h3>Por qué un mismo nombre puede verse escrito de varias maneras</h3>
      <p>Los sistemas de transliteración convierten letras cirílicas a alfabeto latino siguiendo criterios distintos. Por eso puedes encontrar variantes de una misma forma en documentos, medios o traducciones. Antes de atribuir un significado, una pronunciación o una grafía “oficial”, confirma el nombre original y la fuente que estás usando.</p>

      <h3>Cómo usar la selección</h3>
      <ul>
        <li><strong>Busca por texto:</strong> localiza rápidamente las formas romanizadas disponibles.</li>
        <li><strong>Compara longitud:</strong> útil si quieres combinar el nombre con apellidos o un segundo nombre.</li>
        <li><strong>Investiga la forma original:</strong> si el nombre se usará fuera de un ejercicio creativo, comprueba su escritura cirílica.</li>
      </ul>
      <p>La lista no es un ranking de popularidad en Rusia y tampoco convierte automáticamente diminutivos o formas familiares en equivalencias exactas. Para comparar otras tradiciones europeas puedes consultar <a href="/nombres-franceses">nombres franceses</a> o <a href="/nombres-italianos">nombres italianos</a>.</p>
    `,
    metaDescription: 'Explora nombres rusos en romanización y aprende por qué la escritura cirílica y las transliteraciones pueden variar. Selección editorial para comparar opciones.',
    keywords: 'nombres rusos, nombres rusos para niña, nombres rusos masculinos',
    defaultName: 'Sasha',
    customSymbols: ["🪆", "❄️", "🏰", "✨"],
    faqs: [
      {
        question: "¿Por qué un nombre ruso puede aparecer escrito de varias maneras?",
        answer: "Porque existen distintos sistemas de transliteración del alfabeto cirílico al latino y no todos producen exactamente la misma grafía."
      },
      {
        question: "¿La página muestra la escritura cirílica oficial de cada nombre?",
        answer: "No. La herramienta se centra en una selección romanizada; confirma la forma cirílica en una fuente adecuada si la necesitas."
      },
      {
        question: "¿Los diminutivos rusos son siempre equivalentes directos del nombre completo?",
        answer: "No conviene asumirlo automáticamente. El uso de formas familiares depende del nombre, del idioma y del contexto."
      }
    ]
  },
  'nombres-griegos': {
    id: 'nombres-griegos',
    path: '/nombres-griegos',
    title: 'Nombres Griegos Clásicos y Mitológicos | GDN',
    h1: 'Nombres Griegos (Clásicos y Mitológicos)',
    subtitle: 'Selección de nombres griegos en alfabeto latino, separando nombres personales actuales de referencias mitológicas.',
    seoText: `
      <h2>Nombres Griegos: Uso Personal, Transliteración y Mitología</h2>
      <p>Esta selección reúne nombres griegos escritos con alfabeto latino para que puedas comparar su forma y longitud. Algunos nombres tienen una larga historia y aparecen en distintas lenguas europeas, de modo que una grafía internacional no siempre coincide exactamente con la forma griega original.</p>

      <h3>Nombres personales y nombres de dioses no son la misma búsqueda</h3>
      <p>Si buscas un nombre para una persona, conviene separar ese objetivo de la mitología. Alexander, Eleni, Georgios o Katerina pueden explorarse como nombres personales; Zeus, Atenea o Apolo pertenecen a otro contexto cultural. Para esa segunda intención existe nuestra guía específica de <a href="/nombres-de-dioses">nombres de dioses y deidades</a>.</p>

      <h3>Cómo comparar las propuestas</h3>
      <ul>
        <li><strong>Escritura:</strong> revisa si prefieres una forma internacional o una transliteración más cercana al griego.</li>
        <li><strong>Longitud:</strong> filtra nombres cortos y largos antes de combinarlos con apellidos.</li>
        <li><strong>Significado:</strong> no confundas los atributos de una figura histórica o mitológica con la etimología lingüística del nombre.</li>
      </ul>
      <p>La herramienta no presenta estadísticas de popularidad en Grecia ni certifica una transliteración oficial. Su función es ayudarte a comparar una selección y detectar qué opciones merecen una investigación más profunda.</p>
    `,
    metaDescription: 'Explora nombres griegos clásicos y actuales en alfabeto latino. Compara escritura y longitud y separa nombres personales de referencias mitológicas.',
    keywords: 'nombres griegos, nombres griegos de mujer, nombres griegos masculinos',
    defaultName: 'Alexander',
    customSymbols: ["🏛️", "🌿", "📜", "⚡"],
    faqs: [
      {
        question: "¿Todos los nombres griegos de esta página son mitológicos?",
        answer: "No. La selección incluye nombres personales; las figuras mitológicas se tratan por separado para no mezclar ambas intenciones."
      },
      {
        question: "¿La escritura en alfabeto latino es la única forma correcta?",
        answer: "No necesariamente. Puede haber distintas transliteraciones de un nombre originalmente escrito en griego."
      },
      {
        question: "¿La lista muestra cuáles son los nombres más populares en Grecia?",
        answer: "No. Es una selección editorial y no un ranking basado en registros de nacimientos."
      }
    ]
  },
  'nombres-ingles': {
    id: 'nombres-ingles',
    path: '/nombres-ingles',
    title: 'Nombres en Inglés para Niños y Niñas | GDN',
    h1: 'Nombres en Inglés (Modernos e Internacionales)',
    subtitle: "Selección editorial de nombres usados en contextos anglófonos para comparar escritura, longitud y sonoridad.",
    seoText: `
      <h2>Nombres en Inglés para Comparar por Escritura y Sonoridad</h2>
      <p>Esta página reúne una selección editorial de nombres usados en contextos anglófonos, como Oliver, Liam, Emma, Charlotte, Noah y Harper. No es un ranking de popularidad de Estados Unidos, Reino Unido, Canadá o Australia: la frecuencia de un nombre cambia por país, año y fuente estadística.</p>

      <h3>Cómo usar la lista sin confundir idioma con popularidad</h3>
      <p>Empieza comparando la forma escrita y la longitud. Un nombre puede resultar familiar en inglés y, al mismo tiempo, tener historia en otros idiomas. Por eso evitamos presentar cada propuesta como “exclusivamente inglesa” cuando no hay una fuente específica que lo demuestre.</p>
      <ul>
        <li><strong>Para nombres cortos:</strong> filtra por longitud y comprueba cómo se combina con los apellidos.</li>
        <li><strong>Para pronunciación:</strong> usa la lectura sintetizada solo como referencia si tu dispositivo dispone de una voz en inglés.</li>
        <li><strong>Para niñas o niños:</strong> compara también nuestras páginas de <a href="/nombres-de-nina">nombres de niña</a> y <a href="/nombres-de-nino">nombres de niño</a>.</li>
      </ul>

      <h3>Qué verifica esta página y qué no</h3>
      <p>La herramienta sirve para explorar y copiar nombres de la selección. No consulta registros civiles, estadísticas de nacimientos ni disponibilidad en redes sociales. Si necesitas confirmar el origen histórico o la popularidad de un nombre concreto, conviene revisar una fuente lingüística o estadística del país que te interese.</p>
    `,
    metaDescription: 'Explora nombres en inglés para niños y niñas por escritura y longitud. Selección editorial con lectura sintetizada cuando el dispositivo dispone de voz en inglés.',
    keywords: 'nombres en ingles, nombres para niños en ingles, nombres de niña en ingles',
    defaultName: 'Oliver',
    customSymbols: ["🇺🇸", "🇬🇧", "✨", "⭐"],
    faqs: [
      {
        question: "¿Estos nombres son los más populares en países de habla inglesa?",
        answer: "No. La página ofrece una selección editorial para comparar opciones; no presenta un ranking de nacimientos ni estadísticas de un país concreto."
      },
      {
        question: "¿La pronunciación de los nombres en inglés es una grabación nativa?",
        answer: "No. Cuando está disponible, la herramienta usa una voz sintetizada del dispositivo como referencia de lectura."
      },
      {
        question: "¿Un nombre usado en inglés tiene necesariamente origen inglés?",
        answer: "No. Muchos nombres circulan entre varios idiomas y culturas. Para afirmar un origen concreto hace falta revisar la historia y la fuente del nombre."
      }
    ]
  },
  'nombres-turcos': {
    id: 'nombres-turcos',
    path: '/nombres-turcos',
    title: 'Nombres Turcos para Niña y Series de TV | GDN',
    h1: 'Nombres Turcos (Inspirados en Series y Novelas)',
    subtitle: 'Selección de nombres turcos para comparar escritura y sonoridad sin convertir apariciones en series en rankings de popularidad.',
    seoText: `
      <h2>Nombres Turcos para Comparar por Escritura y Sonoridad</h2>
      <p>Nombres como Elif, Eda, Kerem, Defne, Can o Zehra resultan familiares para muchas personas por la cultura popular y las series turcas, pero aparecer en una producción no demuestra que un nombre sea de los más usados en Turquía. Esta página funciona como selección editorial, no como ranking estadístico.</p>

      <h3>Conserva las letras propias del turco</h3>
      <p>El alfabeto turco incluye letras como ç, ğ, ı, İ, ö, ş y ü. Cuando investigues una forma concreta, conserva su ortografía original en lugar de reemplazar automáticamente esos caracteres por versiones españolas o inglesas. La escritura correcta también puede influir en la pronunciación.</p>

      <h3>Cómo elegir una propuesta</h3>
      <ul>
        <li><strong>Compara la longitud</strong> del nombre con tus apellidos o con un segundo nombre.</li>
        <li><strong>Escucha la lectura sintetizada</strong> solo como referencia si tu dispositivo dispone de una voz adecuada.</li>
        <li><strong>Verifica origen y significado</strong> antes de presentar una interpretación como un hecho lingüístico.</li>
      </ul>
      <p>Si tu interés surgió por una novela o serie, usa ese contexto como inspiración y después investiga el nombre de forma independiente. También puedes comparar estilos mediterráneos en <a href="/nombres-italianos">nombres italianos</a> o <a href="/nombres-franceses">nombres franceses</a>.</p>
    `,
    metaDescription: 'Explora nombres turcos para niña y niño por escritura y longitud. Selección editorial con notas sobre ortografía turca, pronunciación y verificación de significados.',
    keywords: 'nombres turcos para niña, nombres turcos, nombres de novelas turcas',
    defaultName: 'Elif',
    customSymbols: ["🇹🇷", "🌙", "✨", "🌸"],
    faqs: [
      {
        question: "¿Los nombres de esta lista son los más populares de las series turcas?",
        answer: "No. Las series pueden servir como inspiración, pero la página no usa apariciones televisivas como medida de popularidad."
      },
      {
        question: "¿Debo conservar letras como ı, ş, ç u ö?",
        answer: "Sí cuando formen parte de la ortografía original del nombre. Sustituirlas puede cambiar la escritura y la lectura."
      },
      {
        question: "¿La lectura de audio confirma la pronunciación exacta en turco?",
        answer: "No. Es una lectura sintetizada dependiente de la voz instalada en el dispositivo y debe tomarse como referencia."
      }
    ]
  },
  'nombres-chinos': {
    id: 'nombres-chinos',
    path: '/nombres-chinos',
    title: 'Nombres Chinos para Niña y Niño con Caracteres | GDN',
    h1: 'Nombres Chinos (Pinyin, Hanzi y Significado)',
    subtitle: 'Selección romanizada para comparar nombres chinos sin inventar caracteres Hanzi ni significados que dependan de una escritura no especificada.',
    seoText: `
      <h2>Nombres Chinos: Romanización, Hanzi y Significado</h2>
      <p>En los nombres chinos, una forma romanizada como Li, Wei, Lin o Mei no basta por sí sola para fijar una escritura ni un significado. Una misma sílaba puede corresponder a caracteres Hanzi distintos y, por tanto, a sentidos diferentes. Por eso esta página usa la romanización como punto de exploración y evita asignar un Hanzi o una etimología cuando no están verificados.</p>

      <h3>Cómo interpretar Pinyin y Hanzi con cuidado</h3>
      <p>El pinyin representa la pronunciación del mandarín mediante alfabeto latino, mientras que el significado concreto depende de los caracteres elegidos. Si quieres usar un nombre en un contexto real, confirma la escritura completa con una fuente fiable o con una persona que conozca el idioma; no conviertas automáticamente una forma romanizada en un carácter “equivalente”.</p>
      <ul>
        <li><strong>Romanización:</strong> útil para buscar, comparar y copiar una forma latina.</li>
        <li><strong>Hanzi:</strong> necesario para verificar la escritura y el significado concreto.</li>
        <li><strong>Tonos y lectura:</strong> una voz sintetizada puede ayudar a escuchar una aproximación, pero no sustituye una revisión lingüística.</li>
      </ul>

      <h3>Cómo usar esta selección</h3>
      <p>Filtra por texto o longitud y guarda las opciones que quieras investigar después. Si buscas otras tradiciones de Asia oriental, puedes comparar también <a href="/nombres-japoneses">nombres japoneses</a> y <a href="/nombres-coreanos">nombres coreanos</a>, donde la escritura y la romanización siguen reglas diferentes.</p>
    `,
    metaDescription: 'Explora nombres chinos en forma romanizada y aprende por qué el Hanzi concreto es necesario para verificar significado y lectura. Selección editorial para comparar opciones.',
    keywords: 'nombres chinos para niña, nombres chinos, nombres chinos masculinos',
    defaultName: 'Mei',
    customSymbols: ["🇨🇳", "🏮", "🌸", "🐉", "☯️"],
    faqs: [
      {
        question: "¿Puedo saber el significado de un nombre chino solo con el pinyin?",
        answer: "No siempre. Una misma sílaba romanizada puede corresponder a distintos caracteres Hanzi; el significado depende de la escritura concreta."
      },
      {
        question: "¿La página asigna caracteres Hanzi automáticamente?",
        answer: "No. Evitamos inventar una escritura. La selección sirve para explorar formas romanizadas y después verificar los caracteres adecuados en una fuente fiable."
      },
      {
        question: "¿La lectura de audio sustituye la pronunciación de una persona nativa?",
        answer: "No. La lectura sintetizada del dispositivo es solo una referencia y puede variar según la voz instalada."
      }
    ]
  },
  'nombres-perros-machos': {
    id: 'nombres-perros-machos',
    path: '/nombres-perros-machos',
    title: 'Nombres de Perros Machos - Cortos y Fuertes | GDN',
    h1: 'Generador de Nombres para Perros Machos: Cortos, Épicos y Fuertes',
    subtitle: 'Descubre los mejores nombres para perros machos, perritos y cachorros. Incluye significados por personalidad y tamaño, tabla comparativa, audio de llamado interactivo y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres para Perros Machos y Cachorros (2026)</h2>
      <p>Elegir el nombre ideal para un perro macho es uno de los primeros pasos para consolidar una relación de lealtad, liderazgo y cariño indiscutible. Ya sea un imponente Pastor Alemán, un activo Golden Retriever, un protector Pitbull o un cariñoso mestizo, seleccionar un nombre sonoro y fácil de comprender facilitará su adiestramiento y comunicación cotidiana. Para el uso cotidiano, muchas personas prefieren nombres cortos y fáciles de repetir, como <em>Max, Thor, Rocky, Toby, Bruno, Zeus, Coco, Duke, Milo, Leo</em> o <em>Ares</em>.</p>

      <h3>Categorías Principales de Nombres para Perros Machos</h3>
      <p>Explora ideas organizadas según el temperamento, porte y tamaño de tu compañero:</p>
      <ul>
        <li><strong>Perros Imponentes, Fuertes y Protectores (Épicos y Dioses):</strong> Nombres con gran autoridad como <em>Thor, Zeus, Rocky, Titan, Ares, Hércules, Balam, Kaiser, Rex, Odín, Apolo</em> y <em>Goliath</em>.</li>
        <li><strong>Perros Cariñosos, Tiernos y Pequeños (Gourmet y Dulces):</strong> Nombres amigables como <em>Toby, Bruno, Coco, Milo, Mochi, Brownie, Copito, Teddy, Cookie, Tofu, Nacho</em> y <em>Taco</em>.</li>
        <li><strong>Perros Elegantes, Nobles y Clásicos (Aristocráticos):</strong> Nombres distinguidos como <em>Duke, Oliver, Romeo, Gatsby, Chester, Jasper, Dante, Barnaby, Winston</em> y <em>Barón</em>.</li>
        <li><strong>Perros Dinámicos, Juguetones y de Caza:</strong> Nombres llenos de energía como <em>Bandido, Lucky, Simba, Rayo, Tracker, Spike, Pixel, Ziggy, Charly</em> y <em>Hunter</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre para Perro Macho, Estilo / Tamaño, Significado y Placa Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Perro Macho</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Tamaño</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Max</td>
              <td class="py-3 px-4 text-zinc-300">Popular / Grande</td>
              <td class="py-3 px-4 font-medium text-zinc-100">El más grande, líder supremo, leal y de noble protección.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Max 🐾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Thor</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Épico / Fuerte</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Dios del trueno, valiente, protector fiero y enérgico.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚡ Thor 🔨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Rocky</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Guerrero / Ágil</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Roca firme, perseverante, atlético e indomable.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🏆 Rocky 🥊</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Milo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Tierno / Pequeño</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Amistoso, misericordioso, alegre y gran compañero.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐶 Milo 🦴</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Zeus</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Mitológico / Líder</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rey de reyes, majestuoso, de presencia imponente.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚡ Zeus 👑</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Bruno</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Clásico / Leal</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Escudo protector, de tez oscura o café, noble y afectuoso.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐾 Bruno 🤎</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Duke</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Elegante / Noble</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Duque noble, aristócrata, sereno y de gran distinción.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🎩 Duke ✨</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave de Adiestramiento Canino para Enseñar su Nombre</h3>
      <ol>
        <li><strong>Mantén la Constancia en la Pronunciación:</strong> Usa el reproductor de audio interactivo de nuestra herramienta arriba para comparar una lectura aproximada; no es una guía de entrenamiento.</li>
        <li><strong>Compara nombres fáciles de repetir:</strong> Elige una longitud cómoda y evita nombres que suenen parecidos a comandos de orden ("Toma", "No", "Ven", "Sienta").</li>
        <li><strong>Refuerza con Premios y Halagos:</strong> Premia a tu perro con un premio saludable o caricias en el pecho cada vez que acuda a tu llamado al escuchar su nombre.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres de perros machos y cachorros. Ideas cortas, fuertes y bonitas por tamaño con audio interactivo de llamado.',
    keywords: 'nombres de perros machos, nombres para perros machos, nombres para perros machos grandes, nombres para perros machos pequeños, nombres de perros machos originales, nombres para cachorros machos, nombres de perros machos fuertes',
    defaultName: 'Max',
    customSymbols: ["🐾", "🐶", "🦴", "👑", "⚡", "🏆", "🥊", "🥩", "🎾", "🎩", "⭐", "✨", "🤎", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cuál es la longitud ideal para el nombre de un perro macho?",
        answer: "Elige una longitud que puedas pronunciar con comodidad y usar de forma consistente. La selección no acredita que un nombre de dos sílabas mejore el aprendizaje del perro."
      },
      {
        question: "¿Cuáles son algunos nombres para perros machos ?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Max, Thor, Rocky, Toby, Bruno, Zeus, Milo, Duke, Simba, Oliver, Coco, Ares, Leo y Jack."
      },
      {
        question: "¿Cómo elegir un nombre según el tamaño y raza del perro?",
        answer: "Para razas grandes y fuertes (Pastor Alemán, Pitbull, Rottweiler) encajan nombres imponentes como Thor, Zeus, Titan, Rocky o Ares. Para razas pequeñas o medianas (French Poodle, Beagle, Pug) funcionan opciones como Toby, Milo, Mochi, Coco o Cookie."
      },
      {
        question: "¿Puedo grabar su placa de identificación o perfil social con el generador?",
        answer: "¡Sí! Utiliza el generador interactivo superior para añadir marcos y símbolos como coronas (👑), rayos (⚡), huesos (🦴) y huellitas (🐾) para mandar a hacer su placa física o crearle un perfil único en Instagram y TikTok."
      }
    ]
  },
  'perritas-chihuahua': {
    id: 'perritas-chihuahua',
    path: '/perritas-chihuahua',
    title: 'Nombres para Perritas Chihuahua Tiernas | GDN',
    h1: 'Generador de Nombres para Perritas Chihuahua: Tiernas, Diminutas y Originales',
    subtitle: 'Descubre los nombres más adorables, pequeños y con encanto para cachorritas de raza Chihuahua (cabeza de manzana o de ciervo). Incluye guía por tamaño, personalidad, audio de llamado interactivo y creador de placas.',
    seoText: `
      <h2>Los Mejores Nombres para Perritas Chihuahua, Cachorras y Tacita de Té (2026)</h2>
      <p>Las perritas Chihuahua son conocidas en todo el mundo por su diminuto tamaño, sus expresivos ojos brillantes, sus grandes orejitas erguidas y una personalidad gigante repletas de valentía, lealtad y ternura indiscutible. Ya sea una chihuahua con cabeza de manzana, cabeza de ciervo, de pelo corto o de pelo largo (tipo "Toy" o "Teacup"), elegir un nombre dulce y fácil de recordar reforzará su entrenamiento y aprendizaje diario.</p>

      <h3>Categorías Principales de Nombres para Chihuahuas</h3>
      <p>Encuentra la opción que mejor combine con las características únicas de tu cachorrita:</p>
      <ul>
        <li><strong>Nombres Diminutos y Tiernos (Especial Tacita de Té / Teacup):</strong> <em>Chispita, Chiquita, Mimi, Perlita, Pipa, Mochi, Bambi, Copito, Porotita, Botón, Galletita</em> y <em>Lulu</em>.</li>
        <li><strong>Nombres Mexicanos y Tradicionales con Carácter:</strong> <em>Frida, Canela, Lola, Lupe, Chilindrina, Maya, Paloma, Sol, Guayaba, Nieve</em> y <em>Tequila</em>.</li>
        <li><strong>Nombres Coquetos y Elegantes (Princesas de Hogar):</strong> <em>Bella, Chloe, Princesa, Daisy, Molly, Chanel, Paris, Sofía, Cleo, Luna, Valentina</em> y <em>Fifi</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre para Chihuahua, Variedad, Significado y Placa Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Chihuahua</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Variedad</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Placa / Apodo Recomendado</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chispita</td>
              <td class="py-3 px-4 text-zinc-300">Diminuta / Activa</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rayo de luz diminuto, llena de energía, chispa y viva alegría.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🎀 Chispita ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Chiquita</td>
              <td class="py-3 px-4 text-zinc-300">Tipo Teacup / Tierna</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Pequeñita de enorme corazón, la consentida y mimada del hogar.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🐾 Chiquita 💖</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Mimi</td>
              <td class="py-3 px-4 text-zinc-300">Cabeza de Manzana</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Princesa suave, dulce amor, tierno afecto e inseparable.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Mimi 🌸</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Perlita</td>
              <td class="py-3 px-4 text-zinc-300">Pelo Corto / Claro</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Joya diminuta del océano, pureza, brillo y radiante elegancia.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">💎 Perlita ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Canela</td>
              <td class="py-3 px-4 text-zinc-300">Pelaje Café / Golondrino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Aroma cálido, dulzura especiada, mirada tierna y cariñosa.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🍪 Canela 🐾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Frida</td>
              <td class="py-3 px-4 text-zinc-300">Cabeza de Ciervo / Valiente</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Princesa de la paz, espíritu valiente, artístico y noble.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🎨 Frida 👑</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Bella</td>
              <td class="py-3 px-4 text-zinc-300">Coqueta / Pelo Largo</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Hermosa, de encanto deslumbrante, ojos expresivos y gracia.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🎀 Bella 💗</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Lola</td>
              <td class="py-3 px-4 text-zinc-300">Extrovertida / Audaz</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Alegre, firme carácter, llena de dinamismo y siempre alerta.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">💕 Lola 🦴</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Prácticos para Elegir y Usar el Nombre de tu Chihuahua</h3>
      <ol>
        <li><strong>Nombre corto y práctico:</strong> Las opciones de una o dos palabras, como <em>Chispita, Mimi, Lola, Frida</em> o <em>Chloe</em>, suelen ser cómodas para repetir durante el día.</li>
        <li><strong>Tono de Voz Estimulante:</strong> Utiliza nuestro simulador de audio interactivo arriba para escuchar la articulación limpia en un tono agudo, alegre y amigable.</li>
        <li><strong>Refuerzo Positivo Constante:</strong> Premia inmediatamente cada respuesta positiva con una pequeña croqueta o una caricia bajo su barbilla para afianzar el llamado.</li>
      </ol>
    `,
    metaDescription: 'Lista de nombres para perritas chihuahua. Ideas tiernas, diminutas, coquetas, mexicanas, con audio interactivo y creador de placas.',
    keywords: 'nombres para perritas chihuahua, nombres de perros chihuahua, nombres para chihuahuas hembras, nombres de chihuahuas pequeñas, nombres para chihuahuas cabeza de manzana, nombres tiernos para chihuahuas',
    defaultName: 'Chispita',
    customSymbols: ["🐾", "🐶", "🎀", "💖", "✨", "👑", "🌸", "💎", "🦴", "💗", "🍪", "🌺", "💕", "🌶️", "🌮", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cómo elegir la longitud del nombre de una perrita chihuahua?",
        answer: "Los nombres de dos sílabas son una opción práctica porque suelen ser fáciles de pronunciar y repetir. No es una regla estricta: elige uno que tu familia pueda usar de forma consistente."
      },
      {
        question: "¿Cuáles son algunos nombres  para perritas chihuahua?",
        answer: "Esta es una selección editorial, no un ranking de popularidad. Puedes comparar Chispita, Chiquita, Mimi, Perlita, Canela, Frida, Bella, Lola, Chloe, Daisy, Pipa, Mochi y Princesa."
      },
      {
        question: "¿Qué diferencia hay entre nombres para chihuahuas Cabeza de Manzana y Cabeza de Ciervo?",
        answer: "Para las chihuahuas Cabeza de Manzana (rostro más redondeado y tierno) se suelen buscar nombres dulces como Mimi, Mochi o Chiquita. Para las Cabeza de Ciervo (facciones alargadas y vivaces) lucen muy bien nombres con personalidad como Frida, Maya, Cleo o Lola."
      },
      {
        question: "¿Puedo personalizar una placa diminuta o perfil social para mi chihuahua?",
        answer: "¡Claro que sí! Con nuestro creador interactivo superior puedes agregar coronitas (👑), moños (🎀), gemas (💎), chiles (🌶️) y flores (🌸) para mandar a grabar su placa miniatura o diseñar su biografía de Instagram o TikTok."
      }
    ]
  },

  'nombres-caballos': {
    id: 'nombres-caballos',
    path: '/nombres-caballos',
    title: 'Nombres para Caballos y Yeguas Elegantes | GDN',
    h1: 'Generador de Nombres para Caballos y Yeguas: Imponentes y Elegantes',
    subtitle: 'Descubre los nombres más majestuosos, fuertes y con señorío para caballos de paso, carreras, ranchos y yeguas de fina estampa. Incluye significados por raza, pelaje, audio de relincho e identificador de hierro.',
    seoText: `
      <h2>Los Mejores Nombres para Caballos, Yeguas y Potrillos (2026)</h2>
      <p>El caballo es un animal noble, imponente y lleno de elegancia que ha acompañado a la humanidad en ranchos, haciendas, campos y competiciones ecuestres a lo largo de la historia. Elegir el nombre perfecto para un caballo de paso, un percherón de gran fuerza, un ágil equino de carreras o una yegua pura sangre es un ritual de señorío que refleja el temple, el pelaje (azabache, tordillo, alazán, bayo, tordo) y la lealtad del ejemplar.</p>

      <h3>Categorías Principales de Nombres para Caballos y Yeguas</h3>
      <p>Encuentra el nombre con mayor porte y presencia para tu ejemplar ecuestre:</p>
      <ul>
        <li><strong>Caballos Fuertes e Imponentes (Guerra, Mitología y Fuerza):</strong> <em>Tornado, Sultán, Rayo, Pegaso, Hércules, Apolo, Relámpago, Titán, Zeus, Káiser, Espartaco, Campeón, Cazador</em> y <em>Huracán</em>.</li>
        <li><strong>Yeguas Elegantes y Majestuosas (Nobles y Finas):</strong> <em>Gitana, Valkiria, Furia, Esmeralda, Atenea, Reina, Zafiro, Bella, Luna, Estrella, Duquesa, Paloma, Sol</em> y <em>Camelia</em>.</li>
        <li><strong>Nombres por Color de Pelaje (Azabache, Alazán, Tordillo y Bayo):</strong> <em>Azabache, Sombra, Carbón, Canela, Ámbar, Nieve, Centella, Bronce, Chocolate, Marfil</em> y <em>Dorado</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Equino, Tipo / Pelaje, Género, Significado y Marca Recomendada</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Caballo</th>
              <th class="py-3.5 px-4 font-bold">Estilo / Pelaje</th>
              <th class="py-3.5 px-4 font-bold">Género</th>
              <th class="py-3.5 px-4 font-bold">Inspiración creativa (no etimología)</th>
              <th class="py-3.5 px-4 font-bold">Hierro / Placa Recomendada</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Tornado</td>
              <td class="py-3 px-4 text-zinc-300">Azabache / Impetuoso</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Fuerza indomable del viento, velocidad imponente y furia libre.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚡ Tornado 🐎</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Rayo</td>
              <td class="py-3 px-4 text-zinc-300">Carreras / Veloz</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Centella fugaz, energía explosiva, rapidez indómita en pista.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">⚡ Rayo 🏆</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Sultán</td>
              <td class="py-3 px-4 text-zinc-300">Charrería / Pura Sangre</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Gobernante supremo, señorío, altivez, presencia de rey e hidalguía.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">👑 Sultán 🌾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Gitana</td>
              <td class="py-3 px-4 text-zinc-300">Paso Fino / Libre</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Espíritu libre y rebelde, belleza silvestre, garbo y porte único.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌹 Gitana 🐎</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Pegaso</td>
              <td class="py-3 px-4 text-zinc-300">Tordillo / Mitológico</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Masculino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Corcel alado divino, vuelo majestuoso, elevación y libertad pura.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🪽 Pegaso ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Valkiria</td>
              <td class="py-3 px-4 text-zinc-300">Percherona / Guerrera</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Guerrera nórdica celestial, temple de acero, elegancia y fuerza.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🛡️ Valkiria 🌟</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Azabache</td>
              <td class="py-3 px-4 text-zinc-300">Negro Profundo</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Brillo de mineral negro, elegancia nocturna, porte noble y leal.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🖤 Azabache 🌾</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Centella</td>
              <td class="py-3 px-4 text-zinc-300">Alazán / Ágil</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Femenino / Unisex</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Destello de fuego, velocidad relampagueante y espíritu vivo.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🔥 Centella ⚡</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave para la Elección y Silbido de Llamado Equino</h3>
      <ol>
        <li><strong>Compara la sonoridad:</strong> Elige una opción que puedas repetir con comodidad. No atribuimos una respuesta del caballo a un número de sílabas.</li>
        <li><strong>Uso consistente:</strong> Acuerda la misma escritura y pronunciación con las personas que cuidan del caballo.</li>
        <li><strong>Acupuntura y Tono del Llamado:</strong> Utiliza nuestro reproductor interactivo superior para ensayar la acústica del llamado o relincho simulado.</li>
      </ol>
    `,
    metaDescription: 'Lista completa de nombres para caballos, yeguas y potrillos. Ideas imponentes, elegantes, por pelaje con audio interactivo de relincho.',
    keywords: 'nombres de caballos, nombres para caballos, nombres para yeguas, nombres de caballos machos, nombres para caballos negros, nombres de yeguas bonitas, nombres para caballos de paso, nombres para potrillos',
    defaultName: 'Tornado',
    customSymbols: ["🐎", "🐴", "⚡", "🌾", "🏆", "👑", "🌟", "🎖️", "🥇", "🚩", "🛡️", "🌹", "🖤", "🔥", "✨", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cuáles son los nombres de caballos más famosos de la historia y la mitología?",
        answer: "Entre los nombres más legendarios destacan Bucefalos (caballo de Alejandro Magno), Rocinante (de Don Quijote), Babieca (del Cid Campeador), Tornado (de El Zorro), Pegaso (corcel alado mitológico) y Marengo (de Napoleón)."
      },
      {
        question: "¿Cuáles son los mejores nombres para caballos según el tono del pelaje?",
        answer: "Para pelajes azabache o negros resaltan Azabache, Sombra, Carbón, Noche u Onyx. Para pelajes alazán o rojizos lucen fuego como Rayo, Centella, Canela, Bronce o Candela. Para tordillos o blancos sobresalen Nieve, Marfil, Espuma, Perla o Nube."
      },
      {
        question: "¿Qué nombres transmiten mayor elegancia para yeguas?",
        answer: "Para yeguas de gran finura y paso elegante destacan nombres con porte noble como Gitana, Valkiria, Esmeralda, Atenea, Reina, Zafiro, Duquesa, Camelia, Bella y Estrella."
      },
      {
        question: "¿Puedo personalizar la marca de hierro o grabado de talabartería?",
        answer: "¡Así es! Con el generador interactivo superior puedes personalizar el nombre de tu equino con marcos decorativos e insignias de herraduras (🐎), espigas (🌾), coronas (👑) y trofeos (🏆) para grabar sus placas de establo, monturas o cabezadas."
      }
    ]
  },
  'nombres-para-tiendas': {
    id: 'nombres-para-tiendas',
    path: '/nombres-para-tiendas',
    title: 'Nombres para Tiendas y Negocios Pegajosos | GDN',
    h1: 'Generador de Nombres para Tiendas y Negocios: Pegajosos, Elegantes y E-commerce',
    subtitle: 'Encuentra el nombre comercial perfecto para tu tienda de ropa, boutique, abarrotes, bazar, regalos o negocio en línea. Incluye significados por rubro, consejos de branding y SEO, simulador de audio e identificador de letreros.',
    seoText: `
      <h2>Los Mejores Nombres para Tiendas, Negocios, Boutiques y Tiendas En Línea (2026)</h2>
      <p>Elegir un nombre comercial atractivo, fácil de recordar y relevante es el primer paso estratégico para fundar una marca exitosa. Un excelente nombre para tienda no solo cautiva a tus clientes desde el primer impacto visual en el letrero o red social (Instagram, TikTok, WhatsApp Business), sino que también facilita el posicionamiento SEO en Google, la recordación de marca y la compra repetida.</p>

      <h3>Categorías Principales de Nombres para Tiendas y Negocios</h3>
      <p>Explora ideas creativas adaptadas al sector específico de tu proyecto emprendedor:</p>
      <ul>
        <li><strong>Tiendas de Ropa, Moda y Boutiques Elegantes:</strong> Nombres sofisticados, modernos y chic como <em>Aura Moda, Velvet Boutique, Nova Chic, Kirei Studio, Bloom Room, Moda & Co., Lumina Style, Bella Donna, Urban Thread, Seta & Lino</em> y <em>Astra Boutique</em>.</li>
        <li><strong>Tiendas que Venden de Todo, Bazares y Abarrotes:</strong> Nombres confiables, familiares y cercanos como <em>Novedades La Esquina, El Emporio Central, Don Bocado, Mercadito Fiel, Punto Bazar, La Canasta Dorada, TodoÚtil, SuperBazar, Don Regalo</em> y <em>El Rincón Variado</em>.</li>
        <li><strong>Tiendas En Línea (E-commerce), Dropshipping y Regalos:</strong> Nombres cortos, pegajosos e internacionales ideales para dominio .com: <em>Klicka, BazarGo, Regaliz, ShopNova, TuEnvío, JoyaBox, MochiShop, NexoRegalos, UrbanCart</em> y <em>Zoe Market</em>.</li>
      </ul>

      <h3>Tabla Comparativa: Nombre Comercial, Nicho / Rubro, Estilo de Marca y Letrero Sugerido</h3>
      <div class="overflow-x-auto not-prose mb-8 mt-4">
        <table class="min-w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <thead>
            <tr class="bg-indigo-950/60 text-indigo-200 border-b border-white/10">
              <th class="py-3.5 px-4 font-bold">Nombre para Tienda</th>
              <th class="py-3.5 px-4 font-bold">Nicho / Rubro</th>
              <th class="py-3.5 px-4 font-bold">Estilo de Marca</th>
              <th class="py-3.5 px-4 font-bold">Concepto Comercial</th>
              <th class="py-3.5 px-4 font-bold">Letrero / Slogan Sugerido</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300 divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Aura Boutique</td>
              <td class="py-3 px-4 text-zinc-300">Moda & Calzado</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Minimalista / Chic</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Energía luminosa, elegancia atemporal, prendas exclusivas y tendencia.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">✨ AURA • Boutique 👗</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Bloom Room</td>
              <td class="py-3 px-4 text-zinc-300">Floristería / Accesorios</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Fresco / Botánico</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Espacio de flores, frescura, aromas naturales y detalles que enamoran.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🌿 Bloom Room 🌸</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">El Emporio Central</td>
              <td class="py-3 px-4 text-zinc-300">Abarrotes / Varios</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Tradicional / Robusto</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Comercio completo, calidad garantizada, surtido total y trato familiar.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🏪 El Emporio 🛒</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">KlickGo</td>
              <td class="py-3 px-4 text-zinc-300">E-commerce / Gadgets</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Moderno / Digital</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Rapidez en un clic, tecnología accesible, compras ágiles y envíos exprés.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">📦 KlickGo • Shop 📱</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Velvet & Co.</td>
              <td class="py-3 px-4 text-zinc-300">Joyas / Cosmética</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Lujo / Sofisticado</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Textura aterciopelada, belleza premium, detalles de alta distinción.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">💎 Velvet & Co. ✨</td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-3 px-4 font-bold text-indigo-400">Novedades La Esquina</td>
              <td class="py-3 px-4 text-zinc-300">Bazar / Regalos</td>
              <td class="py-3 px-4 font-mono text-zinc-400">Cercano / Popular</td>
              <td class="py-3 px-4 font-medium text-zinc-100">Punto de encuentro del barrio, sorpresas diarias y atención personalizada.</td>
              <td class="py-3 px-4 font-mono text-indigo-300">🛍️ La Esquina 🎁</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Consejos Clave de Naming y Branding para Elegir el Nombre de tu Negocio</h3>
      <ol>
        <li><strong>Facilidad de Pronunciación y Escritura:</strong> Evita combinaciones de consonantes complejas o guiones que dificulten la recomendación boca a boca.</li>
        <li><strong>Disponibilidad de Dominio y Redes Sociales:</strong> Verifica que el nombre esté libre en Instagram, TikTok y dominio .com o territorial (.es, .mx, .co).</li>
        <li><strong>Proyección y Escalabilidad Futura:</strong> Si planeas expandir tu catálogo, evita nombres demasiado restrictivos (prefiere <em>Lumina Studio</em> sobre <em>SoloVelasLumina</em>).</li>
        <li><strong>Diseño de Marquesinas y Perfil:</strong> Utiliza nuestro creador interactivo superior para personalizar el letrero de tu negocio con insignias de bolsas (🛍️), diamantes (💎), café (☕) o cajas (📦).</li>
      </ol>
    `,
    metaDescription: 'Nombres para tiendas que venden de todo y negocios. Ideas pegajosas, elegantes, para e-commerce y boutiques con letreros interactivos.',
    keywords: 'nombre para tienda que vende de todo, nombres para tiendas, nombres para negocios, nombres de tiendas, nombres para boutiques, nombres para tiendas en linea, nombres para bazares, nombres para tiendas de ropa',
    defaultName: 'Aura Boutique',
    customSymbols: ["🛍️", "🏪", "🛒", "🏷️", "💼", "✨", "💎", "👗", "🥐", "🎁", "☕", "📱", "📦", "🌟", "🌿", "💄", "🎀", "✦", "📜", "⚡"],
    faqs: [
      {
        question: "¿Cómo saber si el nombre de mi tienda o negocio es realmente pegajoso y recordable?",
        answer: "Aplica la regla de las 2 o 3 sílabas con ritmo o sonoridad fluida (ej. Bloom Room, KlickGo, Nova Chic). Si tus amigos y familiares lo recuerdan sin esfuerzo al día siguiente de escucharlo una sola vez, tienes una marca comercial ganadora."
      },
      {
        question: "¿Es recomendable usar mi propio nombre o apellido para la tienda?",
        answer: "Sí, incorporar tu nombre o apellido (ej. Valentina Moda, Bazar Don Carlos, García & Co.) aporta autenticidad, calidez, sello personal de autor y máxima confianza a los clientes locales y compradores en línea."
      },
      {
        question: "¿Qué nombres funcionan mejor para tiendas de ropa, boutiques o moda femenina?",
        answer: "Para tiendas de ropa y boutiques destacan nombres de estilo minimalista, chic e italiano o francés, tales como Aura Boutique, Velvet & Co., Nova Chic, Kirei Studio, Bloom Room, Lumina Style, Bella Donna y Seta & Lino."
      },
      {
        question: "¿Qué debo considerar al elegir el nombre para una tienda en línea o e-commerce?",
        answer: "Prioriza nombres cortos de fácil tecleo en celulares (ej. KlickGo, ShopNova, TuEnvío, NexoRegalos). Revisa previamente que el dominio .com o territorial esté disponible y que la cuenta de Instagram o TikTok no esté tomada."
      }
    ]
  },
};

export { navLinks, allLinks } from './allLinks';
