import React from 'react';
import { createGlobalStyle } from 'styled-components';

import styleReset from '../../src/components/common/styleReset';

const GlobalStyle = createGlobalStyle`
  ${styleReset}
`;

export default storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
