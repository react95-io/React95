import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { padding } from "../common/theme.variables";

const StyledTd = styled.td`
  padding: 0 ${padding.sm};
`;
const TableDataCell = ({ className, children, style, ...otherProps }) => {
  return (
    <StyledTd className={className} style={style} {...otherProps}>
      {children}
    </StyledTd>
  );
};

TableDataCell.defaultProps = {};

TableDataCell.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableDataCell;
