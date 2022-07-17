const path = require('path');

module.exports = ({ config }) => {
  config.resolve = Object.assign(config.resolve, {
    alias: {
      ...config.resolve.alias,
      react95: path.resolve(__dirname, '../src/index')
    }
  });

  return config;
};
