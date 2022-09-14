import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createDisabledTextStyles,
  styledDimension
} from '../common';
import { noOp } from '../common/utils';
import { CommonStyledProps } from '../types';

type TableHeadCellProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  sort?: 'asc' | 'desc' | null;
} & React.TdHTMLAttributes<HTMLTableCellElement> &
  CommonStyledProps;

const StyledHeadCell = styled.th<{ $disabled: boolean }>`
  position: relative;
  padding: 0 ${styledDimension(4)};
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme }) => theme.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${createBorderStyles()}

    border-left: none;
    border-top: none;
  }
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:active {
        &:before {
          ${createBorderStyles({ invert: true, style: 'window' })}
          border-left: none;
          border-top: none;
          padding-top: ${styledDimension(1)};
        }

        & > div {
          position: relative;
          top: ${styledDimension(1)};
        }
      }
    `}

  color: ${({ theme }) => theme.materialText};
  ${({ $disabled }) => $disabled && createDisabledTextStyles()}
  &:hover {
    color: ${({ theme }) => theme.materialText};
    ${({ $disabled }) => $disabled && createDisabledTextStyles()}
  }
`;

const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  function TableHeadCell(
    {
      disabled = false,
      children,
      onClick,
      onTouchStart = noOp,
      sort,
      ...otherProps
    },
    ref
  ) {
    const ariaSort =
      sort === 'asc' ? 'ascending' : sort === 'desc' ? 'descending' : undefined;
    return (
      <StyledHeadCell
        $disabled={disabled}
        aria-disabled={disabled}
        aria-sort={ariaSort}
        onClick={disabled ? undefined : onClick}
        onTouchStart={disabled ? undefined : onTouchStart}
        ref={ref}
        {...otherProps}
      >
        <div>{children}</div>
      </StyledHeadCell>
    );
  }
);

TableHeadCell.displayName = 'TableHeadCell';

export { TableHeadCell, TableHeadCellProps };
