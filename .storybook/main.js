module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
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
  }
};
