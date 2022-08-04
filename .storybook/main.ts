import type { StorybookConfig } from '@storybook/react/types';
import type { PropItem } from 'react-docgen-typescript';

const path = require('path');

const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false
        }
      }
    },
    '@storybook/addon-storysource',
    './theme-picker/register.ts'
  ],
  core: {
    builder: 'webpack5'
  },
  features: {
    babelModeV7: true,
    storyStoreV7: true,
    modernInlineRender: true,
    postcss: false
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: PropItem) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        react95: path.resolve(__dirname, '../src/index')
      }
    };

    return config;
  }
};

module.exports = storybookConfig;
