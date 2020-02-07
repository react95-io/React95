import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { insetShadow } from '../common';

const StyledTableBody = styled.tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${insetShadow};
`;

const TableBody = ({ children, ...otherProps }) => (
  <StyledTableBody {...otherProps}>{children}</StyledTableBody>
);

TableBody.defaultProps = {
  children: null
};

TableBody.propTypes = {
  children: propTypes.node
};

export default TableBody;
