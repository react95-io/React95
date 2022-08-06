import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../src/index';
import { Theme } from '../../src/types';

export function ThemeButton({
  active,
  onChoose,
  theme
}: {
  active: boolean;
  onChoose: (theme: Theme) => void;
  theme: Theme;
}) {
  const handleClick = useCallback(() => {
    onChoose(theme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Button active={active} onClick={handleClick}>
        {theme.name}
      </Button>
    </ThemeProvider>
  );
}
