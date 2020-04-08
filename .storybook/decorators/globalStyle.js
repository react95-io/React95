import React from 'react';
import { createGlobalStyle } from 'styled-components';

import styleReset from '../../src/components/common/styleReset';
import MSSansSerif from '../../src/components/assets/fonts/MS-Sans-Serif.woff2';

const GlobalStyle = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'MS-Sans-Serif';
    src:  url('${MSSansSerif}') format('woff2');
  }
  body {
    font-family: 'MS-Sans-Serif', 'sans-serif';
  }
`;

export default storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
