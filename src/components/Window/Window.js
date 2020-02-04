import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledWindow = styled.div`
  position: relative;
  padding: 4px;
  ${createBorderStyles({ windowBorders: true })}
  ${createBoxStyles()}
`;
const DragHandle = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 4px;
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
    border-width: 2px;
    border-style: solid;
    border-color: ${theme.material};
    cursor: se-resize;
  `}
`;

// TODO pass resize handler
const Window = ({ resizable, shadow, children, ...otherProps }) => (
  <StyledWindow shadow={shadow} {...otherProps}>
    {children}
    {resizable && <DragHandle />}
  </StyledWindow>
);

Window.defaultProps = {
  resizable: false,
  shadow: true,
  children: null
};

Window.propTypes = {
  shadow: propTypes.bool,
  resizable: propTypes.bool,

  children: propTypes.node
};

export default Window;
