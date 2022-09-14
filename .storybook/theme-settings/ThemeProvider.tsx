import { useAddonState } from '@storybook/client-api';
import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import themes from '../../src/common/themes/index';
import { SCALE } from '../../src/common/constants';
import { Theme } from '../../src/common/themes/types';
import { THEMES_ID } from './constants';

const GlobalScaledFont = createGlobalStyle`
  html {
    font-size: ${({ theme }: { theme: Theme }) =>
      (theme?.scale ?? SCALE) * 2 + 12}px;
  }
`;

export const withThemeSettings: DecoratorFn = story => {
  const [themeName] = useAddonState(`${THEMES_ID}/themeName`, 'original');
  const [themeScale] = useAddonState(
    `${THEMES_ID}/themeScale`,
    themes.original.scale
  );
  const [themeShadow] = useAddonState(
    `${THEMES_ID}/themeShadow`,
    themes.original.shadow
  );

  const theme: Theme = {
    ...themes[themeName],
    scale: themeScale,
    shadow: themeShadow
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalScaledFont />
      {story()}
    </ThemeProvider>
  );
};
