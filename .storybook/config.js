import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import themes from '../src/common/themes';
import GlobalStyle from './decorators/globalStyle';

const {
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...otherThemes
} = themes;

const reorderedThemes = {
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...otherThemes
};

addDecorator(GlobalStyle);
addDecorator(withThemesProvider(Object.values(reorderedThemes)));
configure(require.context('../src/', true, /\.stories\.js$/), module);
