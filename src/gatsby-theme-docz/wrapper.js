import React from 'react';
import { ThemeProvider } from 'styled-components';
import { node } from 'prop-types';

const ThemedComponent = ({ children }) => {
  /* eslint-disable no-use-before-define */
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

/*
  temporary solution, for some reason when importing theme from the src/ folder docz doesn't work :(
*/
const defaultTheme = {
  canvas: '#ffffff',
  material: '#ced0cf',
  materialDark: '#9a9e9c',

  borderDarkest: '#050608',
  borderLightest: '#ffffff',
  borderDark: '#888c8f',
  checkmarkDisabled: '#888c8f',
  borderLight: '#dfe0e3',

  headerMaterialDark: '#000080',
  headerMaterialLight: '#000080',
  headerText: '#ffffff',
  headerNotActive: '#7f7f7f',

  text: '#050608',
  textInvert: '#ffffff',
  textDisabled: '#888c8f',
  textDisabledShadow: '#ffffff',

  inputText: '#050608',
  inputTextInvert: '#ffffff',
  inputTextDisabled: '#888c8f',
  inputTextDisabledShadow: '#ffffff',

  tooltip: '#fefbcc',

  anchor: '#1034a6',
  anchorVisited: '#440381',

  hoverBackground: '#000080',
  checkmark: '#050608',

  progress: '#000080',

  flatLight: '#d8d8d8',
  flatDark: '#9e9e9e'
};

ThemedComponent.propTypes = {
  children: node.isRequired
};

export default ThemedComponent;
