import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import themes from '../src/common/themes';

export const theme = themes.original;

export const renderWithTheme = component =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export class Touch {
  constructor(instance) {
    this.instance = instance;
  }

  get identifier() {
    return this.instance.identifier;
  }

  get pageX() {
    return this.instance.pageX;
  }

  get pageY() {
    return this.instance.pageY;
  }

  get clientX() {
    return this.instance.clientX;
  }

  get clientY() {
    return this.instance.clientY;
  }
}
