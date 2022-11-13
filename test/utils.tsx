import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../src/common/themes';

export const theme = themes.original;

export const renderWithTheme = (component: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export class Touch {
  #identifier: number;

  #clientX = 0;

  #clientY = 0;

  #pageX = 0;

  #pageY = 0;

  constructor({
    identifier,
    clientX = 0,
    clientY = 0,
    pageX = 0,
    pageY = 0
  }: {
    identifier: number;
    clientX?: number;
    clientY?: number;
    pageX?: number;
    pageY?: number;
  }) {
    this.#identifier = identifier;
    this.#clientX = clientX;
    this.#clientY = clientY;
    this.#pageX = pageX;
    this.#pageY = pageY;
  }

  get identifier() {
    return this.#identifier;
  }

  get pageX() {
    return this.#pageX;
  }

  get pageY() {
    return this.#pageY;
  }

  get clientX() {
    return this.#clientX;
  }

  get clientY() {
    return this.#clientY;
  }
}
