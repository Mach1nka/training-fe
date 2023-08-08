const { toNamespacedPath } = require('path');

const layers = {
  app: 'app',
  pages: 'pages',
  widgets: 'widgets',
  features: 'features',
  entities: 'entities',
  shared: 'shared',
};

function isPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../');
}

function shouldBeRelative(importPath, filePath) {
  if (isPathRelative(importPath)) {
    return false;
  }
  // [0] element is \\
  const parsedImportPath = importPath.replace('@', '').split('/');
  const layerOfImport = parsedImportPath[1];
  const sliceOfImport = parsedImportPath[2];

  if (!layers[layerOfImport]) {
    return false;
  }

  const normalizedPath = toNamespacedPath(filePath);
  const srcDirectory = normalizedPath.split('src')[1];
  const parsedFilePath = srcDirectory.split('\\');
  // [0] element is \\
  const layerOfFile = parsedFilePath[1];
  const sliceOfFile = parsedFilePath[2];

  if (!layers[layerOfFile]) {
    return false;
  }

  // NOTE: Imports among shared modules must be absolute.
  if (layerOfImport === layers.shared && layerOfFile === layers.shared) {
    return false;
  }

  return sliceOfImport === sliceOfFile && layerOfFile === layerOfImport;
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      recommended: false,
      description: 'Enforce follow public Api methodology',
      url: null,
    },
    fixable: 'code',
  },
  create(ctx) {
    return {
      ImportDeclaration(node)  {
        const importFrom = node.source.value;
        const filename = ctx.getFilename();

        if (shouldBeRelative(importFrom, filename)) {
          ctx.report(node, 'Imports must be relative in the same slice');
        }
      }
    };
  },
};
