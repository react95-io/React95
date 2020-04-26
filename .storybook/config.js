import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import themes from '../src/components/common/themes';
import GlobalStyle from './decorators/globalStyle';

addDecorator(GlobalStyle);
addDecorator(withThemesProvider(Object.values(themes)));
configure(require.context('../src/', true, /\.stories\.js$/), module);
