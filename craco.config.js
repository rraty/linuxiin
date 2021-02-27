/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');
const CracoAlias = require('craco-alias');
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#f2cf61',
          '@white': 'white',
          '@layout-header-background': '#f2cf61',
          '@layout-header-color': '@white',
          '@layout-footer-background': '#e0bb49',
        },
      },
    },
    {
      plugin: sassResourcesLoader,
      options: {
        resources: path.join(__dirname, 'src/styles/resources.scss'),
      },
    },
  ],
};
