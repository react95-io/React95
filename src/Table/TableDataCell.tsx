import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';

type TableDataCellProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableCellElement> &
  CommonStyledProps;

const StyledTd = styled.td`
  padding: 0 8px;
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
