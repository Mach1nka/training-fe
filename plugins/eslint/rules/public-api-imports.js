const { toNamespacedPath, relative } = require('path');
const { LAYERS, isPathRelative, getSplittedSourceFilePath  } = require('../utils/index.js');

const RELATIVE_IMPORT_ERROR = 'RELATIVE_IMPORT_ERROR';

function normalizePathFormatToUnix(importPath) {
  return importPath.split('\\').join('/');
}

function shouldBeRelative(importPath, sourceFilePath) {
  if (isPathRelative(importPath)) {
    return false;
  }

  const [layerOfImport, sliceOfImport] = importPath.split('/');

  if (!LAYERS[layerOfImport]) {
    return false;
  }

  const [_, layerOfSourceFile, sliceOfSourceFile] = getSplittedSourceFilePath(sourceFilePath);

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
    fixable: 'code',
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

        if (!filename.split('\\').find((el) => el === 'src')) {
          return false;
        }

        if (shouldBeRelative(importPath, filename)) {
          ctx.report({
            node,
            messageId: RELATIVE_IMPORT_ERROR,
            fix(fixer) {
              const namelessPath = getSplittedSourceFilePath(filename).slice(0, -1).join('/');
              const relativePath = normalizePathFormatToUnix(relative(namelessPath, `/${importPath}`));
              return fixer.replaceText(
                node.source, 
                `'${!relativePath.startsWith('.') ? './' : ''}${relativePath}'`
              );
            }
          });
        }
      }
    };
  },
};
