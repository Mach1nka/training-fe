const { isMatch } = require('micromatch');
const { toNamespacedPath } = require('path');
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
        const filename = toNamespacedPath(ctx.filename);
        let allowedPathSegmentParts = 2;

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
        // NOTE: Exception for app because of specific of this layer.
        if (pathSegments[0] === LAYERS.app) {
          allowedPathSegmentParts = 3
        }
        // NOTE: Check whether the import is absolute.
        if (pathSegments.length > allowedPathSegmentParts) {
          ctx.report(node, 'Absolute imports are allowed only from a module public api.');
        }
      }
    };
  },
};
