const publicApiImports = require('./rules/public-api-imports');
const publicApiModuleEncapsulation = require('./rules/public-api-module-encapsulation');
const importsAmongLayers = require('./rules/imports-among-layers');


module.exports = {
  rules: {
    'public-api-imports': publicApiImports,
    'public-api-module-encapsulation': publicApiModuleEncapsulation,
    'imports-among-layers': importsAmongLayers,
  },
};
