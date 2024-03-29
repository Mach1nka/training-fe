const LAYERS = {
  app: 'app',
  pages: 'pages',
  widgets: 'widgets',
  features: 'features',
  entities: 'entities',
  shared: 'shared',
};

const LAYERS_IMPORT_RULES = {
  [LAYERS.app]: [LAYERS.pages, LAYERS.widgets, LAYERS.features, LAYERS.entities, LAYERS.shared],
  [LAYERS.pages]: [LAYERS.widgets, LAYERS.features, LAYERS.entities, LAYERS.shared],
  [LAYERS.widgets]: [LAYERS.features, LAYERS.entities, LAYERS.shared],
  [LAYERS.features]: [LAYERS.entities, LAYERS.shared],
  [LAYERS.entities]: [LAYERS.entities, LAYERS.shared],
  [LAYERS.shared]: [LAYERS.shared],
};

function isPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../');
}

function getSplittedSourceFilePath(filePath) {
  const srcDirectory = filePath.split('src')[1];
  // [0] element is ''
  return srcDirectory?.split('\\');
}

module.exports = {
  LAYERS,
  LAYERS_IMPORT_RULES,
  isPathRelative,
  getSplittedSourceFilePath,
};