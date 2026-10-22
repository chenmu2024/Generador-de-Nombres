export const freeFireSymbolGroups = [
  { id: 'estrellas', label: 'Estrellas', entries: [['★', 'Estrella negra'], ['☆', 'Estrella blanca'], ['✦', 'Estrella de cuatro puntas'], ['✧', 'Estrella de cuatro puntas blanca'], ['✪', 'Estrella en círculo'], ['✯', 'Estrella decorativa']] },
  { id: 'corazones', label: 'Corazones', entries: [['♥', 'Corazón negro'], ['♡', 'Corazón blanco'], ['❤', 'Corazón grueso'], ['❥', 'Corazón inclinado'], ['❣', 'Corazón con punto']] },
  { id: 'coronas', label: 'Coronas', entries: [['♛', 'Reina negra de ajedrez'], ['♚', 'Rey negro de ajedrez'], ['♕', 'Reina blanca de ajedrez'], ['♔', 'Rey blanco de ajedrez'], ['👑', 'Corona emoji']] },
  { id: 'flechas', label: 'Flechas', entries: [['➜', 'Flecha derecha'], ['➤', 'Punta de flecha'], ['➳', 'Flecha decorativa'], ['↠', 'Flecha doble'], ['»', 'Comillas angulares derechas']] },
  { id: 'marcos', label: 'Marcos', entries: [['꧁', 'Marco decorativo izquierdo'], ['꧂', 'Marco decorativo derecho'], ['༺', 'Adorno izquierdo'], ['༻', 'Adorno derecho'], ['『', 'Corchete izquierdo'], ['』', 'Corchete derecho'], ['【', 'Corchete grueso izquierdo'], ['】', 'Corchete grueso derecho']] },
  { id: 'separadores', label: 'Separadores', entries: [['•', 'Punto central'], ['·', 'Punto medio'], ['丨', 'Trazo vertical'], ['〆', 'Signo de cierre'], ['乂', 'Carácter cruzado'], ['么', 'Carácter decorativo'], ['亗', 'Carácter decorativo alto']] },
  { id: 'otros', label: 'Otros', entries: [['⚡', 'Rayo'], ['☠', 'Calavera'], ['⚔', 'Espadas cruzadas'], ['✿', 'Flor'], ['❀', 'Flor blanca'], ['☯', 'Yin yang'], ['ツ', 'Katakana tsu'], ['✞', 'Cruz']] },
] as const;

export const freeFireSymbols: Array<{ value: string; label: string; category: string; categoryLabel: string }> = freeFireSymbolGroups.flatMap(group =>
  group.entries.map(([value, label]) => ({ value, label, category: group.id, categoryLabel: group.label })),
);

export const freeFireFrames = [
  ['꧁', '꧂'], ['༺', '༻'], ['『', '』'], ['【', '】'], ['★', '★'], ['♡', '♡'],
] as const;
