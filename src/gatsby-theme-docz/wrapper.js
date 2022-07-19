import React from 'react';
import { ThemeProvider } from 'styled-components';
import { node } from 'prop-types';

function ThemedComponent({ children }) {
  /* eslint-disable no-use-before-define */
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

/*
  temporary solution, for some reason when importing theme from the src/ folder docz doesn't work :(
*/
const defaultTheme = {
  name: 'original',
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#848584',
  borderDarkest: '#0a0a0a',
  borderLight: '#dfdfdf',
  borderLightest: '#fefefe',
  canvas: '#ffffff',
  canvasText: '#0a0a0a',
  canvasTextDisabled: '#848584',
  canvasTextDisabledShadow: '#fefefe',
  canvasTextInvert: '#fefefe',
  checkmark: '#0a0a0a',
  checkmarkDisabled: '#848584',
  desktopBackground: '#008080',
  flatDark: '#9e9e9e',
  flatLight: '#d8d8d8',
  focusSecondary: '#fefe03',
  headerBackground: '#060084',
  headerNotActiveBackground: '#7f787f',
  headerNotActiveText: '#c6c6c6',
  headerText: '#fefefe',
  hoverBackground: '#060084',
  material: '#c6c6c6',
  materialDark: '#9a9e9c',
  materialText: '#0a0a0a',
  materialTextDisabled: '#848584',
  materialTextDisabledShadow: '#fefefe',
  materialTextInvert: '#fefefe',
  progress: '#060084',
  tooltip: '#fefbcc'
};

ThemedComponent.propTypes = {
  children: node.isRequired
};

export default ThemedComponent;
