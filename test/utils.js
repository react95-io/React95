import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import themes from '../src/components/common/themes';

export const theme = themes.default;

export const renderWithTheme = component =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
