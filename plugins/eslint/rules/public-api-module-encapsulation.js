const { isMatch } = require('micromatch');
const { LAYERS, isPathRelative } = require('../utils');

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
          ignorePatterns: {
            type: 'array'
          }
        },
      },
    ],
  },
  create(ctx) {
    return {
      ImportDeclaration(node) {
        const { alias = '', ignorePatterns = [] } = ctx.options[0];
        const importPath = alias ? node.source.value.replace(`${alias}/`, '') : node.source.value;
        const filename = ctx.getFilename();

        if (isMatch(filename, ignorePatterns)) {
          return;
        }

        if (isPathRelative(importPath)) {
          return;
        }
        const pathSegments = importPath.split('/');

        if (pathSegments[0] === LAYERS.shared || !LAYERS[pathSegments[0]]) {
          return;
        }
        // NOTE: Check whether the import is absolute.
        if (pathSegments.length > 2) {
          ctx.report(node, 'Absolute imports are allowed only from a module public api.');
        }
      }
    };
  },
};
