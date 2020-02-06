import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const SlyledWindowHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 0.25rem;
  font-weight: bold;

  &[data-active='false'] {
    background: ${({ theme }) => theme.headerNotActive};
    color: ${({ theme }) => theme.material};
  }
  &[data-active='true'] {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.headerMaterialDark},
      ${({ theme }) => theme.headerMaterialLight}
    );
    color: ${({ theme }) => theme.textInvert};
  }
`;
// TODO - should we add some aria label indicating if window is currently active?
const WindowHeader = ({ isActive, children, ...otherProps }) => (
  <SlyledWindowHeader data-active={isActive.toString()} {...otherProps}>
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
