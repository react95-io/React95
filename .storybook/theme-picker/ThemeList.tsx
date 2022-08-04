import { useAddonState } from '@storybook/api';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import themes from '../../src/common/themes';
import { Theme } from '../../src/types';
import { THEMES_ID } from './register';
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
  display: grid;
  padding: 1em;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fill, 40px);
  background-color: ${({ theme }) => theme.material};
`;

export function ThemeList({ active }: ThemesProps) {
  const [themeName, setThemeName] = useAddonState(THEMES_ID, 'original');

  const handleChoose = useCallback(
    (newThemeName: string) => {
      setThemeName(newThemeName);
    },
    [setThemeName]
  );

  if (!active) {
    return null;
  }

  return (
    <Wrapper theme={themes.original}>
      {themeList.map(theme => (
        <ThemeButton
          active={themeName === theme.name}
          key={theme.name}
          onChoose={handleChoose}
          theme={theme}
        />
      ))}
    </Wrapper>
  );
}
