import React from 'react';
import { createGlobalStyle } from 'styled-components';

import reset from '../../src/components/common/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
