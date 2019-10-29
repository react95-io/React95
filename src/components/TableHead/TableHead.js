import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  display: table-header-group;
`;
const TableHead = ({ className, children, style, ...otherProps }) => (
  <StyledTableHead className={className} style={style} {...otherProps}>
    {children}
  </StyledTableHead>
);

TableHead.defaultProps = {
  children: null,
  className: '',
  style: {}
};

TableHead.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default TableHead;
