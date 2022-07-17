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

export const decorators = [
  GlobalStyle,
  withThemesProvider(Object.values(reorderedThemes))
];

export const parameters = {
  layout: 'fullscreen'
};
