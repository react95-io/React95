import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { padding } from '../common/system';

const StyledTd = styled.td`
  padding: 0 ${padding.sm};
`;
const TableDataCell = ({ className, children, style, ...otherProps }) => (
  <StyledTd className={className} style={style} {...otherProps}>
    {children}
  </StyledTd>
);

TableDataCell.defaultProps = {
  children: null,
  className: '',
  style: {}
};

TableDataCell.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default TableDataCell;
