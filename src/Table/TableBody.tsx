import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';

type TableBodyProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableSectionElement> &
  CommonStyledProps;

const StyledTableBody = styled.tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  overflow-y: auto;
`;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ children, ...otherProps }, ref) {
    return (
      <StyledTableBody ref={ref} {...otherProps}>
        {children}
      </StyledTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

export { TableBody, TableBodyProps };
