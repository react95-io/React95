import addons, { makeDecorator, types } from '@storybook/addons';
import { THEMES_ID } from './constants';
import { ThemeList } from './ThemeList';

addons.register(THEMES_ID, () => {
  addons.addPanel(`${THEMES_ID}/panel`, {
    title: 'Themes',
    type: types.PANEL,
    render: ThemeList
  });
});

export default makeDecorator({
  name: 'withThemesProvider',
  parameterName: 'theme',
  wrapper: (getStory, context) => getStory(context)
});
