import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledWindow = styled.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${createBorderStyles({ windowBorders: true })}
  ${createBoxStyles()}
`;
const ResizeHandle = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${theme.borderLightest} 16.67%,
      ${theme.material} 16.67%,
      ${theme.material} 33.33%,
      ${theme.borderDark} 33.33%,
      ${theme.borderDark} 50%,
      ${theme.borderLightest} 50%,
      ${theme.borderLightest} 66.67%,
      ${theme.material} 66.67%,
      ${theme.material} 83.33%,
      ${theme.borderDark} 83.33%,
      ${theme.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`;

const Window = React.forwardRef(function Window(props, ref) {
  const { resizable, children, ...otherProps } = props;

  return (
    <StyledWindow ref={ref} {...otherProps}>
      {children}
      {resizable && <ResizeHandle data-testid='resizeHandle' />}
    </StyledWindow>
  );
});

Window.defaultProps = {
  resizable: false,
  shadow: false,
  children: null
};

Window.propTypes = {
  shadow: propTypes.bool,
  resizable: propTypes.bool,
  children: propTypes.node
};

export default Window;
