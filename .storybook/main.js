/** @type import('@storybook/react/types').StorybookConfig */
module.exports = {
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
    'storybook-addon-styled-component-theme/dist/register'
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
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};
