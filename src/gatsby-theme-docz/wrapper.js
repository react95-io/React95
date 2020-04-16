import React from 'react';
import { ThemeProvider } from 'styled-components';
import { node } from 'prop-types';

import { themes } from 'react95';

const ThemedComponent = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

ThemedComponent.propTypes = {
  children: node.isRequired
};

export default ThemedComponent;
