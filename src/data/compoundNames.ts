import { normalizeSearch, visibleLength } from '../utils/text';

export type NameFamily = 'female' | 'male' | 'unisex' | 'rare';

// Style groups are editorial suggestions, not popularity or gender rankings.
export const compoundNameGroups: Record<NameFamily, Record<string, string[]>> = {
  female: {
    elegante: ['Sofía', 'Valentina', 'Isabella', 'Elena', 'Victoria', 'Camila', 'Lucía', 'Clara'],
    corto: ['Zoe', 'Mia', 'Iris', 'Lia', 'Ona', 'Gala', 'Yara', 'Aria', 'Alba', 'Luna', 'Eva', 'Inés'],
    biblico: ['Sara', 'Eva', 'Ruth', 'Noemí', 'Esther', 'Raquel', 'María', 'Ana'],
    internacional: ['Emma', 'Chloe', 'Sofia', 'Mila', 'Nora', 'Alice', 'Olivia', 'Julia'],
  },
  male: {
    moderno: ['Mateo', 'Gael', 'Liam', 'Enzo', 'Oliver', 'Thiago', 'Milan', 'Bastian'],
    raro: ['Dante', 'Ciro', 'Elio', 'Soren', 'Silas', 'Nilo', 'Dorian', 'Caius'],
    corto: ['Leo', 'Ian', 'Kai', 'Liam', 'Enzo', 'Gael', 'Noé', 'Hugo', 'Ciro', 'Elio'],
    biblico: ['Gabriel', 'Samuel', 'David', 'Isaac', 'Daniel', 'Mateo', 'Lucas', 'Noé'],
  },
  unisex: {
    moderno: ['Alex', 'René', 'Sasha', 'Ariel', 'Noa', 'Robin', 'Dani', 'Sam'],
    naturaleza: ['River', 'Sky', 'Sol', 'Vega', 'Mar', 'Rain', 'Ocean', 'Rio'],
    elegante: ['Morgan', 'Jordan', 'Charlie', 'Andrea', 'Claude', 'Dominique', 'Camille', 'Taylor'],
    mistico: ['Orion', 'Phoenix', 'Eden', 'Nova', 'Aster', 'Halo', 'Zen', 'Echo'],
  },
  rare: {
    mitologia: ['Freya', 'Selene', 'Orion', 'Atlas', 'Daphne', 'Ariadna', 'Héctor', 'Apolo'],
    espacial: ['Lyra', 'Vega', 'Nova', 'Orion', 'Stella', 'Luna', 'Aster', 'Sol'],
    antiguo: ['Cassian', 'Aurelia', 'Dante', 'Cyrus', 'Caelia', 'Silas', 'Octavia', 'Lucius'],
    fantasia: ['Zephyr', 'Kael', 'Elion', 'Darian', 'Kenzo', 'Soren', 'Raven', 'Arwen'],
  },
};

export function getCompoundSuggestions(family: NameFamily, style: string) {
  const groups = compoundNameGroups[family];
  const names = Object.hasOwn(groups, style) ? groups[style] : [];
  return names.map((first, index) => {
    const second = names[(index + 1) % names.length];
    const name = `${first} ${second}`;
    return { label: name, val: name, desc: `Primer nombre: ${visibleLength(first)} letras · selección editorial` };
  });
}

interface NameMeaning { origin: string; meaning: string; source?: string }

// Checked against the linked entries on 2026-10-03 and 2026-10-04. Keep unsourced inputs unknown.
const reviewedMeanings: Record<string, NameMeaning> = {
  sofia: { origin: 'Griego', meaning: 'Sabiduría.', source: 'https://www.behindthename.com/name/sophia' },
  valentina: { origin: 'Latín', meaning: 'Forma femenina de Valentinus, derivado de Valens: fuerte, vigoroso o saludable.', source: 'https://www.behindthename.com/name/valentine-1' },
  zoe: { origin: 'Griego', meaning: 'Vida.', source: 'https://www.behindthename.com/name/zoe' },
  mia: { origin: 'Forma corta de Maria', meaning: 'Diminutivo de Maria; coincide con la palabra italiana mia (mía).', source: 'https://www.behindthename.com/name/mia' },
  lia: { origin: 'Variante de Leah', meaning: 'Forma de Leah usada en italiano, portugués, georgiano y griego.', source: 'https://www.behindthename.com/name/lia-1' },
  iris: { origin: 'Griego', meaning: 'Arcoíris; también es el nombre de una diosa griega.', source: 'https://www.behindthename.com/name/iris' },
  aria: { origin: 'Italiano (palabra)', meaning: 'Canción o melodía; literalmente aire.', source: 'https://www.behindthename.com/name/aria-1' },
  chloe: { origin: 'Griego', meaning: 'Brote verde.', source: 'https://www.behindthename.com/name/chloe' },
  lyra: { origin: 'Astronomía', meaning: 'Nombre de la constelación de la Lira.', source: 'https://www.behindthename.com/name/lyra' },
  alexander: { origin: 'Griego', meaning: 'Defensor de los hombres.', source: 'https://www.behindthename.com/name/alexander' },
  alex: { origin: 'Forma abreviada', meaning: 'Forma corta de Alexander, Alexandra y otros nombres que empiezan por Alex.', source: 'https://www.behindthename.com/name/alex' },
  mateo: { origin: 'Hebreo, a través del griego', meaning: 'Forma de Matthew; su raíz Mattithiah significa regalo de Yahweh.', source: 'https://www.behindthename.com/name/mattithiah' },
  morgan: { origin: 'Galés', meaning: 'Procede de Morcant; posiblemente combina mar y círculo. La etimología no es segura.', source: 'https://www.behindthename.com/name/morgan-1' },
  orion: { origin: 'Mitología griega', meaning: 'Nombre de un cazador mitológico y de una constelación. Su significado etimológico es incierto.', source: 'https://www.behindthename.com/name/orion' },
  cassian: { origin: 'Romano', meaning: 'Procede de Cassianus, derivado del apellido romano Cassius.', source: 'https://www.behindthename.com/name/cassian' },
};

export function lookupNameMeaning(name: string): NameMeaning {
  const key = normalizeSearch(name);
  return (Object.hasOwn(reviewedMeanings, key) ? reviewedMeanings[key] : undefined) || {
    origin: 'Pendiente de verificación',
    meaning: 'No hay una fuente de significado revisada para este nombre. Puedes usarlo como propuesta de combinación.',
  };
}
