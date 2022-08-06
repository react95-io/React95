import { DecoratorFn, Parameters } from '@storybook/react';
import { withGlobalStyle } from './decorators/withGlobalStyle';
import { withThemeSettings } from './theme-settings/ThemeProvider';

export const decorators: DecoratorFn[] = [withGlobalStyle, withThemeSettings];

export const parameters: Parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Docs',
        [
          'Welcome to React95',
          'Getting Started',
          'Contributing',
          'Submit your Project'
        ],
        'Controls',
        'Environment',
        'Layout',
        'Typography',
        'Other'
      ]
    }
  }
};
