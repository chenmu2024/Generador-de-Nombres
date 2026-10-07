// Editorial selections, not popularity rankings or availability checks.
export const nameIdeas: Record<string, { names: string[]; source?: string }> = {
  '/nombres-italianos': { names: ['Alessandro', 'Giulia', 'Francesco', 'Chiara', 'Lorenzo', 'Elena', 'Matteo', 'Sofia', 'Andrea', 'Beatrice', 'Antonio', 'Bianca', 'Carlo', 'Caterina', 'Dario', 'Domenico', 'Luca', 'Marco', 'Ginevra', 'Alessia', 'Pietro', 'Federico', 'Vittoria', 'Riccardo'], source: 'italian' },
  '/nombres-rusos': { names: ['Aleksandr', 'Anastasiya', 'Dmitriy', 'Irina', 'Mikhail', 'Natalya', 'Nikolay', 'Olga', 'Aleksey', 'Anna', 'Andrey', 'Anton', 'Boris', 'Darya', 'Ekaterina', 'Elena', 'Sergei', 'Svetlana', 'Pavel', 'Tatiana', 'Yuri', 'Marina', 'Fyodor', 'Galina'], source: 'russian' },
  '/nombres-griegos': { names: ['Alexandros', 'Eleni', 'Georgios', 'Katerina', 'Nikolaos', 'Sophia', 'Dimitrios', 'Irene', 'Andreas', 'Anastasia', 'Dimitra', 'Ilias', 'Ioannis', 'Maria', 'Petros', 'Sotiris', 'Konstantinos', 'Vasiliki', 'Theodoros', 'Despina', 'Panagiotis', 'Fotini', 'Stefanos', 'Niki'], source: 'greek' },
  '/nombres-ingles': { names: ['Arthur', 'Alice', 'Henry', 'Emily', 'Oliver', 'Charlotte', 'William', 'Rose', 'Adam', 'Amelia', 'Benjamin', 'Clara', 'Edward', 'Grace', 'James', 'Lucy', 'George', 'Eleanor', 'Thomas', 'Olivia', 'Charles', 'Sophie', 'Robert', 'Lily'], source: 'english' },
  '/nombres-turcos': { names: ['Ahmet', 'Ayşe', 'Emre', 'Elif', 'Mehmet', 'Zeynep', 'Deniz', 'Cem', 'Ayla', 'Aysel', 'Barış', 'Burak', 'Ceren', 'Derya', 'Ece', 'Eren', 'Mustafa', 'Selin', 'Mert', 'İrem', 'Onur', 'Esra', 'Hakan', 'Aslı'], source: 'turkish' },
  '/nombres-chinos': { names: ['An', 'Bai', 'Chen', 'Fang', 'Hua', 'Jing', 'Jun', 'Mei', 'Ai', 'Bo', 'Chun', 'Da', 'Fen', 'Guang', 'Hai', 'Hong', 'Qiang', 'Xiu', 'Yan', 'Tao', 'Lei', 'Rui', 'Xin', 'Ling'], source: 'chinese' },
  '/nombres-de-dioses': { names: ['Zeus', 'Hera', 'Atenea', 'Apolo', 'Artemisa', 'Hermes', 'Poseidón', 'Deméter', 'Hestia', 'Dioniso', 'Ares', 'Hades', 'Afrodita', 'Hefesto', 'Eros', 'Helios', 'Selene', 'Eos', 'Pan', 'Perséfone', 'Hécate', 'Némesis', 'Nike', 'Tique'] },
  '/nombres-caballos': { names: ['Lucero', 'Brisa', 'Trueno', 'Estrella', 'Azabache', 'Canela', 'Relámpago', 'Luna', 'Aurora', 'Cometa', 'Dorado', 'Niebla', 'Roble', 'Sombra', 'Viento', 'Zafiro', 'Centella', 'Rayo', 'Tormenta', 'Noche', 'Copito', 'Perla', 'Ícaro', 'Valentía'] },
};

export const alphabetNames: Record<string, { name: string; gender: 'f' | 'm' | 'u' }[]> = Object.fromEntries(
  Object.entries({
    A: ['Alexander:m', 'Amelia:f', 'Alex:u', 'Agustín:m'], B: ['Bruno:m', 'Bella:f', 'Benjamín:m', 'Bárbara:f'],
    C: ['Camila:f', 'Carlos:m', 'Cristian:m', 'Clara:f'], D: ['Daniel:m', 'Diana:f', 'David:m', 'Dolores:f'],
    E: ['Enzo:m', 'Elena:f', 'Emma:f', 'Emanuel:m'], F: ['Fernando:m', 'Fiorella:f', 'Frida:f', 'Félix:m'],
    G: ['Gabriel:m', 'Gloria:f', 'Gonzalo:m', 'Graciela:f'], H: ['Hugo:m', 'Helena:f', 'Héctor:m', 'Hanna:f'], I: ['Ignacio:m', 'Isabel:f', 'Iván:m', 'Inés:f'], J: ['Javier:m', 'Julia:f', 'Jorge:m', 'Jimena:f'],
    K: ['Kevin:m', 'Karla:f', 'Kai:u', 'Kiara:f'], L: ['Luis:m', 'Lucía:f', 'Leonardo:m', 'Laura:f'], M: ['Mateo:m', 'Mía:f', 'Martín:m', 'Milena:f'],
    N: ['Nicolás:m', 'Natalia:f', 'Noé:m', 'Nora:f'], O: ['Óscar:m', 'Olivia:f', 'Oliver:m', 'Ona:f'], P: ['Pedro:m', 'Paula:f', 'Pablo:m', 'Paloma:f'], Q: ['Quintín:m', 'Quirina:f', 'Quirino:m', 'Quinta:f'],
    R: ['Rafael:m', 'Rosa:f', 'Ricardo:m', 'Raquel:f'], S: ['Samuel:m', 'Sofía:f', 'Sergio:m', 'Sara:f'], T: ['Tomás:m', 'Teresa:f', 'Teo:m', 'Tamara:f'], U: ['Ulises:m', 'Úrsula:f', 'Urbano:m', 'Uma:f'],
    V: ['Víctor:m', 'Valeria:f', 'Vicente:m', 'Vanesa:f'], W: ['William:m', 'Wendy:f', 'Walter:m', 'Wilma:f'], X: ['Xavier:m', 'Ximena:f', 'Xander:m', 'Xenia:f'],
    Y: ['Yuri:u', 'Yolanda:f', 'Yago:m', 'Yasmina:f'], Z: ['Zaid:m', 'Zahara:f', 'Zacarías:m', 'Zoe:f'], Ñ: ['Íñigo:m', 'Begoña:f', 'Toño:m'],
  }).map(([letter, entries]) => [letter, entries.map(entry => {
    const [name, gender] = entry.split(':');
    return { name, gender: gender as 'f' | 'm' | 'u' };
  })]),
);
