import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledAppBar = styled.header`
  ${createBorderStyles()};
  ${createBoxStyles()};

  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppBar = ({
  fixed,
  children,
  className,
  style,
  shadow,
  ...otherProps
}) => (
  <StyledAppBar
    fixed={fixed}
    style={style}
    className={className}
    shadow={shadow}
    {...otherProps}
  >
    {children}
  </StyledAppBar>
);

AppBar.defaultProps = {
  shadow: true,
  fixed: true,
  style: null,
  className: ''
};

AppBar.propTypes = {
  style: propTypes.object,
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  fixed: propTypes.bool
};

export default AppBar;
