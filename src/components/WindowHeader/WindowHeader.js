import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { padding } from '../common/system';

const SlyledWindowHeader = styled.div`
  height: 33px;
  line-height: 33px;
  padding: 0 ${padding.sm};
  margin-right: 2px;
  margin-bottom: 4px;

  font-weight: bold;
  color: ${({ theme }) => theme.textInvert};

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.headerMaterialDark},
    ${({ theme }) => theme.headerMaterialLight}
  );
`;

const WindowHeader = ({
  className, style, children, ...otherProps
}) => (
  <SlyledWindowHeader className={className} style={style} {...otherProps}>
    {children}
  </SlyledWindowHeader>
);

WindowHeader.defaultProps = {
  className: '',
  style: {},
  children: null,
};

WindowHeader.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([
    propTypes.string,
    propTypes.number,
  ]),
  children: propTypes.node,
};

export default WindowHeader;
