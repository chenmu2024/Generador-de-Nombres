export const nameIdeaPaths = [
  '/nombres-italianos',
  '/nombres-rusos',
  '/nombres-griegos',
  '/nombres-ingles',
  '/nombres-turcos',
  '/nombres-chinos',
  '/nombres-de-dioses',
  '/nombres-caballos',
] as const;

export const nameIdeaPathSet = new Set<string>(nameIdeaPaths);
