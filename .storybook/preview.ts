import { DecoratorFn, Parameters } from '@storybook/react';
import { withGlobalStyle } from './decorators/withGlobalStyle';
import { withThemesProvider } from './theme-picker/ThemeProvider';

export const decorators: DecoratorFn[] = [withGlobalStyle, withThemesProvider];

export const parameters: Parameters = {
  layout: 'fullscreen'
};
