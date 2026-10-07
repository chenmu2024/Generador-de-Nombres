// Editorial inspiration, not verified etymologies, popularity rankings or training claims.
export interface PetNameIdea {
  name: string;
  note: string;
  symbol: string;
  category: string;
}
export type PetNameKind = 'cats' | 'dogs' | 'blackCats' | 'maleCats';
export const petNameLists: Record<PetNameKind, PetNameIdea[]> = {
  "cats": [
    {
      "name": "Mochi",
      "note": "Pastelito japonés dulce y suave. El nombre favorito para gatos tiernos.",
      "symbol": "🍡 Comida ",
      "category": "Graciosos / Comida 🍡"
    },
    {
      "name": "Simba",
      "note": "Idea editorial para la categoría «Machos ♂️». Escucha cómo suena Simba antes de elegirlo.",
      "symbol": "🦁 Rey León",
      "category": "Machos ♂️"
    },
    {
      "name": "Luna",
      "note": "Idea editorial para la categoría «Hembras ♀️». Escucha cómo suena Luna antes de elegirlo.",
      "symbol": "🌙 Noche",
      "category": "Hembras ♀️"
    },
    {
      "name": "Nacho",
      "note": "Divertido y cálido; encaja especialmente con la temática de gatos naranjas.",
      "symbol": "🍊 Naranjita",
      "category": "Gatos Naranjas 🍊"
    },
    {
      "name": "Oliver",
      "note": "Inspirado en Oliver y su Pandilla. Elegante, curioso y juguetón.",
      "symbol": "👑 Elegante",
      "category": "Elegantes / Reales 👑"
    },
    {
      "name": "Mimi",
      "note": "Nombre muy corto de dos sílabas, práctico para repetir al llamarlo.",
      "symbol": "⚡ Corto (i)",
      "category": "Cortos (2 Sílabas) ⚡"
    },
    {
      "name": "Garfield",
      "note": "Idea editorial para la categoría «Gatos Naranjas 🍊». Escucha cómo suena Garfield antes de elegirlo.",
      "symbol": "🍊 Famoso",
      "category": "Gatos Naranjas 🍊"
    },
    {
      "name": "Salem",
      "note": "Gato negro místico e inteligente con personalidad única.",
      "symbol": "🐈‍⬛ Místico",
      "category": "Machos ♂️"
    },
    {
      "name": "Kira",
      "note": "Idea editorial para la categoría «Hembras ♀️». Escucha cómo suena Kira antes de elegirlo.",
      "symbol": "✨ Brillo",
      "category": "Hembras ♀️"
    },
    {
      "name": "Sushi",
      "note": "Simpático y juguetón; una opción creativa para gatos ágiles y traviesos.",
      "symbol": "🍣 Divertido",
      "category": "Graciosos / Comida 🍡"
    },
    {
      "name": "Duque",
      "note": "Para gatos aristocráticos que caminan como reyes de la casa.",
      "symbol": "👑 Aristócrata",
      "category": "Elegantes / Reales 👑"
    },
    {
      "name": "Leo",
      "note": "Idea editorial para la categoría «Cortos (2 Sílabas) ⚡». Escucha cómo suena Leo antes de elegirlo.",
      "symbol": "⚡ Corto",
      "category": "Cortos (2 Sílabas) ⚡"
    },
    {
      "name": "Nube",
      "category": "Hembras ♀️",
      "symbol": "☁️ Suave",
      "note": "Inspirado en las nubes; una opción breve de sonido suave."
    },
    {
      "name": "Tango",
      "category": "Machos ♂️",
      "symbol": "🎵 Ritmo",
      "note": "Nombre dinámico inspirado en la música y el movimiento."
    },
    {
      "name": "Churro",
      "category": "Graciosos / Comida 🍡",
      "symbol": "🥨 Dulce",
      "note": "Una idea juguetona inspirada en un dulce conocido."
    },
    {
      "name": "Mango",
      "category": "Gatos Naranjas 🍊",
      "symbol": "🥭 Fruta",
      "note": "Nombre frutal que combina con tonos cálidos del pelaje."
    },
    {
      "name": "Perla",
      "category": "Elegantes / Reales 👑",
      "symbol": "🦪 Perla",
      "note": "Inspirado en el brillo de las perlas."
    },
    {
      "name": "Uma",
      "category": "Cortos (2 Sílabas) ⚡",
      "symbol": "⚡ Breve",
      "note": "Tres letras y dos sílabas; fácil de decir a diario."
    },
    {
      "name": "Trufa",
      "category": "Graciosos / Comida 🍡",
      "symbol": "🍫 Postre",
      "note": "Un nombre inspirado en el chocolate, de tono cariñoso."
    },
    {
      "name": "Cleo",
      "category": "Hembras ♀️",
      "symbol": "👑 Clásico",
      "note": "Una opción corta para una ficha o placa sencilla."
    }
  ],
  "dogs": [
    {
      "name": "Luna",
      "note": "Idea editorial para la categoría «Tiernas 💖». Escucha cómo suena Luna antes de elegirlo.",
      "symbol": "🌙 Popular ",
      "category": "Tiernas 💖"
    },
    {
      "name": "Kira",
      "note": "Nombre corto asociado aquí con brillo o luz; resulta práctico para repetir al llamarla.",
      "symbol": "✨ Brillo",
      "category": "Originales ✨"
    },
    {
      "name": "Nala",
      "note": "Idea editorial para la categoría «Famosas 👑». Escucha cómo suena Nala antes de elegirlo.",
      "symbol": "🦁 Leona",
      "category": "Famosas 👑"
    },
    {
      "name": "Chloe",
      "note": "Asociado tradicionalmente con brote verde; una opción suave y elegante.",
      "symbol": "🎀 Coqueta",
      "category": "Pequeñas 🎀"
    },
    {
      "name": "Copito",
      "note": "Una opción descriptiva para perritas de pelaje blanco o muy esponjoso.",
      "symbol": "❄️ Suave",
      "category": "Blancas / Peluditas ❄️"
    },
    {
      "name": "Bella",
      "note": "Un clásico hermoso para cachorras nobles, cariñosas y elegantes.",
      "symbol": "🌸 Clásica",
      "category": "Tiernas 💖"
    },
    {
      "name": "Sasha",
      "note": "Nombre de sonido firme; puede encajar con estilos fuertes o clásicos.",
      "symbol": "🛡️ Fuerte",
      "category": "Originales ✨"
    },
    {
      "name": "Mimi",
      "note": "Nombre muy dulce y de fácil pronunciación para razas miniatura.",
      "symbol": "🍬 Miniatura",
      "category": "Pequeñas 🎀"
    },
    {
      "name": "Bianca",
      "note": "Idea editorial para la categoría «Blancas / Peluditas ❄️». Escucha cómo suena Bianca antes de elegirlo.",
      "symbol": "🕊️ Blanca",
      "category": "Blancas / Peluditas ❄️"
    },
    {
      "name": "Arya",
      "note": "Idea editorial para la categoría «Famosas 👑». Escucha cómo suena Arya antes de elegirlo.",
      "symbol": "👑 Noble",
      "category": "Famosas 👑"
    },
    {
      "name": "Maya",
      "note": "Idea editorial para la categoría «Originales ✨». Escucha cómo suena Maya antes de elegirlo.",
      "symbol": "🌿 Sagrada",
      "category": "Originales ✨"
    },
    {
      "name": "Daisy",
      "note": "Idea editorial para la categoría «Tiernas 💖». Escucha cómo suena Daisy antes de elegirlo.",
      "symbol": "🌼 Flor",
      "category": "Tiernas 💖"
    },
    {
      "name": "Mora",
      "category": "Tiernas 💖",
      "symbol": "🫐 Fruta",
      "note": "Un nombre breve inspirado en los frutos del bosque."
    },
    {
      "name": "Kiwi",
      "category": "Pequeñas 🎀",
      "symbol": "🥝 Fruta",
      "note": "Una opción ligera y fácil de recordar."
    },
    {
      "name": "Nieve",
      "category": "Blancas / Peluditas ❄️",
      "symbol": "❄️ Nieve",
      "note": "Inspiración visual para pelajes blancos."
    },
    {
      "name": "Chispa",
      "category": "Originales ✨",
      "symbol": "⚡ Energía",
      "note": "Evoca movimiento y un carácter juguetón."
    },
    {
      "name": "Duna",
      "category": "Originales ✨",
      "symbol": "🏜️ Naturaleza",
      "note": "Inspirado en paisajes de arena."
    },
    {
      "name": "Cleo",
      "category": "Famosas 👑",
      "symbol": "👑 Corto",
      "note": "Opción breve de estilo clásico."
    },
    {
      "name": "Lila",
      "category": "Tiernas 💖",
      "symbol": "💜 Color",
      "note": "Inspirado en la flor y en un color suave."
    },
    {
      "name": "Tiza",
      "category": "Blancas / Peluditas ❄️",
      "symbol": "🤍 Blanco",
      "note": "Idea visual para mascotas de pelaje claro."
    }
  ],
  "blackCats": [
    {
      "name": "Salem",
      "note": "El inolvidable gato parlante de Sabrina. Sarcástico, sabio e icónico.",
      "symbol": "🔮 Bruja ",
      "category": "Místicos / Magia 🔮"
    },
    {
      "name": "Jiji",
      "note": "Gato negro de Kiki (Studio Ghibli). Leal, tierno y con gran voz interior.",
      "symbol": "🎬 Ghibli",
      "category": "Cine / Anime 🎬"
    },
    {
      "name": "Kuro",
      "note": "Idea editorial para la categoría «Cine / Anime 🎬». Escucha cómo suena Kuro antes de elegirlo.",
      "symbol": "⚡ Anime",
      "category": "Cine / Anime 🎬"
    },
    {
      "name": "Bagheera",
      "note": "La sabia pantera negra de El Libro de la Selva. Ágil, valiente y noble.",
      "symbol": "🐆 Pantera",
      "category": "Cine / Anime 🎬"
    },
    {
      "name": "Sombra",
      "note": "Evoca a un gato sigiloso que se mueve entre sombras y rincones oscuros.",
      "symbol": "🌑 Sigilo",
      "category": "Noche / Cosmos 🌑"
    },
    {
      "name": "Eclipse",
      "note": "Idea editorial para la categoría «Noche / Cosmos 🌑». Escucha cómo suena Eclipse antes de elegirlo.",
      "symbol": "🌑 Cosmos",
      "category": "Noche / Cosmos 🌑"
    },
    {
      "name": "Onyx",
      "note": "Inspirado en la valiosa piedra preciosa de tono negro profundo.",
      "symbol": "💎 Elegante",
      "category": "Elegantes / Dark 🖤"
    },
    {
      "name": "Merlín",
      "note": "El mago más poderoso de las leyendas. Para michis misteriosos e inteligentes.",
      "symbol": "🪄 Mago",
      "category": "Místicos / Magia 🔮"
    },
    {
      "name": "Frijolito",
      "note": "Una opción divertida y tierna para gatitos pequeños de pelaje oscuro.",
      "symbol": "🍡 Tierno",
      "category": "Divertidos / Tiernos 🍡"
    },
    {
      "name": "Panterita",
      "note": "Cariñoso homenaje al rey de la selva en formato miniatura.",
      "symbol": "🐈‍⬛ Clásico",
      "category": "Divertidos / Tiernos 🍡"
    },
    {
      "name": "Velvet",
      "note": "Idea editorial para la categoría «Elegantes / Dark 🖤». Escucha cómo suena Velvet antes de elegirlo.",
      "symbol": "🖤 Terciopelo",
      "category": "Elegantes / Dark 🖤"
    },
    {
      "name": "Hécate",
      "note": "Diosa griega de la magia, las encrucijadas, la luna y la noche.",
      "symbol": "🔮 Deidad",
      "category": "Místicos / Magia 🔮"
    },
    {
      "name": "Ónix",
      "category": "Elegantes / Dark 🖤",
      "symbol": "💎 Piedra",
      "note": "Inspirado en la piedra de tonos oscuros."
    },
    {
      "name": "Medianoche",
      "category": "Noche / Cosmos 🌑",
      "symbol": "🌌 Noche",
      "note": "Evoca el cielo nocturno."
    },
    {
      "name": "Neblina",
      "category": "Noche / Cosmos 🌑",
      "symbol": "🌫️ Niebla",
      "note": "Una opción etérea inspirada en la niebla."
    },
    {
      "name": "Mora",
      "category": "Divertidos / Tiernos 🍡",
      "symbol": "🫐 Fruta",
      "note": "Un nombre corto inspirado en los frutos del bosque."
    },
    {
      "name": "Luna",
      "category": "Místicos / Magia 🔮",
      "symbol": "🌙 Luna",
      "note": "Inspirado en la luz de la luna."
    },
    {
      "name": "Órbita",
      "category": "Noche / Cosmos 🌑",
      "symbol": "🪐 Cosmos",
      "note": "Evoca el movimiento de los planetas."
    },
    {
      "name": "Noir",
      "category": "Elegantes / Dark 🖤",
      "symbol": "🖤 Estilo",
      "note": "Inspiración estética de tonalidades oscuras."
    },
    {
      "name": "Momo",
      "category": "Divertidos / Tiernos 🍡",
      "symbol": "🐾 Breve",
      "note": "Una opción fácil de repetir como apodo cariñoso."
    }
  ],
  "maleCats": [
    {
      "name": "Simba",
      "note": "Idea editorial para la categoría «Épicos / Reyes 👑». Escucha cómo suena Simba antes de elegirlo.",
      "symbol": "🦁 Rey ",
      "category": "Épicos / Reyes 👑"
    },
    {
      "name": "Thor",
      "note": "Inspirado en el dios nórdico del trueno; transmite una imagen fuerte y enérgica.",
      "symbol": "⚡ Trueno",
      "category": "Mitología / Héroes 🏛️"
    },
    {
      "name": "Leo",
      "note": "Nombre breve de dos sílabas, práctico para repetir al llamarlo.",
      "symbol": "⚡ Corto",
      "category": "Cortos (2 Sílabas) ⚡"
    },
    {
      "name": "Mochi",
      "note": "Inspirado en el pastel japonés mochi; una opción tierna para gatos cariñosos.",
      "symbol": "🍡 Dulce",
      "category": "Comida / Tiernos 🍡"
    },
    {
      "name": "Loki",
      "note": "Inspirado en el dios nórdico asociado con las travesuras; encaja con una temática inquieta y juguetona.",
      "symbol": "⚡ Travieso",
      "category": "Mitología / Héroes 🏛️"
    },
    {
      "name": "Zeus",
      "note": "Rey del Olimpo y señor de los cielos. Imponente y dominante.",
      "symbol": "🏛️ Olimpo",
      "category": "Mitología / Héroes 🏛️"
    },
    {
      "name": "Nacho",
      "note": "Cálido y divertido; encaja especialmente con una temática de gatos naranjas.",
      "symbol": "🍊 Naranjita",
      "category": "Comida / Tiernos 🍡"
    },
    {
      "name": "Max",
      "note": "Corto y directo; resulta fácil de repetir al llamar al gato.",
      "symbol": "⚡ Corto",
      "category": "Cortos (2 Sílabas) ⚡"
    },
    {
      "name": "Oreo",
      "note": "Inspirado en la galleta blanca y negra. Un clásico entrañable.",
      "symbol": "🍡 Galleta",
      "category": "Comida / Tiernos 🍡"
    },
    {
      "name": "Oliver",
      "note": "Inspirado en Oliver y su Pandilla de Disney. Curioso y noble.",
      "symbol": "🎬 Disney",
      "category": "Famosos / Anime 🎬"
    },
    {
      "name": "Garfield",
      "note": "El icónico michi amante de la lasaña y las sestas mañaneras.",
      "symbol": "🎬 Famoso",
      "category": "Famosos / Anime 🎬"
    },
    {
      "name": "Apolo",
      "note": "Dios del sol, la luz y las artes. Para gatos hermosos y dorados.",
      "symbol": "🏛️ Sol",
      "category": "Mitología / Héroes 🏛️"
    },
    {
      "name": "Tango",
      "category": "Épicos / Reyes 👑",
      "symbol": "🎵 Ritmo",
      "note": "Evoca ritmo y movimiento."
    },
    {
      "name": "Rayo",
      "category": "Épicos / Reyes 👑",
      "symbol": "⚡ Rápido",
      "note": "Inspiración ligada al relámpago."
    },
    {
      "name": "Churro",
      "category": "Comida / Tiernos 🍡",
      "symbol": "🥨 Dulce",
      "note": "Una opción divertida inspirada en un dulce."
    },
    {
      "name": "Neo",
      "category": "Cortos (2 Sílabas) ⚡",
      "symbol": "⚡ Breve",
      "note": "Nombre de tres letras para quienes prefieren apodos concisos."
    },
    {
      "name": "Merlín",
      "category": "Mitología / Héroes 🏛️",
      "symbol": "🪄 Magia",
      "note": "Inspirado en el mago de las leyendas artúricas."
    },
    {
      "name": "Cosmo",
      "category": "Famosos / Anime 🎬",
      "symbol": "🌌 Universo",
      "note": "Una opción inspirada en el cosmos y en personajes de ficción."
    },
    {
      "name": "Gizmo",
      "category": "Famosos / Anime 🎬",
      "symbol": "🎬 Cine",
      "note": "Inspirado en un personaje de cine fantástico."
    },
    {
      "name": "Tofu",
      "category": "Comida / Tiernos 🍡",
      "symbol": "🍽️ Comida",
      "note": "Nombre breve inspirado en un alimento."
    }
  ]
};
