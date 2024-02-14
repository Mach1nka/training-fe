module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:i18next/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'unused-imports',
    'fsd',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/no-array-index-key': 'warn',
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'pathGroups': [
          {
            'pattern': '@/**',
            "group": "internal",
          }
        ],
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
        ],
        'pathGroupsExcludedImportTypes': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-void': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'data-testid',
        'to',
        'target', 'justify', 'align', 'direction', 'wrap', 'as', 'directionH', 'directionV', 'theme'
      ],
    }],
    'max-len': ['error', {
      code: 105,
      ignoreComments: true,
    }],
    'implicit-arrow-linebreak': 'off',
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": ['error', {
       disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports' 
      }
    ],
    // NOTE: Accessability
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    // NOTE: Custom plugins' rules
    'fsd/public-api-imports': ['error', { alias: '@' }],
    'fsd/public-api-module-encapsulation': ['error', { alias: '@', ignorePatterns: ['**/*.{test,stories}.{ts,tsx}'] }],
    'fsd/imports-among-layers': [
      'error',
      { 
        alias: '@',
        ignorePatterns: ['**/*.{test,stories}.{ts,tsx}'],
        ignoreImportPatterns: ['**/StoreProvider']
      }],
  },
  globals: {
    IS_DEV: 'readonly',
    API_URL: 'readonly',
    PROJECT: 'readonly',
  },
  ignorePatterns: ['plugins/eslint/**/*.js'],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
