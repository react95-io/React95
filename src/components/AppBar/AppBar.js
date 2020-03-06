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

const AppBar = React.forwardRef(function AppBar(props, ref) {
  const { fixed, children, ...otherProps } = props;
  return (
    <StyledAppBar fixed={fixed} ref={ref} {...otherProps}>
      {children}
    </StyledAppBar>
  );
});

AppBar.defaultProps = {
  fixed: true
};

AppBar.propTypes = {
  children: propTypes.node.isRequired,
  fixed: propTypes.bool
};

export default AppBar;
