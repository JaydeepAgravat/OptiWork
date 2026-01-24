/**
 * ESLint configuration for a React Native + TypeScript project
 *
 * Goals:
 * - Runtime safety
 * - Predictable imports
 * - Bundle-friendly discipline
 */

module.exports = {
  /**
   * Marks this config as the root ESLint config.
   * ESLint will not search parent directories.
   */
  root: true,

  /**
   * TypeScript-aware parser.
   * Required for linting TS/TSX correctly.
   */
  parser: '@typescript-eslint/parser',

  parserOptions: {
    /**
     * Ensures tsconfig resolution works in nested folders.
     */
    tsconfigRootDir: __dirname,

    /**
     * Enables type-aware rules.
     */
    project: ['./tsconfig.json'],

    /**
     * Use ES modules (import / export).
     */
    sourceType: 'module',
  },

  /**
   * Base configurations to extend.
   * Order matters.
   */
  extends: [
    /**
     * Official React Native defaults.
     */
    '@react-native',

    /**
     * Safe, recommended TypeScript rules.
     */
    'plugin:@typescript-eslint/recommended',

    /**
     * Import validation rules.
     */
    'plugin:import/recommended',

    /**
     * Makes import rules understand TypeScript.
     */
    'plugin:import/typescript',
  ],

  /**
   * Plugins that provide additional rules.
   */
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'react-native'],

  /**
   * File-specific overrides.
   */
  overrides: [
    {
      /**
       * ESLint config itself is plain JS.
       * Disable type-aware parsing here.
       */
      files: ['.eslintrc.js'],
      parserOptions: {
        project: null,
      },
    },
  ],

  /**
   * Shared settings used by plugins.
   */
  settings: {
    /**
     * Auto-detect installed React version.
     */
    react: {
      version: 'detect',
    },

    /**
     * Teach eslint-plugin-import how to resolve modules.
     */
    'import/resolver': {
      /**
       * Supports TS path aliases (from tsconfig).
       */
      typescript: {
        project: './tsconfig.json',
      },

      /**
       * Supports @/ aliases from babel.config.js.
       */
      'babel-module': {},
    },
  },

  rules: {
    /*******************/
    /** CORE SAFETY **/
    /*******************/

    /**
     * Disable base rule (not TS-aware).
     */
    'no-unused-vars': 'off',

    /**
     * TS-aware unused variable detection.
     * `_arg` means intentionally unused.
     */
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    /*******************/
    /** IMPORT HYGIENE **/
    /*******************/

    /**
     * Prevent duplicate imports.
     */
    'import/no-duplicates': 'error',

    /**
     * Enforce consistent import order.
     */
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // fs, path
          'external', // react, react-native, libraries
          'internal', // @/something
          ['parent', 'sibling', 'index'], // relative
          'type', // import type {}
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    /************************************************
     * BUNDLE-FRIENDLY DISCIPLINE (SAFE MIDDLE GROUND)
     ************************************************/

    /**
     * Restrict import patterns that cause:
     * - accidental over-importing
     * - unclear dependencies
     * - worse Metro output
     */
    'no-restricted-imports': [
      'error',
      {
        /**
         * EXACT path restrictions.
         * These do NOT affect subpaths.
         */
        paths: [
          {
            name: '@/utils',
            message: 'Do not import from utils barrel. Import a specific file.',
          },
          {
            name: '@/constants',
            message:
              'Do not import from constants barrel. Import a specific constant file.',
          },
          {
            name: '@/services',
            message:
              'Do not import from services barrel. Import the specific service.',
          },
          {
            name: '@/hooks',
            message:
              'Do not import from hooks barrel. Import the hook directly.',
          },

          /**
           * Block namespace imports from react-native.
           */
          {
            name: 'react-native',
            importNames: ['*'],
            message:
              'Avoid `import * as RN`. Import Platform, View, Text directly.',
          },
        ],

        /**
         * PATTERN-based restrictions.
         * These are glob rules — be careful here.
         */
        patterns: [
          /**
           * Prevent deep relative climbing.
           */
          {
            group: ['../*'],
            message:
              'Avoid deep relative imports. Use absolute imports via @/.',
          },
        ],
      },
    ],

    /**
     * Force `import type { Foo }` when importing types.
     * Prevents accidental runtime imports.
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],

    /*******************/
    /** REACT RULES **/
    /*******************/

    /**
     * Enforce the Rules of Hooks.
     */
    'react-hooks/rules-of-hooks': 'error',

    /**
     * Warn on missing deps (not error to reduce noise).
     */
    'react-hooks/exhaustive-deps': 'warn',

    /*******************/
    /** REACT NATIVE **/
    /*******************/

    /**
     * Warn against hardcoded colors.
     */
    'react-native/no-color-literals': 'warn',
  },

  /**
   * Define global environments.
   */
  env: {
    node: true,
    browser: true,
    jest: true,
    'react-native/react-native': true,
  },
};
