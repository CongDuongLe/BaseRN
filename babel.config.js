module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@config': './src/config',
          '@assets': './src/assets',
          '@reduxCore': './src/reduxCore',
          '@constants': './src/constants',
          '@core': './src/core',
          '@services': './src/services',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
