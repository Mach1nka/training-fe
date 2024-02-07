const { toNamespacedPath } = require('path');
const { LAYERS, isPathRelative } = require('../utils/index.js');

function shouldBeRelative(importPath, sourceFilePath) {
  if (isPathRelative(importPath)) {
    return false;
  }
  // [0] element is \\
  const parsedImportPath = importPath.replace('@', '').split('/');
  const layerOfImport = parsedImportPath[1];
  const sliceOfImport = parsedImportPath[2];

  if (!LAYERS[layerOfImport]) {
    return false;
  }

  const normalizedPath = toNamespacedPath(sourceFilePath);
  const srcDirectory = normalizedPath.split('src')[1];
  const parsedFilePath = srcDirectory.split('\\');
  // [0] element is \\
  const layerOfFile = parsedFilePath[1];
  const sliceOfFile = parsedFilePath[2];

  if (!LAYERS[layerOfFile]) {
    return false;
  }

  // NOTE: Imports among shared modules must be absolute.
  if (layerOfImport === LAYERS.shared && layerOfFile === LAYERS.shared) {
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
    schema: [
      {
        type: 'object',
        properties: {
          alias: {
            type: 'string'
          },
        },
      },
    ],
  },
  create(ctx) {
    return {
      ImportDeclaration(node) {
        const alias = ctx.options[0]?.alias || '';
        const importPath = alias ? node.source.value.replace(`${alias}/`) : node.source.value;
        const filename = ctx.getFilename();

        if (shouldBeRelative(importPath, filename)) {
          ctx.report(node, 'Imports must be relative in the same slice');
        }
      }
    };
  },
};
