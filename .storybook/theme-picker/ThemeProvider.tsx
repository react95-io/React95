import { useAddonState } from '@storybook/client-api';
import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../../src/common/themes/index';
import { THEMES_ID } from './register';

export const withThemesProvider: DecoratorFn = story => {
  const [themeName] = useAddonState(THEMES_ID, 'original');

  return (
    <ThemeProvider theme={themes[themeName] ?? themes.original}>
      {story()}
    </ThemeProvider>
  );
};
