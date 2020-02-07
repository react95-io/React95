import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  display: table-header-group;
`;
const TableHead = ({ children, ...otherProps }) => (
  <StyledTableHead {...otherProps}>{children}</StyledTableHead>
);

TableHead.defaultProps = {
  children: null
};

TableHead.propTypes = {
  children: propTypes.node
};

export default TableHead;
