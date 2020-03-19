import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const StyledTableBody = styled.tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${({ theme }) => theme.insetShadow};
`;

const TableBody = ({ className, children, style, ...otherProps }) => (
  <StyledTableBody className={className} style={style} {...otherProps}>
    {children}
  </StyledTableBody>
);

TableBody.defaultProps = {
  children: null,
  className: '',
  style: {}
};

TableBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default TableBody;
