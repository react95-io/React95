import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import themes from '../src/components/common/themes';
import React from 'react';
import GlobalStyle from './decorators/globalStyle';

const demoThemes = [
  themes.default,
  themes.lilacRoseDark,
  themes.water,
  themes.coldGray,
  themes.violetDark
];

addDecorator(GlobalStyle);
addDecorator(story => (
  <ThemeProvider theme={themes.default}>{story()}</ThemeProvider>
));

configure(require.context('../src/', true, /\.stories\.js$/), module);
