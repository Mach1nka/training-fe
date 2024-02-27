const { isMatch } = require('micromatch');
const { toNamespacedPath } = require('path');
const { LAYERS, LAYERS_IMPORT_RULES, isPathRelative, getSplittedSourceFilePath } = require('../utils');

const IMPORT_AMONG_LAYERS_ERROR = 'IMPORT_AMONG_LAYERS_ERROR';

function getSourceFileLayer(filePath) {
  return getSplittedSourceFilePath(filePath)?.[1];
}

function getImportedFileLayer(filePath) {
  return filePath.split('/')[0];
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
      [IMPORT_AMONG_LAYERS_ERROR]: "Layer '{{ importedFileLayer }}' mustn't be imported into '{{ sourceFileLayer }}'."
    },
    schema: [
      {
        type: 'object',
        properties: {
          alias: {
            type: 'string'
          },
          ignorePatterns: {
            type: 'array'
          },
          ignoreImportPatterns: {
            type: 'array'
          }
        },
      },
    ],
  },
  create(ctx) {
    return {
      ImportDeclaration(node) {
        const { alias = '', ignorePatterns = [], ignoreImportPatterns = [] } = ctx.options[0];
        const importPath = alias ? node.source.value.replace(`${alias}/`, '') : node.source.value;
        const filename = toNamespacedPath(ctx.filename);

        if (isMatch(filename, ignorePatterns)) {
          return;
        }

        if (isMatch(importPath, ignoreImportPatterns)) {
          return;
        }

        if (isPathRelative(importPath)) {
          return;
        }

        const sourceFileLayer = getSourceFileLayer(filename);
        const importedFileLayer = getImportedFileLayer(importPath);
        
        if (!LAYERS[importedFileLayer] || !LAYERS[sourceFileLayer]) {
          return;
        }
        
        if (LAYERS_IMPORT_RULES[sourceFileLayer].includes(LAYERS[importedFileLayer])) {
          return;
        }

        ctx.report({
          node,
          messageId: IMPORT_AMONG_LAYERS_ERROR,
          data: {
            importedFileLayer,
            sourceFileLayer,
          },
        });
      }
    };
  },
};
