import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledWindow = styled.div`
  position: relative;
  padding: 4px;
  ${createBorderStyles({ windowBorders: true })}
  ${createBoxStyles()}
`;

const Window = ({ shadow, children, ...otherProps }) => (
  <StyledWindow shadow={shadow} {...otherProps}>
    {children}
  </StyledWindow>
);

Window.defaultProps = {
  shadow: true,
  children: null
};

Window.propTypes = {
  shadow: propTypes.bool,
  children: propTypes.node
};

export default Window;
