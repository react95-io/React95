import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const SlyledWindowHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 0.25rem;

  font-weight: bold;
  color: ${({ theme }) => theme.textInvert};

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.headerMaterialDark},
    ${({ theme }) => theme.headerMaterialLight}
  );
`;

const WindowHeader = ({ children, ...otherProps }) => (
  <SlyledWindowHeader {...otherProps}>{children}</SlyledWindowHeader>
);

WindowHeader.defaultProps = {
  children: null
};

WindowHeader.propTypes = {
  children: propTypes.node
};

export default WindowHeader;
