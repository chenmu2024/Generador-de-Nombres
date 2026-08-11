const fs = require('fs');
let content = fs.readFileSync('src/pages/CategoryPage.tsx', 'utf8');

// Replace standard initialization with lazy computed ones to prevent layout thrashing
const useStateSearch = "  const [alphabetLetter, setAlphabetLetter] = useState('A');";
const replacement = `
  const getInitialAlphabetLetter = () => {
    if (location.pathname === '/nombres-con-en') return 'Ñ';
    const match = location.pathname.match(/\\/nombres-con-([a-z])$/i);
    return match ? match[1].toUpperCase() : 'A';
  };
  const getInitialAlphabetFirstName = () => {
    if (location.pathname === '/nombres-con-en') return 'Iñigo';
    const match = location.pathname.match(/\\/nombres-con-([a-z])$/i);
    if (match) {
      const letter = match[1].toUpperCase();
      const sampleMap: Record<string, string> = {
        A: 'Alexander', B: 'Bruno', C: 'Camila', D: 'Daniel', E: 'Enzo', F: 'Fernando',
        G: 'Gael', H: 'Hugo', I: 'Ian', J: 'Javier', K: 'Kai', L: 'Leo', M: 'Mateo',
        N: 'Noah', Ñ: 'Iñigo', O: 'Oliver', P: 'Pablo', Q: 'Quentin', R: 'René', S: 'Sofía',
        T: 'Thiago', U: 'Uriel', V: 'Valentina', W: 'William', X: 'Ximena', Y: 'Yael', Z: 'Zoe'
      };
      return sampleMap[letter] || 'Ariel';
    }
    return 'Alexander';
  };

  const [alphabetLetter, setAlphabetLetter] = useState(getInitialAlphabetLetter);
  const [alphabetGender, setAlphabetGender] = useState<'todos' | 'masculino' | 'femenino' | 'unisex'>('todos');
  const [alphabetFirstName, setAlphabetFirstName] = useState(getInitialAlphabetFirstName);
`;

content = content.replace(useStateSearch + "\n  const [alphabetGender, setAlphabetGender] = useState<'todos' | 'masculino' | 'femenino' | 'unisex'>('todos');\n  const [alphabetFirstName, setAlphabetFirstName] = useState('Alexander');", replacement);

// Remove the useEffect entirely!
const useEffectSearch = `  useEffect(() => {
    // Route matching for letter paths like /nombres-con-a or /nombres-con-en
    if (location.pathname === '/nombres-con-en') {
      setAlphabetLetter('Ñ');
      setAlphabetFirstName('Iñigo');
    } else {
      const letterMatch = location.pathname.match(/\\/nombres-con-([a-z])$/i);
      if (letterMatch) {
        const targetLetter = letterMatch[1].toUpperCase();
        setAlphabetLetter(targetLetter);
        const sampleMap: Record<string, string> = {
          A: 'Alexander', B: 'Bruno', C: 'Camila', D: 'Daniel', E: 'Enzo', F: 'Fernando',
          G: 'Gael', H: 'Hugo', I: 'Ian', J: 'Javier', K: 'Kai', L: 'Leo', M: 'Mateo',
          N: 'Noah', Ñ: 'Iñigo', O: 'Oliver', P: 'Pablo', Q: 'Quentin', R: 'René', S: 'Sofía',
          T: 'Thiago', U: 'Uriel', V: 'Valentina', W: 'William', X: 'Ximena', Y: 'Yael', Z: 'Zoe'
        };
        setAlphabetFirstName(sampleMap[targetLetter] || 'Ariel');
      }
    }
  }, [location.pathname]);`;

content = content.replace(useEffectSearch, "");

fs.writeFileSync('src/pages/CategoryPage.tsx', content, 'utf8');
