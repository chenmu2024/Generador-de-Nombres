// Editorial selections, not popularity rankings or availability checks.
export const nameIdeas: Record<string, { names: string[]; source?: string }> = {
  '/nombres-italianos': { names: ['Alessandro', 'Giulia', 'Francesco', 'Chiara', 'Lorenzo', 'Elena', 'Matteo', 'Sofia'], source: 'italian' },
  '/nombres-rusos': { names: ['Aleksandr', 'Anastasiya', 'Dmitriy', 'Irina', 'Mikhail', 'Natalya', 'Nikolay', 'Olga'], source: 'russian' },
  '/nombres-griegos': { names: ['Alexandros', 'Eleni', 'Georgios', 'Katerina', 'Nikolaos', 'Sophia', 'Dimitrios', 'Irene'], source: 'greek' },
  '/nombres-ingles': { names: ['Arthur', 'Alice', 'Henry', 'Emily', 'Oliver', 'Charlotte', 'William', 'Rose'], source: 'english' },
  '/nombres-turcos': { names: ['Ahmet', 'Ayşe', 'Emre', 'Elif', 'Mehmet', 'Zeynep', 'Deniz', 'Cem'], source: 'turkish' },
  '/nombres-chinos': { names: ['An', 'Bai', 'Chen', 'Fang', 'Hua', 'Jing', 'Jun', 'Mei'], source: 'chinese' },
  '/nombres-de-dioses': { names: ['Zeus', 'Hera', 'Atenea', 'Apolo', 'Artemisa', 'Hermes', 'Poseidón', 'Deméter'] },
  '/nombres-caballos': { names: ['Lucero', 'Brisa', 'Trueno', 'Estrella', 'Azabache', 'Canela', 'Relámpago', 'Luna'] },
};

export const alphabetNames: Record<string, { name: string; gender: 'f' | 'm' | 'u' }[]> = Object.fromEntries(
  Object.entries({
    A: ['Alexander:m', 'Amelia:f', 'Alex:u', 'Agustín:m'], B: ['Bruno:m', 'Bella:f', 'Benjamín:m', 'Bárbara:f'],
    C: ['Camila:f', 'Carlos:m', 'Cristian:m', 'Clara:f'], D: ['Daniel:m', 'Diana:f', 'David:m', 'Dolores:f'],
    E: ['Enzo:m', 'Elena:f', 'Emma:f', 'Emanuel:m'], F: ['Fernando:m', 'Fiorella:f', 'Frida:f', 'Félix:m'],
    G: ['Gabriel:m', 'Gloria:f'], H: ['Hugo:m', 'Helena:f'], I: ['Ignacio:m', 'Isabel:f'], J: ['Javier:m', 'Julia:f'],
    K: ['Kevin:m', 'Karla:f'], L: ['Luis:m', 'Lucía:f'], M: ['Mateo:m', 'Mía:f', 'Martín:m', 'Milena:f'],
    N: ['Nicolás:m', 'Natalia:f'], O: ['Óscar:m', 'Olivia:f'], P: ['Pedro:m', 'Paula:f'], Q: ['Quintín:m', 'Quirina:f'],
    R: ['Rafael:m', 'Rosa:f'], S: ['Samuel:m', 'Sofía:f'], T: ['Tomás:m', 'Teresa:f'], U: ['Ulises:m', 'Úrsula:f'],
    V: ['Víctor:m', 'Valeria:f'], W: ['William:m', 'Wendy:f'], X: ['Xavier:m', 'Ximena:f'],
    Y: ['Yuri:u', 'Yolanda:f'], Z: ['Zaid:m', 'Zahara:f'], Ñ: ['Íñigo:m', 'Begoña:f', 'Toño:m'],
  }).map(([letter, entries]) => [letter, entries.map(entry => {
    const [name, gender] = entry.split(':');
    return { name, gender: gender as 'f' | 'm' | 'u' };
  })]),
);
