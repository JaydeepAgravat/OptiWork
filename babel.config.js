/** @type {import('react-native-worklets/plugin').PluginOptions} */
const workletsPluginOptions = {};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin', workletsPluginOptions],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/i18n': './src/i18n',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
          '@/types': './src/types',
          '@/storage': './src/storage',
          '@/utils': './src/utils',
          '@/providers': './src/providers',
          '@/navigation': './src/navigation',
          '@/hooks': './src/hooks',
        },
      },
    ],
  ],
};
