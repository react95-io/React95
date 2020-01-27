import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledWindow = styled.div`
  position: relative;
  padding: 2px;
  ${createBorderStyles({ windowBorders: true })}
  ${createBoxStyles()}
`;

const Window = ({ shadow, className, children, ...otherProps }) => (
  <StyledWindow shadow={shadow} className={className} {...otherProps} swag>
    {children}
  </StyledWindow>
);

Window.defaultProps = {
  shadow: true,
  className: '',
  children: null
};

Window.propTypes = {
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};

export default Window;
