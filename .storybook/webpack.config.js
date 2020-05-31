const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  });

  config.resolve = Object.assign(config.resolve, {
    alias: {
      ...config.resolve.alias,
      react95: path.resolve(__dirname, '../src/index')
    }
  });

  return config;
};
