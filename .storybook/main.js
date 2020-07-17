module.exports = {
  stories: [
    '../src/**/*.stories.(js|mdx)',
    '../.storybook/**/*.stories.(js|mdx)'
  ],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-storysource'
  ]
};
