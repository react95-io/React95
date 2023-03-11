import { useAddonState } from '@storybook/client-api';
import { DecoratorFn } from '@storybook/react';
import React from 'react';

import themes from '../../src/common/themes/index';
import { React95Provider } from '../../src/common/React95Provider';
import { ThemeProvider } from '../../src/common/ThemeProvider';
import { THEMES_ID } from './constants';

export const withThemesProvider: DecoratorFn = story => {
  const [themeName] = useAddonState(THEMES_ID, 'original');

  return (
    <React95Provider>
      <ThemeProvider theme={themes[themeName] ?? themes.original}>
        {story()}
      </ThemeProvider>
    </React95Provider>
  );
};
