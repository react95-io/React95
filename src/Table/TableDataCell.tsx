import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { styledDimension } from '../common';
import { CommonStyledProps } from '../types';

type TableDataCellProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableCellElement> &
  CommonStyledProps;

const StyledTd = styled.td`
  padding: 0 ${styledDimension(4)};
`;

const TableDataCell = forwardRef<HTMLTableCellElement, TableDataCellProps>(
  function TableDataCell({ children, ...otherProps }, ref) {
    return (
      <StyledTd ref={ref} {...otherProps}>
        {children}
      </StyledTd>
    );
  }
);

TableDataCell.displayName = 'TableDataCell';

export { TableDataCell, TableDataCellProps };
