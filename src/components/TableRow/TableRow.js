import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { blockSizes } from '../common/system';

const StyledTr = styled.tr`
  color: inherit;
  display: table-row;
  height: calc(${blockSizes.md} - 2px);
  line-height: calc(${blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme }) => theme.text};
`;

const TableRow = ({ children, ...otherProps }) => (
  <StyledTr {...otherProps}>{children}</StyledTr>
);

TableRow.defaultProps = {
  children: null
};

TableRow.propTypes = {
  children: propTypes.node
};

export default TableRow;
