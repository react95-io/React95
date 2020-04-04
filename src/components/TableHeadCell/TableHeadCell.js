import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createBorderStyles, createDisabledTextStyles } from '../common';
import { noOp } from '../common/utils';

const StyledHeadCell = styled.th`
position: relative;
padding: 0 8px;
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
  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      &:active {
        &:before {
          ${createBorderStyles({ invert: true, windowBorders: true })}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}


  color: ${({ theme }) => theme.text};
  ${({ isDisabled }) => isDisabled && createDisabledTextStyles()}
  &:hover {
    color: ${({ theme }) => theme.text};
    ${({ isDisabled }) => isDisabled && createDisabledTextStyles()}
  }

`;

const TableHeadCell = React.forwardRef(function TableHeadCell(props, ref) {
  const { disabled, children, onClick, ...otherProps } = props;

  return (
    <StyledHeadCell
      ref={ref}
      isDisabled={disabled}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...otherProps}
    >
      <div>{children}</div>
    </StyledHeadCell>
  );
});

TableHeadCell.defaultProps = {
  children: null,
  disabled: false,
  onClick: null,
  // onTouchStart below to enable :active style on iOS
  onTouchStart: noOp
};

TableHeadCell.propTypes = {
  children: propTypes.node,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  onTouchStart: propTypes.func
};

export default TableHeadCell;
