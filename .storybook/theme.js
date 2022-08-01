import { create } from '@storybook/theming';

import brandImage from './logo.png';

export default create({
  base: 'light',
  brandTitle: 'React95',
  brandUrl: 'https://react95.io',
  brandImage,
  brandTarget: '_self',

  // UI
  appBg: '#dfdfdf',
  appContentBg: '#ffffff',
  appBorderColor: '#848584',
  appBorderRadius: 0,

  // Typography
  fontBase: '"ms_sans_serif", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#0a0a0a',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#c6c6c6',
  barSelectedColor: '#fefefe',
  barBg: '#060084',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#dfdfdf',
  inputTextColor: '#0a0a0a',
  inputBorderRadius: 0
});
