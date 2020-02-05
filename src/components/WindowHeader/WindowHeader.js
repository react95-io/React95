import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';

const SlyledWindowHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 0.25rem;
  font-weight: bold;

  color: ${({ theme, isActive }) =>
    isActive ? theme.textInvert : theme.material};

  ${({ theme, isActive }) =>
    isActive
      ? css`
          background: linear-gradient(
            to right,
            ${theme.headerMaterialDark},
            ${theme.headerMaterialLight}
          );
        `
      : css`
          background: ${theme.headerNotActive};
        `}
`;
// TODO - should we add some aria label indicating if window is currently active?
const WindowHeader = ({ isActive, children, ...otherProps }) => (
  <SlyledWindowHeader isActive={isActive} {...otherProps}>
    {children}
  </SlyledWindowHeader>
);

WindowHeader.defaultProps = {
  children: null,
  isActive: true
};

WindowHeader.propTypes = {
  children: propTypes.node,
  isActive: propTypes.bool
};

export default WindowHeader;
