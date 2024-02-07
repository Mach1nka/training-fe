const publicApiImports = require('./rules/public-api-imports');
const publicApiModuleEncapsulation = require('./rules/public-api-module-encapsulation');


module.exports = {
  rules: {
    'public-api-imports': publicApiImports,
    'public-api-module-encapsulation': publicApiModuleEncapsulation,
  },
};
