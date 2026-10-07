// Editorial selections, not popularity rankings or availability checks.
// A-Z gender labels are editorial groupings, not identity or origin guarantees.
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
    A: ['Alexander:m', 'Amelia:f', 'Alex:u', 'Agustín:m', 'Andrea:f', 'Adrián:m', 'Alicia:f', 'Alejandro:m'], B: ['Bruno:m', 'Bella:f', 'Benjamín:m', 'Bárbara:f', 'Bianca:f', 'Baltasar:m', 'Beatriz:f', 'Boris:m'],
    C: ['Camila:f', 'Carlos:m', 'Cristian:m', 'Clara:f', 'Carmen:f', 'César:m', 'Cecilia:f', 'Claudio:m'], D: ['Daniel:m', 'Diana:f', 'David:m', 'Dolores:f', 'Damián:m', 'Daniela:f', 'Darío:m', 'Débora:f'],
    E: ['Enzo:m', 'Elena:f', 'Emma:f', 'Emanuel:m', 'Eduardo:m', 'Elisa:f', 'Estela:f', 'Eric:m'], F: ['Fernando:m', 'Fiorella:f', 'Frida:f', 'Félix:m', 'Fabián:m', 'Fernanda:f', 'Florencia:f', 'Francisco:m'],
    G: ['Gabriel:m', 'Gloria:f', 'Gonzalo:m', 'Graciela:f', 'Greta:f', 'Gaspar:m', 'Gabriela:f', 'Guillermo:m'], H: ['Hugo:m', 'Helena:f', 'Héctor:m', 'Hanna:f', 'Horacio:m', 'Hilda:f', 'Hernán:m', 'Haydée:f'], I: ['Ignacio:m', 'Isabel:f', 'Iván:m', 'Inés:f', 'Irene:f', 'Iker:m', 'Ivette:f', 'Isidro:m'], J: ['Javier:m', 'Julia:f', 'Jorge:m', 'Jimena:f', 'Joaquín:m', 'Josefina:f', 'Juan:m', 'Jazmín:f'],
    K: ['Kevin:m', 'Karla:f', 'Kai:u', 'Kiara:f', 'Karen:f', 'Katerina:f', 'Kenji:m', 'Kira:f'], L: ['Luis:m', 'Lucía:f', 'Leonardo:m', 'Laura:f', 'Leandro:m', 'Liliana:f', 'Lía:f', 'Lorenzo:m'], M: ['Mateo:m', 'Mía:f', 'Martín:m', 'Milena:f', 'Manuel:m', 'Mariana:f', 'Mauricio:m', 'Marisol:f'],
    N: ['Nicolás:m', 'Natalia:f', 'Noé:m', 'Nora:f', 'Nadia:f', 'Nahuel:m', 'Noelia:f', 'Néstor:m'], O: ['Óscar:m', 'Olivia:f', 'Oliver:m', 'Ona:f', 'Omar:m', 'Ofelia:f', 'Octavio:m', 'Oriana:f'], P: ['Pedro:m', 'Paula:f', 'Pablo:m', 'Paloma:f', 'Patricia:f', 'Pascual:m', 'Pilar:f', 'Patricio:m'], Q: ['Quintín:m', 'Quirina:f', 'Quirino:m', 'Quinta:f', 'Quim:m', 'Queralt:f', 'Qadir:m', 'Quetzalli:u'],
    R: ['Rafael:m', 'Rosa:f', 'Ricardo:m', 'Raquel:f', 'Ramiro:m', 'Renata:f', 'Rodrigo:m', 'Rocío:f'], S: ['Samuel:m', 'Sofía:f', 'Sergio:m', 'Sara:f', 'Sebastián:m', 'Selena:f', 'Simón:m', 'Silvia:f'], T: ['Tomás:m', 'Teresa:f', 'Teo:m', 'Tamara:f', 'Tobías:m', 'Tatiana:f', 'Tania:f', 'Tiago:m'], U: ['Ulises:m', 'Úrsula:f', 'Urbano:m', 'Uma:f', 'Uriel:m', 'Uliana:f', 'Unai:m', 'Uxía:f'],
    V: ['Víctor:m', 'Valeria:f', 'Vicente:m', 'Vanesa:f', 'Verónica:f', 'Valentín:m', 'Violeta:f', 'Vidal:m'], W: ['William:m', 'Wendy:f', 'Walter:m', 'Wilma:f', 'Wanda:f', 'Wilfredo:m', 'Wilson:m', 'Whitney:u'], X: ['Xavier:m', 'Ximena:f', 'Xander:m', 'Xenia:f', 'Xóchitl:f', 'Xiomara:f', 'Xabier:m', 'Xerxes:m'],
    Y: ['Yuri:u', 'Yolanda:f', 'Yago:m', 'Yasmina:f', 'Yara:f', 'Yahir:m', 'Yadira:f', 'Yamil:m'], Z: ['Zaid:m', 'Zahara:f', 'Zacarías:m', 'Zoe:f', 'Zulema:f', 'Zaira:f', 'Zenón:m', 'Zulay:f'], Ñ: ['Íñigo:m', 'Begoña:f', 'Toño:m', 'Iñaki:m', 'Beñat:m', 'Nuño:m'],
  }).map(([letter, entries]) => [letter, entries.map(entry => {
    const [name, gender] = entry.split(':');
    return { name, gender: gender as 'f' | 'm' | 'u' };
  })]),
);
