import { StorybookConfig } from '@storybook/react/types';
import { PropItem } from 'react-docgen-typescript';
import path from 'path';

const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|tsx|mdx)'],
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
    './theme-picker/register'
  ],
  features: {
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

export default storybookConfig;
