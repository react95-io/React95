import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { blockSizes, colors } from "../common/system";

const StyledTr = styled.tr`
  color: inherit;
  display: table-row;
  height: calc(${blockSizes.md} - 2px);
  line-height: calc(${blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme }) => theme.text};
  ${({ theme, head }) =>
    !head &&
    `&:hover {
      background: ${theme.hoverBackground};
      color: ${theme.textInvert}
    }`}
`;

const TableRow = ({ className, children, style, head, ...otherProps }) => {
  return (
    <StyledTr head={head} className={className} style={style} {...otherProps}>
      {children}
    </StyledTr>
  );
};

TableRow.defaultProps = {
  head: false
};

TableRow.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object,
  head: propTypes.bool
};

export default TableRow;
