const { toNamespacedPath } = require('path');
const { LAYERS, isPathRelative } = require('../utils/index.js');

const RELATIVE_IMPORT_ERROR = 'RELATIVE_IMPORT_ERROR';

function shouldBeRelative(importPath, sourceFilePath) {
  if (isPathRelative(importPath)) {
    return false;
  }

  const parsedImportPath = importPath.split('/');
  const layerOfImport = parsedImportPath[0];
  const sliceOfImport = parsedImportPath[1];

  if (!LAYERS[layerOfImport]) {
    return false;
  }

  const srcDirectory = sourceFilePath.split('src')[1];
  const parsedFilePath = srcDirectory.split('\\');
  // [0] element is ''
  const layerOfSourceFile = parsedFilePath[1];
  const sliceOfSourceFile = parsedFilePath[2];

  if (!LAYERS[layerOfSourceFile]) {
    return false;
  }

  // NOTE: Imports among shared modules must be absolute.
  if (layerOfImport === LAYERS.shared && layerOfSourceFile === LAYERS.shared) {
    return false;
  }

  return sliceOfImport === sliceOfSourceFile && layerOfSourceFile === layerOfImport;
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      recommended: false,
      description: 'Enforce follow public Api methodology',
      url: null,
    },
    fixable: null,
    messages: {
      [RELATIVE_IMPORT_ERROR]: 'Imports must be relative in the same slice.'
    },
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
        const importPath = alias ? node.source.value.replace(`${alias}/`, '') : node.source.value;
        const filename = toNamespacedPath(ctx.filename);

        if (shouldBeRelative(importPath, filename)) {
          ctx.report({
            node,
            messageId: RELATIVE_IMPORT_ERROR,
            // NOTE: create fixer
          });
        }
      }
    };
  },
};
