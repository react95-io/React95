import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { createInnerBorderWithShadow } from '../common';
import { defaultTrue } from '../common/utils';
import { CommonStyledProps } from '../types';

type TableBodyProps = {
  children?: React.ReactNode;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLTableSectionElement> &
  CommonStyledProps;

const StyledTableBody = styled.tbody<Pick<TableBodyProps, 'shadow'>>`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${({ theme, shadow }) =>
    createInnerBorderWithShadow({
      theme,
      hasInsetShadow: defaultTrue(shadow ?? theme.shadow)
    })};
  overflow-y: auto;
`;

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ children, shadow = true, ...otherProps }, ref) {
    return (
      <StyledTableBody ref={ref} shadow={shadow} {...otherProps}>
        {children}
      </StyledTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

export { TableBody, TableBodyProps };
