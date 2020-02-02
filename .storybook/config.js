import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: false,
    maxPropsIntoLine: 1,
    styles: stylesheet => ({
      // Setting the style with a function
      ...stylesheet,
      table: {
        background: 'red'
      }
    })
  })
);
addDecorator(GlobalStyle);
addDecorator(story => (
  <ThemeProvider theme={themes.default}>{story()}</ThemeProvider>
));
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
