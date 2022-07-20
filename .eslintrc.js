module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_\\d*$'
      }
    ],
    'import/extensions': ['error', { js: 'never', ts: 'never', tsx: 'never' }],
    'import/no-unresolved': [
      'error',
      // TODO: Remove ../../test/utils when TypeScript migration is complete
      { ignore: ['react95', '../../test/utils'] }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': ['error', 'static public field']
  },
  overrides: [
    {
      files: ['*.spec.@(js|jsx|ts|tsx)', '*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  }
};
