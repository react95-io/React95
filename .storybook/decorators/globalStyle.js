import React from 'react';
import { createGlobalStyle } from 'styled-components';

import styleReset from '../../src/common/styleReset';
import MSSansSerif from '../../src/assets/fonts/MS-Sans-Serif.woff2';
import MSSansSerifBold from '../../src/assets/fonts/MS-Sans-Serif-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'MS-Sans-Serif';
    src: url('${MSSansSerif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'MS-Sans-Serif';
    src: url('${MSSansSerifBold}') format("woff2");
    font-weight: bold;
    font-style: normal
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
