export const topicClusters = {
  home: {
    id: 'home',
    label: 'Inicio',
    hubPath: '/',
    paths: ['/'],
  },
  freeFire: {
    id: 'freeFire',
    label: 'Free Fire',
    hubPath: '/nombres-free-fire',
    paths: [
      '/nombres-free-fire',
      '/generador-free-fire',
      '/espacios-invisible-ff',
      '/nombres-ff-unicos',
      '/nombres-ff-mujeres',
      '/nombres-clanes-ff',
    ],
  },
  gamingSocial: {
    id: 'gamingSocial',
    label: 'Juegos & Redes',
    hubPath: '/nombres-roblox',
    paths: [
      '/nombres-roblox',
      '/nombres-instagram',
      '/nombres-anime',
    ],
  },
  personasBebes: {
    id: 'personasBebes',
    label: 'Personas & Bebés',
    hubPath: '/nombres-de-mujer',
    paths: [
      '/nombres-de-mujer',
      '/nombres-de-nina',
      '/nombres-de-nino',
      '/nombres-unisex',
      '/nombres-raros',
      '/nombres-por-letra',
    ],
  },
  letras: {
    id: 'letras',
    label: 'Nombres por Letra',
    hubPath: '/nombres-por-letra',
    paths: [
      '/nombres-con-a',
      '/nombres-con-b',
      '/nombres-con-c',
      '/nombres-con-e',
      '/nombres-con-f',
      '/nombres-con-m',
      '/nombres-con-en',
      '/nombres-con-y',
      '/nombres-con-z',
    ],
  },
  culturas: {
    id: 'culturas',
    label: 'Culturas',
    hubPath: '/nombres-japoneses',
    paths: [
      '/nombres-japoneses',
      '/nombres-coreanos',
      '/nombres-franceses',
      '/nombres-italianos',
      '/nombres-mayas',
      '/nombres-rusos',
      '/nombres-griegos',
      '/nombres-ingles',
      '/nombres-turcos',
      '/nombres-chinos',
      '/nombres-de-dioses',
    ],
  },
  mascotas: {
    id: 'mascotas',
    label: 'Mascotas',
    hubPath: '/nombres-gatos',
    paths: [
      '/nombres-perritas',
      '/nombres-perros-machos',
      '/nombres-gatos',
      '/nombres-gatos-negros',
      '/nombres-gatos-machos',
      '/perritas-chihuahua',
      '/nombres-caballos',
      '/nombres-peluches',
    ],
  },
  negociosEquipos: {
    id: 'negociosEquipos',
    label: 'Equipos & Negocios',
    hubPath: '/nombres-equipos-futbol',
    paths: [
      '/nombres-equipos-futbol',
      '/nombres-para-tiendas',
    ],
  },
} as const;

export type TopicClusterId = keyof typeof topicClusters;

const clusterByPath = new Map<string, TopicClusterId>();

for (const [clusterId, cluster] of Object.entries(topicClusters)) {
  for (const path of cluster.paths) {
    clusterByPath.set(path, clusterId as TopicClusterId);
  }
}

export function getClusterIdForPath(path: string): TopicClusterId {
  const clusterId = clusterByPath.get(path);

  if (!clusterId) {
    throw new Error(
      `[SEO] Route ${path} is missing from topicClusters. Classify it before shipping.`,
    );
  }

  return clusterId;
}

export function getClusterForPath(path: string) {
  return topicClusters[getClusterIdForPath(path)];
}

export function getClusterRelatedPaths(path: string): string[] {
  const cluster = getClusterForPath(path);
  return cluster.paths.filter((candidate) => candidate !== path);
}
