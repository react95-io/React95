import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles } from '../common';
import { padding } from '../common/system';

// TODO move text down on Click

const StyledHeadCell = styled.th`
  position: relative;
  padding: 0 ${padding.sm};
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme }) => theme.material};
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
  &:active {
    &:before {
      ${createBorderStyles({ invert: true, windowBorders: true })}
      border-left: none;
      border-top: none;
      padding-top: 2px;
    }
  }
  cursor: default;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
  color: ${({ theme }) => theme.text};
  user-select: none;
`;

const TableHeadCell = ({ children, onClick, ...otherProps }) => (
  <StyledHeadCell onClick={onClick} onTouchStart={() => ''} {...otherProps}>
    {children}
  </StyledHeadCell>
);

TableHeadCell.defaultProps = {
  onClick: () => {},
  children: null
};

TableHeadCell.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node
};

export default TableHeadCell;
