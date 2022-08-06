import addons, { makeDecorator, types } from '@storybook/addons';
import { THEMES_ID } from './constants';
import { ThemeSettings } from './ThemeSettings';

addons.register(THEMES_ID, () => {
  addons.addPanel(`${THEMES_ID}/panel`, {
    title: 'Theme Settings',
    type: types.PANEL,
    render: ThemeSettings
  });
});

export default makeDecorator({
  name: 'withThemeSettingsProvider',
  parameterName: 'theme',
  wrapper: (getStory, context) => getStory(context)
});
