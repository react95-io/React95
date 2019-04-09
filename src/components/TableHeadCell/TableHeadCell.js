import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createBorderStyles } from "../common";
import { padding } from "../common/system";

// ⭕⭕⭕⭕ move text down on Click

const StyledHeadCell = styled.th`
  ${createBorderStyles()}
  padding: 0 ${padding.sm};
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme }) => theme.material};
  &:active {
    ${createBorderStyles(true)}
    border-left: none;
    border-top: none;
  }
  border-left: none;
  border-top: none;
  cursor: default;
`;

const TableHeadCell = ({
  className,
  children,
  style,
  onClick,
  ...otherProps
}) => {
  return (
    <StyledHeadCell
      className={className}
      style={style}
      {...otherProps}
      onClick={onClick}
      onTouchStart={() => ""}
    >
      {children}
    </StyledHeadCell>
  );
};

TableHeadCell.defaultProps = {};

TableHeadCell.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableHeadCell;
