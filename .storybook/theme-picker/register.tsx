import addons, { makeDecorator, types } from '@storybook/addons';
import React from 'react';
import { ThemeList } from './ThemeList';

export const THEMES_ID = 'storybook/themes';

addons.register(THEMES_ID, () => {
  addons.addPanel(`${THEMES_ID}/panel`, {
    title: 'Themes',
    type: types.PANEL,
    render: ({ active }) => {
      return <ThemeList key='react95-themes' active={active} />;
    }
  });
});

export default makeDecorator({
  name: 'withThemesProvider',
  parameterName: 'theme',
  wrapper: (getStory, context) => getStory(context)
});
