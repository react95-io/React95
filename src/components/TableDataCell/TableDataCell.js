import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { padding } from '../common/system';

const StyledTd = styled.td`
  padding: 0 ${padding.sm};
`;
const TableDataCell = React.forwardRef(function TableDataCell(props, ref) {
  const { children, ...otherProps } = props;
  return (
    <StyledTd ref={ref} {...otherProps}>
      {children}
    </StyledTd>
  );
});

TableDataCell.defaultProps = {
  children: null
};

TableDataCell.propTypes = {
  children: propTypes.node
};

export default TableDataCell;
