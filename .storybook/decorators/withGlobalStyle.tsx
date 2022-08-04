import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import ms_sans_serif from '../../src/assets/fonts/dist/ms_sans_serif.woff2';
import ms_sans_serif_bold from '../../src/assets/fonts/dist/ms_sans_serif_bold.woff2';
import styleReset from '../../src/common/styleReset';

const GlobalStyle = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format("woff2");
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif', 'sans-serif';
  }
`;

export const withGlobalStyle: DecoratorFn = story => (
  <>
    <GlobalStyle />
    {story()}
  </>
);
