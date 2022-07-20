import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../src/common/themes';

export const theme = themes.original;

export const renderWithTheme = (component: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export class Touch {
  instance: any;

  constructor(instance: any) {
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
