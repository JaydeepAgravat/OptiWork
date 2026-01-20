module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'react-native'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
      'babel-module': {}, // resolves @/ aliases from babel.config.js
    },
  },
  rules: {
    /*******************/
    /** IMPORT RULES **/
    /*******************/
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // fs, path
          'external', // react, react-native, libraries
          'internal', // @/components, @/screens
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'react-native', group: 'external', position: 'before' },
          { pattern: '@/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-duplicates': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],

    /*******************/
    /** REACT NATIVE RULES **/
    /*******************/
    'react-native/no-color-literals': 'warn',
  },
  env: {
    node: true,
    browser: true,
    'react-native/react-native': true,
    jest: true,
  },
};
