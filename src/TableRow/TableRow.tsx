import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { blockSizes } from '../common/system';

type TableRowProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableRowElement>;

const StyledTr = styled.tr`
  color: inherit;
  display: table-row;
  height: calc(${blockSizes.md} - 2px);
  line-height: calc(${blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme }) => theme.canvasText};
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.canvasTextInvert};
  }
`;

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow({ children, ...otherProps }, ref) {
    return (
      <StyledTr ref={ref} {...otherProps}>
        {children}
      </StyledTr>
    );
  }
);

export { TableRow, TableRowProps };
