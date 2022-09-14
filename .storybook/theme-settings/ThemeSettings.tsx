import { useAddonState } from '@storybook/api';
import React, { useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SCALE } from '../../src/common/constants';

import themes from '../../src/common/themes';
import { Checkbox, GroupBox, Slider } from '../../src/index';
import { Theme } from '../../src/types';
import { THEMES_ID } from './constants';
import { ThemeButton } from './ThemeButton';

const {
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...otherThemes
} = themes;

const themeList = [
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  ...Object.values(otherThemes)
];

type ThemesProps = {
  active?: boolean;
};

const Wrapper = styled.div<{ theme: Theme }>`
  padding: 1em;
  background-color: ${({ theme }) => theme.material};
`;

const ThemesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fill, 40px);
  gap: 1em;
  margin-bottom: 1em;
`;

const marks = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 }
];

export function ThemeSettings({ active }: ThemesProps) {
  const [themeName, setThemeName] = useAddonState(
    `${THEMES_ID}/themeName`,
    'original'
  );
  const [themeScale, setThemeScale] = useAddonState(
    `${THEMES_ID}/themeScale`,
    themes.original.scale
  );
  const [themeShadow, setThemeShadow] = useAddonState(
    `${THEMES_ID}/themeShadow`,
    themes.original.shadow
  );

  const handleChoose = useCallback(
    (newTheme: Theme) => {
      setThemeName(newTheme.name);
    },
    [setThemeName]
  );

  const handleShadowChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = (event.target as HTMLInputElement).checked;
      setThemeShadow(checked);
    },
    []
  );

  const handleScaleChange = useCallback(
    (_: Event | React.SyntheticEvent, value: number) => {
      setThemeScale(value);
    },
    []
  );

  if (!active) {
    return <></>;
  }

  return (
    <Wrapper key={THEMES_ID} theme={themes.original}>
      <ThemesGrid>
        {themeList.map(theme => (
          <ThemeButton
            active={themeName === theme.name}
            key={theme.name}
            onChoose={handleChoose}
            theme={theme}
          />
        ))}
      </ThemesGrid>
      <ThemeProvider theme={themes.original}>
        <GroupBox label='Options'>
          <Checkbox
            checked={themeShadow}
            onChange={handleShadowChange}
            label='Modern Shadows'
          />
          <Slider
            onChange={handleScaleChange}
            min={1}
            max={5}
            marks={marks}
            value={themeScale ?? SCALE}
          />
        </GroupBox>
      </ThemeProvider>
    </Wrapper>
  );
}
