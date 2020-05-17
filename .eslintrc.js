module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['react95'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': 'error',
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 'off'
  }
};
