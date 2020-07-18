import React from 'react';
import { createGlobalStyle } from 'styled-components';

import styleReset from '../../src/common/styleReset';
// TODO is there a way to keep import paths consistent with what end user will get?
import ms_sans_serif from '../../src/assets/fonts/dist/ms_sans_serif.woff2';
import ms_sans_serif_bold from '../../src/assets/fonts/dist/ms_sans_serif_bold.woff2';

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

export default storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
