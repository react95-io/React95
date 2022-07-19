module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['react95'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/static-property-placement': ['error', 'static public field']
  },
  overrides: [
    {
      files: ['*.spec.@(js|jsx)', '*.stories.@(js|jsx)'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
};
