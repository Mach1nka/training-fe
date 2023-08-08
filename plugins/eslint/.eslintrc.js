module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
  ],
  overrides: [{
    files: ['./tests/*.js'],
    env: {
      mocha: true,
    }
  }]
};